#!/usr/bin/env python3
"""Validate WordPress Playground blueprint JSON files."""

import argparse
import json
import sys
from pathlib import Path

import requests
from jsonschema import Draft7Validator, ValidationError

SCHEMA_URL = "https://playground.wordpress.net/blueprint-schema.json"
CACHE_FILE = Path(__file__).parent / ".blueprint-schema-cache.json"


def get_schema(refresh_cache=False):
    """Fetch schema from cache or URL."""
    if not refresh_cache and CACHE_FILE.exists():
        try:
            return json.loads(CACHE_FILE.read_text())
        except json.JSONDecodeError:
            pass  # Fall through to fetch from URL

    print(f"Fetching schema from {SCHEMA_URL}...")
    response = requests.get(SCHEMA_URL, timeout=30)
    response.raise_for_status()
    schema = response.json()
    CACHE_FILE.write_text(json.dumps(schema, indent=2))
    print(f"Schema cached to {CACHE_FILE}")
    return schema


def validate_file(filepath, schema):
    """Validate a single JSON file. Returns list of errors."""
    errors = []
    path = Path(filepath)

    if not path.exists():
        errors.append(f"File not found: {filepath}")
        return errors

    try:
        content = path.read_text()
    except OSError as e:
        errors.append(f"Could not read file: {e}")
        return errors

    try:
        data = json.loads(content)
    except json.JSONDecodeError as e:
        errors.append(f"Invalid JSON: {e}")
        return errors

    # Use Draft7Validator without schema validation (WordPress schema uses non-standard
    # deprecated field values that don't conform to JSON Schema meta-schema)
    validator = Draft7Validator(schema)
    for error in validator.iter_errors(data):
        error_path = " -> ".join(str(p) for p in error.absolute_path) if error.absolute_path else "(root)"
        errors.append(f"Validation error at {error_path}: {error.message}")

    return errors


def main():
    """CLI entry point."""
    parser = argparse.ArgumentParser(
        description="Validate WordPress Playground blueprint JSON files."
    )
    parser.add_argument(
        "files",
        nargs="+",
        help="JSON files to validate"
    )
    parser.add_argument(
        "--refresh-cache",
        action="store_true",
        help="Force refresh of the cached schema"
    )

    args = parser.parse_args()

    try:
        schema = get_schema(refresh_cache=args.refresh_cache)
    except requests.RequestException as e:
        print(f"Error fetching schema: {e}", file=sys.stderr)
        sys.exit(1)

    all_valid = True

    for filepath in args.files:
        print(f"\nValidating: {filepath}")
        errors = validate_file(filepath, schema)

        if errors:
            all_valid = False
            for error in errors:
                print(f"  ERROR: {error}")
        else:
            print(f"  OK: Valid blueprint")

    print()
    if all_valid:
        print("All files validated successfully.")
        sys.exit(0)
    else:
        print("Validation failed for one or more files.")
        sys.exit(1)


if __name__ == "__main__":
    main()

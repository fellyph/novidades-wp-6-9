import { en } from './i18n/en.js';
import { pt } from './i18n/pt.js';
import { es } from './i18n/es.js';

// Available languages
const languages = { en, pt, es };

// Content template with placeholders
const CONTENT_TEMPLATE = `<!-- wp:group {"align":"full","className":"scroll-y","style":{"spacing":{"padding":{"top":"var:preset|spacing|40","bottom":"var:preset|spacing|40","left":"var:preset|spacing|40","right":"var:preset|spacing|40"}}},"backgroundColor":"accent-1","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull scroll-y has-accent-1-background-color has-background" style="padding-top:var(--wp--preset--spacing--40);padding-right:var(--wp--preset--spacing--40);padding-bottom:var(--wp--preset--spacing--40);padding-left:var(--wp--preset--spacing--40)"><!-- wp:heading -->
<h2 class="wp-block-heading"><strong>{{TITLE_FOR_USERS}}:</strong></h2>
<!-- /wp:heading -->
<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>{{USERS_LI_NOTAS}}</li>
<!-- /wp:list-item -->
<!-- wp:list-item -->
<li>{{USERS_LI_DRAGDROP}}</li>
<!-- /wp:list-item -->
<!-- wp:list-item -->
<li>{{USERS_LI_COMMANDS}}</li>
<!-- /wp:list-item -->
<!-- wp:list-item -->
<li>{{USERS_LI_NEWBLOCKS}}</li>
<!-- /wp:list-item -->
<!-- wp:list-item -->
<li>{{USERS_LI_TEXTFIT}}</li>
<!-- /wp:list-item -->
<!-- wp:list-item -->
<li>{{USERS_LI_HIDEBLOCKS}}</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->
<!-- wp:paragraph -->
<p><a href="#for-developers">{{NAV_NEXT}} &gt; </a></p>
<!-- /wp:paragraph --></div>
<!-- /wp:group -->
<!-- wp:group {"align":"full","className":"scroll-y","style":{"elements":{"link":{"color":{"text":"var:preset|color|contrast"}}},"spacing":{"padding":{"top":"var:preset|spacing|50","bottom":"var:preset|spacing|50","left":"var:preset|spacing|50","right":"var:preset|spacing|50"}}},"backgroundColor":"base","textColor":"contrast","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull scroll-y has-contrast-color has-base-background-color has-text-color has-background has-link-color" id="for-developers" style="padding-top:var(--wp--preset--spacing--50);padding-right:var(--wp--preset--spacing--50);padding-bottom:var(--wp--preset--spacing--50);padding-left:var(--wp--preset--spacing--50)"><!-- wp:heading -->
<h2 class="wp-block-heading"><strong>{{DEV_OVERVIEW_TITLE}}</strong></h2>
<!-- /wp:heading -->
<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li>{{DEV_LI_INTERACTIVITY}}</li>
<!-- /wp:list-item -->
<!-- wp:list-item -->
<li>{{DEV_LI_ABILITIES}}</li>
<!-- /wp:list-item -->
<!-- wp:list-item -->
<li>{{DEV_LI_HTMLAPI}}</li>
<!-- /wp:list-item -->
<!-- wp:list-item -->
<li>{{DEV_LI_BLOCKPROCESSOR}}</li>
<!-- /wp:list-item -->
<!-- wp:list-item -->
<li>{{DEV_LI_PHP85}}</li>
<!-- /wp:list-item -->
<!-- wp:list-item -->
<li>{{DEV_LI_IEREMOVED}}</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->
<!-- wp:paragraph -->
<p><a href="#notes">{{NAV_NEXT}} &gt; </a></p>
<!-- /wp:paragraph --></div>
<!-- /wp:group -->
<!-- wp:heading {"textAlign":"center","fontSize":"xx-large"} -->
<h2 class="wp-block-heading has-text-align-center has-xx-large-font-size"><strong>{{CENTER_TITLE_USERS}}</strong></h2>
<!-- /wp:heading -->
<!-- wp:group {"align":"full","className":"scroll-y","style":{"elements":{"link":{"color":{"text":"var:preset|color|base"}}},"spacing":{"padding":{"top":"var:preset|spacing|40","bottom":"var:preset|spacing|40","left":"var:preset|spacing|40","right":"var:preset|spacing|40"},"margin":{"top":"var:preset|spacing|50"}}},"backgroundColor":"contrast","textColor":"base","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull scroll-y has-base-color has-contrast-background-color has-text-color has-background has-link-color" id="notes" style="margin-top:var(--wp--preset--spacing--50);padding-top:var(--wp--preset--spacing--40);padding-right:var(--wp--preset--spacing--40);padding-bottom:var(--wp--preset--spacing--40);padding-left:var(--wp--preset--spacing--40)"><!-- wp:heading -->
<h2 class="wp-block-heading"><strong>{{NOTAS_HEADING}}</strong></h2>
<!-- /wp:heading -->
<!-- wp:paragraph {"metadata":{"noteId":2}} -->
<p>{{NOTAS_PARAGRAPH}}</p>
<!-- /wp:paragraph -->
<!-- wp:paragraph -->
<p><a href="#drag-and-drop">{{NAV_NEXT}} &gt; </a></p>
<!-- /wp:paragraph --></div>
<!-- /wp:group -->
<!-- wp:group {"align":"full","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull" id="drag-and-drop"><!-- wp:heading -->
<h2 class="wp-block-heading">{{DRAGDROP_HEADING}}</h2>
<!-- /wp:heading -->
<!-- wp:paragraph -->
<p>{{DRAGDROP_PARAGRAPH}}</p>
<!-- /wp:paragraph -->
<!-- wp:gallery {"linkTo":"none"} -->
<figure class="wp-block-gallery has-nested-images columns-default is-cropped"><!-- wp:image {"id":12,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://raw.githubusercontent.com/fellyph/novidades-wp-6-9/refs/heads/main/src/imgs/image-4.webp" alt="" class="wp-image-12"/></figure>
<!-- /wp:image -->
<!-- wp:image {"id":9,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://raw.githubusercontent.com/fellyph/novidades-wp-6-9/refs/heads/main/src/imgs/image-3.webp" alt="" class="wp-image-9"/></figure>
<!-- /wp:image -->
<!-- wp:image {"id":10,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://raw.githubusercontent.com/fellyph/novidades-wp-6-9/refs/heads/main/src/imgs/image-2.webp" alt="" class="wp-image-10"/></figure>
<!-- /wp:image -->
<!-- wp:image {"id":11,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://raw.githubusercontent.com/fellyph/novidades-wp-6-9/refs/heads/main/src/imgs/image-1.webp" alt="" class="wp-image-11"/></figure>
<!-- /wp:image --></figure>
<!-- /wp:gallery -->
<!-- wp:paragraph -->
<p><a href="#commands">{{NAV_NEXT}} &gt; </a></p>
<!-- /wp:paragraph --></div>
<!-- /wp:group -->
<!-- wp:group {"align":"full","className":"scroll-y","style":{"spacing":{"padding":{"top":"var:preset|spacing|40","bottom":"var:preset|spacing|40","left":"var:preset|spacing|40","right":"var:preset|spacing|40"}}},"backgroundColor":"accent-1","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull scroll-y has-accent-1-background-color has-background" id="commands" style="padding-top:var(--wp--preset--spacing--40);padding-right:var(--wp--preset--spacing--40);padding-bottom:var(--wp--preset--spacing--40);padding-left:var(--wp--preset--spacing--40)"><!-- wp:heading -->
<h2 class="wp-block-heading">{{COMMANDS_HEADING}}</h2>
<!-- /wp:heading -->
<!-- wp:paragraph -->
<p>{{COMMANDS_PARAGRAPH}}</p>
<!-- /wp:paragraph -->
<!-- wp:image {"id":12,"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="https://raw.githubusercontent.com/fellyph/novidades-wp-6-9/refs/heads/main/src/imgs/command-palette.webp" alt="" class="wp-image-12"/></figure>
<!-- /wp:image -->
<!-- wp:paragraph -->
<p><a href="#hide">{{NAV_NEXT}} > </a></p>
<!-- /wp:paragraph --></div>
<!-- /wp:group -->
<!-- wp:group {"align":"full","className":"scroll-y","style":{"spacing":{"padding":{"top":"var:preset|spacing|40","bottom":"var:preset|spacing|40","left":"var:preset|spacing|40","right":"var:preset|spacing|40"}}},"layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull scroll-y" id="hide" style="padding-top:var(--wp--preset--spacing--40);padding-right:var(--wp--preset--spacing--40);padding-bottom:var(--wp--preset--spacing--40);padding-left:var(--wp--preset--spacing--40)"><!-- wp:heading -->
<h2 class="wp-block-heading">{{HIDE_BLOCKS_HEADING}}</h2>
<!-- /wp:heading -->
<!-- wp:paragraph -->
<p>{{HIDE_BLOCKS_PARAGRAPH}}</p>
<!-- /wp:paragraph -->
<!-- wp:image {"id":13,"sizeSlug":"full","linkDestination":"none","align":"center"} -->
<figure class="wp-block-image aligncenter size-full"><img src="https://raw.githubusercontent.com/fellyph/novidades-wp-6-9/refs/heads/main/src/imgs/hide-visilibility.webp" alt="" class="wp-image-13"/></figure>
<!-- /wp:image -->
<!-- wp:paragraph -->
<p><a href="#accordion">{{NAV_NEXT}} > </a></p>
<!-- /wp:paragraph -->
<!-- wp:image {"id":13,"sizeSlug":"large","linkDestination":"none","metadata":{"blockVisibility":false,"name":"hidden image"}} -->
<figure class="wp-block-image size-large"><img src="https://raw.githubusercontent.com/fellyph/novidades-wp-6-9/refs/heads/main/src/imgs/image-5.webp" alt="" class="wp-image-13"/></figure>
<!-- /wp:image --></div>
<!-- /wp:group -->
<!-- wp:group {"align":"full","className":"scroll-y","style":{"elements":{"link":{"color":{"text":"var:preset|color|base"}}},"spacing":{"padding":{"top":"var:preset|spacing|40","bottom":"var:preset|spacing|40","left":"var:preset|spacing|40","right":"var:preset|spacing|40"},"margin":{"bottom":"var:preset|spacing|50"}}},"backgroundColor":"contrast","textColor":"base","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull scroll-y has-base-color has-contrast-background-color has-text-color has-background has-link-color" id="accordion" style="margin-bottom:var(--wp--preset--spacing--50);padding-top:var(--wp--preset--spacing--40);padding-right:var(--wp--preset--spacing--40);padding-bottom:var(--wp--preset--spacing--40);padding-left:var(--wp--preset--spacing--40)"><!-- wp:heading -->
<h2 class="wp-block-heading">{{ACCORDION_HEADING}}</h2>
<!-- /wp:heading -->
<!-- wp:paragraph -->
<p>{{ACCORDION_PARAGRAPH}}</p>
<!-- /wp:paragraph -->
<!-- wp:accordion {"layout":{"type":"default"}} -->
<div role="group" class="wp-block-accordion"><!-- wp:accordion-item {"openByDefault":true} -->
<div class="wp-block-accordion-item is-open"><!-- wp:accordion-heading -->
<h3 class="wp-block-accordion-heading"><button class="wp-block-accordion-heading__toggle"><span class="wp-block-accordion-heading__toggle-title">{{ACCORDION_ITEM1_TITLE}}</span><span class="wp-block-accordion-heading__toggle-icon" aria-hidden="true">+</span></button></h3>
<!-- /wp:accordion-heading -->
<!-- wp:accordion-panel {"openByDefault":true} -->
<div role="region" class="wp-block-accordion-panel"><!-- wp:paragraph -->
<p>{{ACCORDION_ITEM_BODY}}</p>
<!-- /wp:paragraph --></div>
<!-- /wp:accordion-panel --></div>
<!-- /wp:accordion-item -->
<!-- wp:accordion-item -->
<div class="wp-block-accordion-item"><!-- wp:accordion-heading -->
<h3 class="wp-block-accordion-heading"><button class="wp-block-accordion-heading__toggle"><span class="wp-block-accordion-heading__toggle-title">{{ACCORDION_ITEM2_TITLE}}</span><span class="wp-block-accordion-heading__toggle-icon" aria-hidden="true">+</span></button></h3>
<!-- /wp:accordion-heading -->
<!-- wp:accordion-panel -->
<div role="region" class="wp-block-accordion-panel"><!-- wp:paragraph -->
<p>{{ACCORDION_ITEM_BODY}}</p>
<!-- /wp:paragraph --></div>
<!-- /wp:accordion-panel --></div>
<!-- /wp:accordion-item -->
<!-- wp:accordion-item -->
<div class="wp-block-accordion-item"><!-- wp:accordion-heading -->
<h3 class="wp-block-accordion-heading"><button class="wp-block-accordion-heading__toggle"><span class="wp-block-accordion-heading__toggle-title">{{ACCORDION_ITEM3_TITLE}}</span><span class="wp-block-accordion-heading__toggle-icon" aria-hidden="true">+</span></button></h3>
<!-- /wp:accordion-heading -->
<!-- wp:accordion-panel -->
<div role="region" class="wp-block-accordion-panel"><!-- wp:paragraph -->
<p>{{ACCORDION_ITEM_BODY}}</p>
<!-- /wp:paragraph --></div>
<!-- /wp:accordion-panel --></div>
<!-- /wp:accordion-item --></div>
<!-- /wp:accordion -->
<!-- wp:paragraph -->
<p><a href="#interactivity-api">{{NAV_NEXT}} &gt; </a></p>
<!-- /wp:paragraph --></div>
<!-- /wp:group -->
<!-- wp:heading {"fontSize":"xx-large"} -->
<h2 class="wp-block-heading has-xx-large-font-size"><strong>{{CENTER_TITLE_DEVELOPERS}}</strong></h2>
<!-- /wp:heading -->
<!-- wp:group {"align":"full","className":"scroll-y","style":{"spacing":{"padding":{"top":"var:preset|spacing|40","bottom":"var:preset|spacing|40","left":"var:preset|spacing|40","right":"var:preset|spacing|40"}}},"backgroundColor":"accent-1","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull scroll-y has-accent-1-background-color has-background" id="interactivity-api" style="padding-top:var(--wp--preset--spacing--40);padding-right:var(--wp--preset--spacing--40);padding-bottom:var(--wp--preset--spacing--40);padding-left:var(--wp--preset--spacing--40)"><!-- wp:heading -->
<h2 class="wp-block-heading"><strong>{{INTERACTIVITY_HEADING}}</strong></h2>
<!-- /wp:heading -->
<!-- wp:paragraph -->
<p>{{INTERACTIVITY_P1}}</p>
<!-- /wp:paragraph -->
<!-- wp:code -->
<pre class="wp-block-code"><code>&lt;div
data-wp-watch---my-unique-id="callbacks.firstWatch"
data-wp-watch---another-id="callbacks.secondWatch"
&gt;&lt;/div&gt;</code></pre>
<!-- /wp:code -->
<!-- wp:paragraph -->
<p>{{INTERACTIVITY_P2}}</p>
<!-- /wp:paragraph -->
<!-- wp:paragraph -->
<p><a href="#abilities-api">{{NAV_NEXT}} &gt; </a></p>
<!-- /wp:paragraph --></div>
<!-- /wp:group -->
<!-- wp:group {"align":"full","className":"scroll-y","style":{"spacing":{"padding":{"top":"var:preset|spacing|40","bottom":"var:preset|spacing|40","left":"var:preset|spacing|40","right":"var:preset|spacing|40"}}},"layout":{"type":"constrained","contentSize":"1200px"}} -->
<div class="wp-block-group alignfull scroll-y" id="abilities-api" style="padding-top:var(--wp--preset--spacing--40);padding-right:var(--wp--preset--spacing--40);padding-bottom:var(--wp--preset--spacing--40);padding-left:var(--wp--preset--spacing--40)"><!-- wp:heading -->
<h2 class="wp-block-heading">{{ABILITIES_HEADING}}</h2>
<!-- /wp:heading -->
<!-- wp:paragraph -->
<p>{{ABILITIES_P1}}</p>
<!-- /wp:paragraph -->
<!-- wp:paragraph -->
<p>{{ABILITIES_P2}}</p>
<!-- /wp:paragraph -->
<!-- wp:code -->
<pre class="wp-block-code"><code>&lt;?php
add_action( 'wp_abilities_api_categories_init', 'my_plugin_register_ability_categories' );
/**
* Register ability categories.
*/
function my_plugin_register_ability_categories() {
wp_register_ability_category(
'content-management',
array(
'label'       =&gt; __( 'Content Management', 'my-plugin' ),
'description' =&gt; __( 'Abilities for managing and organizing content.', 'my-plugin' ),
)
);
}
add_action( 'wp_abilities_api_init', 'my_plugin_register_abilities' );
/**
* Register abilities.
*/
function my_plugin_register_abilities() {
wp_register_ability(
'my-plugin/get-post-count',
array(
'label'              =&gt; __( 'Get Post Count', 'my-plugin' ),
'description'        =&gt; __( 'Retrieves the total number of published posts.', 'my-plugin' ),
'category'           =&gt; 'content-management',
'input_schema'       =&gt; array(
'type'       =&gt; 'string',
'description' =&gt; __( 'The post type to count.', 'my-plugin' ),
'default'     =&gt; 'post',
),
'output_schema'      =&gt; array(
'type'       =&gt; 'integer',
'description' =&gt; __( 'The number of published posts.', 'my-plugin' ),
),
'execute_callback'   =&gt; 'my_plugin_get_post_count',
'permission_callback' =&gt; function() {
return current_user_can( 'read' );
},
)
);
}
/**
* Execute callback for get-post-count ability.
*/
function my_plugin_get_post_count( $input ) {
$post_type = $input ?? 'post';
$count = wp_count_posts( $post_type );
return (int) $count-&gt;publish;
}</code></pre>
<!-- /wp:code -->
<!-- wp:paragraph -->
<p><a href="#html-api">{{NAV_NEXT}} &gt; </a></p>
<!-- /wp:paragraph --></div>
<!-- /wp:group -->
<!-- wp:group {"align":"full","className":"scroll-y","style":{"elements":{"link":{"color":{"text":"var:preset|color|base"}}},"spacing":{"padding":{"top":"var:preset|spacing|40","bottom":"var:preset|spacing|40","left":"var:preset|spacing|40","right":"var:preset|spacing|40"}}},"backgroundColor":"contrast","textColor":"base","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull scroll-y has-base-color has-contrast-background-color has-text-color has-background has-link-color" id="html-api" style="padding-top:var(--wp--preset--spacing--40);padding-right:var(--wp--preset--spacing--40);padding-bottom:var(--wp--preset--spacing--40);padding-left:var(--wp--preset--spacing--40)"><!-- wp:heading -->
<h2 class="wp-block-heading">{{HTML_API_HEADING}}</h2>
<!-- /wp:heading -->
<!-- wp:paragraph -->
<p>{{HTML_API_PARAGRAPH}}</p>
<!-- /wp:paragraph -->
<!-- wp:code -->
<pre class="wp-block-code"><code>$html = '5 &lt; 8 &amp; &lt;tag a=v a="dup"id=di&gt;&lt;/3&gt;bl&amp;#97rg';
echo WP_HTML_Processor::normalize( $html );
// 5 &amp;lt; 8 &amp;amp; &lt;tag a="v" id="di"&gt;&lt;!--3--&gt;blarg&lt;/tag&gt;</code></pre>
<!-- /wp:code --></div>
<!-- /wp:group -->
<!-- wp:heading -->
<h2 class="wp-block-heading">{{IE_REMOVED_HEADING}}</h2>
<!-- /wp:heading -->
<!-- wp:paragraph -->
<p>{{IE_REMOVED_PARAGRAPH}}</p>
<!-- /wp:paragraph -->
<!-- wp:heading -->
<h2 class="wp-block-heading">{{PHP85_HEADING}}</h2>
<!-- /wp:heading -->
<!-- wp:paragraph -->
<p>{{PHP85_PARAGRAPH}}</p>
<!-- /wp:paragraph -->`;

// PHP code for post creation
const PHP_CODE = `<?php
require_once '/wordpress/wp-load.php';

// Enqueue custom style
add_action('wp_enqueue_scripts', function() {
	wp_enqueue_style(
		'custom-style',
		'https://raw.githubusercontent.com/fellyph/novidades-wp-6-9/refs/heads/main/src/css/style.css',
		false
	);
});

// Text variables (env) – same technique as MAIN_POST_TITLE/TITLE_FOR_DEVELOERS/TITLE_FOR_USERS
$main_post_title = getenv('MAIN_POST_TITLE');

// Template + replacements
$template = getenv('CONTENT_TEMPLATE');
$replacements = [
	'{{TITLE_FOR_USERS}}' => getenv('TITLE_FOR_USERS'),
	'{{TITLE_FOR_DEVELOERS}}' => getenv('TITLE_FOR_DEVELOERS'),
	'{{USERS_LI_NOTAS}}' => getenv('USERS_LI_NOTAS'),
	'{{USERS_LI_DRAGDROP}}' => getenv('USERS_LI_DRAGDROP'),
	'{{USERS_LI_COMMANDS}}' => getenv('USERS_LI_COMMANDS'),
	'{{USERS_LI_NEWBLOCKS}}' => getenv('USERS_LI_NEWBLOCKS'),
	'{{USERS_LI_TEXTFIT}}' => getenv('USERS_LI_TEXTFIT'),
	'{{USERS_LI_HIDEBLOCKS}}' => getenv('USERS_LI_HIDEBLOCKS'),
	'{{DEV_OVERVIEW_TITLE}}' => getenv('DEV_OVERVIEW_TITLE'),
	'{{DEV_LI_INTERACTIVITY}}' => getenv('DEV_LI_INTERACTIVITY'),
	'{{DEV_LI_ABILITIES}}' => getenv('DEV_LI_ABILITIES'),
	'{{DEV_LI_HTMLAPI}}' => getenv('DEV_LI_HTMLAPI'),
	'{{DEV_LI_BLOCKPROCESSOR}}' => getenv('DEV_LI_BLOCKPROCESSOR'),
	'{{DEV_LI_PHP85}}' => getenv('DEV_LI_PHP85'),
	'{{DEV_LI_IEREMOVED}}' => getenv('DEV_LI_IEREMOVED'),
	'{{CENTER_TITLE_USERS}}' => getenv('CENTER_TITLE_USERS'),
	'{{NOTAS_HEADING}}' => getenv('NOTAS_HEADING'),
	'{{NOTAS_PARAGRAPH}}' => getenv('NOTAS_PARAGRAPH'),
	'{{DRAGDROP_HEADING}}' => getenv('DRAGDROP_HEADING'),
	'{{DRAGDROP_PARAGRAPH}}' => getenv('DRAGDROP_PARAGRAPH'),
	'{{COMMANDS_HEADING}}' => getenv('COMMANDS_HEADING'),
	'{{COMMANDS_PARAGRAPH}}' => getenv('COMMANDS_PARAGRAPH'),
	'{{HIDE_BLOCKS_HEADING}}' => getenv('HIDE_BLOCKS_HEADING'),
	'{{HIDE_BLOCKS_PARAGRAPH}}' => getenv('HIDE_BLOCKS_PARAGRAPH'),
	'{{ACCORDION_HEADING}}' => getenv('ACCORDION_HEADING'),
	'{{ACCORDION_PARAGRAPH}}' => getenv('ACCORDION_PARAGRAPH'),
	'{{ACCORDION_ITEM1_TITLE}}' => getenv('ACCORDION_ITEM1_TITLE'),
	'{{ACCORDION_ITEM2_TITLE}}' => getenv('ACCORDION_ITEM2_TITLE'),
	'{{ACCORDION_ITEM3_TITLE}}' => getenv('ACCORDION_ITEM3_TITLE'),
	'{{ACCORDION_ITEM_BODY}}' => getenv('ACCORDION_ITEM_BODY'),
	'{{CENTER_TITLE_DEVELOPERS}}' => getenv('CENTER_TITLE_DEVELOPERS'),
	'{{INTERACTIVITY_HEADING}}' => getenv('INTERACTIVITY_HEADING'),
	'{{INTERACTIVITY_P1}}' => getenv('INTERACTIVITY_P1'),
	'{{INTERACTIVITY_P2}}' => getenv('INTERACTIVITY_P2'),
	'{{ABILITIES_HEADING}}' => getenv('ABILITIES_HEADING'),
	'{{ABILITIES_P1}}' => getenv('ABILITIES_P1'),
	'{{ABILITIES_P2}}' => getenv('ABILITIES_P2'),
	'{{HTML_API_HEADING}}' => getenv('HTML_API_HEADING'),
	'{{HTML_API_PARAGRAPH}}' => getenv('HTML_API_PARAGRAPH'),
	'{{IE_REMOVED_HEADING}}' => getenv('IE_REMOVED_HEADING'),
	'{{IE_REMOVED_PARAGRAPH}}' => getenv('IE_REMOVED_PARAGRAPH'),
	'{{PHP85_HEADING}}' => getenv('PHP85_HEADING'),
	'{{PHP85_PARAGRAPH}}' => getenv('PHP85_PARAGRAPH'),
	'{{NAV_NEXT}}' => getenv('NAV_NEXT'),
];

$content = strtr($template, $replacements);

$page_args = [
	'post_type' => 'post',
	'post_status' => 'publish',
	'post_title' => $main_post_title,
	'post_name' => 'wp-6-9',
	'post_content' => $content,
];

$page_id = wp_insert_post($page_args, true);
if (is_wp_error($page_id)) {
	error_log('addPost error: ' . $page_id->get_error_message());
}
?>`;

/**
 * Generate blueprint JSON based on language
 * @param {Object} lang - Language object with translations
 * @returns {Object} - Blueprint JSON object
 */
function generateBlueprint(lang) {
  return {
    $schema: "https://playground.wordpress.net/blueprint-schema.json",
    meta: {
      title: lang.meta.title,
      author: lang.meta.author,
      description: lang.meta.description
    },
    siteOptions: {
      blogname: lang.siteOptions.blogname,
      description: lang.siteOptions.description,
      permalink_structure: "/%postname%/"
    },
    landingPage: "/wp-6-9/",
    steps: [
      {
        step: "resetData"
      },
      {
        step: "login",
        username: "admin",
        password: "word"
      },
      {
        step: "runPHPWithOptions",
        options: {
          code: PHP_CODE,
          env: {
            MAIN_POST_TITLE: lang.strings.MAIN_POST_TITLE,
            TITLE_FOR_DEVELOERS: lang.strings.TITLE_FOR_DEVELOERS,
            TITLE_FOR_USERS: lang.strings.TITLE_FOR_USERS,
            DEV_OVERVIEW_TITLE: lang.strings.DEV_OVERVIEW_TITLE,
            CENTER_TITLE_USERS: lang.strings.CENTER_TITLE_USERS,
            CENTER_TITLE_DEVELOPERS: lang.strings.CENTER_TITLE_DEVELOPERS,
            USERS_LI_NOTAS: lang.strings.USERS_LI_NOTAS,
            USERS_LI_DRAGDROP: lang.strings.USERS_LI_DRAGDROP,
            USERS_LI_COMMANDS: lang.strings.USERS_LI_COMMANDS,
            USERS_LI_NEWBLOCKS: lang.strings.USERS_LI_NEWBLOCKS,
            USERS_LI_TEXTFIT: lang.strings.USERS_LI_TEXTFIT,
            USERS_LI_HIDEBLOCKS: lang.strings.USERS_LI_HIDEBLOCKS,
            DEV_LI_INTERACTIVITY: lang.strings.DEV_LI_INTERACTIVITY,
            DEV_LI_ABILITIES: lang.strings.DEV_LI_ABILITIES,
            DEV_LI_HTMLAPI: lang.strings.DEV_LI_HTMLAPI,
            DEV_LI_BLOCKPROCESSOR: lang.strings.DEV_LI_BLOCKPROCESSOR,
            DEV_LI_PHP85: lang.strings.DEV_LI_PHP85,
            DEV_LI_IEREMOVED: lang.strings.DEV_LI_IEREMOVED,
            NOTAS_HEADING: lang.strings.NOTAS_HEADING,
            NOTAS_PARAGRAPH: lang.strings.NOTAS_PARAGRAPH,
            DRAGDROP_HEADING: lang.strings.DRAGDROP_HEADING,
            DRAGDROP_PARAGRAPH: lang.strings.DRAGDROP_PARAGRAPH,
            COMMANDS_HEADING: lang.strings.COMMANDS_HEADING,
            COMMANDS_PARAGRAPH: lang.strings.COMMANDS_PARAGRAPH,
            HIDE_BLOCKS_HEADING: lang.strings.HIDE_BLOCKS_HEADING,
            HIDE_BLOCKS_PARAGRAPH: lang.strings.HIDE_BLOCKS_PARAGRAPH,
            ACCORDION_HEADING: lang.strings.ACCORDION_HEADING,
            ACCORDION_PARAGRAPH: lang.strings.ACCORDION_PARAGRAPH,
            ACCORDION_ITEM1_TITLE: lang.strings.ACCORDION_ITEM1_TITLE,
            ACCORDION_ITEM2_TITLE: lang.strings.ACCORDION_ITEM2_TITLE,
            ACCORDION_ITEM3_TITLE: lang.strings.ACCORDION_ITEM3_TITLE,
            ACCORDION_ITEM_BODY: lang.strings.ACCORDION_ITEM_BODY,
            INTERACTIVITY_HEADING: lang.strings.INTERACTIVITY_HEADING,
            INTERACTIVITY_P1: lang.strings.INTERACTIVITY_P1,
            INTERACTIVITY_P2: lang.strings.INTERACTIVITY_P2,
            ABILITIES_HEADING: lang.strings.ABILITIES_HEADING,
            ABILITIES_P1: lang.strings.ABILITIES_P1,
            ABILITIES_P2: lang.strings.ABILITIES_P2,
            HTML_API_HEADING: lang.strings.HTML_API_HEADING,
            HTML_API_PARAGRAPH: lang.strings.HTML_API_PARAGRAPH,
            IE_REMOVED_HEADING: lang.strings.IE_REMOVED_HEADING,
            IE_REMOVED_PARAGRAPH: lang.strings.IE_REMOVED_PARAGRAPH,
            PHP85_HEADING: lang.strings.PHP85_HEADING,
            PHP85_PARAGRAPH: lang.strings.PHP85_PARAGRAPH,
            NAV_NEXT: lang.strings.NAV_NEXT,
            CONTENT_TEMPLATE: CONTENT_TEMPLATE
          }
        }
      }
    ]
  };
}

export default {
  async fetch(request, env, ctx) {
    // Parse the URL to get the lang parameter
    const url = new URL(request.url);
    const langParam = url.searchParams.get("lang") || "en";

    // Get the language object, default to English if not found
    const selectedLang = languages[langParam] || languages.en;

    // Generate the blueprint
    const blueprint = generateBlueprint(selectedLang);

    // Return the JSON with proper headers
    return new Response(JSON.stringify(blueprint, null, 2), {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Cache-Control": "public, max-age=3600",
      },
    });
  },
};

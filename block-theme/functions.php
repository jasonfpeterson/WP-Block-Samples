<?php

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_custom_blocks_block_init() {
	register_block_type( __DIR__ . '/blocks/build/custom-block-static' );
	register_block_type( __DIR__ . '/blocks/build/custom-block-dynamic' );
	register_block_type( __DIR__ . '/blocks/build/simple-block-input' );
}
add_action( 'init', 'create_block_custom_blocks_block_init' );


/**
 * Add a custom block category.
 *
 * @param array  $block_categories The array of existing block categories.
 * @param object $block_editor_context The current block editor context.
 *
 * @return array The modified array of block categories.
 */
function my_custom_block_category( $block_categories, $block_editor_context ) {
    if ( ! is_admin() ) {
        return $block_categories;
    }

    // Custom Category
    $custom_category = array(
        'slug'  => 'custom',
        'title' => "Jason's Custom Blocks",
    );

    array_push( $block_categories, $custom_category );

    return $block_categories;
}
add_filter( 'block_categories_all', 'my_custom_block_category', 10, 2 );
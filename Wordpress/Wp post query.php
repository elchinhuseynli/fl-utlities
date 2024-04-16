<?php

$args = array(
    'post_type' => 'post',
    'posts_per_page' => 6,
);

$query = new WP_Query( $args );

if ( $query->have_posts() ) {
    // Start the Loop
    while ( $query->have_posts() ) {
        $query->the_post();
        
        // The loop content goes here.
    }

    // Reset Post Data (important!)
    wp_reset_postdata();
} else {
    // No posts found
    echo 'Nebyly nalezeny žádné výsledky';
}

?>
<?php
function reading_time()
{
  global $post;  // Declare $post as a global variable

  $content = get_post_field('post_content', $post->ID);
  $word_count = str_word_count(strip_tags($content));
  $readingtime = ceil($word_count / 200);

  if ($readingtime == 1) {
    $timer = " minuta";
  } elseif ($readingtime >= 2 && $readingtime <= 4) {
    $timer = " minuty";
  } else {
    $timer = " minut";
  }
  $totalreadingtime = $readingtime . $timer;

  return $totalreadingtime;
}

?>
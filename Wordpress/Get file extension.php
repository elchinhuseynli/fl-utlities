<?php
$file_url = get_field('file');
$file_extension = pathinfo($file_url, PATHINFO_EXTENSION);
echo '.' . $file_extension;

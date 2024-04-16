<?php
$file_url = get_field('file');
$file_path = parse_url($file_url, PHP_URL_PATH);
$file_size = filesize($_SERVER['DOCUMENT_ROOT'] . $file_path);

$file_size_kb = round($file_size / 1024, 2);
echo $file_size_kb . ' KB';

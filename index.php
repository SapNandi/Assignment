<!-- Posting the data -->
<?php
$is_submiteed = "not filled";
$name = $_POST["name"];
$email = $_POST["email"];
$phone = $_POST["phone"];
$desc = $_POST["desc"];
if ($name) {
    $is_submiteed = "filled";
    echo $is_submiteed;
} else {
    echo $is_submiteed;
}
// Relocating to the original page after posting data
header("location: http://localhost/Interview/index.html");
?>
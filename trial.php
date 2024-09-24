<?php
if (isset($_POST['input'])) {
    $input = $_POST['input'];
    $hashedString = hash('sha256', $input);
    echo json_encode(['hash' => $hashedString]);
} else {
    echo json_encode(['error' => 'No input provided']);
}
?>

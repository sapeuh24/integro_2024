<?php

function is_palindrome($input)
{
    $normalized = iconv('UTF-8', 'ASCII//TRANSLIT', $input);
    $cleaned = preg_replace("/[^a-z0-9]/i", "", strtolower($normalized));
    $reversed = strrev($cleaned);
    return $cleaned == $reversed;
}

$input = "Allí por la tropa portado, traído a ese paraje de maniobras, una tipa como capitán usar boina me dejara, pese a odiar toda tropa por tal ropilla";
var_dump(is_palindrome($input));
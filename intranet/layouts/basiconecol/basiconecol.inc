<?php

// Plugin definition
$plugin = array(
  'title' => t('Basic One column'),
  'category' => t('Columns: 1'),
  'icon' => 'basiconecol.png',
  'theme' => 'panels_basiconecol',
  'regions' => array(
    'top' => t('Top content'),
    'middle' => t('Middle content'),
    'middle_full' => t('Middle full content'),
    'bottom' => t('Bottom content'),
  ),
);

<?php

// Plugin definition
$plugin = array(
  'title' => t('Basic three column'),
  'category' => t('Columns: 3'),
  'icon' => 'basicthreecol.png',
  'theme' => 'panels_basicthreecol',
  'regions' => array(
    'left' => t('Left content'),
    'middle' => t('Middle content'),
    'right' => t('Right content'),
  ),
);

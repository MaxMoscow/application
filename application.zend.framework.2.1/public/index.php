<?php

use Zend\Mvc\Application;
use Zend\Stdlib\ArrayUtils;

    chdir ( '..' );
    include 'vendor/autoload.php';

    $appConfig = require 'config/application.config.php';
    $appConfig = ArrayUtils::merge ( $appConfig, require 'config/development.config.php');

    $app = Application::init ( $appConfig );
    $app->run();

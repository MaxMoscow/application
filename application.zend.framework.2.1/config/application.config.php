<?php

    return [ 'modules'                  => [ 'ZendDeveloperTools' ],
    //                                     require 'config/modules.config.php',
             'module_listener_options'  => [
                                           'module_paths'      => [ './module', './vendor' ],
                                           'config_glob_paths' => [ 'config/autoload/{{,*.}global,{,*.}local}.php' ],
//             'config_cache_enabled'     => true,
//             'config_cache_key'         => 'application.config.cache',
//             'module_map_cache_enabled' => true,
//             'module_map_cache_key'     => 'application.module.cache',
             'cache_dir'                => 'data/cache/',
           ],
    //       'service_listener_options' => [
    //     [
    //         'service_manager'        => $stringServiceManagerName,
    //         'config_key'             => $stringConfigKey,
    //         'interface'              => $stringOptionalInterface,
    //         'method'                 => $stringRequiredMethodName
    //     ],
    // ],
           'service_manager'          => [],
           ];

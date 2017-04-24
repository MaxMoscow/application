
    return [
           'modules'                  => [ 'Zend\Router', 'Zend\Validator', 'Application' ],
           'module_listener_options'  => [
                                         'module_paths'      => [ './module', './vendor' ],
                                         'config_glob_paths' => [ realpath(__DIR__) . '/autoload/{{,*.}global,{,*.}local}.php'  ],
           'check_dependencies'       => false,
           'config_cache_enabled'     => false,
           'config_cache_key'         => 'application.config.cache',
           'module_map_cache_enabled' => false,
           'module_map_cache_key'     => 'application.module.cache',
           'cache_dir'                => 'data/cache/',
           ],
           'service_listener_options' => [
//                                       [
//                                       'service_manager'   => $stringServiceManagerName,
//                                       'config_key'        => $stringConfigKey,
//                                       'interface'         => $stringOptionalInterface,
//                                       'method'            => $stringRequiredMethodName,
//                                       ],
                                         ],
           'service_manager'          => [],
];

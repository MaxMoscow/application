<?php
//
////////////////////////////////////////////////////////////////////////////////
//                                                                            //
//  @Version: 2.0                                                             //
//  @Author:  ruakum3                                                         //
//  @Package: apache                                                          //
//  @Purpose: main application file                                           //
//  @Usage:                                                                   //
//                                                                            //
////////////////////////////////////////////////////////////////////////////////
//
              chdir   ( '..'     );
    $Loader = GetEnv  ( 'LOADER' );
    $Config = GetEnv  ( 'CONFIG' );
              require ( $Loader  );
    $Config = require ( $Config  );
    try   {
          $Application =  Zend\Mvc\Application::init ( $Config );
          $Application -> run();
          exit ( 0 );
          }
    catch ( Exception $e )
          {
          $Config['DEBUG'] && print $e->getMessage();
          exit ( -1 );
          };

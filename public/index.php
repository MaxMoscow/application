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
    $Config = GetEnv  ( 'CONFIG' );
    $Loader = GetEnv  ( 'LOADER' );
    $Config = require ( $Config  );
              require ( $Loader  );
    try   {
          $Application =  Zend\Mvc\Application::init ( $Config );
          $Application -> run();
          exit ( 0 );
          }
    catch ( Exception $e )
          {
          $Message = $e->getMessage();
          $Config['DEBUG'] && print $Message;
          exit ( -1 );
          };

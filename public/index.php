<?php
//
////////////////////////////////////////////////////////////////////////////////
//                                                                            //
//  @Version: 2.0                                                             //
//  @Author:  ruakum3                                                         //
//  @Package: BlackBox                                                        //
//  @Server:  s-msk-onyx-ss27                                                 //
//  @User:    apache                                                          //
//  @Purpose: main application file                                           //
//                                                                            //
////////////////////////////////////////////////////////////////////////////////
//
                       ChDir  ( '..'       );
    $DEBUG   =         GetEnv ( 'DEBUG'    );
    $Section =         GetEnv ( 'HOSTNAME' );
    $Config  = require GetEnv ( 'CONFIG'   );
    $Loader  = require GetEnv ( 'LOADER'   );
    try   {
//        $Application =     Zend\Mvc\Application::init ( $Config );
          $Application = new Zend_Application ( $Section, $Config );
          Method_Exists($Application,'bootstrap') && $Application->bootstrap();
          $Application->run();
          }
    catch ( Exception $Error )
          {
          $Message = pReg_Replace ( '/\n/', '<br>', $Error->getMessage() );
          $DEBUG  && print $Message;
          };
    exit;

#!/usr/bin/env bash

if [ "$ENV" == "production"  ];
then
  echo "<============== START [ PRODUCTION ] --> Switching to LOGO and FIREBASE environment ==============>"
  
  # copy the firebase config file
  # yes | cp -rf "configs/production/google-services.json" android/app
  # yes | cp -rf "configs/production/GoogleService-Info.plist" ios/appfolder

  # copy logo 
  yes | cp -rf "configs/production/logo/res/" android/app/src/main/res
  yes | cp -rf "configs/production/logo/AppIcon.appiconset/" ios/EduOBL/Images.xcassets/AppIcon.appiconset

  echo "<============== END  [ PRODUCTION ] --> Switching Successful ==============>"
elif [ "$ENV" == "development" ]
then
    
  echo "<============== START [ DEVELOPMENT ] -->  Switching to LOGO and FIREBASE environment ==============>"

  # copy the firebase config file
  # yes | cp -rf "configs/development/google-services.json" android/app
  # yes | cp -rf "configs/development/GoogleService-Info.plist" ios/appfolder

  # copy logo 
  yes | cp -rf "configs/development/logo/res/" android/app/src/main/res
  yes | cp -rf "configs/development/logo/AppIcon.appiconset/" ios/EduOBL/Images.xcassets/AppIcon.appiconset

  echo "<============== END [ DEVELOPMENT ] -->  Switching Successful ==============>"

else
    echo "<============== ERROR ->  Not Found ENV..... ==============>"
fi

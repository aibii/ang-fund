import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

  //this file is loaded by webpack via the angular.json file

platformBrowserDynamic().bootstrapModule(AppModule) //then main.ts loads our app.module
  .catch(err => console.error(err));

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

declare var FastClick: any;
FastClick.attach(document.body);

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

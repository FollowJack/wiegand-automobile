import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import {AppModule} from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule);

// Old style
/*import { bootstrap }    from 'angular2/platform/browser';
import { AppComponent } from './app.component';

bootstrap(AppComponent);*/
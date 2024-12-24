import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

// Import Web Components
import 'my-lit-components';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

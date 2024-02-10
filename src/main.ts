import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

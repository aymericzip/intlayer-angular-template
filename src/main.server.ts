import 'zone.js/node';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';
import {bootstrapApplication, type BootstrapContext} from '@angular/platform-browser';

const bootstrap = (context: BootstrapContext) => bootstrapApplication(AppComponent, config, context);
export default bootstrap;
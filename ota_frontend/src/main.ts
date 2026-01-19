import { bootstrapApplication } from '@angular/platform-browser';
import { init } from '@module-federation/enhanced/runtime';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

/**
 * Initialize Module Federation runtime.
 *
 * Note: Remote entries must be configured here (or registered later) so that
 * `loadRemote('<remote>/<expose>')` can resolve them during prerender/SSR.
 *
 * If your remotes are served from different URLs per environment, replace the
 * hardcoded URLs with environment-based configuration.
 */
init({
  name: 'host',
  remotes: [
    // TODO: Update these URLs to your actual remoteEntry URLs.
    { name: 'login', entry: 'http://localhost:4201/remoteEntry.js' },
    { name: 'te-user', entry: 'http://localhost:4202/remoteEntry.js' },
    { name: 'te-ota', entry: 'http://localhost:4203/remoteEntry.js' },
  ],
});

bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));

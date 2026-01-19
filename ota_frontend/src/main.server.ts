import { bootstrapApplication } from '@angular/platform-browser';
import { init } from '@module-federation/enhanced/runtime';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';

/**
 * Initialize Module Federation runtime for SSR/prerender.
 *
 * This must run on the server entrypoint as well, otherwise prerendering routes
 * that call `loadRemote()` will fail with: `[ Federation Runtime ]: Please call init first`.
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

const bootstrap = () => bootstrapApplication(AppComponent, config);

export default bootstrap;

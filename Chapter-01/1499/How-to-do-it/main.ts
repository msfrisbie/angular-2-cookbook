import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {Ng1AppModule} from './app/ng1.module';
import {Ng2AppModule} from './app/ng2.module';

platformBrowserDynamic()
  .bootstrapModule(Ng2AppModule)
  .then(ref => {
    ref.instance.upgrade.bootstrap(document.body, [Ng1AppModule.name]);
  });

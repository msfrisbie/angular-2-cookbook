// import {Component} from '@angular/core';

// import {NgModule} from '@angular/core';

import {AppModule} from './app/app.module';
// import {WorkerAppModule} from '@angular/platform-webworker';
 import {platformWorkerAppDynamic} from '@angular/platform-webworker-dynamic';
// import {ArticleComponent} from './article.component';

// @Component({
//   selector: 'app',
//   template:'<div>Web worker loaded</div>'
// })
// // class Worker {}

// @NgModule({
//   imports: [WorkerAppModule], 
//   bootstrap: [ArticleComponent], 
//   declarations: [ArticleComponent]
// })
// class WorkerModule {}

platformWorkerAppDynamic().bootstrapModule(AppModule);

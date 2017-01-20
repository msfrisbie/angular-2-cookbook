import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import {RootComponent} from './root.component';
import {DefaultComponent} from './default.component';
import {ProfileComponent} from './profile.component';
import {LoginComponent} from './login.component';
import {LogoutComponent} from './logout.component';
import {AuthService} from './auth.service';
import {AuthGuardService, LogoutGuardService} 
  from './route-guards.service';

const appRoutes:Routes = [
  { 
    path: 'login', 
    component: LoginComponent
  },
  { 
    path: 'logout', 
    component: LogoutComponent,
    canActivate: [LogoutGuardService]
  },
  { 
    path: 'profile', 
    component: ProfileComponent, 
    canActivate: [AuthGuardService] 
  },
  { 
    path: '**', 
    component: DefaultComponent 
  }
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    LoginComponent,
    LogoutComponent,
    DefaultComponent,
    ProfileComponent,
    RootComponent
  ],
  providers: [
    AuthService,
    AuthGuardService,
    LogoutGuardService
  ],
  bootstrap: [
    RootComponent
  ]
})
export class AppModule {}

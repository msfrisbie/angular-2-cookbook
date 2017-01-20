import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AuthService {
  private authManager_:BehaviorSubject<AuthState>
    = new BehaviorSubject(AuthState.LoggedOut);
  private authState_:AuthState;
  authChange:Observable<AuthState>;

  constructor() {
    this.authChange = this.authManager_.asObservable();
  }
  login():void {
    this.setAuthState_(AuthState.LoggedIn);
  }
  logout():void {
    this.setAuthState_(AuthState.LoggedOut);
  }
  emitAuthState():void {
    this.authManager_.next(this.authState_);
  }
  private setAuthState_(newAuthState:AuthState):void {
    this.authState_ = newAuthState;
    this.emitAuthState();
  }
}

export const enum AuthState {
	LoggedIn,
	LoggedOut
}

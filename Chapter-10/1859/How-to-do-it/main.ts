import {PlatformRef} from '@angular/core';
import {UiArguments, FnArg, PRIMITIVE, ClientMessageBrokerFactory} from '@angular/platform-webworker';
import {bootstrapWorkerUi} from "@angular/platform-webworker";

bootstrapWorkerUi(window.location.href + "loader.js");


import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { PreloadAllModules, provideRouter, withComponentInputBinding, withPreloading } from '@angular/router';
import { routes } from './app.routes';
import { LoggerService } from './services/logger.Service';
import { provideToastr } from 'ngx-toastr';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './auth/interceptors/auth-interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes, withComponentInputBinding(), withPreloading(PreloadAllModules)),
    provideToastr(),
    provideHttpClient(withInterceptors([authInterceptor]))
    //  LoggerService
  ],
};

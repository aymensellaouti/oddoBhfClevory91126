import { HttpHeaders, HttpInterceptorFn, HttpParams } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth-service';
import { APP_CONST } from '../../config/consts.config';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  //console.log('in interceptor');
  const authService = inject(AuthService);
  if (authService.isAuthenticated()) {
        // const params = new HttpParams().set(
        //   APP_CONST.tokenParamName,
        //   localStorage.getItem(APP_CONST.token) ?? '',
        // );
        // const headers = new HttpHeaders().set(
        //   APP_CONST.authHeadersName,
        //   localStorage.getItem(APP_CONST.token) ?? '',
        // );

    const newReq = req.clone({
      setHeaders: {
        [APP_CONST.authHeadersName]: localStorage.getItem(APP_CONST.token) ?? '',
      },
    });
    return next(newReq);
  }
  return next(req);
};

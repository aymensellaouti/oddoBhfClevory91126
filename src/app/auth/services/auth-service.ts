import { HttpClient } from "@angular/common/http";
import { Service, inject } from "@angular/core";
import { Observable, tap } from "rxjs";
import { APP_API } from "../../config/api.config";
import { APP_CONST } from "../../config/consts.config";
import { CredentialsDto } from "../dto/credentials.dto";
import { LoginResponseDto } from "../dto/login-response.dto copy";


@Service()
export class AuthService {
  httpClient = inject(HttpClient);
  isAuthenticated(): boolean {
    return !!localStorage.getItem(APP_CONST.token);
  }
  login(credentials: CredentialsDto): Observable<LoginResponseDto> {
    return this.httpClient
      .post<LoginResponseDto>(APP_API.login, credentials)
      .pipe(tap((response) => localStorage.setItem(APP_CONST.token, response.id)));
  }
  logout() {
    localStorage.removeItem(APP_CONST.token);
  }
}

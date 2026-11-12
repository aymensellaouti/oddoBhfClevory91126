import { Component, effect, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CredentialsDto } from '../dto/credentials.dto';
import { ToastrService } from 'ngx-toastr';
import { APP_ROUTES } from '../../config/routes.config';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth-service';
import { form, FormField, FormRoot, minLength, required } from '@angular/forms/signals';

@Component({
  imports: [FormsModule, FormField, FormRoot],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {
loginSignal() {
throw new Error('Method not implemented.');
}
  authService = inject(AuthService);
  toastr = inject(ToastrService);
  router = inject(Router);
  credentials = signal<CredentialsDto>({
    email: '',
    password:''
  });
  tooMuchEffect = effect(() => {
    if(this.loginFormSignal.password().value().length > 10 ) {
      alert('Bech tensah rak :D')
    }
  })
  loginFormSignal = form(this.credentials, (form) => {
    required(form.email);
    required(form.password);
    minLength(form.password, 4);
  })
  login(credentials: CredentialsDto) {
    this.authService.login(credentials).subscribe({
      next: () => {
        this.toastr.success('Bienvenu chez vous');
        this.router.navigate([APP_ROUTES.cv]);
      },
      error: (e) => {
        this.toastr.error('Veuillez vérifier vos credentials');
      },
    });
  }
}

import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CredentialsDto } from '../dto/credentials.dto';
import { ToastrService } from 'ngx-toastr';
import { APP_ROUTES } from '../../config/routes.config';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth-service';

@Component({
  imports: [FormsModule],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {
  authService = inject(AuthService);
  toastr = inject(ToastrService);
  router = inject(Router);
  login(credentials: CredentialsDto) {
    this.authService.login(credentials).subscribe({
      next: () => {
        this.toastr.success('Bienvenu chez vous');
        this.router.navigate([APP_ROUTES.cv]);
      },
      error: (e) => {
        this.toastr.error("Veuillez vérifier vos credentials");
      },
    });
  }
}

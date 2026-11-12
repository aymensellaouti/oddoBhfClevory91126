import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../auth/services/auth-service';
import { APP_ROUTES } from '../../config/routes.config';

@Component({
  imports: [RouterLink, RouterLinkActive],
  selector: 'app-navbar',
  styleUrl: './navbar.css',
  templateUrl: './navbar.html',
})
export class Navbar {
  authService = inject(AuthService);
  toastr = inject(ToastrService);
  router = inject(Router);
  logout() {
    this.authService.logout();
    this.toastr.success('a la prochaine visite')
    this.router.navigate([APP_ROUTES.login]);
  }
}

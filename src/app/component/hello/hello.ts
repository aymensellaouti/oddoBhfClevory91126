import { Component, effect, inject, input, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { APP_ROUTES } from '../../config/routes.config';

@Component({
  imports: [],
  selector: 'app-hello',
  styleUrl: './hello.css',
  templateUrl: './hello.html',
})
export class Hello {
  // Old way
  // name = signal('flen');
  // acr = inject(ActivatedRoute);
  router = inject(Router);
  blackList = ['aymen']
  name = input.required<string>();
  blackListEffect = effect(() => {
    if (this.blackList.includes(this.name())) {
       this.router.navigate([APP_ROUTES.home]);
     }
  })
  constructor() {
    //Old Way
    // const nameFromParam = this.acr.snapshot.params['name'];
    // if (this.blackList.includes(nameFromParam)) {
    //   this.router.navigate([APP_ROUTES.home]);
    // }
    // this.name.set(nameFromParam);
  }
}

import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './component/navbar/navbar';
import { TemplateDrivenForm } from './form/template-driven-form/template-driven-form';

@Component({
  imports: [RouterOutlet, Navbar, TemplateDrivenForm],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('oddoBhf091126');
}

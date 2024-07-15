import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <h1>Hello {{title}} Angular</h1>
    <img src="../../public/image.png">

    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  title = 'frontend';
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-projection';

  name = 'Max';
  age = 20;

  $implicit = 'Ronnie';
}

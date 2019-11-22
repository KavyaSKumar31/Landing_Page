import { Component } from '@angular/core';
import { products } from 'src/imageUrl';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'main-page';

  url = products;
}

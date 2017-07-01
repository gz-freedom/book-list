import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'book-list',
  templateUrl: './app.component.html',
  providers: [AppService]
})
export class AppComponent {}

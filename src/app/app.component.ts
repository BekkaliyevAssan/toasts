import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'animations';
  direction
  showDialog = false;

  handleClick(direction) {
    this.showDialog = !this.showDialog
    this.direction = direction
  }
}

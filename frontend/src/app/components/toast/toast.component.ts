import { Component } from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent {
  visible = false;
  message = '';

  show(msg: string) {
    this.message = msg;
    this.visible = true;
    setTimeout(() => this.visible = false, 3000);
  }
}
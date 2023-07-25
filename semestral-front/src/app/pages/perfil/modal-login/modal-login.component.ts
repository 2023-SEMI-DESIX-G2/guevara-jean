import { Component , OnInit } from '@angular/core';
import { NzLayoutModule } from 'ng-zorro-antd/layout';

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.scss']
})


export class ModalLoginComponent implements OnInit {
  isVisible = false;

  ngOnInit(): void {
    this.showModal();
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

  login() {

  }
  register() {

  }

}
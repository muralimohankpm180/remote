import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  userDetails={
    username:"",
    password:""
  }

  submitForm(form:any){
    console.log("Form Data",this.userDetails)
    sessionStorage.setItem('userid',this.userDetails.username)
  }
}

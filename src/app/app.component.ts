import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'The Cookies Project';
  isLogin = true
  isdisabled=true
  password = ""
  toggleLogin(){
    if (this.password == "Cookies@ECL"){
      this.isLogin = false
    }
    else{
      alert("Please enter the correct password")
    }
  }
  enable(){
    this.isdisabled=false
  }
}

import { Component } from "@angular/core";
import { User } from "./shared/user/user.model";

@Component({
  selector: "my-app",
  templateUrl: "./login/login.component.html",
  styleUrls: ["./login/login.component.scss"]
})
export class AppComponent {
  user: User;
  email = "kelphon@gmail.com";
  isLoggingIn = false;
  constructor(){
    this.user = new User();
  }
  submit (){
    alert('sign in with ' + this.user.email);
  }
  onShare() {
    alert('share to ...');
  }
  toggleDisplay() {
    this.isLoggingIn = !this.isLoggingIn;
  }
}
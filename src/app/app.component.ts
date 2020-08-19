import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./login/login.component.html",
  styleUrls: ["./login/login.component.scss"]
})
export class AppComponent {
  email = "kelphon@gmail.com";
  submit (){
    alert('sign in with ' + this.email);
  }
  onShare() {
    alert('share to ...');
  }
}
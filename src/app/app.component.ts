import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./login/login.component.html",
  styleUrls: ["./login/login.component.scss"]
})
export class AppComponent {
  submit (){
    alert('sign in button clicked');
  }
  onShare() {
    alert('share to ...');
  }
}
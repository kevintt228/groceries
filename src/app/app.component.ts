import { Component } from "@angular/core";
import { User } from "./shared/user/user.model";
import { UserService } from "./shared/user/user.service";

@Component({
  selector: "my-app",
  providers: [UserService],
  templateUrl: "./login/login.component.html",
  styleUrls: ["./login/login.component.scss"]
})
export class AppComponent {
  user: User;
  email = "kelphon@gmail.com";
  isLoggingIn = false;
  constructor( 
    private userService: UserService
  ){
    this.user = new User();
  }
  submit (){
    if (this.isLoggingIn){
      this.login();
    } else {
      this.signUp();
    }
  }
  login(){

  }
  signUp(){
    this.userService.register(this.user)
      .subscribe(
        () => {
          alert("Account was successfully created");
          this.toggleDisplay();
        },
        (exception) => {
          if (exception.error && exception.error.description){
            alert(exception.error.description);
          } else {
            alert(exception);
          }
        }

      );
  }
  onShare() {
    alert('share to ...');
  }
  toggleDisplay() {
    this.isLoggingIn = !this.isLoggingIn;
  }
}
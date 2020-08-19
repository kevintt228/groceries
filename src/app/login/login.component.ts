import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { User } from "../shared/user/user.model";
import { UserService } from "../shared/user/user.service";

@Component({
  selector: "my-app-login",
  providers: [UserService],
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent {
  user: User;
  email = "kelphon@gmail.com";
  isLoggingIn = false;
  constructor( 
    private userService: UserService,
    private router: Router
  ){
    this.user = new User();
    this.user.email = "kelphon@qq.com";
    this.user.password = "mypassword";
  }
  /**
   * 
   */
  submit (){
    if (this.isLoggingIn){
      this.login();
    } else {
      this.signUp();
    }
  }
  /**
   * 
   */
  login() {
    this.userService.login(this.user)
      .subscribe(
        () => this.router.navigate(["/list"]),
        (exception) => {
            if(exception.error && exception.error.description) {
                alert(exception.error.description);
            } else {
                alert(exception)
            }
        }
      );
  }

  /**
   * 
   */
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
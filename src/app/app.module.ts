import { NgModule } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";

//import { NativeScriptUIChartModule } from "nativescript-ui-chart/angular";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { LoginComponent } from "./login/login.component";
import { ListComponent } from "./list/list.component";

@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    NativeScriptHttpClientModule,
    AppRoutingModule
//    NativeScriptUIChartModule
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    ListComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

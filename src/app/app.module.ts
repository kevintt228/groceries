import { NgModule } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";


//import { NativeScriptUIChartModule } from "nativescript-ui-chart/angular";

import { AppComponent } from "./app.component";

@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule
//    NativeScriptUIChartModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { Component } from "@angular/core";
import { QRCodeComponent } from "angularx-qrcode";
import { FormsModule } from "@angular/forms";

@Component({
  templateUrl: './home-component.component.html',
  imports: [
    QRCodeComponent,
    FormsModule
  ]
})

export class HomeComponent {

  public myQrCode : string = '';
  public inputUrl : string = '';

  getQr():string {
    console.log(this.inputUrl);
    return this.inputUrl;
  }



}

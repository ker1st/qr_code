import { Component } from "@angular/core";
import { QRCodeComponent } from "angularx-qrcode";
import { FormsModule } from "@angular/forms";
import { SafeUrl } from "@angular/platform-browser";

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

  public myAngularxQrCode: string = "";
  public qrCodeDownloadLink: SafeUrl = "";

  constructor () {
    this.myAngularxQrCode = 'Your QR code data string';
  }

  onChangeURL(url: SafeUrl) {
    this.qrCodeDownloadLink = url;
  }

  getQr():string {
    console.log(this.inputUrl);
    return this.inputUrl;
  }

}

import { Component, OnInit , ViewChild} from '@angular/core';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-eba',
  templateUrl: './eba.page.html',
  styleUrls: ['./eba.page.scss'],
})
export class EbaPage {

  constructor( private alertCtrl: AlertController ) { }
  //
  // ngOnInit() {
  // }
  @ViewChild(SignaturePad) signaturePad: SignaturePad;

  private signaturePadOptions: Object = {
    'maxWidth':1,
    'minWidth': 1,
    'canvasWidth': window.screen.width ,
    'canvasHeight': window.screen.height ,
  };

  drawStart() {
    console.log('drawStart');
  }

  drawComplete() {
    console.log(this.signaturePad.toDataURL());
  }

  clear() {
    this.signaturePad.clear();
  }

  createPrompt() {
    this.alertCtrl.create({
      header: 'Observaciones',
      inputs: [{
        placeholder: 'Ingrese sus observaciones',
        name: 'text'
      }],
      buttons: [{
        text: 'OK',
        handler: (data) => {
          alert(data.text);
        }
      }, {
        text: 'Cancel',
        handler: () => {
          // alert('User cancelled');
        }
      }
      ]
    }).then((promptElement) => {
      promptElement.present();
    });
  }

}

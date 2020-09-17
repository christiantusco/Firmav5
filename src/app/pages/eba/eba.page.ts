import { Component, OnInit , ViewChild} from '@angular/core';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';
import { AlertController } from '@ionic/angular';
import {UserService} from '../../services/user.service';
import { Injectable } from '@angular/core';

import { Global } from '../global';

@Component({
  selector: 'app-eba',
  templateUrl: './eba.page.html',
  styleUrls: ['./eba.page.scss'],
})
@Injectable()
export class EbaPage {
  global = Global;

  firma: any = '';

  constructor( private alertCtrl: AlertController, private service: UserService,  ) { }
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

  createPrompt(codigoBoleta) {

    console.log(Global.nombre, Global.ci, Global.codigoBoleta);

    this.alertCtrl.create({
      header: 'Observaciones',
      inputs: [{
        placeholder: 'Ingrese sus observaciones',
        name: 'text'
      }],
      buttons: [{
        text: 'OK',
        handler: (data) => {
          this.enviarFirma(codigoBoleta.value, this.firma, data);
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

  enviarFirma(codigoBoleta, imagen, observaciones) {

    // imagen = this.dataURItoBlob(imagen);
    console.log(imagen);

    let object = {
      CodigoBoleta: codigoBoleta,
      Imagen: imagen,
      Observaciones: observaciones.text,
      Fecha: new Date()
    }

    // this.service.enviarFirmaEba(object).subscribe(resp => {
    //   console.log('Respuesta: ', resp );
    // });

  }

  // dataURItoBlob(dataURI) {
  //   // convert base64 to raw binary data held in a string
  //   // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
  //   const byteString = atob(dataURI.split(',')[1]);
  //
  //   // separate out the mime component
  //   const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
  //
  //   // write the bytes of the string to an ArrayBuffer
  //   const ab = new ArrayBuffer(byteString.length);
  //
  //   // create a view into the buffer
  //   const ia = new Uint8Array(ab);
  //
  //   // set the bytes of the buffer to the correct values
  //   for (let i = 0; i < byteString.length; i++) {
  //     ia[i] = byteString.charCodeAt(i);
  //   }
  //
  //   // write the ArrayBuffer to a blob, and you're done
  //   const blob = new Blob([ab], {type: mimeString});
  //   return blob;
  //
  // }

}

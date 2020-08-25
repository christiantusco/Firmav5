import { Component, OnInit , ViewChild} from '@angular/core';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';
import { AlertController } from '@ionic/angular';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-siremu',
  templateUrl: './siremu.page.html',
  styleUrls: ['./siremu.page.scss'],
})
export class SiremuPage {

  firma: any = '';

  constructor( private alertCtrl: AlertController, private service: UserService ) { }
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

  createPrompt(nombre, ci, codigoBoleta) {
    this.alertCtrl.create({
      header: 'Observaciones',
      inputs: [{
        placeholder: 'Ingrese sus observaciones',
        name: 'text'
      }],
      buttons: [{
        text: 'OK',
        handler: (data) => {
          this.enviarFirma(nombre.value, ci.value, codigoBoleta.value, this.firma, data);
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

  enviarFirma(nombre, ci, codigoBoleta, imagen, observaciones) {
    let object = {
      Nombre: nombre,
      CI: ci,
      CodigoBoleta: codigoBoleta,
      Imagen: imagen,
      Observaciones: observaciones.text,
      Fecha: new Date()
    }

    this.service.eviarFirmaSiremu(object).subscribe(resp => {
      console.log('Respuesta: ', resp);
    });

  }

}

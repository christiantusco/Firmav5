import { Injectable } from '@angular/core';
import { Component, OnInit , ViewChild} from '@angular/core';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';
import { AlertController } from '@ionic/angular';
import {UserService} from '../../services/user.service';
import { Global } from '../global';

@Component({
  selector: 'app-colegio',
  templateUrl: './colegio.page.html',
  styleUrls: ['./colegio.page.scss'],
})

@Injectable()
export class ColegioPage {

  // public nombre: string;
  // public ci: string;
  // public codigoBoleta: string;

  firma: any = '';

  constructor( private alertCtrl: AlertController, private service: UserService ) { }
  //
  // ngOnInit() {
  // }

  @ViewChild(SignaturePad) signaturePad: SignaturePad;

  private signaturePadOptions: Object = {
    maxWidth: 1,
    minWidth: 1,
    canvasWidth: window.screen.width ,
    canvasHeight: window.screen.height ,
  };


  drawStart() {
    console.log('drawStart');
  }

  drawComplete() {
    // console.log(this.signaturePad.toDataURL());
    this.firma = this.signaturePad.toDataURL();
  }

  clear() {
    this.signaturePad.clear();
  }

  createPrompt( nombre, ci, codigoBoleta ) {

    Global.nombre = nombre.value;
    Global.ci = ci.value;
    Global.codigoBoleta = codigoBoleta.value;

    console.log(Global.nombre, Global.ci, Global.codigoBoleta);

    this.alertCtrl.create({
      header: 'Observaciones',
      inputs: [{
        placeholder: 'Ingrese sus observaciones',
        name: 'text'
      }],
      buttons: [{
        text: 'Enviar',
        handler: (data) => {
          this.enviarFirma(nombre.value, ci.value, codigoBoleta.value, this.firma, data);
        }
      }, {
          text: 'Cancelar',
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

    this.service.enviarFirmaColegio(object).subscribe(resp => {
      console.log('Respuesta: ', resp );
    });

  }

}

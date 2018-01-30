import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable()
export class SettingsService {

  ajustes: Ajustes = {
    temaUrl: 'assets/css/colors/default-dark.css',
    tema: 'default'
  };

  constructor( @Inject(DOCUMENT) private _document ) {
    this.cargarAjustes();
   }

  guardarAjustes() {
    console.log('guardado en localstorage');
    localStorage.setItem('ajustes', JSON.stringify( this.ajustes ) );
    console.log (this.ajustes);
  }

  cargarAjustes() {
    if ( localStorage.getItem('ajustes') ) {
      this.ajustes = JSON.parse(localStorage.getItem('ajustes'));
      console.log ('ajustes cargados de localstorage');
      this.aplicarTema( this.ajustes.tema );
    } else {
      this.aplicarTema( this.ajustes.tema );
      console.log ('usando valores por defecto');
    }
  }

  aplicarTema( tema: string ) {
    let url = `assets/css/colors/${ tema }.css`;
    this._document.getElementById('tema').setAttribute('href', url);

    this.ajustes.tema = tema;
    this.ajustes.temaUrl = url;
    this.guardarAjustes();
  }

}


interface Ajustes {
  temaUrl: string;
  tema: string;
}

import { Component, OnInit } from '@angular/core';
import { Cuenta, cuentas_banco } from '../cuentas';
import { registerLocaleData } from '@angular/common'
import localeEs from '@angular/common/locales/es'
registerLocaleData(localeEs, 'es');

@Component({
  selector: 'app-interfazsencilla',
  templateUrl: './interfazsencilla.component.html',
  styleUrls: ['./interfazsencilla.component.scss']
})
export class InterfazsencillaComponent implements OnInit {

  menuoptions= ["retirar dinero", "ingresar dinero", "transferencia bancaria", "saldo cuenta"]


  cuenta: Cuenta;
  menu_actual: menu_options = menu_options.principal; // menú inicial

  constructor() {
    // generar una cuenta para simular el prototipo
    this.cuenta = new Cuenta(cuentas_banco[0].IBAN, cuentas_banco[0].nombre, cuentas_banco[0].apellidos, cuentas_banco[0].saldo);
   }

  ngOnInit(): void {
  }

  changeMenu(newMenu: string){
    console.log(newMenu);
    switch (newMenu) {
      case "retirar dinero":
        this.menu_actual = menu_options.retirar;
        break;
      case "ingresar dinero":
        this.menu_actual = menu_options.ingresar;
        break;
      case "transferencia bancaria":
        this.menu_actual = menu_options.transferencia;
        break;
      case "saldo cuenta":
        this.menu_actual = menu_options.saldo;
        break;
      default:
        console.log("entro");
        this.menu_actual = menu_options.principal;
    }
  }

}

export enum menu_options {
  principal = 0,
  ingresar = 1,
  retirar = 2,
  transferencia = 3,
  saldo = 4
}

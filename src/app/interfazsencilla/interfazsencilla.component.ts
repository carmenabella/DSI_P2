import { Component, OnInit } from '@angular/core';
import { Cuenta, cuentas_banco } from '../cuentas';
import { registerLocaleData } from '@angular/common'
import { Input, Output, EventEmitter } from '@angular/core';
import localeEs from '@angular/common/locales/es'
registerLocaleData(localeEs, 'es');

@Component({
  selector: 'app-interfazsencilla',
  templateUrl: './interfazsencilla.component.html',
  styleUrls: ['./interfazsencilla.component.scss']
})
export class InterfazsencillaComponent implements OnInit {

  @Output() enciendeLed = new EventEmitter<string>();
  @Output() finalizar = new EventEmitter<string>();
  @Output() actualizaMenu = new EventEmitter<number>();

  menuoptions= ["retirar dinero", "ingresar dinero", "transferencia bancaria", "saldo cuenta"]


  cuenta: Cuenta;
  @Input() menu_actual: menu_options = menu_options.principal; // menú inicial

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
        this.enciendeLed.emit("efectivo");
        break;
      case "ingresar dinero":
        this.menu_actual = menu_options.ingresar;
        this.enciendeLed.emit("efectivo");
        break;
      case "transferencia bancaria":
        this.menu_actual = menu_options.transferencia;
        break;
      case "saldo cuenta":
        this.menu_actual = menu_options.saldo;
        break;

      case "finalizar":
        this.finalizar.emit("finalizar");
        break;
      default:
        this.menu_actual = menu_options.principal;
        this.enciendeLed.emit("principal");
    }
    console.log(this.menu_actual);
    this.actualizaMenu.emit(this.menu_actual);
  }

  actualizarSaldo(cantidad: number){
    this.cuenta.saldo += cantidad;
  }

}

export enum menu_options {
  principal = 0,
  ingresar = 1,
  retirar = 2,
  transferencia = 3,
  saldo = 4,
  dinero_ingresado = 5,
  dinero_retirado = 6,
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interfazsencilla',
  templateUrl: './interfazsencilla.component.html',
  styleUrls: ['./interfazsencilla.component.scss']
})
export class InterfazsencillaComponent implements OnInit {

  menuoptions= ["Retirar Dinero", "Ingresar Dinero", "Transferencia bancaria", "Saldo Cuenta"]

  constructor() { }

  ngOnInit(): void {
  }

  

}

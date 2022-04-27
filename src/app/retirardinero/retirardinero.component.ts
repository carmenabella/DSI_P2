import { Component, OnInit } from '@angular/core';
import { registerLocaleData } from '@angular/common'
import { Output, EventEmitter } from '@angular/core';
import localeEs from '@angular/common/locales/es'
registerLocaleData(localeEs, 'es');

@Component({
  selector: 'app-retirardinero',
  templateUrl: './retirardinero.component.html',
  styleUrls: ['./retirardinero.component.scss']
})
export class RetirardineroComponent implements OnInit {

  @Output() dineroRetiradoEvent = new EventEmitter<number>();

  dineroRetirado: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  retirarDinero(cantidad:number){
    this.dineroRetiradoEvent.emit(cantidad);

    // TODO: hay que hacer el mensaje para indicar cuanto ha retirado

  }

}

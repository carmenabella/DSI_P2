import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.scss']
})
export class ProgressbarComponent implements OnInit {

  @Output() finCarga = new EventEmitter<number>();
  @Input() cargar: boolean = false;

  @Input() progress: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  /*
  progressUpdate(){
    this.cargar = false;
      
    var steps = [25, 40, 57, 63, 79, 85, 95, 100];
      steps.forEach(value => {
        console.log("entrando sleep: ", value);
        this.progress = value;
      });
    this.enviarFinCarga();
  }*/
  /*
  enviarFinCarga(){
    this.finCarga.emit(0);
  }*/
}
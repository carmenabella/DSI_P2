import { Component } from '@angular/core';
import { menu_options } from './interfazsencilla/interfazsencilla.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cajeroadaptado';
  interfaz='normal';

  menu_actual: menu_options = menu_options.principal;


  enciendeLed(mensaje: string){
    switch (mensaje) {
      case "efectivo":
        let element = document.getElementById(mensaje);
        let element1 = document.getElementById("openefectivo");
        if(element!= null && element1 != null){
          element.style.boxShadow = "0px 0px 20px green";
          element1.style.backgroundColor = "#aaaaaa";       
        }
        break;
      case "principal":
        this.apagarLeds('');;
        break;
      default:
        break;
    }
  }

  apagarLeds(led: string){
    switch (led) {
      case "efectivo":
        // efectivo
        let element = document.getElementById("efectivo");
        let element1 = document.getElementById("openefectivo");
        if(element!= null && element1 != null){
          element.style.boxShadow = "";
          element1.style.backgroundColor = "";       
        }
        if (this.menu_actual == menu_options.ingresar){
          this.menu_actual = menu_options.dinero_ingresado;
        } else if (this.menu_actual == menu_options.retirar){
          this.menu_actual = menu_options.dinero_retirado;
        }
        break;
    
      default:
        // apaga todas
        this.apagarLeds("efectivo")
        break;
    }
    
  }

  actualizarMenu(opcion: number){

  }

  introducirtarjeta(){
    this.interfaz="adaptada";
    let element = document.getElementById("letrerotarjeta");
      if(element != null){
        element.style.boxShadow = "0px 0px 0px green";
      }
  }

  
  finalizar(mensaje: string){
    console.log("Hola");
    this.interfaz="normal";
    let element2 = document.getElementById("letrerotarjeta");
        if(element2!= null){
          console.log(element2.style.boxShadow )
          element2.style.boxShadow = "0px 0px 20px green";
          console.log(element2.style.boxShadow )
        }
  }
  
  

  
}

import { Component, OnInit, OnDestroy } from '@angular/core';
// tslint:disable-next-line:import-blacklist
import { Observable, Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  constructor() {

    /* let obs  = new Observable(observer => {
      let contador = 0;
      let intervalo = setInterval(() => {
        contador += 1;
        observer.next(contador);

        if (contador === 3) {
          clearInterval(intervalo);
          observer.complete();
        }

        if (contador === 2) {
          //clearInterval(intervalo);
          observer.error('Error');
        }
      }, 1000);
    });

    obs
      .retry(2)
      .subscribe(
        numero => console.log(numero),
        error => console.error('Error ', error),
        () => console.log('Termino observador')
      ); */

    this.subscription = this.regresaObservable()
      .subscribe(
        numero => console.log(numero),
        error => console.error('Error ', error),
        () => console.log('Termino observador')
      );
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  this.subscription.unsubscribe();
  }

  regresaObservable(): Observable<any> {
    return new Observable(observer => {
      let contador = 0;
      let intervalo = setInterval(() => {
        contador += 1;
        let salida = {
          valor: contador
        };
        observer.next(salida);

        /* if (contador === 3) {
          clearInterval(intervalo);
          observer.complete();
        } */

        /* if (contador === 2) {
          //clearInterval(intervalo);
          observer.error('Error');
        } */
      }, 1000);
    })
    .retry(2)
    .map((response: any) => response.valor)
    .filter((valor, index) => {
      if ((valor % 2) === 1) {
        return true;
      } else {
        return false;
      }
    });
  }

}

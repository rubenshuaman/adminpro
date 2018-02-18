import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-increment',
  templateUrl: './increment.component.html',
  styles: []
})
export class IncrementComponent implements OnInit {
  @ViewChild('txtProgress') txtProgress: ElementRef;
  @Input() progreso: number = 50;
  @Input('nombre') leyenda: string = 'Leyenda';

  @Output('actualizar') cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() { 
    console.log("leyenda", this.leyenda);
    console.log("progreso", this.progreso);
  }

  ngOnInit() {
    console.log("leyenda", this.leyenda);
    console.log("progreso", this.progreso);
  }

  cambiarValor(valor: number) {
    if (this.progreso >= 100 && valor > 0) {
      this.progreso = 100;
      return;
    }

    if (this.progreso <= 0 && valor < 0) {
      this.progreso = 0;
      return;
    }
    this.progreso += valor;
    this.cambioValor.emit(this.progreso);

    this.txtProgress.nativeElement.focus();
  }
  onChanges(newValor: number) {
  //let elemHTML: any = document.getElementsByName('progreso')[0];
  //console.log(this.txtProgress);
  if (newValor >= 100) {
    this.progreso = 100;
  } else if (newValor <= 0) {
    this.progreso = 0;
  } else {
    this.progreso = newValor;
  }

  //elemHTML.value = this.progreso;
  this.txtProgress.nativeElement.value = this.progreso;

  this.cambioValor.emit(this.progreso);
  }
}

import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('progressInput', { static: false }) progressInput: ElementRef;

  @Input() progreso: number;
  @Output() outCambiavalor: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onChanges(newValue: number ) {
    if (newValue >= 100) {
      this.progressInput.nativeElement.value = 100;
    } else if ( newValue < 1) {
      this.progressInput.nativeElement.value = 0;
    } else {
      this.progressInput.nativeElement.value = newValue;
    }
    this.progreso = this.progressInput.nativeElement.value;
    this.outCambiavalor.emit(this.progreso);
  }

  cambiaValor(value: number ) {
    if (this.progreso >= 100 ) {
      this.progreso = 100;
      return;
    } else if (this.progreso <= 1) {
      this.progreso = 1;
      return;
    } else {
      this.progreso += value;
    }
    this.outCambiavalor.emit(this.progreso);
  }


}

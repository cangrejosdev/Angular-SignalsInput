import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './counter/counter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'signalInput';

  counter = 1;
//Funcion para incrementar el valor del counter que es el signal
  onIncrement() {
    this.counter = this.counter + 1;
    console.log('incremented');

  }
}

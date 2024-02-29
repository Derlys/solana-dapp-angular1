import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'dapp-counter-ui',
  standalone: true,
  imports: [CommonModule],
  template: `<p>counter-ui works!</p>`,
})
export class CounterUiComponent {}
import { Component, EventEmitter, Output } from '@angular/core';
import { LibCommandButtonComponent } from '../lib-command-button.component';

@Component({
  selector: 'lib-search-button',
  standalone: true,
  imports: [LibCommandButtonComponent],
  templateUrl: './lib-search-button.component.html'
})
export class LibSearchButtonComponent {
  @Output() searchAction = new EventEmitter<void>();

  onSearch(): void {
    this.searchAction.emit();
  }
}
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'lib-command-button',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './lib-command-button.component.html',
  styleUrl: './lib-command-button.component.scss',
})
export class LibCommandButtonComponent {
  @Input() label = '';
  @Input() icon = '';
  @Input() severity:
    | 'secondary'
    | 'success'
    | 'info'
    | 'warn'
    | 'danger'
    | 'contrast'
    | 'help'
    | undefined;

  @Input() disabled = false;
  @Input() loading = false;

  @Output() clicked = new EventEmitter<void>();

  onClick(): void {
    this.clicked.emit();
  }
}
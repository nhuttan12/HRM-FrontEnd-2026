import { Component, Input } from '@angular/core';

export type SkeletonVariant = 'text' | 'rect' | 'circle';

@Component({
  selector: 'lib-skeleton',
  standalone: true,
  templateUrl: './lib-skeleton.component.html',
  styleUrl: './lib-skeleton.component.scss',
})
export class LibSkeletonComponent {
  @Input() width = '100%';

  @Input() height = '1rem';

  @Input() borderRadius = '0.5rem';

  @Input() variant: SkeletonVariant = 'rect';

  @Input() animated = true;

  @Input() customClass = '';
}
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface HrmTableColumn<T> {
  field: keyof T;
  header: string;
  width?: string;
}

@Component({
  selector: 'lib-hrm-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lib-hrm-table.component.html',
  styleUrl: './lib-hrm-table.component.scss',
})
export class LibHrmTableComponent<T> {
  @Input() data: T[] = [];

  @Input() columns: HrmTableColumn<T>[] = [];

  @Input() selectable = false;

  @Input() selectedData: T[] = [];

  @Output() selectedDataChange = new EventEmitter<T[]>();

  @Output() selectionChange = new EventEmitter<T[]>();

  isSelected(row: T): boolean {
    return this.selectedData.includes(row);
  }

  isAllSelected(): boolean {
    return (
      this.data.length > 0 &&
      this.data.every((row) => this.isSelected(row))
    );
  }

  toggleRow(row: T): void {
    const selected = this.isSelected(row);

    const updatedSelection = selected
      ? this.selectedData.filter((item) => item !== row)
      : [...this.selectedData, row];

    this.updateSelection(updatedSelection);
  }

  toggleAll(): void {
    const allSelected = this.isAllSelected();

    const updatedSelection = allSelected
      ? this.selectedData.filter((item) => !this.data.includes(item))
      : [
          ...this.selectedData,
          ...this.data.filter((row) => !this.isSelected(row)),
        ];

    this.updateSelection(updatedSelection);
  }

  private updateSelection(selection: T[]): void {
    this.selectedData = selection;

    this.selectedDataChange.emit(selection);
    this.selectionChange.emit(selection);
  }

  getCellValue(row: T, field: keyof T | string): unknown {
    return row[field as keyof T];
  }

  trackByRow(index: number, row: T): T {
    return row;
  }
}
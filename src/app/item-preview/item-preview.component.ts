import { Book } from './../book.interface';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'pcard-uts-workshop-item-preview',
  templateUrl: './item-preview.component.html',
  styleUrls: ['./item-preview.component.scss'],
})
export class ItemPreviewComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: Book) {

  }
}

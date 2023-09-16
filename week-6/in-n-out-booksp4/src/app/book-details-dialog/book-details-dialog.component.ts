/**
 * Title: book-details-dialog.component
 * Author: William Austin
 * Date: 08 September 2023
 * Description: Book details dialog (dialog box for displaying the details of a book)
 */
import { Component } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { IBook } from '../book.interface';


@Component({
  selector: 'app-book-details-dialog',
  templateUrl: './book-details-dialog.component.html',
  styleUrls: ['./book-details-dialog.component.scss']
})

export class BookDetailsDialogComponent {

  book: IBook;

  constructor(private dialogRef: MatDialogRef<BookDetailsDialogComponent>, @Inject(MAT_DIALOG_DATA) data){
    this.book = data.book;
  }
}

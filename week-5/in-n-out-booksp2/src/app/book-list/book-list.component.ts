/**
 * Title: book-list.component.ts
 * Author: William Austin
 * Date: 8 September 2023
 * Description: Book List component (Book List page)
 */
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { IBook } from '../book.interface';
import { BooksService } from '../books.service';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent {

  books: Observable<IBook[]>;
  header: Array<string> = ['isbn', 'title', 'numOfPages', 'authors'];
  book: IBook;

  constructor(private booksService: BooksService){
    this.books = this.booksService.getBooks();
  }

  showBookDetails(isbn:string){
    this.book = this.booksService.getBook(isbn);
    console.log(this.book);
    }
}

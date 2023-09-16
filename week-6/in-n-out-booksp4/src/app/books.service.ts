/**
 * Title: books.service.ts
 * Author: William Austin
 * Date: 08 September 2023
 * Description: Service class for book objects
 */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs';
import { IBook } from './book.interface';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  books: Array<IBook>
  constructor() {
    this.books = [
      {
        isbn: "978-0061120084",
        title: "To Kill a Mockingbird",
        description: "A classic novel that explores themes of racism and justice in the American South.",
        numOfPages: 281,
        authors: ["Harper Lee"]
      },
      {
        isbn: "978-1400034772",
        title: "The Kite Runner",
        description: "A gripping story of friendship and redemption set against the backdrop of Afghanistan's tumultuous history.",
        numOfPages: 371,
        authors: ["Khaled Hosseini"]
      },
      {
        isbn: "978-1984819192",
        title: "Educated: A Memoir",
        description: "A memoir about a woman who escapes a strict and abusive upbringing to pursue education and self-discovery.",
        numOfPages: 334,
        authors: ["Tara Westover"]
      },
      {
        isbn: "978-1400064169",
        title: "The Night Circus",
        description: "A fantastical tale of a magical competition between two young illusionists in a mysterious circus.",
        numOfPages: 387,
        authors: ["Erin Morgenstern"]
      },
      {
        isbn: "978-0547249643",
        title: "The Hunger Games",
        description: "In a dystopian future, young tributes must fight for survival in a televised battle to the death.",
        numOfPages: 374,
        authors: ["Suzanne Collins"]
      }
    ]
  }

    getBooks(): Observable<IBook[]> {
      return of(this.books);
    }

    getBook(isbn: string): IBook{
      for (let book of this.books){
        if (book.isbn=== isbn) {
          return book;
        }
      }
      return {} as IBook;
    }
}

/**
 * Title: book.interface.ts
 * Author: William Austin
 * Date: 8 September 2023
 * Description: Book interface object
 */

export interface IBook {
  isbn: string;
  title: string;
  description: string;
  numOfPages: number;
  authors: Array<string>;
}

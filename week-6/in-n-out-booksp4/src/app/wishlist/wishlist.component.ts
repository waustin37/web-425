/**
 * Title: wishlist.component.ts
 * Author: William Austin
 * Date: 16 September 2023
 * Description: Wishlist component (Wishlist page)
 */

import { Component } from '@angular/core';
import { IWishlistItem } from '../wishlist-item.interface';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent {

  items: Array<IWishlistItem> = [];

  constructor(){}

  updateItemHandler(item: IWishlistItem){
    this.items.push(item);
  }
}

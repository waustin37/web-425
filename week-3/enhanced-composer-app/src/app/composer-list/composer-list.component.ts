/**
 * Title: composer-list.component.ts
 * Author: William John Austin
 * Date: 19 August 2023
 * Description: Composer list component; displays a list of composers
 */
import { Component } from '@angular/core';
import { IComposer } from '../composer.interface';
import { Composer } from '../composer.class';

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
export class ComposerListComponent {

  composers: Array<IComposer>;

    constructor(){
      this.composers = new Composer().getComposers();

  }
}

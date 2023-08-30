/**
 * Title: composer-list.component.ts
 * Author: William John Austin
 * Date: 19 August 2023
 * Description: Composer list component; displays a list of composers
 */
import { Component } from '@angular/core';
import { IComposer } from '../composer.interface';
import { ComposerService } from '../composer.service';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
export class ComposerListComponent {

  composers: Array<IComposer>;
  txtSearchControl = new FormControl('');

    constructor(private composerService: ComposerService){
      this.composers = this.composerService.getComposers();

      this.txtSearchControl.valueChanges.pipe(debounceTime(500)).subscribe( val => this.filterComposers(val));
  }
  filterComposers(name: string){
    alert(name);
  }
}

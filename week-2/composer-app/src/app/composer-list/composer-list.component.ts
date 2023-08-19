/**
 * Title: composer-list.component.ts
 * Author: William John Austin
 * Date: 19 August 2023
 * Description: Composer list component; displays a list of composers
 */
import { Component } from '@angular/core';

export default class Composer {
  fullName: string;
  genre: string;

  constructor(fullName:string, genre: string){
    this.fullName = fullName;
    this.genre = genre
  }
}

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
export class ComposerListComponent {
  composers: Array<Composer>;
  constructor(){
    this.composers = [
      new Composer("Brain Eno", "Ambient"),
      new Composer("Philip Glass", "Neo-Classical"),
      new Composer("Lady Gaga", "Pop"),
      new Composer("John Williams", "Soundtrack"),
      new Composer("Lin Manuel Miranda", "Musical")
    ]
  }
}

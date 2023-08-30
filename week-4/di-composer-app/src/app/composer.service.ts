import { Injectable } from '@angular/core';
import { IComposer } from './composer.interface';

@Injectable({
  providedIn: 'root'
})
export class ComposerService {

  composers: Array<IComposer>;

  constructor(){
    this.composers = [
      {
        composerId: 100, fullName: "Brian Eno", genre: "Ambient"
      },
      {
        composerId: 101, fullName: "Philip Glass", genre: "Neo-Classical"
      },
      {
        composerId: 102, fullName: "Lady Gaga", genre: "Pop"
      },
      {
        composerId: 103, fullName: "John Williams", genre: "Soundtrack"
      },
      {
        composerId: 104, fullName: "Lin Manuel Miranda", genre: "Musical"
      }
    ]
  }

  getComposers(){
    return this.composers;
  }

  getComposer(composerId: number) : IComposer {
    for (let composer of this.composers){
      if(composer.composerId === composerId){
        return composer;
      }
    }
    return {} as IComposer;
  }
}


/**
 * Title: composer.class.ts
 * Author: William Austin
 * Date: 25 August 2023
 * Description: Class file for the Composer object
 */

import { IComposer } from "./composer.interface";

export class Composer {
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

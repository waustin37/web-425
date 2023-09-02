/**
 * Title: composer.service.ts
 * Author: William Austin
 * Date: 30 August 2023
 * Description: Service for Injectable Composer Class
 */

import { Injectable } from '@angular/core';
import { IComposer } from './composer.interface';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs';

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

  getComposers(): Observable<IComposer[]> {
    return of (this.composers);
  }

  getComposer(composerId: number) : IComposer {
    for (let composer of this.composers){
      if(composer.composerId === composerId){
        return composer;
      }
    }
    return {} as IComposer;
  }

  filterComposers(name:string): Observable<IComposer[]> {
    return of(this.composers).pipe(
      map(composers =>
        composers.filter(composer => composer.fullName.toLowerCase().indexOf(name) > -1)))
  }
}


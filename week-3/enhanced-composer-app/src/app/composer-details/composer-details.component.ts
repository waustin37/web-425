/**
 * Title: composer-details.component.ts
 * Author: William Austin
 * Date: 23 August 2023
 * Description: Composer details component (Composer details page)
 */

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IComposer } from '../composer.interface';
import { Composer } from '../composer.class';

@Component({
  selector: 'app-composer-details',
  templateUrl: './composer-details.component.html',
  styleUrls: ['./composer-details.component.css']
})
export class ComposerDetailsComponent {
  composer: IComposer;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const composerId: string|null = this.route.snapshot.paramMap.get('composerId')

    if(composerId){
      this.composer = new Composer().getComposer(parseInt(composerId))!
    }
  }
}

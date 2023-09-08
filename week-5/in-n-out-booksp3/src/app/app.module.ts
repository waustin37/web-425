/**
 * Title: app.module.ts
 * Author: William Austin
 * Date: 08 September 2023
 * Description: App Module for In-N-Out Books
 */

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BookListComponent } from './book-list/book-list.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { BookDetailsDialogComponent } from './book-details-dialog/book-details-dialog.component';

import { MatToolbarModule} from '@angular/material/toolbar';
import { MatCardModule} from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';
import { MatListModule} from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule} from '@angular/material/icon';
import { MatTableModule} from '@angular/material/table';
import { MatDialogModule} from '@angular/material/dialog';



@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    ContactComponent,
    AboutComponent,
    BookDetailsDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatListModule,
    FlexLayoutModule,
    MatIconModule,
    MatTableModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { TicTacToeComponent } from './tic-tac-toe/tic-tac-toe.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [AppComponent, ToolbarComponent, TicTacToeComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule, // Cards
    MatButtonModule, // Buttons
    MatToolbarModule, // Toolbar
    MatGridListModule, // Grid
    MatSnackBarModule, // Notifications
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

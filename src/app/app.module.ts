import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DirectoryComponent } from './directory/directory.component';
import { FilterPipe } from './name.pipe';
import { TypePipe } from './type.pipe';
import { FirebaseService } from './service/firebase.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DirectoryComponent,
    FilterPipe,
    TypePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }

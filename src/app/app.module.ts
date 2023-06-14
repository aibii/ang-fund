import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from '../events/event-list/events-list-component';
import { EventThumbnailComponent } from '../events/event-thumbnail/event-thumbnail.component';

@NgModule({
  declarations: [  //components, pipes, directives go here
    EventThumbnailComponent,
    EventsAppComponent,
    EventsListComponent,
  ],
  imports: [    //used for importing other modules
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],   //services go here
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

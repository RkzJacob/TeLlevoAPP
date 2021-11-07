import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicStorageModule } from '@ionic/storage-angular';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import {AgmCoreModule} from '@agm/core';



@NgModule({
  declarations: [
    AppComponent
  ],
  entryComponents: [

  ],
  imports: [
   BrowserModule,
   IonicModule.forRoot(),
   AppRoutingModule,
   BrowserAnimationsModule,
   IonicStorageModule.forRoot(),
   HttpClientModule,AgmCoreModule.forRoot({apiKey:'AIzaSyDNqZy4w_uAD4IyonGOSv4YLeDeQngGmXU'}) 
  ],
  providers: [
    Geolocation,
    { provide: 
      RouteReuseStrategy,
      useClass: IonicRouteStrategy
    }],
  bootstrap: [
    AppComponent
  ],
})
export class AppModule {}

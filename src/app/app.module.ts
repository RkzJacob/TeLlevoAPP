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
import { AuthService } from './guards/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { GooglemapsService } from './Components/googlemaps/googlemaps.service';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';






@NgModule({
  declarations: [
    AppComponent
  ],
  entryComponents: [

  ],
  imports: [
   BrowserModule,
   IonicModule.forRoot({animated:true,mode:'md',hardwareBackButton:false}),
   AppRoutingModule,
   BrowserAnimationsModule,
   IonicStorageModule.forRoot(),
   HttpClientModule,AgmCoreModule.forRoot({apiKey:'AIzaSyDNqZy4w_uAD4IyonGOSv4YLeDeQngGmXU'}),
   AngularFireModule.initializeApp(environment.firebase),
   AngularFirestoreModule,
  ],
  providers: [
    AuthService, 
    AuthGuard,
    Geolocation,
    GooglemapsService,
    { provide: 
      RouteReuseStrategy,
      useClass: IonicRouteStrategy
    }],
  bootstrap: [
    AppComponent
  ],
})
export class AppModule {}

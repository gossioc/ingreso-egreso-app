import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Modulos
import { AppRoutingModule } from './app-routing.module';

//Ngrx
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { appReducers } from './app.reducer';

//Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

//Componentes
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';

// Módulos
import { AuthModule } from './auth/auth.module';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AuthModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    //StoreModule.forRoot( appReducers ),
    StoreModule.forRoot( appReducers , 
      { runtimeChecks: { 
              strictStateImmutability: false, 
              strictActionImmutability: false,
          } 
      }
    ),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

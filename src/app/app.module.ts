import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // HttpModule, // the old HTTP service
    HttpClientModule,
    AppRoutingModule,
    // RecipesModule, // removing it from this array and implementing lazy loading on it
    SharedModule,
    ShoppingListModule,
    AuthModule,
    CoreModule
  ],
  // providers: [
  //   ShoppingListService,
  //   RecipeService,
  //   DataStorageService,
  //   AuthService,
  //   AuthGuard
  // ],
  // we moved all the services in the core module; when injecting them in the providers[] array in here, we're making sure that now we have one instance of the services available all the way through out our app as long as our app is running
  bootstrap: [AppComponent]
})
export class AppModule { }

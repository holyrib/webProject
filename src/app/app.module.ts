import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ClassProvider  } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AuthInterceptor } from './AuthInterceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ProviderService } from './shared/provider.service';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ShopComponent } from './shop/shop.component';
import { ItemsComponent } from './items/items.component';
import { ItemComponent } from './item/item.component';
import { CartComponent } from './cart/cart.component';
import { LearnComponent } from './learn/learn.component';
import { LookComponent } from './look/look.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

const appRoutes: Routes = [
  { path: '', component: ShopComponent},
  { path: 'cart', component: CartComponent},
  { path: 'learn', component: LearnComponent},
  { path: 'look', component: LookComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registration', component: RegistrationComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ShopComponent,
    ItemsComponent,
    ItemComponent,
    CartComponent,
    LearnComponent,
    LookComponent,
    FooterComponent,
    LoginComponent,
    RegistrationComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    NgbModule,
  ],
  providers: [
    ProviderService,
    <ClassProvider> {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }

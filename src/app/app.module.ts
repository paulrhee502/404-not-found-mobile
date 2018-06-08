import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ExplorePage } from '../pages/explore/explore';
import { LoginPage } from '../pages/login/login';
import { ProfilePage } from '../pages/profile/profile';
import { RegistrationPage } from '../pages/registration/registration';
import { CharityPage } from '../pages/charity/charity';
import { TabsPage } from '../pages/tabs/tabs';
import { PaymentPage } from '../pages/payment/payment';
import { PortfolioPage } from '../pages/portfolio/portfolio';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ExplorePage,
    LoginPage,
    ProfilePage,
    RegistrationPage,
    CharityPage,
    TabsPage,
    PaymentPage,
    PortfolioPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ExplorePage,
    LoginPage,
    ProfilePage,
    RegistrationPage,
    CharityPage,
    TabsPage,
    PaymentPage,
    PortfolioPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
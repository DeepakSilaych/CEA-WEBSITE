import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgImageSliderModule } from "ng-image-slider";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ParentComponent } from './parent/parent.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CouncilComponent } from './council/council.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { FooterComponent } from './footer/footer.component';
import { SeminarsComponent } from './seminars/seminars.component';
import { GalleryComponent } from './gallery/gallery.component';
import { Gallery201718Component } from './gallery201718/gallery201718.component';
import { Gallery201819Component } from './gallery201819/gallery201819.component';
import { Gallery201920Component } from './gallery201920/gallery201920.component';
import { EditorsComponent } from './editors/editors.component';
import { Gallery202223Component } from './gallery202223/gallery202223.component';
import { CivilInsightsComponent } from './civil-insights/civil-insights.component';
import { Gallery202122Component } from './gallery202122/gallery202122.component';
import { PublicationsComponent } from './publications/publications.component';
import { Publications202223Component } from './publications202223/publications202223.component';
import { Publications202122Component } from './publications202122/publications202122.component';
import { Publications202021Component } from './publications202021/publications202021.component';
import { Publications201920Component } from './publications201920/publications201920.component';

import { APP_BASE_HREF, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { Publications202324Component } from './publications202324/publications202324.component';
import { Gallery202324Component } from './gallery202324/gallery202324.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ParentComponent,
    CarouselComponent,
    CouncilComponent,
    IntroductionComponent,
    FooterComponent,
    SeminarsComponent,
    GalleryComponent,
    Gallery201718Component,
    Gallery201819Component,
    Gallery201920Component,
    EditorsComponent,
    Gallery202324Component,
    Gallery202223Component,
    CivilInsightsComponent,
    Gallery202122Component,
    PublicationsComponent,
    Publications202324Component,
    Publications202223Component,
    Publications202122Component,
    Publications202021Component,
    Publications201920Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgImageSliderModule,

  ],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '/'
    },
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

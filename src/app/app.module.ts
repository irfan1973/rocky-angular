import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './controls/header/header.component';
import { FooterComponent } from './controls/footer/footer.component';
import { ContactComponent } from './controls/contact/contact.component';
import { FaqComponent } from './controls/faq/faq.component';
import { PricingComponent } from './controls/pricing/pricing.component';
import { TeamsComponent } from './controls/teams/teams.component';
import { PortfolioComponent } from './controls/portfolio/portfolio.component';
import { TestimonialsComponent } from './controls/testimonials/testimonials.component';
import { FeaturesComponent } from './controls/features/features.component';
import { MoreservicesComponent } from './controls/moreservices/moreservices.component';
import { ServicesComponent } from './controls/services/services.component';
import { CountsComponent } from './controls/counts/counts.component';
import { AboutusComponent } from './controls/aboutus/aboutus.component';
import { ClientsComponent } from './controls/clients/clients.component';
import { HeroComponent } from './controls/hero/hero.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    FaqComponent,
    PricingComponent,
    TeamsComponent,
    PortfolioComponent,
    TestimonialsComponent,
    FeaturesComponent,
    MoreservicesComponent,
    ServicesComponent,
    CountsComponent,
    AboutusComponent,
    ClientsComponent,
    HeroComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

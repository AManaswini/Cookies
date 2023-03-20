import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzResultModule } from 'ng-zorro-antd/result';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzRateModule } from 'ng-zorro-antd/rate';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { HomeComponent } from './home/home.component';

import {CarouselModule} from 'primeng/carousel';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeComponent } from './recipe/recipe.component';
import { ContactComponent } from './contact/contact.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RecipesComponent,
    RecipeComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzLayoutModule,
    NzMenuModule,
    NzPageHeaderModule,
    NzCardModule,
    NzGridModule,
    NzButtonModule,
    NzAvatarModule,
    NzIconModule,
    NzSpinModule,
    NzResultModule,
    NzInputModule,
    NzFormModule,
    NzBadgeModule,
    NzCarouselModule,
    NzModalModule,
    CarouselModule,
    NzSwitchModule,
    NzRateModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }

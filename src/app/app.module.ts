import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { HeaderComponent } from './header/header.component';
import { SubContainerComponent } from './sub-container/sub-container.component';
import { SubHeaderComponent } from './sub-header/sub-header.component';
import { AddNewContactComponent } from './add-new-contact/add-new-contact.component';
import { PocComponent } from './poc/poc.component';
import { ExistingContactsComponent } from './existing-contacts/existing-contacts.component';
import { FooterComponent } from './footer/footer.component';
import { NewSellerFormComponent } from './new-seller-form/new-seller-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    HeaderComponent,
    SubContainerComponent,
    SubHeaderComponent,
    AddNewContactComponent,
    PocComponent,
    ExistingContactsComponent,
    FooterComponent,
    NewSellerFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

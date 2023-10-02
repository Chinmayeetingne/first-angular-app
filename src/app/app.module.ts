import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { CustomerComponent } from './pages/customer/customer.component';
import { TemplateComponent } from './pages/template/template.component';
import { ReactFormComponent } from './pages/react-form/react-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    TemplateComponent,
    ReactFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

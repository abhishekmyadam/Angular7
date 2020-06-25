import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppLocalConfig } from './config/app.local.config';
import { EmployeeService } from './services/employee.service';
import { CreateEmployeeComponent } from './components/create-employee/create-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [AppLocalConfig, EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }

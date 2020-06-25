import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppLocalConfig } from '../config/app.local.config';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(private readonly http: HttpClient, private readonly appConfig: AppLocalConfig) {}
  backendURL = this.appConfig.getConfig()['node-backend'];

  fetchEmployees() {
    return this.http.get(`${this.backendURL.employeesURL}`);
  }
}

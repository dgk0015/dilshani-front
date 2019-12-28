import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const API_GET_BUS_ALL = `https://buswebp.herokuapp.com/bus/all`;
const API_GET_EMPLOYEES_ALL = `https://buswebp.herokuapp.com/employee/all`;
const API_SAVE_DAILY_UPDATE = `https://buswebp.herokuapp.com/dailyUpdate/create`;

@Injectable({
  providedIn: 'root'
})

export class DilshaniServicesService {
  constructor(
    private http: HttpClient
  ) { }

  // get bus list...
  getBusAll(): Observable<any[]> {
		return this.http.get<any[]>(`${ API_GET_BUS_ALL }`);
  }

  // get employees all...
  getEmployeesAll(): Observable<any[]> {
    return this.http.get<any[]>(`${ API_GET_EMPLOYEES_ALL }`)
  }

  // save daily update...
  saveDailyUpdate(dailyUpdatedata) {
    return this.http.post<any[]>(`${API_SAVE_DAILY_UPDATE}`, dailyUpdatedata);
  }
}
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

 
  constructor(private http: HttpClient) { }

  getdata() {

    return this.http.get("http://localhost:3000/student");
  }
  savedata(data: any) {
    console.log("service", data)
    return this.http.post("http://localhost:3000/student/", data);
  }
  deletedata(id: any) {
    return this.http.delete("http://localhost:3000/student/" + id);
  }
  getdataid(id:any){
return this.http.get("http://localhost:3000/student/" +id)
 }
 updatedata(data:any, id:any){
   return this.http.put("http://localhost:3000/student/" +id,data)
 }
}
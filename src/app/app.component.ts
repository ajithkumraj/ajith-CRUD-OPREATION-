import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from './data.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
loginForm: any;
data: any;
dataId: any;
  // name = 'Angular';
  ngOnInit(): void {
    this.getdata();
    this.loginForm = new FormGroup({
      name: new FormControl("", Validators.required),
      age: new FormControl("", Validators.required),
      dob: new FormControl("", Validators.required),
      place: new FormControl("", Validators.required),
    })
  }
  // dataform = new FormGroup({
  //   name1: new FormControl('', Validators.required),
  //   pwd: new FormControl('', Validators.required)
  // })
  login() {
    let data = this.loginForm.value;
    console.log(data)
  }
  constructor(private ser: DataService) { }
  getdata() {
    this.ser.getdata().subscribe((res: any) => {
      this.data = res;
      console.log(this.data);
    })
  }
  savedata() {
    let value = this.loginForm.value;
    console.log("Value ", value)
    this.ser.savedata(value).subscribe(res => {
      console.log(res)
      this.loginForm.reset()
    });
  }
  deletedata(id: any) {
    this.ser.deletedata(id).subscribe((res: any) => {
      this.getdata();
      console.log(this.loginForm.value)
    });
  }
  editdata(id: any) {
    console.log()
    this.ser.getdataid(id).subscribe((res: any) => {
      let editValue = res;
      this.dataId = editValue.id;
      this.loginForm.patchValue({
        name: editValue.name,
        age: editValue.age,
        dob: editValue.dob,
        place: editValue.place,
      })
    });
  }
  updatedata() {
    console.log(this.loginForm.Value)
    this.dataId;
    this.ser.updatedata(this.loginForm.value, this.dataId).subscribe((res: any) => {
      this.getdata();
      this.loginForm.reset();
    });
  }
}
function id(id: any) {
}
function updatedata() {
  throw new Error('Function not implemented.');
}


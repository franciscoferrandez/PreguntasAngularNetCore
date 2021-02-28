import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cambiar-password',
  templateUrl: './cambiar-password.component.html',
  styleUrls: ['./cambiar-password.component.css']
})
export class CambiarPasswordComponent implements OnInit {
  cambiarPassword: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.cambiarPassword = this.fb.group({
      passwordAnterior: ['', Validators.required],
      passwordNuevo: ['', [Validators.required, Validators.minLength(4)]],
      repeatPassword: ['',]
    }, {validator: this.checkPassword})
  }

  ngOnInit() {
  }

  doChange(): void {
    console.log(this.cambiarPassword);


  }

  checkPassword(group: FormGroup): any {
    const pass = group.controls.passwordNuevo.value;
    const confirm = group.controls.repeatPassword.value;
    return pass === confirm ? null : {notSame:true};
  }

}

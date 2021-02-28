import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  register: FormGroup;
  constructor(private fb:FormBuilder) {
    this.register = this.fb.group({
      usuario: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(4)]],
      repeatPassword: ['']
    }, {validator: this.checkPassword});
  }

  ngOnInit() {
  }

  doRegister(): void {
    console.log(this.register);

    const usuario: Usuario = {
      username: this.register.value.usuario,
      password: this.register.value.password
    }
    console.log(usuario);
  }

  checkPassword(group: FormGroup): any {
    const pass = group.controls.password.value;
    const confirm = group.controls.repeatPassword.value;
    return pass === confirm ? null : {notSame:true};
  }

}

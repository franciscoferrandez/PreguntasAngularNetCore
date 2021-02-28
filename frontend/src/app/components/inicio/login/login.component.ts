import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from '../../../models/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: FormGroup;
  loading: false;

  constructor(private fb:FormBuilder, private toastr: ToastrService, private router: Router) {
    this.login = this.fb.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  log(): void {
    console.log(this.login);

    const usuario: Usuario = {
      username: this.login.value.usuario,
      password: this.login.value.password
    }

    this.loading = true;
    setTimeout(() => {
      if(usuario.username === 'usuario' && usuario.password === "1234") {
        this.login.reset();
        this.router.navigate(['/dashboard']);
      } else {
        this.toastr.error('Datos de acceso incorrectos', 'Error');
        this.login.reset();
      }      
      this.loading = false;
    }, 3000);

    console.log(usuario);
  }

}

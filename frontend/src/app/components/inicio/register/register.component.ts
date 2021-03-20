import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  register: FormGroup;
  loading: boolean = false;

  constructor(private fb:FormBuilder, 
      private usuarioService: UsuarioService,
      private router: Router,
      private toastr: ToastrService) {
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
    //console.log(usuario);
    this.loading = true;
    this.usuarioService.saveUser(usuario).subscribe(data => {
      console.log(data);
      this.toastr.success('El usuario ' + usuario.username +' fue registrado con éxito!', ' Usuario Registrado');
      this.router.navigate(['/inicio/login']);
      this.loading = false;
    })
  }

  checkPassword(group: FormGroup): any {
    const pass = group.controls.password.value;
    const confirm = group.controls.repeatPassword.value;
    return pass === confirm ? null : {notSame:true};
  }

}

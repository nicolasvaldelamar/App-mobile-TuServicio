import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginComponent {
  credentials: any = {};
  

  constructor(private authService: AuthService, private router: Router) { 
    this.credentials = { username: '', password: ''}
  }


  async login() {
    const data = await this.authService.login(this.credentials);
    console.log("DATA DEL USUARIO ja", data);
    if (data.message === 'Inicio de sesión exitoso') {
      // redireccionar a la página de inicio
      localStorage.setItem('credentials', JSON.stringify(data))
      this.router.navigateByUrl('/tabs/home');
    }
  if (data.message === 'Inicio de sesión exitoso') {
     // alert('Inicio de sesión fallido')
    }
  }

  areInputsEmpty(): boolean{
    return this.credentials.username !== '' && this.credentials.password !== '';

  }
}

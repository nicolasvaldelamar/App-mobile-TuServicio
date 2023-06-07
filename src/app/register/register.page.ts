import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss']
})
export class RegisterComponent {
  user: any;
  titulo: string = "Error"
  mensaje: string = "";
  public alertButtons = ['OK'];
  

  


  constructor(private authService: AuthService, private alertController: AlertController, private router: Router) {
    this.user = { username: '', email: '', password: '', role: '', name: '', lastname: '' }
    
   }

   async mostrarAlert(respuestaAPI: any) {
    const alert = await this.alertController.create({
      header: 'Alerta',
      message: respuestaAPI,
      buttons: ['Aceptar']
    });
    if(respuestaAPI === 'Registro exitoso'){
    alert.onDidDismiss().then(() => {
      this.router.navigate(['/login']);
    });
   } 
    await alert.present();
  }
  

  async register() {
   
    const data = await this.authService.register(this.user);
    console.log("DATA DEL Backend", data);
    if (data.message === 'El usuario y/o email ya existe'){
      this.mensaje = data.message;
      this.mostrarAlert(this.mensaje); 
    }else if (data.message === 'Registro exitoso'){
      this.mensaje = data.message;
      this.mostrarAlert(this.mensaje);
    }
  }


  areInputsEmpty(): boolean{
    return this.user.username !== '' && this.user.email !== '' && this.user.password !== '' && this.user.role !== '' && this.user.name !== '' && this.user.lastname !== '';

  }
     
}


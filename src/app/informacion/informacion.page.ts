import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';





@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.page.html',
  styleUrls: ['./informacion.page.scss'],
})
export class InformacionPage implements OnInit {

  user: any = {};
  profileImage: any = '';
  selectedImage: string = '';
  idComparar: number = 0;

  constructor(private authService: AuthService) {
    this.user = { username: '', email: '', role: '', descripcion: '', telefono: '', direccion: '', imagen: '', id: ''}
   }

  ngOnInit() {
    this.traerDatos();
  }


  async editProfileImage(camara = true) {
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.DataUrl,
      source: camara ? CameraSource.Camera : CameraSource.Photos,
      quality: 100,
      promptLabelHeader: 'Foto',
      promptLabelCancel: 'Cancelar',
      promptLabelPhoto: 'Desde fotos',
      promptLabelPicture: 'Tomar foto',
    });
  
    this.profileImage = capturedPhoto.dataUrl;
    console.log(capturedPhoto.dataUrl);

 
  }
  

  async traerDatos(){
    const datos = localStorage.getItem('credentials');
    if(!datos){
      return;
    }
    const datos2 = JSON.parse(datos);
    const data = await this.authService.login(datos2);
    const results = await this.authService.traerDatos(data.user);
    console.log("DATOS DEL USER", results);
    this.user.username = results.results.username;
    this.user.email = results.results.email;
    this.user.role = results.results.role;
    this.user.descripcion = results.results.descripcion;
    this.user.name = results.results.name;
    this.user.lastname = results.results.lastname;
    this.user.ocupacion = results.results.ocupacion;
    this.user.id = results.results.id;
    this.idComparar = datos2.id;
    
  }

}

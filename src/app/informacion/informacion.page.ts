import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';


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
  profileImageG: any = ''
  perfilId: any = '';
  delStorage: any = '';
  constructor(private authService: AuthService, private http: HttpClient, private route: ActivatedRoute) {
    this.user = { username: '', email: '', role: '', descripcion: '', telefono: '', direccion: '', imagen: '', id: ''}
   }

  ngOnInit() {
    this.perfilId = this.route.snapshot.paramMap.get('id');
    // Aquí puedes usar el ID del perfil para cargar la información correspondiente
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
    this.uploadImage();
    
 
  }
  

  async traerDatos(){
    const datos = localStorage.getItem('credentials');
    if(!datos){
      return;
    }
    const datos2 = JSON.parse(datos);
    const data = await this.authService.login(datos2.user);
    let results: any;
    if (this.perfilId !== datos2.id) {
      results = await this.authService.traerDatos(this.perfilId);
    }else{
      results = await this.authService.traerDatos(data.user);
    }
    
    console.log("DATOS DEL USER", results);
    this.user.username = results.results.username;
    this.user.email = results.results.email;
    this.user.role = results.results.role;
    this.user.descripcion = results.results.descripcion;
    this.user.name = results.results.name;
    this.user.lastname = results.results.lastname;
    this.user.ocupacion = results.results.ocupacion;
    this.user.city = results.results.city;
    this.user.adress = results.results.adress;
    this.user.id = results.results.id;
    this.delStorage = datos2;
    this.idComparar = datos2.id;
    this.user.password = results.results.password;
    this.user.profile_photo = results.results.profile_picture;
    this.profileImage = results.results.profile_picture;
    console.log("idStorage", this.delStorage.id, "idNormal", this.user.id)
  }

   

  uploadImage() {
    const cloudinaryUploadUrl = `https://api.cloudinary.com/v1_1/duebiduhx/upload`;
    const uploadPreset = 'fizakalj';

    const formData = new FormData();
    formData.append('file', this.profileImage);
    formData.append('upload_preset', uploadPreset);

    this.http.post<any>(cloudinaryUploadUrl, formData)
      .subscribe(
        (response) => {
          console.log('URL de la imagen:', response.secure_url);
          this.profileImageG = response.secure_url;
          console.log(this.profileImageG, "Ya la tiene")
          this.updatePhoto(this.profileImageG)
          // Realiza las acciones que desees con la URL de la imagen
        },
        (error) => {
          console.error('Error al subir la imagen:', error);
          return false
        }
      );
      return true
  }
  updatePhoto(img: any){
    console.log(this.profileImageG, "Ya la tiene x2")
    const credentials = {
      newimage: img,
      username: this.user.username,
      password: this.user.password,
    }
    const res = this.authService.updatePhoto(credentials);
    console.log(res);
    
  
  
}
}

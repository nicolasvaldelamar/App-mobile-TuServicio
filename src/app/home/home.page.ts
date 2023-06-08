import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public mostrarProveedores: boolean = true;
  public mostrarServicios: boolean = false;
  segmentValue: string;
  user: any = {};

  constructor(private authService: AuthService) {
    this.user = { username: '', email: '', role: '', id: ''}
    this.segmentValue = 'proveedores';
    

  }

  ngOnInit() {
    this.traerDatos();
  }

  async traerDatos(){
    const datos = localStorage.getItem('credentials');
    if(!datos){
      return;
    }
    const datos2 = JSON.parse(datos);
    const data = await this.authService.login(datos2.user);
    const results = await this.authService.traerDatos(data.user);
    console.log("DATOS DEL USER", results);
    this.user.username = results.results.username;
    this.user.id = results.results.id;
    
  }
}

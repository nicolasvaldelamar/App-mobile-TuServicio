import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseURL = 'http://localhost:8080'; // Reemplaza con la URL de tu backend

  constructor(private http: HttpClient) { }

  async register(user: any) {
    console.log("DATOS:",user);
    const url = `${this.baseURL}/register`;
    const response = await fetch(url,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    const data = await response.json();
    return data;
  }

  async login(credentials: any) {
    const url = `${this.baseURL}/login`;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
    const data = await response.json();
    return data;
  }

  async traerDatos(credentials: any){
    console.log("CREDENCIALES PARA TRAER DATOS", credentials) 
    const url = `${this.baseURL}/searchuser?id=${credentials}`;
    const response = await fetch(url,{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await response.json();
    console.log("DATA DEL USER", data);
    return data;
  }
  async updatePhoto(credentials: any){
    console.log(credentials, "Log de esto")
    const url = `${this.baseURL}/updatephoto?username=${credentials.username}&password=${credentials.password}&newimage=${credentials.newimage}`;
    const response = await fetch(url,{
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
    const data = await response.json();
    console.log("DATA DEL USERi", data);
    return data;
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
  idel: any;
  constructor() {
    this.irinfo();
   }

  ngOnInit() {
  
  }
  irinfo(){
    const datos = localStorage.getItem('credentials');
    if(!datos){
      return;
    }
    const datos2 = JSON.parse(datos);
    this.idel = datos2.id;
  
  }
  
}

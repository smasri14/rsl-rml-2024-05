import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonIcon } from '@ionic/angular/standalone';
import { Router} from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
  standalone: true,
  imports: [IonIcon, IonItem, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class InfoPage implements OnInit {

  constructor(private router:Router){}

  ngOnInit() {
  }

  goTo(pth:string){
    this.router.navigate([pth])
  }

}

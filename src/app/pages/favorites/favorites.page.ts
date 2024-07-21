import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonList, IonLabel } from '@ionic/angular/standalone';
import { ChemsService } from './../../services/chemicals.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
  standalone: true,
  imports: [IonLabel, IonList, IonItem, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule]
})
export class FavoritesPage {

  constructor(    
    public chmSrv: ChemsService
  ) { }

}

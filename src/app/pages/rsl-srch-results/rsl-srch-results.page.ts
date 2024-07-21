import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonFooter, IonCard, IonItem, IonCardTitle, IonList, IonCardHeader, IonIcon, IonLabel, IonBadge, IonCardSubtitle, IonCardContent, IonText } from '@ionic/angular/standalone';
import { informationCircle, star, starOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { ChemsService } from "./../../services/chemicals.service"
import { ChemData } from './../../services/chemicals';

@Component({
  selector: 'app-rsl-srch-results',
  templateUrl: './rsl-srch-results.page.html',
  styleUrls: ['./rsl-srch-results.page.scss'],
  standalone: true,
  imports: [IonText, IonCardContent, IonCardSubtitle, IonBadge, IonLabel, IonIcon, IonCardHeader, IonList, IonCardTitle, IonItem, IonCard, IonFooter, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule]
})
export class RslSrchResultsPage {
  constructor (
    public chmSrv: ChemsService
    , public chmdata: ChemData
  ){
    addIcons ({informationCircle, star, starOutline});
  }
} 




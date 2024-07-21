import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonFooter, IonCard, IonItem, IonCardTitle, IonList, IonCardHeader, IonIcon, IonLabel, IonBadge, IonCardSubtitle, IonCardContent, IonText } from '@ionic/angular/standalone';
import { ChemsService } from "./../../services/chemicals.service"
import { informationCircle, star, starOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { ChemData } from './../../services/chemicals';

@Component({
  selector: 'app-rml-srch-results',
  templateUrl: './rml-srch-results.page.html',
  styleUrls: ['./rml-srch-results.page.scss'],
  standalone: true,
  imports: [IonText, IonCardContent, IonCardSubtitle, IonBadge, IonLabel, IonIcon, IonCardHeader, IonList, IonCardTitle, IonItem, IonCard, IonFooter, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class RmlSrchResultsPage {

  constructor (
    public chmSrv: ChemsService
    , public chmdata: ChemData
  ){
    addIcons ({informationCircle, star, starOutline});
  }
  
}




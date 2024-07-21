import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonFooter, IonItem, IonCard, IonCardTitle, IonList, IonCardHeader, IonBadge, IonText, IonCardContent, IonCardSubtitle } from '@ionic/angular/standalone';
import { ChemsService } from "./../../services/chemicals.service"
import { ChemData } from './../../services/chemicals';

@Component({
  selector: 'app-srch-results',
  templateUrl: './srch-results.page.html',
  styleUrls: ['./srch-results.page.scss'],
  standalone: true,
  imports: [IonCardSubtitle, IonCardContent, IonText, IonBadge, IonCardHeader, IonList, IonCardTitle, IonCard, IonItem, IonFooter, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule]
})
export class SrchResultsPage  {
  star:string = "N";
  chm:any; 
  constructor (
    public chmSrv: ChemsService
    , public chmdata: ChemData
  ){
    this.chm = chmSrv.params["srch-results-chm"];
  }
}


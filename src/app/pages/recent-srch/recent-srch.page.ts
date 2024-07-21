import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonLabel } from '@ionic/angular/standalone';
import { ChemsService } from './../../services/chemicals.service';

@Component({
  selector: 'app-recent-srch',
  templateUrl: './recent-srch.page.html',
  styleUrls: ['./recent-srch.page.scss'],
  standalone: true,
  imports: [IonLabel, IonItem, IonList, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule]
})
export class RecentSrchPage {

  constructor
  (
    public chmSrv: ChemsService
  ) {
  }

}



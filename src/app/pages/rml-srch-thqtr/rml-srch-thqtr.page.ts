import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonList, IonIcon, IonLabel, IonFooter, IonGrid, IonRow, IonCol, IonButton } from '@ionic/angular/standalone';
import { ChemsService } from "src/app/services/chemicals.service"

@Component({
  selector: 'app-rml-srch-thqtr',
  templateUrl: './rml-srch-thqtr.page.html',
  styleUrls: ['./rml-srch-thqtr.page.scss'],
  standalone: true,
  imports: [IonButton, IonCol, IonRow, IonGrid, IonFooter, IonLabel, IonIcon, IonList, IonItem, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule]
})
export class RmlSrchThqtrPage {
  constructor (public chmSrv: ChemsService) {}
}



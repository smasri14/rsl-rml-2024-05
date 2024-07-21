import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonIcon, IonLabel, IonCol, IonButton, IonFooter, IonGrid, IonRow} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { checkmarkCircle, radioButtonOff } from 'ionicons/icons';
import { ChemsService } from './../../services/chemicals.service';

@Component({
  selector: 'app-rsl-srch',
  templateUrl: './rsl-srch.page.html',
  styleUrls: ['./rsl-srch.page.scss'],
  standalone: true,
  imports: [IonRow, IonFooter, IonButton, IonCol, IonLabel, IonIcon, IonItem, IonList, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, IonFooter, IonGrid]
})
export class RslSrchPage {
  constructor
  (
    public chmSrv: ChemsService
  ) {
    addIcons({checkmarkCircle, radioButtonOff});
  }
}

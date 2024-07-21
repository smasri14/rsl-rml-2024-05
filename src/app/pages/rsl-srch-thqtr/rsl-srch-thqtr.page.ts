import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonList, IonIcon, IonLabel, IonFooter, IonGrid, IonRow, IonCol, IonButton } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { checkmarkCircle, radioButtonOff } from 'ionicons/icons';
import { ChemsService } from "src/app/services/chemicals.service"

@Component({
  selector: 'app-rsl-srch-thqtr',
  templateUrl: './rsl-srch-thqtr.page.html',
  styleUrls: ['./rsl-srch-thqtr.page.scss'],
  standalone: true,
  imports: [IonButton, IonCol, IonRow, IonGrid, IonFooter, IonLabel, IonIcon, IonList, IonItem, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule]
})
export class RslSrchThqtrPage {
  constructor (public chmSrv: ChemsService) {
    addIcons({checkmarkCircle, radioButtonOff});
  }
}


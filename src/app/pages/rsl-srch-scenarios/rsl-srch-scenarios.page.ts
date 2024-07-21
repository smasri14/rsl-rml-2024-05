import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonIcon, IonItem, IonList, IonLabel, IonFooter, IonGrid, IonRow, IonCol, IonButton } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { checkmarkCircle, radioButtonOff } from 'ionicons/icons';
import { ChemsService } from "src/app/services/chemicals.service"

@Component({
  selector: 'app-rsl-srch-scenarios',
  templateUrl: './rsl-srch-scenarios.page.html',
  styleUrls: ['./rsl-srch-scenarios.page.scss'],
  standalone: true,
  imports: [IonButton, IonCol, IonRow, IonGrid, IonFooter, IonLabel, IonList, IonItem, IonIcon, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule]
})
export class RslSrchScenariosPage {
 constructor
  (
    public chmSrv: ChemsService
  ) {
    addIcons({checkmarkCircle, radioButtonOff });
  }

}
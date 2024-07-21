import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonLabel } from '@ionic/angular/standalone';
import { ChemsService } from "./../../services/chemicals.service"

@Component({
  selector: 'app-recent-srch-results',
  templateUrl: './recent-srch-results.page.html',
  styleUrls: ['./recent-srch-results.page.scss'],
  standalone: true,
  imports: [IonLabel, IonItem, IonList, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule]
})
export class RecentSrchResultsPage {

  constructor(    
    public chmSrv: ChemsService
  ) { }

}

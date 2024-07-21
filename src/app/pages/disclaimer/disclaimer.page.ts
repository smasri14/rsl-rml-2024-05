import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
//import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem } from '@ionic/angular/standalone';
import { ChemData } from 'src/app/services/chemicals';

@Component({
  selector: 'app-disclaimer',
  templateUrl: './disclaimer.page.html',
  styleUrls: ['./disclaimer.page.scss'],
  standalone: true,
  imports: [IonItem, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule]
})
export class DisclaimerPage {

  constructor(public chms: ChemData) {}

  numberOfChems: number = this.chms.substances;
  dataVersion: string = this.chms.dataVersion;
  appVersion: string = this.chms.appVersion; 


}

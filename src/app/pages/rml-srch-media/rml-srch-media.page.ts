import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonIcon, IonItem, IonList, IonLabel, IonFooter, IonGrid, IonRow, IonCol, IonButton } from '@ionic/angular/standalone';
import { ChemsService } from "src/app/services/chemicals.service"
//import { addIcons } from 'ionicons';
//import { checkmarkCircle, radioButtonOff } from 'ionicons/icons';

@Component({
  selector: 'app-rml-srch-media',
  templateUrl: './rml-srch-media.page.html',
  styleUrls: ['./rml-srch-media.page.scss'],
  standalone: true,
  imports: [IonButton, IonCol, IonRow, IonGrid, IonFooter, IonLabel, IonList, IonItem, IonIcon, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class RmlSrchMediaPage {
//  items: any[]=[];
//  itemsRes: any[]=[];
//  itemsInd: any[]=[];

  constructor (
       public chmSrv: ChemsService
  ) {
//      this.items = chmSrv.params['rml-srch-media'];
//      this.itemsRes = chmSrv.params['rml-srch-media'].filter(
//        (x:any) => { return x[2]==='Res'; }
//      );
//      this.itemsInd = chmSrv.params['rml-srch-media'].filter(
//        (x:any) => { return x[2]==='Ind'; }
//      );
  }

}



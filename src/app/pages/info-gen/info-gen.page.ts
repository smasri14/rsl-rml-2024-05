import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonIcon } from '@ionic/angular/standalone';
import { Router} from '@angular/router';


@Component({
  selector: 'app-info-gen',
  templateUrl: './info-gen.page.html',
  styleUrls: ['./info-gen.page.scss'],
  standalone: true,
  imports: [IonIcon, IonItem, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class InfoGenPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}


/*

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonIcon } from '@ionic/angular/standalone';
import { Router} from '@angular/router';


*/
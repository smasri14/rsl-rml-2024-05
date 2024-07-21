import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonIcon } from '@ionic/angular/standalone';
import { Router} from '@angular/router';

@Component({
  selector: 'app-info-rsl',
  templateUrl: './info-rsl.page.html',
  styleUrls: ['./info-rsl.page.scss'],
  standalone: true,
  imports: [IonIcon, IonItem, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class InfoRslPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonIcon } from '@ionic/angular/standalone';
import { Router} from '@angular/router';

@Component({
  selector: 'app-info-rml',
  templateUrl: './info-rml.page.html',
  styleUrls: ['./info-rml.page.scss'],
  standalone: true,
  imports: [IonIcon, IonItem, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class InfoRmlPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

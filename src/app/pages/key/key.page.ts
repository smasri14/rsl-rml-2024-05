import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem } from '@ionic/angular/standalone';

@Component({
  selector: 'app-key',
  templateUrl: './key.page.html',
  styleUrls: ['./key.page.scss'],
  standalone: true,
  imports: [IonItem, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class KeyPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

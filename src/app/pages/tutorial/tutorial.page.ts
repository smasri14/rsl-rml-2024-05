import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardTitle } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';
register();

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.page.html',
  styleUrls: ['./tutorial.page.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [IonCardTitle, IonCard, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule]
})
export class TutorialPage implements OnInit {

  constructor(private router: Router){}

  ngOnInit() {
  }

  goToHome() {
    this.router.navigate(['home'])
  }

  slides = [
    {
      title: "Getting Started",
      description: "Select the RSL or RML links at the bottom on the app to retrieve screening levels. Access the sidebar menu, by clicking the hamburger icon or swiping the screen from left to right, for features, support, and technical information.",
      image: "assets/icon/multimedia128.png",
    },
    {
      title: "RSL/RML Search",
      description: "Select chemicals from the list or use the search bar to find specific chemicals. Tap 'Select THQ and TR' to proceed to the next step or select 'All RSLs for Selected Chemicals' to retrieve all available screening values for the selected chemicals.",
      image: "assets/icon/search128.png",
    },
    {
      title: "Results",
      description: "The selected scenarios for selected chemicals will be displayed on the results screen. Click More Information to retrieve all available information for the selected chemicals.",
      image: "assets/icon/coolresults128.png",
    },
    {
      title: "Favorites",
      description: "On the results page, click the star to save a chemical(s) to your Favorites list (click again to unselect). The Favorites link from the sidebar menu allows you to quickly view results for any saved chemicals. On future searches, if you select the star again for a saved chemical, the data will be overwritten.",
      image: "assets/icon/star128.png",
    },
    {
      title: "Recent Search",
      description: "The results of your most recent RSL/RML Search will appear here. The list will be reset each time you retrieve results from RSL or RML Search. Access it from the side menu.",
      image: "assets/icon/search128.png",
    }
  ];




}

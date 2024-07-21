import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, Router, ActivatedRoute, NavigationStart, NavigationEnd, NavigationError, NavigationCancel, RoutesRecognized } from '@angular/router';
import { ChemsService } from './services/chemicals.service';
import { addIcons} from 'ionicons';
//import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError, RoutesRecognized, RouteConfigLoadStart, RouteConfigLoadEnd, ChildActivationStart, ChildActivationEnd } from '@angular/router';

import { 
    home, chevronBack, chevronBackSharp, chevronForward, chevronForwardSharp, checkmarkCircle
  , homeOutline, helpCircleOutline, informationCircleOutline,searchOutline, keyOutline, timeOutline, starOutline, warningOutline, personCircleOutline
  , homeSharp, helpCircleSharp, informationCircleSharp, searchSharp, keySharp, timeSharp, starSharp, warningSharp, personCircleSharp
} from 'ionicons/icons';

import { IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader
  , IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet
  , IonRouterLink, IonHeader, IonToolbar, IonFooter, IonBackButton
  , IonSearchbar, IonTitle, IonTabBar, IonMenuButton, IonButtons 
} from '@ionic/angular/standalone';


import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';
register();

/*
  rslSrchVal:string="";

  backUrls: string[] = [
    "rsl-srch-thqtr",
    "rsl-srch-scenarios",
    "rsl-srch-media",
    "rsl-srch-results",

    "rml-srch-thqtr",
    "rml-srch-scenarios",
    "rml-srch-media",
    "rml-srch-results",

    "srch-results",

    "info-rsl",
    "info-rml",
    "info-gen",

  ];

  urlHistory: string[] = [];

  rslChems: any[]=[];
  constructor(
    private router:Router
    , public chmSrv: ChemsService
  ) {

*/

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  
  imports: [
    IonButtons, IonTabBar, IonTitle, IonSearchbar, IonBackButton
    , IonFooter, IonToolbar, IonHeader, RouterLink, RouterLinkActive, CommonModule
    , IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote
    , IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterLink, IonRouterOutlet
    ,IonMenuButton
  ],

  providers: [ChemsService],
  
})

export class AppComponent {

  rslSrchVal:string="";

  backUrls: string[] = [
    "rsl-srch-thqtr",
    "rsl-srch-scenarios",
    "rsl-srch-media",
    "rsl-srch-results",

    "rml-srch-thqtr",
    "rml-srch-scenarios",
    "rml-srch-media",
    "rml-srch-results",

    "srch-results",

    "info-rsl",
    "info-rml",
    "info-gen",

  ];

  constructor(
    private router:Router
    , public chmSrv: ChemsService
  ) {
    addIcons({
      home, chevronBack, chevronBackSharp, chevronForward, chevronForwardSharp, checkmarkCircle
      , homeOutline, helpCircleOutline, informationCircleOutline, searchOutline, keyOutline, timeOutline, starOutline, warningOutline, personCircleOutline
      , homeSharp, helpCircleSharp, informationCircleSharp, searchSharp, keySharp, timeSharp, starSharp, warningSharp, personCircleSharp
    });

router.events.forEach((event) => {

    if(event instanceof NavigationStart) {
      let url = window.location.pathname.substring(1);
      this.prevUrl = url;
    }

    if(event instanceof NavigationEnd) {
      let pt:any = window.location.pathname.substring(1);
      this.pageTitle = this.pgTitles[pt];

      let url = window.location.pathname.substring(1);

      if (url === "rml-srch"){
        this.chmSrv.params["pathToSrchResRml"] = "";
      }
      if (url === "rsl-srch"){
        this.chmSrv.params["pathToSrchResRsl"] = "";
      }

      if (url === "rml-srch-results"){
        if (this.prevUrl === "rml-srch"){
          this.chmSrv.params["pathToSrchResRml"] = "rml-srch";
        }
        if (this.prevUrl === "rml-srch-media"){
          this.chmSrv.params["pathToSrchResRml"] = "rml-srch-media";
        }
      }
      if (url === "rsl-srch-results"){
        if (this.prevUrl === "rsl-srch"){
          this.chmSrv.params["pathToSrchResRsl"] = "rsl-srch";
        }
        if (this.prevUrl === "rsl-srch-media"){
          this.chmSrv.params["pathToSrchResRsl"] = "rsl-srch-media";
        }
      }

      if (
        this.backUrls.find(
         (x) => {
            return x === url
          }
        )
      ){
        this.showBackBtn = true;
        if ( this.urlHistory.length === 0 ){
          this.urlHistory.push(this.prevUrl);
          this.urlHistory.push(url);
        } else {
          if (
            !this.urlHistory.find(
              (x) => {
                 return x === url
               }
             )
          ){
            this.urlHistory.push(url);
          } else {
            this.urlHistory.pop();
          }

        }
      } else {
        this.showBackBtn = false;
        this.urlHistory= [];
      }

      this.showPageTitle = true;
      this.showRslSrch = false;
      if (url === "rsl-srch"){
        this.showRslSrch = true;
        this.showPageTitle = false;
      }

      this.showRmlSrch = false;
      if (url === "rml-srch"){
        this.showRmlSrch = true;
        this.showPageTitle = false;
      }

      if (url === "rml-srch-results" || url === "rsl-srch-results"){
        if (this.prevUrl === "srch-results"){
          return;
        }
        let sRslRml = url.split("-").splice(0,2).join("-");
        for (let i=0; i<chmSrv.params[sRslRml].length; i++){
          let fnd = "N";
          for (let j=0; j<chmSrv.params["recent-srch"].length; j++){
            if (chmSrv.params["recent-srch"][j][2] === chmSrv.params[sRslRml][i][2]){
              fnd = "Y";
              break;
            }
          }
          if (fnd === "N"){
            chmSrv.params["recent-srch"].push(chmSrv.params[sRslRml][i]);
          }
        }
        return;
      }
    }
  });


  }

  appPages:any[] = [
    { title: 'Home', url: 'home', icon: 'home' },
    { title: 'RSL/RML Info', url: 'info', icon: 'information-circle' },
    { title: 'Tutorial', url: 'tutorial', icon: 'help-circle' },
    { title: 'RSL Search', url: 'rsl-srch', icon: 'search' },
    { title: 'RML Search', url: 'rml-srch', icon: 'search' },
    { title: 'Key', url: 'key', icon: 'key' },
    { title: 'Recent Search', url: 'recent-srch', icon: 'time' },
    { title: 'Favorites', url: 'favorites', icon: 'star' },
    { title: 'Disclaimer', url: 'disclaimer', icon: 'warning' },
    { title: 'Contact Us', url: 'contacts', icon: 'person-circle' },
  ];

  pgTitles:any = {
    "home":"RML/RSL Home",
    "info":"RSL/RML Information",
    "info-rsl":"RSL Information",
    "info-rml":"RML Information",
    "info-gen":"RSL/RML Welcome",
    "tutorial":"RSL/RML Tutorial",
    "rsl-srch":"RSL Search",
    "rml-srch":"RML Search",
    "key":"RML/RSL Key",
    "recent-srch":"RSL/RML Recent Search",
    "favorites":"RSL/RML Favorites",
    "disclaimer":"RSL/RML Disclaimer",
    "contacts":"RSL/RML Contact Us",
    "rsl-thq-tr":"RSL/RML THQ and TR",
    "rml-results":"RML Search Results",
    "rml-thq-tr":"RSL THQ and TR",
    "rsl-srch-thqtr":"RSL THQ and TR",
    "rsl-srch-scenarios":"RSL Scenarios",
    "rsl-srch-media":"RSL Exposure Routes",
    "rsl-srch-results":"RSL Search Results",
    "rml-srch-thqtr":"RML THQ and TR",
    "rml-srch-scenarios":"RML Scenarios",
    "rml-srch-media":"RML Exposure Routes",
    "rml-srch-results":"RML Search Results",
    "srch-results":"RSL/RML Search Results"
  };

  pageTitle:string = "";
  prevUrl:string = "";
  showBackBtn:boolean = false;
  showRslSrch:boolean = false;
  showRmlSrch:boolean = false;
  showPageTitle:boolean = false;

  urlHistory: string[] = [];

  goBack(){
    let url = window.location.pathname.substring(1);
    this.chmSrv.params["prevUrl"] = url; 
    this.router.navigate([this.urlHistory[this.urlHistory.length-2]]);
  }


  /*
  goTo(pth:string){
    this.router.navigate([pth]);
  }
*/
/*
router.events.forEach((event)=>{
});
*/  

/*
router.events.forEach((event) => {

    if(event instanceof NavigationStart) {
      let url = window.location.pathname.substring(1);
      this.prevUrl = url;
    }

    if(event instanceof NavigationEnd) {
      let pt:any = window.location.pathname.substring(1);
      this.pageTitle = this.pgTitles[pt];

      let url = window.location.pathname.substring(1);

      if (url === "rml-srch"){
        this.chmSrv.params["pathToSrchResRml"] = "";
      }
      if (url === "rsl-srch"){
        this.chmSrv.params["pathToSrchResRsl"] = "";
      }

      if (url === "rml-srch-results"){
        if (this.prevUrl === "rml-srch"){
          this.chmSrv.params["pathToSrchResRml"] = "rml-srch";
        }
        if (this.prevUrl === "rml-srch-media"){
          this.chmSrv.params["pathToSrchResRml"] = "rml-srch-media";
        }
      }
      if (url === "rsl-srch-results"){
        if (this.prevUrl === "rsl-srch"){
          this.chmSrv.params["pathToSrchResRsl"] = "rsl-srch";
        }
        if (this.prevUrl === "rsl-srch-media"){
          this.chmSrv.params["pathToSrchResRsl"] = "rsl-srch-media";
        }
      }

      if (
        this.backUrls.find(
         (x) => {
            return x === url
          }
        )
      ){
        this.showBackBtn = true;
        if ( this.urlHistory.length === 0 ){
          this.urlHistory.push(this.prevUrl);
          this.urlHistory.push(url);
        } else {
          if (
            !this.urlHistory.find(
              (x) => {
                 return x === url
               }
             )
          ){
            this.urlHistory.push(url);
          } else {
            this.urlHistory.pop();
          }

        }
      } else {
        this.showBackBtn = false;
        this.urlHistory= [];
      }

      this.showPageTitle = true;
      this.showRslSrch = false;
      if (url === "rsl-srch"){
        this.showRslSrch = true;
        this.showPageTitle = false;
      }

      this.showRmlSrch = false;
      if (url === "rml-srch"){
        this.showRmlSrch = true;
        this.showPageTitle = false;
      }

      if (url === "rml-srch-results" || url === "rsl-srch-results"){
        if (this.prevUrl === "srch-results"){
          return;
        }
        let sRslRml = url.split("-").splice(0,2).join("-");
        for (let i=0; i<chmSrv.params[sRslRml].length; i++){
          let fnd = "N";
          for (let j=0; j<chmSrv.params["recent-srch"].length; j++){
            if (chmSrv.params["recent-srch"][j][2] === chmSrv.params[sRslRml][i][2]){
              fnd = "Y";
              break;
            }
          }
          if (fnd === "N"){
            chmSrv.params["recent-srch"].push(chmSrv.params[sRslRml][i]);
          }
        }
        return;
      }
    }
  });
*/


onSrchChng(event:any, srchType:string){
  if (srchType === "S") {
    this.chmSrv.rslApplySrch(event.detail.value);
  } else {
    this.chmSrv.rmlApplySrch(event.detail.value);
  }
}

}

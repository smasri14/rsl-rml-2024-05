import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ChemData } from './chemicals';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ChemsService {
  chms: ChemData["chemicals"] = [];

  params: any = {
    "rslSrchVal":"",
    "rmlSrchVal":"",
    "prevUrl":"",
    "pathToSrchResRml":"",
    "pathToSrchResRsl":"",
  
    "srch-results-chm":"",

    "favorites":[],
    "recent-srch":[],

    "rml-srch":[],
    "rsl-srch":[],

    /*
        [id, rsl selected, rml selected]
        [chemical name, CAS]

        [RSL_TR_10_6_THQ_01]
        [RSL_TR_10_6_THQ_1]

        [RML_TR_10_4_THQ_1]
        [RML_TR_10_4_THQ_3]

        */

      "rsl-srch-thqtr":[
        [0,"Target Risk 1E-6 and Hazard Quotient: 0.1","1E-6","0.1",2],
        [0,"Target Risk 1E-6 and Hazard Quotient: 1.0","1E-6","1.0",3]
      ],
    

      "rml-srch-thqtr":[
        [0,"Target Risk 1E-4 and Hazard Quotient: 1.0","1E-4","1.0",4],
        [0,"Target Risk 1E-4 and Hazard Quotient: 3.0","1E-4","3.0",5]
      ],
    

    
    
    "rsl-srch-scenarios":[
      [0,"Resident"],
      [0,"Industrial"]
    ],

    "rml-srch-scenarios":[
      [0,"Resident"],
      [0,"Industrial"]
    ],

    "rsl-srch-media":[
      [0,"Soil","Res", "mg/kg",0,1]
      , [0,"Tapwater","Res","ug/L",8,1]
      , [0,"Air","Res","ug/m^3",4,1]
      , [0,"Soil to Groundwater","Res","mg/kg",11,1]

      , [0,"Tapwater (MCL)","Res", "ug/L",10,0]
      , [0,"Soil to Groundwater (MCL)","Res","ug/L",13,0]

      , [0,"Soil","Ind","mg/kg",2,1]
      , [0,"Air","Ind","ug/m^3",6,1]
    ],

    "rml-srch-media":[
      [0, "Soil", "Res","mg/kg",0,1]
      , [0, "Tapwater","Res","ug/L",8,1]
      , [0, "Air", "Res","ug/m^3",4,1]
      , [0, "Tapwater (MCL)", "Res","ug/L",10,0]
      , [0, "Soil", "Ind","mg/kg",2,1]
      , [0, "Air", "Ind","ug/m^3",6,1]
    ],
    

/*
"rsl-srch-thqtr-new":[
  [0,"Target Risk 1E-6 and Hazard Quotient: 0.1","1E-6","0.1",3],
  [0,"Target Risk 1E-6 and Hazard Quotient: 1.0","1E-6","1.0",4]
],
*/



/*
    "rml-srch-thqtr":[
      [0,"Target Risk 1E-4 and Hazard Quotient: 1.0","1E-4","1.0",7],
      [0,"Target Risk 1E-4 and Hazard Quotient: 3.0","1E-4","3.0",8]
    ],
*/


/*
    "rsl-srch-thqtr":[
      [0,"Target Risk 1E-6 and Hazard Quotient: 0.1","1E-6","0.1",6],
      [0,"Target Risk 1E-6 and Hazard Quotient: 1.0","1E-6","1.0",5]
    ],
*/



/*

    "rsl-srch-media":[
      [0,"Soil","Res", "mg/kg",0,1]
      , [0,"Tapwater","Res","ug/L",8,1]
      , [0,"Air","Res","ug/m^3",4,1]
      , [0,"Soil to Groundwater","Res","mg/kg",11,1]
      , [0,"Tapwater (MCL)","Res", "ug/L",10,0]
      , [0,"Soil to Groundwater (MCL)","Res","ug/L",13,0]
      , [0,"Soil","Ind","mg/kg",2,1]
      , [0,"Air","Ind","ug/m^3",6,1]
    ],
*/
/*
    "rsl-srch-media":[
      [0,"Soil","Res", "mg/kg",0,1]
      , [0,"Tapwater","Res","ug/L",8,9]
      , [0,"Air","Res","ug/m^3",4,6]
      , [0,"Soil to Groundwater","Res","mg/kg",11,13]
      , [0,"Tapwater (MCL)","Res", "ug/L",10,11]
      , [0,"Soil to Groundwater (MCL)","Res","ug/L",13,12]
      , [0,"Soil","Ind","mg/kg",2,3]
      , [0,"Air","Ind","ug/m^3",6,7]
    ],
*/

/*
"rsl-srch-thqtr-new":[
  [0,"Target Risk 1E-6 and Hazard Quotient: 0.1","1E-6","0.1",3],
  [0,"Target Risk 1E-6 and Hazard Quotient: 1.0","1E-6","1.0",4]
],
*/



//    "rml-srch":[],
/*
    "rml-srch-thqtr":[
      [0,"Target Risk 1E-4 and Hazard Quotient: 1.0","1E-4","1.0",7],
      [0,"Target Risk 1E-4 and Hazard Quotient: 3.0","1E-4","3.0",8]
    ],
    "rml-srch-scenarios":[
      [0,"Resident"],
      [0,"Industrial"]
    ],
*/
/*
    "rml-srch-media":[
      [0, "Soil", "Res","mg/kg",0,1]
      , [0, "Tapwater","Res","ug/L",8,1]
      , [0, "Air", "Res","ug/m^3",4,1]
      , [0, "Tapwater (MCL)", "Res","ug/L",10,0]
      , [0, "Soil", "Ind","mg/kg",2,1]
      , [0, "Air", "Ind","ug/m^3",6,1]
    ],
*/    
  };

  alertMsgs :any = {
    "srch":{hdr:"Error", msg:"At least one Chemical must be checked!"}
    , "thqtr":{hdr:"Error", msg:"At least one Target Risk must be checked!"}
    , "scenarios":{hdr:"Error", msg:"At least one Scenario must be checked!"}
    , "media":{hdr:"Error", msg:"At least one Exposure Route must be checked!"}
  };

  paramsSrc = new BehaviorSubject<any>(this.params);
  paramsMsg = this.paramsSrc.asObservable();

  rslChms: ChemData["chemicals"] = [];
  rslChmsSrc = new BehaviorSubject<any[]>(this.rslChms);
  rslChmsMsg = this.rslChmsSrc.asObservable();

  rmlChms: ChemData["chemicals"] = [];
  rmlChmsSrc = new BehaviorSubject<any[]>(this.rmlChms);
  rmlChmsMsg = this.rmlChmsSrc.asObservable();

  constructor(
    private chemData : ChemData
    , private router: Router
    , private alertControler: AlertController

  ){
    this.chms = [...chemData.chemicals];
    this.rslChms = [...this.chms];
    this.rmlChms = [...this.chms];
  //  console.log(this.rslChms);
  //  console.log(this.rmlChms);
  }

  rslApplySrch(srch:string) {
    this.params.rslSrchVal = srch;
    srch = srch.toUpperCase()
    if (srch === ""){
      this.rslChms = [...this.chms];
    } else {
      this.rslChms =
        this.chms.filter((x:any) => {
          if (
            (x[1][0] + x[1][1]).toUpperCase().indexOf(srch) > -1
          ){
            return true;
          }
          return false;
        })
      ;
    }
    this.rslChmsSrc.next(this.rslChms);
    this.paramsSrc.next(this.params);
  }

  rmlApplySrch(srch:string) {
    this.params.rmlSrchVal = srch;
    srch = srch.toUpperCase()
    if (srch === ""){
      this.rmlChms = [...this.chms];
    } else {
      this.rmlChms =
        this.chms.filter((x:any) => {
          if (
            (x[1][0] + x[1][1]).toUpperCase().indexOf(srch) > -1
//            (x[3] + x[4]).toUpperCase().indexOf(srch) > -1
          ){
            return true;
          }
          return false;
        })
      ;
    }
    this.rmlChmsSrc.next(this.rmlChms);
    this.paramsSrc.next(this.params);
  }

/*  
  toggleStar(chm:any){
    for (let i=0; i<this.params["favorites"].length; i++){
      if (this.params["favorites"][i][2] === chm[2]){
          this.params["favorites"].splice(i,1);
          return;
        }
    }  
    this.params["favorites"].push(chm);
  }
*/

  toggleFavorite(item:any){
    item[9]===1? item[9]=0 : item[9]= 1;
    if (item[9] === 1){
      this.params["favorites"].push(item);
    } else {
      for (let i=0; i<this.params["favorites"].length; i++){
        if (this.params["favorites"][i][2] === item[2]){
          this.params["favorites"].splice(i,1);
            break;
        }
      }    
    }
  }

  toggleItem(item:any){
    let url = window.location.pathname.substring(1);
    let typ = 0;
    let indx = 0;
    if (url === 'rsl-srch'){
      indx = 1;
    }
    if (url === 'rml-srch'){
      indx = 2;
    }

    if (indx === 1 || indx === 2){
      item[0][indx]===1? item[0][indx]=0 : item[0][indx]= 1;
      typ = item[0][indx];
    } else {
      item[0]===1? item[0]=0 : item[0]= 1;
      typ = item[0];
    }

    if (indx === 0){
        item[0] = typ;
    } else {
      if (typ === 1){
        this.params[url].push(item);
      } else {
        for (let i=0; i<this.params[url].length; i++){
          if (this.params[url][i][2] === item[2]){
            this.params[url].splice(i,1);
            return;
          }
        }
      }    
    }

/*
    if ( (url === 'rml-srch-media' || url === 'rsl-srch-media') && (item[1] === 'Soil' || item[1] === 'Air')){
      for (let i=0; i< this.params[url].length; i++){
        if (this.params[url][i][1] === item[1]){
//          this.params[url][i][0] = item[indx];
          this.params[url][i][0] = item[0];
        }
      }
    }
*/
  }

  toggleAllItems(items:any[], typ: number) {

    let url = window.location.pathname.substring(1);
    if (url === 'rsl-srch'){
      for (let i=0; i<this.rslChms.length; i++){
        this.rslChms[i][0][1] = typ;
      }
      this.params[url].length = 0;
      return;
    }

    if (url === 'rml-srch'){
      for (let i=0; i<this.rmlChms.length; i++){
        this.rmlChms[i][0][2] = typ;
      }
      this.params[url].length = 0;
      return;
    }

    if (url !== 'rsl-srch' && url !== 'rml-srch' ){
      for (let i=0; i<this.params[url].length; i++){
        this.params[url][i][0] = typ;
      }
      return;
    }
  }

  goTo(rtEnd:string){
    let url = window.location.pathname.substring(1);
    this.params["prevUrl"] = url;

    if (!this.params[url]){
      this.router.navigate([rtEnd]);
      return;
    }

    //clears rsl media for unchecked senarios
    if (url === "rsl-srch-scenarios"){
      for (let i=0; i<this.params["rsl-srch-media"].length; i++){
        if (this.params["rsl-srch-scenarios"][0][0]===0 && this.params["rsl-srch-media"][i][2]==='Res'){
          this.params["rsl-srch-media"][i][0] = 0;
        }        
        if (this.params["rsl-srch-scenarios"][1][0]===0 && this.params["rsl-srch-media"][i][2]==='Ind'){
          this.params["rsl-srch-media"][i][0] = 0;
        }        
      }
    }    

    //clears rml media for unchecked senarios
    if (url === "rml-srch-scenarios"){
      for (let i=0; i<this.params["rml-srch-media"].length; i++){
        if (this.params["rml-srch-scenarios"][0][0]===0 && this.params["rml-srch-media"][i][2]==='Res'){
          this.params["rml-srch-media"][i][0] = 0;
        }        
        if (this.params["rml-srch-scenarios"][1][0]===0 && this.params["rml-srch-media"][i][2]==='Ind'){
          this.params["rml-srch-media"][i][0] = 0;
        }        
      }
    }    

    if (url === "rsl-srch" || url === "rml-srch" || url === "recent-srch" || url === "favorites"){
      if (this.params[url].length === 0){
        this.presentAlert(url);
      } else {
        this.router.navigate([rtEnd]);
      }
      return;
    }

    for (let i=0; i<this.params[url].length; i++){
      if (this.params[url][i][0] === 1){
        this.router.navigate([rtEnd]);
        return;
      }
    }
    this.presentAlert(url);
  }

  async presentAlert(url:string) {
    let urlParts = url.split("-");
    let msgType = urlParts[(urlParts.length-1)]
    const alert = await this.alertControler.create({
      header: this.alertMsgs[msgType].hdr,
      message: this.alertMsgs[msgType].msg,
      buttons: ['OK']
    });
    await alert.present();
  }

  goToSrchResults(chm:any){
    this.params["srch-results-chm"] = chm;
    this.goTo("srch-results");
  }  

}

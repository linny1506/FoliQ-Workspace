import { inject, Injectable } from '@angular/core';
import Airtable from 'airtable';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuizServiceService {
  base = new Airtable({apiKey:environment.airtable.privateAccessToken}).base(environment.airtable.baseID);

  http = inject(HttpClient);

  constructor() { }

  createUserTableRecord(name:string, email:string, ethnicity:string) {
    this.base(environment.airtable.userTable.name).create({
      // uID: ,
      name: name,
      email: email,
      ethnicity: ethnicity,
    }, function(err:any,record:any) {
      if(err) {
        console.log(err);
        return;
      }
      console.log(record.getId());      
    });
  }

  createPicturesTableRecord(mdidlePartURL:string, backHeadURL:string, rightTempleURL:string, leftTempleURL:string, currentProductsURL:string) {
    let content = {
      // "uID": ,
      "middlePart": [{ "url": mdidlePartURL, }],
      "backHead": [{ "url": backHeadURL, }],
      "rightTemple": [{ "url": rightTempleURL, }],
      "leftTemple": [{ "url": leftTempleURL, }],
      "currentProducts": [{ "url": currentProductsURL, }]
    };

    let output = this.http.post(environment.airtable.picturesTable.URL, content,
      { headers: new HttpHeaders({ Authorization: 'Bearer ' + environment.airtable.privateAccessToken,})}
    );

    output.subscribe((x) => {console.log(x); });
  }

  createUserProfileTableRecord(hairConcerns:string, scalpConcerns:string, hairTexture:string, postWash:string, dryTime:string, humidityEffect:string, scalpVisibility:string, hairThickness:string) {
    this.base(environment.airtable.userProfileTable.name).create({
      // uID: ,
      hairConcerns: hairConcerns,
      scalpConcerns: scalpConcerns,
      hairTexture: hairTexture,
      postWash: postWash,
      dryTime: dryTime,
      humidityEffect: humidityEffect,
      scalpVisibility: scalpVisibility,
      hairThickness: hairThickness,      
    }, function(err:any,record:any) {
      if(err) {
        console.log(err);
        return;
      }
      console.log(record.getId());      
    });
  }

  createLifestyleTableRecord(treatmentHistory:string,chemicallyProcessed:string,exerciseFrequency:string,shampooFrequency:string,hotToolsFrequency:string,stylingProducts:string,stylingProductFrequency:string,scalpTreatment:string) {
    this.base(environment.airtable.userTable.name).create({
      // uID: ,
      treatmentHistory: treatmentHistory,
      chemicallyProcessed: chemicallyProcessed,
      exerciseFrequency: exerciseFrequency,
      shampooFrequency: shampooFrequency,
      hotToolsFrequency: hotToolsFrequency,
      stylingProducts: stylingProducts,
      stylingProductFrequency: stylingProductFrequency,
      scalpTreatment: scalpTreatment,
    }, function(err:any,record:any) {
      if(err) {
        console.log(err);
        return;
      }
      console.log(record.getId());      
    });
  }

  createPreferencesTableRecord(numProductPreference:string, budget:string, shopPreferences:string, ZIPCode:string) {
    this.base(environment.airtable.userTable.name).create({
      // uID: ,
      numProductPreference: numProductPreference,
      budget: budget,
      shopPreferences: shopPreferences,
      ZIPCode: ZIPCode,
    }, function(err:any,record:any) {
      if(err) {
        console.log(err);
        return;
      }
      console.log(record.getId());      
    });
  }

  createFinalRecord(uID:string, questions:string, orderNumber:string) {
    this.base(environment.airtable.userTable.name).create({
      // uID: ,
      uID: uID,
      questions: questions,
      orderNumber: orderNumber,
    }, function(err:any,record:any) {
      if(err) {
        console.log(err);
        return;
      }
      console.log(record.getId());      
    });
  }



}

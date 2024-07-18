import { inject, Injectable } from '@angular/core';
import Airtable from 'airtable';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuizServiceService {
  // variable declaration needed for the whole service
  base = new Airtable({apiKey:environment.airtable.privateAccessToken}).base(environment.airtable.baseID);
  http = inject(HttpClient);  // HTTP client is only used for file submission, TODO: if able, figure out airtable.js attachment submission

  constructor() { }

  /** createUserTableRecord() 
   * @param name string, Name input of the form
   * @param email string, Email input of the form
   * @param ethnicity string, Ethnicity input of the form
   * @description Wrapper function for creating a new userTable record
   */
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

  /** createPicturesTableRecord() 
   * @param middlePartURL string, URL from a CDN to a picture of the middlePart of head
   * @param backHeadURL string, URL from a CDN to the backHead picture 
   * @param rightTempleURL string, URL from a CDN to the rightTemple picture
   * @param leftTempleURL string, URL from a CDN to the leftTemple picture
   * @param currentProductsURL string, URL from a CDN to the currentProducts picture
   * @description Wrapper function for creating a new picturesTable record
   */
  createPicturesTableRecord(middlePartURL:string, backHeadURL:string, rightTempleURL:string, leftTempleURL:string, currentProductsURL:string) {
    let content = {
      fields:{
        // "uID": ,
        "middlePart": [{ "url": middlePartURL, }],
        "backHead": [{ "url": backHeadURL, }],
        "rightTemple": [{ "url": rightTempleURL, }],
        "leftTemple": [{ "url": leftTempleURL, }],
        "currentProducts": [{ "url": currentProductsURL, }]
      }
    };

    let output = this.http.post(environment.airtable.picturesTable.URL, content,
      { headers: new HttpHeaders({ Authorization: 'Bearer ' + environment.airtable.privateAccessToken,})}
    );

    output.subscribe((x) => {console.log(x); });
  }

  /** createUserProfileTableRecord() 
   * @param hairConcerns string, hairConcern value to be added to new record
   * @param scalpConcerns string, scalpConcern value to be added to new record
   * @param hairTexture string, hairTexture value to be added to new record
   * @param postWash string, postWash value to be added to new record
   * @param dryTime string, dryTime value to be added to new record
   * @param humidityEffect string, humidityEfect value to be added to new record
   * @param scalpVisibility string, scalpVisibility value to be added to new record
   * @param hairThickness string, hairThickness value to be added to new record
   * @description Wrapper function for creating a new userProfileTable record
   */
  createUserProfileTableRecord(hairConcerns:string, scalpConcerns:string, hairTexture:string, postWash:string, dryTime:string, humidityEffect:string, scalpVisibility?:string, hairThickness?:string) {
    this.base(environment.airtable.userProfileTable.name).create({
      // uID: ,
      hairConcerns: hairConcerns,
      scalpConcerns: scalpConcerns,
      hairTexture: hairTexture,
      postWash: postWash,
      dryTime: dryTime,
      humidityEffect: humidityEffect,
      scalpVisibility: scalpVisibility, // TODO: These are left unimplemented for the time being. When implemented, remove the '?' from the parameters
      hairThickness: hairThickness,     // TODO: These are left unimplemented for the time being. When implemented, remove the '?' from the parameters
    }, function(err:any,record:any) {
      if(err) {
        console.log(err);
        return;
      }
      console.log(record.getId());      
    });
  }

  /** createLifestyleTableRecord() 
   * @param treatmentHistory string, treatmentHistory value to be added to new record
   * @param chemicallyProcessed string, chemicallyProcessed value to be added to new record
   * @param exerciseFrequency string, exerciseFrequency value to be added to new record
   * @param shampooFrequency string, shampooFrequency value to be added to new record
   * @param hotToolsFrequency string, hotToolsFrequency value to be added to new record
   * @param stylingProducts string, stylingProduct value to be added to new record
   * @param stylingProductFrequency string, stylingProductFrequency value to be added to new record
   * @param scalpTreatment string, scalpTreatment value to be added to new record
   * @description Wrapper function for creating a new lifestyleTable record
   */
  createLifestyleTableRecord(treatmentHistory:string,chemicallyProcessed:string,exerciseFrequency:string,shampooFrequency:string,hotToolsFrequency:string,stylingProducts:string,stylingProductFrequency:string,scalpTreatment:string) {
    this.base(environment.airtable.lifestyleTable.name).create({
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

  /** createPreferencesTableRecord() 
   * @param numProductPreference string, numProductPreference value to be added to new record
   * @param budget string, budget value to be added to new record
   * @param shopPreferences string, shopPreferences value to be added to new record
   * @param ZIPCode string, ZIPCode value to be added to new record
   * @description Wrapper function for creating a new preferencesTable record
   */
  createPreferencesTableRecord(numProductPreference:string, budget:string, shopPreferences:string, ZIPCode:string) {
    this.base(environment.airtable.preferencesTable.name).create({
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

  /** createFinalRecord() 
   * @param questions string, questions value to be added to new record
   * @param consent string, consent value to be added to new record
   * @param orderNumber string, orderNumber value to be added to new record
   * @description Wrapper function for creating a new final record
   */
  createFinalRecord(questions:string, consent:string, orderNumber:string) {
    this.base(environment.airtable.finalTable.name).create({
      // uID: ,
      questions: questions,
      consent: consent,
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

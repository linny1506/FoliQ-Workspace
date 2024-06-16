import { Injectable } from '@angular/core';
import { Firestore, doc, setDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreFileCdnService {
  // Code from: https://medium.com/@0ka/angular-firebase-create-and-read-e1fa37494f30
  // supplimented with: https://firebase.google.com/docs/firestore/quickstart?authuser=0&hl=en&_gl=1*xt9487*_ga*NzU0MjAwNDc2LjE3MTAwNzcwMTM.*_ga_CW55HF8NVT*MTcxODEyMDM4Ny4yOC4xLjE3MTgxMjI4OTkuNDMuMC4w#web_2
  constructor(public firestore: Firestore) { }

  special = doc(this.firestore, 'dailySpecial/2021-09-14');


  createRobot(name: string, color: string, age: string) {
    let docData = {
      name: "name",
      color: "color",
      age: "age",     
    };

    setDoc(this.special, docData);
  }
}

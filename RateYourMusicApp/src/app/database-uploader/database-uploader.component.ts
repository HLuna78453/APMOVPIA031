import { Component, OnInit } from '@angular/core';

import { 
  IonHeader, IonContent, IonTitle, IonToolbar, IonInput, IonItem, IonDatetime,
  IonSelect, IonSelectOption, IonLabel, IonButton 
} from "@ionic/angular/standalone";

import { FormControl, FormsModule } from '@angular/forms';
import { AlbumData } from '../app.albumInterface';

import { 
  Firestore, collection, addDoc
} from '@angular/fire/firestore';

import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-database-uploader',
  templateUrl: './database-uploader.component.html',
  styleUrls: ['./database-uploader.component.scss'],
  standalone: true,
  imports: [
    IonButton, IonLabel, IonDatetime, IonItem, IonInput, IonContent, 
    IonHeader, IonTitle, IonToolbar, IonSelect, IonSelectOption, FormsModule,
    ReactiveFormsModule
  ]
})
export class DatabaseUploaderComponent  implements OnInit {

  constructor(private firestore: Firestore) { }

  ngOnInit() {}

  addData(f:any) {
    console.log(f.value);

    const albumCollectionInstante = collection(this.firestore, 'Album');
    addDoc(albumCollectionInstante, f.value)
      .then(()=>{
        console.log('Data Saved Success');
      })
      .catch((err) =>{
        console.log(err);
      })
  }

}

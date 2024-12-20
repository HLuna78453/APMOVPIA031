import { Component, input, OnInit } from '@angular/core';

import { 
  IonContent, IonInput, IonItem, IonDatetime,
  IonSelect, IonSelectOption, IonButton
} from "@ionic/angular/standalone";

import { FormControl, FormGroup } from '@angular/forms';
import { AlbumData } from '../app.albumInterface';

import { 
  Firestore, collection, addDoc
} from '@angular/fire/firestore';

import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-album-profile-editor',
  templateUrl: './album-profile-editor.component.html',
  styleUrls: ['./album-profile-editor.component.scss'],
  standalone: true,
  imports:[
    IonContent, IonInput, IonItem, IonDatetime,
    IonSelect, IonSelectOption, IonButton, ReactiveFormsModule
  ]
})
export class AlbumProfileEditorComponent  implements OnInit {
  profileForm = new FormGroup({
    Name: new FormControl(''),
    Artist: new FormControl(''),
    ReleaseDate: new FormControl(''),
    Type: new FormControl('')
  });

  //value = input.required<IonModal>();

  constructor(private firestore: Firestore) {

   }

  ngOnInit() {}

  onSubmit(){
    console.log(this.profileForm.value);

    const albumCollectionInstante = collection(this.firestore, 'Album');
    addDoc(albumCollectionInstante, this.profileForm.value)
      .then(()=>{
        console.log('Data Saved Success');
      })
      .catch((err) =>{
        console.log(err);
      })
  }
}

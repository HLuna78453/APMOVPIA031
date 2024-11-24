import { Component, ViewChild } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { 
  IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonNavLink, IonButton, IonNav, IonModal,
  IonButtons
} from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { Observable } from 'rxjs';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { NgFor } from '@angular/common';
import { AlbumData } from '../app.albumInterface';
import { addDoc } from 'firebase/firestore';
import { DatabaseUploaderComponent } from '../database-uploader/database-uploader.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonModal, IonNav, IonButton, IonNavLink, IonLabel, IonItem, IonList,
    IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent,
    AsyncPipe, IonList, IonItem, IonLabel, NgFor, IonButtons],
})
export class Tab1Page {
  album$: Observable<AlbumData[]>;
  @ViewChild('nav') private nav: IonNav;
  
  albumUploader = DatabaseUploaderComponent;

  constructor(private fs: Firestore) {
    const albumCollection = collection(this.fs, 'Album');
    this.album$ = collectionData(albumCollection) as Observable<AlbumData[]>;
 
    console.log(this.album$);
  }

  addData(f: any) {
    const albumCollection = collection(this.fs, 'Album');
    addDoc(albumCollection, f.value)
      .then(() => {
        console.log('Data Saves Succesfully');
      })
      .catch((err) => {
        console.log(err);
      })
  }

  onWillPresent() {
    this.nav.setRoot(DatabaseUploaderComponent);
  }
}
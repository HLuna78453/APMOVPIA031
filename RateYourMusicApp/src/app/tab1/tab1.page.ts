import { Component, ViewChild } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { 
  IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonNavLink, IonButton, IonNav, IonModal,
  IonButtons
} from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { Observable } from 'rxjs';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { doc, getDocs, getFirestore, QuerySnapshot } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { NgFor } from '@angular/common';
import { AlbumData } from '../app.albumInterface';
import { addDoc } from 'firebase/firestore';
import { AlbumProfileEditorComponent } from '../album-profile-editor/album-profile-editor.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [
    IonModal, IonNav, IonButton, IonNavLink, IonLabel, IonItem, IonList,
    IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent,
    AsyncPipe, IonList, IonItem, IonLabel, NgFor, IonButtons, AlbumProfileEditorComponent,
    RouterOutlet, RouterLink, RouterLinkActive
  ]
})

const firebaseConfig = {
  apiKey: "AIzaSyDUpSHZSeDA_x_ZmIJ2_w2fNPBzuUsFxIw",
  authDomain: "rymapp-unofficial-1948924.firebaseapp.com",
  projectId: "rymapp-unofficial-1948924",
  storageBucket: "rymapp-unofficial-1948924.firebasestorage.app",
  messagingSenderId: "584881246596",
  appId: "1:584881246596:web:1205d5ffaec9b3b5c0cdd1"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const querySnaptot = await getDocs(collection(db, "Album"));
querySnaptot.forEach((doc) => {
  console.log(doc.id, "-", doc.data());
})

export class Tab1Page {
  album$: Observable<AlbumData[]>;

  

  constructor(/*private fs: Firestore*/) {
    //const albumCollection = collection(this.fs, 'Album');
    //this.album$ = collectionData(albumCollection) as Observable<AlbumData[]>;
  }

  /*addData(f: any) {
    const albumCollection = collection(this.fs, 'Album');
    addDoc(albumCollection, f.value)
      .then(() => {
        console.log('Data Saves Succesfully');
      })
      .catch((err) => {
        console.log(err);
      })
  }*/
}
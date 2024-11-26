import { Component, ViewChild } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { 
  IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonNavLink, IonButton, IonNav, IonModal,
  IonButtons
} from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { Observable } from 'rxjs';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { doc, getDoc, getDocs, getFirestore, query, QuerySnapshot } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { NgFor } from '@angular/common';
//import { AlbumData } from '../app.albumInterface';
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

export class Tab1Page {
  album$!: Observable<any>;

  constructor(private fs: Firestore) {
    /*const albumCollection = collection(this.fs, 'Album')
    this.album$ = collectionData(albumCollection) as Observable<AlbumData[]>;*/
    this.getData();
  }

  getData () {
    const albumCollection = collection(this.fs, 'Album');
    collectionData(albumCollection)
    .subscribe(v => {
      console.log(v);
    })

    this.album$ = collectionData(albumCollection);
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

export interface AlbumData {
  name: string;
  artist: string;
  genres: string[];
  releaseDate: Date;
  type: string;
  id?: string;
}
import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { Observable } from 'rxjs';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonLabel, IonItem, IonList, 
    IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent,
    AsyncPipe, IonList, IonItem, IonLabel, NgFor
  ],
})
export class Tab1Page {
  private firestore: Firestore = inject(Firestore);
  album$: Observable<any[]>;

  constructor() {
    const AlbumCollection = collection(this.firestore, 'Album')
    this.album$ = collectionData(AlbumCollection) as Observable<AlbumData[]>;
    console.log(this.album$);
  }

}

export interface AlbumData {
  name: string;
  //artist: string;
  //genres: string[];
  //releaseDate: Date;
  //type: string;
}
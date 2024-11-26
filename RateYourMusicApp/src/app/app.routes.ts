import { Routes } from '@angular/router';
import { AlbumProfileEditorComponent } from './album-profile-editor/album-profile-editor.component';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'app-album-profile-editor', component: AlbumProfileEditorComponent
  }
];

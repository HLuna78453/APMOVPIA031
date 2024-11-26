import { getFirestore, getDocs, collection } from "firebase/firestore";
import { initializeApp } from "firebase/app";

export class firebaseData {
    constructor() {
        
    }

    firebaseConfig = {
        apiKey: "AIzaSyDUpSHZSeDA_x_ZmIJ2_w2fNPBzuUsFxIw",
        authDomain: "rymapp-unofficial-1948924.firebaseapp.com",
        projectId: "rymapp-unofficial-1948924",
        storageBucket: "rymapp-unofficial-1948924.firebasestorage.app",
        messagingSenderId: "584881246596",
        appId: "1:584881246596:web:1205d5ffaec9b3b5c0cdd1"
      };
    
    app = initializeApp(this.firebaseConfig);
    
    db = getFirestore(this.app);
    
    querySnapshot = getDocs(collection(this.db, "Album"));

    /*querySnapshot.forEach((doc) => {
      console.log(doc.id, "-", doc.data());
    })*/
}


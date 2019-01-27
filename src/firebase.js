import { firebase } from "@firebase/app";
import "@firebase/firestore";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBVcXM4ko75est9JzHnKah1biGzFmNA0XE",
    authDomain: "briskless.firebaseapp.com",
    databaseURL: "https://briskless.firebaseio.com",
    projectId: "briskless",
    storageBucket: "briskless.appspot.com",
    messagingSenderId: "756951969529"
  });


export const db = firebaseApp.firestore();

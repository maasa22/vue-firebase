import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebase from "firebase";

require("firebase/firestore");
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBQGej66R4LOpTsxD4Rh4TInFGZBRGAc94",
  authDomain: "yt-vue-firestore-chat229.firebaseapp.com",
  databaseURL: "https://yt-vue-firestore-chat229.firebaseio.com",
  projectId: "yt-vue-firestore-chat229",
  storageBucket: "yt-vue-firestore-chat229.appspot.com",
  messagingSenderId: "707927048585",
  appId: "1:707927048585:web:8248de537e13c62cdc6158",
  measurementId: "G-RJF934N6CB"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

window.db = db;

firebase.analytics();

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

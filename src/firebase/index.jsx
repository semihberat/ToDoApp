// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCjmxMXu-VCjlaKzaZ7DQRQ502sJjckQcY',
  authDomain: 'todo-app-211e2.firebaseapp.com',
  projectId: 'todo-app-211e2',
  storageBucket: 'todo-app-211e2.appspot.com',
  messagingSenderId: '920597882170',
  appId: '1:920597882170:web:01462da6f8bfa920145c03',
  measurementId: 'G-B8WQWB2ET6',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

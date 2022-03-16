import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAqRT8LOZaQNNoD9xOCvXScauBduYpaofg',
  authDomain: 'r-native-auth-722bd.firebaseapp.com',
  projectId: 'r-native-auth-722bd',
  storageBucket: 'r-native-auth-722bd.appspot.com',
  messagingSenderId: '127420628860',
  appId: '1:127420628860:web:fa0394e39ac813be1eaef9',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {firebaseConfig} from './firebaseConfig'

// Initialize Firebase
const auth = getAuth(initializeApp(firebaseConfig));
export default auth;

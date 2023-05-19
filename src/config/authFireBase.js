import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_API_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PTOJECT_API,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)



// {"web":
// {"client_id":"41077317893-c70mkemrrvhs1rr28usjajj00ajrru6f.apps.googleusercontent.com",
// "project_id":"saif-387022",
// "auth_uri":"https://accounts.google.com/o/oauth2/auth",
// "token_uri":"https://oauth2.googleapis.com/token",
// "auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs",
// "client_secret":"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",
// "redirect_uris":["http://localhost:3000/auth/google/callback"]}}
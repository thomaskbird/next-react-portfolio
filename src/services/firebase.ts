import { getApp, getApps, initializeApp } from "@firebase/app";
import { collection, getFirestore, orderBy } from "@firebase/firestore";
import moment from "moment";
import config from "~/config/sites";
import { query } from "@firebase/database";
import { FirestoreDatabase } from "@firebase/firestore-compat/dist/src/index.console";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
};

const renderFirestoreTimestamp = (timestamp: any) =>
  moment(timestamp.toDate()).format(config.momentFormat);

let firestoreDb: FirestoreDatabase | null = null;
let thomaskbird = null;

try {
  if (!getApps().length) {
    thomaskbird = initializeApp(firebaseConfig);
  } else {
    thomaskbird = getApp();
  }

  firestoreDb = getFirestore(thomaskbird);
} catch (e) {
  console.log("e", e);
}

const collectionJobs = collection(firestoreDb, "jobs");

const queryAllJobsOrdered = query(collectionJobs, orderBy("endAt", "desc"));

export {
  firestoreDb,
  thomaskbird,
  renderFirestoreTimestamp,
  queryAllJobsOrdered,
};

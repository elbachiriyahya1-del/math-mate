import * as admin from "firebase-admin";
import serviceAccount from "../../../math-mate-d6532-firebase-adminsdk-fbsvc-45b3461299.json";

if (!admin.apps.length) {
  try {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount as any),
      storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    });
  } catch (error) {
    console.error("Firebase admin initialization error", error);
  }
}

export const adminDb = admin.firestore();
export const adminAuth = admin.auth();
export const adminStorage = admin.storage();

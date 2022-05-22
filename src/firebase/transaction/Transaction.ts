import {
  createUserWithEAPAsync,
  getAuthAsync,
  sendEmailVerificationAsync,
  sendPasswordResetEmailAsync,
  signInWithEAPAsync,
  signInWithProviderAsync,
  updateProfileAsync,
} from "./async/authAsync";

import {
  addDocAsync,
  deleteDocAsync,
  getDocAsync,
  queryDocAsync,
  setDocAsync,
  updateDocAsync,
} from "./async/firestoreAsync";

import {
  deleteFileAsync,
  deleteManyFilesAsync,
  downloadUrlAsync,
  uploadFileAsync,
} from "./async/storageAsync";

class AuthFirebase {
  getAuth = getAuthAsync;

  updateProfile = updateProfileAsync;

  createUserWithEAP = createUserWithEAPAsync;

  signInWithEAP = signInWithEAPAsync;

  signInWithProvider = signInWithProviderAsync;

  sendPasswordResetEmail = sendPasswordResetEmailAsync;

  sendEmailVerification = sendEmailVerificationAsync;
}

class Firestore {
  getDoc = getDocAsync;
  
  setDoc = setDocAsync;

  addDoc = addDocAsync;

  updateDoc = updateDocAsync;

  deleteDoc = deleteDocAsync;

  query = queryDocAsync;
}

class Storage {
  deleteFile = deleteFileAsync;

  deleteManyFile = deleteManyFilesAsync;

  downloadUrl = downloadUrlAsync;

  uploadFile = uploadFileAsync;
}

class Transaction {
  firestore = new Firestore();
  storage = new Storage();
  auth = new AuthFirebase();
}

export default Transaction;

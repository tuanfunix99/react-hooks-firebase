import {
  addDoc,
  CollectionReference,
  deleteDoc,
  DocumentReference,
  getDoc,
  getDocs,
  query,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { ConstraintObject } from "../../base";
import { FunctionAsyncThrowError } from "../../utils/FunctionAsync";
import { mapToDocumentData, mapToQueryConstraintArray } from "../../utils/map";

export const addDocAsync = (collection: CollectionReference, value: any) =>
  FunctionAsyncThrowError(async () => {
    const data = await addDoc(collection, value);
    return data;
  });

export const deleteDocAsync = (doc: DocumentReference) =>
  FunctionAsyncThrowError(async () => {
    await deleteDoc(doc);
    return true;
  });

export const getDocAsync = (doc: DocumentReference) =>
  FunctionAsyncThrowError(async () => {
    const snapshot = await getDoc(doc);
    return snapshot;
  });

export const queryDocAsync = (
  collection: CollectionReference,
  constraints: ConstraintObject
) =>
  FunctionAsyncThrowError(async () => {
    const q = query(collection, ...mapToQueryConstraintArray(constraints));
    const snapshot = await getDocs(q);
    const snapshotData = mapToDocumentData(snapshot.docs);
    return snapshotData;
  });

export const setDocAsync = (doc: DocumentReference, value: any) =>
  FunctionAsyncThrowError(async () => {
    await setDoc(doc, value);
    return true;
  });

export const updateDocAsync = (doc: DocumentReference, value: any) =>
  FunctionAsyncThrowError(async () => {
    await updateDoc(doc, value);
    return true;
  });

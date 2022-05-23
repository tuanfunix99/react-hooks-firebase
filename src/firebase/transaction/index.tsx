import onTransactionCallback from "./onTransactionCallback";
import { useAuth } from "../auth";
import { useFireStore } from "../firestore";
import { useStorage } from "../storge";

export function useTransaction() {
  const {
    auth,
    googleProvider,
    githubProvider,
    facebookProvider,
    twitterProvider,
  } = useAuth();
  const { createDocRef, createCollection } = useFireStore();
  const { createStorageRef } = useStorage();

  return {
    auth,
    googleProvider,
    githubProvider,
    facebookProvider,
    twitterProvider,
    onTransactionCallback,
    createDocRef,
    createCollection,
    createStorageRef,
  };
}

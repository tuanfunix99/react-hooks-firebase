import { ProviderObject } from "./base";
import {
  FacebookAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
  TwitterAuthProvider,
} from "firebase/auth";

export const providerObject: ProviderObject = {
  google: new GoogleAuthProvider(),
  github: new GithubAuthProvider(),
  facebook: new FacebookAuthProvider(),
  twitter: new TwitterAuthProvider(),
};

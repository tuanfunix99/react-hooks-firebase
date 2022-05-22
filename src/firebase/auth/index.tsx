import {GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import createUserWithEAPCallback from "./callback/createUserWithEAPCallback";
import signInWithEAPCallback from "./callback/signInWithEAPCallback";
import SignInWithProviderCallback from "./callback/signInWithProviderCallback";
import sendPasswordResetEmailCallback from "./callback/sendPasswordResetEmailCallback";
import updateProfileCallback from "./callback/updateProfileCallback";
import getAuthCallback from "./callback/getAuthCallBack";
import signOutCallback from "./callback/signOutCallback";
import sendEmailVerificationCallback from "./callback/sendEmailVerificationCallback";

import getAuthAsync from "./async/getAuthAsync";
import updateProfileAsync from "./async/updateProfileAsync";
import createUserWithEAPAsync from "./async/createUserWithEAPAsync";
import signInWithEAPAsync from "./async/signInWithEAPAsync";
import signInWithProviderAsync from "./async/signInWithProviderAsync";
import sendPasswordResetEmailAsync from "./async/sendPasswordResetEmailAsync";
import sendEmailVerificationAsync from "./async/sendEmailVerificationAsync";
import returnAuth from "./auth";


export const useAuth = () => {
  const auth = returnAuth();

  const googleProvider = new GoogleAuthProvider();

  const githubProvider = new GithubAuthProvider();

  return {
    auth,
    googleProvider,
    githubProvider,
    createUserWithEAPCallback,
    signInWithEAPCallback,
    SignInWithProviderCallback,
    sendPasswordResetEmailCallback,
    updateProfileCallback,
    sendEmailVerificationCallback,
    getAuthCallback,
    signOutCallback,
    getAuthAsync,
    updateProfileAsync,
    createUserWithEAPAsync,
    signInWithEAPAsync,
    signInWithProviderAsync,
    sendPasswordResetEmailAsync,
    sendEmailVerificationAsync,
  };
};

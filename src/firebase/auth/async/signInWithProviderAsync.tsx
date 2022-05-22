import {
  signInWithPopup,
  signInWithRedirect,
  getRedirectResult,
  User,
  Auth,
  GoogleAuthProvider,
  GithubAuthProvider
} from "firebase/auth";
import { FunctionAsyncReturnError } from "../../utils/FunctionAsync";

const SignInWithProviderAsync = (
  auth: Auth,
  provider: GoogleAuthProvider | GithubAuthProvider,
  type: "popup" | "redirect"
) => {
  if (type === "redirect") {
    signInWithRedirect(auth, provider);
    return FunctionAsyncReturnError<User>(async () => {
      const userCredential = await getRedirectResult(auth);
      return userCredential!.user;
    })
  }
  else{
    return FunctionAsyncReturnError<User>(async () => {
      const userCredential = await signInWithPopup(auth, provider);
      return userCredential.user;
    })
  }
}

export default SignInWithProviderAsync;

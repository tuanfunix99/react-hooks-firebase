import { useState } from "react";
import {
  User,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  getRedirectResult,
  GithubAuthProvider,
} from "firebase/auth";
import { FunctionCallback, FunctionParamCallback } from "../../base";
import returnAuth from "../auth";

type Param = {
  provider: GoogleAuthProvider | GithubAuthProvider;
  type: "popup" | "redirect";
  onCompleted?: (data?: User) => void;
  onError?: (error: any) => void;
};

const SignInWithProviderCallback: FunctionCallback<Param> = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState<User | null | undefined>(null);
  const auth = returnAuth();

  const signIn: FunctionParamCallback<Param> = ({
    provider,
    type,
    onCompleted,
    onError,
  }) => {
    setLoading(true);
    if (type === "redirect") {
      signInWithRedirect(auth, provider);
      getRedirectResult(auth)
        .then((userCredential) => {
          setLoading(false);
          const user = userCredential?.user;
          setData(user);
          if (onCompleted) {
            onCompleted(user);
          }
        })
        .catch((err) => {
          setLoading(false);
          setError(err);
          if (onError) {
            onError(err);
          }
        });
    } else {
      signInWithPopup(auth, provider)
        .then((userCredential) => {
          setLoading(false);
          const user = userCredential.user;
          setData(user);
          if (onCompleted) {
            onCompleted();
          }
        })
        .catch((err) => {
          setLoading(false);
          setError(err);
          if (onError) {
            onError(err);
          }
        });
    }
  };

  return [signIn, { loading, error, data }];
};

export default SignInWithProviderCallback;

import { useState } from "react";
import {signOut } from "firebase/auth";
import { FunctionCallback, FunctionParamCallback } from "../../base";
import returnAuth from "../auth";

type Param = {
  onCompleted?: () => void;
  onError?: (error: any) => void;
};

const SignOutCallback: FunctionCallback<Param> = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const auth = returnAuth();

  const signOutFunc: FunctionParamCallback<Param> = ({
    onCompleted,
    onError,
  }) => {
    setLoading(true);
    signOut(auth)
      .then(() => {
        setLoading(false);
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
  };

  return [signOutFunc, { loading, error }];
};

export default SignOutCallback;

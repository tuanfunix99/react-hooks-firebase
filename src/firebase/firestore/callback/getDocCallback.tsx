import { useState } from "react";
import { getDoc, DocumentReference, DocumentData } from "firebase/firestore";
import { FunctionCallback, FunctionParamCallback } from "../../base";

type Param = {
  doc: DocumentReference;
  onCompleted?: (data: any) => void;
  onError?: (error: any) => void;
};

const GetDocCallback: FunctionCallback<Param> = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState<DocumentData>();

  const getDocFunc: FunctionParamCallback<Param> = ({
    doc,
    onCompleted,
    onError,
  }) => {
    setLoading(true);
    getDoc(doc)
      .then((snapshot) => {
        setLoading(false);
        if (!snapshot.exists()) {
          throw new Error("Snapshot not found");
        }
        setData(snapshot);
        if (onCompleted) {
          onCompleted(snapshot);
        }
      })
      .catch((error) => {
        setLoading(false);
        setError(error);
        if (onError) {
          onError(error);
        }
      });
  };

  return [getDocFunc, { data, loading, error }];
};

export default GetDocCallback;

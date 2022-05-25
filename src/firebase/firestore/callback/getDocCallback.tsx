import { useState } from "react";
import { getDoc, DocumentReference } from "firebase/firestore";
import { FunctionCallback, FunctionParamCallback, SnapshotDocumentMap, Process } from "../../base";

type Param = {
  doc: DocumentReference;
  onCompleted?: (data: SnapshotDocumentMap) => void;
  onError?: (error: any) => void;
};

const GetDocCallback: FunctionCallback<Param, Process> = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState<SnapshotDocumentMap>();

  const getDocFunc: FunctionParamCallback<Param> = ({
    doc,
    onCompleted,
    onError,
  }) => {
    setLoading(true);
    getDoc(doc)
      .then((snapshot) => {
        setLoading(false);
        const mapData: SnapshotDocumentMap = {
          id: snapshot.id,
          data: snapshot.data(),
          ref: snapshot.ref,
          exists: snapshot.exists(),
          get: snapshot.get
        }
        setData(mapData);
        if (onCompleted) {
          onCompleted(mapData);
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

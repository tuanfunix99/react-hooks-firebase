import { useState } from "react";
import { CollectionReference, query, getDocs } from "firebase/firestore";
import {
  FunctionCallback,
  FunctionParamCallback,
  ConstraintObject,
  SnapshotDocumentMap,
  Process,
} from "../../base";
import { mapToDocumentData, mapToQueryConstraintArray } 
from "../../utils/map";

type Param = {
  collection: CollectionReference;
  constraints: ConstraintObject;
  onCompleted?: (data: Array<SnapshotDocumentMap>) => void;
  onError?: (error: any) => void;
};

const QueryDocCallback: FunctionCallback<Param, Process> = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState<Array<SnapshotDocumentMap>>([]);

  const queryDocFunc: FunctionParamCallback<Param> = ({
    collection,
    constraints,
    onCompleted,
    onError,
  }) => {
    setLoading(true);
    const q = query(collection, ...mapToQueryConstraintArray(constraints));
    getDocs(q)
      .then((snapshot) => {
        setLoading(false);
        if (snapshot.empty) {
          throw new Error("Snapshot not found");
        }
        const snapshotData = mapToDocumentData(snapshot.docs);
        setData(snapshotData);
        if (onCompleted) {
          onCompleted(snapshotData);
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

  return [queryDocFunc, { data, loading, error }];
};

export default QueryDocCallback;

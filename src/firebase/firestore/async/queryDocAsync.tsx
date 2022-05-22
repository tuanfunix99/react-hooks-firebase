import { getDocs, query, CollectionReference } from "firebase/firestore";
import { ConstraintObject } from "../../base";
import { mapToDocumentData, mapToQueryConstraintArray } from "../../utils/map";
import { FunctionAsyncReturnError } from "../../utils/FunctionAsync";

const QueryDocAsync = (
  collection: CollectionReference,
  constraints: ConstraintObject
) =>
  FunctionAsyncReturnError(async () => {
    const q = query(collection, ...mapToQueryConstraintArray(constraints));
    const snapshot = await getDocs(q);
    const snapshotData = mapToDocumentData(snapshot.docs);
    return snapshotData;
  });

export default QueryDocAsync;

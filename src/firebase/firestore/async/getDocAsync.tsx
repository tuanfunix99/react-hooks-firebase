import { getDoc, DocumentReference } from "firebase/firestore";
import { SnapshotDocumentMap } from "../../base";
import { FunctionAsyncReturnError } from "../../utils/FunctionAsync";

const GetDocAsync = (doc: DocumentReference) =>
  FunctionAsyncReturnError(async () => {
    const snapshot = await getDoc(doc);
    const mapData: SnapshotDocumentMap = {
      id: snapshot.id,
      data: snapshot.data(),
      ref: snapshot.ref,
      exists: snapshot.exists(),
      get: snapshot.get,
    };
    return mapData;
  });

export default GetDocAsync;

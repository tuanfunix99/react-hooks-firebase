import {
  QueryDocumentSnapshot,
  QueryConstraint,
  where,
  limit,
  orderBy,
  DocumentData,
} from "firebase/firestore";
import { ConstraintObject, MapToDocumentDataReturnType } from "../base";

export const mapToDocumentData = (
  docs: QueryDocumentSnapshot<DocumentData>[]
): Array<MapToDocumentDataReturnType> => {
  const arr: Array<MapToDocumentDataReturnType> = [];
  if (docs.length > 0) {
    docs.forEach((doc) => {
      const result: MapToDocumentDataReturnType = {
        id: doc.id,
        data: doc.data(),
        ref: doc.ref,
        exists: doc.exists(),
        get: doc.get,
      };
      arr.push(result);
    });
  }
  return arr;
};

export const mapToQueryConstraintArray = (
  constraintObject: ConstraintObject
) => {
  const constraints: QueryConstraint[] = [];
  if (constraintObject.where) {
    constraintObject.where.forEach((wh) => {
      constraints.push(where(wh.fieldPath, wh.opStr, wh.value));
    });
  }
  if (constraintObject.limit) {
    constraints.push(limit(constraintObject.limit));
  }
  if (constraintObject.orderBy) {
    constraints.push(
      orderBy(
        constraintObject.orderBy.fieldPath,
        constraintObject.orderBy.directionStr
      )
    );
  }
  return constraints;
};

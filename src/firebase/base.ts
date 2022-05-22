import {
  DocumentData,
  DocumentReference,
  FieldPath,
  WhereFilterOp,
  OrderByDirection,
} from "firebase/firestore";

type Process = {
  loading?: boolean;
  error?: any;
  data?: any;
  progress?: number;
};

export type FunctionParamCallback<T> = (input: T) => void;

export type FunctionCallback<T> = () => [
  func: FunctionParamCallback<T>,
  process: Process
];

export type FunctionAsync<T, U> = (input: T) => Promise<Partial<U>>

export type MapToDocumentDataReturnType = {
  id: string;
  data: DocumentData;
  ref: DocumentReference<DocumentData>;
  exists: boolean;
  get: any;
};

export type WhereType = {
  fieldPath: string | FieldPath;
  opStr: WhereFilterOp;
  value: unknown;
};

export type OrderByType = {
  fieldPath: string | FieldPath;
  directionStr?: OrderByDirection;
};

export type ConstraintObject = {
  where?: Array<WhereType>;
  limit?: number;
  orderBy?: OrderByType;
};

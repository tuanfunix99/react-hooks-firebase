import {
  DocumentData,
  DocumentReference,
  FieldPath,
  WhereFilterOp,
  OrderByDirection,
} from "firebase/firestore";
import { ToUnion } from "./utils/toUnion";

export interface Process {
  loading?: boolean;
  error?: any;
  data?: any;
};

export type FunctionParamCallback<T> = (input: T) => void;

export type FunctionCallback<T, U extends Process> = () => [
  func: FunctionParamCallback<T>,
  process: U
];

export type FunctionAsync<T, U> = (input: T) => Promise<Partial<U>>

export type SnapshotDocumentMap = {
  id: string;
  data?: DocumentData;
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

interface ProviderUnion{
  google: string;
  github: string;
  facebook: string;
  twitter: string;
}

export type ProviderType = ToUnion<ProviderUnion>;

export type ProviderObject = {
  [Property in keyof ProviderUnion]: any;
}

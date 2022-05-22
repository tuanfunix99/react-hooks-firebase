# React-hooks-firebase-v9

## Installation

Use npm to install react-hooks-firebase-v9

```bash
npm install react-hooks-firebase-v9
```

## Usage

## useAuth()

index.tsx

```typescript
import { FirebaseProvider, createApp } from "react-hooks-firebase-v9";

const app = createApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
});

<FirebaseProvider app={app}>
  <App />
</FirebaseProvider>;
```

createUserWithEAP: create user with email and password

```typescript
import { useAuth } from "react-hooks-firebase-v9";

/* use with callback */
const { createUserWithEAPCallback } = useAuth();
const [createUser, { loading, data, error }] = createUserWithEAPCallback();

console.log(data);
console.log(error);
console.log(loading);

const onClickHandler = () => {
  createUser({
    value: {
      email: "exmaple@gmail.com",
      password: "123456",
    },
    onCompleted(data) {
      console.log(data);
    },
    onError(error) {
      alert(error);
    },
  });
};

/* use with async */
const { auth, createUserWithEAPAsync } = useAuth();

const onClickHandler = async () => {
  const { data, error } = await createUserWithEAPAsync(
    auth,
    "example@gmail.com",,
    "123456"
  );
  if (error) {
    alert(error);
  }
  console.log(data);
};
```

signInWithEAP: signin with email and password

```typescript
import { useAuth } from "react-hooks-firebase-v9";

/* use with callback */
const { signInWithEAPCallback } = useAuth();
const [signIn, { loading, data, error }] = signInWithEAPCallback();

console.log(data);
console.log(error);
console.log(loading);

const onClickHandler = () => {
  signIn({
    value: {
      email: "example@gmail.com",
      password: "123456",
    },
    onCompleted(data) {
      console.log(data);
    },
    onError(error) {
      alert(error);
    },
  });
};

/* use with async */
const { auth, signInWithEAPAsync } = useAuth();

const onClickHandler = async () => {
  const { data, error } = await signInWithEAPAsync(
    auth,
    "example@gmail.com",
    "123456"
  );
  if (error) {
    alert(error);
  }
  console.log(data);
};
```

signInWithProvider: signin with provider google, github,...

```typescript
import { useAuth } from "react-hooks-firebase-v9";

/* use with callback */
same other callback in useAuth

/* use with async */
const { auth, googleProvider, signInWithProviderAsync } = useAuth();

const onClickHandler = async () => {
    const { data, error } = await signInWithProviderAsync(
      auth,
      googleProvider,
      "popup" /* popup or redirect */
    );
    if (error) {
      alert(error);
    }
    console.log(data);
  };
```

getaAuth: get user login

```typescript
import { useAuth } from "react-hooks-firebase-v9";

/* use with callback */
same other callback in useAuth

/* use with async */
const { auth, getAuthAsync } = useAuth();

useEffect(() => {
  const get = async () => {
   const { data, error } = await getAuthAsync(auth);
     if (error) {
        alert(error);
      }
     console.log(data);
    };
    get();
 }, []);
```

signOut

```typescript
import { useAuth } from "react-hooks-firebase-v9";

/* use with callback */
const { signOutCallback } = useAuth();
const [signOut, { loading, data, error }] = signOutCallback();

console.log(data);
console.log(error);
console.log(loading);

const onClickHandler = () => {
    signOut({
      onCompleted() {
        alert("success");
      },
      onError(error) {
        alert(error);
      },
    });
 };

/* use with async */
same other async in useAuth
```
sendEmailVerification: send link verifired mail

sendPasswordResetEmail: send link reset password

updateProfileAsync: update displayName or photoUrl

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)

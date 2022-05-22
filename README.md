# React-hooks-firebase-v9

## Installation

Use npm to install react-hooks-firebase-v9

```bash
npm install react-hooks-firebase-v9
```

## Usage

## useAuth()

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

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)

import firebase from "../../firebase"

import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

const auth = getAuth(firebase);


export default async function signUp(email, password) {
    let result = null,
        error = null;
    try {
        result = await createUserWithEmailAndPassword(auth, email, password);
    } catch (e) {
        error = e;
    }

    return { result, error };
}


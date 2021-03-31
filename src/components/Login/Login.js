import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';


if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }


const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const handleSignIn = () =>{
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then((result) => {
    // var credential = result.credential;
    // var token = credential.accessToken;
    // var user = result.user;
    // console.log(user);
    const {displayName, email, photoURL} = result.user;
    const signedInUser = {
        issSignedIn: true,
        name: displayName,
        email: email,
        photo: photoURL
      };
    console.log(signedInUser);
    setLoggedInUser(signedInUser);
  }).catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
    var credential = error.credential;
    console.log(errorMessage, errorCode, email);
  });
    }
    return (
        <div>
            <button onClick={handleSignIn}>Sign In With Google</button>
        </div>
    );
};

export default Login;
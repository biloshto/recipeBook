// service called for creating users, signing users in, and so on

import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  token: string;

  constructor(private router: Router) {}

  signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(
        response => {
          this.router.navigate(['/signin']);
          // when we sign up we're getting redirected to the sign in page
        }
      )
      .catch(
        error => console.log(error)
      );
  }

  signinUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        response => {
          this.router.navigate(['/']);
          // when we sign in we're getting redirected to the root page
          firebase.auth().currentUser.getIdToken()
            .then(
              (token: string) => this.token = token
            )
        }
      )
      .catch(
        error => console.log(error)
      );
  }

  logout() {
    firebase.auth().signOut();
    this.token = null;
    this.router.navigate(['/']);
    // when we log out we're getting redirected to the root page
  }

  getToken() {
    firebase.auth().currentUser.getIdToken()
      .then(
        (token: string) => this.token = token
      );
    return this.token;
    // this is async action because Firebase behind the scene does not only retrieve the token from local storage, which would be sync action, but it will automatically check if the token is still valid and if it's invalid, because it expired, it tries to give us a new one and will reach to the back-end automatically
  }

  isAuthenticated() {
    return this.token != null;
    // if it is null that means we're not authenticated
  }
}


// $npm install --save firebase (to use firebase with the SDK)
// to be able to use the Firebase SDK we need to configure it and we should do that at the point of time our app starts, so good place for that would be in the app.component on the OnInit() hook
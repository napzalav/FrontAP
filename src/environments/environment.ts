// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    projectId: 'frontendcda',
    appId: '1:366624506119:web:b9864bca4d9304fb7505a2',
    storageBucket: 'frontendcda.appspot.com',
    locationId: 'southamerica-east1',
    apiKey: 'AIzaSyBCYSyn6nF4QF1VV49F1EvHQxA98ilm3OQ',
    authDomain: 'frontendcda.firebaseapp.com',
    messagingSenderId: '366624506119',
  },
  production: false,

  URL: 'http://localhost:8080/',
  // URL: 'https://backendcda.onrender.com'
  // URL: 'https://backendcda.herokuapp.com/'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

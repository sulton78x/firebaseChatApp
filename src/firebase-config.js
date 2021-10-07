/**
 * To find your Firebase config object:
 *
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
	/* TODO: ADD YOUR FIREBASE CONFIGURATION OBJECT HERE */
	// For Firebase JS SDK v7.20.0 and later, measurementId is optional

	apiKey: "AIzaSyBKATzpaLsR0CP8RoyeTvpCcxwwFpXRGYo",
	authDomain: "fir-chat-8030e.firebaseapp.com",
	projectId: "fir-chat-8030e",
	storageBucket: "fir-chat-8030e.appspot.com",
	messagingSenderId: "38653860143",
	appId: "1:38653860143:web:f2beadf04f9c405d18a9da",
	measurementId: "G-NBTMXZ196R",
};

export function getFirebaseConfig() {
	if (!config || !config.apiKey) {
		throw new Error(
			"No Firebase configuration object provided." +
				"\n" +
				"Add your web app's configuration object to firebase-config.js"
		);
	} else {
		return config;
	}
}

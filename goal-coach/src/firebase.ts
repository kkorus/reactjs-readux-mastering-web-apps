import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyD4ACwN19NZnsxQpqsXsG6GqNLRn6WIdfA',
  authDomain: 'goal-coach-5f047.firebaseapp.com',
  databaseURL: 'https://goal-coach-5f047.firebaseio.com',
  projectId: 'goal-coach-5f047',
  storageBucket: '',
  messagingSenderId: '344349049389'
};

export const firebaseApp = firebase.initializeApp(config);
export const goalRef = firebase.database().ref('goals');
export const completeGoalRef = firebase.database().ref('completeGoals');
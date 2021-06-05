// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyAj2NFuTWN4hVh576Pr0dRBdfNwnrfwxFQ",
      authDomain: "my-kwitter-app-e891c.firebaseapp.com",
      projectId: "my-kwitter-app-e891c",
      storageBucket: "my-kwitter-app-e891c.appspot.com",
      messagingSenderId: "829572493516",
      appId: "1:829572493516:web:55f7863f5d42c4b4601269"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

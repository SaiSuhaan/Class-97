
var firebaseConfig = {
      apiKey: "AIzaSyCM36RitKHlEEwFPayXKYwHKxMMs1gmgio",
      authDomain: "kwitter-c00a6.firebaseapp.com",
      databaseURL: "https://kwitter-c00a6-default-rtdb.firebaseio.com",
      projectId: "kwitter-c00a6",
      storageBucket: "kwitter-c00a6.appspot.com",
      messagingSenderId: "168716446824",
      appId: "1:168716446824:web:30152a71a6f06f15255fdd",
      measurementId: "G-S6N94D11XB"
    };
  
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome "+user_name+" !";

  
    function addRoom()
    {
      room_name = document.getElementById("room_name").value;
    
      firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
      });
    
        localStorage.setItem("room_name", room_name);
       
        window.location = "kwitter_page.html";
    }
    
    function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
           Room_names = childKey;
           console.log("Room Name - " + Room_names);
          row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
          document.getElementById("output").innerHTML += row;
        });
      });
    
    }
    
    getData();
    
    function redirectToRoomName(name)
    {
      console.log(name);
      localStorage.setItem("room_name", name);
        window.location = "kwitter_page.html";
    }
    
    function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
        window.location = "index.html";
    }
    

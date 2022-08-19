// firebase config
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js";
  import { getDatabase, ref, set, get, child, push, update } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-database.js";


  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBcJ89A1qA-32LVJIcPlLde_5h93NNVJe8",
    authDomain: "atm-project-ebdec.firebaseapp.com",
    projectId: "atm-project-ebdec",
    storageBucket: "atm-project-ebdec.appspot.com",
    messagingSenderId: "144103181907",
    appId: "1:144103181907:web:5b171bcd583844c8b900a6"
  };







//register and login validations 

window.onload = function(){

    const app = initializeApp(firebaseConfig);
    const db = getDatabase();
    const dbRef = ref(db);





    document.getElementById('switchToReg').onclick = switchToReg;
    document.getElementById('switchToLogin').onclick = switchToLogin;
    document.getElementById('login-btn').onclick = loginValidation;
    document.getElementById('register-btn').onclick = registrationValidation;

    function switchToReg(){
        document.getElementById('register-portal').style = "display:inline-block";
        document.getElementById('login-portal').style = "display:none";
    }

    function switchToLogin(){
        document.getElementById('register-portal').style = "display:none";
        document.getElementById('login-portal').style = "display:inline-block";
    }


    // acc no and pin pattern
    var accNoPat = "^[0-9]{6}$";
    var accPinPat = "^[0-9]{4}$";

    // login validation 
    function loginValidation(){
        var lAccNo = document.getElementById('lAccNo').value;
        var lAccPin = document.getElementById('lAccPin').value;

        if (lAccNo.match(accNoPat) && lAccPin.match(accPinPat)) {
            alert("welcome!");
            portal(lAccNo,lAccPin);
        }
        else{
            alert("invalid info!");
        }
    }


     // registration validation 
     function registrationValidation(){
        var rAccName = document.getElementById('rAccName').value;
        var rAccNo = document.getElementById('rAccNo').value;
        var rAccPin = document.getElementById('rAccPin').value;
        var rConAccPin = document.getElementById('rConAccPin').value;

        if (rAccNo.match(accNoPat) && rAccPin.match(accPinPat) && rAccName!=null && rAccPin==rConAccPin) {
            set(ref(db, "accNo "+rAccNo+"/accPin "+rAccPin+"/accDetails"),{
                name: rAccName,
                availBal: 0
            }).then(()=>{
                alert("Registration Completed!");
            }).catch((error)=>{
                alert("Registration Failed!"+error);
            });

            set(ref(db, "accNo "+rAccNo+"/recivedBal"),{
                recived: 0
            }).then(()=>{
                console.log("recived amount updated!");
            }).catch((error)=>{
                alert("recived amount update Failed!"+error);
            });
        }
        else{
            alert("Fill all ino correctly!");
        }
    }

    function portal(accNo,accPin){
        document.getElementById('login-portal').style = "display:none";
        document.getElementById('register-portal').style = "display:none";
        document.getElementById('portal').style = "display:inline-block";

        var name,availBal,totalBal, recivedBal;
        // getting data from firebase
        get(child(dbref, "accNo "+rAccNo+"/accPin "+rAccPin+"/accDetails")).then((snapshot)=>{
            if (snapshot.exists()) {
                name: snapshot.val().name;
                availBal: snapshot.val().availBal;
                document.getElementById("").innerHTML = "Hi ".name;

            }
            else{
                alert("No data available!");
            }
        }).catch((error)=>{
            alert("error While getting data\n"+error);
        });
    }



}
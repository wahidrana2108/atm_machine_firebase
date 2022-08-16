window.onload = function(){
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
            alert("welcome!");
        }
        else{
            alert("Fill all ino correctly!");
        }
    }
}
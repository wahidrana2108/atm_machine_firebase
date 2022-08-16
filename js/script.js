window.onload = function(){
    document.getElementById('switchToReg').onclick = switchToReg;
    document.getElementById('switchToLogin').onclick = switchToLogin;

    function switchToReg(){
        document.getElementById('register-portal').style = "display:inline-block";
        document.getElementById('login-portal').style = "display:none";
    }

    function switchToLogin(){
        document.getElementById('register-portal').style = "display:none";
        document.getElementById('login-portal').style = "display:inline-block";
    }
}
document.getElementById("seatno").addEventListener("change",changetotal);
document.getElementById("adminbutton").addEventListener("click", displaylogin);
document.getElementById("loginbutton").addEventListener("click",loginvalidate);
document.getElementById("loginexit").addEventListener("click",closelogin);
document.getElementById("clear").addEventListener("click",resettotal);
function changetotal(){
    let seats = document.getElementById("seatno").value;
    let total = seats * 500;

    document.getElementById("total").innerHTML = "Total: " + total + " TK";
}

function validateForm(){
    let name = document.getElementById("name").value;
    let id = document.getElementById("id").value;
    let email = document.getElementById("email").value;
    let seatno = document.getElementById("seatno").value;
    let message = document.getElementById("error");
    let emailmod = /@(gmail|yahoo)\.com$/;
    let idmod = /^\d{2}-\d{5}-\d$/;
    if(name === "" || id === "" || email === "" || seatno === ""){
        message.innerHTML = "Please fill up all fields";
        return false;
    }
    if(!emailmod.test(email)){
        message.innerHTML = "Please input a valid email";
        return false;
    }
    if(!idmod.test(id)){
        message.innerHTML = "Please input valid student ID";
        return false;
    }
}

function loginvalidate(){
    let username = document.getElementById("uname").value;
    let pass = document.getElementById("pass").value;
    if(username!=="admin" || pass!=="admin"){
        document.getElementById("loginerror").innerHTML = "Incorrect Username/Password";
    }
    else{
        window.location.href = "./admin.html";
    }
}

function displaylogin(){
    document.getElementById("overlay").style.display = "block";
}

function closelogin(){
    document.getElementById("overlay").style.display = "none";
}

function resettotal(){
    document.getElementById("total").innerHTML = "Total: 0 TK";
}
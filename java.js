function web(){

    var username=document.getElementById("username").Value;
    var password=document.getElementById("password").Value;
    if(username=="webcompetition"&& password=="nec")
    {
        alert("login succesfully");
        return false;
    }
    else
    {
        alert("login failed");
    }
}
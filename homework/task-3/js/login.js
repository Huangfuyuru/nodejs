window.onload=function(){
    var username = document.getElementById('username');
    var pwd = document.getElementById('pwd');
    var login = document.getElementById('login');
    var arr = {};
    login.onclick=function(){
        arr.username = username.nodeValue;
        arr.pwd = username.pwd;
        arr = JSON.parse(arr);
        fetch('http://192.168.58.144:8080/login/',{method:'POST',body:arr}).then((res)=>{
            console.log(res);
        })
    }
}

window.onload=function(){
    var username = document.getElementById('username');
    var pwd = document.getElementById('pwd');
    var login = document.getElementById('login');
    var arr = {};

    login.onclick=function(){
        arr.username = username.value;
        arr.pwd = pwd.value;
        arr = JSON.stringify(arr)
        fetch('http://192.168.58.144:8080/login/',
            {method:'POST',
            body:arr,
          headers:new Headers({
            'Content-Type':'application/json'
          })
          }).then((res)=>{
            console.log('你好');
            console.log(res.text());
            console.log(res.text().PromiseValue);
            //document.location = res.text().PromiseValue;
        })
    }
}

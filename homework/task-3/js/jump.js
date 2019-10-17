window.onload=function(){
    var dian = document.getElementById('dian');

    dian.onclick=function(){
        console.log('jump');
        fetch('http://192.168.102.144:8080/login/').then((res)=>{
            console.log('fetch');
            return res;
        })
    }
}

window.onload=function(){
    function fetchMsg(){
        console.log('jump');
        fetch('http://192.168.102.144:8080/detail?chapterId=4').then((res)=>{
            console.log('fetch');
            return res;
        })
    }
}
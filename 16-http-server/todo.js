window.onload=function(){
  var todo = document.getElementById('todo');
  var btnOk = document.getElementById('okButton');
  var out = document.getElementById('output');
  var items = [];
  getItems();
  todo.onclick=function(){
    if(todo.value === '') return;
    fetch('http://192.168.102.144:3000',{method:'POST',body:todo.value})
    items.push(todo.value);
    showData();
}
  function getItems(){
    fetch('http://192.168.102.144:3000/').then((res)=>{
      res.text().then((txt)=>{
        items = JSON.parse(txt);
        showData();
      })
    })
}
  function showData(){
    out.innerHTML = '';
    var ul = document.createElement('ul');
    ul.innerHTML=items.map((item)=>{
      return '<li>'+item+'</li>';
    }).join('\n');
    out.appendChild(ul);
  }

}

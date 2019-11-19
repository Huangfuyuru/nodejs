// process.stdout.write('asd')

// process.on('message', (msg) => {
//     process.send('子进程' + msg)
//   })

process.on('message',(m)=>{
    console.log('子进程接收到消息'+m)
    process.send(m)
})
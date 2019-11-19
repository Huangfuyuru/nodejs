// const path = require('path')
// const { spawn } = require('child_process')

// let p = spawn('node', ['childs_t.js'], {
//   cwd: path.join(__dirname),
//   stdio: ['pipe', 'pipe', process.stderr]
// })

// p.stdout.on('data', (data) => {
//   console.log(data.toString())
// }) 


// const path = require('path')
const { spawn } = require('child_process')

let p = spawn('node', ['child_t.js'], {
  stdio: ['ipc', 'pipe', 'pipe']
})

p.on('message', (msg) => {
  console.log(msg)
})

p.send('hello chhild_process')

// const { fork } = require('child_process')
// const path = require('path')
// let child = fork(path.join(__dirname, 'childs_t.js'))

// child.on('message', (data) => {
//   console.log('父进程接收到消息' + data)
// })

// child.send('hello fork')

// child.on('error', (err) => {
//   console.error(err)
// })



const {ipcMain} = require('electron')

ipcMain.on('asynchronous-message', (event, arg) => {
  console.log(event, arg) // prints "ping"
  event.reply('asynchronous-reply', 'pong')
})

ipcMain.on('test-message', (event, arg) => {
  console.log('test-message', arg) // prints "ping"
  event.reply('asynchronous-reply', 'test received')
})

ipcMain.on('synchronous-message', (event, arg) => {
  console.log(event, arg) // prints "ping"
  event.returnValue = 'pong'
})

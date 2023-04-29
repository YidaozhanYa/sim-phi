const {app, BrowserWindow} = require('electron')
const serve = require('electron-serve')

const loadURL = serve({directory: '.'})

let win

(async () => {
	await app.whenReady()
	win = new BrowserWindow({
		autoHideMenuBar: true
	})
	await loadURL(win)
})()

import { electronApp, optimizer } from '@electron-toolkit/utils'
import { BrowserWindow, app, shell } from 'electron'
import isDev from 'electron-is-dev'
import { join } from 'path'

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 900,
    height: 670,
    minWidth: 900,
    minHeight: 670,
    show: false,
    autoHideMenuBar: true
    // ...(process.platform === 'linux' ? { icon } : {}),
    // webPreferences: {
    //   preload: join(__dirname, './preload.js'),
    //   sandbox: false
    // }
  })

  mainWindow.on('ready-to-show', () => {
    mainWindow.show()
    mainWindow.maximize()
  })

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  mainWindow.loadURL(isDev ? 'http://localhost:5173' : `file://${join(__dirname, '../index.html')}`)
  if (isDev) {
    mainWindow.webContents.openDevTools()
  }
}

app.whenReady().then(() => {
  electronApp.setAppUserModelId('com.electron')

  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window)
  })

  createWindow()

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

import { BrowserWindow, Menu } from 'electron'

export const setMainMenu = (mainWindow: BrowserWindow): void => {
  const template: Electron.MenuItemConstructorOptions[] = [
    {
      label: 'Inicio',
      submenu: [{ role: 'about' }, { type: 'separator' }, { role: 'quit' }]
    },
    {
      label: 'Configuración',
      submenu: [
        { role: 'toggleDevTools' },
        { type: 'separator' },
        {
          label: 'Temas',
          submenu: [
            {
              label: 'Tema Oscuro',
              click: () => mainWindow.webContents.send('theme', 'dark')
            },
            {
              label: 'Tema Claro',
              click: () => mainWindow.webContents.send('theme', 'light')
            }
          ]
        }
      ]
    },
    {
      label: 'Navigation',
      submenu: [
        {
          label: 'Ir a la pagina de inicio',
          click: () => mainWindow.loadURL('http://localhost:5173/dashbaoard')
        }
      ]
    }
  ]
  const menu = Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(menu)
}

const {app, BrowserWindow, dialog} = require('electron');
const path = require('path');
const url = require('url');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

function createWindow () {

  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 1300,
    height: 800,
    frame: true,
    // autoHideMenuBar: true,
    fullscreenable: true,
    transparent: false,
    webPreferences: {
      javascript: true,
      plugins: true,
      nodeIntegration: true, // Nodejs
      webSecurity: false,
      preload: path.join(__dirname, './preload.js')
    }
  });
  // mainWindow.webContents.openDevTools();//打开调试工具

    //测试时使用mainWindow.loadURL(http://localhost:80000);

  console.log('__dirname', __dirname)
    //打包时加载本地文件
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'dist/index.html'),
    protocol: 'file:',
    slashes: true
  }));

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') app.quit()
});

app.on('activate', function () {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) createWindow()
});

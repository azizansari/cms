const url = require("url");
const { app, BrowserWindow } = require("electron");
const server = require("./bin/www");
const path = require("path");
let win;
const iconurl = url.format({
  pathname: path.join(__dirname, "dist/assets/favicon.ico"),
  protocol: "file",
  slashes: true,
});
function createWindow() {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    icon: path.join(__dirname, "dist/assets/appicon.ico"),
    webPreferences: {
      nodeIntegration: true,
    },
  });
  win.loadURL("http://localhost:8080");
  // win.loadFile(path.join(__dirname, "dist/index.html"));
  // win.loadFile((`file://${__dirname}/../dist/index.html`));
  win.on("closed", function () {
    win = null;
  });
}

console.log("path.join", path.join(__dirname, "dist/index.html"));

app.whenReady().then(createWindow);
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

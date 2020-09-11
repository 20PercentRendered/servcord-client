// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

// probably shouldn't put all the logic in a file called renderer but, oh well
// if you want to fix this up, feel free :)
// oh also of note, this could install discord if not pre-installed

var discord;
const { exec } = require("child_process");
const remote = require('electron').remote;
const mainWindow = remote.getCurrentWindow();
const app = remote.app;
const configDir = app.getPath('userData'); // this can help with discord auto-installation, 
// no use currently though
const args = remote.process.argv;
const config = require('electron-json-config');
const fs = require("fs");
var history = JSON.parse(config.get("history","[]"));
const os = require("os");
const path = require("path");

var startbutton = document.querySelector('#startbutton');
var servertext = document.querySelector('#servertext');
var historybox = document.querySelector('#serverbox');
var clearhistory = document.querySelector('#clearhistory');
if (args.includes("--server")) {
    var server = args[args.indexOf("--server")+1];
    if (server==null) {
        process.stdout.write("Missing server to go to. Example: --server IP.ADDRESS.HERE \n")
        app.exit(1);
    } else {
        openDiscord(server);
    }
};
//the real deal is below, the reason this all works is this, openDiscord
function openDiscord(address) {
    var args = [];
    //discord --host-rules="MAP * 127.0.0.1" --ignore-certificate-errors --allow-insecure-localhost --disable-http-cache
    args.push(`--host-rules="MAP * ${address}"`)
    args.push("--ignore-certificate-errors");
    args.push("--allow-insecure-localhost");
    args.push("--disable-http-cache");
    discord = exec(getDiscordPath()+" "+args.toString().replace(/,/g,' '))
    discord.addListener("exit",(code)=>{
        onDiscordStopped();
    });
    onDiscordStarted();
}
function onStartClicked() {

    if (servertext.value=="") {
        flashRedWithText("Select a server first")
        return;
    }
    addToHistory(servertext.value);
    startbutton.innerHTML = "Launching Discord"
    openDiscord(servertext.value);
    startbutton.innerHTML = "Discord is running";
}
function onDiscordStopped() {
    mainWindow.show();
    startbutton.innerHTML = "Launch Discord"
    discord==null;
}
function onDiscordStarted() {
    app.quit();
    mainWindow.hide();
}
function getDiscordPath() {
    switch(os.platform()) {
        case "linux":
            return "discord";
        case "win32":
            var base = process.env.LOCALAPPDATA+"\\Discord";
            var newestdiscord = null;
            fs.readdirSync(base).sort().forEach((value)=>{
                if (newestdiscord!=null) return;
                if (value.includes("app-")) {
                    console.log("discord folder is:"+value);
                    newestdiscord = value;
                }
            })
            return path.resolve(`${base}\\${newestdiscord}\\Discord.exe`);
    }
}
function addToHistory(item) {
    if (history.includes(item)) {
        if (history.indexOf(item) > 0) {
            history.splice(history.indexOf(item), 1);
            history.unshift(item);
        }
    } else {
        history.unshift(item);
        var option = document.createElement('option');
        option.text = item;
        historybox.add(option);
    }
    if (history.length>historybox.size) {
        history.pop();
    }
    saveHistory();
}
function saveHistory() {
    config.set("history",JSON.stringify(history));
}
function flashRedWithText(text) {
    var previousText = startbutton.value;
    startbutton.value = text;
    var times = 0;
    setInterval(()=>{
        if (times % 2 == 0) {
            startbutton.classList.remove("errorbutton");
        } else {
            startbutton.classList.add("startbutton");
        }
        times++;
        if (times>5) {
            startbutton.value = previousText;
        }
    },500)
}
startbutton.addEventListener('click', onStartClicked);
clearhistory.addEventListener('click',()=>{
    history = [];
    historybox.innerHTML = "";
    saveHistory();
})
historybox.addEventListener('change', () => {
    servertext.value = historybox.value;
})
for (i in history) {
    var option = document.createElement('option');
    option.text = history[i];
    historybox.add(option);
}

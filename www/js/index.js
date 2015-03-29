var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
        var testElement = document.getElementById('test');
        testElement.innerHTML = 'That';
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
        window.addEventListener("batterystatus", onBatteryStatus, false);

        var testElement = document.getElementById('test');
        testElment.innerHTML = "Ash";
        function onBatteryStatus(info) {
    // Handle the online event
        testElement.innerHTML = info.level;
        WifiWizard.listNetworks(listHandler, fail);
        function listHandler (list) {
          var wifiElement = document.getElementById('wifi');
          wifiElement.innerHTML = list;
        }

    }
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }

};

var addToStatus = function(message) {
console.log(message);
var newP = document.createElement("p");
var node = document.createTextNode(message);
var status = document.getElementById("status");
newP.appendChild(node);
// document.getElementById("status").appendChild(newP);
status.insertBefore(newP, status.firstChild);
}

var test = {
addNetwork: function() {

var ssid =  document.getElementById("SSID").value;
var pass = document.getElementById("password").value;

var wifiConfiguration = WifiWizard.formatWifiConfig(ssid, pass, 'WPA');



WifiWizard.addNetwork(wifiConfiguration, addToStatus, addToStatus);
addToStatus(wifiConfiguration.SSID + " " + wifiConfiguration.Password);
addToStatus("Adding Network...");
},

removeNetwork: function() {
var ssid =  document.getElementById("SSID").value;
addToStatus("Removing network: " + ssid);
WifiWizard.removeNetwork(ssid, addToStatus, addToStatus);
},

handleList: function(networkList) {
addToStatus(networkList.join(" "));
},

listNetworks: function() {
WifiWizard.listNetworks(test.handleList);
addToStatus("Listing networks...");
},

disconnect: function() {
var ssid =  document.getElementById("SSID").value;
addToStatus("Disconnecting: " + ssid);
WifiWizard.disconnectNetwork(ssid, addToStatus, addToStatus);
},

connect: function() {
var ssid =  document.getElementById("SSID").value;
addToStatus("Connecting: " + ssid);
WifiWizard.connectNetwork(ssid, addToStatus, addToStatus);
},

clear: function() {
document.getElementById("status").innerHTML="";
addToStatus("WifiTest Cleared.");
}
};

addToStatus("WifiTest loaded.");
var wwIsObject = (typeof WifiWizard == "object") ? true : false ;
var wwFunctions = [];
if (wwIsObject) {
  for (var prop in WifiWizard) {
    wwFunctions.push(prop);
  }
  wwFunctions.join(", ")
  addToStatus("WifiWizard functions: " + wwFunctions.join(", "));
}
else {
  addToStatus("Variable WifiWizard not an object.");
}

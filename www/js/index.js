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

scan: function () {
  addToStatus("Results: ");
  WifiWizard.getScanResults(listHandler);
  function listHandler(list) {
  addToStatus(list);
};

},

disconnect: function() {
var ssid =  document.getElementById("SSID").value;
addToStatus("Disconnecting: " + ssid);
WifiWizard.disconnectNetwork(ssid, addToStatus, addToStatus);
},

connect: function() {
//var ssid =  document.getElementById("SSID").value;
var ssid = 'noble';
addToStatus("Connecting: " + ssid);
WifiWizard.connectNetwork(ssid, addToStatus, addToStatus);
},

clear: function() {
document.getElementById("status").innerHTML="";
addToStatus("WifiTest Cleared.");
}
};

//addToStatus("WifiTest loaded.");
/*var wwIsObject = (typeof WifiWizard == "object") ? true : false ;
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
};
*/

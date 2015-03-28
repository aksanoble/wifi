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

}

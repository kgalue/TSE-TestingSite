//<!-- Start of Async Drift Code - English -->

"use strict";
window.drift_iframe_sandbox = 'allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox allow-forms'
!function LoadDriftWidget() {
  var t = window.driftt = window.drift = window.driftt || [];
  if (!t.init) {
    if (t.invoked) return void (window.console && console.error && console.error("Drift snippet included twice."));
    t.invoked = !0, t.methods = [ "identify", "config", "track", "reset", "debug", "show", "ping", "page", "hide", "off", "on" ], 
    t.factory = function(e) {
      return function() {
        var n = Array.prototype.slice.call(arguments);
        return n.unshift(e), t.push(n), t;
      };
    }, t.methods.forEach(function(e) {
      t[e] = t.factory(e);
    }), t.load = function(t) {
      var e = 3e5, n = Math.ceil(new Date() / e) * e, o = document.createElement("script");
      o.type = "text/javascript", o.async = !0, o.crossorigin = "anonymous", o.src = "https://js.driftt.com/include/" + n + "/" + t + ".js";
      var i = document.getElementsByTagName("script")[0];
      i.parentNode.insertBefore(o, i);
    };
  }
}();
drift.SNIPPET_VERSION = '0.3.1';

//Drift Identify
let myJWT = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE3MjI4OTAwODEsImV4cCI6MTc1NDQyNjA4MSwiYXVkIjoiIiwic3ViIjoieHlzLWxzIn0.PHpsy4GUcz_ORXrAjb54EvnvtFF6vnshIWjaexUl8YQ'
//let myJWT = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhYngtMTIzIiwibmFtZSI6IlN0YXJrIiwiaWF0IjoxNTE2MjM5MDIyfQ.N46zloUkgTCqpJtyVcJGqVyfsRmuT7-p7W71sp-z66I';
//drift.identify("1234-abcd", {
  drift.identify("xys-test", {
  has_consent: true,  
  email: 'lunastar@drift.com',
  Name: 'Luna',
  firstName: "Luna",
  lastName: "Star"
}), { userJwt: myJWT };


drift.load('y9vf8wusrym9');

/*
drift.on('ready',function(api, payload) {
  drift.api,widget.show();
})*/

window.drift.on("conversation:playbookFired", function(data) {
  console.log("Playbook fired: " + JSON.stringify(data))
})

window.drift.on("message", function(data) {
  console.log("User received a message from ' + data.teamMember.name + ' in conversation " + data.conversationId);
});

window.drift.on("conversation:playbookClicked", function(data) {
  console.log("Playbook Clicked fired");
});

window.drift.on("conversation:playbookDismissed", function(data) {
  console.log("Playbook Dismissed fired");
});

window.drift.on("conversation:playbookClicked", function(data) {
  console.log("Playbook Clicked fired");
});

window.drift.on("conversation:firstInteraction", function(data) {
  console.log("First interaction: " + JSON.stringify(data))
});

window.drift.on("scheduling:meetingBooked", function(data) {
  console.log("Meeting Booked: " + data.teamMember.name);
  drift.api.setUserAttributes({
  _classification: "Fastlane - meeting booked"
})
});


//LoadDriftWidget.init();


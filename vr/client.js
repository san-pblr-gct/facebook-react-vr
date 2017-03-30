// Auto-generated content.
// This file contains the boilerplate to set up your React app.
// If you want to modify your application, start in "index.vr.js"

// Auto-generated content.
import { VRInstance } from 'react-vr-web';

function init(bundle, parent, options) {
  const vr = new VRInstance(bundle, 'test', parent, {
    // Add custom options here
    ...options,
  });
  vr.render = function () {
    // Any custom behavior you want to perform on each frame goes here
  };
  // Begin the animation loop
  vr.start();
  return vr;
}

window.ReactVR = { init };

window.fbAsyncInit = function () {
  window.FB.init({
    appId: '202159756936666',
    xfbml: true,
    version: 'v2.8',
    status: true
  });
  window.FB.Event.subscribe('auth.statusChange', function (response) {
    if (response.authResponse) {
      window.FB.api('/me', 'get', (function (response) {
        console.log('Logged in.');
        window.FB.api('/me/feed', 'post', { message: 'Test1', place: '106377336067638', privacy: {value:'EVERYONE'} , tags: '1326091865' },(function (response) {
          console.log(response);
        }));
      }));
    }
  });
  checkLoginState();
}

function checkLoginState() {
  window.FB.getLoginStatus(function (response) {
    if (response.status === 'connected') {
      console.log('Logged in.');
      window.FB.api('/me/feed', 'post', { message: 'Test', place: '106377336067638', privacy: {value:'EVERYONE'}, tags: 'parthiban.sudhaman' }(function (response) {
        console.log(response);
      }));
      // window.FB.api('/me', 'get', (function (response) {
      //     console.log(response.name);
      // }));
    }
    else {
      window.FB.login(function (response) {
        console.log('Log in window');
      });
    }
  });
}

function logOut() {
  window.FB.logout(function (response) {
    console.log('Logged out.');
  });
}


(function (d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) { return; }
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

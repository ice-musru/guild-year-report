/**
 * H5 页面用来判断当初所处的容器环境
 */
const agent = navigator.userAgent;
const isIOS = RegExp(/iphone|ipad|ipod/i).test(agent);
const isAndroid = RegExp(/android/i).test(agent);
const isApp = RegExp(/BiliApp/).test(agent);
const isPC =
  agent.match(/iPad/i) === null &&
  agent.match(/iPhone/i) === null &&
  agent.match(/iPod/i) === null &&
  agent.match(/MicroMessenger/i) === null &&
  agent.match(/Windows Phone/i) === null &&
  agent.match(/Android/i) === null &&
  window.location.hash !== "#html5";

const isBlink = RegExp(/biliLink/).test(agent); // blink
const isPink = isApp && !isBlink; // 粉版开播
const isPCLink = window.browser && window.browser.version && window.browser.version.pc_link; // 直播姬

export { isIOS, isAndroid, isApp, isPC, isPink, isBlink, isPCLink };

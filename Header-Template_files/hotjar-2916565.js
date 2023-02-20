window.hjSiteSettings = window.hjSiteSettings || {"site_id":2916565,"r":1.0,"rec_value":1.0,"state_change_listen_mode":"automatic","record":true,"continuous_capture_enabled":true,"recording_capture_keystrokes":true,"anonymize_digits":true,"anonymize_emails":true,"suppress_all":false,"suppress_text":false,"suppress_location":false,"user_attributes_enabled":true,"legal_name":"Vistio","privacy_policy_url":"https://www.vistio.io/privacy-policy/","deferred_page_contents":[],"record_targeting_rules":[],"feedback_widgets":[],"heatmaps":[],"polls":[],"integrations":{"optimizely":{"tag_recordings":false},"google_optimize":{"tag_recordings":false}},"features":["heatmap.continuous.manual_retaker","client_script.metrics","feedback.widgetV2","error_reporting","ingestion.http.page_content","feedback.embeddable_widget","settings.billing_v2","client_script.safe_date"]};

!function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=224)}({224:function(e,t,r){"use strict";var n;function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.r(t);var s=function(){try{return"performance"in window&&"now"in window.performance}catch(e){return!1}},c={metricsUrl:(null===(n=window._hjSettings)||void 0===n?void 0:n.metricsUrl)||"https://csmetrics.hotjar.com",features:{metrics:{flag:"client_script.metrics",sampling:.1},debug:{flag:"client_script.metrics.debug",sampling:.5}},browser:{hasPerformance:!1,hasDebug:!1}},u={isDebugEnabled:!1,isMetricsEnabled:!1,loggedMetrics:{},genericTags:{}},d=function(e,t,r){u.loggedMetrics[e]=i(i({},u.loggedMetrics[e]),{},o({},t,r))},l=function(e){return e&&(e.task||e.reason||e.module)||"value"},f=function(e,t){var r=l(t),n=u.loggedMetrics[e],a=n&&n[r]||{};return{tagName:r,start:a.start,end:a.end,total:a.total}},g=function(e){var t,r=null!==(t=e.tag)&&void 0!==t?t:void 0;return u.isDebugEnabled?i(i(i({},r),e.extraTags),u.genericTags):r},p=function(e){var t=u.isMetricsEnabled||u.isDebugEnabled;return e?t&&e.flush:t},h={getState:function(){return i({},u)},start:function(){try{c.browser={hasPerformance:s(),hasDebug:/hjDebug=1/.test(location.search)};var e=window.hjSiteSettings||{},t=e.features,r=e.site_id,n=new Set(t),a=c.features,i=a.debug,o=a.metrics;u.genericTags={site_id:r},u.isDebugEnabled=n.has(i.flag)&&Math.random()<=i.sampling,u.isMetricsEnabled=n.has(o.flag)&&Math.random()<=o.sampling}catch(e){console.debug("Error in metrics.start",{error:e})}},reset:function(){u.loggedMetrics={}},stop:function(){u.isDebugEnabled=!1,u.isMetricsEnabled=!1,u.genericTags={}},send:function(e,t){var r=!1,n=JSON.stringify([t]),a=u.isDebugEnabled?"".concat(e,"?debug=true"):e;if("sendBeacon"in navigator)try{r=navigator.sendBeacon.bind(navigator)(a,n)}catch(e){}if(!1===r)try{var i=new XMLHttpRequest;i.open("POST",a),i.send(n)}catch(e){}c.browser.hasDebug&&console.debug("New metric/log: ",n)},count:function(e,t){var r=t.incr,n=t.tag,a=t.extraTags;try{var s=l(n),d=u.loggedMetrics[e],f=(d&&d[s]||0)+((null==r?void 0:r.value)||1);if(u.loggedMetrics[e]=i(i({},d),{},o({},s,f)),p(r)){var m={name:e,type:"count",value:f,tags:g({tag:n,extraTags:a})};h.send(c.metricsUrl,m)}}catch(e){}},time:function(){try{if(!c.browser.hasPerformance)return;return performance.now()}catch(e){}},timeStart:function(e,t){try{var r=h.time(),n=f(e,t),a=n.start,i=n.tagName;if(a)return;return d(e,i,{start:r}),r}catch(e){}},timeEnd:function(e,t){var r=t.tag,n=t.incr,a=t.extraTags;try{var i=h.time();if(!i)return;var o,s=f(e,r),u=s.start,l=s.tagName,m=s.total;if(n){var j=n.start&&i-n.start;d(e,l,{total:o=j?(m||0)+j:m})}else o=u?i-u:void 0,d(e,l,{start:u,end:i});if(o&&p(n)){var v={name:e,type:"distribution",value:Math.round(o),tags:g({tag:r,extraTags:a})};h.send(c.metricsUrl,v)}return i}catch(t){console.debug("Failed to send timer metric: ",{name:e,tag:r,error:t})}}};window.hj=window.hj||function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];(window.hj.q=window.hj.q||[]).push(t)},window.hj.metrics=h,hj.metrics.start(),hj.metrics.timeStart("time-to-first-event",null),window.hjBootstrap=window.hjBootstrap||function(e,t,r){var n=["bot","google","headless","baidu","bing","msn","duckduckbot","teoma","slurp","yandex","phantomjs","pingdom","ahrefsbot"].join("|"),a=new RegExp(n,"i"),i=window.navigator||{userAgent:"unknown"},o=i.userAgent?i.userAgent:"unknown";if(a.test(o))return hj.metrics.count("session-rejection",{tag:{reason:"bot"}}),void console.warn("Hotjar not launching due to suspicious userAgent:",o);var s="http:"===window.location.protocol,c=Boolean(window._hjSettings.preview);if(s&&!c)return hj.metrics.count("session-rejection",{tag:{reason:"https"}}),void console.warn("For security reasons, Hotjar only works over HTTPS. Learn more: https://help.hotjar.com/hc/en-us/articles/115011624047");var u=function(e,t,r){window.hjBootstrapCalled=(window.hjBootstrapCalled||[]).concat(r),window.hj&&window.hj._init&&window.hj._init._verifyInstallation&&hj._init._verifyInstallation()};u(0,0,r);var d=window.document,l=d.head||d.getElementsByTagName("head")[0];if(d.addEventListener){hj.scriptDomain=e;var f=d.createElement("script");f.async=1,f.src=hj.scriptDomain+t,f.charset="utf-8",l.appendChild(f);var g=["iframe#_hjRemoteVarsFrame {","display: none !important; width: 1px !important; height: 1px !important; opacity: 0 !important; pointer-events: none !important;","}"],p=d.createElement("style");p.type="text/css",p.styleSheet?p.styleSheet.cssText=g.join(""):p.appendChild(d.createTextNode(g.join(""))),l.appendChild(p);var h=d.createElement("iframe");h.style.cssText=g[1],h.name="_hjRemoteVarsFrame",h.title="_hjRemoteVarsFrame",h.tabIndex=-1,h.setAttribute("aria-hidden","true"),h.id="_hjRemoteVarsFrame",h.src="https://"+(window._hjSettings.varsHost||"vars.hotjar.com")+"/box-e031119f9e9e307a08fa610f85dbfb52.html",h.onload=function(){u.varsLoaded=!0,"undefined"!=typeof hj&&hj.event&&hj.event.signal&&hj.event.signal("varsLoaded")},u.varsJar=h,"interactive"===d.readyState||"complete"===d.readyState||"loaded"===d.readyState?m():d.addEventListener("DOMContentLoaded",m),u.revision="378d744410d4",window.hjBootstrap=u}function m(){setTimeout((function(){d.body.appendChild(h)}),50)}},window.hjBootstrap("https://script.hotjar.com/","modules.27f4146f3a6f6c6f833f.js","2916565"),window.hjLazyModules=window.hjLazyModules||{SURVEY_V2:{js:"survey-v2.3b078cd686aab742952a.js"},SURVEY_BOOTSTRAPPER:{js:"survey-bootstrapper.642b22de383746adb81d.js"},SURVEY_ISOLATED:{js:"survey-isolated.f9292649a6be2d405bb6.js"},HEATMAP_RETAKER:{js:"heatmap-retaker.c67a77f04e445a6afb71.js"},SURVEY_INVITATION:{js:"survey-invitation.035c0b490a85a6c75041.js"},NOTIFICATION:{js:"notification.6c323f4dd08ae558b5a6.js"},INCOMING_FEEDBACK:{js:"incoming-feedback.fede5967394a67ce013b.js"},PREACT_INCOMING_FEEDBACK:{js:"preact-incoming-feedback.2ec342c4575985385f5b.js"},SENTRY:{js:"sentry.fc52f252e00af9ca6e28.js"}}}});
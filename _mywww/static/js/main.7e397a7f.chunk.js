(this.webpackJsonpshinyitembuilder=this.webpackJsonpshinyitembuilder||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var i=n(1),r=n.n(i),s=n(7),o=n.n(s),a=(n(12),n(13),n(2)),c=n(3),l=function(){function e(){Object(a.a)(this,e),this.playerReadyListener="noListener",this.preloadReturnListener="noListener",this.getUserIdReturnListener="noListener",this.loginDialogClosedListener="noListener",this.getTaskReturnListener="noListener",this.getScoringResultReturnListener="noListener",this.traceLogListener="noListener",this.recordingListener="noListener",this.getTasksStateReturnListener="noListener",this.taskSwitchRequestListener="noListener",this.shinyTaskSwitchRequestListener="noListener",this.shinyPreloadStateListener="noListener",this.shinyClearStateListener="noListener"}return Object(c.a)(e,[{key:"startReceiving",value:function(){var e=this;window.addEventListener("message",(function(t){e.processMessageEvent(t)}))}},{key:"setPlayerReadyListener",value:function(e){this.playerReadyListener=e}},{key:"setPreloadReturnListener",value:function(e){this.preloadReturnListener=e}},{key:"setGetUserIdReturnListener",value:function(e){this.getUserIdReturnListener=e}},{key:"setLoginDialogClosedListener",value:function(e){this.loginDialogClosedListener=e}},{key:"setGetTaskReturnListener",value:function(e){this.getTaskReturnListener=e}},{key:"setGetScoringResultReturnListener",value:function(e){this.getScoringResultReturnListener=e}},{key:"setTraceLogListener",value:function(e){this.traceLogListener=e}},{key:"setRecordingListener",value:function(e){this.recordingListener=e}},{key:"setGetTasksStateReturnListener",value:function(e){this.getTasksStateReturnListener=e}},{key:"setTaskSwitchRequestListener",value:function(e){this.taskSwitchRequestListener=e}},{key:"setShinyTaskSwitchRequestListener",value:function(e){this.shinyTaskSwitchRequestListener=e}},{key:"setShinyPreloadStateListener",value:function(e){this.shinyPreloadStateListener=e}},{key:"processMessageEvent",value:function(e){var t=e.origin,n=e.data,i=e.source;if(null!==i)if(t===window.origin)if(i!==window.parent||"object"!==typeof n){var r;try{r=JSON.parse(n)}catch(T){return void console.info("Ignoring message with non-JSON data: ".concat(n))}var s=r.eventType;if("taskPlayerReady"!==s||"noListener"===this.playerReadyListener)if("setPreloadReturn"!==s||"noListener"===this.preloadReturnListener)if("getUserIdReturn"!==s||"noListener"===this.getUserIdReturnListener)if("loginDialogClosed"!==s||"noListener"===this.loginDialogClosedListener)if("getTaskReturn"!==s||"noListener"===this.getTaskReturnListener)if("getScoringResultReturn"!==s||"noListener"===this.getScoringResultReturnListener){if("traceLogTransmission"===s&&"noListener"!==this.traceLogListener){var o=r.traceLogData,a=o.metaData,c=o.logEntriesList;return console.log(r.traceLogData),void this.traceLogListener(i,JSON.stringify(a),c.map((function(e){return JSON.stringify(e)})))}if("recordingTransmission"!==s||"noListener"===this.recordingListener)if("getTasksStateReturn"!==s||"noListener"===this.getTasksStateReturnListener)if("taskSwitchRequest"!==s||"noListener"===this.taskSwitchRequestListener)console.warn("Ignoring message not matching any listener: ".concat(n));else{var l=r,u=l.request,d=l.scope,f=l.item,h=l.task;this.taskSwitchRequestListener(i,u,"goToTask"===u?{scope:d,item:f,task:h}:void 0)}else{var y=r,g=y.userId,p=y.state;this.getTasksStateReturnListener(i,g,JSON.stringify(p))}else{var m=r.recordingData,v=m.metaData,k=m.recordingEntriesList;this.recordingListener(i,JSON.stringify(v),k.map((function(e){return JSON.stringify(e)})))}}else this.getScoringResultReturnListener(i,JSON.stringify(r.result));else this.getTaskReturnListener(i,{scope:r.scope,item:r.item,task:r.task});else this.loginDialogClosedListener(i,r.fieldValue);else this.getUserIdReturnListener(i,r.id);else{var w={isSuccess:r.isSuccess,message:r.message};this.preloadReturnListener(i,w)}else this.playerReadyListener(i)}else{if(!n.type)return;"navigate_to"===n.type&&"noListener"!==this.shinyTaskSwitchRequestListener?this.shinyTaskSwitchRequestListener(i,n.request):"preload_state"===n.type&&"noListener"!==this.shinyPreloadStateListener&&this.shinyPreloadStateListener(i,n.request)}else console.warn("Ignoring message from wrong origin. Message origin is ".concat(t,". Accepted origin is ").concat(window.origin,"."));else console.warn("Ignoring message without source.")}},{key:"processShinyMessage",value:function(e){console.log(e)}}]),e}(),u=n(4),d=n(17);function f(e,t){e.postMessage(JSON.stringify(t),{targetOrigin:"*"})}function h(){return y("./assessments/config.json").then((function(e){if(!function(e){try{return e.tasks&&Array.isArray(e.tasks)&&e.tasks.every(p)}catch(t){return!1}}(e))throw new Error("Assessment configuration is invalid: ".concat(JSON.stringify(e)));if(e.tasks.length<1)throw new Error("Assessment configuration contains no tasks: ".concat(JSON.stringify(e)));return console.log("Received assessment configuration",e),e}))}function y(e){return new Promise((function(t,n){var i=new XMLHttpRequest;i.responseType="json",i.onload=function(){return t(i.response)},i.onerror=function(){return n(i.statusText)},i.open("GET",e,!0),i.send()}))}function g(e){var t={};if(window.document.location.search.length)try{document.location.search.replace("?","").split("&").forEach((function(n){var i=n.split("=");2===i.length&&e.indexOf(i[0])>=0&&(t[i[0]]=i[1])}))}catch(n){console.error("error parsing query string: "+n)}return t}function p(e){try{return e.item&&"string"===typeof e.item&&e.task&&"string"===typeof e.task&&e.scope&&"string"===typeof e.scope}catch(t){return!1}}function m(e){try{return e.playerId&&"string"===typeof e.playerId&&e.runtimeVersion&&"string"===typeof e.runtimeVersion&&e.frameContentFile&&"string"===typeof e.frameContentFile}catch(t){return!1}}function v(e,t,n,i,r){e.setTaskSwitchRequestListener((function(e,i,r){var s=n.getPlayerId(e);if(void 0!==s){var o=function(e,t,n,i){switch(t){case"cancelTask":return i.cancel(e);case"nextTask":return i.nextTask(e);case"previousTask":return i.backTask(e);case"goToTask":return void 0===n?{type:"blocked",reason:"Task specification is missing in goToTask request."}:i.goToTask(e,n);default:return t}}(s,i,r,t);switch(o.type){case"blocked":return void console.log("Cannot follow switch request ".concat(i,": ").concat(o.reason,". We ignored the request."));case"login":return void function(e,t,n,i){var r=function(e,t,n,i){if(void 0===e)return{id:t,frameWindow:n};var r=i.getFrameWindow(e);if(void 0===r)return console.log("Advised player for request is not regitered. We use the triggering player instead."),{id:t,frameWindow:n};return{id:e,frameWindow:r}}(e,t,n,i);L(n),i.doToAll((function(e){!function(e){f(e,{eventType:"logout"})}(e)})),i.show(r.id),C(r.frameWindow)}(o.playerId,s,e,n);case"taskSwitch":return void S(e);default:return o}}else console.warn("Received switch request from unknown task player frame. This is an internal error. We ignored the request.")})),e.setShinyTaskSwitchRequestListener((function(e,t){t.scope=null!==t&&void 0!==t&&t.scope?t.scope:"Default",function(e,t,n,i){console.log(e);var r=t.getVersion(e.item);if(void 0===r)return void console.warn("Received task switch request to unknown item ".concat(e.item,". We ignored the request."));var s=n.findCompatiblePlayer(r);if(void 0===s)return void console.warn("Received task switch request to item ".concat(e.item," with version ").concat(r," and could not find a compatible task player. We ignored the request."));n.doToAll((function(e){L(e)})),!i||n.doToAll((function(e){return f(e,{eventType:"clearTasksState"})}));n.show(s.id),R(e,s.frameWindow)}({item:t.item,task:t.task,scope:t.scope},i,n,null===t||void 0===t?void 0:t.clearState)})),e.setTraceLogListener((function(e,t,n){f(e,{eventType:"getTasksState"})})),e.setShinyPreloadStateListener((function(e,r){var s,o=null!==r&&void 0!==r&&r.item?r.item:null===(s=t.firstTask())||void 0===s?void 0:s.firstTask;if(o){var a=i.getVersion(o.item);if(void 0!==a){var c=n.findCompatiblePlayer(a);void 0!==c?(n.doToAll((function(e){return L(e)})),f(c.frameWindow,{eventType:"preloadTasksState",state:null===r||void 0===r?void 0:r.state}),n.show(c.id),R(o,c.frameWindow)):console.warn("Received task switch request to item ".concat(o.item," with version ").concat(a," and could not find a compatible task player. We ignored the request."))}else console.warn("Received task switch request to unknown item ".concat(o.item,". We ignored the request."))}})),e.setLoginDialogClosedListener((function(e,s){n.doToAll((function(e){return b(s,e)})),n.doToAll((function(e){return T(e)})),h().then((function(e){if(e.tasks.length<1)throw new Error("No tasks declared in assessment configuration ".concat(e));t.initialize(e,n),k(e,r.mathJaxCdnUrl,n,i,t)})).catch((function(e){console.warn("Could not initialize assessment properly: ".concat(e.message))}))})),e.setPlayerReadyListener((function(e){n.receiveReadySignal(e),f(e,{eventType:"setTraceLogTransmissionChannel",channel:"postMessage",interval:5e3,targetOrigin:"*",targetWindowType:"parent"}),f(e,{eventType:"setTraceContextId",contextId:P()}),n.doToAll((function(e){return b(function(e){var t,n=e.length?e:"session";return null!==(t=g([n])[n])&&void 0!==t?t:"default"}("session"),e)})),n.doToAll((function(e){return T(e)})),h().then((function(e){if(e.tasks.length<1)throw new Error("No tasks declared in assessment configuration ".concat(e));t.initialize(e,n),n.doToAll((function(e){return function(e,t){f(e,Object(u.a)({eventType:"setScalingConfiguration"},t))}(e,Object(u.a)(Object(u.a)({},{scalingMode:"scale-up-down",alignmentHorizontal:"center",alignmentVertical:"center"}),g(["scalingMode","alignmentHorizontal","alignmentVertical"])))})),k(e,r.mathJaxCdnUrl,n,i,t)})).catch((function(e){console.warn("Could not initialize assessment properly: ".concat(e.message))}))}))}function k(e,t,n,i,r){Promise.resolve().then((function(){return function(e,t,n,i){return Promise.all(e.tasks.map((function(e){return e.item})).filter(w).filter((function(e){return!i.isRegistered(e)})).map((function(e){return function(e,t,n,i){var r="../items/".concat(e);return function(e){return y("./items/".concat(e,"/config.json")).then((function(t){if(!function(e){try{return e.runtimeCompatibilityVersion&&"string"===typeof e.runtimeCompatibilityVersion&&e.name&&"string"===typeof e.name}catch(t){return!1}}(t))throw new Error("Configuration of ".concat(e," is invalid: ").concat(JSON.stringify(t)));return console.log("Received configuration of ".concat(e),t),t}))}(e).then((function(e){i.register(e.name,e.runtimeCompatibilityVersion),n.doToAllCompatible(e.runtimeCompatibilityVersion,(function(n){return f(n,{eventType:"addItem",itemConfig:e,resourcePath:"".concat(r,"/resources"),externalResourcePath:"".concat(r,"/external-resources"),libraryPathsMap:{MathJax:void 0===t?"math-jax unknown":t}})}))})).catch((function(t){throw new Error("Could not download configuration for item ".concat(e,": ").concat(t.message))}))}(e,t,n,i)})))}(e,t,n,i)})).then((function(){var e=r.firstTask();if(void 0===e)throw new Error("Invalid task sequencer configuration blocks starting the first task.");window.postMessage(JSON.stringify({eventType:"itemsLoadedInPlayer",playerCount:n.getPlayerIds().length}),"*"),function(e,t,n){var i=n.getVersion(e.firstTask.item);if(void 0===i)throw new Error("Could not find item ".concat(e.firstTask.item,"."));var r=I(e.playerId,i,void 0,t);if(void 0===r)throw new Error("Could not find compatible player for item ".concat(e.firstTask.item," with version ").concat(i,"."));t.show(r.id),R(e.firstTask,r.frameWindow)}(e,n,i)})).catch((function(e){console.warn("Could not properly initialize items and start first task: ".concat(e.message))}))}function w(e,t,n){return n.indexOf(e)===t}function T(e){f(e,{eventType:"setTaskSequencer",targetOrigin:window.location.origin,targetWindowType:"parent"})}function L(e){f(e,{eventType:"stopTask"})}function R(e,t){f(t,{eventType:"startTask",item:e.item,task:e.task,scope:e.scope})}function S(e){f(e,{eventType:"getScoringResult"})}function b(e,t){f(t,{eventType:"setUserId",id:e})}function C(e){f(e,{eventType:"showLogin",titleLabel:"Placeholder for Login",fieldLabel:"Please enter anything (nickname) ",buttonLabel:"Start"})}function P(){return Object(d.a)()}function I(e,t,n,i){if(void 0!==e&&i.isCompatibleById(t,e)){var r=i.getFrameWindow(e);if(void 0!==r)return{id:e,frameWindow:r};console.error("Unexpected failure to find frame for registered player ".concat(e,". We try to find another compatible one."))}if(void 0!==n&&i.isCompatibleById(t,n.id))return n;var s=i.findCompatiblePlayer(t);return void 0===s?void 0:{id:s.id,frameWindow:s.frameWindow}}var x=function(){function e(){Object(a.a)(this,e),this.currentTaskIndex="not set",this.tasks=[]}return Object(c.a)(e,[{key:"initialize",value:function(e,t){this.currentTaskIndex=0,this.tasks=e.tasks}},{key:"firstTask",value:function(){return this.currentTaskIndex=0,this.tasks.length<1?void 0:{firstTask:this.tasks[0]}}},{key:"cancel",value:function(e){return{type:"login"}}},{key:"nextTask",value:function(e){return this.switchAndReturnTask((function(e){return e+1}),"no next task")}},{key:"backTask",value:function(e){return this.switchAndReturnTask((function(e){return e-1}),"no previous task")}},{key:"goToTask",value:function(e,t){var n=this;return this.switchAndReturnTask((function(e){return n.findMatchingTask(t)}),"Task ".concat(t.task," ").concat(void 0===t.item?"with item unspecified":"in item "+t.item," and in scope ").concat(t.scope," is not part of the assessment configuration."))}},{key:"switchAndReturnTask",value:function(e,t){if("not set"===this.currentTaskIndex)return console.warn("Task sequencer is not initialized properly. This blocks all task switches."),{type:"blocked",reason:"Task sequencer not initialized properly."};var n=e(this.currentTaskIndex);return n<0||n>this.tasks.length-1?{type:"blocked",reason:t}:(this.currentTaskIndex=n,{type:"taskSwitch",nextTask:this.tasks[this.currentTaskIndex]})}},{key:"findMatchingTask",value:function(e){return e.item?this.tasks.findIndex((function(t){return e.item===t.item&&e.task===t.task&&e.scope===t.scope})):this.tasks.findIndex((function(t){return e.task===t.task&&e.scope===t.scope}))}}]),e}(),O=function(){function e(t){Object(a.a)(this,e),this.totalPlayerCount=void 0,this.players=[],this.pendingReadySignals=new Set,this.totalPlayerCount=t}return Object(c.a)(e,[{key:"registerPlayer",value:function(e,t,n,i){var r={id:e,frameWindow:t,frameRef:n,isCompatible:i,readyFlag:!1};this.players.push(r),this.applyPendingReadySignal(r),this.totalPlayerCount<this.players.length&&console.warn("Unexpected registration of another task player ".concat(e," as number ").concat(this.players.length,". Check the total player count: ").concat(this.totalPlayerCount,". We might have started the first login prematurely!")),console.info("Registered player ".concat(e))}},{key:"receiveReadySignal",value:function(e){var t=this.findPlayerByWindow(e);void 0===t?this.pendingReadySignals.add(e):t.readyFlag=!0}},{key:"allPlayersReady",value:function(){return this.players.length>=this.totalPlayerCount&&this.players.every((function(e){return e.readyFlag}))}},{key:"getFrameWindow",value:function(e){var t;return null===(t=this.findPlayerById(e))||void 0===t?void 0:t.frameWindow}},{key:"getPlayerId",value:function(e){var t;return null===(t=this.findPlayerByWindow(e))||void 0===t?void 0:t.id}},{key:"findCompatiblePlayer",value:function(e){return this.players.find((function(t){return t.isCompatible(e)}))}},{key:"isCompatibleById",value:function(e,t){var n=this.findPlayerById(t);return void 0!==n&&n.isCompatible(e)}},{key:"isCompatibleByWindow",value:function(e,t){var n=this.findPlayerByWindow(t);return void 0!==n&&n.isCompatible(e)}},{key:"doToAll",value:function(e){this.players.forEach((function(t){return e(t.frameWindow)}))}},{key:"doToAllCompatible",value:function(e,t){this.players.filter((function(t){return t.isCompatible(e)})).forEach((function(e){return t(e.frameWindow)}))}},{key:"show",value:function(e){this.players.forEach((function(t){var n=t.frameRef.current;null!==n?n.style.visibility=t.id===e?"visible":"collapse":console.warn("Cannot switch visibility for player ".concat(t.id," since frame element is null."))}))}},{key:"getPlayerIds",value:function(){return this.players.map((function(e){return e.id}))}},{key:"applyPendingReadySignal",value:function(e){var t=e.frameWindow;this.pendingReadySignals.has(t)&&(e.readyFlag=!0,this.pendingReadySignals.delete(t))}},{key:"findPlayerByWindow",value:function(e){return this.players.find((function(t){return t.frameWindow===e}))}},{key:"findPlayerById",value:function(e){return this.players.find((function(t){return t.id===e}))}}]),e}(),W=function(){function e(){Object(a.a)(this,e),this.items=[]}return Object(c.a)(e,[{key:"register",value:function(e,t){this.items.push({name:e,version:t})}},{key:"isRegistered",value:function(e){return void 0!==this.findByName(e)}},{key:"getVersion",value:function(e){var t;return null===(t=this.findByName(e))||void 0===t?void 0:t.version}},{key:"findByName",value:function(e){return this.items.find((function(t){return t.name===e}))}}]),e}(),q=n(0);function j(e){var t=e.playerConfiguration,n=t.playerId,s=t.runtimeVersion,o=t.frameContentFile,a=r.a.useRef(null),c=r.a.useRef(null);return Object(i.useEffect)((function(){var t,i=null===(t=a.current)||void 0===t?void 0:t.contentWindow;null!==i&&void 0!==i?e.playerCatalog.registerPlayer(n,i,c,(function(e){return e===s})):console.warn("Content window of task player frame is invalid!")}),[e.playerCatalog,n,s]),Object(q.jsxs)("div",{className:"PlayerFrame",ref:c,style:{position:"absolute",top:"0px",left:"0px",borderStyle:"none",width:"100%",height:"100%",display:"flex",alignItems:"baseline",justifyContent:"center"},children:[!e.showPlayerInfo||Object(q.jsxs)("div",{style:{fontSize:"xx-small"},children:["Current Player: ",n,", Version: ",s]}),Object(q.jsx)("iframe",{ref:a,style:{width:"100%",height:"100%"},title:"PlayerFrame",src:"./react-runtime/".concat(o,"?eventTargetWindow=parent"),frameBorder:"0",scrolling:"no",className:"cbaframe"})]})}function A(e){var t=e.messageReceiver,n=e.controllerConfiguration,i=n.players,r=new O(i.length),s=new W;v(t,new x,r,s,n);var o=void 0===n.itemSize?768:n.itemSize.height,a=void 0===n.itemSize?1024:n.itemSize.width;return Object(q.jsx)("div",{className:"App",children:i.map((function(e){return Object(q.jsx)(j,{itemWidth:a,itemHeight:o,showPlayerInfo:n.showPlayerInfo,playerConfiguration:e,playerCatalog:r},e.playerId)}))})}y("./controller/config.json").then((function(e){if(!function(e){try{return(void 0===e.traceLogTransmission||function(e){try{return e.transmitUrl&&"string"===typeof e.transmitUrl&&e.interval&&"number"===typeof e.interval&&e.httpTimeout&&"number"===typeof e.httpTimeout}catch(t){return!1}}(e.traceLogTransmission))&&(void 0===e.mathJaxCdnUrl||e.mathJaxCdnUrl&&"string"===typeof e.mathJaxCdnUrl)&&(void 0===e.itemSize||e.itemSize.height&&"number"===typeof e.itemSize.height&&e.itemSize.width&&"number"===typeof e.itemSize.width)&&e.players&&Array.isArray(e.players)&&e.players.every(m)&&"boolean"===typeof e.showPlayerInfo}catch(t){return!1}}(e))throw new Error("Controller configuration is invalid: ".concat(JSON.stringify(e)));return console.log("Received controller configuration",e),e})).then((function(e){var t=function(){var e=new l;return e.startReceiving(),e}();o.a.render(Object(q.jsx)(r.a.StrictMode,{children:Object(q.jsx)(A,{messageReceiver:t,controllerConfiguration:e})}),document.getElementById("ee4basicsRoot"))})).catch((function(e){console.warn("Could not initialize assessment properly: ".concat(e.message))}))}},[[15,1,2]]]);
//# sourceMappingURL=main.7e397a7f.chunk.js.map
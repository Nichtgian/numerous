(function(e){function t(t){for(var a,i,s=t[0],l=t[1],c=t[2],u=0,v=[];u<s.length;u++)i=s[u],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&v.push(o[i][0]),o[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);d&&d(t);while(v.length)v.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,i=1;i<n.length;i++){var l=n[i];0!==o[l]&&(a=!1)}a&&(r.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},o={app:0},r=[];function i(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-2d0d6d35":"13359a3b","chunk-2d0e5e97":"ef7bd3f0","chunk-2d2086b7":"56172d37"}[e]+".js"}function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise((function(t,a){n=o[e]=[t,a]}));t.push(n[2]=a);var r,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=i(e);var c=new Error;r=function(t){l.onerror=l.onload=null,clearTimeout(u);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",c.name="ChunkLoadError",c.type=a,c.request=r,n[1](c)}o[e]=void 0}};var u=setTimeout((function(){r({type:"timeout",target:l})}),12e4);l.onerror=l.onload=r,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var d=c;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1:function(e,t){},4360:function(e,t,n){"use strict";var a=n("2b0e"),o=n("2f62");a["a"].use(o["a"]),t["a"]=new o["a"].Store({state:{authenticated:!1,user:{token:"",username:"",isGuest:!1}},mutations:{},actions:{}})},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[a("img",{attrs:{height:"100%",alt:"Vue logo",src:n("fe8a")}}),a("h1",[e._v("Numerous")])]),a("v-content",[a("router-view")],1)],1)},r=[],i={name:"App",data:function(){return{}}},s=i,l=n("2877"),c=n("6544"),u=n.n(c),d=n("7496"),v=n("40dc"),h=n("a75b"),b=Object(l["a"])(s,o,r,!1,null,null,null),m=b.exports;u()(b,{VApp:d["a"],VAppBar:v["a"],VContent:h["a"]});var p=n("a18c"),f=n("f309");a["a"].use(f["a"]);var y=new f["a"]({theme:{themes:{light:{primary:"#6a1b9a",secondary:"#c158dc"}}}}),g=n("8055"),w=n.n(g),_=n("5132"),k=n.n(_),x=n("c758"),L=n("acb2"),V="http://localhost:5000";a["a"].config.productionTip=!1,x["a"].init(Object({NODE_ENV:"production",BASE_URL:"/"}).NUMEROUS_BACKEND_URL?Object({NODE_ENV:"production",BASE_URL:"/"}).NUMEROUS_BACKEND_URL:V+"/api/"),L["b"].getToken(L["a"].tokenKey)&&x["a"].setHeader(),a["a"].use(new k.a({connection:w()(V)})),new a["a"]({router:p["a"],vuetify:y,render:function(e){return e(m)}}).$mount("#app")},a18c:function(e,t,n){"use strict";n("d3b7");var a=n("2b0e"),o=n("8c4f"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("v-card",[n("v-responsive",[n("v-card-title",[n("h2",[e._v("Home")]),n("v-spacer"),n("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on;return[n("v-btn",e._g({staticStyle:{"margin-right":"10px"},attrs:{outlined:"",color:"error"},on:{click:e.logout}},a),[n("v-icon",[e._v("mdi-arrow-left")])],1)]}}])},[n("span",[e._v("Logout")])]),n("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on;return[n("v-btn",e._g({staticStyle:{"margin-right":"10px"},attrs:{color:"primary",outlined:""},on:{click:function(t){e.showInfoMenu=!e.showInfoMenu}}},a),[n("v-icon",[e._v("mdi-book-open-outline")])],1)]}}])},[n("span",[e._v("Show information and rules menu")])]),e.user.isGuest?e._e():n("div",[n("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on;return[n("v-btn",e._g({attrs:{color:"primary",outlined:""},on:{click:function(t){e.showSocialMenu=!e.showSocialMenu}}},a),[n("v-icon",[e._v("mdi-account-outline")])],1)]}}],null,!1,1223177751)},[n("span",[e._v("Open social Menu")])])],1)],1),n("v-card-text",[n("Numerous",{on:{openUserProfile:e.openUserProfile}})],1)],1)],1),n("SocialMenu",{on:{openUserProfile:e.openUserProfile},model:{value:e.showSocialMenu,callback:function(t){e.showSocialMenu=t},expression:"showSocialMenu"}}),n("ProfileMenu",{attrs:{userId:e.selectedUserId},model:{value:e.showPlayerMenu,callback:function(t){e.showPlayerMenu=t},expression:"showPlayerMenu"}}),n("InfoMenu",{model:{value:e.showInfoMenu,callback:function(t){e.showInfoMenu=t},expression:"showInfoMenu"}})],1)},i=[],s=n("fef9"),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-row",{attrs:{justify:"center"}},[n("v-dialog",{attrs:{persistent:"","max-width":"600px"},model:{value:e.showDialog,callback:function(t){e.showDialog=t},expression:"showDialog"}},[n("v-card",[n("v-tabs",{attrs:{"fixed-tabs":"","background-color":"primary",dark:""}},[n("v-tab",[e._v("Your Friends "),n("v-icon",{attrs:{right:""}},[e._v("mdi-account-group-outline")])],1),n("v-tab",[e._v("Search User "),n("v-icon",{attrs:{right:""}},[e._v("mdi-account-search-outline")])],1),n("v-tab-item",[n("v-container",[e.loading?[n("h2",[e._v("loading..")])]:[null==e.friends||e.friends==[]?[n("h2",[e._v("No friends.")])]:n("v-list",e._l(e.friends,(function(t){return n("v-list-item",{key:t.id,on:{click:function(n){return e.openChat(t.id)}}},[n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:e._s(t.username)}})],1),n("v-list-item-icon",[n("v-icon",{attrs:{color:"primary"}},[e._v("mdi-chat-outline")])],1)],1)})),1)]],2)],1),n("v-tab-item",[n("v-container",[n("v-text-field",{attrs:{"append-icon":"mdi-magnify",outlined:"",label:"Username",type:"text"},on:{"click:append":e.searchUser},model:{value:e.searchUsername,callback:function(t){e.searchUsername=t},expression:"searchUsername"}}),e.loading?[n("h2",[e._v("searching..")])]:[null==e.foundUser?[n("h2",[e._v("No results.")])]:n("v-list",[n("v-list-item",{key:e.foundUser.id,on:{click:function(t){return e.openChat(e.foundUser.id)}},model:{value:e.foundUser,callback:function(t){e.foundUser=t},expression:"foundUser"}},[n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:e._s(e.foundUser.username)}})],1),n("v-list-item-icon",[n("v-icon",{attrs:{color:"primary"}},[e._v("mdi-chat-outline")])],1)],1)],1)]],2)],1)],1),n("v-card-actions",[n("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on;return[n("v-btn",e._g({attrs:{color:"error",outlined:""},on:{click:function(t){e.showDialog=!1}}},a),[n("v-icon",{attrs:{right:""}},[e._v("mdi-close")])],1)]}}])},[n("span",[e._v("Close Menu")])])],1)],1)],1)],1)},c=[],u=(n("d81d"),n("96cf"),n("c758")),d=n("4360"),v={getFriends:function(){return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,regeneratorRuntime.awrap(u["a"].get("social/getFriends"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}))},searchUser:function(e){return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(u["a"].get("social/searchUser/"+e));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}))},getUserAndChat:function(e){return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(u["a"].post("social/searchUserAndChat",{username:d["a"].state.user.username,withUserId:e}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}))},addFriend:function(e){return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(u["a"].get("social/addFriend/"+e));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}))},removeFriend:function(e){return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(u["a"].get("social/removeFriend/"+e));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}))},sendMessage:function(e,t){return regeneratorRuntime.async((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,regeneratorRuntime.awrap(u["a"].post("social/sendMessage",{receiverId:e,text:t}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}))}},h={name:"SocialMenu",data:function(){return{loading:!1,friends:[],foundUser:null,searchUsername:""}},created:function(){this.loadFriends()},props:{value:Boolean},computed:{showDialog:{get:function(){return this.value&&this.loadFriends(),this.value},set:function(e){this.$emit("input",e)}}},methods:{openChat:function(e){this.$emit("input",!1),this.$emit("openUserProfile",e)},loadFriends:function(){var e=this;return this.loading=!0,v.getFriends().then((function(t){e.friends=t.data.map((function(e){return e.friend})),e.loading=!1}))},searchUser:function(){var e=this;return this.loading=!0,v.searchUser(this.searchUsername).then((function(t){e.foundUser=t.data,e.loading=!1})).catch((function(){e.loading=!1}))}}},b=h,m=n("2877"),p=n("6544"),f=n.n(p),y=n("8336"),g=n("b0af"),w=n("99d9"),_=n("a523"),k=n("169a"),x=n("132d"),L=n("8860"),V=n("da13"),C=n("5d23"),I=n("34c3"),S=n("0fd9"),T=n("71a3"),U=n("c671"),P=n("fe57"),D=n("8654"),M=n("3a2f"),j=Object(m["a"])(b,l,c,!1,null,null,null),R=j.exports;f()(j,{VBtn:y["a"],VCard:g["a"],VCardActions:w["a"],VContainer:_["a"],VDialog:k["a"],VIcon:x["a"],VList:L["a"],VListItem:V["a"],VListItemContent:C["a"],VListItemIcon:I["a"],VListItemTitle:C["c"],VRow:S["a"],VTab:T["a"],VTabItem:U["a"],VTabs:P["a"],VTextField:D["a"],VTooltip:M["a"]});var F=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-row",{attrs:{justify:"center"}},[n("v-dialog",{attrs:{persistent:"","max-width":"600px"},model:{value:e.showDialog,callback:function(t){e.showDialog=t},expression:"showDialog"}},[e.loading||null==e.user?n("v-card",[n("v-card-title",[e._v("Not Found")]),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"error"},on:{click:function(t){e.showDialog=!1}}},[e._v("Close")])],1)],1):n("v-card",[n("div",[n("v-card-title",{staticStyle:{"background-color":"#6a1b9a",color:"white"},attrs:{dark:""}},[e._v(e._s(e.user.username))])],1),n("v-list",{staticClass:"overflow-y-auto",staticStyle:{"max-height":"400px"},attrs:{dense:""}},e._l(e.messages,(function(t){return n("v-list-item",{key:t.id},[n("v-list-item-content",[e.userId==t.senderId?[n("p",[e._v(e._s(t.text))])]:[n("p",{staticStyle:{"text-align":"right"}},[e._v(e._s(t.text))])]],2)],1)})),1),n("v-container",[n("v-text-field",{attrs:{"append-icon":"mdi-send",outlined:"","hide-details":"",dense:"",required:"",label:"Send message",type:"text"},on:{"click:append":e.sendMessage},model:{value:e.text,callback:function(t){e.text=t},expression:"text"}})],1),n("v-card-actions",[n("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on;return[n("v-btn",e._g({attrs:{color:"error",outlined:""},on:{click:function(t){e.showDialog=!1}}},a),[n("v-icon",{attrs:{right:""}},[e._v("mdi-close")])],1)]}}])},[n("span",[e._v("Close Menu")])]),n("v-spacer"),e.alreadyFriends?n("v-btn",{attrs:{color:"error",outlined:""},on:{click:e.removeFriend}},[e._v("Remove friend")]):n("v-btn",{attrs:{color:"success",outlined:""},on:{click:e.friendRequest}},[e._v("Add friend")])],1)],1)],1)],1)},$=[],A=(n("a9e3"),{name:"ProfileMenu",data:function(){return{isConnected:!1,loading:!1,user:null,messages:[],alreadyFriends:!0,text:""}},props:{value:Boolean,userId:Number},sockets:{connect:function(){this.isConnected=!0},disconnect:function(){this.isConnected=!1},newMessage:function(e){d["a"].state.user.username==e&&this.loadUser()}},computed:{showDialog:{get:function(){return this.value&&this.loadUser(),this.value},set:function(e){this.$emit("input",e)}}},methods:{loadUser:function(){var e=this;if(this.loading=!1,null!=this.userId&&0!=this.userId)return v.getUserAndChat(this.userId).then((function(t){e.user=t.data.user,e.messages=t.data.messages,e.alreadyFriends=t.data.alreadyFriends,e.loading=!1}))},friendRequest:function(){var e=this;if(this.loading=!1,null!=this.userId&&0!=this.userId)return v.addFriend(this.userId).then((function(){e.alreadyFriends=!0,e.loading=!1}))},removeFriend:function(){var e=this;if(this.loading=!1,null!=this.userId&&0!=this.userId)return v.removeFriend(this.userId).then((function(){e.alreadyFriends=!1,e.loading=!1}))},sendMessage:function(){var e=this;if(this.loading=!1,null!=this.userId&&0!=this.userId&&""!=this.text)return v.sendMessage(this.userId,this.text).then((function(){e.loadUser(),e.text="",e.loading=!1,e.$socket.emit("sendMessage",e.user.username)}))}}}),O=A,N=n("2fa4"),E=Object(m["a"])(O,F,$,!1,null,null,null),B=E.exports;f()(E,{VBtn:y["a"],VCard:g["a"],VCardActions:w["a"],VCardTitle:w["c"],VContainer:_["a"],VDialog:k["a"],VIcon:x["a"],VList:L["a"],VListItem:V["a"],VListItemContent:C["a"],VRow:S["a"],VSpacer:N["a"],VTextField:D["a"],VTooltip:M["a"]});var K=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-row",{attrs:{justify:"center"}},[n("v-dialog",{attrs:{persistent:"","max-width":"600px"},model:{value:e.showDialog,callback:function(t){e.showDialog=t},expression:"showDialog"}},[n("v-card",[n("v-tabs",{attrs:{"fixed-tabs":"","background-color":"primary",dark:""}},[n("v-tab",[e._v("Cards "),n("v-icon",{attrs:{right:""}},[e._v("mdi-cards")])],1),n("v-tab",[e._v("Numerous "),n("v-icon",{attrs:{right:""}},[e._v("mdi-information-outline")])],1),n("v-tab-item",[n("v-container",[n("p",[e._v("The full deck of cards and their rules are listed here.")])]),n("v-list",{staticClass:"overflow-y-auto",staticStyle:{"max-height":"400px"},attrs:{"two-line":"",dense:""}},[n("v-list-item",[n("v-list-item-content",[n("v-list-item-title",[e._v("2")]),n("v-list-item-subtitle",[e._v("Card always playable. Stacks new value is now 2.")])],1)],1),n("v-list-item",{attrs:{"two-line":""}},[n("v-list-item-content",[n("v-list-item-title",[e._v("3")]),n("v-list-item-subtitle",[e._v("Card always playable. Value is transparent and last card of stacks counts.")])],1)],1),n("v-list-item",{attrs:{"two-line":""}},[n("v-list-item-content",[n("v-list-item-title",[e._v("4")]),n("v-list-item-subtitle",[e._v("-")])],1)],1),n("v-list-item",{attrs:{"two-line":""}},[n("v-list-item-content",[n("v-list-item-title",[e._v("5")]),n("v-list-item-subtitle",[e._v("-")])],1)],1),n("v-list-item",{attrs:{"two-line":""}},[n("v-list-item-content",[n("v-list-item-title",[e._v("6")]),n("v-list-item-subtitle",[e._v("-")])],1)],1),n("v-list-item",{attrs:{"two-line":""}},[n("v-list-item-content",[n("v-list-item-title",[e._v("7")]),n("v-list-item-subtitle",[e._v("Card can only be played on 7 or higher (8-A). Next card must be smaller than or equal 7.")])],1)],1),n("v-list-item",{attrs:{"two-line":""}},[n("v-list-item-content",[n("v-list-item-title",[e._v("8")]),n("v-list-item-subtitle",[e._v("Next player gets skipped.")])],1)],1),n("v-list-item",{attrs:{"two-line":""}},[n("v-list-item-content",[n("v-list-item-title",[e._v("9")]),n("v-list-item-subtitle",[e._v("-")])],1)],1),n("v-list-item",{attrs:{"two-line":""}},[n("v-list-item-content",[n("v-list-item-title",[e._v("10")]),n("v-list-item-subtitle",[e._v("Always playable. All cards of stack will be removed. Player can play again.")])],1)],1),n("v-list-item",{attrs:{"two-line":""}},[n("v-list-item-content",[n("v-list-item-title",[e._v("J")]),n("v-list-item-subtitle",[e._v("-")])],1)],1),n("v-list-item",{attrs:{"two-line":""}},[n("v-list-item-content",[n("v-list-item-title",[e._v("Q")]),n("v-list-item-subtitle",[e._v("-")])],1)],1),n("v-list-item",{attrs:{"two-line":""}},[n("v-list-item-content",[n("v-list-item-title",[e._v("K")]),n("v-list-item-subtitle",[e._v("-")])],1)],1),n("v-list-item",{attrs:{"two-line":""}},[n("v-list-item-content",[n("v-list-item-title",[e._v("A")]),n("v-list-item-subtitle",[e._v("-")])],1)],1)],1)],1),n("v-tab-item",[n("v-container",[n("p",[e._v("Numerous can be played up to 5 people.")]),n("p",[e._v(" Each player gets 9 cards. The first 3 cards will be upside down on the table and 6 are in the hand of the player. Then the player has to select 3 cards of the ones in the hand and place them on top of the hidden cards. Clockwise each player puts down cards in his hand to the stack in the center of the table. If the player can't play a card he has to pick up the stack. If there's still a stack of not assigned cards in the deck, the users will keep 3 cards in his hand as long as he can pick up and he hasn't more than 3 cards. ")]),n("p",[e._v(" After all cards in the hand have been played the player can choose one or more cards laying on the table. When those cards have been played he can continue by randomly choosing one of the hidden cards. The game is finished when all cards have been played eg. only one player is not finished. ")])])],1)],1),n("v-card-actions",[n("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on;return[n("v-btn",e._g({attrs:{color:"error",outlined:""},on:{click:function(t){e.showDialog=!1}}},a),[n("v-icon",{attrs:{right:""}},[e._v("mdi-close")])],1)]}}])},[n("span",[e._v("Close Menu")])])],1)],1)],1)],1)},q=[],G={name:"InfoMenu",props:{value:Boolean},computed:{showDialog:{get:function(){return this.value},set:function(e){this.$emit("input",e)}}}},H=G,J=Object(m["a"])(H,K,q,!1,null,null,null),W=J.exports;f()(J,{VBtn:y["a"],VCard:g["a"],VCardActions:w["a"],VContainer:_["a"],VDialog:k["a"],VIcon:x["a"],VList:L["a"],VListItem:V["a"],VListItemContent:C["a"],VListItemSubtitle:C["b"],VListItemTitle:C["c"],VRow:S["a"],VTab:T["a"],VTabItem:U["a"],VTabs:P["a"],VTooltip:M["a"]});var z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[null==e.joinedLobbyData?n("v-card",[n("v-responsive",[n("v-card-title",[n("h3",[e._v("Lobbybrowser")]),n("v-spacer"),n("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on;return[n("v-btn",e._g({staticStyle:{"margin-right":"10px"},attrs:{color:"success",outlined:""},on:{click:e.getLobbies}},a),[n("v-icon",[e._v("mdi-reload")])],1)]}}],null,!1,4123886081)},[n("span",[e._v("Refresh lobbies")])]),n("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on;return[n("v-btn",e._g({attrs:{color:"primary",outlined:""},on:{click:function(t){e.showCreateLobby=!e.showCreateLobby}}},a),[e._v(" Create Lobby"),n("v-icon",{attrs:{right:""}},[e._v("mdi-gamepad-variant-outline")])],1)]}}],null,!1,2191361857)},[n("span",[e._v("Create a new lobby")])])],1),n("v-card-text",[n("v-list",e._l(e.lobbies,(function(t){return n("v-list-item",{key:t.id,on:{click:function(n){return e.joinLobby(t)}}},[n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:e._s(t.name)}})],1),t.isPrivate?n("v-list-item-icon",[n("v-icon",[e._v("mdi-lock-outline")])],1):n("v-list-item-icon",[n("v-icon",[e._v("mdi-lock-open-outline")])],1)],1)})),1)],1)],1)],1):n("v-card",[n("v-responsive",[n("v-card-title",[n("h3",[e._v("Lobby "+e._s(this.joinedLobbyData.name))]),n("v-spacer"),e.isPlayerLeader?n("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on;return[n("v-btn",e._g({staticStyle:{"margin-right":"10px"},attrs:{color:"primary",outlined:""},on:{click:e.startGame}},a),[e._v(" Start Game"),n("v-icon",{attrs:{right:""}},[e._v("mdi-play")])],1)]}}],null,!1,474300569)},[n("span",[e._v("Start numerous card game")])]):e._e(),n("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on;return[n("v-btn",e._g({staticStyle:{"margin-right":"10px"},attrs:{color:"success",outlined:""},on:{click:e.refreshLobby}},a),[n("v-icon",[e._v("mdi-reload")])],1)]}}])},[n("span",[e._v("Refresh lobby")])]),n("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on;return[n("v-btn",e._g({attrs:{color:"error",outlined:""},on:{click:e.leaveLobby}},a),[e._v(" Leave Lobby"),n("v-icon",{attrs:{right:""}},[e._v("mdi-arrow-left")])],1)]}}])},[n("span",[e._v("Leave this lobby")])])],1),n("v-card-text",[n("v-list",e._l(e.joinedLobbyData.players,(function(t){return n("v-list-item",{key:t.id,on:{click:function(n){return e.openChat(t.username)}}},[n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:e._s(t.username)}})],1),n("v-list-item-icon",[n("v-icon",{attrs:{color:"primary"}},[e._v("mdi-chat-outline")])],1)],1)})),1)],1)],1)],1),n("CreateLobby",{attrs:{lobby:e.newLobbyData},on:{createdNewLobby:e.createLobby},model:{value:e.showCreateLobby,callback:function(t){e.showCreateLobby=t},expression:"showCreateLobby"}})],1)},Q=[],Y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-row",{attrs:{justify:"center"}},[n("v-dialog",{attrs:{persistent:"","max-width":"600px"},model:{value:e.showDialog,callback:function(t){e.showDialog=t},expression:"showDialog"}},[n("v-card",[n("div",[n("v-card-title",{staticStyle:{"background-color":"#6a1b9a",color:"white"},attrs:{dark:""}},[e._v("Create Lobby")])],1),n("v-form",[n("v-container",[n("v-row",[n("v-col",[n("v-text-field",{attrs:{label:"Lobby name",outlined:"","hide-details":"",dense:"",required:""},model:{value:e.lobby.name,callback:function(t){e.$set(e.lobby,"name",t)},expression:"lobby.name"}})],1)],1),n("v-row",[n("v-col",[n("v-checkbox",{attrs:{label:"Make lobby private"},model:{value:e.lobby.isPrivate,callback:function(t){e.$set(e.lobby,"isPrivate",t)},expression:"lobby.isPrivate"}}),n("v-text-field",{attrs:{label:"Password",disabled:!e.lobby.isPrivate,type:"password",outlined:"",dense:"",required:""},model:{value:e.lobby.password,callback:function(t){e.$set(e.lobby,"password",t)},expression:"lobby.password"}})],1)],1)],1)],1),n("v-card-actions",[n("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on;return[n("v-btn",e._g({attrs:{color:"error",outlined:""},on:{click:function(t){e.showDialog=!1}}},a),[n("v-icon",{attrs:{right:""}},[e._v("mdi-close")])],1)]}}])},[n("span",[e._v("Close Menu")])]),n("v-spacer"),n("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on;return[n("v-btn",e._g({attrs:{color:"primary"},on:{click:e.createLobby}},a),[e._v(" Create "),n("v-icon",{attrs:{right:""}},[e._v("mdi-gamepad-variant-outline")])],1)]}}])},[n("span",[e._v("Create and join a new lobby")])])],1)],1)],1)],1)},X=[],Z=(n("b0c0"),{name:"CreateLobby",props:{value:Boolean,lobby:{name:"",password:"",isPrivate:!1}},computed:{showDialog:{get:function(){return this.value},set:function(e){this.$emit("input",e)}}},methods:{createLobby:function(){""!=this.lobby.name&&(!this.lobby.isPrivate||this.lobby.isPrivate&&""!=this.lobby.password)&&(this.$emit("createdNewLobby",this.lobby),this.showDialog=!1)}}}),ee=Z,te=n("ac7c"),ne=n("62ad"),ae=n("4bd4"),oe=Object(m["a"])(ee,Y,X,!1,null,null,null),re=oe.exports;f()(oe,{VBtn:y["a"],VCard:g["a"],VCardActions:w["a"],VCardTitle:w["c"],VCheckbox:te["a"],VCol:ne["a"],VContainer:_["a"],VDialog:k["a"],VForm:ae["a"],VIcon:x["a"],VRow:S["a"],VSpacer:N["a"],VTextField:D["a"],VTooltip:M["a"]});var ie={name:"Numerous",components:{CreateLobby:re},data:function(){return{isConnected:!1,lobbies:[],newLobbyData:{name:"",password:"",isPrivate:!1},showCreateLobby:!1,joinedLobbyData:null,player:null,isPlayerLeader:!1}},created:function(){this.getLobbies()},sockets:{connect:function(){this.isConnected=!0},disconnect:function(){this.isConnected=!1},createdLobby:function(e){this.joinLobbyWithPassword(e.id,e.password)},allLobbies:function(e){this.lobbies=e},joinedLobby:function(e){this.joinedLobbyData=e.lobby,this.player=e.player,this.isPlayerLeader=this.joinedLobbyData.leaderId==this.player.id},leftLobby:function(){this.joinedLobbyData=null,this.player=null,this.isPlayerLeader=!1,this.$socket.emit("getLobbies")},updateLobbies:function(){this.$socket.emit("getLobbies")},updateLobby:function(e){this.joinedLobbyData=e,this.isPlayerLeader=this.joinedLobbyData.leaderId==this.player.id}},methods:{getLobbies:function(){this.$socket.emit("getLobbies")},createLobby:function(){this.$socket.emit("createLobby",this.newLobbyData),this.newLobbyData={name:"",isPrivate:!1,password:""}},joinLobby:function(e){var t=d["a"].state.user.username,n="";e.isPrivate&&(n=prompt("Enter password","")),this.$socket.emit("joinLobby",e.id,t,n)},joinLobbyWithPassword:function(e,t){var n=d["a"].state.user.username;this.$socket.emit("joinLobby",e,n,t)},leaveLobby:function(){null!=this.joinedLobbyData&&this.$socket.emit("leaveLobby",this.joinedLobbyData.id)},openChat:function(e){var t=this;if(d["a"].state.user.username!=e)return v.searchUser(e).then((function(e){var n=e.data;t.$emit("openUserProfile",n.id)})).catch((function(){}))},refreshLobby:function(){null!=this.joinedLobbyData&&this.$socket.emit("refreshLobby",this.joinedLobbyData.id)},startGame:function(){}}},se=ie,le=n("6b53"),ce=Object(m["a"])(se,z,Q,!1,null,null,null),ue=ce.exports;f()(ce,{VBtn:y["a"],VCard:g["a"],VCardText:w["b"],VCardTitle:w["c"],VContainer:_["a"],VIcon:x["a"],VList:L["a"],VListItem:V["a"],VListItemContent:C["a"],VListItemIcon:I["a"],VListItemTitle:C["c"],VResponsive:le["a"],VSpacer:N["a"],VTooltip:M["a"]});var de={name:"Home",components:{SocialMenu:R,ProfileMenu:B,InfoMenu:W,Numerous:ue},data:function(){return{showSocialMenu:!1,showPlayerMenu:!1,showInfoMenu:!1,selectedUserId:0,user:null}},created:function(){this.user=d["a"].state.user},methods:{logout:function(){s["a"].logout(),ye.go("login")},openUserProfile:function(e){this.selectedUserId=e,this.showPlayerMenu=!0}}},ve=de,he=Object(m["a"])(ve,r,i,!1,null,null,null),be=he.exports;function me(e,t,n){1==d["a"].state.authenticated?n():n("/login")}f()(he,{VBtn:y["a"],VCard:g["a"],VCardText:w["b"],VCardTitle:w["c"],VContainer:_["a"],VIcon:x["a"],VResponsive:le["a"],VSpacer:N["a"],VTooltip:M["a"]}),a["a"].use(o["a"]);var pe=[{path:"*",name:"notFound",component:function(){return n.e("chunk-2d0e5e97").then(n.bind(null,"9703"))}},{path:"/",name:"home",component:be,beforeEnter:me},{path:"/login",name:"login",component:function(){return n.e("chunk-2d2086b7").then(n.bind(null,"a55b"))}},{path:"/register",name:"register",component:function(){return n.e("chunk-2d0d6d35").then(n.bind(null,"73cf"))}}],fe=new o["a"]({routes:pe}),ye=t["a"]=fe},acb2:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return a}));var a={tokenKey:"access_token",refreshTokenKey:"refresh_token"},o={getToken:function(e){return localStorage.getItem(e)},saveToken:function(e,t){localStorage.setItem(e,t)},removeToken:function(e){localStorage.removeItem(e)}}},c758:function(e,t,n){"use strict";var a=n("bc3a"),o=n.n(a),r=n("acb2"),i={init:function(e){o.a.defaults.baseURL=e},setHeader:function(){o.a.defaults.headers.common["Authorization"]="Bearer ".concat(r["b"].getToken(r["a"].tokenKey))},removeHeader:function(){o.a.defaults.headers.common={}},get:function(e){return o.a.get(e)},post:function(e,t){return o.a.post(e,t)},put:function(e,t){return o.a.put(e,t)},delete:function(e){return o.a.delete(e)},customRequest:function(e){return o()(e)}};t["a"]=i},fe8a:function(e,t,n){e.exports=n.p+"img/numerous.d8432aa3.svg"},fef9:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n("d3b7"),n("96cf");var a=n("c758"),o=n("acb2"),r=n("4360"),i={login:function(e,t){var n,i;return regeneratorRuntime.async((function(s){while(1)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,regeneratorRuntime.awrap(a["a"].post("login",{username:e,password:t}));case 3:return n=s.sent,i=n.data.token,o["b"].saveToken(o["a"].tokenKey,i),o["b"].saveToken(o["a"].refreshTokenKey,i),a["a"].setHeader(),r["a"].state.authenticated=!0,r["a"].state.user={token:i,username:e,isGuest:!1},s.abrupt("return",i);case 13:throw s.prev=13,s.t0=s["catch"](0),"Login failed!";case 16:case"end":return s.stop()}}),null,null,[[0,13]])},guestLogin:function(){var e=this.generateRandomName();return r["a"].state.authenticated=!0,r["a"].state.user={token:null,username:e,isGuest:!0},e},generateRandomName:function(){for(var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t="",n=0;n<15;n++)t+=e.charAt(Math.floor(Math.random()*e.length));return t},register:function(e,t){return regeneratorRuntime.async((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,regeneratorRuntime.awrap(a["a"].post("register",{username:e,password:t}).then((function(){})).catch((function(){throw"Registration failed!"})));case 2:case"end":return n.stop()}}))},refreshToken:function(){var e,t,n;return regeneratorRuntime.async((function(r){while(1)switch(r.prev=r.next){case 0:return e=o["b"].getToken(o["a"].refreshTokenKey),t={method:"post",url:"refreshToken",data:{grant_type:"refresh_token",refresh_token:e}},r.prev=2,r.next=5,regeneratorRuntime.awrap(a["a"].customRequest(t));case 5:return n=r.sent,o["b"].saveToken(o["a"].tokenKey,n.data.newAccessToken),o["b"].saveToken(o["a"].refreshTokenKey,n.data.newRefreshToken),a["a"].setHeader(),r.abrupt("return",n.data.newAccessToken);case 12:throw r.prev=12,r.t0=r["catch"](2),"Refresh token failed!";case 15:case"end":return r.stop()}}),null,null,[[2,12]])},logout:function(){r["a"].state.user.isGuest||(o["b"].removeToken(o["a"].tokenKey),o["b"].removeToken(o["a"].refreshTokenKey),a["a"].removeHeader()),r["a"].state.authenticated=!1,r["a"].state.user={token:null,username:"",isGuest:!1}}}}});
//# sourceMappingURL=app.3d69774e.js.map
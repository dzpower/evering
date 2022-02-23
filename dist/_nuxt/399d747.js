(window.webpackJsonp=window.webpackJsonp||[]).push([[80,3,4,42,44,47],{304:function(t,e,n){"use strict";n.r(e);var l={name:"Bar",components:{},data:function(){return{state:!1}},methods:{handleClick:function(){this.state=!this.state}}},o=n(2),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{class:"bar "+(t.state&&"active")},[n("div",{staticClass:"bar__open",on:{click:t.handleClick}},[t._t("icon",(function(){return[n("img",{attrs:{src:"/icons/menu-bar.svg",alt:"icon"}})]}))],2),t._v(" "),n("div",{staticClass:"bar__wrapper"},[n("div",{staticClass:"bar__close",on:{click:t.handleClick}},[n("img",{attrs:{src:"/icons/close.svg",alt:"close"}})]),t._v(" "),t._t("default")],2)])}),[],!1,null,null,null);e.default=component.exports},305:function(t,e,n){"use strict";n.r(e);var l={name:"Navbar",components:{Bar:n(304).default},data:function(){return{links:[{title:"My page",to:"/profile"},{title:"Following/Followers",to:"/profile/following"},{title:"Messages",to:"/profile/messages"},{title:"Communities",to:"/profile/communities"},{title:"My sales",to:"/profile/sales"},{title:"My purchases",to:"/profile/purchases"},{title:"My suggestions",to:"/profile/suggestions"},{title:"Drafts",to:"/profile/drafts"},{title:"Settings",to:"/profile/settings"}]}},computed:{getActiveLink:function(){var t=this;return function(e){return t.$route.path===e?"profile-page-navbar__navlink active":"profile-page-navbar__navlink"}}}},o=n(2),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Bar",{staticClass:"profile-page-navbar"},t._l(t.links,(function(link,e){return n("NuxtLink",{key:e,class:t.getActiveLink(link.to),attrs:{to:link.to}},[t._v("\n    "+t._s(link.title)+"\n  ")])})),1)}),[],!1,null,null,null);e.default=component.exports},309:function(t,e,n){"use strict";n.r(e);var l={name:"CommunityInfo",props:{withButton:{type:Boolean,default:!1}}},o=n(2),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:"community-info "+(!t.withButton&&"centered")},[n("h2",{staticClass:"community-info__title"},[t._v("Best of the best")]),t._v(" "),n("span",{staticClass:"community-info__followers"},[t._v("10000 Following")]),t._v(" "),t.withButton?n("eve-button",{staticClass:"community-info__goto"},[t._v("Go to the community page")]):t._e()],1)}),[],!1,null,null,null);e.default=component.exports},310:function(t,e,n){"use strict";n.r(e);var l={name:"SettingsNav",props:{append:{type:Boolean,default:!1}},data:function(){return{links:[{title:"Information",href:"basic"},{title:"Sections",href:"sections"},{title:"Statistics",href:"statistic"},{title:"Messages",href:"messages"},{title:"Conversations",href:"conversations"},{title:"Managers",href:"managers"},{title:"Blacklist",href:"blacklist"},{title:"Participants",href:"participants"},{title:"Notifications",href:"notifications"}]}}},o=n(2),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"settings-nav"},t._l(t.links,(function(link){return n("NuxtLink",{key:link.title,staticClass:"settings-nav-item",attrs:{to:link.href,append:t.append}},[n("img",{staticClass:"settings-nav-item__icon",attrs:{src:"/icons/comments.svg",alt:"comments"}}),t._v(" "),n("span",{staticClass:"settings-nav-item__title"},[t._v(t._s(link.title))])])})),1)}),[],!1,null,null,null);e.default=component.exports},313:function(t,e,n){"use strict";n.r(e);var l={name:"CheckboxFilter"},o=n(2),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",{staticClass:"default-checkbox"},[n("input",{attrs:{type:"checkbox"}}),t._v(" "),t._t("default"),t._v(" "),n("span",{staticClass:"default-checkbox__decor"})],2)}),[],!1,null,null,null);e.default=component.exports},376:function(t,e,n){"use strict";n.r(e);var l=n(305),o=n(309),r=n(313),c={components:{SettingsNav:n(310).default,CheckboxFilter:r.default,CommunityInfo:o.default,Navbar:l.default},data:function(){return{links:[{title:"Information",href:"basic"},{title:"Sections",href:"sections"},{title:"Statistics",href:"statistic"},{title:"Messages",href:"messages"},{title:"Conversations",href:"conversations"},{title:"Managers",href:"managers"},{title:"Blacklist",href:"blacklist"},{title:"Participants",href:"participants"},{title:"Notifications",href:"notifications"}]}}},f=n(2),component=Object(f.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"item-page settings-page container"},[n("main",{staticClass:"main"},[n("div",{staticClass:"item-page__columns"},[n("div",{staticClass:"item-page__leftcol"},[n("Navbar",{staticClass:"item-page-navbar"})],1),t._v(" "),n("div",{staticClass:"item-page__content"},[n("h2",{staticClass:"default-h2 bordered"},[t.$device.isMobile?n("NuxtLink",{staticClass:"default-h2__back",attrs:{to:"/profile/settings"}},[n("img",{attrs:{src:"/icons/slider-arrows.svg",alt:"back button"}})]):t._e(),t._v("\n          Messages\n        ")],1),t._v(" "),n("form",{staticClass:"settings-page__checkboxes"},[n("CheckboxFilter",[t._v("Community Messages")]),t._v(" "),n("CheckboxFilter",[t._v("Push Notifications")])],1)]),t._v(" "),t.$device.isDesktop?n("div",{staticClass:"item-page__rightcol"},[n("CommunityInfo"),t._v(" "),n("SettingsNav")],1):t._e()])])])}),[],!1,null,null,null);e.default=component.exports}}]);
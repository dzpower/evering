(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{317:function(t,e,n){"use strict";n.r(e);var r={name:"PostInteresting",props:{item:{type:Object,default:function(){}}},computed:{getPicture:function(){return!!this.item.picture&&"https://kukli.promositetest.ru".concat(JSON.parse(this.item.picture),".webp")}}},o=n(2),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.item?n("div",{staticClass:"post-interesting",on:{click:function(e){return e.stopPropagation(),t.$router.push("feed/"+t.item.id)}}},[n("figure",[n("img",{attrs:{src:t.getPicture,alt:""}}),t._v(" "),n("figcaption",[t._v("\n        "+t._s(t.item.name)+"\n      ")])]),t._v(" "),n("div",{staticClass:"post-interesting__body"},[n("NuxtLink",{staticClass:"post-interesting__user",attrs:{to:"#"}},[n("img",{attrs:{src:"/user.png",alt:""}}),t._v(" "),n("span",[t._v("Alexandra Iks")])]),t._v(" "),n("p",[t._v("First of all, you need to decide on the date and city of the event...")]),t._v(" "),n("NuxtLink",{staticClass:"post-interesting__comments",attrs:{to:"#"}},[n("img",{attrs:{src:"/icons/comments.svg",alt:""}}),t._v("\n      17 comments\n    ")])],1)]):t._e()}),[],!1,null,null,null);e.default=component.exports}}]);
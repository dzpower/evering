(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{326:function(t,e,c){"use strict";c.r(e);c(220);var n={name:"CartItem",props:{item:{type:Object,default:function(){}},index:{type:Number,default:0}},computed:{getPicture:function(){return!!this.item.picture&&"https://kukli.promositetest.ru".concat(this.item.picture,".webp")}},methods:{changeCountProduct:function(t){this.$store.dispatch("basket/changeCountInProduct",{index:this.index,newCount:parseInt(t.target.value)})},deleteProduct:function(){this.$store.dispatch("basket/deleteProduct",this.index)}}},r=c(2),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return t.item?c("div",{staticClass:"cart-item"},[c("div",{staticClass:"cart-item__image default-photo"},[c("img",{attrs:{src:t.getPicture,alt:"cart product image"}})]),t._v(" "),c("div",{staticClass:"cart-item__wrapper"},[c("div",{staticClass:"cart-item__info"},[c("div",{staticClass:"cart-item__info-item"},[c("strong",[t._v(t._s(t.item.name))]),t._v(" "),c("div",{staticClass:"cart-item__prices"},[c("mark",[t._v(t._s(t.item.price))]),t._v(" "),c("s",[t._v("15800")])]),t._v(" "),t._m(0)]),t._v(" "),c("div",{staticClass:"cart-item__info-item"},[t._v("\n        Price\n        "),c("span",[t._v(t._s(""+t.item.currency+t.item.price*t.item.count))])]),t._v(" "),c("div",{staticClass:"cart-item__info-item"})]),t._v(" "),c("div",{staticClass:"cart-item__buttons"},[c("select",{staticClass:"default-select cart-item__select",on:{change:function(e){return t.changeCountProduct(e)}}},t._l(20,(function(i){return c("option",{key:i,staticClass:"default-select__option",domProps:{value:i,selected:t.item.count===i}},[t._v("\n          "+t._s(i)+"\n        ")])})),0),t._v(" "),c("button",{staticClass:"cart-item__delete",on:{click:t.deleteProduct}},[c("img",{attrs:{src:"/icons/delete.svg",alt:"delete"}})])])])]):t._e()}),[function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("ul",{staticClass:"cart-item__info-product"},[c("li",[t._v("\n            Продавец: "),c("strong",[t._v("DVmarket")])]),t._v(" "),c("li",[t._v("\n            Тип товара: "),c("strong",[t._v("ручная работа")])]),t._v(" "),c("li",[t._v("\n            В наличии: "),c("strong",[t._v("несколько")])])])}],!1,null,null,null);e.default=component.exports}}]);
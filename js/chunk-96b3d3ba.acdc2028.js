(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-96b3d3ba"],{"13a0":function(t,a,e){"use strict";e.r(a);var o=function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("div",{staticClass:"collection"},[o("div",{staticClass:"navtop"},[o("van-nav-bar",{attrs:{title:"我的收藏","left-arrow":""},on:{"click-left":t.back}})],1),t.collecdata.length>0?o("ul",{staticClass:"collecList"},t._l(t.collecdata,(function(a,e){return o("router-link",{key:e,attrs:{to:"/details/"+a.pid,tag:"li"}},[o("img",{attrs:{src:a.image}}),o("div",{staticClass:"text"},[o("p",{staticClass:"title"},[t._v(t._s(a.store_name))]),o("div",{staticClass:"priceBox"},[o("span",{staticClass:"price"},[t._v("￥"+t._s(a.price))]),o("span",{staticClass:"del",on:{click:function(e){return e.stopPropagation(),t.cancelCollec(a.pid)}}},[t._v("取消收藏")])])])])})),1):o("div",{staticClass:"img"},[o("img",{attrs:{src:e("64f8")}}),o("p",[t._v("暂无收藏商品")])])])},s=[],i=(e("c08f"),{name:"Collection",data:function(){return{collecdata:[]}},created:function(){this.getCollectionData()},methods:{back:function(){this.$router.back()},getCollectionData:function(){var t=this,a=this.$cookies.get("tokenString");if(!a)return console.log("浏览器token不存在"),this.$router.push({name:"Login"});this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0}),this.axios({method:"GET",url:this.baseUrl+"/collect/user?page=1&limit=20",headers:{"Authori-zation":"Bearer "+a}}).then((function(a){if(console.log(a),t.$toast.clear(),41e4==a.data.status)return t.$toast({message:a.data.msg,forbidClick:!0,duration:1e3}),t.$router.push({name:"Login"});200===a.data.status?t.collecdata=a.data.data:t.$toast({message:a.data.msg,forbidClick:!0,duration:1e3})})).catch((function(a){t.$toast.clear(),console.log("err ==> ",a)}))},cancelCollec:function(t){var a=this,e=this.$cookies.get("tokenString");if(!e)return console.log("浏览器token不存在"),this.$router.push({name:"Login"});this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0}),this.axios({method:"POST",url:this.baseUrl+"/collect/del",data:{category:"product",id:t},headers:{"Authori-zation":"Bearer "+e}}).then((function(t){if(a.$toast.clear(),41e4==t.data.status)return a.$toast({message:t.data.msg,forbidClick:!0,duration:1e3}),a.$router.push({name:"Login"});200===t.data.status?(a.$toast({message:"取消收藏成功",forbidClick:!0,duration:1e3}),a.getCollectionData()):a.$toast({message:t.data.msg,forbidClick:!0,duration:1e3})})).catch((function(t){a.$toast.clear(),console.log("err ==> ",t)}))}}}),n=i,c=e("2877"),l=Object(c["a"])(n,o,s,!1,null,null,null);a["default"]=l.exports},"64f8":function(t,a,e){t.exports=e.p+"img/collecEmpty.86936738.png"},c08f:function(t,a,e){}}]);
//# sourceMappingURL=chunk-96b3d3ba.acdc2028.js.map
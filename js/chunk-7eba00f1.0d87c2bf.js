(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7eba00f1"],{6314:function(t,a,o){"use strict";o.r(a);var e=function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("div",{staticClass:"personalInfo"},[o("div",{staticClass:"navtop"},[o("van-nav-bar",{attrs:{title:"个人信息","left-arrow":""},on:{"click-left":t.back}})],1),o("div",{staticClass:"avatar"},[o("img",{attrs:{src:t.personalInfoData.avatar}}),o("van-uploader",{attrs:{"after-read":t.afterRead}})],1),o("div",{staticClass:"form"},[o("van-field",{attrs:{label:"昵称","input-align":"right"},model:{value:t.personalInfoData.nickname,callback:function(a){t.$set(t.personalInfoData,"nickname",a)},expression:"personalInfoData.nickname"}}),o("van-cell",{attrs:{title:"ID",value:t.personalInfoData.uid}}),o("van-cell",{attrs:{title:"手机号",value:t.personalInfoData.phone}}),o("van-cell",{attrs:{title:"密码",value:"点击修改密码","is-link":"",to:"/setpword"}}),o("div",{staticClass:"btn"},[o("van-button",{attrs:{round:"",block:"",color:"linear-gradient(to right,#ff9000 0,#ff5000 100%)"},on:{click:t.onEdit}},[t._v("保存")]),o("van-button",{attrs:{round:"",block:""},on:{click:t.logOut}},[t._v("退出登录")])],1)],1)])},n=[],s=(o("e2a9"),{name:"PersonalInfo",data:function(){return{personalInfoData:[]}},created:function(){this.getPersonalInfo()},methods:{back:function(){this.$router.back()},afterRead:function(t){var a=this,o=new FormData;o.append("file",t.file);var e=this.$cookies.get("tokenString");if(!e)return console.log("浏览器token不存在"),this.$router.push({name:"Login"});this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0}),this.axios({method:"POST",url:this.baseUrl+"/upload/image",data:o,headers:{"Authori-zation":"Bearer "+e}}).then((function(t){console.log(t),a.$toast.clear(),200==t.data.status?(a.$toast({message:t.data.msg,forbidClick:!0,duration:1e3}),a.getPersonalInfo(t.data.data.url)):a.$toast({message:t.data.msg,forbidClick:!0,duration:3e3})})).catch((function(t){a.$toast.clear(),console.log("err ==> ",t)}))},getPersonalInfo:function(t){var a=this,o=this.$cookies.get("tokenString");if(!o)return console.log("浏览器token不存在"),this.$router.push({name:"Login"});this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0}),this.axios({method:"GET",url:this.baseUrl+"/user",headers:{"Authori-zation":"Bearer "+o}}).then((function(o){a.$toast.clear(),t&&(o.data.data.switchUserInfo[0].avatar=t),200==o.data.status?a.personalInfoData=o.data.data.switchUserInfo[0]:(a.$toast({message:o.data.msg,forbidClick:!0,duration:3e3}),a.$router.push("/login"))})).catch((function(t){a.$toast.clear(),console.log("err ==> ",t)}))},onEdit:function(){var t=this,a=this.$cookies.get("tokenString");if(!a)return console.log("浏览器token不存在"),this.$router.push({name:"Login"});this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0}),this.axios({method:"POST",url:this.baseUrl+"/user/edit",data:{avatar:this.personalInfoData.avatar,nickname:this.personalInfoData.nickname},headers:{"Authori-zation":"Bearer "+a}}).then((function(a){console.log("res getAddressListData ==> ",a),t.$toast.clear(),200==a.data.status&&t.$router.push("/user")})).catch((function(a){t.$toast.clear(),console.log("err ==> ",a)}))},logOut:function(){var t=this,a=this.$cookies.get("tokenString");if(!a)return console.log("浏览器token不存在"),this.$router.push({name:"Login"});this.$dialog.confirm({title:"提示",message:"确定退出登录吗？"}).then((function(){t.axios({method:"GET",url:t.baseUrl+"/logout",headers:{"Authori-zation":"Bearer "+a}}).then((function(){t.$router.push("/")}))})).catch((function(){}))}}}),r=s,i=o("2877"),l=Object(i["a"])(r,e,n,!1,null,null,null);a["default"]=l.exports},e2a9:function(t,a,o){}}]);
//# sourceMappingURL=chunk-7eba00f1.0d87c2bf.js.map
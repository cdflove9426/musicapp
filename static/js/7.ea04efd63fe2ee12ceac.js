webpackJsonp([7],{OdIU:function(t,e){},SS5T:function(t,e){},W2Q3:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("lC5x"),n=s.n(a),o=s("J0Oq"),r=s.n(o),i=s("4YfN"),c=s.n(i),l=s("M9A7"),u={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"alert_container"},[s("section",{staticClass:"tip_text_container"},[t._m(0),t._v(" "),s("p",{staticClass:"tip_text"},[t._v(t._s(t.alertText))]),t._v(" "),s("div",{staticClass:"confrim",on:{click:t.closeTip}},[t._v("确认")])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tip_icon"},[e("span"),this._v(" "),e("span")])}]};var p=s("vSla")({data:function(){return{positionY:0,timer:null}},mounted:function(){},props:["alertText"],methods:{closeTip:function(){this.$emit("closeTip")}}},u,!1,function(t){s("SS5T")},"data-v-7ded237c",null).exports,m=s("9rMa"),d={data:function(){return{isPnonelogin:!1,showPassword:!1,captchaCode:{img:null,code:null},formPw:{phoneNum:null,password:null,yzm_pw:null},formPhone:{phoneNum:null,yzm_pnone:null},showAlert:!1,alertText:""}},components:{alertTip:p},computed:c()({},Object(m.c)(["token","name","avatar"])),created:function(){this.getCaptchaCode()},methods:{back:function(){this.$router.back()},changeLoginWay:function(){this.isPnonelogin=!this.isPnonelogin},changePassWordType:function(){this.showPassword=!this.showPassword},getCaptchaCode:function(){var t=this;return r()(n.a.mark(function e(){var s;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.getcaptchas();case 2:s=e.sent,console.log(s),t.captchaCode.img=s.img,t.captchaCode.code=s.code;case 6:case"end":return e.stop()}},e,t)}))()},submit:function(){var t=this;return r()(n.a.mark(function e(){return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.loginWay){e.next=3;break}e.next=23;break;case 3:if(t.formPw.phoneNum){e.next=9;break}return t.showAlert=!0,t.alertText="请输入手机号/邮箱/用户名",e.abrupt("return");case 9:if(t.formPw.password){e.next=15;break}return t.showAlert=!0,t.alertText="请输入密码",e.abrupt("return");case 15:if(t.formPw.yzm_pw){e.next=19;break}return t.showAlert=!0,t.alertText="请输入验证码",e.abrupt("return");case 19:return e.next=21,t.$store.dispatch("LoginWithPassword",{userAccount:t.formPw.phoneNum,passWord:t.formPw.password,codeNumber:t.formPw.yzm_pw});case 21:t.userInfo=e.sent,console.log(t.userInfo);case 23:t.userInfo.token?t.$router.go(-1):(t.showAlert=!0,t.alertText=t.userInfo.message,t.loginWay||t.getCaptchaCode());case 24:case"end":return e.stop()}},e,t)}))()},closeTip:function(){this.showAlert=!1},rightPhoneNumber:function(t){return/^1\d{10}$/gi.test(t)},loginOutHandle:function(){var t=this;return r()(n.a.mark(function e(){return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("LogOut");case 2:e.sent;case 4:case"end":return e.stop()}},e,t)}))()}}},w={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",[s("div",{staticClass:"wrapper"},[s("div",{staticClass:"login-header"},[s("i",{staticClass:"icon-fanhui",on:{click:t.back}}),t._v(" "),s("p",{staticClass:"title"},[t._v("登录")])]),t._v(" "),t.token?s("div",[s("p",{staticClass:"loginout_tx"},[t._v("已经登陆\n          "),s("br"),t._v("\n         "+t._s(t.token)+"--"+t._s(t.name)+"\n        "),s("img",{attrs:{src:t.avatar}})]),t._v(" "),s("div",{staticClass:"login_container",on:{click:t.loginOutHandle}},[t._v("登出")])]):s("div",{staticClass:"loginContainer"},[t.isPnonelogin?s("form",{staticClass:"loginForm"}):s("form",{staticClass:"loginForm"},[s("section",{staticClass:"input_container"},[s("input",{directives:[{name:"model",rawName:"v-model.lazy",value:t.formPw.phoneNum,expression:"formPw.phoneNum",modifiers:{lazy:!0}}],attrs:{type:"text",placeholder:"手机号码"},domProps:{value:t.formPw.phoneNum},on:{change:function(e){t.$set(t.formPw,"phoneNum",e.target.value)}}})]),t._v(" "),s("section",{staticClass:"input_container"},[t.showPassword?s("input",{directives:[{name:"model",rawName:"v-model",value:t.formPw.password,expression:"formPw.password"}],attrs:{type:"text",placeholder:"密码"},domProps:{value:t.formPw.password},on:{input:function(e){e.target.composing||t.$set(t.formPw,"password",e.target.value)}}}):s("input",{directives:[{name:"model",rawName:"v-model",value:t.formPw.password,expression:"formPw.password"}],attrs:{type:"password",placeholder:"密码"},domProps:{value:t.formPw.password},on:{input:function(e){e.target.composing||t.$set(t.formPw,"password",e.target.value)}}}),t._v(" "),s("div",{staticClass:"button_switch",class:{change_to_text:t.showPassword},on:{click:t.changePassWordType}},[s("div",{staticClass:"circle_button",class:{trans_to_right:t.showPassword}}),t._v(" "),s("span",[t._v("abc")])])]),t._v(" "),s("section",{staticClass:"input_container captcha_code_container"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.formPw.yzm_pw,expression:"formPw.yzm_pw"}],attrs:{type:"text",placeholder:"验证码",maxlength:"4"},domProps:{value:t.formPw.yzm_pw},on:{input:function(e){e.target.composing||t.$set(t.formPw,"yzm_pw",e.target.value)}}}),t._v(" "),s("div",{staticClass:"img_change_img"},[s("img",{directives:[{name:"show",rawName:"v-show",value:t.captchaCode.img,expression:"captchaCode.img"}],attrs:{src:t.captchaCode.img},on:{click:t.getCaptchaCode}})])])]),t._v(" "),s("div",{staticClass:"login_container",on:{click:t.submit}},[t._v("登录")]),t._v(" "),t.showAlert?s("alert-tip",{attrs:{showHide:t.showAlert,alertText:t.alertText},on:{closeTip:t.closeTip}}):t._e()],1)])])},staticRenderFns:[]};var h=s("vSla")(d,w,!1,function(t){s("OdIU")},"data-v-522c7a9e",null);e.default=h.exports}});
//# sourceMappingURL=7.ea04efd63fe2ee12ceac.js.map
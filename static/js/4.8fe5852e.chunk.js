(this["webpackJsonpsocial-network"]=this["webpackJsonpsocial-network"]||[]).push([[4],{346:function(e,a,t){e.exports={dialogsAll:"Dialogs_dialogsAll__aQu-U",dialogs:"Dialogs_dialogs__12Mme",dialog:"Dialogs_dialog__1AmBl",name:"Dialogs_name__1dXUw",messages:"Dialogs_messages__3KI7F",photoAva:"Dialogs_photoAva__2g7wY",myButton:"Dialogs_myButton__3tBBP",messageblue:"Dialogs_messageblue__3v4E-",messagecontent:"Dialogs_messagecontent__2lPKt",messagetimestampright:"Dialogs_messagetimestampright__2sT34",messagetimestampleft:"Dialogs_messagetimestampleft__AAbYG"}},347:function(e,a,t){"use strict";t.d(a,"a",(function(){return r}));var s=t(46),n=t(47),i=t(51),l=t(50),m=t(0),o=t.n(m),c=t(11),r=function(e){return function(a){Object(i.a)(m,a);var t=Object(l.a)(m);function m(){return Object(s.a)(this,m),t.apply(this,arguments)}return Object(n.a)(m,[{key:"render",value:function(){return this.props.isAuth?o.a.createElement(e,this.props):o.a.createElement(c.a,{to:"/login"})}}]),m}(o.a.Component)}},353:function(e,a,t){"use strict";t.r(a);var s=t(89),n=t(0),i=t.n(n),l=t(346),m=t.n(l),o=t(25),c=function(e){e.id;return i.a.createElement("div",{className:m.a.dialog},i.a.createElement(o.b,{className:m.a.name,to:"/dialogs/"+e.id},i.a.createElement("img",{className:m.a.photoAva,src:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4bkPT14o4_n_lnU-3DNyZol1LE0vParolHN-kXQTD8exgO4-8&usqp=CAU"}),e.name))},r=function(e){return i.a.createElement("div",{className:m.a.container},i.a.createElement("div",{className:m.a.messageblue},i.a.createElement("div",{className:m.a.message},e.message),i.a.createElement("div",{className:m.a.messagetimestampleft},"17:15")))},g=t(153),u=t(154),d=t(62),_=t(78),p=Object(_.a)(100),b=Object(u.a)({form:"dialogAddMessageForm"})((function(e){return i.a.createElement("form",{onSubmit:e.handleSubmit},i.a.createElement("div",null,i.a.createElement(g.a,{placeholder:"message",name:"newMessageText",component:d.b,validate:[_.b,p]}),i.a.createElement("button",{className:m.a.myButton},"Add post")))})),f=function(e){var a=e.dialogsPage,t=a.dialogs.map((function(e){return i.a.createElement(c,{name:e.name,id:e.id,key:e.id})})),s=a.messages.map((function(e){return i.a.createElement(r,{message:e.message,key:e.id})}));return i.a.createElement("div",{className:m.a.dialogsAll},i.a.createElement("div",{className:m.a.dialogs},t),i.a.createElement("div",{className:m.a.messages},i.a.createElement(b,{onSubmit:function(a){e.addMessageCreator(a.newMessageText)}})),i.a.createElement("div",{className:m.a.messages},s))},E=t(16),v=t(347),h=t(10);a.default=Object(h.d)(Object(E.b)((function(e){return{dialogsPage:e.dialogsPage,isAuth:e.auth.isAuth}}),(function(e){return{addMessageCreator:function(a){e(Object(s.a)(a))}}})),v.a)(f)}}]);
//# sourceMappingURL=4.8fe5852e.chunk.js.map
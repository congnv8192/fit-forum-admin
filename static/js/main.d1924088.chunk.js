(this["webpackJsonpfit-forum-admin"]=this["webpackJsonpfit-forum-admin"]||[]).push([[0],{23:function(e,s,a){},24:function(e,s,a){},25:function(e,s,a){"use strict";a.r(s);var t=a(16),n=a.n(t),r=a(7),c=a(5),l=a(6),i=a(10),j=a(9),d=a(1),o=a.n(d),h=a(2),b=a(0);function u(e){var s=e.user;return Object(b.jsx)("aside",{children:Object(b.jsx)("div",{id:"sidebar",className:"nav-collapse ",children:Object(b.jsxs)("ul",{className:"sidebar-menu",id:"nav-accordion",children:[Object(b.jsx)("p",{className:"centered",children:Object(b.jsx)("a",{href:"profile.html",children:Object(b.jsx)("img",{src:s?s.avatar:"/img/ui-sam.jpg",className:"img-circle",width:"80"})})}),Object(b.jsx)("h5",{className:"centered",children:s?s.displayName:"User"}),Object(b.jsx)("li",{className:"mt",children:Object(b.jsxs)(r.c,{to:"/",activeClassName:"active",children:[Object(b.jsx)("i",{className:"fa fa-dashboard"}),Object(b.jsx)("span",{children:"Dashboard"})]})}),Object(b.jsx)("li",{className:"sub-menu",children:Object(b.jsxs)(r.c,{to:"/users",activeClassName:"active",children:[Object(b.jsx)("i",{className:"fa fa-users"}),Object(b.jsx)("span",{children:"All users"})]})})]})})})}function m(){return Object(b.jsx)("footer",{className:"site-footer",children:Object(b.jsxs)("div",{className:"text-center",children:[Object(b.jsxs)("p",{children:["\xa9 Copyrights ",Object(b.jsx)("strong",{children:"Dashio"}),". All Rights Reserved"]}),Object(b.jsxs)("div",{className:"credits",children:["Created with Dashio template by ",Object(b.jsx)("a",{href:"https://templatemag.com/",children:"TemplateMag"})]}),Object(b.jsx)("a",{href:"blank.html#",className:"go-top",children:Object(b.jsx)("i",{className:"fa fa-angle-up"})})]})})}var x=a(3),O=a.n(x),p=a(4),f=function(){function e(){Object(c.a)(this,e)}return Object(l.a)(e,null,[{key:"login",value:function(){var e=Object(p.a)(O.a.mark((function e(s,a){var t,n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(this.API_URL+"/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:s,password:a}),credentials:"include"});case 2:if(200!==(t=e.sent).status){e.next=8;break}return e.next=6,t.json();case 6:return n=e.sent,e.abrupt("return",n);case 8:return e.abrupt("return",null);case 9:case"end":return e.stop()}}),e,this)})));return function(s,a){return e.apply(this,arguments)}}()},{key:"logout",value:function(){var e=Object(p.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(this.API_URL+"/auth/logout",{method:"POST",credentials:"include"});case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),e}();function v(e){var s=e.user;return Object(b.jsxs)("header",{className:"header black-bg",children:[Object(b.jsx)("div",{className:"sidebar-toggle-box",children:Object(b.jsx)("div",{className:"fa fa-bars tooltips","data-placement":"right","data-original-title":"Toggle Navigation"})}),Object(b.jsx)("a",{href:"index.html",className:"logo",children:Object(b.jsxs)("b",{children:["DASH",Object(b.jsx)("span",{children:"IO"})]})}),Object(b.jsx)("div",{className:"nav notify-row",id:"top_menu",children:Object(b.jsxs)("ul",{className:"nav top-menu",children:[Object(b.jsxs)("li",{className:"dropdown",children:[Object(b.jsxs)("a",{"data-toggle":"dropdown",className:"dropdown-toggle",href:"index.html#",children:[Object(b.jsx)("i",{className:"fa fa-tasks"}),Object(b.jsx)("span",{className:"badge bg-theme",children:"4"})]}),Object(b.jsxs)("ul",{className:"dropdown-menu extended tasks-bar",children:[Object(b.jsx)("div",{className:"notify-arrow notify-arrow-green"}),Object(b.jsx)("li",{children:Object(b.jsx)("p",{className:"green",children:"You have 4 pending tasks"})}),Object(b.jsx)("li",{children:Object(b.jsxs)("a",{href:"index.html#",children:[Object(b.jsxs)("div",{className:"task-info",children:[Object(b.jsx)("div",{className:"desc",children:"Dashio Admin Panel"}),Object(b.jsx)("div",{className:"percent",children:"40%"})]}),Object(b.jsx)("div",{className:"progress progress-striped",children:Object(b.jsx)("div",{className:"progress-bar progress-bar-success",role:"progressbar","aria-valuenow":"40","aria-valuemin":"0","aria-valuemax":"100",style:{width:"40%"},children:Object(b.jsx)("span",{className:"sr-only",children:"40% Complete (success)"})})})]})}),Object(b.jsx)("li",{children:Object(b.jsxs)("a",{href:"index.html#",children:[Object(b.jsxs)("div",{className:"task-info",children:[Object(b.jsx)("div",{className:"desc",children:"Database Update"}),Object(b.jsx)("div",{className:"percent",children:"60%"})]}),Object(b.jsx)("div",{className:"progress progress-striped",children:Object(b.jsx)("div",{className:"progress-bar progress-bar-warning",role:"progressbar","aria-valuenow":"60","aria-valuemin":"0","aria-valuemax":"100",style:{width:"60%"},children:Object(b.jsx)("span",{className:"sr-only",children:"60% Complete (warning)"})})})]})}),Object(b.jsx)("li",{children:Object(b.jsxs)("a",{href:"index.html#",children:[Object(b.jsxs)("div",{className:"task-info",children:[Object(b.jsx)("div",{className:"desc",children:"Product Development"}),Object(b.jsx)("div",{className:"percent",children:"80%"})]}),Object(b.jsx)("div",{className:"progress progress-striped",children:Object(b.jsx)("div",{className:"progress-bar progress-bar-info",role:"progressbar","aria-valuenow":"80","aria-valuemin":"0","aria-valuemax":"100",style:{width:"80%"},children:Object(b.jsx)("span",{className:"sr-only",children:"80% Complete"})})})]})}),Object(b.jsx)("li",{children:Object(b.jsxs)("a",{href:"index.html#",children:[Object(b.jsxs)("div",{className:"task-info",children:[Object(b.jsx)("div",{className:"desc",children:"Payments Sent"}),Object(b.jsx)("div",{className:"percent",children:"70%"})]}),Object(b.jsx)("div",{className:"progress progress-striped",children:Object(b.jsx)("div",{className:"progress-bar progress-bar-danger",role:"progressbar","aria-valuenow":"70","aria-valuemin":"0","aria-valuemax":"100",style:{width:"70%"},children:Object(b.jsx)("span",{className:"sr-only",children:"70% Complete (Important)"})})})]})}),Object(b.jsx)("li",{className:"external",children:Object(b.jsx)("a",{href:"#",children:"See All Tasks"})})]})]}),Object(b.jsxs)("li",{id:"header_inbox_bar",className:"dropdown",children:[Object(b.jsxs)("a",{"data-toggle":"dropdown",className:"dropdown-toggle",href:"index.html#",children:[Object(b.jsx)("i",{className:"fa fa-envelope-o"}),Object(b.jsx)("span",{className:"badge bg-theme",children:"5"})]}),Object(b.jsxs)("ul",{className:"dropdown-menu extended inbox",children:[Object(b.jsx)("div",{className:"notify-arrow notify-arrow-green"}),Object(b.jsx)("li",{children:Object(b.jsx)("p",{className:"green",children:"You have 5 new messages"})}),Object(b.jsx)("li",{children:Object(b.jsxs)("a",{href:"index.html#",children:[Object(b.jsx)("span",{className:"photo",children:Object(b.jsx)("img",{alt:"avatar",src:"img/ui-zac.jpg"})}),Object(b.jsxs)("span",{className:"subject",children:[Object(b.jsx)("span",{className:"from",children:"Zac Snider"}),Object(b.jsx)("span",{className:"time",children:"Just now"})]}),Object(b.jsx)("span",{className:"message",children:"Hi mate, how is everything?"})]})}),Object(b.jsx)("li",{children:Object(b.jsxs)("a",{href:"index.html#",children:[Object(b.jsx)("span",{className:"photo",children:Object(b.jsx)("img",{alt:"avatar",src:"img/ui-divya.jpg"})}),Object(b.jsxs)("span",{className:"subject",children:[Object(b.jsx)("span",{className:"from",children:"Divya Manian"}),Object(b.jsx)("span",{className:"time",children:"40 mins."})]}),Object(b.jsx)("span",{className:"message",children:"Hi, I need your help with this."})]})}),Object(b.jsx)("li",{children:Object(b.jsxs)("a",{href:"index.html#",children:[Object(b.jsx)("span",{className:"photo",children:Object(b.jsx)("img",{alt:"avatar",src:"img/ui-danro.jpg"})}),Object(b.jsxs)("span",{className:"subject",children:[Object(b.jsx)("span",{className:"from",children:"Dan Rogers"}),Object(b.jsx)("span",{className:"time",children:"2 hrs."})]}),Object(b.jsx)("span",{className:"message",children:"Love your new Dashboard."})]})}),Object(b.jsx)("li",{children:Object(b.jsxs)("a",{href:"index.html#",children:[Object(b.jsx)("span",{className:"photo",children:Object(b.jsx)("img",{alt:"avatar",src:"img/ui-sherman.jpg"})}),Object(b.jsxs)("span",{className:"subject",children:[Object(b.jsx)("span",{className:"from",children:"Dj Sherman"}),Object(b.jsx)("span",{className:"time",children:"4 hrs."})]}),Object(b.jsx)("span",{className:"message",children:"Please, answer asap."})]})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"index.html#",children:"See all messages"})})]})]}),Object(b.jsxs)("li",{id:"header_notification_bar",className:"dropdown",children:[Object(b.jsxs)("a",{"data-toggle":"dropdown",className:"dropdown-toggle",href:"index.html#",children:[Object(b.jsx)("i",{className:"fa fa-bell-o"}),Object(b.jsx)("span",{className:"badge bg-warning",children:"7"})]}),Object(b.jsxs)("ul",{className:"dropdown-menu extended notification",children:[Object(b.jsx)("div",{className:"notify-arrow notify-arrow-yellow"}),Object(b.jsx)("li",{children:Object(b.jsx)("p",{className:"yellow",children:"You have 7 new notifications"})}),Object(b.jsx)("li",{children:Object(b.jsxs)("a",{href:"index.html#",children:[Object(b.jsx)("span",{className:"label label-danger",children:Object(b.jsx)("i",{className:"fa fa-bolt"})}),"Server Overloaded.",Object(b.jsx)("span",{className:"small italic",children:"4 mins."})]})}),Object(b.jsx)("li",{children:Object(b.jsxs)("a",{href:"index.html#",children:[Object(b.jsx)("span",{className:"label label-warning",children:Object(b.jsx)("i",{className:"fa fa-bell"})}),"Memory #2 Not Responding.",Object(b.jsx)("span",{className:"small italic",children:"30 mins."})]})}),Object(b.jsx)("li",{children:Object(b.jsxs)("a",{href:"index.html#",children:[Object(b.jsx)("span",{className:"label label-danger",children:Object(b.jsx)("i",{className:"fa fa-bolt"})}),"Disk Space Reached 85%.",Object(b.jsx)("span",{className:"small italic",children:"2 hrs."})]})}),Object(b.jsx)("li",{children:Object(b.jsxs)("a",{href:"index.html#",children:[Object(b.jsx)("span",{className:"label label-success",children:Object(b.jsx)("i",{className:"fa fa-plus"})}),"New User Registered.",Object(b.jsx)("span",{className:"small italic",children:"3 hrs."})]})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"index.html#",children:"See all notifications"})})]})]})]})}),Object(b.jsx)("div",{className:"top-menu",children:Object(b.jsx)("ul",{className:"nav pull-right top-menu",children:Object(b.jsx)("li",{children:s?Object(b.jsx)("button",{className:"logout",onClick:function(){f.logout(),localStorage.clear(),window.location.replace("/login")},children:"Logout"}):Object(b.jsx)(r.b,{className:"logout",to:"/login",children:"Login"})})})})]})}f.API_URL="https://fit-forum.herokuapp.com/api";var g=a(11),N=(a(23),function(e){Object(i.a)(a,e);var s=Object(j.a)(a);function a(){var e;return Object(c.a)(this,a),(e=s.call(this)).handleChange=function(s){var a=s.currentTarget,t=a.name,n=a.value;e.setState(Object(g.a)({},t,n))},e.handleSubmit=function(){var s=Object(p.a)(O.a.mark((function s(a){var t,n,r,c;return O.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return a.preventDefault(),t=e.state,n=t.username,r=t.password,s.next=4,f.login(n,r);case 4:(c=s.sent)?(localStorage.setItem("user",JSON.stringify(c)),console.log(c),window.location.replace("/")):alert("Invalid credentials!");case 6:case"end":return s.stop()}}),s)})));return function(e){return s.apply(this,arguments)}}(),e.state={username:"",password:""},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{id:"login-page",children:Object(b.jsx)("div",{class:"container",children:Object(b.jsxs)("form",{class:"form-login",children:[Object(b.jsx)("h2",{class:"form-login-heading",children:"sign in now"}),Object(b.jsxs)("div",{class:"login-wrap",children:[Object(b.jsx)("input",{type:"text",class:"form-control",placeholder:"Username",autofocus:"",name:"username",value:this.state.username,onChange:this.handleChange}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{type:"password",class:"form-control",placeholder:"Password",name:"password",value:this.state.password,onChange:this.handleChange}),Object(b.jsx)("label",{class:"checkbox",children:Object(b.jsx)("span",{class:"pull-right",children:Object(b.jsx)("a",{"data-toggle":"modal",href:"login.html#myModal",children:" Forgot Password?"})})}),Object(b.jsxs)("button",{class:"btn btn-theme btn-block",type:"submit",onClick:this.handleSubmit,children:[Object(b.jsx)("i",{class:"fa fa-lock"})," SIGN IN"]}),Object(b.jsx)("hr",{}),Object(b.jsxs)("div",{class:"registration",children:["Don't have an account yet?",Object(b.jsx)("br",{}),Object(b.jsx)("a",{class:"",href:"#",children:"Create an account"})]})]})]})})}),Object(b.jsx)("div",{class:"backstretch",children:Object(b.jsx)("img",{src:"img/login-bg.jpg",alt:""})})]})}}]),a}(o.a.Component)),w=a(13);function y(e){var s=e.label;return Object(b.jsxs)("div",{className:"form-group",children:[s?Object(b.jsx)("label",{className:"col-sm-2 col-sm-2 control-label",children:s}):"",Object(b.jsx)("div",{className:"col-sm-10",children:Object(b.jsx)("input",Object(w.a)({className:"form-control"},e))})]})}var k=function(){function e(){Object(c.a)(this,e)}return Object(l.a)(e,null,[{key:"getAll",value:function(){var e=Object(p.a)(O.a.mark((function e(){var s,a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(this.API_URL+"/users",{credentials:"include"});case 2:return s=e.sent,e.next=5,s.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getById",value:function(){var e=Object(p.a)(O.a.mark((function e(s){var a,t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(this.API_URL+"/users/"+s,{credentials:"include"});case 2:if(200!==(a=e.sent).status){e.next=8;break}return e.next=6,a.json();case 6:return t=e.sent,e.abrupt("return",t);case 8:return e.abrupt("return",null);case 9:case"end":return e.stop()}}),e,this)})));return function(s){return e.apply(this,arguments)}}()},{key:"add",value:function(){var e=Object(p.a)(O.a.mark((function e(s){var a,t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(this.API_URL+"/users",{method:"POST",body:JSON.stringify(s),headers:{"Content-Type":"application/json"},credentials:"include"});case 2:if(201!==(a=e.sent).status){e.next=10;break}return e.next=6,a.json();case 6:return t=e.sent,e.abrupt("return",t);case 10:if(400!==a.status){e.next=12;break}return e.abrupt("return",null);case 12:case"end":return e.stop()}}),e,this)})));return function(s){return e.apply(this,arguments)}}()},{key:"update",value:function(){var e=Object(p.a)(O.a.mark((function e(s,a){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(this.API_URL+"/users/"+s,{method:"PUT",body:JSON.stringify(a),headers:{"Content-Type":"application/json"},credentials:"include"});case 2:if(200!==e.sent.status){e.next=5;break}return e.abrupt("return",!0);case 5:return e.abrupt("return",!1);case 6:case"end":return e.stop()}}),e,this)})));return function(s,a){return e.apply(this,arguments)}}()},{key:"delete",value:function(){var e=Object(p.a)(O.a.mark((function e(s){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(this.API_URL+"/users/"+s,{method:"DELETE",credentials:"include"});case 2:if(204!==e.sent.status){e.next=5;break}return e.abrupt("return",!0);case 5:return e.abrupt("return",!1);case 6:case"end":return e.stop()}}),e,this)})));return function(s){return e.apply(this,arguments)}}()}]),e}();k.API_URL="https://fit-forum.herokuapp.com/api";var C=function(e){Object(i.a)(a,e);var s=Object(j.a)(a);function a(e){var t;return Object(c.a)(this,a),(t=s.call(this,e)).handleChange=function(e){var s=e.currentTarget,a=s.name,n=s.value;t.setState(Object(g.a)({},a,n))},t.handleSubmit=function(){var e=Object(p.a)(O.a.mark((function e(s){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s.preventDefault(),e.next=3,k.add(t.state);case 3:e.sent?(alert("Added successfully!"),window.location.replace("/users")):alert("Invalid data! Please try again later.");case 5:case"end":return e.stop()}}),e)})));return function(s){return e.apply(this,arguments)}}(),t.state={username:"",passwor:"",displayName:"",avatar:""},t}return Object(l.a)(a,[{key:"render",value:function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("h3",{children:[Object(b.jsx)("i",{className:"fa fa-angle-right"})," Add new user"]}),Object(b.jsx)("div",{className:"text-right",children:Object(b.jsxs)(r.b,{to:"/users",className:"btn btn-primary",children:[Object(b.jsx)("i",{className:"fa fa-reply"})," All users"]})}),Object(b.jsx)("div",{className:"row mt",children:Object(b.jsxs)("div",{className:"form-panel",children:[Object(b.jsxs)("h4",{className:"mb",children:[Object(b.jsx)("i",{className:"fa fa-angle-right"})," User details"]}),Object(b.jsxs)("form",{className:"form-horizontal style-form",onSubmit:this.handleSubmit,children:[Object(b.jsx)(y,{label:"Username",name:"username",value:this.state.username,onChange:this.handleChange}),Object(b.jsx)(y,{type:"password",label:"Password",name:"password",value:this.state.password,onChange:this.handleChange}),Object(b.jsx)(y,{label:"Display name",name:"displayName",value:this.state.displayName,onChange:this.handleChange}),Object(b.jsx)(y,{label:"Avatar link",name:"avatar",value:this.state.avatar,onChange:this.handleChange}),Object(b.jsx)("div",{className:"text-right",children:Object(b.jsxs)("button",{type:"submit",className:"btn btn-theme",children:[Object(b.jsx)("i",{className:"fa fa-save"})," Save"]})})]})]})})]})}}]),a}(o.a.Component),S=function(e){Object(i.a)(a,e);var s=Object(j.a)(a);function a(e){var t;Object(c.a)(this,a),(t=s.call(this,e)).handleChange=function(e){var s=e.currentTarget,a=s.name,n=s.value;t.setState(Object(g.a)({},a,n))},t.handleSubmit=function(){var e=Object(p.a)(O.a.mark((function e(s){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s.preventDefault(),e.next=3,k.update(t.state._id,t.state);case 3:e.sent?(alert("Updated successfully!"),window.location.replace("/users")):alert("Invalid data! Please try again later.");case 5:case"end":return e.stop()}}),e)})));return function(s){return e.apply(this,arguments)}}();var n=window.location.pathname.split("/")[2];return t.state={_id:n,username:"",displayName:"",avatar:""},t}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=Object(p.a)(O.a.mark((function e(){var s;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.getById(this.state._id);case 2:(s=e.sent)||window.location.replace("/users"),this.setState(Object(w.a)({},s));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("h3",{children:[Object(b.jsx)("i",{className:"fa fa-angle-right"})," Edit user"]}),Object(b.jsx)("div",{className:"text-right",children:Object(b.jsxs)(r.b,{to:"/users",className:"btn btn-primary",children:[Object(b.jsx)("i",{className:"fa fa-reply"})," All users"]})}),Object(b.jsx)("div",{className:"row mt",children:Object(b.jsxs)("div",{className:"form-panel",children:[Object(b.jsxs)("h4",{className:"mb",children:[Object(b.jsx)("i",{className:"fa fa-angle-right"})," User details"]}),Object(b.jsxs)("form",{className:"form-horizontal style-form",onSubmit:this.handleSubmit,children:[Object(b.jsx)(y,{label:"Username",name:"username",value:this.state.username,onChange:this.handleChange}),Object(b.jsx)(y,{label:"Display name",name:"displayName",value:this.state.displayName,onChange:this.handleChange}),Object(b.jsx)(y,{label:"Avatar link",name:"avatar",value:this.state.avatar,onChange:this.handleChange}),Object(b.jsx)("div",{className:"text-right",children:Object(b.jsxs)("button",{type:"submit",className:"btn btn-theme",children:[Object(b.jsx)("i",{className:"fa fa-save"})," Save"]})})]})]})})]})}}]),a}(o.a.Component),D=(a(24),function(e){Object(i.a)(a,e);var s=Object(j.a)(a);function a(){var e;return Object(c.a)(this,a),(e=s.call(this)).deleteUser=function(){var s=Object(p.a)(O.a.mark((function s(a){var t;return O.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,k.delete(a);case 2:s.sent?(alert("Deleted successfully!"),t=(t=e.state.users).filter((function(e){return e._id!==a})),e.setState({users:t})):alert("Invalid id!");case 4:case"end":return s.stop()}}),s)})));return function(e){return s.apply(this,arguments)}}(),e.state={users:[]},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=Object(p.a)(O.a.mark((function e(){var s;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.getAll();case 2:s=e.sent,this.setState({users:s});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("h3",{children:[Object(b.jsx)("i",{className:"fa fa-angle-right"})," All users"]}),Object(b.jsx)("div",{className:"text-right",children:Object(b.jsxs)(r.b,{to:"/users/add",className:"btn btn-primary",children:[Object(b.jsx)("i",{className:"fa fa-user-plus"})," Add new user"]})}),Object(b.jsx)("div",{className:"row mt",children:Object(b.jsx)("div",{className:"col-lg-12",children:Object(b.jsx)("div",{className:"content-panel",children:Object(b.jsxs)("table",{className:"table table-striped table-advance table-hover table-users",children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsxs)("th",{children:[Object(b.jsx)("i",{className:"fa fa-bullhorn"})," ID"]}),Object(b.jsxs)("th",{className:"hidden-phone",children:[Object(b.jsx)("i",{className:"fa fa-question-circle"}),"Username"]}),Object(b.jsxs)("th",{children:[Object(b.jsx)("i",{className:"fa fa-bookmark"})," Display Name"]}),Object(b.jsx)("th",{})]})}),Object(b.jsx)("tbody",{children:this.state.users.map((function(s,a){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:a+1}),Object(b.jsxs)("td",{children:[Object(b.jsx)("img",{src:s.avatar,alt:""}),s.username]}),Object(b.jsx)("td",{children:s.displayName}),Object(b.jsxs)("td",{className:"text-center",children:[Object(b.jsx)(r.b,{className:"btn btn-primary btn-xs",to:"/users/".concat(s._id,"/edit"),children:Object(b.jsx)("i",{className:"fa fa-pencil"})}),Object(b.jsx)("button",{onClick:function(){return e.deleteUser(s._id)},className:"btn btn-danger btn-xs",children:Object(b.jsx)("i",{className:"fa fa-trash-o"})})]})]},s._id)}))})]})})})})]})}}]),a}(o.a.Component)),A=function(e){Object(i.a)(a,e);var s=Object(j.a)(a);function a(){var e;return Object(c.a)(this,a),(e=s.call(this)).state={user:null},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("user");e&&(e=JSON.parse(e)),this.setState({user:e})}},{key:"render",value:function(){return Object(b.jsxs)(h.c,{children:[Object(b.jsx)(h.a,{path:"/fit-forum-admin/login",element:Object(b.jsx)(N,{})}),Object(b.jsx)(h.a,{path:"*",element:Object(b.jsxs)("section",{id:"container",children:[Object(b.jsx)(v,{user:this.state.user}),Object(b.jsx)(u,{user:this.state.user}),Object(b.jsx)("section",{id:"main-content",children:Object(b.jsx)("section",{className:"wrapper site-min-height",children:Object(b.jsxs)(h.c,{children:[Object(b.jsx)(h.a,{path:"/fit-forum-admin/users",element:Object(b.jsx)(D,{})}),Object(b.jsx)(h.a,{path:"/fit-forum-admin/users/add",element:Object(b.jsx)(C,{})}),Object(b.jsx)(h.a,{path:"/fit-forum-admin/users/:id/edit",element:Object(b.jsx)(S,{})})]})})}),Object(b.jsx)(m,{})]})})]})}}]),a}(o.a.Component);n.a.render(Object(b.jsx)(r.a,{children:Object(b.jsx)(A,{})}),document.querySelector("#root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.d1924088.chunk.js.map
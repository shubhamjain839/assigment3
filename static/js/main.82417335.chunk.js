(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,a){e.exports={ListItemView:"ListItemView_ListItemView__OheX1",BackButton:"ListItemView_BackButton__1Bkmj",Alert:"ListItemView_Alert__25yi0",ListItemViewDiv:"ListItemView_ListItemViewDiv__dfoUQ",Image:"ListItemView_Image__36QPO",FirstName:"ListItemView_FirstName__2cTd4",LastName:"ListItemView_LastName__1Ol59",Email:"ListItemView_Email__25Ked",BtnDelete:"ListItemView_BtnDelete__3L0Lo",BtnUpdate:"ListItemView_BtnUpdate__37Yl-"}},,function(e,t,a){e.exports={ResourceView:"ResourceView_ResourceView__2GLex",ResourceViewDiv:"ResourceView_ResourceViewDiv__34zyd",BackButton:"ResourceView_BackButton__1w6CW",Alert:"ResourceView_Alert__1dnan",Image:"ResourceView_Image__2nAYs",FirstName:"ResourceView_FirstName__1OrBG",LastName:"ResourceView_LastName__3byL1",Email:"ResourceView_Email__1Qw-m",BtnDelete:"ResourceView_BtnDelete__1zka5"}},,function(e,t,a){e.exports={Brand:"Navbar_Brand__3-Hjs",NavbarLogo:"Navbar_NavbarLogo__WtIRm",NavbarLinks:"Navbar_NavbarLinks__1CTge",Navbar:"Navbar_Navbar__2hRdE",NavbarLinksRight:"Navbar_NavbarLinksRight__2gu3W"}},,function(e,t,a){e.exports={Title:"InputFormRegister_Title__3jvOq",Button:"InputFormRegister_Button__27en4"}},function(e,t,a){e.exports={Title:"InputFormLogin_Title__36i93",Button:"InputFormLogin_Button__3xQ7o"}},function(e,t,a){e.exports={Title:"InputFormCreate_Title__1ukps",Button:"InputFormCreate_Button__3V6vr"}},function(e,t,a){e.exports={Title:"InputFormUpdate_Title__YrBdO",Button:"InputFormUpdate_Button__2wMyL"}},function(e,t,a){e.exports={ListItem:"ListItem_ListItem__3TT9X",ListItemImg:"ListItem_ListItemImg__2v7Z7",ListItemHeader:"ListItem_ListItemHeader__2gv75"}},function(e,t,a){e.exports={Resource:"Resource_Resource__3w4aq",ResourceHeader:"Resource_ResourceHeader__36Wwx",ResourceHeaderH1:"Resource_ResourceHeaderH1__mzDGO",ResourceHeaderH2:"Resource_ResourceHeaderH2__2kk-p",ResourceHeaderH3:"Resource_ResourceHeaderH3__OoioS"}},,,function(e,t,a){e.exports={NavLinksBtn:"NavLinks_NavLinksBtn__2DPiq"}},,,function(e,t,a){e.exports={Alert:"Alert_Alert__yB75-",Danger:"Alert_Danger__G5Qkz",Success:"Alert_Success__32Nze"}},function(e,t,a){e.exports={InputFieldBox:"InputField_InputFieldBox__3V6qA"}},,,,,,,,,,,function(e,t,a){e.exports={App:"App_App__16_go"}},,function(e,t,a){e.exports={MainContainer:"MainContainer_MainContainer__o1V-J"}},function(e,t,a){e.exports={MainCard:"MainCard_MainCard__3Lt5I"}},function(e,t,a){e.exports={Graphics:"Graphics_Graphics__3WCIX"}},function(e,t,a){e.exports={ListContainer:"ListContainer_ListContainer__2p9-Z"}},function(e,t,a){e.exports={Spinner:"Spinner_Spinner__2hN0x",spinner:"Spinner_spinner__1u7Gs"}},function(e,t,a){e.exports={ResourceContainer:"ResourcesContainer_ResourceContainer__3OZJq"}},function(e,t,a){e.exports={MainContentArea:"MainContentArea_MainContentArea__1M2-i"}},,,,,,function(e,t,a){},,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(1),s=a.n(r),c=a(42),i=a.n(c),o=(a(57),a(43)),l=a.n(o),u=a(6),j=a(18),p=a.n(j),d=a(28),b=a.n(d),m=function(e){var t=e.title,a=e.clicked,r=e.path;return Object(n.jsx)("div",{className:b.a.NavLinks,children:Object(n.jsx)(u.b,{to:r,onClick:a,className:b.a.NavLinksBtn,children:t})})},O=function(e){return Object(n.jsxs)("div",{className:p.a.Navbar,children:[Object(n.jsx)("div",{className:p.a.NavbarLogo,children:Object(n.jsx)(u.b,{to:"/",children:Object(n.jsx)("img",{className:p.a.Brand,src:"Assets/brand.png",alt:"logo"})})}),Object(n.jsxs)("div",{className:p.a.NavbarLinksRight,children:[Object(n.jsx)(m,{path:"/list",clicked:function(){},title:"LIST USERS"}),Object(n.jsx)(m,{path:"/resources",clicked:function(){},title:"LIST RESOURCES"})]}),Object(n.jsxs)("div",{className:p.a.NavbarLinks,children:[Object(n.jsx)(m,{path:"/login",clicked:function(){},title:"LOGIN"}),Object(n.jsx)(m,{path:"/create",clicked:function(){},title:"CREATE USER"})]})]})},h=a(4),x=a(45),_=a.n(x),f=a(46),v=a.n(f),g=function(e){var t=e.children;return Object(n.jsx)("div",{className:v.a.MainCard,children:t})},w=a(47),N=a.n(w),L=function(e){var t=e.logo;return Object(n.jsx)("div",{className:N.a.Graphics,children:Object(n.jsx)("img",{src:"Assets/svg/".concat(t,".svg"),alt:"logo"})})},y=a(3),I=a.n(y),k=a(7),A=a(15),B=a(2),R=a(9),T=a(8),C=a.n(T),F=a(31),S=a.n(F),M=function(e){var t=e.title,a=e.type;return Object(n.jsx)("div",{className:"".concat(S.a.Alert," ").concat(S.a[a]),children:Object(n.jsx)("p",{children:t})})},V=a(32),D=a.n(V),E=function(e){var t=e.type,a=e.placholder,r=e.name,s=e.value,c=e.changed;return Object(n.jsx)("div",{className:D.a.InputField,children:Object(n.jsx)("input",{className:D.a.InputFieldBox,type:t,placeholder:a,name:r,onChange:c,value:s})})},H=a(20),U=a.n(H),q=function(e){var t=e.title,a=Object(r.useState)({email:"",pwd:"",conPwd:"",showAlert:!1,alertMessage:"",alertType:""}),s=Object(R.a)(a,2),c=s[0],i=s[1],o=function(e){i(Object(B.a)(Object(B.a)({},c),{},Object(A.a)({},e.target.name,e.target.value)))},l=function(){setTimeout((function(){i(Object(B.a)(Object(B.a)({},c),{},{showAlert:!1}))}),2500)},u=function(){var e=Object(k.a)(I.a.mark((function e(t){var a;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),c.pwd===c.conPwd){e.next=5;break}return i(Object(B.a)(Object(B.a)({},c),{},{alertMessage:"Passwords Don't match",alertType:"Danger",showAlert:!0})),l(),e.abrupt("return");case 5:return e.prev=5,a={email:c.email,password:c.pwd},e.next=9,C.a.post("https://reqres.in/api/register",a);case 9:200===e.sent.status&&i(Object(B.a)(Object(B.a)({},c),{},{alertMessage:"User Added",alertType:"Success",showAlert:!0})),l(),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(5),i(Object(B.a)(Object(B.a)({},c),{},{alertMessage:e.t0.message,alertType:"Danger",showAlert:!0})),l();case 18:case"end":return e.stop()}}),e,null,[[5,14]])})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsxs)("div",{className:U.a.InputFormRegister,children:[Object(n.jsx)("div",{className:U.a.Title,children:Object(n.jsx)("p",{children:t})}),Object(n.jsxs)("form",{action:"#",method:"post",children:[Object(n.jsx)(E,{type:"text",changed:function(e){return o(e)},value:c.email,name:"email",placholder:"Enter Your Email"}),Object(n.jsx)(E,{type:"password",changed:function(e){return o(e)},value:c.pwd,name:"pwd",placholder:"Enter Your Password"}),Object(n.jsx)(E,{type:"password",changed:function(e){return o(e)},value:c.conPwd,name:"conPwd",placholder:"Confirm Your Password"}),Object(n.jsx)("button",{onClick:function(e){return u(e)},className:U.a.Button,children:"Submit"})]}),c.showAlert&&Object(n.jsx)(M,{title:c.alertMessage,type:c.alertType})]})},P=a(21),Y=a.n(P),G=function(e){var t=e.title,a=Object(r.useState)({email:"",pwd:"",showAlert:!1,alertMessage:"",alertType:""}),s=Object(R.a)(a,2),c=s[0],i=s[1],o=function(e){i(Object(B.a)(Object(B.a)({},c),{},Object(A.a)({},e.target.name,e.target.value)))},l=function(){setTimeout((function(){i(Object(B.a)(Object(B.a)({},c),{},{showAlert:!1}))}),2500)},u=function(){var e=Object(k.a)(I.a.mark((function e(t){var a;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),""!==c.pwd&&""!==c.email){e.next=5;break}return i(Object(B.a)(Object(B.a)({},c),{},{alertMessage:"Fields Can't be Empty",alertType:"Danger",showAlert:!0})),l(),e.abrupt("return");case 5:return e.prev=5,a={email:c.email,password:c.pwd},e.next=9,C.a.post("https://reqres.in/api/login",a);case 9:200===e.sent.status&&i(Object(B.a)(Object(B.a)({},c),{},{alertMessage:"Login Successful",alertType:"Success",showAlert:!0})),l(),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(5),i(Object(B.a)(Object(B.a)({},c),{},{alertMessage:e.t0.message,alertType:"Danger",showAlert:!0})),l();case 18:case"end":return e.stop()}}),e,null,[[5,14]])})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsxs)("div",{className:Y.a.InputFormLogin,children:[Object(n.jsx)("div",{className:Y.a.Title,children:Object(n.jsx)("p",{children:t})}),Object(n.jsxs)("form",{action:"#",method:"post",children:[Object(n.jsx)(E,{type:"text",changed:function(e){return o(e)},value:c.email,name:"email",placholder:"Enter Your Email"}),Object(n.jsx)(E,{type:"password",changed:function(e){return o(e)},value:c.pwd,name:"pwd",placholder:"Enter Your Password"}),Object(n.jsx)("button",{onClick:function(e){return u(e)},className:Y.a.Button,children:"Submit"})]}),c.showAlert&&Object(n.jsx)(M,{title:c.alertMessage,type:c.alertType})]})},J=a(22),z=a.n(J),Q=function(e){var t=e.title,a=Object(r.useState)({name:"",job:"",showAlert:!1,alertMessage:"",alertType:""}),s=Object(R.a)(a,2),c=s[0],i=s[1],o=function(e){i(Object(B.a)(Object(B.a)({},c),{},Object(A.a)({},e.target.name,e.target.value)))},l=function(){setTimeout((function(){i(Object(B.a)(Object(B.a)({},c),{},{showAlert:!1}))}),2500)},u=function(){var e=Object(k.a)(I.a.mark((function e(t){var a;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),""!==c.name&&""!==c.job){e.next=5;break}return i(Object(B.a)(Object(B.a)({},c),{},{alertMessage:"Fields Can't Be Empty",alertType:"Danger",showAlert:!0})),l(),e.abrupt("return");case 5:return e.prev=5,a={name:c.name,job:c.job},e.next=9,C.a.post("https://reqres.in/api/users",a);case 9:201===e.sent.status&&i(Object(B.a)(Object(B.a)({},c),{},{alertMessage:"User Created",alertType:"Success",showAlert:!0})),l(),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(5),i(Object(B.a)(Object(B.a)({},c),{},{alertMessage:e.t0.message,alertType:"Danger",showAlert:!0})),l();case 18:case"end":return e.stop()}}),e,null,[[5,14]])})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsxs)("div",{className:z.a.InputFormCreate,children:[Object(n.jsx)("div",{className:z.a.Title,children:Object(n.jsx)("p",{children:t})}),Object(n.jsxs)("form",{action:"#",method:"post",children:[Object(n.jsx)(E,{type:"text",changed:function(e){return o(e)},value:c.name,name:"name",placholder:"Enter Your Name"}),Object(n.jsx)(E,{type:"text",changed:function(e){return o(e)},value:c.job,name:"job",placholder:"Enter Your Job"}),Object(n.jsx)("button",{onClick:function(e){return u(e)},className:z.a.Button,children:"Submit"})]}),c.showAlert&&Object(n.jsx)(M,{title:c.alertMessage,type:c.alertType})]})},W=a(23),X=a.n(W),Z=function(e){var t=e.title,a=Object(r.useState)({name:"",job:"",showAlert:!1,alertMessage:"",alertType:""}),s=Object(R.a)(a,2),c=s[0],i=s[1],o=function(e){i(Object(B.a)(Object(B.a)({},c),{},Object(A.a)({},e.target.name,e.target.value)))},l=function(){setTimeout((function(){i(Object(B.a)(Object(B.a)({},c),{},{showAlert:!1}))}),2500)},u=function(){var e=Object(k.a)(I.a.mark((function e(t){var a;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),""!==c.name&&""!==c.job){e.next=5;break}return i(Object(B.a)(Object(B.a)({},c),{},{alertMessage:"Fields Can't Be Empty",alertType:"Danger",showAlert:!0})),l(),e.abrupt("return");case 5:return e.prev=5,a={name:c.name,job:c.job},e.next=9,C.a.put("https://reqres.in/api/users/2",a);case 9:200===e.sent.status&&i(Object(B.a)(Object(B.a)({},c),{},{alertMessage:"User Updated",alertType:"Success",showAlert:!0})),l(),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(5),i(Object(B.a)(Object(B.a)({},c),{},{alertMessage:e.t0.message,alertType:"Danger",showAlert:!0})),l();case 18:case"end":return e.stop()}}),e,null,[[5,14]])})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsxs)("div",{className:X.a.InputFormUpdate,children:[Object(n.jsx)("div",{className:X.a.Title,children:Object(n.jsx)("p",{children:t})}),Object(n.jsxs)("form",{action:"#",method:"post",children:[Object(n.jsx)(E,{type:"text",changed:function(e){return o(e)},value:c.name,name:"name",placholder:"Enter New Name"}),Object(n.jsx)(E,{type:"text",changed:function(e){return o(e)},value:c.job,name:"job",placholder:"Enter New Job"}),Object(n.jsx)("button",{onClick:function(e){return u(e)},className:X.a.Button,children:"Submit"})]}),c.showAlert&&Object(n.jsx)(M,{title:c.alertMessage,type:c.alertType})]})},K=function(e){var t=e.graphic,a=e.title,r=e.inputForm,s=Object(n.jsx)(q,{title:a});return"login"===r&&(s=Object(n.jsx)(G,{title:a})),"create"===r&&(s=Object(n.jsx)(Q,{title:a})),"update"===r&&(s=Object(n.jsx)(Z,{title:a})),Object(n.jsxs)("div",{className:_.a.MainContainer,children:[Object(n.jsx)(g,{children:Object(n.jsx)(L,{logo:t})}),Object(n.jsx)(g,{children:s})]})},$=a(48),ee=a.n($),te=a(24),ae=a.n(te),ne=function(e){var t=e.listItem;return Object(n.jsxs)("div",{className:ae.a.ListItem,children:[Object(n.jsx)("div",{className:ae.a.ListItemImg,children:Object(n.jsx)("img",{src:t.avatar,alt:"peron"})}),Object(n.jsxs)("div",{className:ae.a.ListItemHeader,children:[Object(n.jsx)(u.b,{to:"/list/".concat(t.id),children:t.first_name}),Object(n.jsx)("p",{children:t.last_name})]})]})},re=a(49),se=a.n(re),ce=function(){return Object(n.jsx)("div",{className:se.a.Spinner})},ie=function(){var e=Object(r.useState)({list:{data:[]}}),t=Object(R.a)(e,2),a=t[0],s=t[1];return Object(r.useEffect)((function(){(function(){var e=Object(k.a)(I.a.mark((function e(){var t;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C.a.get("https://reqres.in/api/users?page=2");case 3:t=e.sent,setTimeout((function(){s({list:t.data})}),400),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[]),a&&a.list.data.length<=0?Object(n.jsx)(ce,{}):Object(n.jsx)("div",{className:ee.a.ListContainer,children:a.list.data&&a.list.data.map((function(e,t){return Object(n.jsx)(ne,{listItem:e},t)}))})},oe=a(25),le=a.n(oe),ue=function(e){var t=e.resourceItem;return Object(n.jsx)("div",{className:le.a.Resource,children:Object(n.jsxs)("div",{className:le.a.ResourceHeader,children:[Object(n.jsx)("div",{style:{backgroundColor:t.color}}),Object(n.jsx)(u.b,{to:"/resources/".concat(t.id),className:le.a.ResourceHeaderH1,children:t.name})]})})},je=a(50),pe=a.n(je),de=function(){var e=Object(r.useState)({resource:{data:[]},loading:!0}),t=Object(R.a)(e,2),a=t[0],s=t[1];return Object(r.useEffect)((function(){(function(){var e=Object(k.a)(I.a.mark((function e(){var t;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C.a.get("https://reqres.in/api/unknown");case 3:t=e.sent,setTimeout((function(){s({resource:t.data,loading:!1})}),300),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[]),a.loading?Object(n.jsx)(ce,{}):Object(n.jsx)("div",{className:pe.a.ResourceContainer,children:a.resource.data&&a.resource.data.map((function(e,t){return Object(n.jsx)(ue,{resourceItem:e},t)}))})},be=a(14),me=a.n(be),Oe=function(e){var t=Object(r.useState)({first_name:"",last_name:"",email:"",avatar:"",loading:!0}),a=Object(R.a)(t,2),s=a[0],c=a[1],i=Object(r.useState)({title:"",type:"",showAlert:!1}),o=Object(R.a)(i,2),l=o[0],j=o[1],p=function(){setTimeout((function(){j(Object(B.a)(Object(B.a)({},l),{},{showAlert:!1}))}),2500)},d=function(){var t=Object(k.a)(I.a.mark((function t(a){return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.prev=1,t.next=4,C.a.delete("https://reqres.in/api/users/".concat(e.props.match.params.id));case 4:j({title:"User Deleted Successfully",type:"Success",showAlert:!0}),p(),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),j({title:"User Deletion Failed",type:"Danger",showAlert:!0}),p();case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}();return Object(r.useEffect)((function(){var t=function(){var t=Object(k.a)(I.a.mark((function t(){var a;return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,C.a.get("https://reqres.in/api/users/".concat(e.props.match.params.id));case 3:a=t.sent,setTimeout((function(){c(Object(B.a)(Object(B.a)({},s),{},{first_name:a.data.data.first_name,last_name:a.data.data.last_name,email:a.data.data.email,avatar:a.data.data.avatar,loading:!1}))}),300),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();s.loading&&t()}),[c,s,e.props.match.params.id]),s.loading?Object(n.jsx)(ce,{}):Object(n.jsxs)("div",{className:me.a.ListItemView,children:[Object(n.jsx)("div",{className:me.a.BackButton,children:Object(n.jsx)(u.b,{to:"/list",children:" Back"})}),Object(n.jsxs)("div",{className:me.a.ListItemViewDiv,children:[Object(n.jsx)("img",{className:me.a.Image,src:s.avatar,alt:"person"}),Object(n.jsxs)("p",{className:me.a.FirstName,children:["First Name: ",s.first_name]}),Object(n.jsxs)("p",{className:me.a.LastName,children:["Last Name: ",s.last_name]}),Object(n.jsxs)("p",{className:me.a.Email,children:["Email: ",s.email]})]}),Object(n.jsxs)("div",{className:me.a.Buttons,children:[Object(n.jsx)(u.b,{to:"/update/".concat(e.props.match.params.id),className:me.a.BtnUpdate,children:"Update"}),Object(n.jsx)(u.b,{to:"",onClick:function(e){return d(e)},className:me.a.BtnDelete,children:"Delete"})]}),Object(n.jsx)("div",{className:me.a.Alert,children:l.showAlert&&Object(n.jsx)(M,{title:l.title,type:l.type})})]})},he=a(16),xe=a.n(he),_e=function(e){var t=Object(r.useState)({name:"",year:"",color:"",pantone_value:"",loading:!0}),a=Object(R.a)(t,2),s=a[0],c=a[1];return Object(r.useEffect)((function(){var t=function(){var t=Object(k.a)(I.a.mark((function t(){var a;return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,C.a.get("https://reqres.in/api/unknown/".concat(e.props.match.params.id));case 3:a=t.sent,setTimeout((function(){c(Object(B.a)(Object(B.a)({},s),{},{name:a.data.data.name,year:a.data.data.year,color:a.data.data.color,pantone_value:a.data.data.pantone_value,loading:!1}))}),300),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();s.loading&&t()}),[c,s,e.props.match.params.id]),s.loading?Object(n.jsx)(ce,{}):Object(n.jsxs)("div",{className:xe.a.ResourceView,children:[Object(n.jsx)("div",{className:xe.a.BackButton,children:Object(n.jsx)(u.b,{to:"/resources",children:" Back"})}),Object(n.jsxs)("div",{className:xe.a.ResourceViewDiv,children:[Object(n.jsx)("div",{className:xe.a.Image,style:{backgroundColor:s.color}}),Object(n.jsxs)("p",{className:xe.a.FirstName,children:[" Color Name:",s.name]}),Object(n.jsxs)("p",{className:xe.a.LastName,children:["Year: ",s.year]}),Object(n.jsxs)("p",{className:xe.a.Email,children:["Pantone Value: ",s.pantone_value]})]})]})},fe=a(51),ve=a.n(fe),ge=function(){return Object(n.jsx)("div",{className:ve.a.MainContentArea,children:Object(n.jsxs)(h.c,{children:[Object(n.jsx)(h.a,{path:"/",exact:!0,component:function(){return Object(n.jsx)(K,{graphic:"welcome",inputForm:"register",title:"Register"})}}),Object(n.jsx)(h.a,{path:"/login",exact:!0,component:function(){return Object(n.jsx)(K,{graphic:"login",inputForm:"login",title:"Login User"})}}),Object(n.jsx)(h.a,{path:"/create",exact:!0,component:function(){return Object(n.jsx)(K,{graphic:"create",inputForm:"create",title:"Create User"})}}),Object(n.jsx)(h.a,{path:"/update/:id",exact:!0,component:function(){return Object(n.jsx)(K,{graphic:"update",inputForm:"update",title:"Update User"})}}),Object(n.jsx)(h.a,{path:"/list",exact:!0,component:function(){return Object(n.jsx)(ie,{})}}),Object(n.jsx)(h.a,{path:"/list/:id",exact:!0,component:function(e){return Object(n.jsx)(Oe,{props:e})}}),Object(n.jsx)(h.a,{path:"/resources/:id",exact:!0,component:function(e){return Object(n.jsx)(_e,{props:e})}}),Object(n.jsx)(h.a,{path:"/resources",exact:!0,component:function(){return Object(n.jsx)(de,{})}})]})})},we=function(){return Object(n.jsxs)(u.a,{children:[Object(n.jsx)(O,{}),Object(n.jsx)(ge,{})]})},Ne=function(){return Object(n.jsx)("div",{className:l.a.App,children:Object(n.jsx)(we,{})})},Le=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,83)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),s(e),c(e)}))};i.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(Ne,{})}),document.getElementById("root")),Le()}],[[82,1,2]]]);
//# sourceMappingURL=main.82417335.chunk.js.map
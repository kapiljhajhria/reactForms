(this.webpackJsonpforms=this.webpackJsonpforms||[]).push([[0],{135:function(e,t,a){e.exports=a(177)},140:function(e,t,a){},142:function(e,t,a){},162:function(e,t,a){},169:function(e,t,a){},177:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(13),o=a.n(s),l=(a(140),a(18)),c=a.n(l),i=a(27),u=a(119),m=(a(142),a(77)),d=a(78),p=a(79),h=a(86),g=a(85),f=a(53),v=a.n(f),b=a(60),w=a(243),E=a(118);var C={init:function(){w.a({dsn:"https://ce625a42c479474d86a00952b0109351@o504500.ingest.sentry.io/5591499",autoSessionTracking:!0,integrations:[new E.a.BrowserTracing],tracesSampleRate:1})},log:function(e){console.log(e)}};v.a.interceptors.response.use(null,(function(e){return e.response&&e.response.status>=400&&e.response.status<500||(C.log(e),console.log("some other unexp error",e),b.b.error("unexpected error occured")),Promise.reject(e)}));var k={get:v.a.get,post:v.a.post,put:v.a.put,delete:v.a.delete,setJwt:function(e){v.a.defaults.headers.common["x-auth-token"]=e}},y=a(113),S=a(41),I=S.apiUrl+"/auth";function x(){return(x=Object(i.a)(c.a.mark((function e(t){var a,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.post(I,{email:t.email,password:t.password});case 2:a=e.sent,n=a.data,localStorage.setItem("token",n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(){return localStorage.getItem("token")}k.setJwt(j());var D={login:function(e){return x.apply(this,arguments)},loginWithJwt:function(e){localStorage.setItem("token",e)},logout:function(){localStorage.removeItem("token")},getCurrentUser:function(){try{var e=localStorage.getItem("token");return Object(y.a)(e)}catch(t){return null}},getJwt:j},O=S.apiUrl+"/users";function N(e){return k.post(O,{email:e.email,password:e.password,name:e.name})}var B=a(19),U=(a(162),a(178)),L=a(247),P=a(232),T=a(245),A=a(229),J=function(e){Object(h.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={email:"",name:"",password:"",rePassword:"",selectedTab:0,warning:""},e._apiUrl=S.api_url,e.clearAllFields=function(){e.setState({email:"",name:"",password:"",rePassword:"",warning:""})},e.validateEmail=function(){return/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.state.email)?"":"Invalid email"},e.logInUser=function(){var t=Object(i.a)(c.a.mark((function t(a){var n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),n="",n=0===e.state.email.length?"Please enter an email id":e.validateEmail(),0===e.state.password.length&&(n+="\n Please enter your password"),0===n.length){t.next=7;break}return alert(n),t.abrupt("return");case 7:return t.prev=7,t.next=10,D.login(e.state);case 10:t.next=16;break;case 12:return t.prev=12,t.t0=t.catch(7),t.t0.response&&400===t.t0.response.status&&b.b.error(t.t0.response.data),t.abrupt("return");case 16:if(0===n.length){t.next=19;break}return alert(n),t.abrupt("return");case 19:e.props.history.push("/customers");case 20:case"end":return t.stop()}}),t,null,[[7,12]])})));return function(e){return t.apply(this,arguments)}}(),e.signUpUser=Object(i.a)(c.a.mark((function t(){var a,n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a="",a=0===e.state.email.length?"Please enter an email id":e.validateEmail(),0===e.state.password.length?a+="\nPlease enter a password":e.state.password!==e.state.rePassword&&(a+="\nPasswords don't match"),0===a.trim().length){t.next=6;break}return alert(a),t.abrupt("return");case 6:return t.prev=6,t.next=9,N(e.state);case 9:n=t.sent,D.loginWithJwt(n.headers["x-auth-token"]),e.props.history.push("/customers"),t.next=18;break;case 14:return t.prev=14,t.t0=t.catch(6),t.t0.response&&400===t.t0.response.status&&b.b.error(t.t0.response.data),t.abrupt("return");case 18:0===a.length&&e.setState({selectedTab:0});case 19:case"end":return t.stop()}}),t,null,[[6,14]])}))),e.handleInputChange=function(t){e.setState(Object(m.a)({},t.target.name,t.target.value))},e.changeTab=function(t){e.setState({selectedTab:t}),e.clearAllFields()},e}return Object(p.a)(a,[{key:"matchPasswords",value:function(){if(this.state.password!==this.state.rePassword)return"passwords don't match"}},{key:"render",value:function(){var e=this;return D.getCurrentUser()?r.a.createElement(B.a,{to:"/customers"}):r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,null),r.a.createElement("div",{className:"crmHome-main"},r.a.createElement("div",{className:"crmHome-title"},"Best CRM App"),r.a.createElement(U.a,{className:"paperForm"},r.a.createElement(T.a,{value:this.state.selectedTab,onChange:function(t,a){return e.changeTab(a)},"aria-label":"simple tabs example"},r.a.createElement(A.a,{label:"LOGIN"}),r.a.createElement(A.a,{label:"SIGN UP"})),r.a.createElement("div",{className:"loginView tabView",hidden:0!==this.state.selectedTab},r.a.createElement(L.a,{name:"email",id:"logIn-email",label:"email",variant:"outlined",onChange:this.handleInputChange,value:this.state.email}),r.a.createElement(L.a,{name:"password",id:"logIn-password",label:"password",variant:"outlined",type:"password",onChange:this.handleInputChange,value:this.state.password}),r.a.createElement(P.a,{color:"primary",variant:"contained",onClick:function(t){return e.logInUser(t)}},"log in")),r.a.createElement("div",{className:"signupView tabView",hidden:1!==this.state.selectedTab},r.a.createElement(L.a,{name:"name",id:"signup-name",label:"name",variant:"outlined",onChange:this.handleInputChange,value:this.state.name}),r.a.createElement(L.a,{name:"email",id:"signUp-email",label:"email",variant:"outlined",onChange:this.handleInputChange,value:this.state.email}),r.a.createElement(L.a,{name:"password",id:"signUp-password",label:"password",variant:"outlined",type:"password",onChange:this.handleInputChange,value:this.state.password}),r.a.createElement(L.a,{name:"rePassword",id:"signUp-rePassword",label:"password",variant:"outlined",type:"password",onChange:this.handleInputChange,value:this.state.rePassword}),r.a.createElement(P.a,{color:"primary",variant:"contained",onClick:function(){return e.signUpUser()}},"Sign Up")))))}}]),a}(r.a.Component);function _(e,t){return F.apply(this,arguments)}function F(){return(F=Object(i.a)(c.a.mark((function e(t,a){var n,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});case 3:return n=e.sent,console.log("got response from api, response",n),console.log("got response from api, response.body",n.body),e.next=8,n.json();case 8:r=e.sent,console.log("got response from api, jsonMap",r),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:return e.abrupt("return",r);case 16:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}var M=a(120),W=function(e){e.path;var t=e.component,a=e.render,n=Object(M.a)(e,["path","component","render"]);return r.a.createElement(B.b,Object.assign({exact:!0},n,{render:function(e){return D.getCurrentUser()?t?r.a.createElement(t,e):a(e):r.a.createElement(B.a,{to:{pathname:"/",state:{from:e.location}}})}}))},V=(a(169),a(240)),G=a(244),H=a(251),R=a(233),$=a(235),q=a(239),z=a(238),K=a(234),Q=a(236),X=a(237),Y=a(117),Z=a.n(Y),ee=Object(R.a)({table:{minWidth:650}});function te(e){var t=ee();return r.a.createElement(K.a,{component:U.a},r.a.createElement($.a,{className:t.table,"aria-label":"simple table"},r.a.createElement(Q.a,null,r.a.createElement(X.a,null,r.a.createElement(z.a,null,"Customer ID"),r.a.createElement(z.a,{align:"right"},"Name"),r.a.createElement(z.a,{align:"right"},"Gender"),r.a.createElement(z.a,{align:"right"},"Contact No"),r.a.createElement(z.a,{align:"right"},"Remove?"))),r.a.createElement(q.a,null,e.tableData.map((function(t,a){return r.a.createElement(X.a,{key:t.name},r.a.createElement(z.a,{component:"th",scope:"row"},t._id),r.a.createElement(z.a,{align:"right"},t.name),r.a.createElement(z.a,{align:"right"},t.gender),r.a.createElement(z.a,{align:"right"},t.contact),r.a.createElement(z.a,{align:"right"},e.deletingCustList.includes(t._id)?r.a.createElement("div",null,r.a.createElement(V.a,{color:"secondary"})):r.a.createElement(P.a,{variant:"contained",color:"secondary",className:"deleteBtn",startIcon:r.a.createElement(Z.a,null),onClick:function(){e.deleteCustomerId(t._id,a)}})))})))))}var ae=a(248),ne=a(246),re=S.apiUrl+"/customers";function se(e){return k.delete((t=e,"".concat(re,"/").concat(t)));var t}var oe=a(174),le=function(e){Object(h.a)(a,e);var t=Object(g.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={name:"",gender:"male",contact:"",fetchedData:"",tableData:[],deletingCustList:[],openSnackBar:!1,lastDeletedCustomer:{},showUndoIndicator:!1},n.errorBoolsList=[!1,!1],n.setErrorsList=function(e){console.log("errorList is:"+e),n.errorBoolsList=[].concat(e)},n.showSnackBar=function(){n.setState({openSnackBar:!0})},n.closeSnackBar=function(e,t){"clickaway"!==t&&n.setState({openSnackBar:!1})},n.createData=function(e,t,a,n){return{_id:e,name:t,gender:a,contact:n}},n.deleteCustomerId=function(){var e=Object(i.a)(c.a.mark((function e(t,a){var r,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(r={}).data=n.state.tableData[a],r.index=a,n.setState({deletingCustList:n.state.deletingCustList.concat(t)}),console.log("deleting custID:"+t),e.next=7,se(t);case 7:s=e.sent,console.log("customer deleted, resp.data is ",s.data),n.setState({tableData:n.state.tableData.filter((function(e){return e._id!=t})),deletingCustList:n.state.deletingCustList.filter((function(e){return e!==t}))}),console.log("main list, deleting id list and last cust deleting list updated using setState, showing snackbar now"+t),n.showSnackBar();case 12:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),n.validateData=function(){var e=[!1,!1],t=[];return 0===n.state.name.length&&(t.push("Customer Name can't be empty"),e[0]=!0),0===n.state.contact.length&&(t.push("Contact number can't be empty"),e[1]=!0),isNaN(n.state.contact)&&(t.push("Please enter valid mob number"),e[1]=!0),10!=="".concat(parseInt(n.state.contact)).length&&(t.push("Contact Number needs to be of 10 digit"),e[1]=!0),t.length>0&&alert(t.join("\n")),n.setErrorsList(e),n.setState(),0===t.length},n.handleInputChange=function(e){n.setState(Object(m.a)({},e.target.name,e.target.value))},n.genderList=["male","female","others","prefer not to say"],n.updateTableData=function(){var e=Object(i.a)(c.a.mark((function e(t,a,r){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("position in new function is: and element to be added is "+r,a),void 0===r?t.push(a):t.splice(r,0,a),n.setState({tableData:t||[],lastDeletedCustomer:{}});case 3:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}(),n.getCustomerIdAndSaveData=Object(i.a)(c.a.mark((function e(){var t,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.validateData()){e.next=3;break}return n.setState({},(function(){return n.errorBoolsList})),e.abrupt("return",0);case 3:return n.setState({fetchedData:null}),new Map,e.next=7,r=oe.pick(n.state,["name","contact","gender"]),k.post(re,r);case 7:return t=e.sent,console.log("response from server after adding another customer is ,",t),console.log(n.state),a=[].concat(n.state.tableData),e.next=13,n.updateTableData(a,n.createData(t.data._id,n.state.name,n.state.gender,n.state.contact));case 13:n.setState({customerName:"",gender:"Male",mobNo:"",fetchedData:""},(function(){return n.errorBoolsList}));case 14:case"end":return e.stop()}var r}),e)}))),n.fetchFormData=Object(i.a)(c.a.mark((function e(){var t,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.get(re);case 2:t=e.sent,a=t.data,n.setState({tableData:null!==a&&void 0!==a?a:[]});case 5:case"end":return e.stop()}}),e)}))),n}return Object(p.a)(a,[{key:"componentDidMount",value:function(){console.log("mounted"),this.fetchFormData(),console.log("data from local storage")}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(U.a,{className:"paper"},r.a.createElement("form",null,r.a.createElement("div",null,r.a.createElement(L.a,{name:"name",id:"customerName",label:"Customer Name",variant:"outlined",onChange:this.handleInputChange,value:this.state.name,error:this.errorBoolsList[0]})),r.a.createElement("div",null,r.a.createElement(L.a,{name:"contact",id:"mobNo",label:"Contact No.",variant:"outlined",onChange:this.handleInputChange,value:this.state.contact,error:this.errorBoolsList[1]})),r.a.createElement("div",null,r.a.createElement(G.a,{labelId:"demo-simple-select-outlined-label",id:"demo-simple-select-outlined",name:"gender",value:this.state.gender,onChange:this.handleInputChange,color:"secondary"},this.genderList.map((function(e){return r.a.createElement(H.a,{value:e},e)}))))),null===this.state.fetchedData?r.a.createElement("div",null,r.a.createElement(V.a,{color:"secondary"})):r.a.createElement("div",null,r.a.createElement(P.a,{color:"primary",variant:"contained",onClick:function(){return e.getCustomerIdAndSaveData()}},"Save info"),this.state.showUndoIndicator?r.a.createElement("div",null,r.a.createElement(V.a,{color:"secondary"})):"")),0!==this.state.tableData.length?r.a.createElement(te,{className:"simpleTable",tableData:this.state.tableData,deletingCustList:this.state.deletingCustList,deleteCustomerId:function(t,a){return e.deleteCustomerId(t,a)}}):"",r.a.createElement(ae.a,{open:this.state.openSnackBar,autoHideDuration:3e3,onClose:this.closeSnackBar},r.a.createElement(ne.a,{onClose:this.closeSnackBar,severity:"success"},"Customer Deleted!")))}}]),a}(r.a.Component),ce=a(241),ie=a(242);a(176);function ue(){return Object(n.useEffect)((function(){localStorage.removeItem("token"),window.location="/"}),[]),null}var me=function(e){var t=Object(B.g)(),a=Object(n.useState)({}),s=Object(u.a)(a,2),o=(s[0],s[1]);function l(){return(l=Object(i.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("logging out user"),e.next=3,_("http://localhost:5000/logout",{reqType:"log me out"});case 3:"loggedOut"===e.sent.status?t.push("/"):alert("Error logging out, try again");case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){var e=D.getCurrentUser();o(e)}),[]),r.a.createElement("div",{className:"App"},r.a.createElement(ce.a,{position:"static",className:"topAppBar"},r.a.createElement(ie.a,{className:"appBar-toolBar"},r.a.createElement(P.a,{color:"inherit",onClick:function(){return l.apply(this,arguments)}},"Login"))),r.a.createElement("header",{className:"App-header"},r.a.createElement(B.d,null,r.a.createElement(W,{exact:!0,path:"/customers",component:le}),r.a.createElement(B.b,{path:"/",component:J}),r.a.createElement(B.b,{path:"/logout",component:ue}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var de=a(65);C.init(),o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(de.a,null,r.a.createElement(me,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},41:function(e){e.exports=JSON.parse('{"db":"mongodb://127.0.0.1:27017/crm","api_url":"http://localhost:3001/api","apiUrl":"http://localhost:3001/api"}')}},[[135,1,2]]]);
//# sourceMappingURL=main.1680baa2.chunk.js.map
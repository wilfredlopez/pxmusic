(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{112:function(e,t,a){e.exports=a(254)},124:function(e,t,a){},196:function(e,t,a){},254:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"signUp",function(){return H}),a.d(n,"signOut",function(){return L}),a.d(n,"SignIn",function(){return B});var r=a(0),c=a.n(r),l=a(53),o=a.n(l),s=a(7),i=a(6),m=a(25),u=a(108),p=(a(120),a(121),a(122),a(124),a(257)),d=a(77),b={authenticated:"",errorMessage:""},h=Object(i.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTH_USER":return Object(d.a)({},e,{authenticated:t.payload});case"AUTH_ERROR":return Object(d.a)({},e,{errorMessage:t.payload});default:return e}},form:p.a}),f=a(8),g=a(9),v=a(11),E=a(10),y=a(12),N=function(e){function t(){return Object(f.a)(this,t),Object(v.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light text-white mb-3 border-light w-nav"},c.a.createElement(m.b,{className:"navbar-brand mr-0 mr-md-2 text-light border p-2",to:"/","aria-label":"pxmusic"},"PXMusic"),c.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},c.a.createElement("span",{className:"navbar-toggler-icon"})),c.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},c.a.createElement("ul",{className:"navbar-nav"},c.a.createElement("li",{className:"nav-item active"},c.a.createElement(m.b,{className:"nav-link active",to:"/"},"Inicio")),c.a.createElement("li",null,c.a.createElement(m.b,{className:"nav-link active",to:"/generos/reggaeton"},"Reggaeton")),c.a.createElement("li",null,c.a.createElement(m.b,{className:"nav-link active",to:"/generos/variada"},"Musica Variada")),c.a.createElement("li",null,c.a.createElement(m.b,{className:"nav-link active",to:"/noticias"},"Noticias"))),c.a.createElement("div",{className:"float-right"},c.a.createElement(m.b,{to:"/admin",className:"btn btn-light btn-sm"},"Admin")))))}}]),t}(c.a.Component);var O=Object(s.b)(function(e){return{authenticated:e.auth.authenticated}})(N),j=a(32),w=a(111),k=a.n(w),x=a(72),S=a.n(x);window.React=c.a;var C=function(e){function t(){return Object(f.a)(this,t),Object(v.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){var e=this.props.data.map(function(e,t){return c.a.createElement("div",{className:"card mb-4",key:t,id:e._id},c.a.createElement("div",{className:"card-header text-center"},c.a.createElement("img",{src:e.img,className:"img-fluid",alt:e.name})),c.a.createElement("div",{className:"card-body"},c.a.createElement("h5",{className:"card-title  text-center"},c.a.createElement("figure",null,c.a.createElement("figcaption",null,e.name)),c.a.createElement("audio",{controls:!0,preload:"none"},c.a.createElement("source",{src:e.url,type:"audio/mpeg"}),"Your browser does not support the audio element.")),c.a.createElement("div",{className:"row "},c.a.createElement("div",{className:"col"},c.a.createElement("p",{className:"card-text text-left"},c.a.createElement("i",{className:"font-weight-bold"},"Genero:"),c.a.createElement("a",{href:"/music/"+e.category.toLowerCase()}," ",e.category))),c.a.createElement("div",{className:"col"},c.a.createElement("p",{className:"card-text text-right"},c.a.createElement("i",{className:"font-weight-bold"},"Descargas:")," ",e.downloads)))))});return c.a.createElement("div",{id:"project-comments",className:"commentList"},c.a.createElement("ul",null,e))}}]),t}(c.a.Component),U=function(e){function t(e){var a;return Object(f.a)(this,t),(a=Object(v.a)(this,Object(E.a)(t).call(this,e))).handlePageClick=function(e){var t=e.selected;console.log("selected",t);var n=t+1;console.log("offset",n),a.setState({offset:n},function(){a.loadCommentsFromServer()})},a.state={data:[],offset:1},a}return Object(y.a)(t,e),Object(g.a)(t,[{key:"loadCommentsFromServer",value:function(){var e=this;S.a.ajax({url:this.props.url+"?page=".concat(this.state.offset),data:{limit:this.props.perPage,offset:this.state.offset},dataType:"json",type:"GET",success:function(t){e.setState({data:t.docs,pageCount:Math.ceil(t.totalDocs/t.limit)})},error:function(t,a,n){console.error(e.props.url,a,n.toString())}})}},{key:"componentDidMount",value:function(){this.loadCommentsFromServer()}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("div",{className:"commentBox"},c.a.createElement(C,{data:this.state.data}),c.a.createElement(k.a,{previousLabel:"Anterior",nextLabel:"Siguiente",breakLabel:"...",breakClassName:"break-me",pageCount:this.state.pageCount,marginPagesDisplayed:2,pageRangeDisplayed:5,onPageChange:this.handlePageClick,containerClassName:"pagination",subContainerClassName:"pages pagination",activeClassName:"active"})))}}]),t}(c.a.Component),I=(a(196),function(e){function t(){return Object(f.a)(this,t),Object(v.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row text-center"},c.a.createElement("div",{className:"col"},c.a.createElement("h1",{className:"display-4"},"PX Music"),c.a.createElement("p",null,"Tu sitio de descargas y noticias del genero"))),c.a.createElement("div",{className:"alert alert-danger py-2"},c.a.createElement("p",{className:"mt-2 text-center"},"Lo Mas Nuevo!",c.a.createElement("br",null))),c.a.createElement(U,{url:"/api/music/all",perPage:2}))}}]),t}(c.a.Component));var M=Object(s.b)(function(e){return{}})(I),R=a(256),_=a(255),A=a(20),F=a.n(A),P=a(33),T=a(43),D=a.n(T),H=function(e,t){var a=e.email,n=e.password;return function(){var e=Object(P.a)(F.a.mark(function e(r){var c;return F.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D.a.post("http://localhost:3090/signup",{email:a,password:n});case 3:c=e.sent,r({type:"AUTH_USER",payload:c.data.token}),localStorage.setItem("token",c.data.token),t(),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),r({type:"AUTH_ERROR",payload:"Email already registered"});case 12:case"end":return e.stop()}},e,null,[[0,9]])}));return function(t){return e.apply(this,arguments)}}()},L=function(){return localStorage.removeItem("token"),{type:"AUTH_USER",payload:""}},B=function(e,t){var a=e.email,n=e.password;return function(){var e=Object(P.a)(F.a.mark(function e(r){var c;return F.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D.a.post("/users/login",{email:a,password:n});case 3:c=e.sent,console.log(c.data),r({type:"AUTH_USER",payload:c.data[1].token}),localStorage.setItem("token",c.data[1].token),t(),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),r({type:"AUTH_ERROR",payload:"Invalid Credentials"});case 13:case"end":return e.stop()}},e,null,[[0,10]])}));return function(t){return e.apply(this,arguments)}}()},G=function(e){function t(){var e,a;Object(f.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(v.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).onSubmit=function(e){a.props.SignIn(e,function(){a.props.history.push("/admin")})},a}return Object(y.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){var e=this.props.handleSubmit;return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-sm-8 mb-1"},c.a.createElement("h1",{className:"display-4"},"Admin Login"),c.a.createElement("form",{onSubmit:e(this.onSubmit)},c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"InputEmail"},"Email address"),c.a.createElement(R.a,{type:"email",name:"email",component:"input",className:"form-control",id:"InputEmail","aria-describedby":"emailHelp",placeholder:"Enter email",autoComplete:"none"})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"InputPassword"},"Password"),c.a.createElement(R.a,{name:"password",component:"input",type:"password",className:"form-control",id:"InputPassword",placeholder:"Password",autoComplete:"none"})),c.a.createElement("div",{className:"form-group form-check"},c.a.createElement("input",{type:"checkbox",className:"form-check-input",id:"Check"}),c.a.createElement("label",{className:"form-check-label",htmlFor:"Check"},"Remember me")),this.props.errorMessage&&c.a.createElement("div",{className:"alert alert-danger"},this.props.errorMessage),c.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Sign In")))))}}]),t}(c.a.Component);var J=Object(i.d)(Object(s.b)(function(e){return{auth:e.auth,errorMessage:e.auth.errorMessage}},n),Object(_.a)({form:"SignIn"}))(G),X=function(e){function t(){var e,a;Object(f.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(v.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).onSubmit=function(e){a.props.signUp(e,function(){a.props.history.push("/feature")})},a}return Object(y.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){var e=this.props.handleSubmit;return c.a.createElement("div",{className:"container"},c.a.createElement("h1",{className:"display-4"},"Sign Up with us!"),c.a.createElement("form",{onSubmit:e(this.onSubmit)},c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"InputEmail"},"Email address"),c.a.createElement(R.a,{type:"email",name:"email",component:"input",className:"form-control",id:"InputEmail","aria-describedby":"emailHelp",placeholder:"Enter email",autoComplete:"none"}),c.a.createElement("small",{id:"emailHelp",className:"form-text text-muted"},"We'll never share your email with anyone else.")),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"InputPassword"},"Password"),c.a.createElement(R.a,{name:"password",component:"input",type:"password",className:"form-control",id:"InputPassword",placeholder:"Password",autoComplete:"none"})),c.a.createElement("div",{className:"form-group form-check"},c.a.createElement("input",{type:"checkbox",className:"form-check-input",id:"Check"}),c.a.createElement("label",{className:"form-check-label",htmlFor:"Check"},"Remember me")),this.props.errorMessage&&c.a.createElement("div",{className:"alert alert-danger"},this.props.errorMessage),c.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Sign Up")))}}]),t}(c.a.Component);var q=Object(i.d)(Object(s.b)(function(e){return{auth:e.auth,errorMessage:e.auth.errorMessage}},n),Object(_.a)({form:"signup"}))(X),V=function(e){function t(){return Object(f.a)(this,t),Object(v.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(g.a)(t,[{key:"componentDidMount",value:function(){this.props.signOut(),this.props.history.push("/")}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("h1",null,"SignOut Page"),c.a.createElement("p",null,"Only Loggedin users are allowed"))}}]),t}(c.a.Component),W=Object(s.b)(null,n)(V),Y=a(29),z=function(){var e=Object(r.useState)(),t=Object(Y.a)(e,2),a=t[0],n=t[1],l=Object(r.useState)("Imagen"),o=Object(Y.a)(l,2),s=o[0],i=o[1],m=Object(r.useState)(),u=Object(Y.a)(m,2),p=u[0],d=u[1],b=Object(r.useState)(),h=Object(Y.a)(b,2),f=h[0],g=h[1],v=Object(r.useState)(),E=Object(Y.a)(v,2),y=E[0],N=E[1],O=Object(r.useState)(),j=Object(Y.a)(O,2),w=j[0],k=j[1],x=Object(r.useState)(),S=Object(Y.a)(x,2),C=S[0],U=S[1],I=function(){var e=Object(P.a)(F.a.mark(function e(t){var n,r,c;return F.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),(n=new FormData).append("file",a),n.append("title",p),n.append("artist",f),n.append("album",y),n.append("url",w),n.append("category",C),r={headers:{"Content-Type":"multipart/form-data"}},e.prev=9,e.next=12,D.a.post("/api/music/new",n,r);case 12:c=e.sent,console.log(c),M(),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(9),console.log("there was an error",e.t0);case 20:case"end":return e.stop()}},e,null,[[9,17]])}));return function(t){return e.apply(this,arguments)}}(),M=function(){n([]),d(""),g(""),N(""),k(""),U("")},R=function(e){var t=e.target,a=t.name,n=t.value;switch(a){case"title":return d(n);case"artist":return g(n);case"album":return N(n);case"url":return k(n);case"category":return U(n);default:return}};return c.a.createElement(r.Fragment,null,c.a.createElement("form",{onSubmit:I},c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"song_title"},"*Song Title"),c.a.createElement("input",{name:"title",className:"form-control",placeholder:"Song itle",id:"song_title",type:"text",value:p,onChange:R})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"song_artist"},"*Artist"),c.a.createElement("input",{name:"artist",className:"form-control",placeholder:"Artist",id:"song_artist",type:"text",value:f,onChange:R})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"song_album"},"Album"),c.a.createElement("input",{name:"album",className:"form-control",placeholder:"album",id:"song_album",type:"text",value:y,onChange:R})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"song_url"},"*Mp3 Url"),c.a.createElement("input",{name:"url",className:"form-control",placeholder:"mp3 Url",id:"song_url",type:"textarea",value:w,onChange:R})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"song_category"},"*Category"),c.a.createElement("input",{name:"category",className:"form-control",placeholder:"Category",id:"song_category",type:"textarea",value:C,onChange:R})),c.a.createElement("div",{className:"custom-file"},c.a.createElement("input",{type:"file",className:"custom-file-input",id:"img",name:"file",onChange:function(e){n(e.target.files[0]),i(e.target.files[0].name)}}),c.a.createElement("label",{className:"custom-file-label",htmlFor:"file"},s)),c.a.createElement("div",{className:"row my-2 text-right "},c.a.createElement("div",{className:"col-12 d-flex"},c.a.createElement("small",null,"*required fields")),c.a.createElement("div",{className:"col-12"},c.a.createElement("button",{type:"submit",className:"btn btn-success text-right mb-3"},c.a.createElement("i",{className:""},"Upload"))))))},K=function(e){function t(){var e,a;Object(f.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(v.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).state={showUpload:!0},a}return Object(y.a)(t,e),Object(g.a)(t,[{key:"uploadSong",value:function(){var e=Object(P.a)(F.a.mark(function e(t){return F.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault();try{"",console.log(""),this.props.destroy()}catch(a){console.log("there was an error")}case 2:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row border justify-content-center d-flex align-content-center"},c.a.createElement("div",{className:"col-sm-6 text-center"},c.a.createElement("h1",{className:"display-4 mx-auto"},"Admin ")),c.a.createElement("div",{className:"col-sm-6 my-auto"},c.a.createElement("p",{className:"text-right my-auto text-center"},c.a.createElement("a",{className:"btn btn-dark",href:"/signout"},"Signout")))),c.a.createElement("div",{className:"row mt-3"},c.a.createElement("div",{className:"col-sm-6"},c.a.createElement("h2",{className:"text-center"},"Top Downloads")),c.a.createElement("div",{className:"col-sm-6 text-center"},this.state.showUpload?c.a.createElement("button",{onClick:function(){e.setState({showUpload:!e.state.showUpload})},className:"btn btn-primary text-center"},"Hide"):c.a.createElement("button",{onClick:function(){e.setState({showUpload:!e.state.showUpload})},className:"btn btn-primary text-center"},"Upload New"))),this.state.showUpload&&c.a.createElement(z,{onUploadSubmit:function(t){e.uploadSong(t)}}))}}]),t}(c.a.Component);var Q=Object(s.b)(function(e){return{auth:e.auth.authenticated}})(function(e){var t=function(t){function a(){return Object(f.a)(this,a),Object(v.a)(this,Object(E.a)(a).apply(this,arguments))}return Object(y.a)(a,t),Object(g.a)(a,[{key:"componentDidMount",value:function(){this.isLoggedIn()}},{key:"componentDidUpdate",value:function(){this.isLoggedIn()}},{key:"isLoggedIn",value:function(){this.props.auth||this.props.history.push("/login")}},{key:"render",value:function(){return c.a.createElement(e,this.props)}}]),a}(c.a.Component);return Object(s.b)(function(e){return{auth:e.auth.authenticated}})(t)}(K)),Z=function(){return c.a.createElement("div",null,c.a.createElement(O,null),c.a.createElement(j.a,{exact:!0,path:"/",component:M}),c.a.createElement(j.a,{path:"/admin",component:Q}),c.a.createElement(j.a,{path:"/login",component:J}),c.a.createElement(j.a,{path:"/signup",component:q}),c.a.createElement(j.a,{path:"/signout",component:W}))},$=Object(i.e)(h,{auth:{authenticated:localStorage.getItem("token")}},Object(i.a)(u.a));o.a.render(c.a.createElement(s.a,{store:$},c.a.createElement(m.a,{basename:"/home"},c.a.createElement(Z,null))),document.getElementById("root"))}},[[112,1,2]]]);
//# sourceMappingURL=main.8275394a.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{112:function(e,a,t){e.exports=t(255)},124:function(e,a,t){},253:function(e,a,t){},254:function(e,a,t){e.exports=t.p+"static/media/glow.b984a025.gif"},255:function(e,a,t){"use strict";t.r(a);var n={};t.r(n),t.d(n,"signUp",function(){return L}),t.d(n,"signOut",function(){return H}),t.d(n,"SignIn",function(){return X});var r=t(0),c=t.n(r),l=t(54),o=t.n(l),s=t(12),i=t(6),m=t(27),u=t(108),p=(t(120),t(121),t(122),t(124),t(258)),d=t(77),b={authenticated:"",errorMessage:""},h=Object(i.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"AUTH_USER":return Object(d.a)({},e,{authenticated:a.payload});case"AUTH_ERROR":return Object(d.a)({},e,{errorMessage:a.payload});default:return e}},form:p.a}),g=t(7),f=t(8),E=t(10),v=t(9),N=t(11),y=t(19),j=t.n(y),O=function(e){function a(){return Object(g.a)(this,a),Object(E.a)(this,Object(v.a)(a).apply(this,arguments))}return Object(N.a)(a,e),Object(f.a)(a,[{key:"handleClick",value:function(){j()(".navbar-toggler").trigger("click")}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light text-white mb-3 border-light w-nav"},c.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},c.a.createElement("span",{className:"navbar-toggler-icon"})),c.a.createElement(m.b,{className:"navbar-brand mr-0 mr-md-2 text-light  p-0",to:"/","aria-label":"pxmusic"},c.a.createElement("img",{src:"/img/PXMUSICLOGO_Transparent.png",alt:"PX Music",role:"presentation",width:"120px",height:"55",className:"p-0 m-0",id:"pxmusiclogo"})),c.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},c.a.createElement("ul",{className:"navbar-nav"},c.a.createElement("li",{className:"nav-item"},c.a.createElement(m.b,{className:"nav-link active",to:"/",onClick:this.handleClick},"Inicio")),c.a.createElement("li",null,c.a.createElement(m.b,{className:"nav-link",to:"/generos/reggaeton",onClick:this.handleClick},"Reggaeton")),c.a.createElement("li",null,c.a.createElement(m.b,{className:"nav-link",to:"/generos/variada",onClick:this.handleClick},"Musica Variada")),c.a.createElement("li",null,c.a.createElement(m.b,{className:"nav-link",to:"/contacto",onClick:this.handleClick},"Contacto"))))))}}]),a}(c.a.Component);var w=Object(s.b)(function(e){return{authenticated:e.auth.authenticated}})(O),k=t(33),x=t(111),C=t.n(x);window.React=c.a;var S=function(e){function a(e){var t;return Object(g.a)(this,a),(t=Object(E.a)(this,Object(v.a)(a).call(this,e))).handlePageClick=function(e){var a=e.selected+1;j()(document).scrollTop(0),t.setState({offset:a},function(){t.loadCommentsFromServer()})},t.state={data:[],offset:1},t}return Object(N.a)(a,e),Object(f.a)(a,[{key:"loadCommentsFromServer",value:function(){var e=this;j.a.ajax({url:this.props.url+"?page=".concat(this.state.offset),data:{limit:this.props.perPage,offset:this.state.offset},dataType:"json",type:"GET",success:function(a){e.setState({data:a.docs,pageCount:Math.ceil(a.totalDocs/a.limit)})},error:function(a,t,n){console.error(e.props.url,t,n.toString())}})}},{key:"componentDidMount",value:function(){this.loadCommentsFromServer()}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("div",{className:"commentBox"},c.a.createElement(U,{data:this.state.data}),c.a.createElement(C.a,{previousLabel:"Anterior",nextLabel:"Siguiente",breakLabel:"...",breakClassName:"break-me",pageCount:this.state.pageCount,marginPagesDisplayed:2,pageRangeDisplayed:5,onPageChange:this.handlePageClick,containerClassName:"pagination border",subContainerClassName:"pages pagination",activeClassName:"active"})))}}]),a}(c.a.Component),U=function(e){function a(){return Object(g.a)(this,a),Object(E.a)(this,Object(v.a)(a).apply(this,arguments))}return Object(N.a)(a,e),Object(f.a)(a,[{key:"handleAudio",value:function(){document.addEventListener("play",function(e){for(var a=document.getElementsByTagName("audio"),t=0,n=a.length;t<n;t++)a[t]!==e.target&&a[t].pause()},!0)}},{key:"handleDownload",value:function(e){var a=e.target.id;j.a.ajax({url:"/api/song/download/".concat(a),data:{downloads:1},dataType:"json",type:"PATCH",success:function(e){console.log("clicked or downloaded")},error:function(e,a,t){console.error("error adding download",a,t.toString())}})}},{key:"render",value:function(){var e=this,a=this.props.data.map(function(a,t){return c.a.createElement("div",{className:"card mb-4",key:t,id:a._id},c.a.createElement("div",{className:"card-header text-center"},c.a.createElement("img",{src:a.img,className:"img-fluid",alt:a.name})),c.a.createElement("div",{className:"card-body"},c.a.createElement("h5",{className:"card-title  text-center"},c.a.createElement("figure",null,c.a.createElement("figcaption",null,a.name)),c.a.createElement("audio",{controls:!0,preload:"none",onPlay:e.handleAudio,id:a._id,onPlaying:e.handleDownload},c.a.createElement("source",{src:a.url,type:"audio/mpeg"}),"Your browser does not support the audio element.")),c.a.createElement("div",{className:"row "},c.a.createElement("div",{className:"col"},c.a.createElement("p",{className:"card-text text-left"},c.a.createElement("i",{className:"font-weight-bold"},"Genero:"),c.a.createElement("a",{href:"/generos/"+a.category.toLowerCase()}," ",a.category))),c.a.createElement("div",{className:"col"},c.a.createElement("p",{className:"card-text text-right"},c.a.createElement("i",{className:"font-weight-bold"},c.a.createElement("a",{href:a.url,download:!0,target:"_blank",rel:"noopener noreferrer",onClick:e.handleDownload,id:a._id},"Descargas:"))," ",a.downloads)))))});return c.a.createElement("div",{id:"project-comments",className:"commentList"},c.a.createElement("ul",null,a))}}]),a}(c.a.Component),P=function(e){function a(){return Object(g.a)(this,a),Object(E.a)(this,Object(v.a)(a).apply(this,arguments))}return Object(N.a)(a,e),Object(f.a)(a,[{key:"handleDownload",value:function(e){var a=e.target.id;j.a.ajax({url:"/api/song/download/".concat(a),data:{downloads:1},dataType:"json",type:"PATCH",success:function(e){console.log("clicked or downloaded")},error:function(e,a,t){console.error("error adding download",a,t.toString())}})}},{key:"render",value:function(){return c.a.createElement("div",{className:"container px-0"},c.a.createElement("div",{className:"row text-center px-0 mx-0"},c.a.createElement("div",{className:"col-12 px-0"},c.a.createElement("h1",{className:"display-4"},"PX Music"),c.a.createElement("p",{className:"p-0 m-0"},"Tu sitio de descargas y noticias del genero"),c.a.createElement("div",{className:"col-12 px-0"},c.a.createElement("div",{className:"alert alert-danger py-2 px-0"},c.a.createElement("p",{className:"mt-2 p-0 text-center"},"Lo Mas Nuevo!",c.a.createElement("br",null)))))),c.a.createElement(S,{url:"/api/music/all",perPage:4}))}}]),a}(c.a.Component);var A=Object(s.b)(function(e){return{}})(P),I=t(257),M=t(256),T=t(22),_=t.n(T),R=t(34),F=t(44),D=t.n(F),L=function(e,a){var t=e.email,n=e.password,r=e.firstname,c=e.lastname,l=e.admin;return function(){var e=Object(R.a)(_.a.mark(function e(o){var s;return _.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D.a.post("/users/create",{email:t,password:n,firstname:r,lastname:c,admin:l});case 3:s=e.sent,o({type:"AUTH_USER",payload:s.data[1].token}),localStorage.setItem("token",s.data[1].token),a(),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),o({type:"AUTH_ERROR",payload:"Email already registered"});case 12:case"end":return e.stop()}},e,null,[[0,9]])}));return function(a){return e.apply(this,arguments)}}()},H=function(){return localStorage.removeItem("token"),{type:"AUTH_USER",payload:""}},X=function(e,a){var t=e.email,n=e.password;return function(){var e=Object(R.a)(_.a.mark(function e(r){var c;return _.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D.a.post("/users/login",{email:t,password:n});case 3:c=e.sent,console.log(c.data),r({type:"AUTH_USER",payload:c.data[1].token}),localStorage.setItem("token",c.data[1].token),a(),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),r({type:"AUTH_ERROR",payload:"Invalid Credentials"});case 13:case"end":return e.stop()}},e,null,[[0,10]])}));return function(a){return e.apply(this,arguments)}}()},G=function(e){function a(){var e,t;Object(g.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(E.a)(this,(e=Object(v.a)(a)).call.apply(e,[this].concat(r)))).onSubmit=function(e){t.props.SignIn(e,function(){t.props.history.push("/admin")})},t}return Object(N.a)(a,e),Object(f.a)(a,[{key:"render",value:function(){var e=this.props.handleSubmit;return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-sm-8 mb-1"},c.a.createElement("h1",{className:"display-4"},"Admin Login"),c.a.createElement("form",{onSubmit:e(this.onSubmit)},c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"InputEmail"},"Email address"),c.a.createElement(I.a,{type:"email",name:"email",component:"input",className:"form-control",id:"InputEmail","aria-describedby":"emailHelp",placeholder:"Enter email",autoComplete:"none"})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"InputPassword"},"Password"),c.a.createElement(I.a,{name:"password",component:"input",type:"password",className:"form-control",id:"InputPassword",placeholder:"Password",autoComplete:"none"})),c.a.createElement("div",{className:"form-group form-check"},c.a.createElement("input",{type:"checkbox",className:"form-check-input",id:"Check"}),c.a.createElement("label",{className:"form-check-label",htmlFor:"Check"},"Remember me")),this.props.errorMessage&&c.a.createElement("div",{className:"alert alert-danger"},this.props.errorMessage),c.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Sign In")))))}}]),a}(c.a.Component);var q=Object(i.d)(Object(s.b)(function(e){return{auth:e.auth,errorMessage:e.auth.errorMessage}},n),Object(M.a)({form:"SignIn"}))(G),B=function(e){function a(){var e,t;Object(g.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(E.a)(this,(e=Object(v.a)(a)).call.apply(e,[this].concat(r)))).onSubmit=function(e){t.props.signUp(e,function(){t.props.history.push("/feature")})},t}return Object(N.a)(a,e),Object(f.a)(a,[{key:"render",value:function(){var e=this.props.handleSubmit;return c.a.createElement("div",{className:"container"},c.a.createElement("h1",{className:"display-4"},"Sign Up with us!"),c.a.createElement("form",{onSubmit:e(this.onSubmit)},c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"InputEmail"},"Email address"),c.a.createElement(I.a,{type:"email",name:"email",component:"input",className:"form-control",id:"InputEmail","aria-describedby":"emailHelp",placeholder:"Enter email",autoComplete:"none"}),c.a.createElement("small",{id:"emailHelp",className:"form-text text-muted"},"We'll never share your email with anyone else.")),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"InputPassword"},"Password"),c.a.createElement(I.a,{name:"password",component:"input",type:"password",className:"form-control",id:"InputPassword",placeholder:"Password",autoComplete:"none"})),c.a.createElement("div",{className:"form-group form-check"},c.a.createElement("input",{type:"checkbox",className:"form-check-input",id:"Check"}),c.a.createElement("label",{className:"form-check-label",htmlFor:"Check"},"Remember me")),this.props.errorMessage&&c.a.createElement("div",{className:"alert alert-danger"},this.props.errorMessage),c.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Sign Up")))}}]),a}(c.a.Component);var J=Object(i.d)(Object(s.b)(function(e){return{auth:e.auth,errorMessage:e.auth.errorMessage}},n),Object(M.a)({form:"signup"}))(B),V=function(e){function a(){return Object(g.a)(this,a),Object(E.a)(this,Object(v.a)(a).apply(this,arguments))}return Object(N.a)(a,e),Object(f.a)(a,[{key:"componentDidMount",value:function(){this.props.signOut(),this.props.history.push("/")}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("h1",null,"SignOut Page"),c.a.createElement("p",null,"Only Loggedin users are allowed"))}}]),a}(c.a.Component),W=Object(s.b)(null,n)(V),z=function(e){function a(){return Object(g.a)(this,a),Object(E.a)(this,Object(v.a)(a).apply(this,arguments))}return Object(N.a)(a,e),Object(f.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"container px-0"},c.a.createElement("div",{className:"row text-center px-0 mx-0"},c.a.createElement("div",{className:"col-12 px-0"},c.a.createElement("h1",{className:"display-4"},"PX Music"),c.a.createElement("p",{className:"p-0 m-0"},"Reggaeton"))),c.a.createElement(S,{url:"/api/music/reggaeton",perPage:4}))}}]),a}(c.a.Component),Y=function(e){function a(){return Object(g.a)(this,a),Object(E.a)(this,Object(v.a)(a).apply(this,arguments))}return Object(N.a)(a,e),Object(f.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"container px-0"},c.a.createElement("div",{className:"row text-center px-0 mx-0"},c.a.createElement("div",{className:"col-12 px-0"},c.a.createElement("h1",{className:"display-4"},"PX Music"),c.a.createElement("p",{className:"p-0 m-0"},"Musica Variada"))),c.a.createElement(S,{url:"/api/music/Variada",perPage:4}))}}]),a}(c.a.Component),K=function(e){function a(){return Object(g.a)(this,a),Object(E.a)(this,Object(v.a)(a).apply(this,arguments))}return Object(N.a)(a,e),Object(f.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row text-center"},c.a.createElement("div",{className:"col"},c.a.createElement("h1",{className:"display-4"},"PX Music"))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col"},c.a.createElement("p",{className:"lead"},"Contacto:"),c.a.createElement("p",null,"Wilfred Lopez"),c.a.createElement("p",null,"Email: ",c.a.createElement("a",{href:"mailto:listenUpMusic@gmail.com"},"listenUpMusic@gmail.com")),c.a.createElement("p",null,"Garfield, NJ USA"),c.a.createElement("small",null,"Copyright @2019"))))}}]),a}(c.a.Component);t(253);j()(document).ready(function(){});var Q=t(15),Z=function(){var e=Object(r.useState)(),a=Object(Q.a)(e,2),n=a[0],l=a[1],o=Object(r.useState)("Elige Imagen"),s=Object(Q.a)(o,2),i=s[0],m=s[1],u=Object(r.useState)(),p=Object(Q.a)(u,2),d=p[0],b=p[1],h=Object(r.useState)(),g=Object(Q.a)(h,2),f=g[0],E=g[1],v=Object(r.useState)(),N=Object(Q.a)(v,2),y=N[0],j=N[1],O=Object(r.useState)(),w=Object(Q.a)(O,2),k=w[0],x=w[1],C=Object(r.useState)("Elige Audio"),S=Object(Q.a)(C,2),U=S[0],P=S[1],A=Object(r.useState)(),I=Object(Q.a)(A,2),M=I[0],T=I[1],F=Object(r.useState)(!1),L=Object(Q.a)(F,2),H=L[0],X=L[1],G=Object(r.useState)(""),q=Object(Q.a)(G,2),B=q[0],J=q[1],V=Object(r.useState)(),W=Object(Q.a)(V,2),z=W[0],Y=W[1],K=Object(r.useState)(),Z=Object(Q.a)(K,2),$=Z[0],ee=Z[1],ae=Object(r.useState)(),te=Object(Q.a)(ae,2),ne=te[0],re=te[1],ce=Object(r.useState)(),le=Object(Q.a)(ce,2),oe=le[0],se=le[1],ie=Object(r.useState)(),me=Object(Q.a)(ie,2),ue=me[0],pe=me[1],de=function(){var e=Object(R.a)(_.a.mark(function e(a){var t,r,c;return _.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),d){e.next=3;break}return e.abrupt("return",Y("A Song title must be provided"));case 3:if(f){e.next=5;break}return e.abrupt("return",ee("Artist Name must be provided"));case 5:if(M){e.next=7;break}return e.abrupt("return",re("Song Category or Genre is required"));case 7:if(n){e.next=10;break}return console.log("theres no file"),e.abrupt("return",pe("Choose an image. this is required."));case 10:if(k){e.next=12;break}return e.abrupt("return",se("Choose an audio file. This is required. "));case 12:return(t=new FormData).append("file",n),t.append("title",d),t.append("artist",f),t.append("album",y),t.append("url",k),t.append("category",M),r={headers:{"Content-Type":"multipart/form-data"}},e.prev=20,X(!0),e.next=25,D.a.post("/api/music/new",t,r);case 25:c=e.sent,console.log(c),be(),e.next=35;break;case 30:e.prev=30,e.t0=e.catch(20),console.log("there was an error",e.t0),J(e.t0),X(!1);case 35:X(!1);case 36:case"end":return e.stop()}},e,null,[[20,30]])}));return function(a){return e.apply(this,arguments)}}(),be=function(){l([]),m("Elige Image"),x([]),P("Elige Audio"),b(""),E(""),j(""),T("")},he=function(e){var a=e.target,t=a.name,n=a.value;switch(t){case"title":return""===n&&Y({message:"Please enter a song title"}),b(n);case"artist":return""===n&&ee("Please enter a Artist name"),E(n);case"album":return j(n);case"category":return""===n&&re("Please specify  a category"),T(n);default:return}},ge=function(e){return c.a.createElement(r.Fragment,null,e&&c.a.createElement("small",{className:"alert alert-danger d-flex mt-2"},e))};return c.a.createElement(r.Fragment,null,H&&c.a.createElement("img",{src:t(254),className:"loader",alt:"loading..."}),c.a.createElement("form",{onSubmit:de},c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"song_title"},"*Song Title"),c.a.createElement("input",{name:"title",className:"form-control",id:"song_title",type:"text",value:d,onChange:he}),ge(z)),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"song_artist"},"*Artist"),c.a.createElement("input",{name:"artist",className:"form-control",id:"song_artist",type:"text",value:f,onChange:he}),ge($)),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"song_album"},"Album"),c.a.createElement("input",{name:"album",className:"form-control",id:"song_album",type:"text",value:y,onChange:he})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"song_category"},"*Category"),c.a.createElement("input",{name:"category",className:"form-control",id:"song_category",type:"textarea",value:M,onChange:he}),ge(ne)),c.a.createElement("div",{className:"custom-file form-group"},c.a.createElement("input",{type:"file",className:"custom-file-input form-control",id:"img",name:"file",onChange:function(e){l(e.target.files[0]),m(e.target.files[0].name)}}),c.a.createElement("label",{className:"custom-file-label",htmlFor:"file"},"*",i),ge(ue)),c.a.createElement("div",{className:"custom-file form-group mt-3"},c.a.createElement("input",{type:"file",className:"custom-file-input form-control",id:"url",name:"file",onChange:function(e){x(e.target.files[0]),P(e.target.files[0].name)}}),c.a.createElement("label",{className:"custom-file-label",htmlFor:"file"},"*",U),ge(oe)),c.a.createElement("div",{className:"row my-2 text-right "},c.a.createElement("div",{className:"col-12 d-flex"},c.a.createElement("small",null,"*required fields")),c.a.createElement("div",{className:"col-12 mt-2"},c.a.createElement("i",{className:"btn btn-info text-right mb-3 float-left",onClick:be,role:"button"},c.a.createElement("span",{className:""}," Clear ",c.a.createElement("i",{className:"far fa-trash-alt"}," "))),c.a.createElement("button",{type:"submit",className:"btn btn-success text-right mb-3"},c.a.createElement("i",{className:""},"Upload "),c.a.createElement("i",{className:"fas fa-upload"})))),B&&c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col text-center"},c.a.createElement("i",{className:"alert alert-danger "},B.message)))),c.a.createElement("div",{className:"float-right"}))},$=function(e){function a(){var e,t;Object(g.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(E.a)(this,(e=Object(v.a)(a)).call.apply(e,[this].concat(r)))).state={showUpload:!0},t}return Object(N.a)(a,e),Object(f.a)(a,[{key:"uploadSong",value:function(){var e=Object(R.a)(_.a.mark(function e(a){return _.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a.preventDefault();try{console.log("destroy")}catch(t){console.log("there was an error")}case 2:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row border justify-content-center d-flex align-content-center"},c.a.createElement("div",{className:"col-12 d-flex"},c.a.createElement("h1",{className:"display-4 p-auto m-auto text-center"},"Admin "),c.a.createElement("p",{className:"float-right"},c.a.createElement("a",{id:"db-logout",className:"btn btn-light btn-sm float-right",href:"/signout"},"Signout")))),c.a.createElement("div",{className:"row mt-3"},c.a.createElement("div",{className:"col-12"},c.a.createElement("h2",{className:"text-center"},"Actions"))),c.a.createElement("div",{className:"row mt-2 p-2 border bg-secondary align-content-center justify-content-center d-flex"},c.a.createElement("div",{className:"col text-center"},this.state.showUpload?c.a.createElement("button",{onClick:function(){e.setState({showUpload:!e.state.showUpload})},className:"btn btn-danger text-center btn-sm"},"Hide upload"):c.a.createElement("button",{onClick:function(){e.setState({showUpload:!e.state.showUpload})},className:"btn btn-primary text-center btn-sm"},"Upload New")),c.a.createElement("div",{className:"col text-center"},c.a.createElement("button",{className:"btn btn-primary btn-sm"},"Create User"))),this.state.showUpload&&c.a.createElement(Z,{onUploadSubmit:function(a){e.uploadSong(a)}}))}}]),a}(c.a.Component);var ee=Object(s.b)(function(e){return{auth:e.auth.authenticated}})(function(e){var a=function(a){function t(){return Object(g.a)(this,t),Object(E.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(N.a)(t,a),Object(f.a)(t,[{key:"componentDidMount",value:function(){this.isLoggedIn()}},{key:"componentDidUpdate",value:function(){this.isLoggedIn()}},{key:"isLoggedIn",value:function(){this.props.auth||this.props.history.push("/login")}},{key:"render",value:function(){return c.a.createElement(e,this.props)}}]),t}(c.a.Component);return Object(s.b)(function(e){return{auth:e.auth.authenticated}})(a)}($)),ae=function(){return c.a.createElement("div",{className:"body-wrapper"},c.a.createElement(w,null),c.a.createElement(k.a,{exact:!0,path:"/",component:A}),c.a.createElement(k.a,{path:"/admin",component:ee}),c.a.createElement(k.a,{path:"/login",component:q}),c.a.createElement(k.a,{path:"/signup",component:J}),c.a.createElement(k.a,{path:"/signout",component:W}),c.a.createElement(k.a,{path:"/generos/reggaeton",component:z}),c.a.createElement(k.a,{path:"/generos/variada",component:Y}),c.a.createElement(k.a,{path:"/contacto",component:K}))},te=Object(i.e)(h,{auth:{authenticated:localStorage.getItem("token")}},Object(i.a)(u.a));o.a.render(c.a.createElement(s.a,{store:te},c.a.createElement(m.a,{basename:"/home"},c.a.createElement(ae,null))),document.getElementById("root"))}},[[112,1,2]]]);
//# sourceMappingURL=main.343a3542.chunk.js.map
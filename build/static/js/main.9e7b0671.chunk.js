(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{112:function(e,a,t){e.exports=t(255)},124:function(e,a,t){},253:function(e,a,t){},254:function(e,a,t){e.exports=t.p+"static/media/glow.b984a025.gif"},255:function(e,a,t){"use strict";t.r(a);var n={};t.r(n),t.d(n,"signUp",function(){return D}),t.d(n,"signOut",function(){return H}),t.d(n,"SignIn",function(){return X});var r=t(0),c=t.n(r),l=t(54),s=t.n(l),o=t(12),i=t(6),m=t(26),u=t(108),p=(t(120),t(121),t(122),t(124),t(258)),d=t(77),b={authenticated:"",errorMessage:""},h=Object(i.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"AUTH_USER":return Object(d.a)({},e,{authenticated:a.payload});case"AUTH_ERROR":return Object(d.a)({},e,{errorMessage:a.payload});default:return e}},form:p.a}),f=t(7),g=t(8),E=t(10),v=t(9),N=t(11),y=t(28),O=t.n(y),j=function(e){function a(){return Object(f.a)(this,a),Object(E.a)(this,Object(v.a)(a).apply(this,arguments))}return Object(N.a)(a,e),Object(g.a)(a,[{key:"handleClick",value:function(){O()(".navbar-toggler").trigger("click")}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light text-white mb-3 border-light w-nav"},c.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},c.a.createElement("span",{className:"navbar-toggler-icon"})),c.a.createElement(m.b,{className:"navbar-brand mr-0 mr-md-2 text-light border p-2",to:"/","aria-label":"pxmusic"},"PXMusic"),c.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},c.a.createElement("ul",{className:"navbar-nav"},c.a.createElement("li",{className:"nav-item"},c.a.createElement(m.b,{className:"nav-link active",to:"/",onClick:this.handleClick},"Inicio")),c.a.createElement("li",null,c.a.createElement(m.b,{className:"nav-link",to:"/generos/reggaeton",onClick:this.handleClick},"Reggaeton")),c.a.createElement("li",null,c.a.createElement(m.b,{className:"nav-link",to:"/generos/variada",onClick:this.handleClick},"Musica Variada")),c.a.createElement("li",null,c.a.createElement(m.b,{className:"nav-link",to:"/contacto",onClick:this.handleClick},"Contacto"))))))}}]),a}(c.a.Component);var k=Object(o.b)(function(e){return{authenticated:e.auth.authenticated}})(j),x=t(33),w=t(111),C=t.n(w);window.React=c.a;var S=function(e){function a(e){var t;return Object(f.a)(this,a),(t=Object(E.a)(this,Object(v.a)(a).call(this,e))).handlePageClick=function(e){var a=e.selected+1;O()(document).scrollTop(0),t.setState({offset:a},function(){t.loadCommentsFromServer()})},t.state={data:[],offset:1},t}return Object(N.a)(a,e),Object(g.a)(a,[{key:"loadCommentsFromServer",value:function(){var e=this;O.a.ajax({url:this.props.url+"?page=".concat(this.state.offset),data:{limit:this.props.perPage,offset:this.state.offset},dataType:"json",type:"GET",success:function(a){e.setState({data:a.docs,pageCount:Math.ceil(a.totalDocs/a.limit)})},error:function(a,t,n){console.error(e.props.url,t,n.toString())}})}},{key:"componentDidMount",value:function(){this.loadCommentsFromServer()}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("div",{className:"commentBox"},c.a.createElement(U,{data:this.state.data}),c.a.createElement(C.a,{previousLabel:"Anterior",nextLabel:"Siguiente",breakLabel:"...",breakClassName:"break-me",pageCount:this.state.pageCount,marginPagesDisplayed:2,pageRangeDisplayed:5,onPageChange:this.handlePageClick,containerClassName:"pagination border",subContainerClassName:"pages pagination",activeClassName:"active"})))}}]),a}(c.a.Component),U=function(e){function a(){return Object(f.a)(this,a),Object(E.a)(this,Object(v.a)(a).apply(this,arguments))}return Object(N.a)(a,e),Object(g.a)(a,[{key:"render",value:function(){var e=this.props.data.map(function(e,a){return c.a.createElement("div",{className:"card mb-4",key:a,id:e._id},c.a.createElement("div",{className:"card-header text-center"},c.a.createElement("img",{src:e.img,className:"img-fluid",alt:e.name})),c.a.createElement("div",{className:"card-body"},c.a.createElement("h5",{className:"card-title  text-center"},c.a.createElement("figure",null,c.a.createElement("figcaption",null,e.name)),c.a.createElement("audio",{controls:!0,preload:"none"},c.a.createElement("source",{src:e.url,type:"audio/mpeg"}),"Your browser does not support the audio element.")),c.a.createElement("div",{className:"row "},c.a.createElement("div",{className:"col"},c.a.createElement("p",{className:"card-text text-left"},c.a.createElement("i",{className:"font-weight-bold"},"Genero:"),c.a.createElement("a",{href:"/generos/"+e.category.toLowerCase()}," ",e.category))),c.a.createElement("div",{className:"col"},c.a.createElement("p",{className:"card-text text-right"},c.a.createElement("i",{className:"font-weight-bold"},"Descargas:")," ",e.downloads)))))});return c.a.createElement("div",{id:"project-comments",className:"commentList"},c.a.createElement("ul",null,e))}}]),a}(c.a.Component),P=function(e){function a(){return Object(f.a)(this,a),Object(E.a)(this,Object(v.a)(a).apply(this,arguments))}return Object(N.a)(a,e),Object(g.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"container px-0"},c.a.createElement("div",{className:"row text-center px-0 mx-0"},c.a.createElement("div",{className:"col-12 px-0"},c.a.createElement("h1",{className:"display-4"},"PX Music"),c.a.createElement("p",{className:"p-0 m-0"},"Tu sitio de descargas y noticias del genero"),c.a.createElement("div",{className:"col-12 px-0"},c.a.createElement("div",{className:"alert alert-danger py-2 px-0"},c.a.createElement("p",{className:"mt-2 p-0 text-center"},"Lo Mas Nuevo!",c.a.createElement("br",null)))))),c.a.createElement(S,{url:"/api/music/all",perPage:4}))}}]),a}(c.a.Component);var I=Object(o.b)(function(e){return{}})(P),M=t(257),A=t(256),R=t(21),F=t.n(R),_=t(34),T=t(44),L=t.n(T),D=function(e,a){var t=e.email,n=e.password,r=e.firstname,c=e.lastname,l=e.admin;return function(){var e=Object(_.a)(F.a.mark(function e(s){var o;return F.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,L.a.post("/users/create",{email:t,password:n,firstname:r,lastname:c,admin:l});case 3:o=e.sent,s({type:"AUTH_USER",payload:o.data[1].token}),localStorage.setItem("token",o.data[1].token),a(),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),s({type:"AUTH_ERROR",payload:"Email already registered"});case 12:case"end":return e.stop()}},e,null,[[0,9]])}));return function(a){return e.apply(this,arguments)}}()},H=function(){return localStorage.removeItem("token"),{type:"AUTH_USER",payload:""}},X=function(e,a){var t=e.email,n=e.password;return function(){var e=Object(_.a)(F.a.mark(function e(r){var c;return F.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,L.a.post("/users/login",{email:t,password:n});case 3:c=e.sent,console.log(c.data),r({type:"AUTH_USER",payload:c.data[1].token}),localStorage.setItem("token",c.data[1].token),a(),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),r({type:"AUTH_ERROR",payload:"Invalid Credentials"});case 13:case"end":return e.stop()}},e,null,[[0,10]])}));return function(a){return e.apply(this,arguments)}}()},q=function(e){function a(){var e,t;Object(f.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(E.a)(this,(e=Object(v.a)(a)).call.apply(e,[this].concat(r)))).onSubmit=function(e){t.props.SignIn(e,function(){t.props.history.push("/admin")})},t}return Object(N.a)(a,e),Object(g.a)(a,[{key:"render",value:function(){var e=this.props.handleSubmit;return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-sm-8 mb-1"},c.a.createElement("h1",{className:"display-4"},"Admin Login"),c.a.createElement("form",{onSubmit:e(this.onSubmit)},c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"InputEmail"},"Email address"),c.a.createElement(M.a,{type:"email",name:"email",component:"input",className:"form-control",id:"InputEmail","aria-describedby":"emailHelp",placeholder:"Enter email",autoComplete:"none"})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"InputPassword"},"Password"),c.a.createElement(M.a,{name:"password",component:"input",type:"password",className:"form-control",id:"InputPassword",placeholder:"Password",autoComplete:"none"})),c.a.createElement("div",{className:"form-group form-check"},c.a.createElement("input",{type:"checkbox",className:"form-check-input",id:"Check"}),c.a.createElement("label",{className:"form-check-label",htmlFor:"Check"},"Remember me")),this.props.errorMessage&&c.a.createElement("div",{className:"alert alert-danger"},this.props.errorMessage),c.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Sign In")))))}}]),a}(c.a.Component);var G=Object(i.d)(Object(o.b)(function(e){return{auth:e.auth,errorMessage:e.auth.errorMessage}},n),Object(A.a)({form:"SignIn"}))(q),J=function(e){function a(){var e,t;Object(f.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(E.a)(this,(e=Object(v.a)(a)).call.apply(e,[this].concat(r)))).onSubmit=function(e){t.props.signUp(e,function(){t.props.history.push("/feature")})},t}return Object(N.a)(a,e),Object(g.a)(a,[{key:"render",value:function(){var e=this.props.handleSubmit;return c.a.createElement("div",{className:"container"},c.a.createElement("h1",{className:"display-4"},"Sign Up with us!"),c.a.createElement("form",{onSubmit:e(this.onSubmit)},c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"InputEmail"},"Email address"),c.a.createElement(M.a,{type:"email",name:"email",component:"input",className:"form-control",id:"InputEmail","aria-describedby":"emailHelp",placeholder:"Enter email",autoComplete:"none"}),c.a.createElement("small",{id:"emailHelp",className:"form-text text-muted"},"We'll never share your email with anyone else.")),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"InputPassword"},"Password"),c.a.createElement(M.a,{name:"password",component:"input",type:"password",className:"form-control",id:"InputPassword",placeholder:"Password",autoComplete:"none"})),c.a.createElement("div",{className:"form-group form-check"},c.a.createElement("input",{type:"checkbox",className:"form-check-input",id:"Check"}),c.a.createElement("label",{className:"form-check-label",htmlFor:"Check"},"Remember me")),this.props.errorMessage&&c.a.createElement("div",{className:"alert alert-danger"},this.props.errorMessage),c.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Sign Up")))}}]),a}(c.a.Component);var V=Object(i.d)(Object(o.b)(function(e){return{auth:e.auth,errorMessage:e.auth.errorMessage}},n),Object(A.a)({form:"signup"}))(J),B=function(e){function a(){return Object(f.a)(this,a),Object(E.a)(this,Object(v.a)(a).apply(this,arguments))}return Object(N.a)(a,e),Object(g.a)(a,[{key:"componentDidMount",value:function(){this.props.signOut(),this.props.history.push("/")}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("h1",null,"SignOut Page"),c.a.createElement("p",null,"Only Loggedin users are allowed"))}}]),a}(c.a.Component),W=Object(o.b)(null,n)(B),z=function(e){function a(){return Object(f.a)(this,a),Object(E.a)(this,Object(v.a)(a).apply(this,arguments))}return Object(N.a)(a,e),Object(g.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"container px-0"},c.a.createElement("div",{className:"row text-center px-0 mx-0"},c.a.createElement("div",{className:"col-12 px-0"},c.a.createElement("h1",{className:"display-4"},"PX Music"),c.a.createElement("p",{className:"p-0 m-0"},"Reggaeton"))),c.a.createElement(S,{url:"/api/music/reggaeton",perPage:4}))}}]),a}(c.a.Component),Y=function(e){function a(){return Object(f.a)(this,a),Object(E.a)(this,Object(v.a)(a).apply(this,arguments))}return Object(N.a)(a,e),Object(g.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"container px-0"},c.a.createElement("div",{className:"row text-center px-0 mx-0"},c.a.createElement("div",{className:"col-12 px-0"},c.a.createElement("h1",{className:"display-4"},"PX Music"),c.a.createElement("p",{className:"p-0 m-0"},"Musica Variada"))),c.a.createElement(S,{url:"/api/music/Variada",perPage:4}))}}]),a}(c.a.Component),K=function(e){function a(){return Object(f.a)(this,a),Object(E.a)(this,Object(v.a)(a).apply(this,arguments))}return Object(N.a)(a,e),Object(g.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row text-center"},c.a.createElement("div",{className:"col"},c.a.createElement("h1",{className:"display-4"},"PX Music"))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col"},c.a.createElement("p",{className:"lead"},"Contacto:"),c.a.createElement("p",null,"Wilfred Lopez"),c.a.createElement("p",null,"Email: ",c.a.createElement("a",{href:"mailto:listenUpMusic@gmail.com"},"listenUpMusic@gmail.com")),c.a.createElement("p",null,"Garfield, NJ USA"),c.a.createElement("small",null,"Copyright @2019"))))}}]),a}(c.a.Component);t(253);O()(document).ready(function(){});var Q=t(15),Z=function(){var e=Object(r.useState)(),a=Object(Q.a)(e,2),n=a[0],l=a[1],s=Object(r.useState)("Elige Imagen"),o=Object(Q.a)(s,2),i=o[0],m=o[1],u=Object(r.useState)(),p=Object(Q.a)(u,2),d=p[0],b=p[1],h=Object(r.useState)(),f=Object(Q.a)(h,2),g=f[0],E=f[1],v=Object(r.useState)(),N=Object(Q.a)(v,2),y=N[0],O=N[1],j=Object(r.useState)(),k=Object(Q.a)(j,2),x=k[0],w=k[1],C=Object(r.useState)("Elige Audio"),S=Object(Q.a)(C,2),U=S[0],P=S[1],I=Object(r.useState)(),M=Object(Q.a)(I,2),A=M[0],R=M[1],T=Object(r.useState)(!1),D=Object(Q.a)(T,2),H=D[0],X=D[1],q=Object(r.useState)(""),G=Object(Q.a)(q,2),J=G[0],V=G[1],B=Object(r.useState)(),W=Object(Q.a)(B,2),z=W[0],Y=W[1],K=Object(r.useState)(),Z=Object(Q.a)(K,2),$=Z[0],ee=Z[1],ae=Object(r.useState)(),te=Object(Q.a)(ae,2),ne=te[0],re=te[1],ce=Object(r.useState)(),le=Object(Q.a)(ce,2),se=le[0],oe=le[1],ie=Object(r.useState)(),me=Object(Q.a)(ie,2),ue=me[0],pe=me[1],de=function(){var e=Object(_.a)(F.a.mark(function e(a){var t,r,c;return F.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),d){e.next=3;break}return e.abrupt("return",Y("A Song title must be provided"));case 3:if(g){e.next=5;break}return e.abrupt("return",ee("Artist Name must be provided"));case 5:if(A){e.next=7;break}return e.abrupt("return",re("Song Category or Genre is required"));case 7:if(n){e.next=10;break}return console.log("theres no file"),e.abrupt("return",pe("Choose an image. this is required."));case 10:if(x){e.next=12;break}return e.abrupt("return",oe("Choose an audio file. This is required. "));case 12:return(t=new FormData).append("file",n),t.append("title",d),t.append("artist",g),t.append("album",y),t.append("url",x),t.append("category",A),r={headers:{"Content-Type":"multipart/form-data"}},e.prev=20,X(!0),e.next=26,L.a.post("https://pxmusic.herokuapp.com/api/music/new",t,r);case 26:c=e.sent,console.log(c),be(),e.next=36;break;case 31:e.prev=31,e.t0=e.catch(20),console.log("there was an error",e.t0),V(e.t0),X(!1);case 36:X(!1);case 37:case"end":return e.stop()}},e,null,[[20,31]])}));return function(a){return e.apply(this,arguments)}}(),be=function(){l([]),m("Elige Image"),w([]),P("Elige Audio"),b(""),E(""),O(""),R("")},he=function(e){var a=e.target,t=a.name,n=a.value;switch(t){case"title":return""===n&&Y({message:"Please enter a song title"}),b(n);case"artist":return""===n&&ee("Please enter a Artist name"),E(n);case"album":return O(n);case"category":return""===n&&re("Please specify  a category"),R(n);default:return}},fe=function(e){return c.a.createElement(r.Fragment,null,e&&c.a.createElement("small",{className:"alert alert-danger d-flex mt-2"},e))};return c.a.createElement(r.Fragment,null,H&&c.a.createElement("img",{src:t(254),className:"loader",alt:"loading..."}),c.a.createElement("form",{onSubmit:de},c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"song_title"},"*Song Title"),c.a.createElement("input",{name:"title",className:"form-control",id:"song_title",type:"text",value:d,onChange:he}),fe(z)),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"song_artist"},"*Artist"),c.a.createElement("input",{name:"artist",className:"form-control",id:"song_artist",type:"text",value:g,onChange:he}),fe($)),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"song_album"},"Album"),c.a.createElement("input",{name:"album",className:"form-control",id:"song_album",type:"text",value:y,onChange:he})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"song_category"},"*Category"),c.a.createElement("input",{name:"category",className:"form-control",id:"song_category",type:"textarea",value:A,onChange:he}),fe(ne)),c.a.createElement("div",{className:"custom-file form-group"},c.a.createElement("input",{type:"file",className:"custom-file-input form-control",id:"img",name:"file",onChange:function(e){l(e.target.files[0]),m(e.target.files[0].name)}}),c.a.createElement("label",{className:"custom-file-label",htmlFor:"file"},"*",i),fe(ue)),c.a.createElement("div",{className:"custom-file form-group mt-3"},c.a.createElement("input",{type:"file",className:"custom-file-input form-control",id:"url",name:"file",onChange:function(e){w(e.target.files[0]),P(e.target.files[0].name)}}),c.a.createElement("label",{className:"custom-file-label",htmlFor:"file"},"*",U),fe(se)),c.a.createElement("div",{className:"row my-2 text-right "},c.a.createElement("div",{className:"col-12 d-flex"},c.a.createElement("small",null,"*required fields")),c.a.createElement("div",{className:"col-12 mt-2"},c.a.createElement("i",{className:"btn btn-info text-right mb-3 float-left",onClick:be,role:"button"},c.a.createElement("span",{className:""}," Clear ",c.a.createElement("i",{className:"far fa-trash-alt"}," "))),c.a.createElement("button",{type:"submit",className:"btn btn-success text-right mb-3"},c.a.createElement("i",{className:""},"Upload "),c.a.createElement("i",{className:"fas fa-upload"})))),J&&c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col text-center"},c.a.createElement("i",{className:"alert alert-danger "},J.message)))),c.a.createElement("div",{className:"float-right"}))},$=function(e){function a(){var e,t;Object(f.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(E.a)(this,(e=Object(v.a)(a)).call.apply(e,[this].concat(r)))).state={showUpload:!0},t}return Object(N.a)(a,e),Object(g.a)(a,[{key:"uploadSong",value:function(){var e=Object(_.a)(F.a.mark(function e(a){return F.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a.preventDefault();try{console.log("destroy")}catch(t){console.log("there was an error")}case 2:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row border justify-content-center d-flex align-content-center"},c.a.createElement("div",{className:"col-12 d-flex"},c.a.createElement("h1",{className:"display-4 p-auto m-auto text-center"},"Admin "),c.a.createElement("p",{className:"float-right"},c.a.createElement("a",{id:"db-logout",className:"btn btn-light btn-sm float-right",href:"/signout"},"Signout")))),c.a.createElement("div",{className:"row mt-3"},c.a.createElement("div",{className:"col-12"},c.a.createElement("h2",{className:"text-center"},"Actions"))),c.a.createElement("div",{className:"row mt-2 p-2 border bg-secondary align-content-center justify-content-center d-flex"},c.a.createElement("div",{className:"col text-center"},this.state.showUpload?c.a.createElement("button",{onClick:function(){e.setState({showUpload:!e.state.showUpload})},className:"btn btn-danger text-center btn-sm"},"Hide upload"):c.a.createElement("button",{onClick:function(){e.setState({showUpload:!e.state.showUpload})},className:"btn btn-primary text-center btn-sm"},"Upload New")),c.a.createElement("div",{className:"col text-center"},c.a.createElement("button",{className:"btn btn-primary btn-sm"},"Create User"))),this.state.showUpload&&c.a.createElement(Z,{onUploadSubmit:function(a){e.uploadSong(a)}}))}}]),a}(c.a.Component);var ee=Object(o.b)(function(e){return{auth:e.auth.authenticated}})(function(e){var a=function(a){function t(){return Object(f.a)(this,t),Object(E.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(N.a)(t,a),Object(g.a)(t,[{key:"componentDidMount",value:function(){this.isLoggedIn()}},{key:"componentDidUpdate",value:function(){this.isLoggedIn()}},{key:"isLoggedIn",value:function(){this.props.auth||this.props.history.push("/login")}},{key:"render",value:function(){return c.a.createElement(e,this.props)}}]),t}(c.a.Component);return Object(o.b)(function(e){return{auth:e.auth.authenticated}})(a)}($)),ae=function(){return c.a.createElement("div",{className:"body-wrapper"},c.a.createElement(k,null),c.a.createElement(x.a,{exact:!0,path:"/",component:I}),c.a.createElement(x.a,{path:"/admin",component:ee}),c.a.createElement(x.a,{path:"/login",component:G}),c.a.createElement(x.a,{path:"/signup",component:V}),c.a.createElement(x.a,{path:"/signout",component:W}),c.a.createElement(x.a,{path:"/generos/reggaeton",component:z}),c.a.createElement(x.a,{path:"/generos/variada",component:Y}),c.a.createElement(x.a,{path:"/contacto",component:K}))},te=Object(i.e)(h,{auth:{authenticated:localStorage.getItem("token")}},Object(i.a)(u.a));s.a.render(c.a.createElement(o.a,{store:te},c.a.createElement(m.a,{basename:"/home"},c.a.createElement(ae,null))),document.getElementById("root"))}},[[112,1,2]]]);
//# sourceMappingURL=main.9e7b0671.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{33:function(e,t,a){e.exports=a.p+"static/media/Track-a-Book.7a9e9f27.png"},34:function(e,t,a){e.exports=a.p+"static/media/Track-a-Book.7a9e9f27.png"},36:function(e,t,a){e.exports=a(75)},41:function(e,t,a){},42:function(e,t,a){},63:function(e,t,a){},65:function(e,t,a){},73:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),r=a(16),l=a.n(r),c=a(88),i=a(90),s=a(91),u=a(32),m=a(8),f=a(9),d=a(12),h=a(10),E=a(13);var g=function(e){var t=e.icon,a=e.title,n=e.children;return o.a.createElement("div",{className:"card mt-5 mb-2"},o.a.createElement("div",{className:"card-header"},o.a.createElement("h3",null,o.a.createElement("strong",null,o.a.createElement("i",{className:"fa fa-".concat(t),"aria-hidden":"true"})," ",a))),o.a.createElement("div",{className:"card-body"},n))};var v=function(e){var t=e.q,a=e.handleInputChange,n=e.handleFormSubmit;return o.a.createElement("form",null,o.a.createElement("div",{className:"form-group"},o.a.createElement("input",{className:"form-control",id:"Title",type:"text",value:t,placeholder:"Search a book title...",name:"q",onChange:a,required:!0})),o.a.createElement("div",{className:"pull-right"},o.a.createElement("button",{onClick:n,type:"submit",className:"btn btn-lg btn-success float-right"},o.a.createElement("i",{className:"fas fa-search"}))))},k=(a(41),function(e){var t=e.children;return o.a.createElement("ul",{className:"list-group"},t)});function p(e){var t=e.children;return o.a.createElement("li",{className:"list-group-item"},t)}var b=a(78),N=a(79);a(42);var B=function(e){var t=e.title,a=e.subtitle,n=e.authors,r=e.link,l=e.description,c=e.image,i=e.Button;return o.a.createElement(p,null,o.a.createElement(b.a,null,o.a.createElement(N.a,{size:"md-8"},o.a.createElement("h3",{className:"bookTitle"},t),a&&o.a.createElement("h5",{className:"subTitle"},a)),o.a.createElement(N.a,{size:"md-4"},o.a.createElement("div",{className:"btn-container"},o.a.createElement("a",{className:"btn btn-primary",target:"_blank",rel:"noopener noreferrer",href:r},o.a.createElement("i",{className:"fas fa-shopping-bag"})),o.a.createElement(i,null)))),o.a.createElement(b.a,null,o.a.createElement(N.a,{size:"md-6"},o.a.createElement("p",{className:"authors"},"Written by ",n))),o.a.createElement(b.a,null,o.a.createElement(N.a,{size:"12 sm-4 md-2"},o.a.createElement("img",{className:"imgThumbnail",src:c,alt:t})),o.a.createElement(N.a,{size:"12 sm-8 md-10"},o.a.createElement("p",{className:"description"},l))))},w=a(14),y=a.n(w),j={getBooks:function(e){return y.a.get("/api/google",{params:{q:"title:"+e}})},getSavedBooks:function(){return y.a.get("/api/books")},deleteBook:function(e){return y.a.delete("/api/books/"+e)},saveBook:function(e){return y.a.post("/api/books",e)}},O=a(80),S=(a(63),function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).state={books:[],q:"",message:"Use the search to track a book!"},a.handleInputChange=function(e){var t=e.target,n=t.name,o=t.value;a.setState(Object(u.a)({},n,o))},a.getBooks=function(){j.getBooks(a.state.q).then(function(e){return a.setState({books:e.data})}).catch(function(){return a.setState({books:[],style:{},message:"No books found."})})},a.handleFormSubmit=function(e){e.preventDefault(),a.getBooks()},a.handleBookSave=function(e){var t=a.state.books.find(function(t){return t.id===e});j.saveBook({googleId:t.id,title:t.volumeInfo.title,subtitle:t.volumeInfo.subtitle,link:t.volumeInfo.infoLink,authors:t.volumeInfo.authors,description:t.volumeInfo.description,image:t.volumeInfo.imageLinks.thumbnail}).then(function(){return a.getBooks()})},a}return Object(E.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(O.a,null,o.a.createElement(b.a,null,o.a.createElement(N.a,{size:"12"},o.a.createElement(g,{title:"Book Search",icon:"fas fa-quran"},o.a.createElement(v,{handleInputChange:this.handleInputChange,handleFormSubmit:this.handleFormSubmit,q:this.state.q})))),o.a.createElement(b.a,null,o.a.createElement(N.a,{size:"12"},o.a.createElement(g,{title:"Tracked Books",icon:"far fa-compass"},this.state.books.length?o.a.createElement(k,null,this.state.books.map(function(t){return o.a.createElement(B,{key:t.id,title:t.volumeInfo.title,subtitle:t.volumeInfo.subtitle,link:t.volumeInfo.infoLink,authors:t.volumeInfo.authors.join(", "),description:t.volumeInfo.description,image:t.volumeInfo.imageLinks.thumbnail,Button:function(){return o.a.createElement("button",{onClick:function(){return e.handleBookSave(t.id)},className:"btn btn-secondary ml-3"},o.a.createElement("i",{className:"fa fa-file-download"}))}})})):o.a.createElement("h2",{className:"message text-center"},this.state.message)))))}}]),t}(n.Component)),I=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).state={books:[]},a.getSavedBooks=function(){j.getSavedBooks().then(function(e){return a.setState({books:e.data})}).catch(function(e){return console.log(e)})},a.handleBookDelete=function(e){j.deleteBook(e).then(function(e){return a.getSavedBooks()})},a}return Object(E.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){this.getSavedBooks()}},{key:"render",value:function(){var e=this;return o.a.createElement(O.a,null,o.a.createElement(b.a,null,o.a.createElement(N.a,{size:"md-12"},o.a.createElement(g,{title:"Saved Books",icon:"bookmark"},this.state.books.length?o.a.createElement(k,null,this.state.books.map(function(t){return o.a.createElement(B,{key:t._id,title:t.title,subtitle:t.subtitle,link:t.link,authors:t.authors.join(", "),description:t.description,image:t.image,Button:function(){return o.a.createElement("button",{onClick:function(){return e.handleBookDelete(t._id)},className:"btn btn-danger ml-2"},o.a.createElement("i",{className:"fas fa-minus-square"})," \xa0Delete")}})})):o.a.createElement("h2",{className:"text-center"},"No Saved Books")))))}}]),t}(n.Component),C=a(81);var x=function(){return o.a.createElement(O.a,{fluid:!0},o.a.createElement(b.a,null,o.a.createElement(N.a,{size:"md-12"},o.a.createElement(C.a,null,o.a.createElement("h1",{className:"text-center"},"404 Page Not Found"),o.a.createElement("h1",{className:"text-center"},o.a.createElement("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji"},"\ud83d\ude44"))))))},q=a(82),z=a(83),T=a(84),F=a(89),L=a(85),W=a(86),D=a(87),A=(a(64),a(65),a(33)),R=a.n(A),_=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).state={isOpen:!1},a.toggle=function(){a.setState({isOpen:!a.state.isOpen})},a}return Object(E.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(q.a,{color:"warning",className:"navbar",dark:!0,expand:"sm"},o.a.createElement(O.a,null,o.a.createElement(z.a,{href:"/"},o.a.createElement("h1",null,o.a.createElement("img",{src:R.a,alt:"logo",className:"logo"}),"Track-a-Book")),o.a.createElement(T.a,{onClick:this.toggle}),o.a.createElement(F.a,{isOpen:this.state.isOpen,navbar:!0},o.a.createElement(L.a,{className:"ml auto",navbar:!0},o.a.createElement(W.a,null,o.a.createElement(D.a,{className:"navItem",href:"/saved"},o.a.createElement("h4",null,"Saved Books"))))))))}}]),t}(n.Component),J=a(34),U=a.n(J);a(73);var M=function(){return o.a.createElement("footer",null,o.a.createElement("hr",null),o.a.createElement("p",{className:"footer"},o.a.createElement("img",{src:U.a,alt:"logo",className:"logo"})," Track-a-Book, a React.js application."))};var P=function(){return o.a.createElement(c.a,null,o.a.createElement("div",null,o.a.createElement(_,null),o.a.createElement(i.a,null,o.a.createElement(s.a,{exact:!0,path:"/",component:S}),o.a.createElement(s.a,{exact:!0,path:"/saved",component:I}),o.a.createElement(s.a,{component:x})),o.a.createElement(M,null)))},$=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function G(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}l.a.render(o.a.createElement(P,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");$?function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):G(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):G(e)})}}()}},[[36,1,2]]]);
//# sourceMappingURL=main.1695d5c1.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{33:function(e,t,a){e.exports=a.p+"static/media/Track-a-Book.3c07aa07.png"},34:function(e,t,a){e.exports=a.p+"static/media/Track-a-Book.3c07aa07.png"},36:function(e,t,a){e.exports=a(78)},41:function(e,t,a){},42:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},65:function(e,t,a){},67:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},78:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),r=a(18),l=a.n(r),c=a(93),i=a(95),s=a(96),m=a(32),u=a(9),f=a(10),d=a(14),h=a(11),E=a(15);a(41);var p=function(e){var t=e.icon,a=e.title,n=e.children;return o.a.createElement("div",{className:"card mt-5 mb-2"},o.a.createElement("div",{className:"card-header"},o.a.createElement("h3",null,o.a.createElement("strong",null,o.a.createElement("i",{className:"fa fa-".concat(t),"aria-hidden":"true"})," ",a))),o.a.createElement("div",{className:"card-body"},n))},v=a(81),g=a(97),k=a(82);a(42);var b=function(e){var t=e.q,a=e.handleInputChange,n=e.handleFormSubmit;return o.a.createElement(v.a,null,o.a.createElement(g.a,{className:"sear",addonType:"prepend"}," ",o.a.createElement("h3",null," ",o.a.createElement("i",{className:"fas fa-quran"})," Search: \xa0")),o.a.createElement(k.a,{className:"form-control",id:"Title",type:"text",value:t,placeholder:"Search a book title...",name:"q",onChange:a,required:!0}),o.a.createElement(g.a,{addonType:"append"},o.a.createElement("button",{onClick:n,className:"searchBtn"},o.a.createElement("i",{className:"fas fa-search"}))))},N=(a(45),function(e){var t=e.children;return o.a.createElement("ul",{className:"list-group"},t)});function B(e){var t=e.children;return o.a.createElement("li",{className:"list-group-item"},t)}var w=a(83),y=a(84);a(46);var j=function(e){var t=e.title,a=e.subtitle,n=e.authors,r=e.link,l=e.description,c=e.image,i=e.Button;return o.a.createElement(B,null,o.a.createElement(w.a,null,o.a.createElement(y.a,{size:"md-8"},o.a.createElement("h3",{className:"bookTitle"},t),a&&o.a.createElement("h5",{className:"subTitle"},a)),o.a.createElement(y.a,{size:"md-4"},o.a.createElement("div",{className:"btn-container"},o.a.createElement("a",{className:"btn btn-primary",target:"_blank",rel:"noopener noreferrer",href:r},o.a.createElement("i",{className:"fas fa-shopping-bag"})),o.a.createElement(i,null)))),o.a.createElement(w.a,null,o.a.createElement(y.a,{size:"md-6"},o.a.createElement("p",{className:"authors"},"Written by ",n))),o.a.createElement(w.a,null,o.a.createElement(y.a,{size:"12 sm-4 md-2"},o.a.createElement("img",{className:"imgThumbnail",src:c,alt:t})),o.a.createElement(y.a,{size:"12 sm-8 md-10"},o.a.createElement("p",{className:"description"},l))))},O=a(17),S=a.n(O),I={getBooks:function(e){return S.a.get("/api/google",{params:{q:"title:"+e}})},getSavedBooks:function(){return S.a.get("/api/books")},deleteBook:function(e){return S.a.delete("/api/books/"+e)},saveBook:function(e){return S.a.post("/api/books",e)}},C=a(85),x=(a(65),function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).state={books:[],q:"",message:"Use the search to track a book!"},a.handleInputChange=function(e){var t=e.target,n=t.name,o=t.value;a.setState(Object(m.a)({},n,o))},a.getBooks=function(){I.getBooks(a.state.q).then(function(e){return a.setState({books:e.data})}).catch(function(){return a.setState({books:[],style:{},message:"No books found."})})},a.handleFormSubmit=function(e){e.preventDefault(),a.getBooks()},a.handleBookSave=function(e){var t=a.state.books.find(function(t){return t.id===e});I.saveBook({googleId:t.id,title:t.volumeInfo.title,subtitle:t.volumeInfo.subtitle,link:t.volumeInfo.infoLink,authors:t.volumeInfo.authors,description:t.volumeInfo.description,image:t.volumeInfo.imageLinks.thumbnail}).then(function(){return a.getBooks()})},a}return Object(E.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(C.a,{className:"cont"},o.a.createElement(w.a,null,o.a.createElement(y.a,{size:"12"},o.a.createElement("div",{className:"searchBar"},o.a.createElement(b,{handleInputChange:this.handleInputChange,handleFormSubmit:this.handleFormSubmit,q:this.state.q})))),o.a.createElement(w.a,null,o.a.createElement(y.a,{size:"12"},o.a.createElement(p,{className:"card-header",title:"Tracked Books",icon:"far fa-compass"},this.state.books.length?o.a.createElement(N,null,this.state.books.map(function(t){return o.a.createElement(j,{key:t.id,title:t.volumeInfo.title,subtitle:t.volumeInfo.subtitle,link:t.volumeInfo.infoLink,authors:t.volumeInfo.authors.join(", "),description:t.volumeInfo.description,image:t.volumeInfo.imageLinks.thumbnail,Button:function(){return o.a.createElement("button",{onClick:function(){return e.handleBookSave(t.id)},className:"btn btn-secondary ml-3"},o.a.createElement("i",{className:"fa fa-file-download"}))}})})):o.a.createElement("h2",{className:"message text-center"},this.state.message)))))}}]),t}(n.Component)),T=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).state={books:[]},a.getSavedBooks=function(){I.getSavedBooks().then(function(e){return a.setState({books:e.data})}).catch(function(e){return console.log(e)})},a.handleBookDelete=function(e){I.deleteBook(e).then(function(e){return a.getSavedBooks()})},a}return Object(E.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){this.getSavedBooks()}},{key:"render",value:function(){var e=this;return o.a.createElement(C.a,null,o.a.createElement(w.a,null,o.a.createElement(y.a,{size:"md-12"},o.a.createElement(p,{title:"Saved Books",icon:"bookmark"},this.state.books.length?o.a.createElement(N,null,this.state.books.map(function(t){return o.a.createElement(j,{key:t._id,title:t.title,subtitle:t.subtitle,link:t.link,authors:t.authors.join(", "),description:t.description,image:t.image,Button:function(){return o.a.createElement("button",{onClick:function(){return e.handleBookDelete(t._id)},className:"btn btn-danger ml-2"},o.a.createElement("i",{className:"fas fa-minus-square"})," \xa0Delete")}})})):o.a.createElement("h2",{className:"text-center"},"No Saved Books")))))}}]),t}(n.Component),q=a(86);var z=function(){return o.a.createElement(C.a,{fluid:!0},o.a.createElement(w.a,null,o.a.createElement(y.a,{size:"md-12"},o.a.createElement(q.a,null,o.a.createElement("h1",{className:"text-center"},"404 Page Not Found"),o.a.createElement("h1",{className:"text-center"},o.a.createElement("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji"},"\ud83d\ude44"))))))},F=a(87),L=a(88),W=a(89),D=a(94),A=a(90),R=a(91),_=a(92),J=(a(66),a(67),a(33)),U=a.n(J),M=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).state={isOpen:!1},a.toggle=function(){a.setState({isOpen:!a.state.isOpen})},a}return Object(E.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(F.a,{className:"navbar",dark:!0,expand:"sm"},o.a.createElement(C.a,null,o.a.createElement(L.a,{href:"/"},o.a.createElement("h1",null,o.a.createElement("img",{src:U.a,alt:"logo",className:"logo"}),"Track-a-Book")),o.a.createElement(W.a,{onClick:this.toggle}),o.a.createElement(D.a,{isOpen:this.state.isOpen,navbar:!0},o.a.createElement(A.a,{className:"ml auto",navbar:!0},o.a.createElement(R.a,null,o.a.createElement(_.a,{className:"navItem",href:"/Saved"},o.a.createElement("h4",null,"Saved Books"))))))))}}]),t}(n.Component),P=a(34),$=a.n(P);a(75);var G=function(){return o.a.createElement("footer",null,o.a.createElement("hr",null),o.a.createElement("p",{className:"footer"},o.a.createElement("img",{src:$.a,alt:"logo",className:"logo"})," Track-a-Book, a React.js application."))};a(76);var H=function(e){return o.a.createElement("main",Object.assign({className:"wrapper"},e))};var K=function(){return o.a.createElement(c.a,null,o.a.createElement("div",null,o.a.createElement(M,null),o.a.createElement(H,null,o.a.createElement(i.a,null,o.a.createElement(s.a,{exact:!0,path:"/",component:x}),o.a.createElement(s.a,{exact:!0,path:"/Saved",component:T}),o.a.createElement(s.a,{component:z})),o.a.createElement(G,null))))},Q=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function V(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}l.a.render(o.a.createElement(K,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");Q?function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):V(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):V(e)})}}()}},[[36,1,2]]]);
//# sourceMappingURL=main.d3c92bf6.chunk.js.map
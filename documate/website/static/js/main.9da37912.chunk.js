(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){e.exports={pathToUri:function(e){var t=e.match(/[\.]?[\/]?(.*)\.\w+$/);return t&&"index"===t[1]?"/":t&&t[1]?"/"+t[1]:null},titleCase:function(e){return e.split(/[\-\s]/g).map(function(e){return"".concat(e.substring(0,1).toUpperCase()).concat(e.substring(1))}).join(" ")},loadCodeBlockAssets:function(){var e=JSON.parse("[]");a(47);for(var t=0;t<e.length;t++){var n=e[t],r=document.createElement("script");r.type="text/javascript",r.src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.15.0/components/prism-".concat(n,".min.js"),document.head.appendChild(r)}}}},24:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return Document});var C_Users_bukharim96_Desktop_Projects_documate_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(7),C_Users_bukharim96_Desktop_Projects_documate_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(8),C_Users_bukharim96_Desktop_Projects_documate_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(10),C_Users_bukharim96_Desktop_Projects_documate_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(9),C_Users_bukharim96_Desktop_Projects_documate_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(11),react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__),reactstrap__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(69),reactstrap__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(74),_Loader__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(32),_Pagination__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(34),_Sidebar__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(35),_Fab__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(36),_utils__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(14),_utils__WEBPACK_IMPORTED_MODULE_12___default=__webpack_require__.n(_utils__WEBPACK_IMPORTED_MODULE_12__),_mobile_menu_css__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(61),_mobile_menu_css__WEBPACK_IMPORTED_MODULE_13___default=__webpack_require__.n(_mobile_menu_css__WEBPACK_IMPORTED_MODULE_13__),SidenavSourceMap=JSON.parse('{"/docs/welcome":"/partials/njZoSz8lm3zZv4EN.html","/docs/getting-started/getting-started":"/partials/b2DeoMCamxN_ERoh.html","/docs/getting-started/installation-setup":"/partials/XGthvbhfqPS1wHQK.html","/docs/getting-started/configuration":"/partials/zgNRBog6n4htMO4j.html","/docs/getting-started/extending-example-project":"/partials/f_RmIJgHc4QaFWnr.html","/docs/getting-started/creating-production-build":"/partials/Yn2huXJq3JMhQrdQ.html","/docs/advanced-guide/compilem":"/partials/oE9krt_rBoGGn35l.html"}'),DOCS=JSON.parse('{"Welcome":"./docs/welcome.md","Getting Started":{"Getting Started":"./docs/getting-started/getting-started.md","Installation & Setup":"./docs/getting-started/installation-setup.md","Configuration":"./docs/getting-started/configuration.md","Extending our example project":"./docs/getting-started/extending-example-project.md","Creating a production build":"./docs/getting-started/creating-production-build.md"},"Using the API":{"Overview":"./docs/welcome.md","Using plugins":"./docs/welcome.md","Creating custom plugins":"./docs/welcome.md","Composing native plugins":"./docs/welcome.md","Hooking onto PackemEvent":"./docs/welcome.md","Optimizations and build control":"./docs/welcome.md"},"Advanced Guide":{"Overview":"./docs/welcome.md","Why Rust?":"./docs/welcome.md","Static Module Elision":"./docs/welcome.md","The ModuleGraph":"./docs/welcome.md","Compilem":"./docs/advanced-guide/compilem.md","Regular & native plugins":"./docs/welcome.md","Caching system":"./docs/welcome.md","The PackemEvent submodule":"./docs/welcome.md","Edge cases":"./docs/welcome.md"},"Plugin System":{"Overview":"./docs/welcome.md","Utilizing plugins in your toolchain":"./docs/welcome.md","Creating custom plugins":"./docs/welcome.md","Composing native plugins":"./docs/welcome.md","Hooking onto PackemEvent":"./docs/welcome.md","Optimizations and build control":"./docs/welcome.md"},"Integrations":{"Starter Packs":"./docs/welcome.md","Integrating Packem with Babel":"./docs/welcome.md","Integrating Packem with React":"./docs/welcome.md","Integrating Packem with TypeScript":"./docs/welcome.md","Integrating Packem with Vue":"./docs/welcome.md","Integrating Packem with Angular":"./docs/welcome.md"}}');function highlightCode(){eval("Prism && Prism.highlightAll();")}function scrollToHash(){if(window.location.hash){var e=window.location.hash,t=document.querySelectorAll("h1 a, h2 a, h3 a, h4 a, h5 a, h6 a");Array.from(t).map(function(t){if(t.getAttribute("href")==e){var a=t.parentNode,n=a.scrollHeight;a.scrollIntoView(),window.scroll(0,n)}})}}window.addEventListener("load",scrollToHash);var Document=function(e){function t(e){var a;return Object(C_Users_bukharim96_Desktop_Projects_documate_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,t),(a=Object(C_Users_bukharim96_Desktop_Projects_documate_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__.a)(this,Object(C_Users_bukharim96_Desktop_Projects_documate_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__.a)(t).call(this,e))).state={loading:!0,content:""},a}return Object(C_Users_bukharim96_Desktop_Projects_documate_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.a)(t,e),Object(C_Users_bukharim96_Desktop_Projects_documate_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(t,[{key:"componentWillMount",value:function(){var e=this,t=this.props.location.pathname,a="/docs/"===t||"/docs"===t?SidenavSourceMap[Object.keys(SidenavSourceMap)[0]]:SidenavSourceMap[t];document.body.scrollIntoView(),fetch(a).then(function(e){return e.text()}).then(function(a){e.setState({loading:!1,content:a}),document.title="".concat("Packem"," - ").concat(Object(_utils__WEBPACK_IMPORTED_MODULE_12__.titleCase)(t.match(/[\w\-]+$/)[0])),highlightCode(),Array.from(document.querySelectorAll("pre")).map(function(e){var t=document.createElement("span");t.className="copy-button",t.title="Click to copy this code snippet",t.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M22 6v16h-16v-16h16zm2-2h-20v20h20v-20zm-24 17v-21h21v2h-19v19h-2z"/></svg>',e.appendChild(t),e.addEventListener("mouseover",function(){return t.style.opacity="1"}),e.addEventListener("mouseout",function(){return t.style.opacity=".5"}),t.addEventListener("click",function(){var a=t.innerHTML;navigator.clipboard.writeText(e.textContent).then(function(){t.innerHTML="Copied snippet!",t.classList.add("copied"),setTimeout(function(){t.innerHTML=a,t.classList.remove("copied")},1500)})})})}).catch(function(e){return console.error(e)})}},{key:"componentDidUpdate",value:function(){highlightCode()}},{key:"render",value:function(){return highlightCode(),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__.a,{id:"main-content-wrapper",style:{paddingTop:53}},!this.state.loading&&react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__.a,{id:"main-content",style:{paddingTop:90},md:"8",dangerouslySetInnerHTML:{__html:this.state.content}})||react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Loader__WEBPACK_IMPORTED_MODULE_8__.a,null)),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Pagination__WEBPACK_IMPORTED_MODULE_9__.a,null),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Sidebar__WEBPACK_IMPORTED_MODULE_10__.a,{nav:DOCS}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Fab__WEBPACK_IMPORTED_MODULE_11__.a,null))}}]),t}(react__WEBPACK_IMPORTED_MODULE_5__.Component)},32:function(e,t,a){"use strict";var n=a(1),r=a.n(n),l=a(74);t.a=function(){return r.a.createElement(l.a,{id:"main-content",style:{paddingTop:90,display:"flex",justifyContent:"center"},md:"8"},r.a.createElement("svg",{id:"loader",style:{width:128,height:110,position:"absolute",top:"calc(100vh - 64%)"},viewBox:"0 0 45 45",xmlns:"http://www.w3.org/2000/svg",stroke:"#61dafb"},r.a.createElement("g",{fill:"none",fillRule:"evenodd",transform:"translate(1 1)",strokeWidth:"2"},r.a.createElement("circle",{cx:"22",cy:"22",r:"6",strokeOpacity:"0"},r.a.createElement("animate",{attributeName:"r",begin:"1.5s",dur:"3s",values:"6;22",calcMode:"linear",repeatCount:"indefinite"}),r.a.createElement("animate",{attributeName:"stroke-opacity",begin:"1.5s",dur:"3s",values:"1;0",calcMode:"linear",repeatCount:"indefinite"}),r.a.createElement("animate",{attributeName:"stroke-width",begin:"1.5s",dur:"3s",values:"2;0",calcMode:"linear",repeatCount:"indefinite"})),r.a.createElement("circle",{cx:"22",cy:"22",r:"6",strokeOpacity:"0"},r.a.createElement("animate",{attributeName:"r",begin:"3s",dur:"3s",values:"6;22",calcMode:"linear",repeatCount:"indefinite"}),r.a.createElement("animate",{attributeName:"stroke-opacity",begin:"3s",dur:"3s",values:"1;0",calcMode:"linear",repeatCount:"indefinite"}),r.a.createElement("animate",{attributeName:"stroke-width",begin:"3s",dur:"3s",values:"2;0",calcMode:"linear",repeatCount:"indefinite"})),r.a.createElement("circle",{cx:"22",cy:"22",r:"8"},r.a.createElement("animate",{attributeName:"r",begin:"0s",dur:"1.5s",values:"6;1;2;3;4;5;6",calcMode:"linear",repeatCount:"indefinite"})))))}},34:function(e,t,a){"use strict";var n=a(1),r=a.n(n),l=a(69),o=a(74),c=a(75),i=a(22),s=Object.keys(JSON.parse('{"/docs/welcome":"/partials/njZoSz8lm3zZv4EN.html","/docs/getting-started/getting-started":"/partials/b2DeoMCamxN_ERoh.html","/docs/getting-started/installation-setup":"/partials/XGthvbhfqPS1wHQK.html","/docs/getting-started/configuration":"/partials/zgNRBog6n4htMO4j.html","/docs/getting-started/extending-example-project":"/partials/f_RmIJgHc4QaFWnr.html","/docs/getting-started/creating-production-build":"/partials/Yn2huXJq3JMhQrdQ.html","/docs/advanced-guide/compilem":"/partials/oE9krt_rBoGGn35l.html"}'));t.a=function(){var e=s.indexOf(window.location.pathname),t=s[e-1]||null,a=s[e+1]||null;return r.a.createElement("div",{id:"pagination",style:{backgroundColor:"rgb(40, 44, 52)",marginTop:150,padding:"50px 0"}},r.a.createElement(l.a,null,r.a.createElement(o.a,{md:"8"},r.a.createElement(c.a,null,t&&r.a.createElement(o.a,{className:"page-previous",md:"6",sm:"6",xs:"6"},r.a.createElement("span",{style:{color:"#61dafb",fontSize:14}},"Previous Article"),r.a.createElement("br",null),r.a.createElement(i.a,{className:"pagination-link",to:t,dangerouslySetInnerHTML:{__html:window.searchables[t]&&window.searchables[t][0].title}}))||r.a.createElement(o.a,{className:"page-previous",md:"6",sm:"6",xs:"6"}),a&&r.a.createElement(o.a,{className:"page-next",style:{textAlign:"right",float:"right"},md:"6",sm:"6",xs:"6"},r.a.createElement("span",{style:{color:"#61dafb",fontSize:14}},"Next Article"),r.a.createElement("br",null),r.a.createElement(i.a,{className:"pagination-link",to:a,dangerouslySetInnerHTML:{__html:window.searchables[a]&&window.searchables[a][0].title}}))))))}},35:function(e,t,a){"use strict";var n=a(1),r=a.n(n),l=a(22),o=a(74),c=a(18),i=a(14);a(59);function s(e,t){var a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if(t.constructor==Object)return r.a.createElement(r.a.Fragment,null,a&&r.a.createElement(c.AccordionItemTitle,null,r.a.createElement("span",{className:"acc-item-title",style:{marginLeft:6},children:e}),r.a.createElement("div",{className:"accordion__arrow",role:"presentation"}))||r.a.createElement("span",{className:"acc-item-title",children:e}),r.a.createElement(c.AccordionItemBody,null,r.a.createElement("ul",null,Object.keys(t).map(function(e,a){var n=Object(i.pathToUri)(t[e]);return t[e].constructor==Object&&s(e,t[e],!1)||r.a.createElement("li",{key:"subnav-item-"+a},r.a.createElement(l.a,{to:n,className:n===window.location.pathname?"active":"",children:e}))}))));var n=Object(i.pathToUri)(t);return r.a.createElement(l.a,{to:n,className:n===window.location.pathname?"acc-item-title active":"acc-item-title",children:e})}t.a=function(e){var t=e.nav,a=window.location.pathname;return r.a.createElement(o.a,{style:{height:"100vh",position:"fixed",right:0,bottom:0,float:"right",background:"#f7f7f7",padding:"148px 0 60px 30px",borderLeft:"1px solid rgb(236, 236, 236)",overflowY:"auto"},id:"sidebar",md:"4"},r.a.createElement(c.Accordion,{accordion:!1},Object.keys(t).map(function(e,n){var l=!1,o=t[e];if(o.constructor===Object)for(var m in o)if(Object(i.pathToUri)(o[m])===a){l=!0;break}return r.a.createElement(c.AccordionItem,{key:"navitem-".concat(n),children:s(e,o),expanded:l})})))}},36:function(e,t,a){"use strict";a.d(t,"a",function(){return m});var n=a(7),r=a(8),l=a(10),o=a(9),c=a(11),i=a(1),s=a.n(i),m=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(c)))).state={isOpen:!1},a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"onFabClick",value:function(){var e=document.getElementById("sidebar"),t=document.querySelector(".wrapper-menu");this.state.isOpen?(e.classList.remove("active-mobile"),t.classList.remove("open")):(e.classList.add("active-mobile"),t.classList.add("open")),this.setState({isOpen:!this.state.isOpen})}},{key:"render",value:function(){return s.a.createElement("button",{onClick:this.onFabClick.bind(this),id:"sidebar-fab"},s.a.createElement("div",{className:"wrapper-menu"},s.a.createElement("div",{className:"line-menu half start"}),s.a.createElement("div",{className:"line-menu"}),s.a.createElement("div",{className:"line-menu half end"})))}}]),t}(i.Component)},38:function(e,t,a){e.exports=a(66)},43:function(e,t,a){},47:function(e,t,a){},59:function(e,t,a){},61:function(e,t,a){},63:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(19),o=a.n(l),c=(a(43),a(45),a(7)),i=a(8),s=a(10),m=a(9),d=a(11),p=a(76),u=a(77),_=a(14),h=a(68),g=a(69),b=a(70),w=a(78),v=a(71),f=a(72),E=a(73),k=a(67),C=function(e){return r.a.createElement("svg",Object.assign({id:"navbar-search-icon",style:{width:"1em",margin:"-1px 10px"},xmlns:"http://www.w3.org/2000/svg",alt:"Search",viewBox:"0 0 16 16"},e),r.a.createElement("link",{xmlns:"",type:"text/css",id:"dark-mode",rel:"stylesheet",href:""}),r.a.createElement("style",{xmlns:"",type:"text/css",id:"dark-mode-custom-style"}),r.a.createElement("path",{d:"M6.02945,10.20327a4.17382,4.17382,0,1,1,4.17382-4.17382A4.15609,4.15609,0,0,1,6.02945,10.20327Zm9.69195,4.2199L10.8989,9.59979A5.88021,5.88021,0,0,0,12.058,6.02856,6.00467,6.00467,0,1,0,9.59979,10.8989l4.82338,4.82338a.89729.89729,0,0,0,1.29912,0,.89749.89749,0,0,0-.00087-1.29909Z",fill:"#ffffff"}))},S=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={isSearchOpen:!1,isSearchResultsOpen:!1},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){document.getElementById("search-container").style.position="unset",document.body.addEventListener("click",function(e){e.target.id&&"search-results"==e.target.id&&"navbar-search"==e.target.id||(document.getElementById("search-results").style.display="none")})}},{key:"onSearchChange",value:function(){var e=document.getElementById("search-results"),t=document.getElementById("navbar-search").value;document.getElementById("search-results").style.display="block",e.innerHTML="\n      <span id='search-list-header'>\n        Search Results\n      </span>";var a=Object.keys(window.searchables).map(function(e){return window.searchables[e].filter(function(a){if(a.title.toLowerCase().indexOf(t.toLowerCase())>-1)return a.pageUrl=e,a})}).filter(function(e){return e.length}),n="";a.map(function(e){var a=e[0]&&window.searchables[e[0].pageUrl]?window.searchables[e[0].pageUrl][0].title:null;n+=a&&'<div class="search-result"><span class="page-title">'.concat(a,"</span></div>");for(var r=0;r<e.length;r++){var l=e[r],o=l.title,c=new RegExp(t,"gi"),i=o.match(c)[0],s=o.replace(i,"<b>".concat(i,"</b>"));n+='<div class="search-result">\n          <a href="'.concat(window.location.origin+l.pageUrl,'"><span>').concat(s,"</span></a></div>")}}),e.innerHTML+=n||'\n        <div id="not-found">\n          <svg id="search-not-found-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" version="1.1">\n            <g id="surface1">\n              <path style=" " d="M 19 3 C 13.488281 3 9 7.488281 9 13 C 9 15.398438 9.851563 17.597656 11.265625 19.324219 L 3.292969 27.292969 L 4.707031 28.707031 L 12.675781 20.734375 C 14.402344 22.148438 16.601563 23 19 23 C 24.511719 23 29 18.511719 29 13 C 29 7.488281 24.511719 3 19 3 Z M 19 5 C 23.429688 5 27 8.570313 27 13 C 27 17.429688 23.429688 21 19 21 C 14.570313 21 11 17.429688 11 13 C 11 8.570313 14.570313 5 19 5 Z M 16 10 C 15.449219 10 15 10.449219 15 11 C 15 11.550781 15.449219 12 16 12 C 16.550781 12 17 11.550781 17 11 C 17 10.449219 16.550781 10 16 10 Z M 22 10 C 21.449219 10 21 10.449219 21 11 C 21 11.550781 21.449219 12 22 12 C 22.550781 12 23 11.550781 23 11 C 23 10.449219 22.550781 10 22 10 Z M 19 14 C 16.792969 14 15.34375 15.246094 15.34375 15.246094 C 15.0625 15.472656 14.929688 15.839844 14.996094 16.199219 C 15.058594 16.554688 15.316406 16.851563 15.660156 16.964844 C 16.003906 17.082031 16.386719 17 16.65625 16.753906 C 16.65625 16.753906 17.515625 16 19 16 C 20.484375 16 21.34375 16.753906 21.34375 16.753906 C 21.613281 17 21.996094 17.082031 22.339844 16.964844 C 22.683594 16.851563 22.941406 16.554688 23.003906 16.199219 C 23.070313 15.839844 22.9375 15.472656 22.65625 15.246094 C 22.65625 15.246094 21.207031 14 19 14 Z "></path>\n            </g>\n          </svg> Nothing found.\n        </div>'}},{key:"toggleSearchbar",value:function(){!0===!this.state.isSearchOpen?(document.getElementById("search-container").style.position="fixed",document.querySelector("#navbar-search-icon path").style.fill="#20232a",document.querySelector(".collapse.show.navbar-collapse").style.overflow="hidden",document.getElementById("navbar-search").focus(),document.body.style.overflow="hidden",this.setState({isSearchResultsOpen:!0})):(document.getElementById("search-container").style.position="unset",document.getElementById("search-results").style.display="none",document.querySelector("#navbar-search-icon path").style.fill="#ffffff",document.querySelector(".collapse.show.navbar-collapse").style.overflow="auto",document.body.style.overflow="auto",this.setState({isSearchResultsOpen:!1})),this.setState({isSearchOpen:!this.state.isSearchOpen})}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(k.a,{maxLength:40,style:window.innerWidth<860&&{display:this.state.isSearchOpen?"block":"none",position:"fixed",right:0,top:0,left:0,width:"100%",backgroundColor:"rgb(255, 255, 255)",color:"rgb(32, 35, 42)",height:40,zIndex:1,borderRadius:0,borderBottom:"1px solid #d0d2d7"}||{display:"inline",width:"unset"},className:window.innerWidth<860?this.state.isSearchOpen?"active":"":"active",autoComplete:"off",type:"text",id:"navbar-search",placeholder:"Search docs",onChange:this.onSearchChange.bind(this)}),r.a.createElement(C,{onClick:this.toggleSearchbar.bind(this)}),r.a.createElement("div",{style:1==this.state.isSearchResultsOpen&&{position:"absolute",top:40,left:0,right:0,bottom:0,backgroundColor:"#31363f",borderRadius:0,overflow:"auto",boxShadow:"-1px 1px 20px 0px rgba(0,0,0,.3)",display:"block"}||{position:"absolute",top:43,left:-4,backgroundColor:"#31363f",borderRadius:"0px 0px 5px 5px",maxHeight:350,width:500,overflow:"auto",boxShadow:"-1px 1px 20px 0px rgba(0,0,0,.3)"},id:"search-results"}))}}]),t}(r.a.Component),O=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.nav;return r.a.createElement(h.a,{style:{backgroundColor:"#20232a",position:"fixed"},id:"navbar",dark:!0,expand:"md"},r.a.createElement(g.a,null,r.a.createElement(b.a,{id:"navbar-brand",href:"/",style:{margin:"0px 10px 0 0",border:"none"}},r.a.createElement("img",{src:"data:image/png;base64,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",style:{marginRight:7},width:32,height:32,alt:"Logo"}),r.a.createElement("span",{id:"navbar-brand-title",children:"Packem"})),r.a.createElement(w.a,{isOpen:!0,navbar:!0},r.a.createElement(v.a,{id:"navbar-links-left",navbar:!0},Object.keys(e).map(function(t,a){var n=Object(_.pathToUri)(e[t])||e[t].replace(/^\./,"");return r.a.createElement(f.a,{key:"nav-item-"+a},r.a.createElement(E.a,{className:n===window.location.pathname||window.location.pathname.includes(n)&&"/"!==n?"active":"",href:n,children:t}))})),r.a.createElement(v.a,{style:{alignItems:"center"},className:"ml-auto",navbar:!0},r.a.createElement(f.a,{id:"search-container"},r.a.createElement(S,null)),r.a.createElement(f.a,null,r.a.createElement(E.a,{id:"nav-link-version",href:"javascript:void(0)",children:"v0.1.0"})),r.a.createElement(f.a,null,r.a.createElement(E.a,{id:"nav-link-git",href:"http://github.com/packem/packem",target:"_blank"},"GitHub"," ",r.a.createElement("svg",{x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15",style:{verticalAlign:-3,marginLeft:3}},r.a.createElement("path",{fill:"currentColor",d:"\r M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,\r 0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z\r "}),r.a.createElement("polygon",{fill:"currentColor",points:"\r 45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,\r 14.9 62.8,22.9 71.5,22.9\r "}))))))))}}]),t}(r.a.Component),D=JSON.parse('{"/":"/partials/fIUdI--JSN65uo-F.html","null":null}'),A=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={content:""},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){var e=this,t=this.props.location.pathname,a="/"!==t?D[t]:D[Object.keys(D)[0]];fetch(a).then(function(e){return e.text()}).then(function(t){return e.setState({content:t})}).catch(function(e){return console.error(e)})}},{key:"render",value:function(){return r.a.createElement("div",{id:"page",dangerouslySetInnerHTML:{__html:this.state.content},style:{marginTop:49,minHeight:"calc(100vh - 49px)"},md:"8"})}}]),t}(n.Component),W=a(24),M=a(74),y=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("footer",{id:"footer"},r.a.createElement(g.a,null,r.a.createElement(M.a,{dangerouslySetInnerHTML:{__html:'<div style="color: #fff; text-align: center;">&copy; Copyright 2019</div>'}})))}}]),t}(n.Component);a(63);Object(_.loadCodeBlockAssets)();var q=JSON.parse('{"Home":"./index.html","Docs":"./docs/"}');window.searchables=JSON.parse('{"/docs/welcome":[{"permalink":"welcome","title":"Welcome"},{"permalink":"welcome","title":"Welcome"},{"permalink":"welcome","title":"Welcome"},{"permalink":"welcome","title":"Welcome"},{"permalink":"welcome","title":"Welcome"},{"permalink":"welcome","title":"Welcome"},{"permalink":"welcome","title":"Welcome"},{"permalink":"welcome","title":"Welcome"},{"permalink":"welcome","title":"Welcome"},{"permalink":"welcome","title":"Welcome"},{"permalink":"welcome","title":"Welcome"},{"permalink":"welcome","title":"Welcome"},{"permalink":"welcome","title":"Welcome"},{"permalink":"welcome","title":"Welcome"},{"permalink":"welcome","title":"Welcome"},{"permalink":"welcome","title":"Welcome"},{"permalink":"welcome","title":"Welcome"},{"permalink":"welcome","title":"Welcome"},{"permalink":"welcome","title":"Welcome"},{"permalink":"welcome","title":"Welcome"},{"permalink":"welcome","title":"Welcome"},{"permalink":"welcome","title":"Welcome"},{"permalink":"welcome","title":"Welcome"},{"permalink":"welcome","title":"Welcome"},{"permalink":"welcome","title":"Welcome"},{"permalink":"welcome","title":"Welcome"},{"permalink":"welcome","title":"Welcome"}],"/docs/getting-started/getting-started":[{"permalink":"getting-started","title":"Getting Started"},{"permalink":"short-history","title":"Short History"}],"/docs/getting-started/installation-setup":[{"permalink":"installation-and-setup","title":"Installation and Setup"}],"/docs/advanced-guide/compilem":[{"permalink":"compilem-the-compiler","title":"Compilem, The Compiler"}]}');var P=Object.keys(JSON.parse('{"/":"/partials/fIUdI--JSN65uo-F.html","null":null}')),K=Object.keys(JSON.parse('{"/docs/welcome":"/partials/njZoSz8lm3zZv4EN.html","/docs/getting-started/getting-started":"/partials/b2DeoMCamxN_ERoh.html","/docs/getting-started/installation-setup":"/partials/XGthvbhfqPS1wHQK.html","/docs/getting-started/configuration":"/partials/zgNRBog6n4htMO4j.html","/docs/getting-started/extending-example-project":"/partials/f_RmIJgHc4QaFWnr.html","/docs/getting-started/creating-production-build":"/partials/Yn2huXJq3JMhQrdQ.html","/docs/advanced-guide/compilem":"/partials/oE9krt_rBoGGn35l.html"}'));!function(){var e=document.createElement("style");e.type="text/css",e.textContent="#main-content a,\n#page a {\n  color: #212529 !important;\n  background-color: hsl(42.10000000000002, 92.4%, 76.5%) !important;\n}\n\n#page .btn-link-arrow,\n#footer a {\n  color: hsl(42.10000000000002, 92.4%, 76.5%) !important;\n}\n\n#main-content a:hover,\n#page a:hover,\n#page a.btn-link,\na.btn-link,\n.accordion__body a.active::before {\n  background-color: #f7bd35 !important;\n}\n\n#page .btn-link-arrow:hover,\n#navbar a:hover:not(#navbar-brand),\n#navbar #navbar-brand,\n#navbar-links-left a:hover,\n#navbar-links-left a.active,\ndiv#search-results a:focus,\n#footer a:hover,\n#sidebar-fab,\n.page-previous > span,\n.page-next > span {\n  color: #f7bd35 !important;\n}\n\n#navbar-links-left a:hover,\n#navbar-links-left a.active {\n  border-bottom-color: #f7bd35 !important;\n}\n\n#page .btn-link-arrow, #page .btn-link-arrow:hover {\n  background-color: transparent !important;\n}\n\n#loader {\n  stroke: #f7bd35 !important;\n}\n\n#navbar, #footer {\n  background-color: #222222 !important;\n}\n\ninput#navbar-search:focus,\n#navbar a:focus:not(#navbar-brand) {\n  background-color: hsl(0, 0%, 25.3%) !important;\n}\n\n#pagination, #search-results {\n  background-color: hsl(0, 0%, 20%) !important;\n}",document.head.appendChild(e)}();var V=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(p.a,null,r.a.createElement("div",{id:"app"},r.a.createElement(O,{nav:q}),r.a.createElement(u.a,{path:"/",exact:!0,component:A}),P.map(function(e,t){return"/"!==e&&r.a.createElement(u.a,{key:"nav-paths-"+t,path:e,component:A})}),r.a.createElement(u.a,{path:"/docs",exact:!0,component:W.a}),K.map(function(e,t){return r.a.createElement(u.a,{key:"doc-paths-"+t,path:e,exact:!0,component:W.a})}),r.a.createElement(y,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(V,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[38,2,1]]]);
//# sourceMappingURL=main.9da37912.chunk.js.map
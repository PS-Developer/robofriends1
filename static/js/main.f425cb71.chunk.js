(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(7),s=n.n(c),o=(n(12),n(2)),a=n(3),i=n(5),h=n(4),l=n(0),b=function(e){var t=e.name,n=e.email,r=e.id;return Object(l.jsxs)("div",{className:"bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(l.jsx)("img",{alt:"robots",src:"https://robohash.org/".concat(r,"?size=200x200")}),Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:t}),Object(l.jsx)("p",{children:n})]})]})},u=function(e){var t=e.robots;return Object(l.jsx)("div",{children:t.map((function(e,n){return Object(l.jsx)(b,{id:t[n].id,name:t[n].name,email:t[n].email},n)}))})},d=function(e){e.searchfield;var t=e.searchChange;return Object(l.jsx)("div",{className:"pa2",children:Object(l.jsx)("input",{className:"pa2 ba b--green bg-lightest-blue",type:"search",placeholder:"Search Robots",onChange:t})})},j=function(e){Object(i.a)(n,e);var t=Object(h.a)(n);function n(e){var r;return Object(o.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(a.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(l.jsx)("h1",{children:"Ooops. That is not good"}):this.props.children}}]),n}(r.Component),f=function(e){return Object(l.jsx)("div",{style:{overflowY:"scroll",border:"1px solid black",height:"500px"},children:e.children})},O=(n(14),function(e){Object(i.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(a.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this,t=this.state.robots.filter((function(t){return t.name.toLowerCase().includes(e.state.searchfield.toLowerCase())}));return 0===this.state.robots.length?Object(l.jsx)("h1",{children:"Loading"}):Object(l.jsxs)("div",{className:"tc",children:[Object(l.jsx)("h1",{className:"f1",children:"RoboFriends"}),Object(l.jsx)(d,{searchChange:this.onSearchChange}),Object(l.jsx)(f,{children:Object(l.jsx)(j,{children:Object(l.jsx)(u,{robots:t})})})]})}}]),n}(r.Component)),p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),r(e),c(e),s(e),o(e)}))};n(15);s.a.render(Object(l.jsx)(O,{}),document.getElementById("root")),p()}},[[16,1,2]]]);
//# sourceMappingURL=main.f425cb71.chunk.js.map
(this.webpackJsonpbluestacks=this.webpackJsonpbluestacks||[]).push([[0],{11:function(e,t,a){e.exports=a.p+"static/media/logo.66adda61.png"},12:function(e,t,a){e.exports=a(24)},17:function(e,t,a){},18:function(e,t,a){},24:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(10),c=a.n(r),s=(a(17),a(18),a(11)),i=a.n(s),u=(a(19),a(20),a(9),a(1)),o=a.n(u),m=a(2),h=a(3),d=a(4),E=a(6),b=a(5),p=a(7),v=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(E.a)(this,Object(b.a)(t).call(this,e))).state={allData:""},a}return Object(p.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=Object(m.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://rohitchaudhary701.github.io/bluestack/events.json",e.next=3,fetch("https://rohitchaudhary701.github.io/bluestack/events.json");case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,this.setState({allData:a.data});case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"renderTableData",value:function(){var e=this.state.allData,t=[];Object.keys(e).map((function(a,n){t.push(e[a])}));var a=new Date,n=Date.parse(a),r=new Date(n).getDate();a=new Date(n).getMonth()+1+"/"+r+"/"+new Date(n).getFullYear(),n=Date.parse(a);return t.map((function(e,t){if(e.createdOn>n){var a=new Date(e.createdOn).getDate(),r=new Date(e.createdOn).getMonth()+1+"/"+a+"/"+new Date(e.createdOn).getFullYear();return l.a.createElement("tr",{key:t},l.a.createElement("td",null,r),l.a.createElement("td",null,e.name),l.a.createElement("td",null,e.region),l.a.createElement("td",null,e.price),l.a.createElement("td",null,e.csv))}}))}},{key:"render",value:function(){return l.a.createElement("div",{className:"tab-pane fade show active",id:"upcoming",role:"tabpanel","aria-labelledby":"upcoming-tab",onClick:this.changeData},"Upcoming",l.a.createElement("table",{className:"table"},l.a.createElement("thead",{className:"thead-dark"},l.a.createElement("tr",null,l.a.createElement("th",null,"DATE"),l.a.createElement("th",null,"CAMPAIGN"),l.a.createElement("th",null,"VIEW"),l.a.createElement("th",null,"ACTIONS"),l.a.createElement("th",null,"CSV"),l.a.createElement("th",null),l.a.createElement("th",null),l.a.createElement("th",null))),l.a.createElement("tbody",null,this.renderTableData())))}}]),t}(l.a.Component),g=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(E.a)(this,Object(b.a)(t).call(this,e))).state={allData:""},a}return Object(p.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=Object(m.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://rohitchaudhary701.github.io/bluestack/events.json",e.next=3,fetch("https://rohitchaudhary701.github.io/bluestack/events.json");case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,this.setState({allData:a.data});case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"renderTableData",value:function(){var e=this.state.allData,t=[];Object.keys(e).map((function(a,n){t.push(e[a])}));var a=new Date,n=Date.parse(a),r=new Date(n).getDate();a=new Date(n).getMonth()+1+"/"+r+"/"+new Date(n).getFullYear();console.log(a);n=Date.parse(a);return console.log(n),t.map((function(e,t){if(e.createdOn==n){var a=new Date(e.createdOn).getDate(),r=new Date(e.createdOn).getMonth()+1+"/"+a+"/"+new Date(e.createdOn).getFullYear();return l.a.createElement("tr",{key:t},l.a.createElement("td",null,r),l.a.createElement("td",null,e.name),l.a.createElement("td",null,e.region),l.a.createElement("td",null,e.price),l.a.createElement("td",null,e.csv))}}))}},{key:"render",value:function(){return l.a.createElement("div",{className:"tab-pane fade",id:"live",role:"tabpanel","aria-labelledby":"upcoming-tab",onClick:this.changeData},"Live",l.a.createElement("table",{className:"table"},l.a.createElement("thead",{className:"thead-dark"},l.a.createElement("tr",null,l.a.createElement("th",null,"DATE"),l.a.createElement("th",null,"CAMPAIGN"),l.a.createElement("th",null,"VIEW"),l.a.createElement("th",null,"ACTIONS"),l.a.createElement("th",null,"CSV"),l.a.createElement("th",null),l.a.createElement("th",null),l.a.createElement("th",null))),l.a.createElement("tbody",null,this.renderTableData())))}}]),t}(l.a.Component),D=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(E.a)(this,Object(b.a)(t).call(this,e))).state={allData:""},a}return Object(p.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=Object(m.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://rohitchaudhary701.github.io/bluestack/events.json",e.next=3,fetch("https://rohitchaudhary701.github.io/bluestack/events.json");case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,this.setState({allData:a.data});case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"renderTableData",value:function(){var e=this.state.allData,t=[];Object.keys(e).map((function(a,n){t.push(e[a])}));var a=new Date,n=Date.parse(a),r=new Date(n).getDate();a=new Date(n).getMonth()+1+"/"+r+"/"+new Date(n).getFullYear(),n=Date.parse(a);return t.map((function(e,t){if(e.createdOn<n){var a=n-e.createdOn,r=Math.ceil(a/1e3/60/60/24),c=new Date(e.createdOn).getDate(),s=new Date(e.createdOn).getMonth()+1+"/"+c+"/"+new Date(e.createdOn).getFullYear();return l.a.createElement("tr",{key:t},l.a.createElement("td",null,s," (",r," ago )"),l.a.createElement("td",null,e.name),l.a.createElement("td",null,e.region),l.a.createElement("td",null,e.price),l.a.createElement("td",null,e.csv))}}))}},{key:"render",value:function(){return l.a.createElement("div",{className:"tab-pane fade ",id:"past",role:"tabpanel","aria-labelledby":"upcoming-tab",onClick:this.changeData},"Past",l.a.createElement("table",{className:"table"},l.a.createElement("thead",{className:"thead-dark"},l.a.createElement("tr",null,l.a.createElement("th",null,"DATE"),l.a.createElement("th",null,"CAMPAIGN"),l.a.createElement("th",null,"VIEW"),l.a.createElement("th",null,"ACTIONS"),l.a.createElement("th",null,"CSV"),l.a.createElement("th",null),l.a.createElement("th",null),l.a.createElement("th",null))),l.a.createElement("tbody",null,this.renderTableData())))}}]),t}(l.a.Component);var f=function(){return l.a.createElement("div",{className:"App"},l.a.createElement("header",null,l.a.createElement("div",{className:"container"},l.a.createElement("a",{className:"logo",href:"/"},l.a.createElement("img",{src:i.a,alt:"logo"})))),l.a.createElement("div",{className:"container"},l.a.createElement("h2",{className:"main-heading"},"Manage Campaigns"),l.a.createElement("ul",{className:"nav nav-tabs",id:"myTab",role:"tablist"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link active",id:"upcoming-tab","data-toggle":"tab",href:"#upcoming",role:"tab","aria-controls":"upcoming","aria-selected":"true"},"Upcoming Campaigns")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",id:"live-tab","data-toggle":"tab",href:"#live",role:"tab","aria-controls":"live","aria-selected":"false"},"Live")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",id:"contact-tab","data-toggle":"tab",href:"#past",role:"tab","aria-controls":"contact","aria-selected":"false"},"Past Campaigns"))),l.a.createElement("div",{className:"tab-content",id:"myTabContent"},l.a.createElement(v,null),l.a.createElement(g,null),l.a.createElement(D,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[12,1,2]]]);
//# sourceMappingURL=main.584012d2.chunk.js.map
(this["webpackJsonpnba-scoreboard"]=this["webpackJsonpnba-scoreboard"]||[]).push([[0],{13:function(e,a,t){},14:function(e,a,t){"use strict";t.r(a);var n=t(0),m=t.n(n),o=t(7),r=t.n(o),c=t(1),l=t(2),i=t(4),s=t(3),h=t(5),u=function(e){Object(i.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(c.a)(this,t);for(var n=arguments.length,m=new Array(n),o=0;o<n;o++)m[o]=arguments[o];return(e=a.call.apply(a,[this].concat(m))).state={favoriteTeam:""},e.handleChange=function(a){e.setState({favoriteTeam:a.target.value})},e.handleSubmit=function(a){a.preventDefault(),e.props.setFavoriteTeam(e.state.favoriteTeam)},e}return Object(l.a)(t,[{key:"render",value:function(){return m.a.createElement(m.a.Fragment,null,m.a.createElement("h1",{id:"page-title"},"NBA Scoreboard - ",this.props.date),m.a.createElement("form",{onSubmit:this.handleSubmit},m.a.createElement("select",{defaultValue:"DEFAULT",onChange:this.handleChange},m.a.createElement("option",{disabled:!0,value:"DEFAULT"},"Choose Team"),this.props.teams.map((function(e,a){return m.a.createElement("option",{key:a},e)}))),m.a.createElement("input",{type:"submit",value:"Choose Favorite Team"})))}}]),t}(n.Component),d=function(e){Object(i.a)(t,e);var a=Object(s.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){var e=this.props,a=e.awayTeam,t=e.awayNickname,n=e.awayScore,o=e.homeTeam,r=e.homeNickname,c=e.homeScore,l=e.handleExpand,i=e.isExpanded;return m.a.createElement("div",{className:"game-headline"},m.a.createElement("svg",{height:"40",width:"40"},m.a.createElement("polygon",{points:"20,0 8,40 40,16 0,16 32,40"})),m.a.createElement("div",{className:"away-team-div"},m.a.createElement("h3",{className:"away-team"},m.a.createElement("strong",null,a)," ",t),m.a.createElement("h4",null,n)),m.a.createElement("div",{className:"home-team-div"},m.a.createElement("h3",{className:"home-team"},m.a.createElement("strong",null,o)," ",r),m.a.createElement("h4",null,c)),m.a.createElement("button",{className:"expand-button",onClick:function(){return l()}},i?"Hide Details":"Show Details"))}}]),t}(n.PureComponent),E=function(e){var a=e.awayNickname,t=e.awayQ1,n=e.awayQ2,o=e.awayQ3,r=e.awayQ4,c=e.awayScore,l=e.homeNickname,i=e.homeQ1,s=e.homeQ2,h=e.homeQ3,u=e.homeQ4,d=e.homeScore,E=e.location,p=e.tipTime;return m.a.createElement("div",{className:"game-details"},m.a.createElement("table",{className:"box-score"},m.a.createElement("thead",null,m.a.createElement("tr",null,m.a.createElement("th",null),m.a.createElement("th",null,"Q1"),m.a.createElement("th",null,"Q2"),m.a.createElement("th",null,"Q3"),m.a.createElement("th",null,"Q4"),m.a.createElement("th",null,"Final"))),m.a.createElement("tbody",null,m.a.createElement("tr",null,m.a.createElement("th",null,a),m.a.createElement("td",null,t),m.a.createElement("td",null,n),m.a.createElement("td",null,o),m.a.createElement("td",null,r),m.a.createElement("th",null,c)),m.a.createElement("tr",null,m.a.createElement("th",null,l),m.a.createElement("td",null,i),m.a.createElement("td",null,s),m.a.createElement("td",null,h),m.a.createElement("td",null,u),m.a.createElement("th",null,d)))),m.a.createElement("div",{className:"details-text"},m.a.createElement("p",{className:"game-location"},E),m.a.createElement("p",{className:"game-tip-time"},p)))},p=function(e){Object(i.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(c.a)(this,t);for(var n=arguments.length,m=new Array(n),o=0;o<n;o++)m[o]=arguments[o];return(e=a.call.apply(a,[this].concat(m))).state={isExpanded:!1},e.handleExpand=function(){e.setState((function(e){return{isExpanded:!e.isExpanded}}))},e}return Object(l.a)(t,[{key:"render",value:function(){var e,a=this.props,t=a.awayTeam,n=a.awayNickname,o=a.awayScore,r=a.homeTeam,c=a.homeNickname,l=a.homeScore,i=a.awayQ1,s=a.awayQ2,h=a.awayQ3,u=a.awayQ4,p=a.homeQ1,T=a.homeQ2,y=a.homeQ3,w=a.homeQ4,v=a.location,q=a.tipTime,k=a.favoriteGame;return this.state.isExpanded&&(e=m.a.createElement(E,{awayNickname:n,homeNickname:c,awayScore:o,homeScore:l,awayQ1:i,awayQ2:s,awayQ3:h,awayQ4:u,homeQ1:p,homeQ2:T,homeQ3:y,homeQ4:w,location:v,tipTime:q})),m.a.createElement("div",{className:k?"game favorite-game":"game"},m.a.createElement(d,{awayTeam:t,awayNickname:n,awayScore:o,homeNickname:c,homeTeam:r,homeScore:l,isExpanded:this.state.isExpanded,handleExpand:this.handleExpand}),e)}}]),t}(n.PureComponent),T=function(e){Object(i.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(c.a)(this,t);for(var n=arguments.length,m=new Array(n),o=0;o<n;o++)m[o]=arguments[o];return(e=a.call.apply(a,[this].concat(m))).state={favoriteTeam:"",teams:[]},e.setFavoriteTeam=function(a){e.setState({favoriteTeam:a})},e}return Object(l.a)(t,[{key:"componentDidMount",value:function(){for(var e=[],a=0;a<h.games.length;a++)e.push(h.games[a].awayTeam.nickname),e.push(h.games[a].homeTeam.nickname);e=e.sort(),this.setState({teams:e})}},{key:"render",value:function(){var e=this;return m.a.createElement("div",{className:"App"},m.a.createElement(u,{date:h.date,teams:this.state.teams,setFavoriteTeam:this.setFavoriteTeam}),h.games.map((function(a,t){return m.a.createElement(p,{awayTeam:a.awayTeam.name,awayNickname:a.awayTeam.nickname,awayScore:a.awayTeam.score,homeTeam:a.homeTeam.name,homeNickname:a.homeTeam.nickname,homeScore:a.homeTeam.score,awayQ1:a.awayTeam.q1,awayQ2:a.awayTeam.q2,awayQ3:a.awayTeam.q3,awayQ4:a.awayTeam.q4,homeQ1:a.homeTeam.q1,homeQ2:a.homeTeam.q2,homeQ3:a.homeTeam.q3,homeQ4:a.homeTeam.q4,key:t,index:t,location:a.location,tipTime:a.tipTimeEastern,favoriteGame:e.state.favoriteTeam===a.homeTeam.nickname||e.state.favoriteTeam===a.awayTeam.nickname})})))}}]),t}(n.Component);t(13),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(m.a.createElement(m.a.StrictMode,null,m.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},5:function(e){e.exports=JSON.parse('{"games":[{"tipTimeEastern":"1:00 PM ET","awayTeam":{"name":"Miami","nickname":"Heat","score":"125","q1":"28","q2":"28","q3":"38","q4":"31"},"homeTeam":{"name":"Denver","nickname":"Nuggets","score":"105","q1":"26","q2":"31","q3":"22","q4":"26"},"location":"HP Field House - Orlando, FL","tvNetwork":"ESPN"},{"tipTimeEastern":"3:30 PM ET","awayTeam":{"name":"Utah","nickname":"Jazz","score":"94","q1":"15","q2":"27","q3":"20","q4":"32"},"homeTeam":{"name":"Oklahoma City","nickname":"Thunder","score":"110","q1":"29","q2":"37","q3":"20","q4":"24"},"location":"The Arena (WWOS) - Orlando, FL","tvNetwork":"ESPN"},{"tipTimeEastern":"6:00 PM ET","awayTeam":{"name":"New Orleans","nickname":"Pelicans","score":"103","q1":"25","q2":"20","q3":"21","q4":"37"},"homeTeam":{"name":"Los Angeles","nickname":"Clippers","score":"126","q1":"37","q2":"40","q3":"26","q4":"23"},"location":"HP Field House - Orlando, FL","tvNetwork":"ESPN"},{"tipTimeEastern":"7:00 PM ET","awayTeam":{"name":"Philadelphia","nickname":"76ers","score":"121","q1":"29","q2":"26","q3":"32","q4":"34"},"homeTeam":{"name":"Indiana","nickname":"Pacers","score":"127","q1":"35","q2":"26","q3":"20","q4":"46"},"location":"VISA Athletic Center - Orlando, FL","tvNetwork":"None"},{"tipTimeEastern":"8:30 PM ET","awayTeam":{"name":"Los Angeles","nickname":"Lakers","score":"92","q1":"21","q2":"23","q3":"26","q4":"22"},"homeTeam":{"name":"Toronto","nickname":"Raptors","score":"107","q1":"23","q2":"18","q3":"31","q4":"35"},"location":"The Arena (WWOS) - Orlando, FL","tvNetwork":"ESPN"}],"date":"08/01/20"}')},8:function(e,a,t){e.exports=t(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.c0f054a3.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{118:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANAAAAAlCAYAAAAz+2feAAAABHNCSVQICAgIfAhkiAAAA9VJREFUeJzt3c1rXGUUBvDnOffeiYlNg6RJoNRSuhC7FYINtBRFsOCm4MeyKlXjxoVgN/4HfuA2rSYI6kpXbgRX2YkbNy1ihCq0KtLENGlammbuvedxMTNJM814p350pvb8NgPzvvfOuYvD+3UuQzTN5ctTMj9sRTJRmh8kkKEDASJsAfQfO/UJ4V7h1CBLTZG2e8d295KwXTSueVrMvcaJr1ttBICz60tPZFm6372cBjDV7Q9LukSzz5HqCyC5/I+fJIS7RKBZqWNeFs+TfApArftr8Y1nem6aY79zLl+eEm1CZfEOyUe2+uCCgEskrlXekHQjvpf00998nhDuGtGGVPqUEcN/1c/dS4MNwzACxwSIA5v3EC6N1EYfTQvzw2nhi2gmj6CfmdWefoUjF/7rBwmhh2a67XhWytLyykugJ17iPYK7SOxfy6+8bmmZ1EU81uiqmwPZA1ORPCFsmSbzU+noR5CVcr7d+l7wSZP5dTTXQgLOnOTwYs8iDaGPpXV9laa2srlUEYcMAASMA4AZ5nsYXwh9bXBwdEnCPpfml5avQsBgI4GEbGn5KlzJSq+DDKFfvUDWBWee+/q5hYsgVBgA5EWRnlu4CKBMehxjCH3PoebMjY0E2kLb6YIQwhYDDAAIbE+gpNkQQuhMzU03mJeRMCHcMTWWOmqbwhVgrIFCqMDmCHTbFM5aQ1MIoTOyuYmg7QkkxiZCCF1ojkDJ9gRijEAhVCKtWbmj9gSKc6AQqgjeGmjaz4FCCFVM6rAGioPUECq1zoEo255AHmugECppsxJB7ZUIMQKFUKW12eaISoQQ7hjBxhTO2ioRVEYtXAjd8vYpXAihmjqV8iiBehNSCPee294HMkQChVBNDgBU2xSubDaEEKpph2rsGIFCqFY2PtL2TQTL734sIdxb0trAjSOTh2CtXbgsSzeOTB6Cidd7HVwIfUsiLdlIhLWBWra1jW3g+kAtg1O7eh1jCP1qZn15r0pfA/UgsEMtnNxP9ya0EPpfmuDxPOMPgp4FACbaMIoHIP0KAASOfZj/8aWkKCoN4RazxcoJJSqy3M8QHAeAxPULP86Xj28496T0T1udCZx3w/sS4z9/wn2LUE7aOKAhOXZT/gbIgwAg6PJv2Z69BIDZ+uKLkj1J4mQ3N5bwmYwzFOLcKPwvJFmyz+v5ByAf7qJ7ndTxU9nY/OZUbbZYOQEvnpFwVNQBgw3scOENUe8K9u2/F3oI/SFhNuC+8RbBox26rAI8L/ibr9bGvgPaXqD7RNfGb9brY6z4564Q7ieE3DOtZkgXX+ZDq7e2/QlFk335szvsEwAAAABJRU5ErkJggg=="},119:function(e,t,a){"use strict";a.d(t,"a",function(){return r}),a.d(t,"c",function(){return s}),a.d(t,"b",function(){return i});var n=a(27),r=function(e){return{type:n.c,username:e}},s=function(e){return{type:n.a,question:e}},i=function(e){return{type:n.b,group:e}}},161:function(e,t,a){},230:function(e,t,a){"use strict";a.r(t);var n=a(3),r=a.n(n),s=a(16),i=a(10),u=a(11),c=a(14),o=a(13),A=a(15),m=a(1),g=a.n(m),l=(a(161),a(35),a(22)),p=a(118),f=a.n(p),h=a(94),C=a(119),b=a(36),E=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,u=new Array(n),A=0;A<n;A++)u[A]=arguments[A];return(a=Object(c.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(u)))).state={username:"",registerFailed:!1,leave:!0},a.handleInput=function(e){a.setState({username:e.target.value})},a.login=Object(s.a)(r.a.mark(function e(){var t,n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t={username:a.state.username},e.next=3,b.a.postUserName(t);case 3:0===(n=e.sent).status?(a.setState({registerFailed:!0}),setTimeout(function(){a.setState({registerFailed:!1})},3e3),a.props.history.push()):1===n.status&&(a.props.hasRegister(a.state.username),a.setState({leave:!1}),setTimeout(function(){a.props.history.replace("/guide")},500));case 5:case"end":return e.stop()}},e)})),a}return Object(A.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return g.a.createElement(h.a,{in:this.state.leave,appear:!0,classNames:"fade",timeout:500},g.a.createElement("div",{className:"home"},g.a.createElement("img",{src:"http://wx1.sinaimg.cn/mw690/005JHgrHgy1g677dcu4wzj30af0ijtaw.jpg",alt:"\u80cc\u666f"}),g.a.createElement("div",{className:"input"},g.a.createElement("img",{src:f.a,alt:"input"}),g.a.createElement("div",{className:"relative"},g.a.createElement("div",null,"\u7528\u6237\u540d:"),g.a.createElement("input",{onChange:this.handleInput}))),this.state.registerFailed?g.a.createElement("p",null,"\u8be5\u7528\u6237\u540d\u5df2\u88ab\u5360\u7528\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165"):"",g.a.createElement("button",{onClick:this.login},"\u8fdb\u5165\u6e38\u620f")))}}]),t}(m.Component);t.default=Object(l.b)(null,function(e){return{hasRegister:function(t){return e(Object(C.a)(t))}}})(E)}}]);
//# sourceMappingURL=9.fb09546d.chunk.js.map
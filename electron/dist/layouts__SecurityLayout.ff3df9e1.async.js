(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"0jlH":function(L,u,t){"use strict";t.r(u);var i=t("nKUr"),R=t.n(i),E=t("1OyB"),O=t("vuIU"),D=t("Ji7U"),v=t("LK+K"),M=t("q1tI"),m=t.n(M),P=t("95SA"),h=t("WHYC"),p=t("9kvl"),l=t("s4NR"),f=t.n(l),y=function(_){Object(D.a)(e,_);var o=Object(v.a)(e);function e(){var s;Object(E.a)(this,e);for(var r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return s=o.call.apply(o,[this].concat(n)),s.state={isReady:!1},s}return Object(O.a)(e,[{key:"componentDidMount",value:function(){this.setState({isReady:!0});var r=this.props.dispatch;r&&r({type:"user/fetchCurrent"})}},{key:"render",value:function(){var r=this.state.isReady,n=this.props,a=n.children,U=n.loading,c=n.currentUser,d=c&&c.userid,C=Object(l.stringify)({redirect:window.location.href});return!d&&U||!r?Object(i.jsx)(P.a,{"data-inspector-line":"46","data-inspector-column":"13","data-inspector-relative-path":"src\\\\layouts\\\\SecurityLayout.tsx"}):!d&&window.location.pathname!=="/user/login"?Object(i.jsx)(h.c,{to:"/user/login?".concat(C),"data-inspector-line":"49","data-inspector-column":"13","data-inspector-relative-path":"src\\\\layouts\\\\SecurityLayout.tsx"}):a}}]),e}(m.a.Component);u.default=Object(p.c)(function(_){var o=_.user,e=_.loading;return{currentUser:o.currentUser,loading:e.models.user}})(y)}}]);
(window["webpackJsonpgoit-react-hw-03-image-finder"]=window["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{2:function(e,t,a){e.exports={photo__card:"PhotoCard_photo__card__3B6xp",stats:"PhotoCard_stats__2KZP-",stats__item:"PhotoCard_stats__item__teAe7",fullscreen__button:"PhotoCard_fullscreen__button___ed4G"}},22:function(e,t,a){e.exports={app:"App_app__KOCR5"}},23:function(e,t,a){e.exports={"search-form":"SearchForm_search-form__fSP6V"}},25:function(e,t,a){e.exports=a(48)},30:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(20),c=a.n(o),l=(a(30),a(10)),i=a(21),s=a(3),u=a(4),m=a(6),p=a(5),h=a(7),f=a(22),d=a.n(f),_=a(8),y=a.n(_),v=a(9),g=a.n(v),b=function(e){function t(){var e,a;Object(s.a)(this,t);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).overlayRef=Object(n.createRef)(),a.handleKeyPress=function(e){"Escape"===e.code&&a.props.onClose()},a.handleOverlayClick=function(e){var t=a.overlayRef.current;t&&e.target!==t||a.props.onClose()},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyPress)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyPress)}},{key:"render",value:function(){var e=this.props.fullScreenPicture;return r.a.createElement("div",{role:"presentation",className:g.a.overlay,onClick:this.handleOverlayClick,ref:this.overlayRef},r.a.createElement("div",{className:g.a.modal},r.a.createElement("img",{src:e.largeImageURL,alt:e.tags})))}}]),t}(n.Component),O=a(2),E=a.n(O),w=function(e){var t=e.totalHits,a=e.pictureZoom;return r.a.createElement(r.a.Fragment,null,t&&t.map((function(e){return r.a.createElement("div",{className:E.a.photo__card,key:e.id},r.a.createElement("img",{src:e.webformatURL,alt:e.tags}),r.a.createElement("div",{className:E.a.stats},r.a.createElement("p",{className:E.a.stats__item},r.a.createElement("i",{className:"material-icons"},"thumb_up"),e.likes),r.a.createElement("p",{className:E.a.stats__item},r.a.createElement("i",{className:"material-icons"},"visibility"),e.views),r.a.createElement("p",{className:E.a.stats__item},r.a.createElement("i",{className:"material-icons"},"comment"),e.comments),r.a.createElement("p",{className:E.a.stats__item},r.a.createElement("i",{className:"material-icons"},"cloud_download"),e.downloads)),r.a.createElement("button",{type:"button",className:E.a.fullscreen__button,onClick:function(){return a(e)}},r.a.createElement("i",{className:"material-icons"},"zoom_out_map")))})))},C=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={isLarge:!1,fullScreenPicture:""},a.pictureZoom=function(e){a.setState({isLarge:!0,fullScreenPicture:e})},a.onClose=function(){a.setState({isLarge:!1})},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.totalHits,a=e.handleClick,n=this.state,o=n.isLarge,c=n.fullScreenPicture;return r.a.createElement("div",{className:y.a.GalleryWrapper},r.a.createElement("ul",{className:y.a.gallery},r.a.createElement(w,{totalHits:t,pictureZoom:this.pictureZoom}),o&&r.a.createElement(b,{onClose:this.onClose,fullScreenPicture:c})),r.a.createElement("button",{type:"button",className:y.a.button,onClick:a},"Load More"))}}]),t}(n.Component),j=a(23),k=a.n(j),P=function(e){var t=e.onChange;return r.a.createElement("div",{className:"SearchFormWrapper",onSubmit:t},r.a.createElement("form",{className:k.a.search__form},r.a.createElement("input",{type:"text",autoComplete:"off",placeholder:"Search images..."})))},N=a(24),S=a.n(N),x="https://pixabay.com/api/?key=14161279-eaec42196a52c7ac05c722c91&image_type=photo&orientation=horizontal&",H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return S.a.get("".concat(x,"&q=").concat(e,"&page=").concat(t,"&per_page=12")).then((function(e){return e.data}))};function L(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function D(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?L(a,!0).forEach((function(t){Object(i.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):L(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var q=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={query:"",page:1,totalHits:[],scroll:1500},a.handleChange=function(e){e.preventDefault(),a.setState({query:e.target.firstChild.value}),e.target.reset()},a.handleClick=function(){a.state.query&&a.setState((function(e){return D({},e,{page:e.page+1})}))},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.state,a=t.query,n=t.page;a&&H(a,n).then((function(t){return e.setState({totalHits:t.hits})})).catch((function(e){return e}))}},{key:"componentDidUpdate",value:function(e,t){var a=this,n=this.state,r=n.query,o=n.page;t.query!==r&&H(r,o).then((function(e){return a.setState((function(t){return D({},t,{totalHits:e.hits,page:1})}))})).catch((function(e){return e})),t.page!==o&&r&&H(r,o).then((function(e){return a.setState((function(t){return{totalHits:[].concat(Object(l.a)(t.totalHits),Object(l.a)(e.hits)),scroll:t.scroll+1500}}))})).catch((function(e){return e})),window.scrollTo({top:t.scroll+1500,behavior:"smooth"})}},{key:"render",value:function(){var e=this.state.totalHits;return r.a.createElement("div",{className:d.a.app},r.a.createElement(P,{onChange:this.handleChange}),r.a.createElement(C,{totalHits:e,handleClick:this.handleClick}))}}]),t}(n.Component);c.a.render(r.a.createElement(q,null),document.getElementById("root"))},8:function(e,t,a){e.exports={gallery:"Gallery_gallery__1oxMX",GalleryWrapper:"Gallery_GalleryWrapper__2oCVB",button:"Gallery_button__12Av4"}},9:function(e,t,a){e.exports={overlay:"Modal_overlay__3FFX4",modal:"Modal_modal__2kZBx"}}},[[25,1,2]]]);
//# sourceMappingURL=main.4222262d.chunk.js.map
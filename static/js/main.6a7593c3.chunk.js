(window["webpackJsonpanilist-client"]=window["webpackJsonpanilist-client"]||[]).push([[0],{142:function(e,t,a){e.exports=a(229)},154:function(e,t,a){},211:function(e,t,a){},215:function(e,t,a){},226:function(e,t,a){},229:function(e,t,a){"use strict";a.r(t);var n,r,i=a(0),c=a.n(i),o=a(10),s=a.n(o),l=a(233),m=a(58),u=a(40),p=new(a(137).a)({uri:"https://graphql.anilist.co"});a(149);!function(e){e.ANIMATION_STORE="animationStore"}(n||(n={})),function(e){e.ANIMATION_LIST="/animations"}(r||(r={}));var g=function(e){var t=e.match;return c.a.createElement(u.d,null,c.a.createElement(u.b,{path:"".concat(t.path,"/:id"),component:x}),c.a.createElement(u.b,{path:"".concat(t.path),component:D}))},h=a(127),d=a(21),f=a(26),O=a(36),E=a(35),v=a(38),N=a(66),b=a(234),I=(a(154),function(e){var t=e.id,a=e.title,n=e.coverImage,i=e.genres,o=b.a.Meta;return c.a.createElement(m.b,{to:"".concat(r.ANIMATION_LIST,"/").concat(t)},c.a.createElement(b.a,{className:"simple-card",hoverable:!0,cover:c.a.createElement("img",{className:"simple-card-preview",alt:a,src:n})},c.a.createElement(o,{title:a,description:i.join(" / ").substr(0,25)})))}),A=a(236),S=function(e){function t(){return Object(d.a)(this,t),Object(O.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:this.props.className||"",style:{width:"200px",fontSize:"2em"}},"Anilist")}}]),t}(i.Component),j=(a(211),A.a.Search),P=function(e){function t(){return Object(d.a)(this,t),Object(O.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"default-layout"},c.a.createElement("header",{className:"default-header"},c.a.createElement(S,{className:"logo"}),c.a.createElement(j,{className:"search",placeholder:"input search text",onSearch:this.props.onSearch})),c.a.createElement("div",{className:"default-content-layout"},this.props.children))}}]),t}(i.Component),T=a(138),y=a(15),C=a(237),w=a(63),_=a(235),R=a(232),$=function(){return c.a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"100%"}},c.a.createElement(R.a,{size:"large",tip:"loading..."}))};a(215);function M(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function k(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?M(a,!0).forEach((function(t){Object(h.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):M(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var L=function(e){function t(){var e,a;Object(d.a)(this,t);for(var r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];return(a=Object(O.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(i)))).onSearch=function(e){a.props[n.ANIMATION_STORE].setParam(k({},a.props[n.ANIMATION_STORE].param,{page:1,search:e})),a.getList()},a.onGenreChange=function(e){var t=a.props[n.ANIMATION_STORE].param.genres;t||(t=[]),e.target.checked?t.push(e.target.value):t=t.filter((function(t){return t!=e.target.value})),a.props[n.ANIMATION_STORE].setParam(k({},a.props[n.ANIMATION_STORE].param,{page:1,genres:t})),a.getList()},a.onPageChange=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a.props[n.ANIMATION_STORE].param.perPage;a.props[n.ANIMATION_STORE].setParam(k({},a.props[n.ANIMATION_STORE].param,{page:e,perPage:t})),a.getList()},a.onSortChange=function(e){a.props[n.ANIMATION_STORE].setParam(k({},a.props[n.ANIMATION_STORE].param,{sort:e})),a.getList()},a.getList=function(){a.props[n.ANIMATION_STORE].getAnimations()},a.reset=function(){a.props[n.ANIMATION_STORE].setParam({page:1,perPage:10}),a.getList()},a}return Object(v.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){this.getList()}},{key:"render",value:function(){var e=this.props[n.ANIMATION_STORE],t=e.pageInfo,a=e.animations,r=e.isLoading,i=e.param;if(r)return c.a.createElement(P,null,c.a.createElement($,null));var o=a.map((function(e){return c.a.createElement(I,{key:e.id,id:e.id,title:e.title.romaji,coverImage:e.coverImage.large,genres:e.genres})})),s=i.genres?i.genres:[];return c.a.createElement(P,{onSearch:this.onSearch},c.a.createElement("div",{className:"content-wrap"},c.a.createElement("aside",{className:"sidebar"},c.a.createElement("div",{className:"main-title"},c.a.createElement("div",null,"Filter"),c.a.createElement(T.a,{size:"small",onClick:this.reset},"Reset",c.a.createElement(y.a,{type:"redo"}))),c.a.createElement("div",{className:"sidebar-filter border-bottom"},c.a.createElement("div",{className:"sidebar-filter-title"},"Genres"),c.a.createElement("div",{className:"sidebar-filter-item"},c.a.createElement("div",null,c.a.createElement(C.a,{onChange:this.onGenreChange,value:"Drama",checked:s.some((function(e){return"Drama"===e}))},"Drama")),c.a.createElement("div",null,c.a.createElement(C.a,{onChange:this.onGenreChange,value:"Sci-Fi",checked:s.some((function(e){return"Sci-Fi"===e}))},"Sci-Fi")),c.a.createElement("div",null,c.a.createElement(C.a,{onChange:this.onGenreChange,value:"Action",checked:s.some((function(e){return"Action"===e}))},"Action")),c.a.createElement("div",null,c.a.createElement(C.a,{onChange:this.onGenreChange,value:"Comedy",checked:s.some((function(e){return"Comedy"===e}))},"Comedy")),c.a.createElement("div",null,c.a.createElement(C.a,{onChange:this.onGenreChange,value:"Romance",checked:s.some((function(e){return"Romance"===e}))},"Romance"))))),c.a.createElement("div",{className:"content"},c.a.createElement("div",{style:{padding:10,fontSize:"1.5em",marginBottom:10}},"Total of ",t.total),c.a.createElement("div",null,o),c.a.createElement("div",{className:"pagination-wrap"},c.a.createElement("div",{className:"sort"},c.a.createElement(w.a,{defaultValue:i.sort,onChange:this.onSortChange,style:{width:160}},c.a.createElement(w.a.Option,{value:"TRENDING_DESC"},"Trending"),c.a.createElement(w.a.Option,{value:"FAVOURITES_DESC"},"Favourites"),c.a.createElement(w.a.Option,{value:"SCORE_DESC"},"Score"),c.a.createElement(w.a.Option,{value:"START_DATE_DESC"},"Start date"))),c.a.createElement("div",{className:"pagination"},c.a.createElement(_.a,{showSizeChanger:!0,defaultCurrent:t.currentPage,defaultPageSize:t.perPage,onShowSizeChange:this.onPageChange,onChange:this.onPageChange,total:t.total}))))))}}]),t}(i.Component),D=Object(N.b)(n.ANIMATION_STORE)(Object(N.c)(L)),x=function(e){function t(){return Object(d.a)(this,t),Object(O.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this.props.match.params.id;return c.a.createElement(P,null,"Detail : ",e)}}]),t}(i.Component),G=function(){return c.a.createElement(l.a,{client:p},c.a.createElement(m.a,null,c.a.createElement(u.d,null,c.a.createElement(u.b,{path:r.ANIMATION_LIST,component:g}),c.a.createElement(u.a,{from:"/",to:r.ANIMATION_LIST}))))},z=(a(226),a(12)),F=function(){function e(t){Object(d.a)(this,e),this.animationService=t,this.isLoading=!1,this.param={page:1,perPage:10},this.animations=[],this.pageInfo={currentPage:1,hasNextPage:!1,lastPage:1,perPage:10,total:0}}return Object(f.a)(e,[{key:"getAnimations",value:function(){var e=this;this.isLoading=!0;var t={page:this.param.page,perPage:this.param.perPage,isAdult:!!this.param.isAdult,sort:this.param.sort?this.param.sort:"TRENDING_DESC"};this.param.search&&Object.assign(t,{search:this.param.search}),this.param.genres&&this.param.genres.length>0&&Object.assign(t,{genres:this.param.genres}),this.param=t,this.animationService.getAnimations(t).then((function(t){e.animations=t.data.Page.media,e.pageInfo=t.data.Page.pageInfo})).finally((function(){e.isLoading=!1}))}},{key:"setParam",value:function(e){this.param=e}}]),e}();Object(z.j)(F,{animations:z.o,pageInfo:z.o,param:z.o,isLoading:z.o,setParam:z.f,getAnimations:z.f});var q=F,B=a(101),J=a.n(B),V=a(135),U=a(136),H=a(72);function K(){var e=Object(U.a)(["\n    query ($page: Int, $perPage: Int, $isAdult: Boolean, $sort: MediaSort, $search: String, $genres: [String]){\n        Page(page:$page, perPage:$perPage) {\n            pageInfo{\n                total,\n                perPage,\n                currentPage,\n                lastPage,\n                hasNextPage\n            },\n            media(isAdult: $isAdult, sort: [$sort], search: $search, genre_in: $genres) {\n                id\n                title{\n                    romaji\n                    english\n                    native\n                },\n                coverImage{\n                    extraLarge,\n                    large,\n                    medium\n                },\n                genres\n            }\n        }\n    }\n"]);return K=function(){return e},e}a.n(H)()(K());var Q=a(139),W=function(){function e(){Object(d.a)(this,e),this.fetch=Object(Q.a)({uri:"https://graphql.anilist.co"})}return Object(f.a)(e,[{key:"getAnimations",value:function(){var e=Object(V.a)(J.a.mark((function e(t){return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fetch({query:"\n    query ($page: Int, $perPage: Int, $isAdult: Boolean, $sort: MediaSort, $search: String, $genres: [String]){\n        Page(page:$page, perPage:$perPage) {\n            pageInfo{\n                total,\n                perPage,\n                currentPage,\n                lastPage,\n                hasNextPage\n            },\n            media(isAdult: $isAdult, sort: [$sort], search: $search, genre_in: $genres) {\n                id\n                title{\n                    romaji\n                    english\n                    native\n                },\n                coverImage{\n                    extraLarge,\n                    large,\n                    medium\n                },\n                genres\n            }\n        }\n    }\n",variables:t});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),X=function e(){Object(d.a)(this,e),this.animationStore=new q(new W)};X.instance=void 0;var Y=new X,Z=function(e){var t=e.children;return c.a.createElement(N.a,Y,t)};s.a.render(c.a.createElement(Z,null,c.a.createElement(G,null)),document.getElementById("root"))}},[[142,1,2]]]);
//# sourceMappingURL=main.6a7593c3.chunk.js.map
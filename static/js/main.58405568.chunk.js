(window["webpackJsonpanilist-client"]=window["webpackJsonpanilist-client"]||[]).push([[0],{138:function(e,t,a){e.exports=a(222)},145:function(e,t,a){},221:function(e,t,a){},222:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(10),l=a.n(i),c=a(23),o=a(79),s=a(43),u=new(a(135).a)({uri:"https://graphql.anilist.co"}),h=a(37),g=a(38),m=a(40),d=a(39),p=a(42),E=a(97),f=a(126),S=a(72);function v(){var e=Object(f.a)(["\n    query ($page: Int, $perPage: Int, $isAdult: Boolean, $sort: MediaSort, $search: String){\n        Page(page:$page, perPage:$perPage) {\n            pageInfo{\n                total,\n                perPage,\n                currentPage,\n                lastPage,\n                hasNextPage\n            },\n            media(isAdult: $isAdult, sort: [$sort], search: $search) {\n                id\n                title{\n                    romaji\n                    english\n                    native\n                },\n                coverImage{\n                    extraLarge,\n                    large,\n                    medium\n                },\n                genres\n            }\n        }\n    }\n"]);return v=function(){return e},e}var b=a.n(S)()(v()),C=a(228),j=a(226),y=function(e){function t(){return Object(h.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:this.props.className||"",style:{width:"200px",color:"white",fontSize:"2em"}},"Anilist")}}]),t}(n.Component),O=(a(145),C.a.Header),w=C.a.Content,P=C.a.Sider,z=j.a.Search,N=function(e){function t(){return Object(h.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){return r.a.createElement(C.a,{className:"default-layout"},r.a.createElement(O,{className:"default-header"},r.a.createElement(y,{className:"logo"}),r.a.createElement(z,{className:"search",placeholder:"input search text",onSearch:this.props.onSearch})),r.a.createElement(C.a,{className:"default-content-layout"},r.a.createElement(P,{className:"default-sidebar"},"Filter"),r.a.createElement(w,{className:"default-content"},r.a.createElement("div",null,this.props.children))))}}]),t}(n.Component),I=a(224),$=function(){return r.a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"100%"}},r.a.createElement(I.a,{size:"large",tip:"loading..."}))},D=a(225),T=function(e){var t=e.id,a=e.title,n=e.coverImage,i=e.genres,l=D.a.Meta;return r.a.createElement(o.b,{to:"/details/".concat(t)},r.a.createElement(D.a,{hoverable:!0,style:{width:240,display:"inline-block",margin:10},cover:r.a.createElement("img",{style:{width:240,height:340},alt:a,src:n})},r.a.createElement(l,{title:a,description:i.join(" / ").substr(0,25)})))},k=a(63),A=a(227),x=k.a.Option,_=function(e){var t=e.page,a=e.pageSize,n=e.sort,i=e.search,l=e.onPageChange,c=e.onSortChange,o=e.onSearch,s=n||"TRENDING_DESC",u=Object(E.a)(b,{variables:{page:t,perPage:a,sort:s,search:i||void 0,isAdult:!1}}),h=u.loading,g=u.error,m=u.data;if(h)return r.a.createElement(N,null,r.a.createElement($,null));if(g)return r.a.createElement(N,{onSearch:o},r.a.createElement("p",null,"Error :("));var d=m.Page.pageInfo,p=m.Page.media.map((function(e){return r.a.createElement(T,{key:e.id,id:e.id,title:e.title.romaji,coverImage:e.coverImage.large,genres:e.genres})}));return r.a.createElement(N,{onSearch:o},r.a.createElement("div",{style:{padding:10,fontSize:"1.5em",marginBottom:10}},"Total of ",d.total),r.a.createElement("div",{style:{marginBottom:10,marginLeft:10}},r.a.createElement(A.a,{showSizeChanger:!0,onShowSizeChange:l,defaultCurrent:t,defaultPageSize:a,onChange:l,total:d.total,style:{float:"left"}}),r.a.createElement(k.a,{defaultValue:s,style:{width:160,float:"right"},onChange:c},r.a.createElement(x,{value:"TRENDING_DESC"},"Trending"),r.a.createElement(x,{value:"FAVOURITES_DESC"},"Favourites"),r.a.createElement(x,{value:"SCORE_DESC"},"Score"),r.a.createElement(x,{value:"START_DATE_DESC"},"Start date"))),r.a.createElement("div",{style:{clear:"both"}}),p,r.a.createElement("div",{style:{marginTop:10,marginLeft:10}},r.a.createElement(A.a,{showSizeChanger:!0,onShowSizeChange:l,defaultCurrent:t,defaultPageSize:a,onChange:l,total:d.total})))},R=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).onPageChange=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a.state.pageSize;a.setState({page:e,pageSize:t})},a.onSortChange=function(e){a.setState({sort:e})},a.onSearch=function(e){a.setState({page:1,search:e})},a.state={page:1,pageSize:10},a}return Object(p.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){return r.a.createElement(_,{page:this.state.page,pageSize:this.state.pageSize,sort:this.state.sort,search:this.state.search,onPageChange:this.onPageChange,onSortChange:this.onSortChange,onSearch:this.onSearch})}}]),t}(n.Component),B=function(e){function t(){return Object(h.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){var e=this.props.match.params.id;return r.a.createElement("div",null,"Detail : ",e)}}]),t}(n.Component),F=(a(220),function(){return r.a.createElement(c.a,{client:u},r.a.createElement(o.a,null,r.a.createElement(s.a,{exact:!0,path:"/",component:R}),r.a.createElement(s.a,{path:"/details/:id",component:B})))});a(221);l.a.render(r.a.createElement(F,null),document.getElementById("root"))}},[[138,1,2]]]);
//# sourceMappingURL=main.58405568.chunk.js.map
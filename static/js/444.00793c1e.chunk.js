"use strict";(self.webpackChunkcamper_reserve=self.webpackChunkcamper_reserve||[]).push([[444],{7022:function(e,i,n){n.d(i,{Z:function(){return a}});var t={"btn-reset":"Button_btn-reset__+jCs4","btn-loadmore":"Button_btn-loadmore__7DgkH","btn-submit":"Button_btn-submit__JDG5N","btn-search":"Button_btn-search__JJi36","box-details":"Button_box-details__9HIkd"},r=n(184),a=function(e){var i=e.tag,n=e.type,a=e.className,s=e.children,c=e.onClick;switch(i){case"li":return(0,r.jsx)("li",{className:t[a],children:s});case"button":return(0,r.jsx)("button",{type:n,className:t[a],onClick:c,children:s});default:return null}}},968:function(e,i,n){var t=n(9439),r=n(2791);i.Z=function(){var e=(0,r.useState)({width:window.innerWidth,height:window.innerHeight}),i=(0,t.Z)(e,2),n=i[0],a=i[1];return(0,r.useEffect)((function(){var e=function(){a({width:window.innerWidth,height:window.innerHeight})};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]),n}},6444:function(e,i,n){n.r(i),n.d(i,{default:function(){return p}});var t=n(4420),r=n(7689),a=n(9439),s=n(1087),c=n(1400),o=n(7022),l=n(7462),d=n(968),h={"vehicle-item":"FavoriteCard_vehicle-item__B7vks","mt-position":"FavoriteCard_mt-position__-LCYC",img:"FavoriteCard_img__wYh5K","content-wrapper":"FavoriteCard_content-wrapper__rD85w",name:"FavoriteCard_name__3tnF+","info-wrapper":"FavoriteCard_info-wrapper__2dgxs","info-wrapper-top":"FavoriteCard_info-wrapper-top__gAEyT",rating:"FavoriteCard_rating__zHmc8",location:"FavoriteCard_location__vI4Ia",wrapper:"FavoriteCard_wrapper__p49uz",price:"FavoriteCard_price__aXbGW","fav-btn":"FavoriteCard_fav-btn__YKY20",description:"FavoriteCard_description__PIEYb","details-list":"FavoriteCard_details-list__Glqqg"},_=n(184),v=function(e){var i=e.vehicle,n=i._id,r=i.name,v=i.price,u=i.location,p=i.description,m=i.details,f=i.rating,j=i.reviews,x=i.gallery,w=(0,t.v9)((function(e){return e.favorites})).favorites.some((function(e){return e._id===n})),b=(0,t.I0)(),g=(0,d.Z)().width;return(0,_.jsxs)("li",{"data-vehicle":n,className:h["vehicle-item"],children:[(0,_.jsx)("img",{className:h.img,src:x.length?x[0]:"not-found-img.jpg",alt:r}),(0,_.jsxs)("div",{className:h["content-wrapper"],children:[(0,_.jsxs)("div",{className:h["mt-position"],children:[(0,_.jsxs)("div",{className:h["info-wrapper-top"],children:[(0,_.jsx)("h3",{className:h.name,children:r}),(0,_.jsxs)("div",{className:h.wrapper,children:[(0,_.jsxs)("p",{className:h.price,children:["\u20ac",v]}),(0,_.jsx)("button",{className:h["fav-btn"],onClick:function(){b(w?(0,c.zm)(n):(0,c._p)(i))},children:(0,_.jsx)(l.f,{id:w?"heart-active":"heart"})})]})]}),(0,_.jsxs)("div",{className:h["info-wrapper"],children:[(0,_.jsxs)("p",{className:h.rating,children:[(0,_.jsx)(l.f,{id:"rating"}),(0,_.jsxs)(s.rU,{to:"cars/".concat(n,"/reviews"),children:[(0,_.jsx)("span",{children:f}),(0,_.jsxs)("span",{className:h["reviews-number"],children:["(",j.length,1===j.length?" Review":" Reviews",")"]})]})]}),(0,_.jsxs)("p",{className:h.location,children:[(0,_.jsx)(l.f,{id:"location"}),(0,_.jsx)("span",{children:u})]})]}),(0,_.jsx)("p",{className:h.description,children:g<768?p.slice(0,90)+"...":g>=768&&g<1440?p.slice(0,200)+"...":p.slice(0,55)+"..."})]}),(0,_.jsx)("ul",{className:h["details-list"],children:Object.entries(m).map((function(e,i){var n=(0,a.Z)(e,2),t=n[0],r=n[1];return g<768&&i>=6||g>=1440&&i>=8?null:r&&"bathroom"!==t?(0,_.jsxs)(o.Z,{tag:"li",className:"box-details",children:[(0,_.jsx)(l.f,{id:t}),(0,_.jsxs)("p",{children:[(0,_.jsx)("span",{children:r}),(0,_.jsxs)("span",{children:[" ",t]})]})]},"vehicle-card-details-".concat(t)):null}))}),(0,_.jsx)(o.Z,{className:"btn-loadmore",type:"button",tag:"button",children:(0,_.jsx)(s.rU,{to:"cars/".concat(n,"/features"),children:"Show More"})})]})]},"vehicle-card-".concat(n))},u="Favorites_favorites-list__e2nEs",p=function(){var e=(0,t.v9)((function(e){return e.favorites})).favorites;return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)("ul",{className:u,children:e.length?null===e||void 0===e?void 0:e.map((function(e){return(0,_.jsx)(v,{vehicle:e},e._id)})):(0,_.jsx)("p",{children:"You don't have any saved vehicles yet"})}),(0,_.jsx)(r.j3,{})]})}}}]);
//# sourceMappingURL=444.00793c1e.chunk.js.map
"use strict";(self.webpackChunkpoke_api_frontend=self.webpackChunkpoke_api_frontend||[]).push([[591],{591:function(e,n,r){r.r(n),r.d(n,{default:function(){return l}});var t=r(791),c=r(5),s=r(905),u=r(184),i=(0,t.lazy)((function(){return r.e(8).then(r.bind(r,8))})),l=function(e){var n=e.currentPokemons,r=e.setCurrentPokemons,l=e.handlerSelectedItem,o=(0,t.useContext)(c.C),a=o.pokemons,d=o.setCountNextFetch,h=o.countNextFetch,f=o.isSearching,k=(0,t.useRef)(),x=(0,t.useCallback)((function(e){k.current&&k.current.disconnect(),k.current=new IntersectionObserver((function(e){e[0].isIntersecting&&d((function(e){return e+1}))})),e&&k.current.observe(e)}),[h]);return(0,t.useEffect)((function(){r((function(e){return[]})),setTimeout((function(){r(a)}),2e3)}),[a]),(0,u.jsx)("div",{className:"listContainer",children:!f&&n.length>0?n.map((function(e,r){return n.length===r+1?(0,u.jsx)(t.Suspense,{fallback:(0,u.jsx)("h1",{children:"LOADDING POKEMON..."}),children:(0,u.jsxs)("div",{ref:x,children:[" ",(0,u.jsx)(i,{handlerClick:l,name:e.name,url:e.url,index:r})," "]})},r):(0,u.jsx)(t.Suspense,{fallback:(0,u.jsx)("h1",{children:"LOADDING POKEMON..."}),children:(0,u.jsx)(i,{handlerClick:l,name:e.name,url:e.url,index:r})},r)})):(0,u.jsxs)("div",{children:[0===n.length&&(0,u.jsx)("h1",{children:"No pokemon found"}),(0,u.jsx)("img",{className:"pokeballLoading",src:s})]})})}}}]);
//# sourceMappingURL=591.5129ecd2.chunk.js.map
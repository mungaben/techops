import{u as j,b as P,j as n,P as g,_ as k,e as w,i as B,f as L,g as A,B as C,h as T,A as D,l as S,m as G,r as I,k as H,n as O,o as W,C as E}from"./sanity-e912f1c8.js";const z=o=>{let{index:s,menuItems:t,menuItemGroups:i,title:c}=o;const{features:d}=w(),{collapsed:l,isLast:u}=B(),r=u&&!l?-1:0;return n.jsx(L,{actions:n.jsx(A,{menuItems:t,menuItemGroups:i}),backButton:d.backButton&&s>0&&n.jsx(C,{as:T,"data-as":"a",icon:D,mode:"bleed",tooltipProps:{content:"Back"}}),tabIndex:r,title:c})};var f=Object.freeze,F=Object.defineProperty,R=(o,s)=>f(F(o,"raw",{value:f(s||o.slice())})),y;const K=j.hr(y||(y=R([`
  background-color: var(--card-border-color);
  height: 1px;
  margin: 0;
  border: none;
`])));function M(o){const{childItemId:s,items:t,isActive:i,layout:c,showIcons:d,title:l}=o,{collapsed:u}=S(),r=G(t==null?void 0:t.filter(e=>e.type!=="divider")),m=I.useCallback(e=>{var a;return((a=t==null?void 0:t.find((p,x)=>x===e))==null?void 0:a.type)==="divider"},[t]),h=I.useCallback(e=>{var a;const p=(a=e.displayOptions)==null?void 0:a.showIcon;return typeof p<"u"?p!==!1:d!==!1},[d]),v=I.useCallback((e,a)=>{const{virtualIndex:p}=a;if(e.type==="divider")return n.jsx(H,{marginBottom:1,children:n.jsx(K,{})},"divider-".concat(p));const x=!i&&s===e.id,_=i&&s===e.id,b=e._id&&e.schemaType?{_id:e._id,_type:e.schemaType.name,title:e.title}:void 0;return n.jsx(O,{icon:h(e)?e.icon:!1,id:e.id,layout:c,marginBottom:1,pressed:x,schemaType:e.schemaType,selected:_,title:r(e).title,value:b},e.id)},[s,r,i,c,h]);return n.jsx(W,{overflow:u?"hidden":"auto",children:t&&t.length>0&&n.jsx(E,{activeItemDataAttr:"data-hovered",ariaLabel:l,canReceiveFocus:!0,getItemDisabled:m,itemHeight:51,items:t,onlyShowSelectionWhenActive:!0,paddingBottom:1,paddingX:3,renderItem:v,wrapAround:!1})})}function X(o){const{childItemId:s,index:t,isActive:i,isSelected:c,pane:d,paneKey:l}=o,{defaultLayout:u,displayOptions:r,items:m,menuItems:h,menuItemGroups:v}=d,e=(r==null?void 0:r.showIcons)!==!1,{title:a}=P(d);return n.jsxs(g,{currentMaxWidth:350,"data-testid":"desk-tool-list-pane","data-ui":"ListPane",id:l,maxWidth:640,minWidth:320,selected:c,children:[k,n.jsx(z,{index:t,menuItems:h,menuItemGroups:v,title:a}),n.jsx(M,{childItemId:s,isActive:i,items:m,layout:u,showIcons:e,title:a},l)]})}export{X as default};

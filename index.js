"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react"),r=require("@emotion/styled"),t=require("@emotion/react");function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var a=n(e);const i=n(r).default.button((({primary:e,size:r})=>{const n=e?"blue":"green",a=(e=>{switch(e){case"sm":return"0.875rem";case"md":default:return"1rem";case"lg":return"1.125rem"}})(r),i=(e=>{switch(e){case"sm":return"0.875rem 1.25rem";case"md":default:return"1rem 1.5rem";case"lg":return"1.125rem 1.625rem"}})(r);return t.css`
        background: ${n};
        font-size: ${a};
        padding: ${i};
    `}));exports.Button=e=>{var{disabled:r,onClick:t,primary:n,size:o,children:c}=e,s=function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]])}return t}(e,["disabled","onClick","primary","size","children"]);return a.default.createElement(i,Object.assign({disabled:r,onClick:t,primary:n},s),c)};
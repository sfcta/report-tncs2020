function n(n,l,u){var t,e,a,o,r;function i(){var c=Date.now()-o;c<l&&c>=0?t=setTimeout(i,l-c):(t=null,u||(r=n.apply(a,e),a=e=null))}null==l&&(l=100);var c=function(){a=this,e=arguments,o=Date.now();var c=u&&!t;return t||(t=setTimeout(i,l)),c&&(r=n.apply(a,e),a=e=null),r};return c.clear=function(){t&&(clearTimeout(t),t=null)},c.flush=function(){t&&(r=n.apply(a,e),a=e=null,clearTimeout(t),t=null)},c}n.debounce=n;var l=n;export{l as d};
//# sourceMappingURL=index.39efad9c.js.map

class e extends Map{constructor(e,t=u){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:t}}),null!=e)for(const[s,r]of e)this.set(s,r)}get(e){return super.get(s(this,e))}has(e){return super.has(s(this,e))}set(e,t){return super.set(r(this,e),t)}delete(e){return super.delete(n(this,e))}}class t extends Set{constructor(e,t=u){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:t}}),null!=e)for(const s of e)this.add(s)}has(e){return super.has(s(this,e))}add(e){return super.add(r(this,e))}delete(e){return super.delete(n(this,e))}}function s({_intern:e,_key:t},s){const r=t(s);return e.has(r)?e.get(r):s}function r({_intern:e,_key:t},s){const r=t(s);return e.has(r)?e.get(r):(e.set(r,s),s)}function n({_intern:e,_key:t},s){const r=t(s);return e.has(r)&&(s=e.get(r),e.delete(r)),s}function u(e){return null!==e&&"object"==typeof e?e.valueOf():e}export{e as I,t as a};
//# sourceMappingURL=index.5877f313.js.map

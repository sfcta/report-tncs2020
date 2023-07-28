import{d as t}from"./vendor.e9c367ae.js";import{V as e}from"./VuePlotly.1b598568.js";import{g as i,U as a,B as s,S as o,n}from"./index.2deacc07.js";import{b as r}from"./DashBoard.61a0fedf.js";import"./index.3d2ad359.js";import"./HTTPFileSystem.e57ad358.js";import"./TopSheet.2244b18e.js";var l=t({name:"LineChartPanel",components:{VuePlotly:e},props:{fileSystemConfig:{type:Object,required:!0},subfolder:{type:String,required:!0},files:{type:Array,required:!0},config:{type:Object,required:!0},cardTitle:{type:String,required:!0},cardId:String,datamanager:{type:Object,required:!0}},data:()=>({globalState:i.state,dataSet:{},id:"line-"+Math.floor(1e12*Math.random()),YAMLrequirementsLine:{dataset:"",x:""},YAMLdeprecations:["usedCol"],layout:{height:300,margin:{t:8,b:0,l:0,r:0,pad:2},font:{color:"#444444",family:a},xaxis:{automargin:!0,autorange:!0,title:{text:"",standoff:12},animate:!0},yaxis:{automargin:!0,autorange:!0,title:{text:"",standoff:16},animate:!0,rangemode:"tozero"},legend:{orientation:"v",x:1,y:1}},data:[],options:{displaylogo:!1,responsive:!0,modeBarButtonsToRemove:["pan2d","zoom2d","select2d","lasso2d","zoomIn2d","zoomOut2d","autoScale2d","hoverClosestCartesian","hoverCompareCartesian","resetScale2d","toggleSpikelines","resetViewMapbox"],toImageButtonOptions:{format:"png",filename:"line-chart",width:null,height:null}}}),async mounted(){this.updateTheme(),this.options.toImageButtonOptions.filename=r(this.cardTitle,this.subfolder),this.dataSet=await this.loadData(),this.updateChart(),this.$emit("dimension-resizer",{id:this.cardId,resizer:this.changeDimensions}),this.$emit("isLoaded")},beforeDestroy(){var t;null==(t=this.datamanager)||t.removeFilterListener(this.config,this.handleFilterChanged)},watch:{"globalState.isDarkMode"(){this.updateTheme()}},methods:{changeDimensions(t){this.layout=Object.assign({},this.layout,t)},handleFilterChanged(){if(!this.datamanager)return;const{filteredRows:t}=this.datamanager.getFilteredDataset(this.config);if(t&&t.length){const e={},i=Object.keys(t[0]);i.forEach((t=>e[t]={name:t,values:[]})),t.forEach((t=>{i.forEach((i=>e[i].values.push(t[i])))})),this.dataSet={allRows:e}}else this.dataSet={allRows:{}};this.updateChart()},updateTheme(){const t={paper_bgcolor:s[this.globalState.colorScheme],plot_bgcolor:s[this.globalState.colorScheme],font:{color:this.globalState.isDarkMode?"#cccccc":"#444444"}};this.layout=Object.assign({},this.layout,t)},async loadData(){try{this.validateYAML();let t=await this.datamanager.getDataset(this.config);if(!this.config.filters)return t;this.datamanager.addFilterListener(this.config,this.handleFilterChanged);for(const[e,i]of Object.entries(this.config.filters)){const t={dataset:this.config.dataset,column:e,value:i,range:Array.isArray(i)};this.datamanager.setFilter(t)}return{allRows:{}}}catch(t){console.error(""+t)}return{allRows:{}}},validateYAML(){console.log("in line validation");for(const t in this.YAMLrequirementsLine)t in this.config==!1&&this.$store.commit("setStatus",{type:o.ERROR,msg:`line chart: missing required key: ${t}`,desc:JSON.stringify(this.config)});for(const t of this.YAMLdeprecations)this.config[t]&&this.$store.commit("setStatus",{type:o.WARNING,msg:`line chart: deprecated field: ${t}`,desc:JSON.stringify(this.config)})},updateChart(){this.layout.xaxis.title.text=this.config.xAxisTitle||this.config.xAxisName||"",this.layout.yaxis.title.text=this.config.yAxisTitle||this.config.yAxisName||"";try{this.config.groupBy?this.updateChartWithGroupBy():this.updateChartSimple()}catch(t){const e=""+t;this.$store.commit("setStatus",{type:o.ERROR,msg:e,desc:"Add a desription..."})}},updateChartWithGroupBy(){},updateChartSimple(){var t,e;let i=!1,a=this.config.columns||this.config.usedCol;this.config.legendName&&(this.config.legendTitles=this.config.legendName),(null==(t=this.config.legendTitles)?void 0:t.length)&&(i=!0);const s=this.dataSet.allRows||{},o=Object.keys(s);if(!o.length)return;let n=s[this.config.x].values||[];this.config.skipFirstRow&&(n=n.slice(1)),!a&&o.length&&(a=o.filter((t=>t!==this.config.x)).sort());const r=[];for(let l=0;l<a.length;l++){const t=a[l],o=i&&null!=(e=this.config.legendTitles[l])?e:t;let h=s[t].values;this.config.skipFirstRow&&(h=h.slice(1)),this.config.convertToSeconds&&(h=this.convertToSeconds(h)),r.push({x:n,y:h,name:o,type:"line",textinfo:"label+percent",textposition:"inside",automargin:!1})}this.data=r},convertToSeconds(t){t=t.map((t=>{try{const e=t.split(":");return e.reduce(((t,e)=>parseInt(e,10)+60*t),0)}catch(e){return 0}}))}}});const h={};var c=n(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("VuePlotly",{staticClass:"myplot",attrs:{data:t.data,layout:t.layout,options:t.options,id:t.id}})}),[],!1,d,"84cc2124",null,null);function d(t){for(let e in h)this[e]=h[e]}var g=function(){return c.exports}();export{g as default};
//# sourceMappingURL=line.f6a2c715.js.map

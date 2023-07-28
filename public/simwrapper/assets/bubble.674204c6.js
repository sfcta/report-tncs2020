import{d as t}from"./vendor.e9c367ae.js";import{V as e}from"./VuePlotly.1b598568.js";import{g as a,U as i,B as s,S as o,n as r}from"./index.2deacc07.js";import{b as n}from"./DashBoard.61a0fedf.js";import"./index.3d2ad359.js";import"./HTTPFileSystem.e57ad358.js";import"./TopSheet.2244b18e.js";var l=t({name:"BubbleChartPanel",components:{VuePlotly:e},props:{fileSystemConfig:{type:Object,required:!0},subfolder:{type:String,required:!0},files:{type:Array,required:!0},config:{type:Object,required:!0},cardTitle:{type:String,required:!0},datamanager:{type:Object,required:!0},cardId:String},data:()=>({globalState:a.state,dataSet:{},id:"bubble-"+Math.floor(1e12*Math.random()),layout:{height:300,margin:{t:8,b:0,l:0,r:0,pad:2},font:{color:"#444444",family:i},xaxis:{automargin:!0,autorange:!0,title:{text:"",standoff:12},animate:!0},yaxis:{automargin:!0,autorange:!0,title:{text:"",standoff:16},animate:!0},legend:{orientation:"v",x:1,y:1}},data:[],options:{displaylogo:!1,responsive:!0,modeBarButtonsToRemove:["pan2d","zoom2d","select2d","lasso2d","zoomIn2d","zoomOut2d","autoScale2d","hoverClosestCartesian","hoverCompareCartesian","resetScale2d","toggleSpikelines","resetViewMapbox"],toImageButtonOptions:{format:"png",filename:"bubble-chart",width:null,height:null}}}),async mounted(){this.updateTheme(),this.options.toImageButtonOptions.filename=n(this.cardTitle,this.subfolder),this.dataSet=await this.loadData(),this.updateChart(),this.$emit("dimension-resizer",{id:this.cardId,resizer:this.changeDimensions}),this.$emit("isLoaded")},beforeDestroy(){var t;null==(t=this.datamanager)||t.removeFilterListener(this.config,this.handleFilterChanged)},watch:{"globalState.isDarkMode"(){this.updateTheme()}},methods:{changeDimensions(t){this.layout=Object.assign({},this.layout,t)},updateTheme(){const t={paper_bgcolor:s[this.globalState.colorScheme],plot_bgcolor:s[this.globalState.colorScheme],font:{color:this.globalState.isDarkMode?"#cccccc":"#444444"}};this.layout=Object.assign({},this.layout,t)},async loadData(){if(!this.datamanager)return{};try{let t=await this.datamanager.getDataset(this.config);if(!this.config.filters)return t;this.datamanager.addFilterListener(this.config,this.handleFilterChanged);for(const[e,a]of Object.entries(this.config.filters)){const t={dataset:this.config.dataset,column:e,value:a,range:Array.isArray(a)};this.datamanager.setFilter(t)}return{allRows:{}}}catch(t){console.error(""+t)}return{allRows:{}}},handleFilterChanged(){if(!this.datamanager)return;const{filteredRows:t}=this.datamanager.getFilteredDataset(this.config);if(t&&t.length){const e={},a=Object.keys(t[0]);a.forEach((t=>e[t]={name:t,values:[]})),t.forEach((t=>{a.forEach((a=>e[a].values.push(t[a])))})),this.dataSet={allRows:e}}else this.dataSet={allRows:{}};this.updateChart()},updateChart(){this.layout.xaxis.title.text=this.config.xAxisTitle||this.config.xAxisName||"",this.layout.yaxis.title.text=this.config.yAxisTitle||this.config.yAxisName||"";try{this.config.groupBy?this.updateChartWithGroupBy():this.updateChartSimple()}catch(t){const e=""+t;this.$store.commit("setStatus",{type:o.ERROR,msg:e,desc:"Add a desription..."})}},updateChartWithGroupBy(){},updateChartSimple(){const t=this.config.factor||1;var e=this.config.bubble;this.config.legendName&&(e=this.config.legendName),this.config.legendTitle&&(e=this.config.legendTitle);const a=this.dataSet.allRows||{};if(0===Object.keys(a).length)return;let i=a[this.config.bubble].values.map((e=>e*t));this.config.skipFirstRow&&(i=i.slice(1));let s=a[this.config.x].values||[];this.config.skipFirstRow&&(s=s.slice(1));let o=a[this.config.y].values;this.config.skipFirstRow&&(o=o.slice(1)),this.data=[{x:s,y:o,name:e,mode:"markers",type:"scatter",textinfo:"label+percent",textposition:"inside",automargin:!0,showlegend:!0,marker:{size:i}}]}}});const h={};var d=r(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("VuePlotly",{staticClass:"yplot",attrs:{data:t.data,layout:t.layout,options:t.options,id:t.id}})}),[],!1,c,"7d62fe88",null,null);function c(t){for(let e in h)this[e]=h[e]}var g=function(){return d.exports}();export{g as default};
//# sourceMappingURL=bubble.674204c6.js.map

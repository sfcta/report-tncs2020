var t=Object.defineProperty,e=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,n=(e,i,s)=>i in e?t(e,i,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[i]=s,r=(t,e)=>{for(var i in e||(e={}))a.call(e,i)&&n(t,i,e[i]);if(s)for(var i of s(e))o.call(e,i)&&n(t,i,e[i]);return t},l=(t,s)=>e(t,i(s)),m=(t,e,i)=>(n(t,"symbol"!=typeof e?e+"":e,i),i);import{r as h,R as g,d}from"./vendor.e9c367ae.js";import{T as c,G as u}from"./TimeSlider.cdf580ab.js";import{b as p}from"./index.3d2ad359.js";import{c as f}from"./index.7080a99e.js";import{u as b}from"./util.b5d45f97.js";import{R as y,g as C,M as S,S as v,n as k}from"./index.2deacc07.js";import{C as z}from"./CollapsiblePanel.58a8eae6.js";import{D as w}from"./DrawingTool.daac4c85.js";import{H as D}from"./HTTPFileSystem.e57ad358.js";import{L as M}from"./LegendBox.0a0c86dd.js";import{L as A}from"./LegendStore.11164198.js";import{D as L,S as R}from"./deckgl.61194435.js";import{t as x}from"./index.01e94811.js";import{S as T}from"./text-layer.f1b6c0de.js";import{D as E}from"./data-filter.bf997cc2.js";import{Z as j}from"./ZoomButtons.e860a156.js";import"./layer.b20bd88e.js";import"./path-layer.f17fbd6c.js";import"./extends.f4cf4404.js";import"./layer-extension.27ef9a68.js";class $ extends T{constructor(){super(...arguments),m(this,"MAX_COLORS",21),m(this,"uniformColors",new Array(3*this.MAX_COLORS)),m(this,"uniformBreakpoints",new Array(this.MAX_COLORS-1))}initializeState(t){super.initializeState(t),this.getAttributeManager().addInstanced({instanceValue:{accessor:"getValue",size:1,defaultValue:0,transition:!0}})}getShaders(){return l(r({},super.getShaders()),{inject:{"vs:#decl":"\n            #define MAX_COLORS 21\n            #define MAX_BREAKPOINTS 20\n            uniform int numBreakpoints;\n            uniform vec3 colors[MAX_COLORS];\n            uniform float breakpoints[MAX_BREAKPOINTS];\n            attribute float instanceValue;\n            ","vs:DECKGL_FILTER_COLOR":"\n            // geometry.pickingColor = instancePickingColors;\n            picking_setPickingColor(geometry.pickingColor);\n\n            int lastBreakpoint = numBreakpoints;\n\n            for(int i=0; i < MAX_BREAKPOINTS; ++i) {\n              if (instanceValue < breakpoints[i]) {\n                color = vec4(colors[i], 1.0);\n                return;\n              }\n              if (i == lastBreakpoint) {\n                color = vec4(colors[i], 1.0);\n                return;\n              }\n            }\n            color = vec4(1.0, 0.0, 0.0, 1.0);\n            return;\n          "}})}draw({uniforms:t}){const{colors:e,breakpoints:i}=this.props;e.map(((t,e)=>{this.uniformColors[3*e]=t[0]/256,this.uniformColors[3*e+1]=t[1]/256,this.uniformColors[3*e+2]=t[2]/256})),i.map(((t,e)=>{this.uniformBreakpoints[e]=t}));const s=l(r({},t),{colors:this.uniformColors,breakpoints:this.uniformBreakpoints,numBreakpoints:i.length});super.draw({uniforms:s})}}$.layerName="ScatterplotColorBinsLayer",$.defaultProps={colors:[[128,128,128],[128,128,128]],breakpoints:[0]};const O=new E({filterSize:1});const F={pitch:0,zoom:11,bearing:0,longitude:13.38,latitude:52.5};function I(){return new Worker("/simwrapper/assets/XytDataParser.worker.c87dce15.js",{type:"module"})}const P=d({name:"XYTime",i18n:{messages:{en:{loading:"Loading data...",sorting:"Sorting into bins...",aggregate:"Summary",maxHeight:"3D Height",showDetails:"Show Details",selection:"Selection",areas:"Areas",count:"Count",promptCRS:'Enter the coordinate reference system, e.g. EPSG:25832\n\nThese coordinates are not in long/lat format. To fix this permanently, convert them to long/lat or add "# EPSG:xxxx" to your CSV header'},de:{loading:"Dateien laden...",sorting:"Sortieren...",aggregate:"Daten",maxHeight:"3-D Höhe",showDetails:"Details anzeigen",selection:"Ausgewählt",areas:"Orte",count:"Anzahl"}}},components:{CollapsiblePanel:z,DrawingTool:w,LegendBox:M,TimeSlider:c,ZoomButtons:j,XyTimeDeckMap:function({viewId:t=0,pointLayers:e=[],timeFilter:i=[],dark:s=!1,colors:a=[[1,0,0],[.25,.25,1]],breakpoints:o=[0],radius:n=5,mapIsIndependent:r=!1}){const[l,m]=h.exports.useState(F);function d(t){var i;if(t.index<0)return null;const a=null==(i=null==t?void 0:t.layer)?void 0:i.id;if(void 0===a)return null;const o=function(t){const e=t;try{const t=x(e),i=("00"+t.minutes).slice(-2);return`${t.hours}:${i}`}catch(i){return"00:00"}}(e[a].time[t.index]),n=e[a].value[t.index];return{html:`        <table style="font-size: 0.9rem">\n        <tr>\n          <td>Value</td>\n          <td style="padding-left: 0.5rem;"><b>${Math.round(1e6*n)/1e6}</b></td>\n        </tr><tr>\n          <td style="text-align: right;">Time</td>\n          <td style="padding-left: 0.5rem;"><b>${o}</b></td>\n        </tr>\n        </table>\n      `,style:s?{color:"#ccc",backgroundColor:"#2a3c4f"}:{color:"#223",backgroundColor:"white"}}}y[t]=()=>{m(C.state.viewState)};const c=e.map(((t,s)=>{const r=t.timeRange[0]>i[1]||t.timeRange[1]<i[0];return new $({data:{length:t.time.length,attributes:{getPosition:{value:t.coordinates,size:2},getFilterValue:{value:t.time,size:1},getValue:{value:t.value,size:1}}},autoHighlight:!0,breakpoints:o,colors:a,extensions:[O],id:s,filled:!0,filterRange:i.length?i:null,getRadius:n,highlightColor:[255,0,224],opacity:1,parameters:{depthTest:!1},pickable:!0,radiusScale:1,stroked:!1,updateTriggers:{getPosition:e,getFillColor:e,getFilterValue:i},visible:!r})}));return g.createElement(L,{layers:c,controller:!0,useDevicePixels:!0,viewState:l,onViewStateChange:t=>{var e;(e=t.viewState).latitude&&(e.center||(e.center=[0,0]),e.center[0]=e.longitude,e.center[1]=e.latitude,m(e),r||C.commit("setMapCamera",e))},pickingRadius:4,onClick:d,getTooltip:d},g.createElement(R,{mapStyle:C.getters.mapStyle,preventStyleDiffing:!0,mapboxApiAccessToken:S}))}},props:{root:{type:String,required:!0},subfolder:{type:String,required:!0},yamlConfig:String,config:Object,thumbnail:Boolean},data:()=>({guiConfig:{buckets:7,exponent:4,radius:5,"clip max":100,"color ramp":"viridis",colorRamps:["bathymetry","electric","inferno","jet","magma","par","viridis"],flip:!1,"manual breaks":""},viewId:`xyt-id-${Math.floor(1e12*Math.random())}`,configId:`gui-config-${Math.floor(1e12*Math.random())}`,timeLabels:[0,1],startTime:0,isAnimating:!1,timeFilter:[0,3599],colors:[[128,128,128],[128,128,128]],breakpoints:[0],range:[1/0,-1/0],timeRange:[1/0,-1/0],legendStore:null,standaloneYAMLconfig:{title:"",description:"",file:"",projection:"",thumbnail:"",radius:250,maxHeight:0,center:null,zoom:9},YAMLrequirementsXY:{file:""},columnLookup:[],gzipWorker:null,vizDetails:{title:"",description:"",file:"",projection:"",thumbnail:"",center:null,zoom:9,buckets:5,exponent:4,clipMax:100,radius:5,colorRamp:"viridis",flip:!1,breakpoints:""},myState:{statusMessage:"",subfolder:"",yamlConfig:"",thumbnail:!1},pointLayers:[],isLoaded:!1,animator:null,guiController:null,resizer:null,thumbnailUrl:"url('assets/thumbnail.jpg') no-repeat;",ANIMATE_SPEED:4,animationElapsedTime:0}),async mounted(){this.$store.commit("setFullScreen",!this.thumbnail),this.myState.thumbnail=this.thumbnail,this.myState.yamlConfig=this.yamlConfig||"",this.myState.subfolder=this.subfolder,await this.getVizDetails(),await this.buildThumbnail(),this.thumbnail||(this.setupLogoMover(),this.setupGui(),this.myState.statusMessage=`${this.$i18n.t("loading")}`,this.isLoaded||await this.loadFiles())},beforeDestroy(){y[this.viewId]=void 0,delete y[this.viewId];try{this.gzipWorker&&(this.gzipWorker.postMessage({terminate:!0}),this.gzipWorker.terminate()),this.guiController&&this.guiController.destroy()}catch(t){console.warn(t)}this.animator&&window.cancelAnimationFrame(this.animator),this.$store.commit("setFullScreen",!1)},computed:{fileApi(){return new D(this.fileSystem,C)},fileSystem(){const t=this.$store.state.svnProjects.filter((t=>t.slug===this.root));if(0===t.length)throw console.log("no such project"),Error;return t[0]},urlThumbnail(){return this.thumbnailUrl}},watch:{"$store.state.viewState"(){y[this.viewId]&&y[this.viewId]()}},methods:{handleTimeSliderValues(t){this.animationElapsedTime=t[0],this.timeFilter=t,this.timeLabels=[this.convertSecondsToClockTimeMinutes(t[0]),this.convertSecondsToClockTimeMinutes(t[1])]},setupLogoMover(){this.resizer=new ResizeObserver(this.moveLogo);const t=document.getElementById(`id-${this.viewId}`);this.resizer.observe(t)},moveLogo(){const t=document.getElementById(`${this.viewId}`),e=null==t?void 0:t.querySelector(".mapboxgl-ctrl-bottom-left");if(e){const i=t.clientWidth>640?"280px":"36px";e.style.right=i}},setupGui(){this.guiController=new u({title:"Settings",injectStyles:!0,width:200,container:document.getElementById(this.configId)||void 0});const t=this.guiController;t.add(this.guiConfig,"radius",1,20,1);const e=t.addFolder("colors");e.add(this.guiConfig,"color ramp",this.guiConfig.colorRamps).onChange(this.setColors),e.add(this.guiConfig,"flip").onChange(this.setColors);const i=t.addFolder("breakpoints");i.add(this.guiConfig,"buckets",2,19,1).onChange(this.setColors),i.add(this.guiConfig,"clip max",0,100,1).onChange(this.setColors),i.add(this.guiConfig,"exponent",1,10,1).onChange(this.setColors),i.add(this.guiConfig,"manual breaks").onChange(this.setColors)},async solveProjection(){if(!this.thumbnail){console.log("WHAT PROJECTION:");try{const t=await this.fileApi.getFileText(this.myState.subfolder+"/"+this.myState.yamlConfig);this.vizDetails=p.parse(t)}catch(t){console.error(t)}}},async getVizDetails(){if(this.config)return this.validateYAML(),void(this.vizDetails=Object.assign({},this.config));new RegExp(".*(yml|yaml)$").test(this.myState.yamlConfig)?await this.loadStandaloneYAMLConfig():this.setConfigForRawCSV()},setConfigForRawCSV(){this.vizDetails=Object.assign(this.vizDetails,{title:"Point Data: "+this.myState.yamlConfig,description:this.myState.yamlConfig,file:this.myState.yamlConfig,projection:"EPSG:4326",center:this.vizDetails.center,zoom:this.vizDetails.zoom}),this.$emit("title",this.vizDetails.title||this.vizDetails.file)},async loadStandaloneYAMLConfig(){try{const t=this.myState.yamlConfig.indexOf("/")>-1?this.myState.yamlConfig:this.myState.subfolder+"/"+this.myState.yamlConfig,e=await this.fileApi.getFileText(t);this.standaloneYAMLconfig=Object.assign({},p.parse(e)),this.validateYAML(),this.setVizDetails()}catch(t){console.log("failed"),this.$store.commit("setStatus",{type:v.ERROR,msg:"File not found",desc:`Could not find: ${this.myState.subfolder}/${this.myState.yamlConfig}`})}},validateYAML(){let t={};new RegExp(".*(yml|yaml)$").test(this.myState.yamlConfig)?(console.log("has yaml"),t=this.standaloneYAMLconfig):(console.log("no yaml"),t=this.config);for(const e in this.YAMLrequirementsXY)e in t==!1&&this.$store.commit("setStatus",{type:v.ERROR,msg:`YAML file missing required key: ${e}`,desc:"Check this.YAMLrequirementsXY for required keys"});0==t.radius&&this.$store.commit("setStatus",{type:v.WARNING,msg:"Radius set to zero",desc:"Radius can not be zero, preset value used instead. "}),(t.zoom<5||t.zoom>20)&&this.$store.commit("setStatus",{type:v.WARNING,msg:"Zoom is out of the recommended range ",desc:"Zoom levels should be between 5 and 20. "})},setVizDetails(){this.vizDetails=Object.assign({},this.vizDetails,this.standaloneYAMLconfig);const t=this.vizDetails.title?this.vizDetails.title:"Point Data: "+this.vizDetails.file;this.$emit("title",t),this.vizDetails.buckets&&(this.guiConfig.buckets=this.vizDetails.buckets),this.vizDetails.exponent&&(this.guiConfig.exponent=this.vizDetails.exponent),this.vizDetails.radius&&(this.guiConfig.radius=this.vizDetails.radius),this.vizDetails.clipMax&&(this.guiConfig["clip max"]=this.vizDetails.clipMax),this.vizDetails.colorRamp&&(this.guiConfig["color ramp"]=this.vizDetails.colorRamp),this.vizDetails.breakpoints&&(this.guiConfig["manual breaks"]=this.vizDetails.breakpoints)},setManualBreakpoints(){const t=this.guiConfig["manual breaks"].split(",").map((t=>Number.parseFloat(t.trim())));this.breakpoints=t,this.guiConfig.buckets=1+t.length},async buildThumbnail(){if(this.thumbnail&&this.vizDetails.thumbnail)try{const t=await this.fileApi.getFileBlob(this.myState.subfolder+"/"+this.vizDetails.thumbnail),e=await t.arrayBuffer(),i=b.arrayBufferToBase64(e);i&&(this.thumbnailUrl=`center / cover no-repeat url(data:image/png;base64,${i})`)}catch(t){console.error(t)}},async parseCSVFile(t){this.myState.statusMessage="Loading file...";let e=0;this.gzipWorker=new I,this.gzipWorker.onmessage=async i=>{if(i.data.status)this.myState.statusMessage=i.data.status;else if(i.data.error)this.myState.statusMessage=i.data.error,this.$store.commit("setStatus",{type:v.ERROR,msg:"XYT Loading Error",desc:`Error loading: ${this.myState.subfolder}/${this.vizDetails.file}`});else if(i.data.finished)this.finishedLoadingData(e,i.data);else if(i.data.needCRS){this.gzipWorker&&this.gzipWorker.terminate();let e=prompt(""+this.$t("promptCRS"))||"EPSG:25833";Number.isFinite(parseInt(e))&&(e=`EPSG:${e}`),this.vizDetails.projection=e.toUpperCase(),this.parseCSVFile(t)}else{const t=i.data.time.length;e||this.setFirstZoom(i.data.coordinates,t),e+=t,this.timeRange=[Math.min(this.timeRange[0],i.data.time[0]),Math.max(this.timeRange[1],i.data.time[t-1])],this.pointLayers.push(i.data)}},this.gzipWorker.postMessage({filepath:t,fileSystem:this.fileSystem,projection:this.vizDetails.projection})},setFirstZoom(t,e){const i=.5*(t[0]+t[2*e-2]),s=.5*(t[1]+t[2*e-1]);Number.isFinite(i)&&Number.isFinite(s)&&C.commit("setMapCamera",Object.assign({},C.state.viewState,{longitude:i,latitude:s,zoom:10}))},finishedLoadingData(t,e){console.log("ALL DONE",{totalRows:t,data:e.range,time:this.timeRange}),this.myState.statusMessage="",this.timeFilter=[this.timeRange[0],this.timeRange[0]+3599],this.isLoaded=!0,this.range=e.range,this.gzipWorker&&this.gzipWorker.terminate(),this.setColors(),this.moveLogo()},animate(){if(!this.isAnimating)return;this.animationElapsedTime=this.ANIMATE_SPEED*(Date.now()-this.startTime);const t=this.animationElapsedTime+this.timeRange[0];t>this.timeRange[1]&&(this.startTime=Date.now(),this.animationElapsedTime=0);const e=this.timeFilter[1]-this.timeFilter[0];this.timeFilter=[t,t+e],this.animator=window.requestAnimationFrame(this.animate)},toggleAnimation(){this.isAnimating=!this.isAnimating,this.isAnimating&&(this.animationElapsedTime=this.timeFilter[0]-this.timeRange[0],this.startTime=Date.now()-this.animationElapsedTime/this.ANIMATE_SPEED,this.animate())},setColors(){const t=this.guiConfig.exponent;let e=f({colormap:this.guiConfig["color ramp"],nshades:256,format:"rba",alpha:1}).map((t=>[t[0],t[1],t[2]]));this.guiConfig.flip&&(e=e.reverse());const i=256/(this.guiConfig.buckets-1),s=[];for(let o=0;o<this.guiConfig.buckets-1;o++)s.push(e[Math.round(i*o)]);s.push(e[255]),this.colors=s;const a=Math.pow(this.range[1],1/t)*this.guiConfig["clip max"]/100;if(this.guiConfig["manual breaks"])this.setManualBreakpoints();else if(!this.vizDetails.breakpoints){const e=[];for(let i=1;i<this.guiConfig.buckets;i++){const s=a*i/this.guiConfig.buckets,o=Math.pow(s,t);e.push(o)}this.breakpoints=e}this.isLoaded&&this.setLegend(s,this.breakpoints)},setLegend(t,e){this.range[1]-this.range[0]!=0&&(this.legendStore=new A,this.legendStore.setLegendSection({section:"Legend",column:"Legend",values:t.map(((i,s)=>{const a=e[0==s?s:s-1];let o=""+Math.round(1e6*a)/1e6;return 0==s&&(o="< "+o),s==t.length-1&&(o="> "+o),{label:o,value:i}}))}))},async loadFiles(){await this.fileApi.getChromePermission(this.fileSystem.handle);try{let t=`${this.myState.subfolder}/${this.vizDetails.file}`;await this.parseCSVFile(t),this.$emit("isLoaded")}catch(t){console.error(t),this.myState.statusMessage=""+t,this.$store.commit("setStatus",{type:v.ERROR,msg:"Loading/Parsing Error",desc:"Error loading/parsing: ${this.myState.subfolder}/${this.vizDetails.file}"})}},convertSecondsToClockTimeMinutes(t){const e=Math.floor(t/3600),i=Math.floor((t-3600*e)/60),s=t-3600*e-60*i,a=`${e}`,o=`${i}`.padStart(2,"0");`${s}`.padStart(2,"0");return`${a}:${o}`}}});const B={};var _=k(P,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"viz-plugin",class:{"hide-thumbnail":!t.thumbnail},attrs:{oncontextmenu:"return false",id:`id-${t.viewId}`}},[t.thumbnail?t._e():i("xy-time-deck-map",{staticClass:"map-layer",attrs:{viewId:t.viewId,pointLayers:t.pointLayers,timeFilter:t.timeFilter,dark:this.$store.state.isDarkMode,colors:this.colors,breakpoints:this.breakpoints,radius:this.guiConfig.radius,mapIsIndependent:!1}}),t.thumbnail?t._e():i("zoom-buttons",{attrs:{corner:"bottom"}}),i("div",{staticClass:"top-right"},[i("div",{staticClass:"gui-config",attrs:{id:t.configId}})]),i("div",{staticClass:"bottom-right"},[t.legendStore?i("div",{staticClass:"legend-area"},[i("legend-box",{attrs:{legendStore:t.legendStore}})],1):t._e()]),t.isLoaded?i("time-slider",{staticClass:"time-slider-area",attrs:{range:t.timeRange,activeTimeExtent:t.timeFilter,labels:t.timeLabels,isAnimating:t.isAnimating},on:{timeExtent:t.handleTimeSliderValues,toggleAnimation:t.toggleAnimation,drag:function(e){t.isAnimating=!1}}}):t._e(),!t.thumbnail&&t.myState.statusMessage?i("div",{staticClass:"message"},[i("p",{staticClass:"status-message"},[t._v(t._s(t.myState.statusMessage))])]):t._e()],1)}),[],!1,V,"64e7f868",null,null);function V(t){for(let e in B)this[e]=B[e]}var Y=function(){return _.exports}();export{Y as default};
//# sourceMappingURL=XyTime.ede197db.js.map

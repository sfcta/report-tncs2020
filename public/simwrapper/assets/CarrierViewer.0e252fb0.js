var t=Object.getOwnPropertySymbols,e=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,i=(i,n)=>{var a={};for(var r in i)e.call(i,r)&&n.indexOf(r)<0&&(a[r]=i[r]);if(null!=i&&t)for(var r of t(i))n.indexOf(r)<0&&s.call(i,r)&&(a[r]=i[r]);return a};import{R as n,r as a,d as r}from"./vendor.e9c367ae.js";import{d as o}from"./index.e02ae17f.js";import{r as l}from"./index.a906c0e7.js";import{b as c}from"./index.3d2ad359.js";import{c as h}from"./index.7080a99e.js";import{b as d,d as p,p as u}from"./index.991028d3.js";import{g as m,R as f,M as g,c as v,C as b,n as y}from"./index.2deacc07.js";import{H as k}from"./HTTPFileSystem.e57ad358.js";import{Z as S}from"./ZoomButtons.e860a156.js";import{a as w,p as $,f as T}from"./util.b5d45f97.js";import{W as C}from"./RoadNetworkLoader.worker.30fe4a65.js";import{D as x,S as D}from"./deckgl.61194435.js";import{P as A}from"./PathOffsetLayer.f28047a8.js";import{P as I}from"./path-layer.f17fbd6c.js";import{a9 as E,aa as P,_ as L}from"./layer.b20bd88e.js";import{L as z}from"./layer-extension.27ef9a68.js";import{A as O}from"./arc-layer.bf091b3d.js";import{T as _,S as M}from"./text-layer.f1b6c0de.js";import"./extends.f4cf4404.js";const j={inject:{"vs:#decl":"\nattribute vec2 instanceDashArrays;\nattribute float instanceDashOffsets;\nvarying vec2 vDashArray;\nvarying float vDashOffset;\n","vs:#main-end":"\nvDashArray = instanceDashArrays;\nvDashOffset = instanceDashOffsets / width.x;\n","fs:#decl":"\nuniform float dashAlignMode;\nuniform float capType;\nuniform bool dashGapPickable;\nvarying vec2 vDashArray;\nvarying float vDashOffset;\n\nfloat round(float x) {\n  return floor(x + 0.5);\n}\n","fs:#main-start":"\n  float solidLength = vDashArray.x;\n  float gapLength = vDashArray.y;\n  float unitLength = solidLength + gapLength;\n\n  float offset;\n\n  if (unitLength > 0.0) {\n    if (dashAlignMode == 0.0) {\n      offset = vDashOffset;\n    } else {\n      unitLength = vPathLength / round(vPathLength / unitLength);\n      offset = solidLength / 2.0;\n    }\n\n    float unitOffset = mod(clamp(vPathPosition.y, 0.0, vPathLength) + offset, unitLength);\n\n    if (gapLength > 0.0 && unitOffset > solidLength) {\n      if (capType <= 0.5) {\n        if (!(dashGapPickable && picking_uActive)) {\n          discard;\n        }\n      } else {\n        // caps are rounded, test the distance to solid ends\n        float distToEnd = length(vec2(\n          min(unitOffset - solidLength, unitLength - unitOffset),\n          vPathPosition.x\n        ));\n        if (distToEnd > 1.0) {\n          if (!(dashGapPickable && picking_uActive)) {\n            discard;\n          }\n        }\n      }\n    }\n  }\n"}},F={inject:{"vs:#decl":"\nattribute float instanceOffsets;\n","vs:DECKGL_FILTER_SIZE":"\n  float offsetWidth = abs(instanceOffsets * 2.0) + 1.0;\n  size *= offsetWidth;\n","vCornerOffset = offsetVec;":"\n  float offsetWidth = abs(instanceOffsets * 2.0) + 1.0;\n  vec2 offsetCenter = -instanceOffsets * (isCap ? perp : miterVec * miterSize) * 2.0;\n  vCornerOffset = vCornerOffset * offsetWidth - offsetCenter;\n","fs:#main-start":"\n  float isInside;\n  isInside = step(-1.0, vPathPosition.x) * step(vPathPosition.x, 1.0);\n  if (isInside == 0.0) {\n    discard;\n  }\n"}};class N extends z{constructor({dash:t=!1,offset:e=!1,highPrecisionDash:s=!1}={}){super({dash:t||s,offset:e,highPrecisionDash:s})}isEnabled(t){return"pathTesselator"in t.state}getShaders(t){if(!t.isEnabled(this))return null;let e={};return t.opts.dash&&(e=E(e,j)),t.opts.offset&&(e=E(e,F)),e}initializeState(t,e){const s=this.getAttributeManager();s&&e.isEnabled(this)&&(e.opts.dash&&s.addInstanced({instanceDashArrays:{size:2,accessor:"getDashArray"}}),e.opts.highPrecisionDash&&s.addInstanced({instanceDashOffsets:{size:1,accessor:"getPath",transform:e.getDashOffsets.bind(this)}}),e.opts.offset&&s.addInstanced({instanceOffsets:{size:1,accessor:"getOffset"}}))}updateState(t,e){if(!e.isEnabled(this))return;const s={};e.opts.dash&&(s.dashAlignMode=this.props.dashJustified?1:0,s.dashGapPickable=Boolean(this.props.dashGapPickable)),this.state.model.setUniforms(s)}getDashOffsets(t){const e=[0],s="XY"===this.props.positionFormat?2:3,i=Array.isArray(t[0]),n=i?t.length:t.length/s;let a,r;for(let o=0;o<n-1;o++)a=i?t[o]:t.slice(o*s,o*s+s),a=this.projectPosition(a),o>0&&(e[o]=e[o-1]+P(r,a)),r=a;return e}}L(N,"defaultProps",{getDashArray:{type:"accessor",value:[0,0]},getOffset:{type:"accessor",value:0},dashJustified:!1,dashGapPickable:!1}),L(N,"extensionName","PathStyleExtension");var R=function t(e,s){var i,n,a=/(^([+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?)?$|^0x[0-9a-f]+$|\d+)/gi,r=/(^[ ]*|[ ]*$)/g,o=/(^([\w ]+,?[\w ]+)?[\w ]+,?[\w ]+\d+:\d+(:\d+)?[\w ]?|^\d{1,4}[\/\-]\d{1,4}[\/\-]\d{1,4}|^\w+, \w+ \d+, \d{4})/,l=/^0x[0-9a-f]+$/i,c=/^0/,h=function(e){return t.insensitive&&(""+e).toLowerCase()||""+e},d=h(e).replace(r,"")||"",p=h(s).replace(r,"")||"",u=d.replace(a,"\0$1\0").replace(/\0$/,"").replace(/^\0/,"").split("\0"),m=p.replace(a,"\0$1\0").replace(/\0$/,"").replace(/^\0/,"").split("\0"),f=parseInt(d.match(l),16)||1!==u.length&&d.match(o)&&Date.parse(d),g=parseInt(p.match(l),16)||f&&p.match(o)&&Date.parse(p)||null;if(g){if(f<g)return-1;if(f>g)return 1}for(var v=0,b=Math.max(u.length,m.length);v<b;v++){if(i=!(u[v]||"").match(c)&&parseFloat(u[v])||u[v]||0,n=!(m[v]||"").match(c)&&parseFloat(m[v])||m[v]||0,isNaN(i)!==isNaN(n))return isNaN(i)?1:-1;if(typeof i!=typeof n&&(i+="",n+=""),i<n)return-1;if(i>n)return 1}return 0};const H={pickup:[0,150,255],delivery:[240,0,60],service:[255,64,255]};R.insensitive=!0;const B=r({name:"CarrierPlugin",i18n:{messages:{en:{carriers:"Carriers",vehicles:"VEHICLES",services:"SERVICES",shipments:"SHIPMENTS",tours:"TOURS",pickup:"Pickup",delivery:"Delivery",flatten:"Simple&nbsp;tours",shipmentDots:"Show shipments",scaleSize:"Widths",scaleFactor:"Width"},de:{carriers:"Unternehmen",vehicles:"FAHRZEUGE",services:"BETRIEBE",shipments:"LIEFERUNGEN",tours:"TOUREN",pickup:"Abholung",delivery:"Lieferung"}}},components:{LegendColors:function(t){const e=t.items.map((t=>n.createElement("li",{key:t.value+t.value[0]},n.createElement("div",{style:{width:"100%",height:`${Math.max(1,3*(1*t.value-1)+3)}px`,backgroundColor:`rgb(${t.color})`}}),t.label&&n.createElement("div",{style:{marginBottom:"0.5rem"}},t.label))));return n.createElement("div",null,n.createElement("h4",{style:{textAlign:"left",fontWeight:"bold",marginBottom:"0.5rem",fontSize:"0.8rem"}},t.title),n.createElement("p",null,t.description),n.createElement("ul",{style:{listStyle:"none",padding:0,margin:0}},e))},ToggleButton:o.exports.ToggleButton,TourViz:function(t){const[e,s]=a.exports.useState(m.state.viewState),[i,r]=a.exports.useState({}),[o,l]=a.exports.useState({type:"activity",pickups:[],deliveries:[]}),{dark:c,activeTab:h,numSelectedTours:d,shipments:p,depots:u,legs:v,settings:b,stopActivities:y,center:k,onClick:S}=t,{simplifyTours:w,scaleFactor:$,shipmentDotsOnTourMap:T}=b;let C=0==$?1e-6:1/Math.pow(2,(100-$)/5-6);const E=[];function P(t,e){const{object:s,x:i,y:a}=t;return n.createElement("div",{className:"tooltip",style:{backgroundColor:"#334455ee",boxShadow:"2.5px 2px 4px rgba(0,0,0,0.25)",color:"#eee",padding:"0.5rem 0.5rem",position:"absolute",opacity:.9,left:i+20,top:a+20}},n.createElement("table",{style:{maxWidth:"30rem",fontSize:"0.8rem"}},n.createElement("tbody",null,n.createElement("tr",null,n.createElement("td",{style:{textAlign:"right",paddingRight:"0.5rem",paddingTop:"0.2rem"}},e,":"),n.createElement("td",{style:{paddingTop:"0.2rem"}},s.shipmentIds.join(", "))))))}if(f[t.viewId]=()=>{s(m.state.viewState)},a.exports.useEffect((()=>{const t={},e={};p.forEach((s=>{let i=`${s.fromX}-${s.fromY}`;t[i]||(t[i]={type:"pickup",shipmentIds:[],coord:[s.fromX,s.fromY]}),t[i].shipmentIds.push(s.$id),i=`${s.toX}-${s.toY}`,e[i]||(e[i]={type:"delivery",shipmentIds:[],coord:[s.toX,s.toY]}),e[i].shipmentIds.push(s.$id)})),l({type:"activity",pickups:Object.values(t),deliveries:Object.values(e)})}),[p]),"tours"==h&&(E.push(new I({id:"shipmentLocationDashedLine",data:y,getPath:t=>[t.ptFrom,t.ptTo],getColor:[128,128,128],getOffset:2,opacity:1,widthMinPixels:3,rounded:!0,shadowEnabled:!1,pickable:!1,autoHighlight:!1,highlightColor:[255,255,255],parameters:{depthTest:!1},getDashArray:[3,2],dashJustified:!0,extensions:[new N({dash:!0})]})),w?E.push(new O({id:"leg-arcs",data:v,getSourcePosition:t=>t.points[0],getTargetPosition:t=>t.points[t.points.length-1],getSourceColor:t=>t.color,getTargetColor:t=>t.color,getWidth:$?t=>t.totalSize/2:3,getHeight:.5,widthMinPixels:2,widthMaxPixels:200,widthUnits:"pixels",widthScale:C,opacity:.9,parameters:{depthTest:!1},updateTriggers:{getWidth:[$]},transitions:{getWidth:150},pickable:!0,autoHighlight:!0,highlightColor:[255,255,255],onHover:r})):E.push(new A({id:"deliveryroutes",data:v,getPath:t=>t.points,getColor:t=>t.color,getWidth:$?t=>t.totalSize:3,getOffset:2,opacity:1,widthMinPixels:3,widthMaxPixels:200,widthUnits:"pixels",widthScale:C,rounded:!0,shadowEnabled:!1,pickable:!0,autoHighlight:!0,highlightColor:[255,255,255],onHover:r,parameters:{depthTest:!1},updateTriggers:{getWidth:[$]},transitions:{getWidth:150}})),E.push(new _({id:"dest-labels",data:y,background:!0,backgroundPadding:1!==d?[2,1,2,1]:[3,2,3,1],getColor:[255,255,255],getBackgroundColor:t=>{const e=t.visits.reduce(((t,e)=>t+e.pickup.length),0),s=t.visits.reduce(((t,e)=>t+e.delivery.length),0);return e&&s?[0,0,255]:e?H.pickup:s?H.delivery:[240,130,0]},getPosition:t=>t.midpoint,getText:t=>"Depot"==t.label?t.label:1!==d?" ":`${t.label}`,getSize:t=>"Depot"==t.label?11:1!==d?4:11,getTextAnchor:"middle",getAlignmentBaseline:"center",opacity:1,noAlloc:!1,billboard:!0,sizeScale:1,pickable:!0,autoHighlight:!0,highlightColor:[255,255,255],onHover:r,visible:T}))),"shipments"==h){E.push(new M({id:"deliveries",data:o.deliveries,getPosition:t=>t.coord,getColor:H.delivery,getRadius:3,opacity:.9,parameters:{depthTest:!1},pickable:!0,radiusUnits:"pixels",onHover:r})),E.push(new M({id:"pickups",data:o.pickups,getPosition:t=>t.coord,getColor:H.pickup,getRadius:2,opacity:.9,parameters:{depthTest:!1},pickable:!0,radiusUnits:"pixels",onHover:r}));const t=p.length>1?32:255;E.push(new O({id:"shipments",data:p,getSourcePosition:t=>[t.fromX,t.fromY],getTargetPosition:t=>[t.toX,t.toY],getSourceColor:[0,228,255,t],getTargetColor:[240,0,60,224],getWidth:$?t=>parseInt(t.$size)||1:1,widthUnits:"pixels",getHeight:.5,opacity:.9,parameters:{depthTest:!1},widthScale:C,widthMinPixels:1,widthMaxPixels:100,updateTriggers:{getWidth:[$]},transitions:{getWidth:200}}))}return E.push(new _({id:"depots",data:u,background:!0,backgroundPadding:[3,2,3,1],getColor:[255,255,255],getBackgroundColor:[0,150,240],getPosition:t=>t.midpoint,getText:t=>"Depot",getTextAnchor:"middle",getAlignmentBaseline:"center",getSize:11,opacity:1,noAlloc:!1,billboard:!0,sizeScale:1,pickable:!0,autoHighlight:!0,highlightColor:[255,255,255],onHover:r})),n.createElement(x,{layers:E,pickingRadius:3,controller:!0,getCursor:()=>"pointer",onClick:function(t){t.object?S(t.object):S(null)},viewState:e,onViewStateChange:t=>{return e=t.viewState,s(e),e.center=[e.longitude,e.latitude],void m.commit("setMapCamera",e);var e}},n.createElement(D,{mapboxApiAccessToken:g,mapStyle:m.getters.mapStyle}),function(t){const{object:e}=t;return e?"pickup"==(null==e?void 0:e.type)?P(t,"pickup"):"delivery"==(null==e?void 0:e.type)?P(t,"delivery"):(null==e?void 0:e.color)?function(t){var e,s;const{object:i,x:a,y:r}=t;return n.createElement("div",{className:"tooltip",style:{fontSize:"0.8rem",backgroundColor:"#334455ee",boxShadow:"2.5px 2px 4px rgba(0,0,0,0.25)",color:"#eee",padding:"0.5rem 0.5rem",position:"absolute",left:a+20,top:r-30}},n.createElement("b",null,null==(e=null==i?void 0:i.tour)?void 0:e.vehicleId),n.createElement("br",null),"Leg # ",1+(null==i?void 0:i.count)," ",n.createElement("br",null),"Shipments on board: ",null==(s=null==i?void 0:i.shipmentsOnBoard)?void 0:s.length," ",n.createElement("br",null),"Total size: ",null==i?void 0:i.totalSize)}(t):"depot"==(null==e?void 0:e.type)?null:function(t){const{object:e,x:s,y:i}=t,a=e.visits.length,r=e.visits.reduce(((t,e)=>t+e.pickup.length),0),o=e.visits.reduce(((t,e)=>t+e.delivery.length),0),l=r+o,c={visits:a,pickups:r,deliveries:o},h=20*Object.keys(e).length+32;let d=i-30;d+h>window.innerHeight&&(d=i-h);return n.createElement("div",{className:"tooltip",style:{fontSize:"0.7rem",backgroundColor:"#334455ee",boxShadow:"2.5px 2px 4px rgba(0,0,0,0.25)",color:"#eee",padding:"0.5rem 0.5rem",position:"absolute",left:s+20,top:d}},n.createElement("table",{style:{fontSize:"0.8rem"}},n.createElement("tbody",null,Object.keys(c).map((t=>n.createElement("tr",{key:t},n.createElement("td",{style:{textAlign:"right",paddingRight:"0.5rem"}},t,":"),n.createElement("td",{style:{fontWeight:"bold"}}," ",c[t])))),1==l&&Object.keys(e.details).map((t=>n.createElement("tr",{key:t},n.createElement("td",{style:{textAlign:"right",paddingRight:"0.5rem",paddingTop:"0.2rem"}},t.slice(1),":"),n.createElement("td",{style:{paddingTop:"0.2rem"}},e.details[t])))))))}(t):null}(i))},ZoomButtons:S},props:{root:{type:String,required:!0},subfolder:{type:String,required:!0},yamlConfig:String,config:Object,thumbnail:Boolean},data:()=>({linkLayerId:Math.floor(1e12*Math.random()),vizSettings:{simplifyTours:!1,scaleShipmentSizes:!0,shipmentDotsOnTourMap:!0,scaleFactor:0},vizDetails:{network:"",carriers:"",projection:"",title:"",description:"",thumbnail:"",center:null},myState:{statusMessage:"",isRunning:!1,subfolder:"",yamlConfig:"",thumbnail:!0,data:[]},searchTerm:"",searchEnabled:!1,globalState:m.state,isLoaded:!0,showHelp:!1,activeTab:"shipments",speedStops:[-10,-5,-2,-1,-.5,-.25,0,.25,.5,1,2,5,10],speed:1,legendBits:[],links:null,toggleTours:!0,toggleVehicles:!0,toggleShipments:!0,toggleServices:!0,detailContent:"",data:null,carriers:[],vehicles:[],shipments:[],shipmentLookup:{},services:[],stopActivities:[],tours:[],plans:[],shownShipments:[],shipmentIdsInTour:[],depots:[],shownDepots:[],shownLegs:[],selectedCarrier:"",selectedTours:[],selectedPlan:null,selectedPlanIndex:null,selectedShipment:null,thumbnailUrl:"url('assets/thumbnail.jpg') no-repeat;",vehicleLookup:[],vehicleLookupString:{},rgb:h({colormap:"phase",nshades:9,format:"rba"}).map((t=>t.slice(0,3))).reverse(),dropdownIsActive:!1}),computed:{fileApi(){return new k(this.fileSystem,m)},fileSystem(){const t=this.$store.state.svnProjects.filter((t=>t.slug===this.root));if(0===t.length)throw console.log("no such project"),Error;return t[0]},urlThumbnail(){return this.thumbnailUrl},textColor(){return this.globalState.isDarkMode?{text:"white",bg:"#181518aa"}:{text:"#3498db",bg:"#eeeef480"}}},watch:{"$store.state.viewState"(){f[this.linkLayerId]&&f[this.linkLayerId]()},"globalState.isDarkMode"(){this.updateLegendColors()},async"globalState.authAttempts"(){console.log("AUTH CHANGED - Reload"),this.yamlConfig||this.buildRouteFromUrl(),await this.getVizDetails()}},methods:{handleSelectShipment(t){if(console.log({shipment:t}),this.selectedShipment!==t)this.shownShipments=this.shipments.filter((e=>e.$id===t.$id)),this.selectedShipment=t;else if(this.selectedShipment=null,this.shownShipments=[],!this.selectedTours.length){const t=this.carriers.filter((t=>t.$id==this.selectedCarrier));this.selectedCarrier="",this.handleSelectCarrier(t[0])}},processActivitiesInTour(t){const e=[];let s=0;const n={};let a=this.vehicles.filter((e=>e.$id===t.vehicleId))[0];const r=this.links[a.$depotLinkId];let o=[.5*(r[0]+r[2]),.5*(r[1]+r[3])],l=a.$depotLinkId;n[`L${a.$depotLinkId}`]={link:a.$depotLinkId,midpoint:o,visits:[{pickup:[],delivery:[],service:[]}],label:"",tour:t,details:{},ptFrom:[r[0],r[1]],ptTo:[r[2],r[3]]};for(const h of t.plan){if(!h.$shipmentId)continue;e.push(h.$shipmentId);const a=this.shipmentLookup[h.$shipmentId];if(!a)continue;const r="pickup"===h.$type?a.$from:a.$to,o=[this.links[r][0],this.links[r][1]],c=[this.links[r][2],this.links[r][3]],d=[.5*(o[0]+c[0]),.5*(o[1]+c[1])],p=this.$t(h.$type),u=a,{from:m,fromX:f,fromY:g,to:v,toX:b,toY:y,id:k}=u,S=i(u,["from","fromX","fromY","to","toX","toY","id"]),w={id:a.$id,type:p,count:s++,link:r,midpoint:d,label:"",tour:t,details:S,ptFrom:o,ptTo:c};if(r==l)n[`L${r}`].visits[n[`L${r}`].visits.length-1][h.$type].push(w);else if(`L${r}`in n){const t={pickup:[],delivery:[],service:[]};t[h.$type].push(w),n[`L${r}`].visits.push(t)}else{const e={pickup:[],delivery:[],service:[]};e[h.$type].push(w),n[`L${r}`]={link:r,midpoint:d,label:"",tour:t,details:S,ptFrom:o,ptTo:c,visits:[e]}}l=r}const c=Object.values(n);for(let i=0;i<c.length;i++)c[i].label=`${i}`;return c[0].label="Depot",{shipmentIdsInTour:e,stopActivities:c}},setupDepots(){const t={};this.vehicles.forEach((e=>{const s=e.$depotLinkId;let i=this.links[s];i&&(t[s]||(t[s]={type:"depot",link:e.$depotLinkId,midpoint:[.5*(i[0]+i[2]),.5*(i[1]+i[3])],coords:this.links[e.$depotLinkId],vehicles:{}}),t[s].vehicles[e.$id]=e)})),this.depots=Object.values(t),this.shownDepots=this.depots.slice(0)},selectAllTours(){this.selectedTours=[],this.shownLegs=[],this.stopActivities=[],this.shownDepots=[],this.shownShipments=this.shipments.slice(0);for(const t of this.tours){t.legs.forEach(((e,s)=>this.addRouteToMap(t,e,s++)));const e=this.processActivitiesInTour(t);this.stopActivities=this.stopActivities.concat(e.stopActivities),this.setupDepots()}},async handleSelectTour(t){if(this.selectedTours.includes(t))return this.selectedTours=this.selectedTours.filter((e=>e!==t)),this.shownLegs=this.shownLegs.filter((e=>e.tour!==t)),this.stopActivities=this.stopActivities.filter((e=>e.tour!==t)),void(this.selectedTours.length||this.selectAllTours());this.selectedTours.length||(this.selectedTours=[],this.shownLegs=[],this.stopActivities=[],this.shownDepots=[]),this.selectedTours.push(t);const{shipmentIdsInTour:e,stopActivities:s}=this.processActivitiesInTour(t);this.shipmentIdsInTour=e;let i=0;for(const n of t.legs)this.addRouteToMap(t,n,i++);this.stopActivities=this.stopActivities.concat(s)},addRouteToMap(t,e,s){const i=[[this.links[e.links[0]][0],this.links[e.links[0]][1]]];for(const n of e.links){const t=i[i.length-1],e=[this.links[n][0],this.links[n][1]];e[0]===t[0]&&e[1]===t[1]||i.push(e),i.push([this.links[n][2],this.links[n][3]])}this.shownLegs=this.shownLegs.concat([{tour:t,shipmentsOnBoard:e.shipmentsOnBoard,totalSize:e.totalSize,count:s,points:i,color:this.rgb[(3+t.tourNumber)%this.rgb.length],type:"leg"}])},handleSelectCarrier(t){var e,s;if(this.dropdownIsActive=!1,!this.links)return;const i=t.$id;if(this.vehicles=[],this.shipments=[],this.services=[],this.tours=[],this.plans=[],this.shownShipments=[],this.shownDepots=[],this.selectedShipment=null,this.shipmentIdsInTour=[],this.stopActivities=[],this.shownLegs=[],this.selectedCarrier===i)return void(this.selectedCarrier="");this.selectedCarrier=i;let n=t.capabilities.vehicles.vehicle||[];this.vehicles=n.sort(((t,e)=>R(t,e))),this.setupDepots(),this.shipments=this.processShipments(t),(null==(s=null==(e=t.services)?void 0:e.service)?void 0:s.length)&&(this.services=t.services.service.map((t=>t.$)).sort(((t,e)=>R(t.$id,e.$id)))),this.tours=this.processTours(t),this.shownShipments=this.shipments,this.selectAllTours()},getAllPlans(t){if(null!=t.plan)return this.plans.push(t.plan),void(this.selectedPlan=t.plan);if(null!=t.plans){if(null==t.plans.plan.length)return this.plans.push(t.plans.plan),void(this.selectedPlan=t.plans.plan);this.plans=t.plans.plan;for(let e=0;e<t.plans.plan.length;e++){if("true"==t.plans.plan[e].selected){this.selectedPlan=t.plans.plan[e];break}this.selectedPlan=t.plans.plan[e]}}},processTours(t){if(this.getAllPlans(t),!this.selectPlan||!this.plans.length)return[];const e=this.selectedPlan.tour.map(((t,e)=>{const s=[t.act[0]],i=new Set;for(let a=1;a<t.act.length;a++)t.leg[a-1].shipmentsOnBoard=[...i],s.push(t.leg[a-1]),s.push(t.act[a]),"pickup"==t.act[a].$type&&t.act[a].$shipmentId&&i.add(t.act[a].$shipmentId),"delivery"==t.act[a].$type&&t.act[a].$shipmentId&&i.delete(t.act[a].$shipmentId);const n=t.leg.filter((t=>t.route&&t.route.length)).map((t=>{const e=t.shipmentsOnBoard.map((t=>this.shipmentLookup[t])),s=e.reduce(((t,e)=>t+parseFloat((null==e?void 0:e.$size)||0)),0);return{shipmentsOnBoard:e,totalSize:s,links:t.route?t.route.split(" "):[]}}));return{vehicleId:t.$vehicleId,plan:s,legs:n,tourNumber:0}}));return e.sort(((t,e)=>R(t.vehicleId,e.vehicleId))),e.forEach(((t,e)=>t.tourNumber=e)),e},processShipments(t){var e,s;if(this.shipmentLookup={},!(null==(s=null==(e=t.shipments)?void 0:e.shipment)?void 0:s.length))return[];const i=t.shipments.shipment.sort(((t,e)=>R(t.$id,e.$id)));try{for(const t of i)t.fromX=.5*(this.links[t.$from][0]+this.links[t.$from][2]),t.fromY=.5*(this.links[t.$from][1]+this.links[t.$from][3]),t.toX=.5*(this.links[t.$to][0]+this.links[t.$to][2]),t.toY=.5*(this.links[t.$to][1]+this.links[t.$to][3]),this.shipmentLookup[t.$id]=t}catch(n){}return i},buildRouteFromUrl(){const t=this.$route.params;if(!t.project||!t.pathMatch)return void console.log("I CANT EVEN: NO PROJECT/PARHMATCH");const e=1+t.pathMatch.lastIndexOf("/"),s=t.pathMatch.substring(0,e),i=t.pathMatch.substring(e);this.myState.subfolder=s,this.myState.yamlConfig=i},async getVizDetails(){var t,e;if(this.config)return void(this.vizDetails=Object.assign({},this.config));if((null==(t=this.yamlConfig)?void 0:t.endsWith("yaml"))||(null==(e=this.yamlConfig)?void 0:e.endsWith("yml")))try{const t=this.yamlConfig.indexOf("/")>-1?this.yamlConfig:this.subfolder+"/"+this.yamlConfig,e=await this.fileApi.getFileText(t);return void(this.vizDetails=c.parse(e))}catch(a){console.log("failed");const t=a;return void(this.fileSystem.needPassword&&401===t.status&&m.commit("requestLogin",this.fileSystem.slug))}const s=this.myState.yamlConfig.substring(0,15+this.myState.yamlConfig.indexOf("carriers")),{files:i}=await this.fileApi.getDirectory(this.myState.subfolder);let n=this.myState.yamlConfig.replaceAll("carriers","network");if(-1==i.indexOf(n)){const t=i.filter((t=>t.indexOf("network")>-1));t.length?n=t[0]:(this.myState.statusMessage="No road network found.",n="")}this.vizDetails={network:n,carriers:this.yamlConfig,title:s,description:"",center:this.vizDetails.center,projection:"",thumbnail:""};this.$emit("title","Carrier Explorer"),this.buildThumbnail()},async setMapCenter(){let t=0,e=0,s=0;if(this.vizDetails.center)"string"==typeof this.vizDetails.center&&(this.vizDetails.center=this.vizDetails.center.split(",").map(Number)),e=this.vizDetails.center[0],s=this.vizDetails.center[1];else if(!this.vizDetails.center){if(this.data=Object.entries(this.links),!this.data.length)return;const i=this.data.length/2,n=4096;for(let a=0;a<i;a+=n)e+=this.data[2*a][1][0],s+=this.data[2*a+1][1][1],t++;e/=t,s/=t}e&&s&&this.$store.commit("setMapCamera",{longitude:e,latitude:s,zoom:9,bearing:0,pitch:0,jump:!1})},async buildThumbnail(){if(this.thumbnail&&this.vizDetails.thumbnail)try{const t=await this.fileApi.getFileBlob(this.myState.subfolder+"/"+this.vizDetails.thumbnail),e=await l.arraybuffer(t),s=w(e);s&&(this.thumbnailUrl=`center / cover no-repeat url(data:image/png;base64,${s})`)}catch(t){console.error(t)}},handleClick(t){console.log("CLICK!",t),t||this.clickedEmptyMap(),"depot"==(null==t?void 0:t.type)&&this.clickedDepot(t),"leg"==(null==t?void 0:t.type)&&this.clickedLeg(t)},clickedDepot(t){const e=Object.values(t.vehicles).map((t=>t.$id));console.log({vehiclesAtThisDepot:e}),this.selectedTours=[],this.shownShipments=[];for(const s of this.tours)e.includes(s.vehicleId)&&(this.handleSelectTour(s),this.shipmentIdsInTour.forEach((t=>{this.shownShipments.push(this.shipmentLookup[t])})))},clickedLeg(t){(null==t?void 0:t.tour)&&this.handleSelectTour(null==t?void 0:t.tour)},clickedEmptyMap(){this.selectAllTours()},updateLegendColors(){},async loadCarriers(){const t=await this.loadFileOrGzippedFile(this.vizDetails.carriers);if(!t)return[];return(await $(t,{alwaysArray:["carriers.carrier","carriers.carrier.capabilities.vehicles.vehicle","carriers.carrier.plan.tour","carriers.carrier.shipments.shipment","carriers.carrier.services.service"]})).carriers.carrier.sort(((t,e)=>R(t.$id,e.$id)))},async loadNetwork(){if(this.myState.statusMessage="Loading network...",this.vizDetails.network.indexOf(".xml.")>-1){const t=`${this.myState.subfolder}/${this.vizDetails.network}`,e=await this.fetchNetwork(t,{});"Atlantis"==e.projection&&this.$store.commit("setMapStyles",v),this.myState.statusMessage="Building network link table";const s={};return e.linkIds.forEach(((t,i)=>{s[t]=[e.source[2*i],e.source[2*i+1],e.dest[2*i],e.dest[2*i+1]]})),s}{const t=await this.fileApi.getFileBlob(this.myState.subfolder+"/"+this.vizDetails.network),e=t?await d(t):null;let s=await p.run(u.inflateAsync(e,{to:"string"}));return JSON.parse(s)}},async fetchNetwork(t,e){return new Promise(((s,i)=>{const n=new C;try{n.postMessage({filePath:t,fileSystem:this.fileSystem,vizDetails:e}),n.onmessage=t=>{if(t.data.promptUserForCRS){let t=prompt("Enter the coordinate reference system, e.g. EPSG:25832")||"EPSG:31468";return isNaN(parseInt(t))||(t=`EPSG:${t}`),void n.postMessage({crs:t})}n.terminate(),t.data.error&&(console.error(t.data.error),m.commit("error",t.data.error),i(t.data.error)),s(t.data.links)}}catch(a){n.terminate(),console.error(a),i(a)}}))},toggleLoaded(t){this.isLoaded=t},rotateColors(){localStorage.setItem("plugin/agent-animation/colorscheme",this.globalState.isDarkMode?b.DarkMode:b.LightMode)},async loadFileOrGzippedFile(t){let e=`${this.subfolder}/${t}`;try{if(e.indexOf("*")>-1||e.indexOf("?")>-1){const t=e.substring(1+e.lastIndexOf("/")),s=e.substring(0,e.lastIndexOf("/")),{files:i}=await this.fileApi.getDirectory(s),n=T(i,t);if(0==n.length)throw Error(`No files matched "${t}"`);if(n.length>1)throw Error(`More than one file matched "${t}": ${n}`);e=`${s}/${n[0]}`}let t="";if(e.endsWith("xml"))t=await this.fileApi.getFileText(e);else if(e.endsWith("gz")){const s=await this.fileApi.getFileBlob(e),i=s?await d(s):null;t=await p.run(u.inflateAsync(i,{to:"string"}))}return t}catch(s){m.commit("error",""+s);const t=e+": "+s;return console.error(s),this.myState.statusMessage=t,""}},selectDropdown(){this.dropdownIsActive=!this.dropdownIsActive},selectPlan(t){for(let e=0;e<this.plans.length;e++)this.plans[e].$selected="false";t.$selected="true",this.selectedPlanIndex=this.plans.indexOf(t),this.selectedTours=[],this.selectDropdown(),this.selectedPlan=t}},async mounted(){m.commit("setFullScreen",!this.thumbnail),this.myState.thumbnail=this.thumbnail,this.myState.subfolder=this.subfolder,this.yamlConfig||this.buildRouteFromUrl(),await this.getVizDetails(),this.thumbnail||(this.showHelp=!1,this.updateLegendColors(),this.myState.statusMessage="Loading carriers...",this.carriers=await this.loadCarriers(),await this.$nextTick(),this.links=await this.loadNetwork(),this.setMapCenter(),this.myState.statusMessage="",this.carriers.length&&this.handleSelectCarrier(this.carriers[0]))},beforeDestroy(){this.myState.isRunning=!1,m.commit("setFullScreen",!1),this.$store.commit("setFullScreen",!1)}});const W={};var U=y(B,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"carrier-viewer",class:{"hide-thumbnail":!t.thumbnail},style:{background:t.urlThumbnail},attrs:{oncontextmenu:"return false"}},[s("div",{staticClass:"container-1"},[s("div",{staticClass:"main-panel"},[t.thumbnail?t._e():s("tour-viz",{staticClass:"anim",attrs:{activeTab:t.activeTab,shipments:t.shownShipments,depots:t.shownDepots,legs:t.shownLegs,stopActivities:t.stopActivities,dark:t.globalState.isDarkMode,center:t.vizDetails.center,viewId:t.linkLayerId,settings:t.vizSettings,numSelectedTours:t.selectedTours.length,onClick:t.handleClick}}),t.thumbnail?t._e():s("ZoomButtons"),t.myState.statusMessage?s("div",{staticClass:"xmessage"},[t._v(t._s(t.myState.statusMessage))]):t._e()],1),t.thumbnail?t._e():s("div",{staticClass:"right-panel",attrs:{darkMode:!0}},[t.carriers.length?s("h3",{staticStyle:{"margin-left":"0.25rem"}},[t._v(t._s(t.$t("carriers")))]):t._e(),s("div",{staticClass:"carrier-list"},t._l(t.carriers,(function(e){return s("div",{key:e.$id,staticClass:"carrier",class:{selected:e.$id===t.selectedCarrier},on:{click:function(s){return t.handleSelectCarrier(e)}}},[s("div",{staticClass:"carrier-title"},[t._v(t._s(e.$id))])])})),0),s("h4",[t._v(t._s(t.selectedCarrier||"Details"))]),t.selectedCarrier?s("b-field",{staticClass:"detail-buttons",attrs:{size:"is-small"}},[s("b-radio-button",{attrs:{"native-value":"shipments",size:"is-small",type:"is-warning"},model:{value:t.activeTab,callback:function(e){t.activeTab=e},expression:"activeTab"}},[s("span",[t._v(t._s(t.$t("shipments")))])]),s("b-radio-button",{attrs:{"native-value":"tours",size:"is-small",type:"is-warning"},model:{value:t.activeTab,callback:function(e){t.activeTab=e},expression:"activeTab"}},[s("span",[t._v(t._s(t.$t("tours")))])]),s("b-radio-button",{attrs:{"native-value":"vehicles",size:"is-small",type:"is-warning"},model:{value:t.activeTab,callback:function(e){t.activeTab=e},expression:"activeTab"}},[s("span",[t._v(t._s(t.$t("vehicles")))])]),t.services.length?s("b-radio-button",{attrs:{"native-value":"services",size:"is-small",type:"is-warning"},model:{value:t.activeTab,callback:function(e){t.activeTab=e},expression:"activeTab"}},[s("span",[t._v(t._s(t.$t("services")))])]):t._e()],1):t._e(),s("div",{staticClass:"detail-area"},["shipments"==t.activeTab?s("div",{staticClass:"shipments"},[s("span",[t._v(t._s(t.$t("shipments"))+": "+t._s(t.shipments.length))]),t._l(t.shipments,(function(e,i){return s("div",{key:`${i}-${e.$id}`,staticClass:"leaf tour",class:{selected:e==t.selectedShipment,"shipment-in-tour":t.shipmentIdsInTour.includes(e.$id)},on:{click:function(s){return t.handleSelectShipment(e)}}},[t._v(t._s(`${e.$id}: ${e.$from}-${e.$to}`))])}))],2):t._e(),"tours"==t.activeTab?s("div",{staticClass:"tours"},[this.plans.length>1?s("div",{staticClass:"dropdown",class:{"is-active":t.dropdownIsActive},staticStyle:{width:"100%"}},[s("div",{staticClass:"dropdown-trigger",on:{click:function(e){return t.selectDropdown()}}},[s("button",[s("span",[t._v("Plan "+t._s(t.selectedPlanIndex+1))]),t._m(0)])]),s("div",{staticClass:"dropdown-menu"},[s("div",{staticClass:"dropdown-content"},t._l(this.plans,(function(e,i){return s("a",{staticClass:"dropdown-item",class:{"is-active":"true"==e.$selected},on:{click:function(s){return t.selectPlan(e)}}},[t._v("Plan "+t._s(i+1))])})),0)])]):t._e(),s("span",[t._v(t._s(t.$t("tours"))+": "+t._s(t.tours.length))]),t._l(t.tours,(function(e,i){return s("div",{key:`${i}-${e.$id}`,staticClass:"leaf tour",class:{selected:t.selectedTours.includes(e)},on:{click:function(s){return t.handleSelectTour(e)}}},[t._v(t._s(`${e.vehicleId}`))])}))],2):t._e(),"vehicles"==t.activeTab?s("div",{staticClass:"vehicles"},[s("span",[t._v(t._s(t.$t("vehicles"))+": "+t._s(t.vehicles.length))]),t._l(t.vehicles,(function(e,i){return s("div",{key:`${i}-${e.$id}`,staticClass:"leaf tour"},[t._v(t._s(e.$id))])}))],2):t._e(),"services"==t.activeTab?s("div",{staticClass:"services"},[s("span",[t._v(t._s(t.$t("services"))+": "+t._s(t.services.length))]),t._l(t.services,(function(e,i){return s("div",{key:`${i}-${e.$id}`,staticClass:"leaf tour"},[t._v(t._s(`${e.$id}`))])}))],2):t._e()]),s("div",{staticClass:"switchbox"},[s("div",{staticClass:"switches"},[s("p",[t._v(t._s(t.$t("scaleSize")))]),s("b-slider",{staticClass:"slider",attrs:{tooltip:!1,type:"is-link",size:"is-small"},model:{value:t.vizSettings.scaleFactor,callback:function(e){t.$set(t.vizSettings,"scaleFactor",e)},expression:"vizSettings.scaleFactor"}})],1),s("div",{staticClass:"switches"},[s("b-switch",{model:{value:t.vizSettings.shipmentDotsOnTourMap,callback:function(e){t.$set(t.vizSettings,"shipmentDotsOnTourMap",e)},expression:"vizSettings.shipmentDotsOnTourMap"}},[s("span",{domProps:{innerHTML:t._s(t.$t("shipmentDots"))}})]),s("b-switch",{model:{value:t.vizSettings.simplifyTours,callback:function(e){t.$set(t.vizSettings,"simplifyTours",e)},expression:"vizSettings.simplifyTours"}},[s("span",{domProps:{innerHTML:t._s(t.$t("flatten"))}})])],1)])],1)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"icon is-small"},[e("i",{staticClass:"fas fa-angle-down"})])}],!1,G,"ff522992",null,null);function G(t){for(let e in W)this[e]=W[e]}var X=function(){return U.exports}();export{X as default};
//# sourceMappingURL=CarrierViewer.0e252fb0.js.map

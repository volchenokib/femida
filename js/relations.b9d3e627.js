(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["relations"],{"4bd2":function(t,e,a){"use strict";var n=a("7fbc"),i=a.n(n);i.a},5176:function(t,e,a){t.exports=a("51b6")},"5f45":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"relations"},[a("div",{ref:"chart",staticClass:"graph",staticStyle:{hight:"100%"},attrs:{id:"charts"}})])},i=[],r=(a("7f7f"),a("5176")),o=a.n(r),s=a("313e"),l=a.n(s),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-row",{staticClass:"panel-group"},[a("el-col",{staticClass:"card-panel-col"},[a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.dataLoading,expression:"dataLoading"}],staticClass:"card-panel chart",attrs:{"element-loading-spinner":"el-icon-loading"}},[t.dataLoading?t._e():a("simplePie"),t.dataLoading?t._e():a("div",{staticClass:"card-panel-description",attrs:{"element-loading-spinner":"el-icon-loading"}},[a("count-to",{staticClass:"card-panel-num",style:{color:t.riskColor},attrs:{"start-val":0,"end-val":this.panelData.risk,decimal:",",decimals:1,duration:2600}}),a("div",{staticClass:"card-panel-text risk-text"},[t._v("уровень аффилированности: "+t._s(t.riskLevel))])],1)],1)])],1)},u=[],d=a("ec1b"),h=a.n(d),m=a("afff"),p={name:"panelGroup",components:{simplePie:m["a"],CountTo:h.a},data:function(){return{}},created:function(){},computed:{dataLoading:function(){return this.$store.getters.getDataState},panelData:function(){return this.$store.getters.panelData},riskColor:function(){return this.$store.getters.panelData.risk<=.4?"#2ec7c9":this.$store.getters.panelData.risk>=.4&&this.$store.getters.panelData.risk<=.6?"#f5994e":"#d87a80"},riskLevel:function(){return this.$store.getters.panelData.risk<=.4?"низкий":this.$store.getters.panelData.risk>=.4&&this.$store.getters.panelData.risk<=.6?"средний":"высокий"}}},f=p,g=(a("b76b"),a("2877")),y=Object(g["a"])(f,c,u,!1,null,"ffd1bde2",null),b=y.exports;a("817d");var v={components:{panelRelations:b},data:function(){return{myChart:null,option:{},graph:{}}},mounted:function(){this.initChart(),this.renderChart()},methods:{initChart:function(){this.myChart=l.a.init(document.getElementById("charts"))},renderChart:function(){this.myChart.showLoading(),this.formatOption()},formatOption:function(){var t={symbol:"circle",symbolSize:80,itemStyle:{emphasis:{color:"#c92e2e"},normal:{color:"#c92e2e",label:{textStyle:{}}}}},e={symbolSize:30,category:1,draggable:!1,itemStyle:{normal:{color:"#2ec7c9"},emphasis:{color:"#32DADD"}}},a=this.$store.state.connections_companies.map(function(a,n){return 0===n?o()({},t,{name:a}):o()({},e,{name:a})}),n={lineStyle:{normal:{color:"#d87a80",curveness:.2}},label:{normal:{textStyle:{color:"#d87a80"},formatter:"{c}"}},symbol:["arrow","arrow"],symbolSize:[10,10]},i={lineStyle:{normal:{color:"#9a7fd1",curveness:.2}},label:{normal:{textStyle:{color:"#9a7fd1"}}}},r=this.$store.state.connections_links.map(function(t){return"% в уставном капитале"===t.name?o()({},i,t):o()({},n,t)});this.option={legend:{x:"center",bottom:20,selectedMode:!1,data:["% общих заказчиков","% в уставном капитале"]},animationDurationUpdate:2500,animationEasingUpdate:"quinticInOut",series:[{name:"graph",type:"graph",layout:"force",symbol:"circle",symbolSize:50,roam:!0,edgeSymbol:["arrow","arrow"],edgeSymbolSize:[10,0],focusNodeAdjacency:!0,edgeLabel:{normal:{show:!0,textStyle:{fontSize:12},formatter:"{c}"}},categories:[{name:"% общих заказчиков",itemStyle:{normal:{color:"#d87a80"}}},{name:"% в уставном капитале",itemStyle:{normal:{color:"#9a7fd1"}}}],lineStyle:{normal:{opacity:1,width:2}},label:{normal:{color:"#606266",fontSize:10,position:"top",show:!0}},force:{repulsion:1e4,layoutAnimation:!1},data:a,links:r}]},this.myChart.hideLoading(),this.myChart.setOption(this.option,!0)}}},S=v,k=(a("4bd2"),Object(g["a"])(S,n,i,!1,null,"37ae9eb1",null));e["default"]=k.exports},7464:function(t,e,a){},"7f7f":function(t,e,a){var n=a("86cc").f,i=Function.prototype,r=/^\s*function ([^ (]*)/,o="name";o in i||a("9e1e")&&n(i,o,{configurable:!0,get:function(){try{return(""+this).match(r)[1]}catch(t){return""}}})},"7fbc":function(t,e,a){},afff:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:t.className,style:{height:t.height,width:t.width}})},i=[],r=a("313e"),o=a.n(r);a("817d");var s={props:{className:{type:String,default:"pie"},width:{type:String,default:"100px"},height:{type:String,default:"100px"}},data:function(){return{chart:null}},mounted:function(){this.initChart()},beforeDestroy:function(){this.chart&&(this.chart.dispose(),this.chart=null)},computed:{risk:function(){return this.$store.getters.panelDataRisk},riskColor:function(){return this.$store.getters.panelDataRisk<.4?"#2ec7c9":this.$store.getters.panelDataRisk>=.4&&this.$store.getters.panelDataRisk<.6?"#f5994e":"#d87a80"}},methods:{initChart:function(){this.chart=o.a.init(this.$el),this.chart.setOption({series:[{name:"уровень риска",type:"pie",radius:"55%",center:["50%","50%"],data:[{value:this.risk,itemStyle:{color:this.riskColor},selected:!0},{value:1-this.risk,itemStyle:{color:"#b6a2de"}}],labelLine:{normal:{show:!1}},itemStyle:{normal:{color:this.riskColor}},animationEasing:"cubicInOut",animationDuration:2600}]})}}},l=s,c=a("2877"),u=Object(c["a"])(l,n,i,!1,null,"77ae5b6d",null);e["a"]=u.exports},b76b:function(t,e,a){"use strict";var n=a("7464"),i=a.n(n);i.a}}]);
//# sourceMappingURL=relations.b9d3e627.js.map
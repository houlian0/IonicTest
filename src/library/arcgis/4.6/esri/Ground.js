// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.6/esri/copyright.txt for details.
//>>built
define("require exports ./core/tsSupport/declareExtendsHelper ./core/tsSupport/decorateHelper ./core/accessorSupport/decorators dojo/_base/lang ./core/JSONSupport ./core/Loadable ./core/Collection ./core/collectionUtils ./core/Logger ./core/requireUtils ./core/promiseUtils ./core/Error ./layers/Layer ./layers/support/types".split(" "),function(k,B,t,f,d,l,u,v,w,m,x,n,p,y,z,A){var e=w.ofType(z),q=x.getLogger("esri.Ground");return function(r){function b(a){a=r.call(this)||this;a.layers=new e;a.layers.on("after-add",
function(a){a=a.item;A.isOfType(a,["elevation","base-elevation"])||q.error("Layer '"+a.title+", id:"+a.id+"' of type '"+a.type+"' is not supported as a ground layer and will therefore be ignored. Only layers of type 'elevation' are supported.")});return a}t(b,r);h=b;b.prototype.initialize=function(){this.when().catch(function(a){q.error("#load()","Failed to load ground",a)});this.resourceInfo&&this.read(this.resourceInfo.data,this.resourceInfo.context)};b.prototype.normalizeCtorArgs=function(a){a&&
"resourceInfo"in a&&(this._set("resourceInfo",a.resourceInfo),a=l.mixin({},a),delete a.resourceInfo);return a};Object.defineProperty(b.prototype,"layers",{set:function(a){this._set("layers",m.referenceSetter(a,this._get("layers"),e))},enumerable:!0,configurable:!0});b.prototype.writeLayers=function(a,b,d,c){var g=[];a&&(c=l.mixin({},c,{layerContainerType:"ground"}),a.forEach(function(a){if(a.write){var b={};a.write(b,c)&&g.push(b)}else c&&c.messages&&c.messages.push(new y("layer:unsupported","Layers ("+
a.title+", "+a.id+") of type '"+a.declaredClass+"' cannot be persisted in the ground",{layer:a}))}));b.layers=g};b.prototype.load=function(){this.addResolvingPromise(this._loadFromSource());return this.when()};b.prototype.queryElevation=function(a,b){var g=this;return n.when(k,"./layers/support/ElevationQuery").then(function(c){c=new c.ElevationQuery;var d=g.layers.filter(function(a){return"elevation"===a.type}).toArray();return c.queryAll(d,a,b)})};b.prototype.clone=function(){var a={resourceInfo:this.resourceInfo,
layers:this.layers.slice()};this.loaded&&(a.loadStatus="loaded");return new h(a)};b.prototype.read=function(a,b){this.resourceInfo||this._set("resourceInfo",{data:a,context:b});return this.inherited(arguments)};b.prototype._loadFromSource=function(){var a=this.resourceInfo;return a?this._loadLayersFromJSON(a.data,a.context):p.resolve(null)};b.prototype._loadLayersFromJSON=function(a,b){var d=this,c=b&&b.origin||"web-scene",f=b&&b.portal||null,g=b&&b.url||null;return n.when(k,"./portal/support/layersCreator").then(function(b){var e=
[];a.layers&&Array.isArray(a.layers)&&e.push.apply(e,b.populateOperationalLayers(d.layers,a.layers,{context:{origin:c,url:g,portal:f,layerContainerType:"ground"},defaultLayerType:"ArcGISTiledElevationServiceLayer"}));return p.eachAlways(e)}).then(function(){})};f([d.property({type:e,json:{read:!1}}),d.cast(m.castForReferenceSetter)],b.prototype,"layers",null);f([d.writer("layers")],b.prototype,"writeLayers",null);f([d.property({readOnly:!0})],b.prototype,"resourceInfo",void 0);return b=h=f([d.subclass("esri.Ground")],
b);var h}(d.declared(u,v))});
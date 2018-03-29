// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.6/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/accessorSupport/decorators ./ZoomConditions3D ./ZoomConditions2D ../../core/Accessor".split(" "),function(l,m,f,d,c,g,h,k){return function(e){function b(a){a=e.call(this,a)||this;a.canZoomIn=null;a.canZoomOut=null;a.zoomIn=a.zoomIn.bind(a);a.zoomOut=a.zoomOut.bind(a);return a}f(b,e);b.prototype.destroy=function(){this.view=null};Object.defineProperty(b.prototype,"state",{get:function(){return this.get("view.ready")?
"ready":"disabled"},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"view",{set:function(a){a?"2d"===a.type?this._zoomConditions=new h({view:a}):"3d"===a.type&&(this._zoomConditions=new g):this._zoomConditions=null;this._set("view",a)},enumerable:!0,configurable:!0});b.prototype.zoomIn=function(){this.canZoomIn&&this._zoomToFactor(.5)};b.prototype.zoomOut=function(){this.canZoomOut&&this._zoomToFactor(2)};b.prototype._zoomToFactor=function(a){if("ready"===this.state){var b=this.view;
"3d"===this.view.type?b.goTo({zoomFactor:1/a}):b.goTo({scale:this.get("view.scale")*a})}};d([c.property()],b.prototype,"_zoomConditions",void 0);d([c.property({aliasOf:"_zoomConditions.canZoomIn",readOnly:!0})],b.prototype,"canZoomIn",void 0);d([c.property({aliasOf:"_zoomConditions.canZoomOut",readOnly:!0})],b.prototype,"canZoomOut",void 0);d([c.property({dependsOn:["view.ready"],readOnly:!0})],b.prototype,"state",null);d([c.property()],b.prototype,"view",null);d([c.property()],b.prototype,"zoomIn",
null);d([c.property()],b.prototype,"zoomOut",null);return b=d([c.subclass("esri.widgets.Zoom.ZoomViewModel")],b)}(c.declared(k))});
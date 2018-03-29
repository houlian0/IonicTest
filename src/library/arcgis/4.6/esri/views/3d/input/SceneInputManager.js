// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.6/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper ../../../core/watchUtils ../../../core/Accessor ../../../core/HandleRegistry ../../../core/accessorSupport/decorators ../../input/InputManager ../../input/BrowserEventSource ../../input/ViewEvents ../../input/handlers/PreventContextMenu ./handlers/DoubleClickZoom ./handlers/DragRotate ./handlers/DragZoom ./handlers/KeyPan ./handlers/MouseWheelZoom ./handlers/SingleKeyResetHeading ./handlers/SingleKeyResetTilt ./handlers/PointerDownCancelAnimation ./handlers/TwoFingerTilt ./handlers/PinchAndPanNavigation".split(" "),
function(k,f,n,e,l,c,p,d,q,r,t,u,v,g,w,x,y,z,A,B,C,m){k=function(c){function b(){var a=null!==c&&c.apply(this,arguments)||this;a._handles=new p;return a}n(b,c);b.prototype.initialize=function(){var a=this;this.viewEvents=new t.ViewEvents(this.view);this._handles.add([l.whenNot(this.view,"ready",function(){return a._disconnect()}),l.when(this.view,"ready",function(){return a._connect()})])};b.prototype.destroy=function(){this._handles&&(this._handles.removeAll(),this._handles=null);this._disconnect()};
Object.defineProperty(b.prototype,"primaryDragAction",{get:function(){return this._get("primaryDragAction")},set:function(a){"pan"!==a&&"rotate"!==a||a===this._get("primaryDragAction")||(this._set("primaryDragAction",a),this._updateMode())},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"mode",{get:function(){return this._get("mode")},set:function(a){"default"!==a&&"pro"!==a||a===this._get("mode")||(this._set("mode",a),this._updateMode())},enumerable:!0,configurable:!0});b.prototype._disconnect=
function(){this.viewEvents.disconnect();this._source&&(this._source.destroy(),this._source=null);this._inputManager&&(this._inputManager.destroy(),this._inputManager=null)};b.prototype._connect=function(){var a=this.view;this._source=new r.BrowserEventSource(this.view.canvas);var b=new q.InputManager(this._source);this._inputManager=b;b.installHandlers("prevent-context-menu",[new u.PreventContextMenu]);this._modeDragPan=new m.PinchAndPanNavigation(a,"primary");this._modeDragRotate=new g.DragRotate(a,
"secondary","center");this._modeDragZoom=new w.DragZoom(a,"tertiary");b.installHandlers("navigation",[new B.PointerDownCancelAnimation(a),new v.DoubleClickZoom(a),new x.KeyPan(a,{left:"ArrowLeft",right:"ArrowRight",forward:"ArrowUp",backward:"ArrowDown",up:"u",down:"j"}),new y.MouseWheelZoom(a),new A.SingleKeyResetTilt(a,"p"),new z.SingleKeyResetHeading(a,"n"),new g.DragRotate(a,"primary","eye",["b"]),new g.DragRotate(a,"secondary","center",["b"]),new m.PinchAndPanNavigation(a,"tertiary",["b"]),this._modeDragRotate,
this._modeDragZoom,this._modeDragPan,new C.TwoFingerTilt(a)]);this.viewEvents.connect(b);this._updateMode()};b.prototype._updateMode=function(){var a=this.primaryDragAction,a=h.get(this.mode).get(a);this._modeDragPan&&(this._modeDragPan.pointerType=a.pan);this._modeDragRotate&&(this._modeDragRotate.pointerType=a.rotate);this._modeDragZoom&&(this._modeDragZoom.pointerType=a.zoom)};e([d.property()],b.prototype,"view",void 0);e([d.property({value:"pan"})],b.prototype,"primaryDragAction",null);e([d.property({value:"default"})],
b.prototype,"mode",null);e([d.property({readOnly:!0,aliasOf:"_inputManager.latestPointerType"})],b.prototype,"latestPointerType",void 0);e([d.property()],b.prototype,"_inputManager",void 0);return b=e([d.subclass("esri.views.3d.input.SceneInputManager")],b)}(d.declared(c));var h=new Map;f=new Map;c=new Map;f.set("pan",{pan:"primary",rotate:"secondary",zoom:"tertiary"});f.set("rotate",{pan:"secondary",rotate:"primary",zoom:"tertiary"});c.set("pan",{pan:"primary",rotate:"tertiary",zoom:"secondary"});
c.set("rotate",{pan:"tertiary",rotate:"primary",zoom:"secondary"});h.set("default",f);h.set("pro",c);return k});
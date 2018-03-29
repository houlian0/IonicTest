// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.6/esri/copyright.txt for details.
//>>built
define("require exports ../../../webgl/ShaderVariations ./shaders/textShaderSnippets ./shaders/iconShaderSnippets ./shaders/fillShaderSnippets ./shaders/lineShaderSnippets ./MaterialInfoUtils ./enums".split(" "),function(p,q,f,h,k,l,m,n,e){return function(){function g(){this._programRep=new Map;this.isInitialize=!1}g.prototype.initialize=function(a){if(!this.isInitialize){var b=new f("text",["textVS","textFS"],[],h,a);b.addDefine("ID","ID",[!1,!1],"ID");b.addDefine("HIGHLIGHT","HIGHLIGHT",[!1,!1],
"HIGHLIGHT");b.addDefine("SDF","SDF",[!1,!1],"SDF");b.addDefine("VV_SIZE_MIN_MAX_VALUE","VV_SIZE_MIN_MAX_VALUE",[!1,!1],"VV_SIZE_MIN_MAX_VALUE");b.addDefine("VV_SIZE_SCALE_STOPS","VV_SIZE_SCALE_STOPS",[!1,!1],"VV_SIZE_SCALE_STOPS");b.addDefine("VV_SIZE_FIELD_STOPS","VV_SIZE_FIELD_STOPS",[!1,!1],"VV_SIZE_FIELD_STOPS");b.addDefine("VV_SIZE_UNIT_VALUE","VV_SIZE_UNIT_VALUE",[!1,!1],"VV_SIZE_UNIT_VALUE");b.addDefine("VV_COLOR","VV_COLOR",[!1,!1],"VV_COLOR");b.addDefine("VV_ROTATION","VV_ROTATION",[!1,
!1],"VV_ROTATION");b.addDefine("VV_OPACITY","VV_OPACITY",[!1,!1],"VV_OPACITY");b.addDefine("VERTEX_VISIBILITY","VERTEX_VISIBILITY",[!1,!1],"VERTEX_VISIBILITY");b.addDefine("PATTERN","PATTERN",[!1,!1],"PATTERN");b.addDefine("HEATMAP","HEATMAP",[!1,!1],"HEATMAP");var d=new f("icon",["iconVS","iconFS"],[],k,a);d.addDefine("ID","ID",[!0,!0],"ID");d.addDefine("HIGHLIGHT","HIGHLIGHT",[!0,!0],"HIGHLIGHT");d.addDefine("SDF","SDF",[!0,!0],"SDF");d.addDefine("VV_SIZE_MIN_MAX_VALUE","VV_SIZE_MIN_MAX_VALUE",
[!0,!1],"VV_SIZE_MIN_MAX_VALUE");d.addDefine("VV_SIZE_SCALE_STOPS","VV_SIZE_SCALE_STOPS",[!0,!1],"VV_SIZE_SCALE_STOPS");d.addDefine("VV_SIZE_FIELD_STOPS","VV_SIZE_FIELD_STOPS",[!0,!1],"VV_SIZE_FIELD_STOPS");d.addDefine("VV_SIZE_UNIT_VALUE","VV_SIZE_UNIT_VALUE",[!0,!1],"VV_SIZE_UNIT_VALUE");d.addDefine("VV_COLOR","VV_COLOR",[!0,!1],"VV_COLOR");d.addDefine("VV_ROTATION","VV_ROTATION",[!0,!1],"VV_ROTATION");d.addDefine("VV_OPACITY","VV_OPACITY",[!0,!1],"VV_OPACITY");d.addDefine("VERTEX_VISIBILITY","VERTEX_VISIBILITY",
[!1,!1],"VERTEX_VISIBILITY");d.addDefine("PATTERN","PATTERN",[!0,!0],"PATTERN");d.addDefine("HEATMAP","HEATMAP",[!0,!0],"HEATMAP");var c=new f("fill",["fillVS","fillFS"],[],l,a);c.addDefine("ID","ID",[!0,!0],"ID");c.addDefine("HIGHLIGHT","HIGHLIGHT",[!0,!0],"HIGHLIGHT");c.addDefine("SDF","SDF",[!1,!1],"SDF");c.addDefine("VV_SIZE_MIN_MAX_VALUE","VV_SIZE_MIN_MAX_VALUE",[!1,!1],"VV_SIZE_MIN_MAX_VALUE");c.addDefine("VV_SIZE_SCALE_STOPS","VV_SIZE_SCALE_STOPS",[!1,!1],"VV_SIZE_SCALE_STOPS");c.addDefine("VV_SIZE_FIELD_STOPS",
"VV_SIZE_FIELD_STOPS",[!1,!1],"VV_SIZE_FIELD_STOPS");c.addDefine("VV_SIZE_UNIT_VALUE","VV_SIZE_UNIT_VALUE",[!1,!1],"VV_SIZE_UNIT_VALUE");c.addDefine("VV_COLOR","VV_COLOR",[!0,!1],"VV_COLOR");c.addDefine("VV_ROTATION","VV_ROTATION",[!1,!1],"VV_ROTATION");c.addDefine("VV_OPACITY","VV_OPACITY",[!0,!1],"VV_OPACITY");c.addDefine("VERTEX_VISIBILITY","VERTEX_VISIBILITY",[!1,!1],"VERTEX_VISIBILITY");c.addDefine("PATTERN","PATTERN",[!0,!0],"PATTERN");c.addDefine("HEATMAP","HEATMAP",[!1,!1],"HEATMAP");a=new f("line",
["lineVS","lineFS"],[],m,a);a.addDefine("ID","ID",[!0,!0],"ID");a.addDefine("HIGHLIGHT","HIGHLIGHT",[!0,!0],"HIGHLIGHT");a.addDefine("SDF","SDF",[!0,!0],"SDF");a.addDefine("VV_SIZE_MIN_MAX_VALUE","VV_SIZE_MIN_MAX_VALUE",[!0,!1],"VV_SIZE_MIN_MAX_VALUE");a.addDefine("VV_SIZE_SCALE_STOPS","VV_SIZE_SCALE_STOPS",[!0,!1],"VV_SIZE_SCALE_STOPS");a.addDefine("VV_SIZE_FIELD_STOPS","VV_SIZE_FIELD_STOPS",[!0,!1],"VV_SIZE_FIELD_STOPS");a.addDefine("VV_SIZE_UNIT_VALUE","VV_SIZE_UNIT_VALUE",[!0,!1],"VV_SIZE_UNIT_VALUE");
a.addDefine("VV_COLOR","VV_COLOR",[!0,!1],"VV_COLOR");a.addDefine("VV_ROTATION","VV_ROTATION",[!0,!1],"VV_ROTATION");a.addDefine("VV_OPACITY","VV_OPACITY",[!0,!1],"VV_OPACITY");a.addDefine("VERTEX_VISIBILITY","VERTEX_VISIBILITY",[!1,!1],"VERTEX_VISIBILITY");a.addDefine("PATTERN","PATTERN",[!0,!0],"PATTERN");a.addDefine("HEATMAP","HEATMAP",[!1,!1],"HEATMAP");this._textShaderVariations=b;this._fillShaderVariations=c;this._iconShaderVariations=d;this._lineShaderVariations=a;this.isInitialize=!0}};g.prototype.getProgram=
function(a,b,d){a|=b===e.WGLDrawPhase.HITTEST?4:0;a|=b===e.WGLDrawPhase.HIGHLIGHT?8:0;if(this._programRep[a])return this._programRep[a];if(!this._iconShaderVariations||!this._fillShaderVariations||!this._lineShaderVariations)return null;b=n.getMaterialVariations(a);var c;switch(b.geometryType){case e.WGLGeometryType.MARKER:c=this._iconShaderVariations.getProgram(b.variations,null,null,d);break;case e.WGLGeometryType.TEXT:c=this._textShaderVariations.getProgram(b.variations,null,null,d);break;case e.WGLGeometryType.FILL:c=
this._fillShaderVariations.getProgram(b.variations,null,null,d);break;case e.WGLGeometryType.LINE:c=this._lineShaderVariations.getProgram(b.variations,null,null,d)}c&&(this._programRep[a]=c);return c};return g}()});
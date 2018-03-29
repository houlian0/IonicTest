// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.6/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/extendsHelper dojo/_base/lang ./Util ../../../webgl/Program ./DefaultVertexAttributeLocations".split(" "),function(r,t,u,n,k,p,q){return function(){function m(a,b,c,d,e,f,h){this.variables=[];this.sealed=!1;this.programCache={};k.assert(2===b.length,"you must specify shader snippet prefixes for vertex and fragment shaders");this.programNamePrefix=a;this.shaderSnippetPrefixes=b;this.baseDefines=c;this.programRep=d;this.snippets=f;this.rctx=h;this.baseDefines=
c?c.slice():[]}m.prototype.addDefine=function(a,b,c,d){k.assert(!this.sealed,"you cannot add another variable after the first program has been generated");k.assert(!!a,"you must specify a program name suffix");this.variables.push({programNameSuffixes:["",a],shaderNameSuffixes:d||a,defineStr:b,affectsShaderTypes:c||[!0,!0]})};m.prototype.addBinaryShaderSnippetSuffix=function(a,b,c){k.assert(!this.sealed,"you cannot add another variable after the first program has been generated");k.assert(!!a,"you must specify a program name suffix");
this.variables.push({programNameSuffixes:["",a],shaderSnippetSuffixes:["",b],affectsShaderTypes:c||[!0,!0]})};m.prototype.addNaryShaderSnippetSuffix=function(a,b){k.assert(!this.sealed,"you cannot add another variable after the first program has been generated");var c=a.map(function(a){k.assert(null!=a.value,"value must always be specified");return a.value});this.variables.push({values:c,programNameSuffixes:a.map(function(a,b){return null!=a.programNameSuffix?a.programNameSuffix:c[b]}),shaderSnippetSuffixes:a.map(function(a,
b){return null!=a.shaderSnippetSuffix?a.shaderSnippetSuffix:c[b]}),affectsShaderTypes:b||[!0,!0]})};m.prototype.getShaderVariation=function(a){k.assert(a.length===this.variables.length,"you must specify a value for each variable");for(var b=this.programNamePrefix,c=n.clone(this.shaderSnippetPrefixes),d=n.clone(this.shaderSnippetPrefixes),e=n.clone(this.baseDefines),f=0;f<this.variables.length;f++){var h=this.variables[f],g=a[f],l=void 0;h.values?(l=h.values.indexOf(g.toString()),k.assert(0<=l,"invalid value "+
g+" for variable "+f)):l=g?1:0;b+=h.programNameSuffixes[l];for(g=0;2>g;g++)h.affectsShaderTypes[g]&&(h.shaderSnippetSuffixes&&(c[g]+=h.shaderSnippetSuffixes[l],d[g]+=h.shaderSnippetSuffixes[l]),h.defineStr&&l&&(e.push(h.defineStr),d[g]+=h.shaderNameSuffixes))}return{programName:b,shaderSnippetNames:c,shaderNames:d,defines:e}};m.prototype.getProgram=function(a,b,c){void 0===b&&(b=this.snippets);void 0===c&&(c=this.rctx);this.sealed=!0;var d=a.reduce(function(a,b){return a+b.toString()},"");if(this.programCache[d])return this.programCache[d];
a=this.getShaderVariation(a);var e=this.programRep.get(a.programName);if(e)return e;var f=a.shaderSnippetNames[0],e=b[f];k.assert(null!=e,"shader snippet '"+f+"' does not exist");f=a.shaderSnippetNames[1];b=b[f];k.assert(null!=b,"shader snippet '"+f+"' does not exist");e=new p(c,e,b,q.Default3D,a.defines);this.programCache[d]=e;this.programRep.add(a.programName,e);return e};return m}()});
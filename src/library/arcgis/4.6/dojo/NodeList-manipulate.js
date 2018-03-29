//>>built
define("./query ./_base/lang ./_base/array ./dom-construct ./dom-attr ./NodeList-dom".split(" "),function(l,m,t,p,q){function r(a){for(;a.childNodes[0]&&1==a.childNodes[0].nodeType;)a=a.childNodes[0];return a}function n(a,c){"string"==typeof a?(a=p.toDom(a,c&&c.ownerDocument),11==a.nodeType&&(a=a.childNodes[0])):1==a.nodeType&&a.parentNode&&(a=a.cloneNode(!1));return a}var k=l.NodeList;m.extend(k,{_placeMultiple:function(a,c){a="string"==typeof a||a.nodeType?l(a):a;for(var b=[],d=0;d<a.length;d++)for(var g=
a[d],f=this.length,h=f-1,e;e=this[h];h--)0<d&&(e=this._cloneNode(e),b.unshift(e)),h==f-1?p.place(e,g,c):g.parentNode.insertBefore(e,g),g=e;b.length&&(b.unshift(0),b.unshift(this.length-1),Array.prototype.splice.apply(this,b));return this},innerHTML:function(a){return arguments.length?this.addContent(a,"only"):this[0].innerHTML},text:function(a){if(arguments.length){for(var c=0,b;b=this[c];c++)1==b.nodeType&&q.set(b,"textContent",a);return this}for(var d="",c=0;b=this[c];c++)d+=q.get(b,"textContent");
return d},val:function(a){if(arguments.length){for(var c=m.isArray(a),b=0,d;d=this[b];b++){var g=d.nodeName.toUpperCase(),f=d.type,h=c?a[b]:a;if("SELECT"==g)for(g=d.options,f=0;f<g.length;f++){var e=g[f];e.selected=d.multiple?-1!=t.indexOf(a,e.value):e.value==h}else"checkbox"==f||"radio"==f?d.checked=d.value==h:d.value=h}return this}if((d=this[0])&&1==d.nodeType){a=d.value||"";if("SELECT"==d.nodeName.toUpperCase()&&d.multiple){a=[];g=d.options;for(f=0;f<g.length;f++)e=g[f],e.selected&&a.push(e.value);
a.length||(a=null)}return a}},append:function(a){return this.addContent(a,"last")},appendTo:function(a){return this._placeMultiple(a,"last")},prepend:function(a){return this.addContent(a,"first")},prependTo:function(a){return this._placeMultiple(a,"first")},after:function(a){return this.addContent(a,"after")},insertAfter:function(a){return this._placeMultiple(a,"after")},before:function(a){return this.addContent(a,"before")},insertBefore:function(a){return this._placeMultiple(a,"before")},remove:k.prototype.orphan,
wrap:function(a){if(this[0]){a=n(a,this[0]);for(var c=0,b;b=this[c];c++){var d=this._cloneNode(a);b.parentNode&&b.parentNode.replaceChild(d,b);r(d).appendChild(b)}}return this},wrapAll:function(a){if(this[0]){a=n(a,this[0]);this[0].parentNode.replaceChild(a,this[0]);a=r(a);for(var c=0,b;b=this[c];c++)a.appendChild(b)}return this},wrapInner:function(a){if(this[0]){a=n(a,this[0]);for(var c=0;c<this.length;c++){var b=this._cloneNode(a);this._wrap(m._toArray(this[c].childNodes),null,this._NodeListCtor).wrapAll(b)}}return this},
replaceWith:function(a){a=this._normalize(a,this[0]);for(var c=0,b;b=this[c];c++)this._place(a,b,"before",0<c),b.parentNode.removeChild(b);return this},replaceAll:function(a){a=l(a);for(var c=this._normalize(this,this[0]),b=0,d;d=a[b];b++)this._place(c,d,"before",0<b),d.parentNode.removeChild(d);return this},clone:function(){for(var a=[],c=0;c<this.length;c++)a.push(this._cloneNode(this[c]));return this._wrap(a,this,this._NodeListCtor)}});k.prototype.html||(k.prototype.html=k.prototype.innerHTML);
return k});
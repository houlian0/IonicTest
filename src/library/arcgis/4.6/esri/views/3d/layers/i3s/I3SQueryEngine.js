// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.6/esri/copyright.txt for details.
//>>built
define("require exports dojo/promise/all ../../../../core/promiseUtils ../../../../core/Error ../../../../tasks/support/FeatureSet".split(" "),function(l,m,g,e,h,k){return function(){function d(a,b){this._support=a;this._options=b}d.prototype.queryExtent=function(a){var b=this;return this._rejectUnsupported(a).then(function(){var c=0,f=b._support.createExtentBuilder();b._forAllQueried(a,function(a){c++;f.add(a)});return{count:c,extent:0===c?null:f.getExtent()}})};d.prototype.queryFeatureCount=function(a){var b=
this;return this._rejectUnsupported(a).then(function(){var c=0;b._forAllQueried(a,function(){return c++});return c})};d.prototype.queryFeatures=function(a){var b=this;return this._rejectUnsupported(a).then(function(){var c=[],f=a&&a.outFields,d=[];b._forAllQueried(a,function(a){return d.push(b._support.createGraphic(a))},function(a){f&&(c.push(b._support.requestFields(a,d,f)),d=[])});f||c.push(e.resolve(d));return g(c)}).then(function(a){a=a.reduce(function(a,b){return a.concat(b)},[]);var b=new k;
b.features=a;return b})};d.prototype.queryObjectIds=function(a){var b=this;return this._rejectUnsupported(a).then(function(){var c=[];b._forAllQueried(a,function(a){return c.push(a.id)});return c})};d.defaultExtentBuilder=function(a){var b=null;return{add:function(c){(c=a(c))&&(b=null!=b?b.union(c):c.clone())},getExtent:function(){return b}}};d.prototype._forAllQueried=function(a,b,c){var d=[];if(a&&a.objectIds){var e=a.objectIds;d.push(function(a){return 0<=e.indexOf(a.id)})}this._support.forAll(function(a){for(var c=
0;c<d.length;c++)if(!(0,d[c])(a))return;b(a)},c)};d.prototype._rejectUnsupported=function(a){if(null==a)return e.resolve();var b=function(a){return e.reject(new h("Unsupported Query","Unsupported property '"+a+"'"))};return null!=a.distance?b("distance"):null!=a.geometryPrecision?b("geometryPrecision"):a.groupByFieldsForStatistics&&a.groupByFieldsForStatistics.length?b("groupByFieldsForStatistics"):null!=a.maxAllowableOffset?b("maxAllowableOffset"):a.multipatchOption?b("multipatchOption"):null!=a.num?
b("num"):a.orderByFields&&a.orderByFields.length?b("orderByFields"):a.outSpatialReference?b("outSpatialReference"):a.outStatistics&&a.outStatistics.length?b("outStatistics"):a.pixelSize?b("pixelSize"):a.quantizationParameters?b("quantizationParameters"):a.relationParameter?b("relationParameter"):a.returnDistinctValues?b("returnDistinctValues"):null!=a.start?b("start"):a.text?b("text"):a.timeExtent?b("timeExtent"):a.where?b("where"):a.geometry?b("geometry"):!this._options.enableOutFields&&a.outFields&&
a.outFields.length?b("outFields"):!this._options.enableObjectId&&a.objectIds&&a.objectIds.length?b("objectIds"):e.resolve()};return d}()});
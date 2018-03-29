// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.6/esri/copyright.txt for details.
//>>built
define("dojo/_base/array dojo/_base/lang ../request ./Task ../geometry/SpatialReference ./support/AddressCandidate".split(" "),function(l,f,k,m,q,h){return m.createSubclass({declaredClass:"esri.tasks.Locator",properties:{categories:{value:null,type:[String]},countryCode:{value:null,type:String},outSpatialReference:{value:null,type:q},url:{}},addressToLocations:function(a,c){var d,e=a.outFields,g=a.searchExtent,b=a.countryCode,h=a.magicKey,r=a.distance,n=a.categories,l=a.maxLocations,m=a.forStorage;
a.location&&this.normalization&&(d=a.location.clone().normalize());g&&(g=g.shiftCentralMeridian());a=a.address;var p=this.outSpatialReference;a={query:this._encode(f.mixin({},this.parsedUrl.query,a,{f:"json",outSR:p&&JSON.stringify(p.toJSON()),outFields:e&&e.join(",")||null,searchExtent:g&&JSON.stringify(g.toJSON()),category:n&&n.join(",")||null,countryCode:b||null,magicKey:h||null,distance:r||null,location:d||null,maxLocations:l||null,forStorage:m||null})),callbackParamName:"callback"};if(this.requestOptions||
c)a=f.mixin({},this.requestOptions,c,a);return k(this.parsedUrl.path+"/findAddressCandidates",a).then(this._handleAddressToLocationsResponse)},suggestLocations:function(a,c){a.hasOwnProperty("location")&&this.normalization&&(a.location=a.location.clone().normalize());a.searchExtent&&(a.searchExtent=a.searchExtent.shiftCentralMeridian());a={query:this._encode(f.mixin({},this.parsedUrl.query,{f:"json",text:a.text,maxSuggestions:a.maxSuggestions,searchExtent:a.searchExtent&&JSON.stringify(a.searchExtent.toJSON()),
category:a.categories&&a.categories.join(",")||null,countryCode:a.countryCode||null,location:a.location||null,distance:a.distance||null},{f:"json"})),callbackParamName:"callback"};if(this.requestOptions||c)a=f.mixin({},this.requestOptions,c,a);return k(this.parsedUrl.path+"/suggest",a).then(this._handleSuggestLocationsResponse)},addressesToLocations:function(a,c){var d=this.outSpatialReference,e=[],g=a.categories,b=a.countryCode;l.forEach(a.addresses,function(a,b){e.push({attributes:a})});a={query:this._encode(f.mixin({},
this.parsedUrl.query,{category:g&&g.join(",")||null,sourceCountry:b||null},{addresses:JSON.stringify({records:e})},{f:"json",outSR:d&&JSON.stringify(d.toJSON())})),callbackParamName:"callback"};if(this.requestOptions||c)a=f.mixin({},this.requestOptions,c,a);return k(this.parsedUrl.path+"/geocodeAddresses",a).then(this._handleAddressesToLocationsResponse)},locationToAddress:function(a,c,d){a&&this.normalization&&(a=a.clone().normalize());var e=this.outSpatialReference;a={query:this._encode(f.mixin({},
this.parsedUrl.query,{outSR:e&&JSON.stringify(e.toJSON()),location:a&&JSON.stringify(a.toJSON()),distance:c,f:"json"})),callbackParamName:"callback"};if(this.requestOptions||d)a=f.mixin({},this.requestOptions,d,a);return k(this.parsedUrl.path+"/reverseGeocode",a).then(this._handleLocationToAddressResponse)},_handleAddressToLocationsResponse:function(a){a=a.data;var c=a.spatialReference,d,e;return(a.candidates||[]).map(function(a){d=a.extent;var b=e=a.location;(b=!(b&&b.hasOwnProperty("x")&&"NaN"!==
b.x&&b.hasOwnProperty("y")&&"NaN"!==b.y))||(b=d,b=!(!b||b.hasOwnProperty("xmin")&&"NaN"!==b.xmin&&b.hasOwnProperty("ymin")&&"NaN"!==b.ymin&&b.hasOwnProperty("xmax")&&"NaN"!==b.xmax&&b.hasOwnProperty("ymax")&&"NaN"!==b.ymax));if(!b)return d&&(d.spatialReference=c),e&&(e.spatialReference=c),h.fromJSON(a)}).filter(function(a){return!!a})},_handleSuggestLocationsResponse:function(a){return a.data.suggestions||[]},_handleAddressesToLocationsResponse:function(a){a=a.data;var c=a.spatialReference,d;return(a.locations||
[]).map(function(a){if(d=a.location)d.spatialReference=c;return h.fromJSON(a)})},_handleLocationToAddressResponse:function(a){a=a.data;var c=a.address||{};return h.fromJSON({address:c.Match_addr||"",attributes:c,location:a.location,score:100})}})});
goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_60930 = (function (this$){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4522__auto__.call(null,this$));
} else {
var m__4519__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4519__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_60930(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_60934 = (function (this$){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4522__auto__.call(null,this$));
} else {
var m__4519__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4519__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_60934(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__60277 = coll;
var G__60278 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__60277,G__60278) : shadow.dom.lazy_native_coll_seq.call(null,G__60277,G__60278));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4223__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__60287 = arguments.length;
switch (G__60287) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__60292 = arguments.length;
switch (G__60292) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__60295 = arguments.length;
switch (G__60295) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__60311 = arguments.length;
switch (G__60311) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__60318 = arguments.length;
switch (G__60318) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__60336 = arguments.length;
switch (G__60336) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4223__auto__ = (!((typeof document !== 'undefined')));
if(or__4223__auto__){
return or__4223__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e60347){if((e60347 instanceof Object)){
var e = e60347;
return console.log("didnt support attachEvent",el,e);
} else {
throw e60347;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4223__auto__ = (!((typeof document !== 'undefined')));
if(or__4223__auto__){
return or__4223__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__60358 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__60359 = null;
var count__60360 = (0);
var i__60361 = (0);
while(true){
if((i__60361 < count__60360)){
var el = chunk__60359.cljs$core$IIndexed$_nth$arity$2(null,i__60361);
var handler_60955__$1 = ((function (seq__60358,chunk__60359,count__60360,i__60361,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__60358,chunk__60359,count__60360,i__60361,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_60955__$1);


var G__60956 = seq__60358;
var G__60957 = chunk__60359;
var G__60958 = count__60360;
var G__60959 = (i__60361 + (1));
seq__60358 = G__60956;
chunk__60359 = G__60957;
count__60360 = G__60958;
i__60361 = G__60959;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__60358);
if(temp__5753__auto__){
var seq__60358__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60358__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__60358__$1);
var G__60960 = cljs.core.chunk_rest(seq__60358__$1);
var G__60961 = c__4649__auto__;
var G__60962 = cljs.core.count(c__4649__auto__);
var G__60963 = (0);
seq__60358 = G__60960;
chunk__60359 = G__60961;
count__60360 = G__60962;
i__60361 = G__60963;
continue;
} else {
var el = cljs.core.first(seq__60358__$1);
var handler_60964__$1 = ((function (seq__60358,chunk__60359,count__60360,i__60361,el,seq__60358__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__60358,chunk__60359,count__60360,i__60361,el,seq__60358__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_60964__$1);


var G__60965 = cljs.core.next(seq__60358__$1);
var G__60966 = null;
var G__60967 = (0);
var G__60968 = (0);
seq__60358 = G__60965;
chunk__60359 = G__60966;
count__60360 = G__60967;
i__60361 = G__60968;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__60383 = arguments.length;
switch (G__60383) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__60392 = cljs.core.seq(events);
var chunk__60393 = null;
var count__60394 = (0);
var i__60395 = (0);
while(true){
if((i__60395 < count__60394)){
var vec__60412 = chunk__60393.cljs$core$IIndexed$_nth$arity$2(null,i__60395);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60412,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60412,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__60970 = seq__60392;
var G__60971 = chunk__60393;
var G__60972 = count__60394;
var G__60973 = (i__60395 + (1));
seq__60392 = G__60970;
chunk__60393 = G__60971;
count__60394 = G__60972;
i__60395 = G__60973;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__60392);
if(temp__5753__auto__){
var seq__60392__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60392__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__60392__$1);
var G__60974 = cljs.core.chunk_rest(seq__60392__$1);
var G__60975 = c__4649__auto__;
var G__60976 = cljs.core.count(c__4649__auto__);
var G__60977 = (0);
seq__60392 = G__60974;
chunk__60393 = G__60975;
count__60394 = G__60976;
i__60395 = G__60977;
continue;
} else {
var vec__60418 = cljs.core.first(seq__60392__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60418,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60418,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__60978 = cljs.core.next(seq__60392__$1);
var G__60979 = null;
var G__60980 = (0);
var G__60981 = (0);
seq__60392 = G__60978;
chunk__60393 = G__60979;
count__60394 = G__60980;
i__60395 = G__60981;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__60427 = cljs.core.seq(styles);
var chunk__60428 = null;
var count__60429 = (0);
var i__60430 = (0);
while(true){
if((i__60430 < count__60429)){
var vec__60445 = chunk__60428.cljs$core$IIndexed$_nth$arity$2(null,i__60430);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60445,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60445,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__60982 = seq__60427;
var G__60983 = chunk__60428;
var G__60984 = count__60429;
var G__60985 = (i__60430 + (1));
seq__60427 = G__60982;
chunk__60428 = G__60983;
count__60429 = G__60984;
i__60430 = G__60985;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__60427);
if(temp__5753__auto__){
var seq__60427__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60427__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__60427__$1);
var G__60986 = cljs.core.chunk_rest(seq__60427__$1);
var G__60987 = c__4649__auto__;
var G__60988 = cljs.core.count(c__4649__auto__);
var G__60989 = (0);
seq__60427 = G__60986;
chunk__60428 = G__60987;
count__60429 = G__60988;
i__60430 = G__60989;
continue;
} else {
var vec__60452 = cljs.core.first(seq__60427__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60452,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60452,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__60990 = cljs.core.next(seq__60427__$1);
var G__60991 = null;
var G__60992 = (0);
var G__60993 = (0);
seq__60427 = G__60990;
chunk__60428 = G__60991;
count__60429 = G__60992;
i__60430 = G__60993;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__60460_60994 = key;
var G__60460_60995__$1 = (((G__60460_60994 instanceof cljs.core.Keyword))?G__60460_60994.fqn:null);
switch (G__60460_60995__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_60997 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4223__auto__ = goog.string.startsWith(ks_60997,"data-");
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return goog.string.startsWith(ks_60997,"aria-");
}
})())){
el.setAttribute(ks_60997,value);
} else {
(el[ks_60997] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__60483){
var map__60484 = p__60483;
var map__60484__$1 = cljs.core.__destructure_map(map__60484);
var props = map__60484__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60484__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__60485 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60485,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60485,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60485,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__60488 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__60488,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__60488;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__60490 = arguments.length;
switch (G__60490) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__60493){
var vec__60494 = p__60493;
var seq__60495 = cljs.core.seq(vec__60494);
var first__60496 = cljs.core.first(seq__60495);
var seq__60495__$1 = cljs.core.next(seq__60495);
var nn = first__60496;
var first__60496__$1 = cljs.core.first(seq__60495__$1);
var seq__60495__$2 = cljs.core.next(seq__60495__$1);
var np = first__60496__$1;
var nc = seq__60495__$2;
var node = vec__60494;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__60499 = nn;
var G__60500 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__60499,G__60500) : create_fn.call(null,G__60499,G__60500));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__60501 = nn;
var G__60502 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__60501,G__60502) : create_fn.call(null,G__60501,G__60502));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__60503 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60503,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60503,(1),null);
var seq__60506_61002 = cljs.core.seq(node_children);
var chunk__60507_61003 = null;
var count__60508_61004 = (0);
var i__60509_61005 = (0);
while(true){
if((i__60509_61005 < count__60508_61004)){
var child_struct_61006 = chunk__60507_61003.cljs$core$IIndexed$_nth$arity$2(null,i__60509_61005);
var children_61007 = shadow.dom.dom_node(child_struct_61006);
if(cljs.core.seq_QMARK_(children_61007)){
var seq__60532_61008 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_61007));
var chunk__60534_61009 = null;
var count__60535_61010 = (0);
var i__60536_61011 = (0);
while(true){
if((i__60536_61011 < count__60535_61010)){
var child_61012 = chunk__60534_61009.cljs$core$IIndexed$_nth$arity$2(null,i__60536_61011);
if(cljs.core.truth_(child_61012)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_61012);


var G__61013 = seq__60532_61008;
var G__61014 = chunk__60534_61009;
var G__61015 = count__60535_61010;
var G__61016 = (i__60536_61011 + (1));
seq__60532_61008 = G__61013;
chunk__60534_61009 = G__61014;
count__60535_61010 = G__61015;
i__60536_61011 = G__61016;
continue;
} else {
var G__61017 = seq__60532_61008;
var G__61018 = chunk__60534_61009;
var G__61019 = count__60535_61010;
var G__61020 = (i__60536_61011 + (1));
seq__60532_61008 = G__61017;
chunk__60534_61009 = G__61018;
count__60535_61010 = G__61019;
i__60536_61011 = G__61020;
continue;
}
} else {
var temp__5753__auto___61021 = cljs.core.seq(seq__60532_61008);
if(temp__5753__auto___61021){
var seq__60532_61022__$1 = temp__5753__auto___61021;
if(cljs.core.chunked_seq_QMARK_(seq__60532_61022__$1)){
var c__4649__auto___61023 = cljs.core.chunk_first(seq__60532_61022__$1);
var G__61024 = cljs.core.chunk_rest(seq__60532_61022__$1);
var G__61025 = c__4649__auto___61023;
var G__61026 = cljs.core.count(c__4649__auto___61023);
var G__61027 = (0);
seq__60532_61008 = G__61024;
chunk__60534_61009 = G__61025;
count__60535_61010 = G__61026;
i__60536_61011 = G__61027;
continue;
} else {
var child_61028 = cljs.core.first(seq__60532_61022__$1);
if(cljs.core.truth_(child_61028)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_61028);


var G__61029 = cljs.core.next(seq__60532_61022__$1);
var G__61030 = null;
var G__61031 = (0);
var G__61032 = (0);
seq__60532_61008 = G__61029;
chunk__60534_61009 = G__61030;
count__60535_61010 = G__61031;
i__60536_61011 = G__61032;
continue;
} else {
var G__61033 = cljs.core.next(seq__60532_61022__$1);
var G__61034 = null;
var G__61035 = (0);
var G__61036 = (0);
seq__60532_61008 = G__61033;
chunk__60534_61009 = G__61034;
count__60535_61010 = G__61035;
i__60536_61011 = G__61036;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_61007);
}


var G__61037 = seq__60506_61002;
var G__61038 = chunk__60507_61003;
var G__61039 = count__60508_61004;
var G__61040 = (i__60509_61005 + (1));
seq__60506_61002 = G__61037;
chunk__60507_61003 = G__61038;
count__60508_61004 = G__61039;
i__60509_61005 = G__61040;
continue;
} else {
var temp__5753__auto___61041 = cljs.core.seq(seq__60506_61002);
if(temp__5753__auto___61041){
var seq__60506_61042__$1 = temp__5753__auto___61041;
if(cljs.core.chunked_seq_QMARK_(seq__60506_61042__$1)){
var c__4649__auto___61043 = cljs.core.chunk_first(seq__60506_61042__$1);
var G__61044 = cljs.core.chunk_rest(seq__60506_61042__$1);
var G__61045 = c__4649__auto___61043;
var G__61046 = cljs.core.count(c__4649__auto___61043);
var G__61047 = (0);
seq__60506_61002 = G__61044;
chunk__60507_61003 = G__61045;
count__60508_61004 = G__61046;
i__60509_61005 = G__61047;
continue;
} else {
var child_struct_61048 = cljs.core.first(seq__60506_61042__$1);
var children_61049 = shadow.dom.dom_node(child_struct_61048);
if(cljs.core.seq_QMARK_(children_61049)){
var seq__60549_61050 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_61049));
var chunk__60551_61051 = null;
var count__60552_61052 = (0);
var i__60553_61053 = (0);
while(true){
if((i__60553_61053 < count__60552_61052)){
var child_61054 = chunk__60551_61051.cljs$core$IIndexed$_nth$arity$2(null,i__60553_61053);
if(cljs.core.truth_(child_61054)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_61054);


var G__61055 = seq__60549_61050;
var G__61056 = chunk__60551_61051;
var G__61057 = count__60552_61052;
var G__61058 = (i__60553_61053 + (1));
seq__60549_61050 = G__61055;
chunk__60551_61051 = G__61056;
count__60552_61052 = G__61057;
i__60553_61053 = G__61058;
continue;
} else {
var G__61059 = seq__60549_61050;
var G__61060 = chunk__60551_61051;
var G__61061 = count__60552_61052;
var G__61062 = (i__60553_61053 + (1));
seq__60549_61050 = G__61059;
chunk__60551_61051 = G__61060;
count__60552_61052 = G__61061;
i__60553_61053 = G__61062;
continue;
}
} else {
var temp__5753__auto___61063__$1 = cljs.core.seq(seq__60549_61050);
if(temp__5753__auto___61063__$1){
var seq__60549_61065__$1 = temp__5753__auto___61063__$1;
if(cljs.core.chunked_seq_QMARK_(seq__60549_61065__$1)){
var c__4649__auto___61066 = cljs.core.chunk_first(seq__60549_61065__$1);
var G__61067 = cljs.core.chunk_rest(seq__60549_61065__$1);
var G__61068 = c__4649__auto___61066;
var G__61069 = cljs.core.count(c__4649__auto___61066);
var G__61070 = (0);
seq__60549_61050 = G__61067;
chunk__60551_61051 = G__61068;
count__60552_61052 = G__61069;
i__60553_61053 = G__61070;
continue;
} else {
var child_61072 = cljs.core.first(seq__60549_61065__$1);
if(cljs.core.truth_(child_61072)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_61072);


var G__61073 = cljs.core.next(seq__60549_61065__$1);
var G__61074 = null;
var G__61075 = (0);
var G__61076 = (0);
seq__60549_61050 = G__61073;
chunk__60551_61051 = G__61074;
count__60552_61052 = G__61075;
i__60553_61053 = G__61076;
continue;
} else {
var G__61077 = cljs.core.next(seq__60549_61065__$1);
var G__61078 = null;
var G__61079 = (0);
var G__61080 = (0);
seq__60549_61050 = G__61077;
chunk__60551_61051 = G__61078;
count__60552_61052 = G__61079;
i__60553_61053 = G__61080;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_61049);
}


var G__61081 = cljs.core.next(seq__60506_61042__$1);
var G__61082 = null;
var G__61083 = (0);
var G__61084 = (0);
seq__60506_61002 = G__61081;
chunk__60507_61003 = G__61082;
count__60508_61004 = G__61083;
i__60509_61005 = G__61084;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__60567 = cljs.core.seq(node);
var chunk__60568 = null;
var count__60569 = (0);
var i__60570 = (0);
while(true){
if((i__60570 < count__60569)){
var n = chunk__60568.cljs$core$IIndexed$_nth$arity$2(null,i__60570);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__61090 = seq__60567;
var G__61091 = chunk__60568;
var G__61092 = count__60569;
var G__61093 = (i__60570 + (1));
seq__60567 = G__61090;
chunk__60568 = G__61091;
count__60569 = G__61092;
i__60570 = G__61093;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__60567);
if(temp__5753__auto__){
var seq__60567__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60567__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__60567__$1);
var G__61094 = cljs.core.chunk_rest(seq__60567__$1);
var G__61095 = c__4649__auto__;
var G__61096 = cljs.core.count(c__4649__auto__);
var G__61097 = (0);
seq__60567 = G__61094;
chunk__60568 = G__61095;
count__60569 = G__61096;
i__60570 = G__61097;
continue;
} else {
var n = cljs.core.first(seq__60567__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__61098 = cljs.core.next(seq__60567__$1);
var G__61099 = null;
var G__61100 = (0);
var G__61101 = (0);
seq__60567 = G__61098;
chunk__60568 = G__61099;
count__60569 = G__61100;
i__60570 = G__61101;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__60575 = arguments.length;
switch (G__60575) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__60580 = arguments.length;
switch (G__60580) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__60598 = arguments.length;
switch (G__60598) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4223__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4835__auto__ = [];
var len__4829__auto___61108 = arguments.length;
var i__4830__auto___61109 = (0);
while(true){
if((i__4830__auto___61109 < len__4829__auto___61108)){
args__4835__auto__.push((arguments[i__4830__auto___61109]));

var G__61110 = (i__4830__auto___61109 + (1));
i__4830__auto___61109 = G__61110;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__60612_61112 = cljs.core.seq(nodes);
var chunk__60613_61113 = null;
var count__60614_61114 = (0);
var i__60615_61115 = (0);
while(true){
if((i__60615_61115 < count__60614_61114)){
var node_61117 = chunk__60613_61113.cljs$core$IIndexed$_nth$arity$2(null,i__60615_61115);
fragment.appendChild(shadow.dom._to_dom(node_61117));


var G__61118 = seq__60612_61112;
var G__61119 = chunk__60613_61113;
var G__61120 = count__60614_61114;
var G__61121 = (i__60615_61115 + (1));
seq__60612_61112 = G__61118;
chunk__60613_61113 = G__61119;
count__60614_61114 = G__61120;
i__60615_61115 = G__61121;
continue;
} else {
var temp__5753__auto___61122 = cljs.core.seq(seq__60612_61112);
if(temp__5753__auto___61122){
var seq__60612_61123__$1 = temp__5753__auto___61122;
if(cljs.core.chunked_seq_QMARK_(seq__60612_61123__$1)){
var c__4649__auto___61125 = cljs.core.chunk_first(seq__60612_61123__$1);
var G__61126 = cljs.core.chunk_rest(seq__60612_61123__$1);
var G__61127 = c__4649__auto___61125;
var G__61128 = cljs.core.count(c__4649__auto___61125);
var G__61129 = (0);
seq__60612_61112 = G__61126;
chunk__60613_61113 = G__61127;
count__60614_61114 = G__61128;
i__60615_61115 = G__61129;
continue;
} else {
var node_61130 = cljs.core.first(seq__60612_61123__$1);
fragment.appendChild(shadow.dom._to_dom(node_61130));


var G__61132 = cljs.core.next(seq__60612_61123__$1);
var G__61133 = null;
var G__61134 = (0);
var G__61135 = (0);
seq__60612_61112 = G__61132;
chunk__60613_61113 = G__61133;
count__60614_61114 = G__61134;
i__60615_61115 = G__61135;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq60608){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60608));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__60616_61138 = cljs.core.seq(scripts);
var chunk__60617_61139 = null;
var count__60618_61140 = (0);
var i__60619_61141 = (0);
while(true){
if((i__60619_61141 < count__60618_61140)){
var vec__60631_61142 = chunk__60617_61139.cljs$core$IIndexed$_nth$arity$2(null,i__60619_61141);
var script_tag_61143 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60631_61142,(0),null);
var script_body_61144 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60631_61142,(1),null);
eval(script_body_61144);


var G__61145 = seq__60616_61138;
var G__61146 = chunk__60617_61139;
var G__61147 = count__60618_61140;
var G__61148 = (i__60619_61141 + (1));
seq__60616_61138 = G__61145;
chunk__60617_61139 = G__61146;
count__60618_61140 = G__61147;
i__60619_61141 = G__61148;
continue;
} else {
var temp__5753__auto___61149 = cljs.core.seq(seq__60616_61138);
if(temp__5753__auto___61149){
var seq__60616_61150__$1 = temp__5753__auto___61149;
if(cljs.core.chunked_seq_QMARK_(seq__60616_61150__$1)){
var c__4649__auto___61151 = cljs.core.chunk_first(seq__60616_61150__$1);
var G__61152 = cljs.core.chunk_rest(seq__60616_61150__$1);
var G__61153 = c__4649__auto___61151;
var G__61154 = cljs.core.count(c__4649__auto___61151);
var G__61155 = (0);
seq__60616_61138 = G__61152;
chunk__60617_61139 = G__61153;
count__60618_61140 = G__61154;
i__60619_61141 = G__61155;
continue;
} else {
var vec__60638_61156 = cljs.core.first(seq__60616_61150__$1);
var script_tag_61157 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60638_61156,(0),null);
var script_body_61158 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60638_61156,(1),null);
eval(script_body_61158);


var G__61159 = cljs.core.next(seq__60616_61150__$1);
var G__61160 = null;
var G__61161 = (0);
var G__61162 = (0);
seq__60616_61138 = G__61159;
chunk__60617_61139 = G__61160;
count__60618_61140 = G__61161;
i__60619_61141 = G__61162;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__60642){
var vec__60644 = p__60642;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60644,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60644,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__60657 = arguments.length;
switch (G__60657) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__60676 = cljs.core.seq(style_keys);
var chunk__60677 = null;
var count__60678 = (0);
var i__60679 = (0);
while(true){
if((i__60679 < count__60678)){
var it = chunk__60677.cljs$core$IIndexed$_nth$arity$2(null,i__60679);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__61167 = seq__60676;
var G__61168 = chunk__60677;
var G__61169 = count__60678;
var G__61170 = (i__60679 + (1));
seq__60676 = G__61167;
chunk__60677 = G__61168;
count__60678 = G__61169;
i__60679 = G__61170;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__60676);
if(temp__5753__auto__){
var seq__60676__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60676__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__60676__$1);
var G__61171 = cljs.core.chunk_rest(seq__60676__$1);
var G__61172 = c__4649__auto__;
var G__61173 = cljs.core.count(c__4649__auto__);
var G__61174 = (0);
seq__60676 = G__61171;
chunk__60677 = G__61172;
count__60678 = G__61173;
i__60679 = G__61174;
continue;
} else {
var it = cljs.core.first(seq__60676__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__61175 = cljs.core.next(seq__60676__$1);
var G__61176 = null;
var G__61177 = (0);
var G__61178 = (0);
seq__60676 = G__61175;
chunk__60677 = G__61176;
count__60678 = G__61177;
i__60679 = G__61178;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k60683,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__60687 = k60683;
var G__60687__$1 = (((G__60687 instanceof cljs.core.Keyword))?G__60687.fqn:null);
switch (G__60687__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k60683,else__4475__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__60692){
var vec__60694 = p__60692;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60694,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60694,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__60682){
var self__ = this;
var G__60682__$1 = this;
return (new cljs.core.RecordIter((0),G__60682__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this60684,other60685){
var self__ = this;
var this60684__$1 = this;
return (((!((other60685 == null)))) && ((((this60684__$1.constructor === other60685.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60684__$1.x,other60685.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60684__$1.y,other60685.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60684__$1.__extmap,other60685.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k60683){
var self__ = this;
var this__4479__auto____$1 = this;
var G__60709 = k60683;
var G__60709__$1 = (((G__60709 instanceof cljs.core.Keyword))?G__60709.fqn:null);
switch (G__60709__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k60683);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__60682){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__60710 = cljs.core.keyword_identical_QMARK_;
var expr__60711 = k__4481__auto__;
if(cljs.core.truth_((pred__60710.cljs$core$IFn$_invoke$arity$2 ? pred__60710.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__60711) : pred__60710.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__60711)))){
return (new shadow.dom.Coordinate(G__60682,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__60710.cljs$core$IFn$_invoke$arity$2 ? pred__60710.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__60711) : pred__60710.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__60711)))){
return (new shadow.dom.Coordinate(self__.x,G__60682,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__60682),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__60682){
var self__ = this;
var this__4471__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__60682,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__60686){
var extmap__4512__auto__ = (function (){var G__60720 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__60686,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__60686)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__60720);
} else {
return G__60720;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__60686),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__60686),null,cljs.core.not_empty(extmap__4512__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k60725,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__60729 = k60725;
var G__60729__$1 = (((G__60729 instanceof cljs.core.Keyword))?G__60729.fqn:null);
switch (G__60729__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k60725,else__4475__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__60732){
var vec__60734 = p__60732;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60734,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60734,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#shadow.dom.Size{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__60724){
var self__ = this;
var G__60724__$1 = this;
return (new cljs.core.RecordIter((0),G__60724__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this60726,other60727){
var self__ = this;
var this60726__$1 = this;
return (((!((other60727 == null)))) && ((((this60726__$1.constructor === other60727.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60726__$1.w,other60727.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60726__$1.h,other60727.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this60726__$1.__extmap,other60727.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k60725){
var self__ = this;
var this__4479__auto____$1 = this;
var G__60742 = k60725;
var G__60742__$1 = (((G__60742 instanceof cljs.core.Keyword))?G__60742.fqn:null);
switch (G__60742__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k60725);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__60724){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__60744 = cljs.core.keyword_identical_QMARK_;
var expr__60745 = k__4481__auto__;
if(cljs.core.truth_((pred__60744.cljs$core$IFn$_invoke$arity$2 ? pred__60744.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__60745) : pred__60744.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__60745)))){
return (new shadow.dom.Size(G__60724,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__60744.cljs$core$IFn$_invoke$arity$2 ? pred__60744.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__60745) : pred__60744.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__60745)))){
return (new shadow.dom.Size(self__.w,G__60724,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__60724),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__60724){
var self__ = this;
var this__4471__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__60724,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__60728){
var extmap__4512__auto__ = (function (){var G__60760 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__60728,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__60728)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__60760);
} else {
return G__60760;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__60728),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__60728),null,cljs.core.not_empty(extmap__4512__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4703__auto__ = opts;
var l__4704__auto__ = a__4703__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4704__auto__)){
var G__61188 = (i + (1));
var G__61189 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__61188;
ret = G__61189;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__60772){
var vec__60773 = p__60772;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60773,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60773,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__60780 = arguments.length;
switch (G__60780) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5751__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5751__auto__)){
var child = temp__5751__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__61196 = ps;
var G__61197 = (i + (1));
el__$1 = G__61196;
i = G__61197;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__60798 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60798,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60798,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60798,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__60801_61198 = cljs.core.seq(props);
var chunk__60802_61199 = null;
var count__60803_61200 = (0);
var i__60804_61201 = (0);
while(true){
if((i__60804_61201 < count__60803_61200)){
var vec__60811_61202 = chunk__60802_61199.cljs$core$IIndexed$_nth$arity$2(null,i__60804_61201);
var k_61203 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60811_61202,(0),null);
var v_61204 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60811_61202,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_61203);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_61203),v_61204);


var G__61205 = seq__60801_61198;
var G__61206 = chunk__60802_61199;
var G__61207 = count__60803_61200;
var G__61208 = (i__60804_61201 + (1));
seq__60801_61198 = G__61205;
chunk__60802_61199 = G__61206;
count__60803_61200 = G__61207;
i__60804_61201 = G__61208;
continue;
} else {
var temp__5753__auto___61209 = cljs.core.seq(seq__60801_61198);
if(temp__5753__auto___61209){
var seq__60801_61210__$1 = temp__5753__auto___61209;
if(cljs.core.chunked_seq_QMARK_(seq__60801_61210__$1)){
var c__4649__auto___61211 = cljs.core.chunk_first(seq__60801_61210__$1);
var G__61212 = cljs.core.chunk_rest(seq__60801_61210__$1);
var G__61213 = c__4649__auto___61211;
var G__61214 = cljs.core.count(c__4649__auto___61211);
var G__61215 = (0);
seq__60801_61198 = G__61212;
chunk__60802_61199 = G__61213;
count__60803_61200 = G__61214;
i__60804_61201 = G__61215;
continue;
} else {
var vec__60817_61216 = cljs.core.first(seq__60801_61210__$1);
var k_61217 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60817_61216,(0),null);
var v_61218 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60817_61216,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_61217);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_61217),v_61218);


var G__61219 = cljs.core.next(seq__60801_61210__$1);
var G__61220 = null;
var G__61221 = (0);
var G__61222 = (0);
seq__60801_61198 = G__61219;
chunk__60802_61199 = G__61220;
count__60803_61200 = G__61221;
i__60804_61201 = G__61222;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__60825 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60825,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60825,(1),null);
var seq__60828_61223 = cljs.core.seq(node_children);
var chunk__60830_61224 = null;
var count__60831_61225 = (0);
var i__60832_61226 = (0);
while(true){
if((i__60832_61226 < count__60831_61225)){
var child_struct_61227 = chunk__60830_61224.cljs$core$IIndexed$_nth$arity$2(null,i__60832_61226);
if((!((child_struct_61227 == null)))){
if(typeof child_struct_61227 === 'string'){
var text_61228 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_61228),child_struct_61227].join(''));
} else {
var children_61229 = shadow.dom.svg_node(child_struct_61227);
if(cljs.core.seq_QMARK_(children_61229)){
var seq__60849_61230 = cljs.core.seq(children_61229);
var chunk__60851_61231 = null;
var count__60852_61232 = (0);
var i__60853_61233 = (0);
while(true){
if((i__60853_61233 < count__60852_61232)){
var child_61234 = chunk__60851_61231.cljs$core$IIndexed$_nth$arity$2(null,i__60853_61233);
if(cljs.core.truth_(child_61234)){
node.appendChild(child_61234);


var G__61235 = seq__60849_61230;
var G__61236 = chunk__60851_61231;
var G__61237 = count__60852_61232;
var G__61238 = (i__60853_61233 + (1));
seq__60849_61230 = G__61235;
chunk__60851_61231 = G__61236;
count__60852_61232 = G__61237;
i__60853_61233 = G__61238;
continue;
} else {
var G__61239 = seq__60849_61230;
var G__61240 = chunk__60851_61231;
var G__61241 = count__60852_61232;
var G__61242 = (i__60853_61233 + (1));
seq__60849_61230 = G__61239;
chunk__60851_61231 = G__61240;
count__60852_61232 = G__61241;
i__60853_61233 = G__61242;
continue;
}
} else {
var temp__5753__auto___61243 = cljs.core.seq(seq__60849_61230);
if(temp__5753__auto___61243){
var seq__60849_61244__$1 = temp__5753__auto___61243;
if(cljs.core.chunked_seq_QMARK_(seq__60849_61244__$1)){
var c__4649__auto___61245 = cljs.core.chunk_first(seq__60849_61244__$1);
var G__61246 = cljs.core.chunk_rest(seq__60849_61244__$1);
var G__61247 = c__4649__auto___61245;
var G__61248 = cljs.core.count(c__4649__auto___61245);
var G__61249 = (0);
seq__60849_61230 = G__61246;
chunk__60851_61231 = G__61247;
count__60852_61232 = G__61248;
i__60853_61233 = G__61249;
continue;
} else {
var child_61250 = cljs.core.first(seq__60849_61244__$1);
if(cljs.core.truth_(child_61250)){
node.appendChild(child_61250);


var G__61251 = cljs.core.next(seq__60849_61244__$1);
var G__61252 = null;
var G__61253 = (0);
var G__61254 = (0);
seq__60849_61230 = G__61251;
chunk__60851_61231 = G__61252;
count__60852_61232 = G__61253;
i__60853_61233 = G__61254;
continue;
} else {
var G__61255 = cljs.core.next(seq__60849_61244__$1);
var G__61256 = null;
var G__61257 = (0);
var G__61258 = (0);
seq__60849_61230 = G__61255;
chunk__60851_61231 = G__61256;
count__60852_61232 = G__61257;
i__60853_61233 = G__61258;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_61229);
}
}


var G__61259 = seq__60828_61223;
var G__61260 = chunk__60830_61224;
var G__61261 = count__60831_61225;
var G__61262 = (i__60832_61226 + (1));
seq__60828_61223 = G__61259;
chunk__60830_61224 = G__61260;
count__60831_61225 = G__61261;
i__60832_61226 = G__61262;
continue;
} else {
var G__61263 = seq__60828_61223;
var G__61264 = chunk__60830_61224;
var G__61265 = count__60831_61225;
var G__61266 = (i__60832_61226 + (1));
seq__60828_61223 = G__61263;
chunk__60830_61224 = G__61264;
count__60831_61225 = G__61265;
i__60832_61226 = G__61266;
continue;
}
} else {
var temp__5753__auto___61267 = cljs.core.seq(seq__60828_61223);
if(temp__5753__auto___61267){
var seq__60828_61268__$1 = temp__5753__auto___61267;
if(cljs.core.chunked_seq_QMARK_(seq__60828_61268__$1)){
var c__4649__auto___61269 = cljs.core.chunk_first(seq__60828_61268__$1);
var G__61270 = cljs.core.chunk_rest(seq__60828_61268__$1);
var G__61271 = c__4649__auto___61269;
var G__61272 = cljs.core.count(c__4649__auto___61269);
var G__61273 = (0);
seq__60828_61223 = G__61270;
chunk__60830_61224 = G__61271;
count__60831_61225 = G__61272;
i__60832_61226 = G__61273;
continue;
} else {
var child_struct_61274 = cljs.core.first(seq__60828_61268__$1);
if((!((child_struct_61274 == null)))){
if(typeof child_struct_61274 === 'string'){
var text_61275 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_61275),child_struct_61274].join(''));
} else {
var children_61276 = shadow.dom.svg_node(child_struct_61274);
if(cljs.core.seq_QMARK_(children_61276)){
var seq__60855_61277 = cljs.core.seq(children_61276);
var chunk__60857_61278 = null;
var count__60858_61279 = (0);
var i__60859_61280 = (0);
while(true){
if((i__60859_61280 < count__60858_61279)){
var child_61281 = chunk__60857_61278.cljs$core$IIndexed$_nth$arity$2(null,i__60859_61280);
if(cljs.core.truth_(child_61281)){
node.appendChild(child_61281);


var G__61282 = seq__60855_61277;
var G__61283 = chunk__60857_61278;
var G__61284 = count__60858_61279;
var G__61285 = (i__60859_61280 + (1));
seq__60855_61277 = G__61282;
chunk__60857_61278 = G__61283;
count__60858_61279 = G__61284;
i__60859_61280 = G__61285;
continue;
} else {
var G__61286 = seq__60855_61277;
var G__61287 = chunk__60857_61278;
var G__61288 = count__60858_61279;
var G__61289 = (i__60859_61280 + (1));
seq__60855_61277 = G__61286;
chunk__60857_61278 = G__61287;
count__60858_61279 = G__61288;
i__60859_61280 = G__61289;
continue;
}
} else {
var temp__5753__auto___61290__$1 = cljs.core.seq(seq__60855_61277);
if(temp__5753__auto___61290__$1){
var seq__60855_61291__$1 = temp__5753__auto___61290__$1;
if(cljs.core.chunked_seq_QMARK_(seq__60855_61291__$1)){
var c__4649__auto___61292 = cljs.core.chunk_first(seq__60855_61291__$1);
var G__61293 = cljs.core.chunk_rest(seq__60855_61291__$1);
var G__61294 = c__4649__auto___61292;
var G__61295 = cljs.core.count(c__4649__auto___61292);
var G__61296 = (0);
seq__60855_61277 = G__61293;
chunk__60857_61278 = G__61294;
count__60858_61279 = G__61295;
i__60859_61280 = G__61296;
continue;
} else {
var child_61297 = cljs.core.first(seq__60855_61291__$1);
if(cljs.core.truth_(child_61297)){
node.appendChild(child_61297);


var G__61298 = cljs.core.next(seq__60855_61291__$1);
var G__61299 = null;
var G__61300 = (0);
var G__61301 = (0);
seq__60855_61277 = G__61298;
chunk__60857_61278 = G__61299;
count__60858_61279 = G__61300;
i__60859_61280 = G__61301;
continue;
} else {
var G__61302 = cljs.core.next(seq__60855_61291__$1);
var G__61303 = null;
var G__61304 = (0);
var G__61305 = (0);
seq__60855_61277 = G__61302;
chunk__60857_61278 = G__61303;
count__60858_61279 = G__61304;
i__60859_61280 = G__61305;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_61276);
}
}


var G__61306 = cljs.core.next(seq__60828_61268__$1);
var G__61307 = null;
var G__61308 = (0);
var G__61309 = (0);
seq__60828_61223 = G__61306;
chunk__60830_61224 = G__61307;
count__60831_61225 = G__61308;
i__60832_61226 = G__61309;
continue;
} else {
var G__61310 = cljs.core.next(seq__60828_61268__$1);
var G__61311 = null;
var G__61312 = (0);
var G__61313 = (0);
seq__60828_61223 = G__61310;
chunk__60830_61224 = G__61311;
count__60831_61225 = G__61312;
i__60832_61226 = G__61313;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4835__auto__ = [];
var len__4829__auto___61314 = arguments.length;
var i__4830__auto___61315 = (0);
while(true){
if((i__4830__auto___61315 < len__4829__auto___61314)){
args__4835__auto__.push((arguments[i__4830__auto___61315]));

var G__61316 = (i__4830__auto___61315 + (1));
i__4830__auto___61315 = G__61316;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq60861){
var G__60862 = cljs.core.first(seq60861);
var seq60861__$1 = cljs.core.next(seq60861);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60862,seq60861__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__60886 = arguments.length;
switch (G__60886) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4221__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4221__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4221__auto__;
}
})())){
var c__48697__auto___61318 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48698__auto__ = (function (){var switch__48472__auto__ = (function (state_60912){
var state_val_60913 = (state_60912[(1)]);
if((state_val_60913 === (1))){
var state_60912__$1 = state_60912;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60912__$1,(2),once_or_cleanup);
} else {
if((state_val_60913 === (2))){
var inst_60909 = (state_60912[(2)]);
var inst_60910 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_60912__$1 = (function (){var statearr_60914 = state_60912;
(statearr_60914[(7)] = inst_60909);

return statearr_60914;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_60912__$1,inst_60910);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__48474__auto__ = null;
var shadow$dom$state_machine__48474__auto____0 = (function (){
var statearr_60918 = [null,null,null,null,null,null,null,null];
(statearr_60918[(0)] = shadow$dom$state_machine__48474__auto__);

(statearr_60918[(1)] = (1));

return statearr_60918;
});
var shadow$dom$state_machine__48474__auto____1 = (function (state_60912){
while(true){
var ret_value__48475__auto__ = (function (){try{while(true){
var result__48476__auto__ = switch__48472__auto__(state_60912);
if(cljs.core.keyword_identical_QMARK_(result__48476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48476__auto__;
}
break;
}
}catch (e60919){var ex__48478__auto__ = e60919;
var statearr_60920_61319 = state_60912;
(statearr_60920_61319[(2)] = ex__48478__auto__);


if(cljs.core.seq((state_60912[(4)]))){
var statearr_60921_61320 = state_60912;
(statearr_60921_61320[(1)] = cljs.core.first((state_60912[(4)])));

} else {
throw ex__48478__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61321 = state_60912;
state_60912 = G__61321;
continue;
} else {
return ret_value__48475__auto__;
}
break;
}
});
shadow$dom$state_machine__48474__auto__ = function(state_60912){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__48474__auto____0.call(this);
case 1:
return shadow$dom$state_machine__48474__auto____1.call(this,state_60912);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__48474__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__48474__auto____0;
shadow$dom$state_machine__48474__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__48474__auto____1;
return shadow$dom$state_machine__48474__auto__;
})()
})();
var state__48699__auto__ = (function (){var statearr_60922 = f__48698__auto__();
(statearr_60922[(6)] = c__48697__auto___61318);

return statearr_60922;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48699__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map

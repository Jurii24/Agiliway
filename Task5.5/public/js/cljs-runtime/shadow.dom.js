goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_50927 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_50927(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_50929 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_50929(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__50197 = coll;
var G__50198 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__50197,G__50198) : shadow.dom.lazy_native_coll_seq.call(null,G__50197,G__50198));
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
var G__50214 = arguments.length;
switch (G__50214) {
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
var G__50222 = arguments.length;
switch (G__50222) {
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
var G__50237 = arguments.length;
switch (G__50237) {
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
var G__50242 = arguments.length;
switch (G__50242) {
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
var G__50257 = arguments.length;
switch (G__50257) {
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
var G__50273 = arguments.length;
switch (G__50273) {
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
}catch (e50278){if((e50278 instanceof Object)){
var e = e50278;
return console.log("didnt support attachEvent",el,e);
} else {
throw e50278;

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
var seq__50291 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__50292 = null;
var count__50293 = (0);
var i__50294 = (0);
while(true){
if((i__50294 < count__50293)){
var el = chunk__50292.cljs$core$IIndexed$_nth$arity$2(null,i__50294);
var handler_50947__$1 = ((function (seq__50291,chunk__50292,count__50293,i__50294,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__50291,chunk__50292,count__50293,i__50294,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_50947__$1);


var G__50950 = seq__50291;
var G__50951 = chunk__50292;
var G__50952 = count__50293;
var G__50953 = (i__50294 + (1));
seq__50291 = G__50950;
chunk__50292 = G__50951;
count__50293 = G__50952;
i__50294 = G__50953;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__50291);
if(temp__5753__auto__){
var seq__50291__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50291__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__50291__$1);
var G__50955 = cljs.core.chunk_rest(seq__50291__$1);
var G__50956 = c__4649__auto__;
var G__50957 = cljs.core.count(c__4649__auto__);
var G__50958 = (0);
seq__50291 = G__50955;
chunk__50292 = G__50956;
count__50293 = G__50957;
i__50294 = G__50958;
continue;
} else {
var el = cljs.core.first(seq__50291__$1);
var handler_50960__$1 = ((function (seq__50291,chunk__50292,count__50293,i__50294,el,seq__50291__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__50291,chunk__50292,count__50293,i__50294,el,seq__50291__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_50960__$1);


var G__50963 = cljs.core.next(seq__50291__$1);
var G__50964 = null;
var G__50965 = (0);
var G__50966 = (0);
seq__50291 = G__50963;
chunk__50292 = G__50964;
count__50293 = G__50965;
i__50294 = G__50966;
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
var G__50316 = arguments.length;
switch (G__50316) {
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
var seq__50323 = cljs.core.seq(events);
var chunk__50324 = null;
var count__50325 = (0);
var i__50326 = (0);
while(true){
if((i__50326 < count__50325)){
var vec__50343 = chunk__50324.cljs$core$IIndexed$_nth$arity$2(null,i__50326);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50343,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50343,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__50969 = seq__50323;
var G__50970 = chunk__50324;
var G__50971 = count__50325;
var G__50972 = (i__50326 + (1));
seq__50323 = G__50969;
chunk__50324 = G__50970;
count__50325 = G__50971;
i__50326 = G__50972;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__50323);
if(temp__5753__auto__){
var seq__50323__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50323__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__50323__$1);
var G__50973 = cljs.core.chunk_rest(seq__50323__$1);
var G__50974 = c__4649__auto__;
var G__50975 = cljs.core.count(c__4649__auto__);
var G__50976 = (0);
seq__50323 = G__50973;
chunk__50324 = G__50974;
count__50325 = G__50975;
i__50326 = G__50976;
continue;
} else {
var vec__50350 = cljs.core.first(seq__50323__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50350,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50350,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__50977 = cljs.core.next(seq__50323__$1);
var G__50978 = null;
var G__50979 = (0);
var G__50980 = (0);
seq__50323 = G__50977;
chunk__50324 = G__50978;
count__50325 = G__50979;
i__50326 = G__50980;
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
var seq__50365 = cljs.core.seq(styles);
var chunk__50366 = null;
var count__50367 = (0);
var i__50368 = (0);
while(true){
if((i__50368 < count__50367)){
var vec__50398 = chunk__50366.cljs$core$IIndexed$_nth$arity$2(null,i__50368);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50398,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50398,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__50981 = seq__50365;
var G__50982 = chunk__50366;
var G__50983 = count__50367;
var G__50984 = (i__50368 + (1));
seq__50365 = G__50981;
chunk__50366 = G__50982;
count__50367 = G__50983;
i__50368 = G__50984;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__50365);
if(temp__5753__auto__){
var seq__50365__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50365__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__50365__$1);
var G__50985 = cljs.core.chunk_rest(seq__50365__$1);
var G__50986 = c__4649__auto__;
var G__50987 = cljs.core.count(c__4649__auto__);
var G__50988 = (0);
seq__50365 = G__50985;
chunk__50366 = G__50986;
count__50367 = G__50987;
i__50368 = G__50988;
continue;
} else {
var vec__50414 = cljs.core.first(seq__50365__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50414,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50414,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__50991 = cljs.core.next(seq__50365__$1);
var G__50992 = null;
var G__50993 = (0);
var G__50994 = (0);
seq__50365 = G__50991;
chunk__50366 = G__50992;
count__50367 = G__50993;
i__50368 = G__50994;
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
var G__50436_50996 = key;
var G__50436_50997__$1 = (((G__50436_50996 instanceof cljs.core.Keyword))?G__50436_50996.fqn:null);
switch (G__50436_50997__$1) {
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
var ks_51002 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4223__auto__ = goog.string.startsWith(ks_51002,"data-");
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return goog.string.startsWith(ks_51002,"aria-");
}
})())){
el.setAttribute(ks_51002,value);
} else {
(el[ks_51002] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__50481){
var map__50482 = p__50481;
var map__50482__$1 = cljs.core.__destructure_map(map__50482);
var props = map__50482__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50482__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__50484 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50484,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50484,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50484,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__50487 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__50487,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__50487;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__50495 = arguments.length;
switch (G__50495) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__50509){
var vec__50510 = p__50509;
var seq__50511 = cljs.core.seq(vec__50510);
var first__50512 = cljs.core.first(seq__50511);
var seq__50511__$1 = cljs.core.next(seq__50511);
var nn = first__50512;
var first__50512__$1 = cljs.core.first(seq__50511__$1);
var seq__50511__$2 = cljs.core.next(seq__50511__$1);
var np = first__50512__$1;
var nc = seq__50511__$2;
var node = vec__50510;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__50513 = nn;
var G__50514 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__50513,G__50514) : create_fn.call(null,G__50513,G__50514));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__50515 = nn;
var G__50516 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__50515,G__50516) : create_fn.call(null,G__50515,G__50516));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__50517 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50517,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50517,(1),null);
var seq__50520_51012 = cljs.core.seq(node_children);
var chunk__50521_51013 = null;
var count__50522_51014 = (0);
var i__50523_51015 = (0);
while(true){
if((i__50523_51015 < count__50522_51014)){
var child_struct_51016 = chunk__50521_51013.cljs$core$IIndexed$_nth$arity$2(null,i__50523_51015);
var children_51017 = shadow.dom.dom_node(child_struct_51016);
if(cljs.core.seq_QMARK_(children_51017)){
var seq__50549_51019 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_51017));
var chunk__50551_51020 = null;
var count__50552_51021 = (0);
var i__50553_51022 = (0);
while(true){
if((i__50553_51022 < count__50552_51021)){
var child_51023 = chunk__50551_51020.cljs$core$IIndexed$_nth$arity$2(null,i__50553_51022);
if(cljs.core.truth_(child_51023)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_51023);


var G__51025 = seq__50549_51019;
var G__51026 = chunk__50551_51020;
var G__51027 = count__50552_51021;
var G__51028 = (i__50553_51022 + (1));
seq__50549_51019 = G__51025;
chunk__50551_51020 = G__51026;
count__50552_51021 = G__51027;
i__50553_51022 = G__51028;
continue;
} else {
var G__51029 = seq__50549_51019;
var G__51030 = chunk__50551_51020;
var G__51031 = count__50552_51021;
var G__51032 = (i__50553_51022 + (1));
seq__50549_51019 = G__51029;
chunk__50551_51020 = G__51030;
count__50552_51021 = G__51031;
i__50553_51022 = G__51032;
continue;
}
} else {
var temp__5753__auto___51033 = cljs.core.seq(seq__50549_51019);
if(temp__5753__auto___51033){
var seq__50549_51034__$1 = temp__5753__auto___51033;
if(cljs.core.chunked_seq_QMARK_(seq__50549_51034__$1)){
var c__4649__auto___51035 = cljs.core.chunk_first(seq__50549_51034__$1);
var G__51036 = cljs.core.chunk_rest(seq__50549_51034__$1);
var G__51037 = c__4649__auto___51035;
var G__51038 = cljs.core.count(c__4649__auto___51035);
var G__51039 = (0);
seq__50549_51019 = G__51036;
chunk__50551_51020 = G__51037;
count__50552_51021 = G__51038;
i__50553_51022 = G__51039;
continue;
} else {
var child_51040 = cljs.core.first(seq__50549_51034__$1);
if(cljs.core.truth_(child_51040)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_51040);


var G__51041 = cljs.core.next(seq__50549_51034__$1);
var G__51042 = null;
var G__51043 = (0);
var G__51044 = (0);
seq__50549_51019 = G__51041;
chunk__50551_51020 = G__51042;
count__50552_51021 = G__51043;
i__50553_51022 = G__51044;
continue;
} else {
var G__51045 = cljs.core.next(seq__50549_51034__$1);
var G__51046 = null;
var G__51047 = (0);
var G__51048 = (0);
seq__50549_51019 = G__51045;
chunk__50551_51020 = G__51046;
count__50552_51021 = G__51047;
i__50553_51022 = G__51048;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_51017);
}


var G__51049 = seq__50520_51012;
var G__51050 = chunk__50521_51013;
var G__51051 = count__50522_51014;
var G__51052 = (i__50523_51015 + (1));
seq__50520_51012 = G__51049;
chunk__50521_51013 = G__51050;
count__50522_51014 = G__51051;
i__50523_51015 = G__51052;
continue;
} else {
var temp__5753__auto___51053 = cljs.core.seq(seq__50520_51012);
if(temp__5753__auto___51053){
var seq__50520_51054__$1 = temp__5753__auto___51053;
if(cljs.core.chunked_seq_QMARK_(seq__50520_51054__$1)){
var c__4649__auto___51055 = cljs.core.chunk_first(seq__50520_51054__$1);
var G__51056 = cljs.core.chunk_rest(seq__50520_51054__$1);
var G__51057 = c__4649__auto___51055;
var G__51058 = cljs.core.count(c__4649__auto___51055);
var G__51059 = (0);
seq__50520_51012 = G__51056;
chunk__50521_51013 = G__51057;
count__50522_51014 = G__51058;
i__50523_51015 = G__51059;
continue;
} else {
var child_struct_51060 = cljs.core.first(seq__50520_51054__$1);
var children_51061 = shadow.dom.dom_node(child_struct_51060);
if(cljs.core.seq_QMARK_(children_51061)){
var seq__50561_51062 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_51061));
var chunk__50563_51063 = null;
var count__50564_51064 = (0);
var i__50565_51065 = (0);
while(true){
if((i__50565_51065 < count__50564_51064)){
var child_51066 = chunk__50563_51063.cljs$core$IIndexed$_nth$arity$2(null,i__50565_51065);
if(cljs.core.truth_(child_51066)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_51066);


var G__51067 = seq__50561_51062;
var G__51068 = chunk__50563_51063;
var G__51069 = count__50564_51064;
var G__51070 = (i__50565_51065 + (1));
seq__50561_51062 = G__51067;
chunk__50563_51063 = G__51068;
count__50564_51064 = G__51069;
i__50565_51065 = G__51070;
continue;
} else {
var G__51071 = seq__50561_51062;
var G__51072 = chunk__50563_51063;
var G__51073 = count__50564_51064;
var G__51074 = (i__50565_51065 + (1));
seq__50561_51062 = G__51071;
chunk__50563_51063 = G__51072;
count__50564_51064 = G__51073;
i__50565_51065 = G__51074;
continue;
}
} else {
var temp__5753__auto___51075__$1 = cljs.core.seq(seq__50561_51062);
if(temp__5753__auto___51075__$1){
var seq__50561_51076__$1 = temp__5753__auto___51075__$1;
if(cljs.core.chunked_seq_QMARK_(seq__50561_51076__$1)){
var c__4649__auto___51077 = cljs.core.chunk_first(seq__50561_51076__$1);
var G__51078 = cljs.core.chunk_rest(seq__50561_51076__$1);
var G__51079 = c__4649__auto___51077;
var G__51080 = cljs.core.count(c__4649__auto___51077);
var G__51081 = (0);
seq__50561_51062 = G__51078;
chunk__50563_51063 = G__51079;
count__50564_51064 = G__51080;
i__50565_51065 = G__51081;
continue;
} else {
var child_51082 = cljs.core.first(seq__50561_51076__$1);
if(cljs.core.truth_(child_51082)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_51082);


var G__51083 = cljs.core.next(seq__50561_51076__$1);
var G__51084 = null;
var G__51085 = (0);
var G__51086 = (0);
seq__50561_51062 = G__51083;
chunk__50563_51063 = G__51084;
count__50564_51064 = G__51085;
i__50565_51065 = G__51086;
continue;
} else {
var G__51087 = cljs.core.next(seq__50561_51076__$1);
var G__51088 = null;
var G__51089 = (0);
var G__51090 = (0);
seq__50561_51062 = G__51087;
chunk__50563_51063 = G__51088;
count__50564_51064 = G__51089;
i__50565_51065 = G__51090;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_51061);
}


var G__51092 = cljs.core.next(seq__50520_51054__$1);
var G__51093 = null;
var G__51094 = (0);
var G__51095 = (0);
seq__50520_51012 = G__51092;
chunk__50521_51013 = G__51093;
count__50522_51014 = G__51094;
i__50523_51015 = G__51095;
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
var seq__50588 = cljs.core.seq(node);
var chunk__50589 = null;
var count__50590 = (0);
var i__50591 = (0);
while(true){
if((i__50591 < count__50590)){
var n = chunk__50589.cljs$core$IIndexed$_nth$arity$2(null,i__50591);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__51100 = seq__50588;
var G__51101 = chunk__50589;
var G__51102 = count__50590;
var G__51103 = (i__50591 + (1));
seq__50588 = G__51100;
chunk__50589 = G__51101;
count__50590 = G__51102;
i__50591 = G__51103;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__50588);
if(temp__5753__auto__){
var seq__50588__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50588__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__50588__$1);
var G__51105 = cljs.core.chunk_rest(seq__50588__$1);
var G__51106 = c__4649__auto__;
var G__51107 = cljs.core.count(c__4649__auto__);
var G__51108 = (0);
seq__50588 = G__51105;
chunk__50589 = G__51106;
count__50590 = G__51107;
i__50591 = G__51108;
continue;
} else {
var n = cljs.core.first(seq__50588__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__51109 = cljs.core.next(seq__50588__$1);
var G__51110 = null;
var G__51111 = (0);
var G__51112 = (0);
seq__50588 = G__51109;
chunk__50589 = G__51110;
count__50590 = G__51111;
i__50591 = G__51112;
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
var G__50593 = arguments.length;
switch (G__50593) {
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
var G__50595 = arguments.length;
switch (G__50595) {
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
var G__50602 = arguments.length;
switch (G__50602) {
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
var len__4829__auto___51124 = arguments.length;
var i__4830__auto___51125 = (0);
while(true){
if((i__4830__auto___51125 < len__4829__auto___51124)){
args__4835__auto__.push((arguments[i__4830__auto___51125]));

var G__51126 = (i__4830__auto___51125 + (1));
i__4830__auto___51125 = G__51126;
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
var seq__50610_51127 = cljs.core.seq(nodes);
var chunk__50611_51128 = null;
var count__50612_51129 = (0);
var i__50613_51130 = (0);
while(true){
if((i__50613_51130 < count__50612_51129)){
var node_51131 = chunk__50611_51128.cljs$core$IIndexed$_nth$arity$2(null,i__50613_51130);
fragment.appendChild(shadow.dom._to_dom(node_51131));


var G__51132 = seq__50610_51127;
var G__51133 = chunk__50611_51128;
var G__51134 = count__50612_51129;
var G__51135 = (i__50613_51130 + (1));
seq__50610_51127 = G__51132;
chunk__50611_51128 = G__51133;
count__50612_51129 = G__51134;
i__50613_51130 = G__51135;
continue;
} else {
var temp__5753__auto___51136 = cljs.core.seq(seq__50610_51127);
if(temp__5753__auto___51136){
var seq__50610_51137__$1 = temp__5753__auto___51136;
if(cljs.core.chunked_seq_QMARK_(seq__50610_51137__$1)){
var c__4649__auto___51138 = cljs.core.chunk_first(seq__50610_51137__$1);
var G__51139 = cljs.core.chunk_rest(seq__50610_51137__$1);
var G__51140 = c__4649__auto___51138;
var G__51141 = cljs.core.count(c__4649__auto___51138);
var G__51142 = (0);
seq__50610_51127 = G__51139;
chunk__50611_51128 = G__51140;
count__50612_51129 = G__51141;
i__50613_51130 = G__51142;
continue;
} else {
var node_51143 = cljs.core.first(seq__50610_51137__$1);
fragment.appendChild(shadow.dom._to_dom(node_51143));


var G__51144 = cljs.core.next(seq__50610_51137__$1);
var G__51145 = null;
var G__51146 = (0);
var G__51147 = (0);
seq__50610_51127 = G__51144;
chunk__50611_51128 = G__51145;
count__50612_51129 = G__51146;
i__50613_51130 = G__51147;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq50607){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50607));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__50614_51149 = cljs.core.seq(scripts);
var chunk__50615_51150 = null;
var count__50616_51151 = (0);
var i__50617_51152 = (0);
while(true){
if((i__50617_51152 < count__50616_51151)){
var vec__50624_51154 = chunk__50615_51150.cljs$core$IIndexed$_nth$arity$2(null,i__50617_51152);
var script_tag_51155 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50624_51154,(0),null);
var script_body_51156 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50624_51154,(1),null);
eval(script_body_51156);


var G__51158 = seq__50614_51149;
var G__51159 = chunk__50615_51150;
var G__51160 = count__50616_51151;
var G__51161 = (i__50617_51152 + (1));
seq__50614_51149 = G__51158;
chunk__50615_51150 = G__51159;
count__50616_51151 = G__51160;
i__50617_51152 = G__51161;
continue;
} else {
var temp__5753__auto___51162 = cljs.core.seq(seq__50614_51149);
if(temp__5753__auto___51162){
var seq__50614_51163__$1 = temp__5753__auto___51162;
if(cljs.core.chunked_seq_QMARK_(seq__50614_51163__$1)){
var c__4649__auto___51164 = cljs.core.chunk_first(seq__50614_51163__$1);
var G__51165 = cljs.core.chunk_rest(seq__50614_51163__$1);
var G__51166 = c__4649__auto___51164;
var G__51167 = cljs.core.count(c__4649__auto___51164);
var G__51168 = (0);
seq__50614_51149 = G__51165;
chunk__50615_51150 = G__51166;
count__50616_51151 = G__51167;
i__50617_51152 = G__51168;
continue;
} else {
var vec__50627_51169 = cljs.core.first(seq__50614_51163__$1);
var script_tag_51170 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50627_51169,(0),null);
var script_body_51171 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50627_51169,(1),null);
eval(script_body_51171);


var G__51172 = cljs.core.next(seq__50614_51163__$1);
var G__51173 = null;
var G__51174 = (0);
var G__51175 = (0);
seq__50614_51149 = G__51172;
chunk__50615_51150 = G__51173;
count__50616_51151 = G__51174;
i__50617_51152 = G__51175;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__50630){
var vec__50631 = p__50630;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50631,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50631,(1),null);
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
var G__50640 = arguments.length;
switch (G__50640) {
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
var seq__50660 = cljs.core.seq(style_keys);
var chunk__50661 = null;
var count__50662 = (0);
var i__50663 = (0);
while(true){
if((i__50663 < count__50662)){
var it = chunk__50661.cljs$core$IIndexed$_nth$arity$2(null,i__50663);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__51180 = seq__50660;
var G__51181 = chunk__50661;
var G__51182 = count__50662;
var G__51183 = (i__50663 + (1));
seq__50660 = G__51180;
chunk__50661 = G__51181;
count__50662 = G__51182;
i__50663 = G__51183;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__50660);
if(temp__5753__auto__){
var seq__50660__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50660__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__50660__$1);
var G__51184 = cljs.core.chunk_rest(seq__50660__$1);
var G__51185 = c__4649__auto__;
var G__51186 = cljs.core.count(c__4649__auto__);
var G__51187 = (0);
seq__50660 = G__51184;
chunk__50661 = G__51185;
count__50662 = G__51186;
i__50663 = G__51187;
continue;
} else {
var it = cljs.core.first(seq__50660__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__51188 = cljs.core.next(seq__50660__$1);
var G__51189 = null;
var G__51190 = (0);
var G__51191 = (0);
seq__50660 = G__51188;
chunk__50661 = G__51189;
count__50662 = G__51190;
i__50663 = G__51191;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k50676,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__50684 = k50676;
var G__50684__$1 = (((G__50684 instanceof cljs.core.Keyword))?G__50684.fqn:null);
switch (G__50684__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k50676,else__4475__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__50686){
var vec__50687 = p__50686;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50687,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50687,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__50675){
var self__ = this;
var G__50675__$1 = this;
return (new cljs.core.RecordIter((0),G__50675__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this50677,other50678){
var self__ = this;
var this50677__$1 = this;
return (((!((other50678 == null)))) && ((((this50677__$1.constructor === other50678.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50677__$1.x,other50678.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50677__$1.y,other50678.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50677__$1.__extmap,other50678.__extmap)))))))));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k50676){
var self__ = this;
var this__4479__auto____$1 = this;
var G__50706 = k50676;
var G__50706__$1 = (((G__50706 instanceof cljs.core.Keyword))?G__50706.fqn:null);
switch (G__50706__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k50676);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__50675){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__50708 = cljs.core.keyword_identical_QMARK_;
var expr__50709 = k__4481__auto__;
if(cljs.core.truth_((pred__50708.cljs$core$IFn$_invoke$arity$2 ? pred__50708.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__50709) : pred__50708.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__50709)))){
return (new shadow.dom.Coordinate(G__50675,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__50708.cljs$core$IFn$_invoke$arity$2 ? pred__50708.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__50709) : pred__50708.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__50709)))){
return (new shadow.dom.Coordinate(self__.x,G__50675,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__50675),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__50675){
var self__ = this;
var this__4471__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__50675,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__50679){
var extmap__4512__auto__ = (function (){var G__50720 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__50679,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__50679)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__50720);
} else {
return G__50720;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__50679),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__50679),null,cljs.core.not_empty(extmap__4512__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k50730,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__50740 = k50730;
var G__50740__$1 = (((G__50740 instanceof cljs.core.Keyword))?G__50740.fqn:null);
switch (G__50740__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k50730,else__4475__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__50744){
var vec__50746 = p__50744;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50746,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50746,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__50729){
var self__ = this;
var G__50729__$1 = this;
return (new cljs.core.RecordIter((0),G__50729__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this50731,other50732){
var self__ = this;
var this50731__$1 = this;
return (((!((other50732 == null)))) && ((((this50731__$1.constructor === other50732.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50731__$1.w,other50732.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50731__$1.h,other50732.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50731__$1.__extmap,other50732.__extmap)))))))));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k50730){
var self__ = this;
var this__4479__auto____$1 = this;
var G__50768 = k50730;
var G__50768__$1 = (((G__50768 instanceof cljs.core.Keyword))?G__50768.fqn:null);
switch (G__50768__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k50730);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__50729){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__50771 = cljs.core.keyword_identical_QMARK_;
var expr__50772 = k__4481__auto__;
if(cljs.core.truth_((pred__50771.cljs$core$IFn$_invoke$arity$2 ? pred__50771.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__50772) : pred__50771.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__50772)))){
return (new shadow.dom.Size(G__50729,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__50771.cljs$core$IFn$_invoke$arity$2 ? pred__50771.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__50772) : pred__50771.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__50772)))){
return (new shadow.dom.Size(self__.w,G__50729,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__50729),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__50729){
var self__ = this;
var this__4471__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__50729,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__50734){
var extmap__4512__auto__ = (function (){var G__50790 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__50734,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__50734)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__50790);
} else {
return G__50790;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__50734),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__50734),null,cljs.core.not_empty(extmap__4512__auto__),null));
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
var G__51208 = (i + (1));
var G__51209 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__51208;
ret = G__51209;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__50800){
var vec__50801 = p__50800;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50801,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50801,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__50805 = arguments.length;
switch (G__50805) {
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
var G__51215 = ps;
var G__51216 = (i + (1));
el__$1 = G__51215;
i = G__51216;
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
var vec__50807 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50807,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50807,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50807,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__50810_51224 = cljs.core.seq(props);
var chunk__50811_51225 = null;
var count__50812_51226 = (0);
var i__50813_51227 = (0);
while(true){
if((i__50813_51227 < count__50812_51226)){
var vec__50825_51228 = chunk__50811_51225.cljs$core$IIndexed$_nth$arity$2(null,i__50813_51227);
var k_51229 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50825_51228,(0),null);
var v_51230 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50825_51228,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_51229);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_51229),v_51230);


var G__51231 = seq__50810_51224;
var G__51232 = chunk__50811_51225;
var G__51233 = count__50812_51226;
var G__51234 = (i__50813_51227 + (1));
seq__50810_51224 = G__51231;
chunk__50811_51225 = G__51232;
count__50812_51226 = G__51233;
i__50813_51227 = G__51234;
continue;
} else {
var temp__5753__auto___51235 = cljs.core.seq(seq__50810_51224);
if(temp__5753__auto___51235){
var seq__50810_51236__$1 = temp__5753__auto___51235;
if(cljs.core.chunked_seq_QMARK_(seq__50810_51236__$1)){
var c__4649__auto___51237 = cljs.core.chunk_first(seq__50810_51236__$1);
var G__51238 = cljs.core.chunk_rest(seq__50810_51236__$1);
var G__51239 = c__4649__auto___51237;
var G__51240 = cljs.core.count(c__4649__auto___51237);
var G__51241 = (0);
seq__50810_51224 = G__51238;
chunk__50811_51225 = G__51239;
count__50812_51226 = G__51240;
i__50813_51227 = G__51241;
continue;
} else {
var vec__50833_51242 = cljs.core.first(seq__50810_51236__$1);
var k_51243 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50833_51242,(0),null);
var v_51244 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50833_51242,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_51243);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_51243),v_51244);


var G__51248 = cljs.core.next(seq__50810_51236__$1);
var G__51249 = null;
var G__51250 = (0);
var G__51251 = (0);
seq__50810_51224 = G__51248;
chunk__50811_51225 = G__51249;
count__50812_51226 = G__51250;
i__50813_51227 = G__51251;
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
var vec__50837 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50837,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50837,(1),null);
var seq__50841_51252 = cljs.core.seq(node_children);
var chunk__50843_51253 = null;
var count__50844_51254 = (0);
var i__50845_51255 = (0);
while(true){
if((i__50845_51255 < count__50844_51254)){
var child_struct_51256 = chunk__50843_51253.cljs$core$IIndexed$_nth$arity$2(null,i__50845_51255);
if((!((child_struct_51256 == null)))){
if(typeof child_struct_51256 === 'string'){
var text_51257 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_51257),child_struct_51256].join(''));
} else {
var children_51261 = shadow.dom.svg_node(child_struct_51256);
if(cljs.core.seq_QMARK_(children_51261)){
var seq__50870_51262 = cljs.core.seq(children_51261);
var chunk__50872_51263 = null;
var count__50873_51264 = (0);
var i__50874_51265 = (0);
while(true){
if((i__50874_51265 < count__50873_51264)){
var child_51266 = chunk__50872_51263.cljs$core$IIndexed$_nth$arity$2(null,i__50874_51265);
if(cljs.core.truth_(child_51266)){
node.appendChild(child_51266);


var G__51267 = seq__50870_51262;
var G__51268 = chunk__50872_51263;
var G__51269 = count__50873_51264;
var G__51270 = (i__50874_51265 + (1));
seq__50870_51262 = G__51267;
chunk__50872_51263 = G__51268;
count__50873_51264 = G__51269;
i__50874_51265 = G__51270;
continue;
} else {
var G__51271 = seq__50870_51262;
var G__51272 = chunk__50872_51263;
var G__51273 = count__50873_51264;
var G__51274 = (i__50874_51265 + (1));
seq__50870_51262 = G__51271;
chunk__50872_51263 = G__51272;
count__50873_51264 = G__51273;
i__50874_51265 = G__51274;
continue;
}
} else {
var temp__5753__auto___51275 = cljs.core.seq(seq__50870_51262);
if(temp__5753__auto___51275){
var seq__50870_51276__$1 = temp__5753__auto___51275;
if(cljs.core.chunked_seq_QMARK_(seq__50870_51276__$1)){
var c__4649__auto___51277 = cljs.core.chunk_first(seq__50870_51276__$1);
var G__51278 = cljs.core.chunk_rest(seq__50870_51276__$1);
var G__51279 = c__4649__auto___51277;
var G__51280 = cljs.core.count(c__4649__auto___51277);
var G__51281 = (0);
seq__50870_51262 = G__51278;
chunk__50872_51263 = G__51279;
count__50873_51264 = G__51280;
i__50874_51265 = G__51281;
continue;
} else {
var child_51282 = cljs.core.first(seq__50870_51276__$1);
if(cljs.core.truth_(child_51282)){
node.appendChild(child_51282);


var G__51283 = cljs.core.next(seq__50870_51276__$1);
var G__51284 = null;
var G__51285 = (0);
var G__51286 = (0);
seq__50870_51262 = G__51283;
chunk__50872_51263 = G__51284;
count__50873_51264 = G__51285;
i__50874_51265 = G__51286;
continue;
} else {
var G__51287 = cljs.core.next(seq__50870_51276__$1);
var G__51288 = null;
var G__51289 = (0);
var G__51290 = (0);
seq__50870_51262 = G__51287;
chunk__50872_51263 = G__51288;
count__50873_51264 = G__51289;
i__50874_51265 = G__51290;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_51261);
}
}


var G__51291 = seq__50841_51252;
var G__51292 = chunk__50843_51253;
var G__51293 = count__50844_51254;
var G__51294 = (i__50845_51255 + (1));
seq__50841_51252 = G__51291;
chunk__50843_51253 = G__51292;
count__50844_51254 = G__51293;
i__50845_51255 = G__51294;
continue;
} else {
var G__51295 = seq__50841_51252;
var G__51296 = chunk__50843_51253;
var G__51297 = count__50844_51254;
var G__51298 = (i__50845_51255 + (1));
seq__50841_51252 = G__51295;
chunk__50843_51253 = G__51296;
count__50844_51254 = G__51297;
i__50845_51255 = G__51298;
continue;
}
} else {
var temp__5753__auto___51299 = cljs.core.seq(seq__50841_51252);
if(temp__5753__auto___51299){
var seq__50841_51300__$1 = temp__5753__auto___51299;
if(cljs.core.chunked_seq_QMARK_(seq__50841_51300__$1)){
var c__4649__auto___51301 = cljs.core.chunk_first(seq__50841_51300__$1);
var G__51302 = cljs.core.chunk_rest(seq__50841_51300__$1);
var G__51303 = c__4649__auto___51301;
var G__51304 = cljs.core.count(c__4649__auto___51301);
var G__51305 = (0);
seq__50841_51252 = G__51302;
chunk__50843_51253 = G__51303;
count__50844_51254 = G__51304;
i__50845_51255 = G__51305;
continue;
} else {
var child_struct_51306 = cljs.core.first(seq__50841_51300__$1);
if((!((child_struct_51306 == null)))){
if(typeof child_struct_51306 === 'string'){
var text_51307 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_51307),child_struct_51306].join(''));
} else {
var children_51308 = shadow.dom.svg_node(child_struct_51306);
if(cljs.core.seq_QMARK_(children_51308)){
var seq__50879_51309 = cljs.core.seq(children_51308);
var chunk__50881_51310 = null;
var count__50882_51311 = (0);
var i__50883_51312 = (0);
while(true){
if((i__50883_51312 < count__50882_51311)){
var child_51315 = chunk__50881_51310.cljs$core$IIndexed$_nth$arity$2(null,i__50883_51312);
if(cljs.core.truth_(child_51315)){
node.appendChild(child_51315);


var G__51316 = seq__50879_51309;
var G__51317 = chunk__50881_51310;
var G__51318 = count__50882_51311;
var G__51319 = (i__50883_51312 + (1));
seq__50879_51309 = G__51316;
chunk__50881_51310 = G__51317;
count__50882_51311 = G__51318;
i__50883_51312 = G__51319;
continue;
} else {
var G__51320 = seq__50879_51309;
var G__51321 = chunk__50881_51310;
var G__51322 = count__50882_51311;
var G__51323 = (i__50883_51312 + (1));
seq__50879_51309 = G__51320;
chunk__50881_51310 = G__51321;
count__50882_51311 = G__51322;
i__50883_51312 = G__51323;
continue;
}
} else {
var temp__5753__auto___51324__$1 = cljs.core.seq(seq__50879_51309);
if(temp__5753__auto___51324__$1){
var seq__50879_51325__$1 = temp__5753__auto___51324__$1;
if(cljs.core.chunked_seq_QMARK_(seq__50879_51325__$1)){
var c__4649__auto___51327 = cljs.core.chunk_first(seq__50879_51325__$1);
var G__51328 = cljs.core.chunk_rest(seq__50879_51325__$1);
var G__51329 = c__4649__auto___51327;
var G__51330 = cljs.core.count(c__4649__auto___51327);
var G__51331 = (0);
seq__50879_51309 = G__51328;
chunk__50881_51310 = G__51329;
count__50882_51311 = G__51330;
i__50883_51312 = G__51331;
continue;
} else {
var child_51332 = cljs.core.first(seq__50879_51325__$1);
if(cljs.core.truth_(child_51332)){
node.appendChild(child_51332);


var G__51334 = cljs.core.next(seq__50879_51325__$1);
var G__51335 = null;
var G__51336 = (0);
var G__51337 = (0);
seq__50879_51309 = G__51334;
chunk__50881_51310 = G__51335;
count__50882_51311 = G__51336;
i__50883_51312 = G__51337;
continue;
} else {
var G__51338 = cljs.core.next(seq__50879_51325__$1);
var G__51339 = null;
var G__51340 = (0);
var G__51341 = (0);
seq__50879_51309 = G__51338;
chunk__50881_51310 = G__51339;
count__50882_51311 = G__51340;
i__50883_51312 = G__51341;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_51308);
}
}


var G__51342 = cljs.core.next(seq__50841_51300__$1);
var G__51343 = null;
var G__51344 = (0);
var G__51345 = (0);
seq__50841_51252 = G__51342;
chunk__50843_51253 = G__51343;
count__50844_51254 = G__51344;
i__50845_51255 = G__51345;
continue;
} else {
var G__51346 = cljs.core.next(seq__50841_51300__$1);
var G__51347 = null;
var G__51348 = (0);
var G__51349 = (0);
seq__50841_51252 = G__51346;
chunk__50843_51253 = G__51347;
count__50844_51254 = G__51348;
i__50845_51255 = G__51349;
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
var len__4829__auto___51357 = arguments.length;
var i__4830__auto___51358 = (0);
while(true){
if((i__4830__auto___51358 < len__4829__auto___51357)){
args__4835__auto__.push((arguments[i__4830__auto___51358]));

var G__51359 = (i__4830__auto___51358 + (1));
i__4830__auto___51358 = G__51359;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq50898){
var G__50899 = cljs.core.first(seq50898);
var seq50898__$1 = cljs.core.next(seq50898);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50899,seq50898__$1);
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
var G__50905 = arguments.length;
switch (G__50905) {
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
var c__48204__auto___51370 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48205__auto__ = (function (){var switch__48100__auto__ = (function (state_50913){
var state_val_50914 = (state_50913[(1)]);
if((state_val_50914 === (1))){
var state_50913__$1 = state_50913;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50913__$1,(2),once_or_cleanup);
} else {
if((state_val_50914 === (2))){
var inst_50910 = (state_50913[(2)]);
var inst_50911 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_50913__$1 = (function (){var statearr_50915 = state_50913;
(statearr_50915[(7)] = inst_50910);

return statearr_50915;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_50913__$1,inst_50911);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__48101__auto__ = null;
var shadow$dom$state_machine__48101__auto____0 = (function (){
var statearr_50916 = [null,null,null,null,null,null,null,null];
(statearr_50916[(0)] = shadow$dom$state_machine__48101__auto__);

(statearr_50916[(1)] = (1));

return statearr_50916;
});
var shadow$dom$state_machine__48101__auto____1 = (function (state_50913){
while(true){
var ret_value__48102__auto__ = (function (){try{while(true){
var result__48103__auto__ = switch__48100__auto__(state_50913);
if(cljs.core.keyword_identical_QMARK_(result__48103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48103__auto__;
}
break;
}
}catch (e50917){var ex__48104__auto__ = e50917;
var statearr_50918_51375 = state_50913;
(statearr_50918_51375[(2)] = ex__48104__auto__);


if(cljs.core.seq((state_50913[(4)]))){
var statearr_50919_51376 = state_50913;
(statearr_50919_51376[(1)] = cljs.core.first((state_50913[(4)])));

} else {
throw ex__48104__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51377 = state_50913;
state_50913 = G__51377;
continue;
} else {
return ret_value__48102__auto__;
}
break;
}
});
shadow$dom$state_machine__48101__auto__ = function(state_50913){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__48101__auto____0.call(this);
case 1:
return shadow$dom$state_machine__48101__auto____1.call(this,state_50913);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__48101__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__48101__auto____0;
shadow$dom$state_machine__48101__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__48101__auto____1;
return shadow$dom$state_machine__48101__auto__;
})()
})();
var state__48206__auto__ = (function (){var statearr_50920 = f__48205__auto__();
(statearr_50920[(6)] = c__48204__auto___51370);

return statearr_50920;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48206__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map

goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_51037 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_51037(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_51038 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_51038(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__50355 = coll;
var G__50356 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__50355,G__50356) : shadow.dom.lazy_native_coll_seq.call(null,G__50355,G__50356));
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
var G__50394 = arguments.length;
switch (G__50394) {
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
var G__50396 = arguments.length;
switch (G__50396) {
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
var G__50409 = arguments.length;
switch (G__50409) {
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
var G__50424 = arguments.length;
switch (G__50424) {
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
var G__50451 = arguments.length;
switch (G__50451) {
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
var G__50463 = arguments.length;
switch (G__50463) {
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
}catch (e50488){if((e50488 instanceof Object)){
var e = e50488;
return console.log("didnt support attachEvent",el,e);
} else {
throw e50488;

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
var seq__50502 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__50503 = null;
var count__50504 = (0);
var i__50505 = (0);
while(true){
if((i__50505 < count__50504)){
var el = chunk__50503.cljs$core$IIndexed$_nth$arity$2(null,i__50505);
var handler_51047__$1 = ((function (seq__50502,chunk__50503,count__50504,i__50505,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__50502,chunk__50503,count__50504,i__50505,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_51047__$1);


var G__51048 = seq__50502;
var G__51049 = chunk__50503;
var G__51050 = count__50504;
var G__51051 = (i__50505 + (1));
seq__50502 = G__51048;
chunk__50503 = G__51049;
count__50504 = G__51050;
i__50505 = G__51051;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__50502);
if(temp__5753__auto__){
var seq__50502__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50502__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__50502__$1);
var G__51052 = cljs.core.chunk_rest(seq__50502__$1);
var G__51053 = c__4649__auto__;
var G__51054 = cljs.core.count(c__4649__auto__);
var G__51055 = (0);
seq__50502 = G__51052;
chunk__50503 = G__51053;
count__50504 = G__51054;
i__50505 = G__51055;
continue;
} else {
var el = cljs.core.first(seq__50502__$1);
var handler_51056__$1 = ((function (seq__50502,chunk__50503,count__50504,i__50505,el,seq__50502__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__50502,chunk__50503,count__50504,i__50505,el,seq__50502__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_51056__$1);


var G__51057 = cljs.core.next(seq__50502__$1);
var G__51058 = null;
var G__51059 = (0);
var G__51060 = (0);
seq__50502 = G__51057;
chunk__50503 = G__51058;
count__50504 = G__51059;
i__50505 = G__51060;
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
var G__50522 = arguments.length;
switch (G__50522) {
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
var seq__50528 = cljs.core.seq(events);
var chunk__50529 = null;
var count__50530 = (0);
var i__50531 = (0);
while(true){
if((i__50531 < count__50530)){
var vec__50540 = chunk__50529.cljs$core$IIndexed$_nth$arity$2(null,i__50531);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50540,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50540,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__51064 = seq__50528;
var G__51065 = chunk__50529;
var G__51066 = count__50530;
var G__51067 = (i__50531 + (1));
seq__50528 = G__51064;
chunk__50529 = G__51065;
count__50530 = G__51066;
i__50531 = G__51067;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__50528);
if(temp__5753__auto__){
var seq__50528__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50528__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__50528__$1);
var G__51069 = cljs.core.chunk_rest(seq__50528__$1);
var G__51070 = c__4649__auto__;
var G__51071 = cljs.core.count(c__4649__auto__);
var G__51072 = (0);
seq__50528 = G__51069;
chunk__50529 = G__51070;
count__50530 = G__51071;
i__50531 = G__51072;
continue;
} else {
var vec__50546 = cljs.core.first(seq__50528__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50546,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50546,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__51073 = cljs.core.next(seq__50528__$1);
var G__51074 = null;
var G__51075 = (0);
var G__51076 = (0);
seq__50528 = G__51073;
chunk__50529 = G__51074;
count__50530 = G__51075;
i__50531 = G__51076;
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
var seq__50549 = cljs.core.seq(styles);
var chunk__50550 = null;
var count__50551 = (0);
var i__50552 = (0);
while(true){
if((i__50552 < count__50551)){
var vec__50562 = chunk__50550.cljs$core$IIndexed$_nth$arity$2(null,i__50552);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50562,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50562,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__51078 = seq__50549;
var G__51079 = chunk__50550;
var G__51080 = count__50551;
var G__51081 = (i__50552 + (1));
seq__50549 = G__51078;
chunk__50550 = G__51079;
count__50551 = G__51080;
i__50552 = G__51081;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__50549);
if(temp__5753__auto__){
var seq__50549__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50549__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__50549__$1);
var G__51082 = cljs.core.chunk_rest(seq__50549__$1);
var G__51083 = c__4649__auto__;
var G__51084 = cljs.core.count(c__4649__auto__);
var G__51085 = (0);
seq__50549 = G__51082;
chunk__50550 = G__51083;
count__50551 = G__51084;
i__50552 = G__51085;
continue;
} else {
var vec__50570 = cljs.core.first(seq__50549__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50570,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50570,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__51086 = cljs.core.next(seq__50549__$1);
var G__51087 = null;
var G__51088 = (0);
var G__51089 = (0);
seq__50549 = G__51086;
chunk__50550 = G__51087;
count__50551 = G__51088;
i__50552 = G__51089;
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
var G__50576_51091 = key;
var G__50576_51092__$1 = (((G__50576_51091 instanceof cljs.core.Keyword))?G__50576_51091.fqn:null);
switch (G__50576_51092__$1) {
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
var ks_51097 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4223__auto__ = goog.string.startsWith(ks_51097,"data-");
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return goog.string.startsWith(ks_51097,"aria-");
}
})())){
el.setAttribute(ks_51097,value);
} else {
(el[ks_51097] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__50592){
var map__50593 = p__50592;
var map__50593__$1 = cljs.core.__destructure_map(map__50593);
var props = map__50593__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50593__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__50594 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50594,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50594,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50594,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__50597 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__50597,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__50597;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__50599 = arguments.length;
switch (G__50599) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__50608){
var vec__50609 = p__50608;
var seq__50610 = cljs.core.seq(vec__50609);
var first__50611 = cljs.core.first(seq__50610);
var seq__50610__$1 = cljs.core.next(seq__50610);
var nn = first__50611;
var first__50611__$1 = cljs.core.first(seq__50610__$1);
var seq__50610__$2 = cljs.core.next(seq__50610__$1);
var np = first__50611__$1;
var nc = seq__50610__$2;
var node = vec__50609;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__50613 = nn;
var G__50614 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__50613,G__50614) : create_fn.call(null,G__50613,G__50614));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__50615 = nn;
var G__50616 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__50615,G__50616) : create_fn.call(null,G__50615,G__50616));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__50617 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50617,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50617,(1),null);
var seq__50620_51110 = cljs.core.seq(node_children);
var chunk__50621_51111 = null;
var count__50622_51112 = (0);
var i__50623_51113 = (0);
while(true){
if((i__50623_51113 < count__50622_51112)){
var child_struct_51118 = chunk__50621_51111.cljs$core$IIndexed$_nth$arity$2(null,i__50623_51113);
var children_51119 = shadow.dom.dom_node(child_struct_51118);
if(cljs.core.seq_QMARK_(children_51119)){
var seq__50646_51120 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_51119));
var chunk__50648_51121 = null;
var count__50649_51122 = (0);
var i__50650_51123 = (0);
while(true){
if((i__50650_51123 < count__50649_51122)){
var child_51124 = chunk__50648_51121.cljs$core$IIndexed$_nth$arity$2(null,i__50650_51123);
if(cljs.core.truth_(child_51124)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_51124);


var G__51125 = seq__50646_51120;
var G__51126 = chunk__50648_51121;
var G__51127 = count__50649_51122;
var G__51128 = (i__50650_51123 + (1));
seq__50646_51120 = G__51125;
chunk__50648_51121 = G__51126;
count__50649_51122 = G__51127;
i__50650_51123 = G__51128;
continue;
} else {
var G__51129 = seq__50646_51120;
var G__51130 = chunk__50648_51121;
var G__51131 = count__50649_51122;
var G__51132 = (i__50650_51123 + (1));
seq__50646_51120 = G__51129;
chunk__50648_51121 = G__51130;
count__50649_51122 = G__51131;
i__50650_51123 = G__51132;
continue;
}
} else {
var temp__5753__auto___51133 = cljs.core.seq(seq__50646_51120);
if(temp__5753__auto___51133){
var seq__50646_51134__$1 = temp__5753__auto___51133;
if(cljs.core.chunked_seq_QMARK_(seq__50646_51134__$1)){
var c__4649__auto___51135 = cljs.core.chunk_first(seq__50646_51134__$1);
var G__51136 = cljs.core.chunk_rest(seq__50646_51134__$1);
var G__51137 = c__4649__auto___51135;
var G__51138 = cljs.core.count(c__4649__auto___51135);
var G__51139 = (0);
seq__50646_51120 = G__51136;
chunk__50648_51121 = G__51137;
count__50649_51122 = G__51138;
i__50650_51123 = G__51139;
continue;
} else {
var child_51140 = cljs.core.first(seq__50646_51134__$1);
if(cljs.core.truth_(child_51140)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_51140);


var G__51141 = cljs.core.next(seq__50646_51134__$1);
var G__51142 = null;
var G__51143 = (0);
var G__51144 = (0);
seq__50646_51120 = G__51141;
chunk__50648_51121 = G__51142;
count__50649_51122 = G__51143;
i__50650_51123 = G__51144;
continue;
} else {
var G__51145 = cljs.core.next(seq__50646_51134__$1);
var G__51146 = null;
var G__51147 = (0);
var G__51148 = (0);
seq__50646_51120 = G__51145;
chunk__50648_51121 = G__51146;
count__50649_51122 = G__51147;
i__50650_51123 = G__51148;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_51119);
}


var G__51149 = seq__50620_51110;
var G__51150 = chunk__50621_51111;
var G__51151 = count__50622_51112;
var G__51152 = (i__50623_51113 + (1));
seq__50620_51110 = G__51149;
chunk__50621_51111 = G__51150;
count__50622_51112 = G__51151;
i__50623_51113 = G__51152;
continue;
} else {
var temp__5753__auto___51153 = cljs.core.seq(seq__50620_51110);
if(temp__5753__auto___51153){
var seq__50620_51154__$1 = temp__5753__auto___51153;
if(cljs.core.chunked_seq_QMARK_(seq__50620_51154__$1)){
var c__4649__auto___51155 = cljs.core.chunk_first(seq__50620_51154__$1);
var G__51156 = cljs.core.chunk_rest(seq__50620_51154__$1);
var G__51157 = c__4649__auto___51155;
var G__51158 = cljs.core.count(c__4649__auto___51155);
var G__51159 = (0);
seq__50620_51110 = G__51156;
chunk__50621_51111 = G__51157;
count__50622_51112 = G__51158;
i__50623_51113 = G__51159;
continue;
} else {
var child_struct_51160 = cljs.core.first(seq__50620_51154__$1);
var children_51161 = shadow.dom.dom_node(child_struct_51160);
if(cljs.core.seq_QMARK_(children_51161)){
var seq__50655_51162 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_51161));
var chunk__50657_51163 = null;
var count__50658_51164 = (0);
var i__50659_51165 = (0);
while(true){
if((i__50659_51165 < count__50658_51164)){
var child_51166 = chunk__50657_51163.cljs$core$IIndexed$_nth$arity$2(null,i__50659_51165);
if(cljs.core.truth_(child_51166)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_51166);


var G__51167 = seq__50655_51162;
var G__51168 = chunk__50657_51163;
var G__51169 = count__50658_51164;
var G__51170 = (i__50659_51165 + (1));
seq__50655_51162 = G__51167;
chunk__50657_51163 = G__51168;
count__50658_51164 = G__51169;
i__50659_51165 = G__51170;
continue;
} else {
var G__51171 = seq__50655_51162;
var G__51172 = chunk__50657_51163;
var G__51173 = count__50658_51164;
var G__51174 = (i__50659_51165 + (1));
seq__50655_51162 = G__51171;
chunk__50657_51163 = G__51172;
count__50658_51164 = G__51173;
i__50659_51165 = G__51174;
continue;
}
} else {
var temp__5753__auto___51175__$1 = cljs.core.seq(seq__50655_51162);
if(temp__5753__auto___51175__$1){
var seq__50655_51176__$1 = temp__5753__auto___51175__$1;
if(cljs.core.chunked_seq_QMARK_(seq__50655_51176__$1)){
var c__4649__auto___51177 = cljs.core.chunk_first(seq__50655_51176__$1);
var G__51178 = cljs.core.chunk_rest(seq__50655_51176__$1);
var G__51179 = c__4649__auto___51177;
var G__51180 = cljs.core.count(c__4649__auto___51177);
var G__51181 = (0);
seq__50655_51162 = G__51178;
chunk__50657_51163 = G__51179;
count__50658_51164 = G__51180;
i__50659_51165 = G__51181;
continue;
} else {
var child_51185 = cljs.core.first(seq__50655_51176__$1);
if(cljs.core.truth_(child_51185)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_51185);


var G__51186 = cljs.core.next(seq__50655_51176__$1);
var G__51187 = null;
var G__51188 = (0);
var G__51189 = (0);
seq__50655_51162 = G__51186;
chunk__50657_51163 = G__51187;
count__50658_51164 = G__51188;
i__50659_51165 = G__51189;
continue;
} else {
var G__51190 = cljs.core.next(seq__50655_51176__$1);
var G__51191 = null;
var G__51192 = (0);
var G__51193 = (0);
seq__50655_51162 = G__51190;
chunk__50657_51163 = G__51191;
count__50658_51164 = G__51192;
i__50659_51165 = G__51193;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_51161);
}


var G__51194 = cljs.core.next(seq__50620_51154__$1);
var G__51195 = null;
var G__51196 = (0);
var G__51197 = (0);
seq__50620_51110 = G__51194;
chunk__50621_51111 = G__51195;
count__50622_51112 = G__51196;
i__50623_51113 = G__51197;
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
var seq__50679 = cljs.core.seq(node);
var chunk__50680 = null;
var count__50681 = (0);
var i__50682 = (0);
while(true){
if((i__50682 < count__50681)){
var n = chunk__50680.cljs$core$IIndexed$_nth$arity$2(null,i__50682);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__51198 = seq__50679;
var G__51199 = chunk__50680;
var G__51200 = count__50681;
var G__51201 = (i__50682 + (1));
seq__50679 = G__51198;
chunk__50680 = G__51199;
count__50681 = G__51200;
i__50682 = G__51201;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__50679);
if(temp__5753__auto__){
var seq__50679__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50679__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__50679__$1);
var G__51202 = cljs.core.chunk_rest(seq__50679__$1);
var G__51203 = c__4649__auto__;
var G__51204 = cljs.core.count(c__4649__auto__);
var G__51205 = (0);
seq__50679 = G__51202;
chunk__50680 = G__51203;
count__50681 = G__51204;
i__50682 = G__51205;
continue;
} else {
var n = cljs.core.first(seq__50679__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__51206 = cljs.core.next(seq__50679__$1);
var G__51207 = null;
var G__51208 = (0);
var G__51209 = (0);
seq__50679 = G__51206;
chunk__50680 = G__51207;
count__50681 = G__51208;
i__50682 = G__51209;
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
var G__50693 = arguments.length;
switch (G__50693) {
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
var G__50700 = arguments.length;
switch (G__50700) {
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
var G__50703 = arguments.length;
switch (G__50703) {
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
var len__4829__auto___51219 = arguments.length;
var i__4830__auto___51220 = (0);
while(true){
if((i__4830__auto___51220 < len__4829__auto___51219)){
args__4835__auto__.push((arguments[i__4830__auto___51220]));

var G__51221 = (i__4830__auto___51220 + (1));
i__4830__auto___51220 = G__51221;
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
var seq__50710_51222 = cljs.core.seq(nodes);
var chunk__50711_51223 = null;
var count__50712_51224 = (0);
var i__50713_51225 = (0);
while(true){
if((i__50713_51225 < count__50712_51224)){
var node_51226 = chunk__50711_51223.cljs$core$IIndexed$_nth$arity$2(null,i__50713_51225);
fragment.appendChild(shadow.dom._to_dom(node_51226));


var G__51227 = seq__50710_51222;
var G__51228 = chunk__50711_51223;
var G__51229 = count__50712_51224;
var G__51230 = (i__50713_51225 + (1));
seq__50710_51222 = G__51227;
chunk__50711_51223 = G__51228;
count__50712_51224 = G__51229;
i__50713_51225 = G__51230;
continue;
} else {
var temp__5753__auto___51231 = cljs.core.seq(seq__50710_51222);
if(temp__5753__auto___51231){
var seq__50710_51232__$1 = temp__5753__auto___51231;
if(cljs.core.chunked_seq_QMARK_(seq__50710_51232__$1)){
var c__4649__auto___51233 = cljs.core.chunk_first(seq__50710_51232__$1);
var G__51234 = cljs.core.chunk_rest(seq__50710_51232__$1);
var G__51235 = c__4649__auto___51233;
var G__51236 = cljs.core.count(c__4649__auto___51233);
var G__51237 = (0);
seq__50710_51222 = G__51234;
chunk__50711_51223 = G__51235;
count__50712_51224 = G__51236;
i__50713_51225 = G__51237;
continue;
} else {
var node_51238 = cljs.core.first(seq__50710_51232__$1);
fragment.appendChild(shadow.dom._to_dom(node_51238));


var G__51239 = cljs.core.next(seq__50710_51232__$1);
var G__51240 = null;
var G__51241 = (0);
var G__51242 = (0);
seq__50710_51222 = G__51239;
chunk__50711_51223 = G__51240;
count__50712_51224 = G__51241;
i__50713_51225 = G__51242;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq50709){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50709));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__50714_51243 = cljs.core.seq(scripts);
var chunk__50715_51244 = null;
var count__50716_51245 = (0);
var i__50717_51246 = (0);
while(true){
if((i__50717_51246 < count__50716_51245)){
var vec__50725_51247 = chunk__50715_51244.cljs$core$IIndexed$_nth$arity$2(null,i__50717_51246);
var script_tag_51248 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50725_51247,(0),null);
var script_body_51249 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50725_51247,(1),null);
eval(script_body_51249);


var G__51250 = seq__50714_51243;
var G__51251 = chunk__50715_51244;
var G__51252 = count__50716_51245;
var G__51253 = (i__50717_51246 + (1));
seq__50714_51243 = G__51250;
chunk__50715_51244 = G__51251;
count__50716_51245 = G__51252;
i__50717_51246 = G__51253;
continue;
} else {
var temp__5753__auto___51254 = cljs.core.seq(seq__50714_51243);
if(temp__5753__auto___51254){
var seq__50714_51255__$1 = temp__5753__auto___51254;
if(cljs.core.chunked_seq_QMARK_(seq__50714_51255__$1)){
var c__4649__auto___51256 = cljs.core.chunk_first(seq__50714_51255__$1);
var G__51257 = cljs.core.chunk_rest(seq__50714_51255__$1);
var G__51258 = c__4649__auto___51256;
var G__51259 = cljs.core.count(c__4649__auto___51256);
var G__51260 = (0);
seq__50714_51243 = G__51257;
chunk__50715_51244 = G__51258;
count__50716_51245 = G__51259;
i__50717_51246 = G__51260;
continue;
} else {
var vec__50728_51261 = cljs.core.first(seq__50714_51255__$1);
var script_tag_51262 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50728_51261,(0),null);
var script_body_51263 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50728_51261,(1),null);
eval(script_body_51263);


var G__51264 = cljs.core.next(seq__50714_51255__$1);
var G__51265 = null;
var G__51266 = (0);
var G__51267 = (0);
seq__50714_51243 = G__51264;
chunk__50715_51244 = G__51265;
count__50716_51245 = G__51266;
i__50717_51246 = G__51267;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__50731){
var vec__50732 = p__50731;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50732,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50732,(1),null);
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
var G__50756 = arguments.length;
switch (G__50756) {
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
var seq__50765 = cljs.core.seq(style_keys);
var chunk__50766 = null;
var count__50767 = (0);
var i__50768 = (0);
while(true){
if((i__50768 < count__50767)){
var it = chunk__50766.cljs$core$IIndexed$_nth$arity$2(null,i__50768);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__51273 = seq__50765;
var G__51274 = chunk__50766;
var G__51275 = count__50767;
var G__51276 = (i__50768 + (1));
seq__50765 = G__51273;
chunk__50766 = G__51274;
count__50767 = G__51275;
i__50768 = G__51276;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__50765);
if(temp__5753__auto__){
var seq__50765__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50765__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__50765__$1);
var G__51277 = cljs.core.chunk_rest(seq__50765__$1);
var G__51278 = c__4649__auto__;
var G__51279 = cljs.core.count(c__4649__auto__);
var G__51280 = (0);
seq__50765 = G__51277;
chunk__50766 = G__51278;
count__50767 = G__51279;
i__50768 = G__51280;
continue;
} else {
var it = cljs.core.first(seq__50765__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__51281 = cljs.core.next(seq__50765__$1);
var G__51282 = null;
var G__51283 = (0);
var G__51284 = (0);
seq__50765 = G__51281;
chunk__50766 = G__51282;
count__50767 = G__51283;
i__50768 = G__51284;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k50776,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__50791 = k50776;
var G__50791__$1 = (((G__50791 instanceof cljs.core.Keyword))?G__50791.fqn:null);
switch (G__50791__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k50776,else__4475__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__50794){
var vec__50795 = p__50794;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50795,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50795,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__50775){
var self__ = this;
var G__50775__$1 = this;
return (new cljs.core.RecordIter((0),G__50775__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this50777,other50778){
var self__ = this;
var this50777__$1 = this;
return (((!((other50778 == null)))) && ((((this50777__$1.constructor === other50778.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50777__$1.x,other50778.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50777__$1.y,other50778.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50777__$1.__extmap,other50778.__extmap)))))))));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k50776){
var self__ = this;
var this__4479__auto____$1 = this;
var G__50835 = k50776;
var G__50835__$1 = (((G__50835 instanceof cljs.core.Keyword))?G__50835.fqn:null);
switch (G__50835__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k50776);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__50775){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__50837 = cljs.core.keyword_identical_QMARK_;
var expr__50838 = k__4481__auto__;
if(cljs.core.truth_((pred__50837.cljs$core$IFn$_invoke$arity$2 ? pred__50837.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__50838) : pred__50837.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__50838)))){
return (new shadow.dom.Coordinate(G__50775,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__50837.cljs$core$IFn$_invoke$arity$2 ? pred__50837.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__50838) : pred__50837.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__50838)))){
return (new shadow.dom.Coordinate(self__.x,G__50775,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__50775),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__50775){
var self__ = this;
var this__4471__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__50775,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__50779){
var extmap__4512__auto__ = (function (){var G__50840 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__50779,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__50779)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__50840);
} else {
return G__50840;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__50779),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__50779),null,cljs.core.not_empty(extmap__4512__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k50856,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__50862 = k50856;
var G__50862__$1 = (((G__50862 instanceof cljs.core.Keyword))?G__50862.fqn:null);
switch (G__50862__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k50856,else__4475__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__50865){
var vec__50866 = p__50865;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50866,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50866,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__50855){
var self__ = this;
var G__50855__$1 = this;
return (new cljs.core.RecordIter((0),G__50855__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this50857,other50858){
var self__ = this;
var this50857__$1 = this;
return (((!((other50858 == null)))) && ((((this50857__$1.constructor === other50858.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50857__$1.w,other50858.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50857__$1.h,other50858.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50857__$1.__extmap,other50858.__extmap)))))))));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k50856){
var self__ = this;
var this__4479__auto____$1 = this;
var G__50874 = k50856;
var G__50874__$1 = (((G__50874 instanceof cljs.core.Keyword))?G__50874.fqn:null);
switch (G__50874__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k50856);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__50855){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__50877 = cljs.core.keyword_identical_QMARK_;
var expr__50878 = k__4481__auto__;
if(cljs.core.truth_((pred__50877.cljs$core$IFn$_invoke$arity$2 ? pred__50877.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__50878) : pred__50877.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__50878)))){
return (new shadow.dom.Size(G__50855,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__50877.cljs$core$IFn$_invoke$arity$2 ? pred__50877.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__50878) : pred__50877.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__50878)))){
return (new shadow.dom.Size(self__.w,G__50855,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__50855),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__50855){
var self__ = this;
var this__4471__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__50855,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__50859){
var extmap__4512__auto__ = (function (){var G__50884 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__50859,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__50859)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__50884);
} else {
return G__50884;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__50859),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__50859),null,cljs.core.not_empty(extmap__4512__auto__),null));
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
var G__51311 = (i + (1));
var G__51312 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__51311;
ret = G__51312;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__50904){
var vec__50905 = p__50904;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50905,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50905,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__50909 = arguments.length;
switch (G__50909) {
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
var G__51315 = ps;
var G__51316 = (i + (1));
el__$1 = G__51315;
i = G__51316;
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
var vec__50925 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50925,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50925,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50925,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__50928_51317 = cljs.core.seq(props);
var chunk__50929_51318 = null;
var count__50930_51319 = (0);
var i__50931_51320 = (0);
while(true){
if((i__50931_51320 < count__50930_51319)){
var vec__50947_51322 = chunk__50929_51318.cljs$core$IIndexed$_nth$arity$2(null,i__50931_51320);
var k_51323 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50947_51322,(0),null);
var v_51324 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50947_51322,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_51323);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_51323),v_51324);


var G__51326 = seq__50928_51317;
var G__51327 = chunk__50929_51318;
var G__51328 = count__50930_51319;
var G__51329 = (i__50931_51320 + (1));
seq__50928_51317 = G__51326;
chunk__50929_51318 = G__51327;
count__50930_51319 = G__51328;
i__50931_51320 = G__51329;
continue;
} else {
var temp__5753__auto___51330 = cljs.core.seq(seq__50928_51317);
if(temp__5753__auto___51330){
var seq__50928_51331__$1 = temp__5753__auto___51330;
if(cljs.core.chunked_seq_QMARK_(seq__50928_51331__$1)){
var c__4649__auto___51332 = cljs.core.chunk_first(seq__50928_51331__$1);
var G__51333 = cljs.core.chunk_rest(seq__50928_51331__$1);
var G__51334 = c__4649__auto___51332;
var G__51335 = cljs.core.count(c__4649__auto___51332);
var G__51336 = (0);
seq__50928_51317 = G__51333;
chunk__50929_51318 = G__51334;
count__50930_51319 = G__51335;
i__50931_51320 = G__51336;
continue;
} else {
var vec__50952_51337 = cljs.core.first(seq__50928_51331__$1);
var k_51338 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50952_51337,(0),null);
var v_51339 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50952_51337,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_51338);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_51338),v_51339);


var G__51340 = cljs.core.next(seq__50928_51331__$1);
var G__51341 = null;
var G__51342 = (0);
var G__51343 = (0);
seq__50928_51317 = G__51340;
chunk__50929_51318 = G__51341;
count__50930_51319 = G__51342;
i__50931_51320 = G__51343;
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
var vec__50959 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50959,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50959,(1),null);
var seq__50962_51350 = cljs.core.seq(node_children);
var chunk__50964_51351 = null;
var count__50965_51352 = (0);
var i__50966_51353 = (0);
while(true){
if((i__50966_51353 < count__50965_51352)){
var child_struct_51354 = chunk__50964_51351.cljs$core$IIndexed$_nth$arity$2(null,i__50966_51353);
if((!((child_struct_51354 == null)))){
if(typeof child_struct_51354 === 'string'){
var text_51355 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_51355),child_struct_51354].join(''));
} else {
var children_51356 = shadow.dom.svg_node(child_struct_51354);
if(cljs.core.seq_QMARK_(children_51356)){
var seq__50989_51357 = cljs.core.seq(children_51356);
var chunk__50991_51358 = null;
var count__50992_51359 = (0);
var i__50993_51360 = (0);
while(true){
if((i__50993_51360 < count__50992_51359)){
var child_51361 = chunk__50991_51358.cljs$core$IIndexed$_nth$arity$2(null,i__50993_51360);
if(cljs.core.truth_(child_51361)){
node.appendChild(child_51361);


var G__51362 = seq__50989_51357;
var G__51363 = chunk__50991_51358;
var G__51364 = count__50992_51359;
var G__51365 = (i__50993_51360 + (1));
seq__50989_51357 = G__51362;
chunk__50991_51358 = G__51363;
count__50992_51359 = G__51364;
i__50993_51360 = G__51365;
continue;
} else {
var G__51367 = seq__50989_51357;
var G__51368 = chunk__50991_51358;
var G__51369 = count__50992_51359;
var G__51370 = (i__50993_51360 + (1));
seq__50989_51357 = G__51367;
chunk__50991_51358 = G__51368;
count__50992_51359 = G__51369;
i__50993_51360 = G__51370;
continue;
}
} else {
var temp__5753__auto___51371 = cljs.core.seq(seq__50989_51357);
if(temp__5753__auto___51371){
var seq__50989_51372__$1 = temp__5753__auto___51371;
if(cljs.core.chunked_seq_QMARK_(seq__50989_51372__$1)){
var c__4649__auto___51373 = cljs.core.chunk_first(seq__50989_51372__$1);
var G__51378 = cljs.core.chunk_rest(seq__50989_51372__$1);
var G__51379 = c__4649__auto___51373;
var G__51380 = cljs.core.count(c__4649__auto___51373);
var G__51381 = (0);
seq__50989_51357 = G__51378;
chunk__50991_51358 = G__51379;
count__50992_51359 = G__51380;
i__50993_51360 = G__51381;
continue;
} else {
var child_51382 = cljs.core.first(seq__50989_51372__$1);
if(cljs.core.truth_(child_51382)){
node.appendChild(child_51382);


var G__51383 = cljs.core.next(seq__50989_51372__$1);
var G__51384 = null;
var G__51385 = (0);
var G__51386 = (0);
seq__50989_51357 = G__51383;
chunk__50991_51358 = G__51384;
count__50992_51359 = G__51385;
i__50993_51360 = G__51386;
continue;
} else {
var G__51387 = cljs.core.next(seq__50989_51372__$1);
var G__51388 = null;
var G__51389 = (0);
var G__51390 = (0);
seq__50989_51357 = G__51387;
chunk__50991_51358 = G__51388;
count__50992_51359 = G__51389;
i__50993_51360 = G__51390;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_51356);
}
}


var G__51391 = seq__50962_51350;
var G__51392 = chunk__50964_51351;
var G__51393 = count__50965_51352;
var G__51394 = (i__50966_51353 + (1));
seq__50962_51350 = G__51391;
chunk__50964_51351 = G__51392;
count__50965_51352 = G__51393;
i__50966_51353 = G__51394;
continue;
} else {
var G__51395 = seq__50962_51350;
var G__51396 = chunk__50964_51351;
var G__51397 = count__50965_51352;
var G__51398 = (i__50966_51353 + (1));
seq__50962_51350 = G__51395;
chunk__50964_51351 = G__51396;
count__50965_51352 = G__51397;
i__50966_51353 = G__51398;
continue;
}
} else {
var temp__5753__auto___51399 = cljs.core.seq(seq__50962_51350);
if(temp__5753__auto___51399){
var seq__50962_51400__$1 = temp__5753__auto___51399;
if(cljs.core.chunked_seq_QMARK_(seq__50962_51400__$1)){
var c__4649__auto___51401 = cljs.core.chunk_first(seq__50962_51400__$1);
var G__51402 = cljs.core.chunk_rest(seq__50962_51400__$1);
var G__51403 = c__4649__auto___51401;
var G__51404 = cljs.core.count(c__4649__auto___51401);
var G__51405 = (0);
seq__50962_51350 = G__51402;
chunk__50964_51351 = G__51403;
count__50965_51352 = G__51404;
i__50966_51353 = G__51405;
continue;
} else {
var child_struct_51406 = cljs.core.first(seq__50962_51400__$1);
if((!((child_struct_51406 == null)))){
if(typeof child_struct_51406 === 'string'){
var text_51407 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_51407),child_struct_51406].join(''));
} else {
var children_51408 = shadow.dom.svg_node(child_struct_51406);
if(cljs.core.seq_QMARK_(children_51408)){
var seq__51002_51409 = cljs.core.seq(children_51408);
var chunk__51004_51410 = null;
var count__51005_51411 = (0);
var i__51006_51412 = (0);
while(true){
if((i__51006_51412 < count__51005_51411)){
var child_51413 = chunk__51004_51410.cljs$core$IIndexed$_nth$arity$2(null,i__51006_51412);
if(cljs.core.truth_(child_51413)){
node.appendChild(child_51413);


var G__51414 = seq__51002_51409;
var G__51415 = chunk__51004_51410;
var G__51416 = count__51005_51411;
var G__51417 = (i__51006_51412 + (1));
seq__51002_51409 = G__51414;
chunk__51004_51410 = G__51415;
count__51005_51411 = G__51416;
i__51006_51412 = G__51417;
continue;
} else {
var G__51418 = seq__51002_51409;
var G__51419 = chunk__51004_51410;
var G__51420 = count__51005_51411;
var G__51421 = (i__51006_51412 + (1));
seq__51002_51409 = G__51418;
chunk__51004_51410 = G__51419;
count__51005_51411 = G__51420;
i__51006_51412 = G__51421;
continue;
}
} else {
var temp__5753__auto___51422__$1 = cljs.core.seq(seq__51002_51409);
if(temp__5753__auto___51422__$1){
var seq__51002_51423__$1 = temp__5753__auto___51422__$1;
if(cljs.core.chunked_seq_QMARK_(seq__51002_51423__$1)){
var c__4649__auto___51424 = cljs.core.chunk_first(seq__51002_51423__$1);
var G__51425 = cljs.core.chunk_rest(seq__51002_51423__$1);
var G__51426 = c__4649__auto___51424;
var G__51427 = cljs.core.count(c__4649__auto___51424);
var G__51428 = (0);
seq__51002_51409 = G__51425;
chunk__51004_51410 = G__51426;
count__51005_51411 = G__51427;
i__51006_51412 = G__51428;
continue;
} else {
var child_51429 = cljs.core.first(seq__51002_51423__$1);
if(cljs.core.truth_(child_51429)){
node.appendChild(child_51429);


var G__51430 = cljs.core.next(seq__51002_51423__$1);
var G__51431 = null;
var G__51432 = (0);
var G__51433 = (0);
seq__51002_51409 = G__51430;
chunk__51004_51410 = G__51431;
count__51005_51411 = G__51432;
i__51006_51412 = G__51433;
continue;
} else {
var G__51434 = cljs.core.next(seq__51002_51423__$1);
var G__51435 = null;
var G__51436 = (0);
var G__51437 = (0);
seq__51002_51409 = G__51434;
chunk__51004_51410 = G__51435;
count__51005_51411 = G__51436;
i__51006_51412 = G__51437;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_51408);
}
}


var G__51438 = cljs.core.next(seq__50962_51400__$1);
var G__51439 = null;
var G__51440 = (0);
var G__51441 = (0);
seq__50962_51350 = G__51438;
chunk__50964_51351 = G__51439;
count__50965_51352 = G__51440;
i__50966_51353 = G__51441;
continue;
} else {
var G__51442 = cljs.core.next(seq__50962_51400__$1);
var G__51443 = null;
var G__51444 = (0);
var G__51445 = (0);
seq__50962_51350 = G__51442;
chunk__50964_51351 = G__51443;
count__50965_51352 = G__51444;
i__50966_51353 = G__51445;
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
var len__4829__auto___51450 = arguments.length;
var i__4830__auto___51451 = (0);
while(true){
if((i__4830__auto___51451 < len__4829__auto___51450)){
args__4835__auto__.push((arguments[i__4830__auto___51451]));

var G__51452 = (i__4830__auto___51451 + (1));
i__4830__auto___51451 = G__51452;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq51020){
var G__51021 = cljs.core.first(seq51020);
var seq51020__$1 = cljs.core.next(seq51020);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51021,seq51020__$1);
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
var G__51024 = arguments.length;
switch (G__51024) {
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
var c__48697__auto___51456 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48698__auto__ = (function (){var switch__48472__auto__ = (function (state_51029){
var state_val_51030 = (state_51029[(1)]);
if((state_val_51030 === (1))){
var state_51029__$1 = state_51029;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51029__$1,(2),once_or_cleanup);
} else {
if((state_val_51030 === (2))){
var inst_51026 = (state_51029[(2)]);
var inst_51027 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_51029__$1 = (function (){var statearr_51031 = state_51029;
(statearr_51031[(7)] = inst_51026);

return statearr_51031;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_51029__$1,inst_51027);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__48474__auto__ = null;
var shadow$dom$state_machine__48474__auto____0 = (function (){
var statearr_51032 = [null,null,null,null,null,null,null,null];
(statearr_51032[(0)] = shadow$dom$state_machine__48474__auto__);

(statearr_51032[(1)] = (1));

return statearr_51032;
});
var shadow$dom$state_machine__48474__auto____1 = (function (state_51029){
while(true){
var ret_value__48475__auto__ = (function (){try{while(true){
var result__48476__auto__ = switch__48472__auto__(state_51029);
if(cljs.core.keyword_identical_QMARK_(result__48476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48476__auto__;
}
break;
}
}catch (e51033){var ex__48478__auto__ = e51033;
var statearr_51034_51457 = state_51029;
(statearr_51034_51457[(2)] = ex__48478__auto__);


if(cljs.core.seq((state_51029[(4)]))){
var statearr_51035_51458 = state_51029;
(statearr_51035_51458[(1)] = cljs.core.first((state_51029[(4)])));

} else {
throw ex__48478__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51459 = state_51029;
state_51029 = G__51459;
continue;
} else {
return ret_value__48475__auto__;
}
break;
}
});
shadow$dom$state_machine__48474__auto__ = function(state_51029){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__48474__auto____0.call(this);
case 1:
return shadow$dom$state_machine__48474__auto____1.call(this,state_51029);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__48474__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__48474__auto____0;
shadow$dom$state_machine__48474__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__48474__auto____1;
return shadow$dom$state_machine__48474__auto__;
})()
})();
var state__48699__auto__ = (function (){var statearr_51036 = f__48698__auto__();
(statearr_51036[(6)] = c__48697__auto___51456);

return statearr_51036;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48699__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map

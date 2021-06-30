goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__48604,res){
var map__48605 = p__48604;
var map__48605__$1 = cljs.core.__destructure_map(map__48605);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48605__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48605__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__48608 = res;
var G__48608__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48608,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__48608);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48608__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__48608__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__48614 = arguments.length;
switch (G__48614) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__48624,msg,handlers,timeout_after_ms){
var map__48625 = p__48624;
var map__48625__$1 = cljs.core.__destructure_map(map__48625);
var runtime = map__48625__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48625__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___48751 = arguments.length;
var i__4830__auto___48752 = (0);
while(true){
if((i__4830__auto___48752 < len__4829__auto___48751)){
args__4835__auto__.push((arguments[i__4830__auto___48752]));

var G__48753 = (i__4830__auto___48752 + (1));
i__4830__auto___48752 = G__48753;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((2) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4836__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__48629,ev,args){
var map__48630 = p__48629;
var map__48630__$1 = cljs.core.__destructure_map(map__48630);
var runtime = map__48630__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48630__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__48631 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__48634 = null;
var count__48635 = (0);
var i__48636 = (0);
while(true){
if((i__48636 < count__48635)){
var ext = chunk__48634.cljs$core$IIndexed$_nth$arity$2(null,i__48636);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__48754 = seq__48631;
var G__48755 = chunk__48634;
var G__48756 = count__48635;
var G__48757 = (i__48636 + (1));
seq__48631 = G__48754;
chunk__48634 = G__48755;
count__48635 = G__48756;
i__48636 = G__48757;
continue;
} else {
var G__48758 = seq__48631;
var G__48759 = chunk__48634;
var G__48760 = count__48635;
var G__48761 = (i__48636 + (1));
seq__48631 = G__48758;
chunk__48634 = G__48759;
count__48635 = G__48760;
i__48636 = G__48761;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__48631);
if(temp__5753__auto__){
var seq__48631__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48631__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__48631__$1);
var G__48762 = cljs.core.chunk_rest(seq__48631__$1);
var G__48763 = c__4649__auto__;
var G__48764 = cljs.core.count(c__4649__auto__);
var G__48765 = (0);
seq__48631 = G__48762;
chunk__48634 = G__48763;
count__48635 = G__48764;
i__48636 = G__48765;
continue;
} else {
var ext = cljs.core.first(seq__48631__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__48766 = cljs.core.next(seq__48631__$1);
var G__48767 = null;
var G__48768 = (0);
var G__48769 = (0);
seq__48631 = G__48766;
chunk__48634 = G__48767;
count__48635 = G__48768;
i__48636 = G__48769;
continue;
} else {
var G__48770 = cljs.core.next(seq__48631__$1);
var G__48771 = null;
var G__48772 = (0);
var G__48773 = (0);
seq__48631 = G__48770;
chunk__48634 = G__48771;
count__48635 = G__48772;
i__48636 = G__48773;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq48626){
var G__48627 = cljs.core.first(seq48626);
var seq48626__$1 = cljs.core.next(seq48626);
var G__48628 = cljs.core.first(seq48626__$1);
var seq48626__$2 = cljs.core.next(seq48626__$1);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48627,G__48628,seq48626__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__48650,p__48651){
var map__48652 = p__48650;
var map__48652__$1 = cljs.core.__destructure_map(map__48652);
var runtime = map__48652__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48652__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__48653 = p__48651;
var map__48653__$1 = cljs.core.__destructure_map(map__48653);
var msg = map__48653__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48653__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__48654 = cljs.core.deref(state_ref);
var map__48654__$1 = cljs.core.__destructure_map(map__48654);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48654__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48654__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__48656){
var map__48658 = p__48656;
var map__48658__$1 = cljs.core.__destructure_map(map__48658);
var runtime = map__48658__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48658__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4223__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__48666,msg){
var map__48667 = p__48666;
var map__48667__$1 = cljs.core.__destructure_map(map__48667);
var runtime = map__48667__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48667__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__48670,key,p__48671){
var map__48672 = p__48670;
var map__48672__$1 = cljs.core.__destructure_map(map__48672);
var state = map__48672__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48672__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__48673 = p__48671;
var map__48673__$1 = cljs.core.__destructure_map(map__48673);
var spec = map__48673__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48673__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__48675,key,spec){
var map__48676 = p__48675;
var map__48676__$1 = cljs.core.__destructure_map(map__48676);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48676__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__48677_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__48677_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__48678_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__48678_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__48679_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__48679_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__48680_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__48680_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__48681_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__48681_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__48697,key){
var map__48698 = p__48697;
var map__48698__$1 = cljs.core.__destructure_map(map__48698);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48698__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__48700,msg){
var map__48701 = p__48700;
var map__48701__$1 = cljs.core.__destructure_map(map__48701);
var runtime = map__48701__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48701__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__48705,p__48706){
var map__48708 = p__48705;
var map__48708__$1 = cljs.core.__destructure_map(map__48708);
var runtime = map__48708__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48708__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__48709 = p__48706;
var map__48709__$1 = cljs.core.__destructure_map(map__48709);
var msg = map__48709__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48709__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48709__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__48721 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__48723 = null;
var count__48724 = (0);
var i__48725 = (0);
while(true){
if((i__48725 < count__48724)){
var map__48734 = chunk__48723.cljs$core$IIndexed$_nth$arity$2(null,i__48725);
var map__48734__$1 = cljs.core.__destructure_map(map__48734);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48734__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__48781 = seq__48721;
var G__48782 = chunk__48723;
var G__48783 = count__48724;
var G__48784 = (i__48725 + (1));
seq__48721 = G__48781;
chunk__48723 = G__48782;
count__48724 = G__48783;
i__48725 = G__48784;
continue;
} else {
var G__48785 = seq__48721;
var G__48786 = chunk__48723;
var G__48787 = count__48724;
var G__48788 = (i__48725 + (1));
seq__48721 = G__48785;
chunk__48723 = G__48786;
count__48724 = G__48787;
i__48725 = G__48788;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__48721);
if(temp__5753__auto__){
var seq__48721__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48721__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__48721__$1);
var G__48791 = cljs.core.chunk_rest(seq__48721__$1);
var G__48792 = c__4649__auto__;
var G__48793 = cljs.core.count(c__4649__auto__);
var G__48794 = (0);
seq__48721 = G__48791;
chunk__48723 = G__48792;
count__48724 = G__48793;
i__48725 = G__48794;
continue;
} else {
var map__48735 = cljs.core.first(seq__48721__$1);
var map__48735__$1 = cljs.core.__destructure_map(map__48735);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48735__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__48795 = cljs.core.next(seq__48721__$1);
var G__48796 = null;
var G__48797 = (0);
var G__48798 = (0);
seq__48721 = G__48795;
chunk__48723 = G__48796;
count__48724 = G__48797;
i__48725 = G__48798;
continue;
} else {
var G__48799 = cljs.core.next(seq__48721__$1);
var G__48800 = null;
var G__48801 = (0);
var G__48802 = (0);
seq__48721 = G__48799;
chunk__48723 = G__48800;
count__48724 = G__48801;
i__48725 = G__48802;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map

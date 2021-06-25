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
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__51940,res){
var map__51941 = p__51940;
var map__51941__$1 = cljs.core.__destructure_map(map__51941);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51941__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51941__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__51942 = res;
var G__51942__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51942,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__51942);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51942__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__51942__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__51948 = arguments.length;
switch (G__51948) {
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

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__51949,msg,handlers,timeout_after_ms){
var map__51950 = p__51949;
var map__51950__$1 = cljs.core.__destructure_map(map__51950);
var runtime = map__51950__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51950__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___52170 = arguments.length;
var i__4830__auto___52171 = (0);
while(true){
if((i__4830__auto___52171 < len__4829__auto___52170)){
args__4835__auto__.push((arguments[i__4830__auto___52171]));

var G__52172 = (i__4830__auto___52171 + (1));
i__4830__auto___52171 = G__52172;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((2) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4836__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__51957,ev,args){
var map__51959 = p__51957;
var map__51959__$1 = cljs.core.__destructure_map(map__51959);
var runtime = map__51959__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51959__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__51960 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__51963 = null;
var count__51964 = (0);
var i__51965 = (0);
while(true){
if((i__51965 < count__51964)){
var ext = chunk__51963.cljs$core$IIndexed$_nth$arity$2(null,i__51965);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__52173 = seq__51960;
var G__52174 = chunk__51963;
var G__52175 = count__51964;
var G__52176 = (i__51965 + (1));
seq__51960 = G__52173;
chunk__51963 = G__52174;
count__51964 = G__52175;
i__51965 = G__52176;
continue;
} else {
var G__52177 = seq__51960;
var G__52178 = chunk__51963;
var G__52179 = count__51964;
var G__52180 = (i__51965 + (1));
seq__51960 = G__52177;
chunk__51963 = G__52178;
count__51964 = G__52179;
i__51965 = G__52180;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__51960);
if(temp__5753__auto__){
var seq__51960__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51960__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__51960__$1);
var G__52181 = cljs.core.chunk_rest(seq__51960__$1);
var G__52182 = c__4649__auto__;
var G__52183 = cljs.core.count(c__4649__auto__);
var G__52184 = (0);
seq__51960 = G__52181;
chunk__51963 = G__52182;
count__51964 = G__52183;
i__51965 = G__52184;
continue;
} else {
var ext = cljs.core.first(seq__51960__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__52185 = cljs.core.next(seq__51960__$1);
var G__52186 = null;
var G__52187 = (0);
var G__52188 = (0);
seq__51960 = G__52185;
chunk__51963 = G__52186;
count__51964 = G__52187;
i__51965 = G__52188;
continue;
} else {
var G__52189 = cljs.core.next(seq__51960__$1);
var G__52190 = null;
var G__52191 = (0);
var G__52192 = (0);
seq__51960 = G__52189;
chunk__51963 = G__52190;
count__51964 = G__52191;
i__51965 = G__52192;
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
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq51951){
var G__51952 = cljs.core.first(seq51951);
var seq51951__$1 = cljs.core.next(seq51951);
var G__51953 = cljs.core.first(seq51951__$1);
var seq51951__$2 = cljs.core.next(seq51951__$1);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51952,G__51953,seq51951__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__52000,p__52001){
var map__52002 = p__52000;
var map__52002__$1 = cljs.core.__destructure_map(map__52002);
var runtime = map__52002__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52002__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__52003 = p__52001;
var map__52003__$1 = cljs.core.__destructure_map(map__52003);
var msg = map__52003__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52003__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__52004 = cljs.core.deref(state_ref);
var map__52004__$1 = cljs.core.__destructure_map(map__52004);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52004__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52004__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__52011){
var map__52012 = p__52011;
var map__52012__$1 = cljs.core.__destructure_map(map__52012);
var runtime = map__52012__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52012__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4223__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__52015,msg){
var map__52016 = p__52015;
var map__52016__$1 = cljs.core.__destructure_map(map__52016);
var runtime = map__52016__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52016__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__52063,key,p__52064){
var map__52069 = p__52063;
var map__52069__$1 = cljs.core.__destructure_map(map__52069);
var state = map__52069__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52069__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__52071 = p__52064;
var map__52071__$1 = cljs.core.__destructure_map(map__52071);
var spec = map__52071__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52071__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__52090,key,spec){
var map__52091 = p__52090;
var map__52091__$1 = cljs.core.__destructure_map(map__52091);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52091__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__52093_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__52093_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__52108_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__52108_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__52109_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__52109_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__52110_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__52110_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__52111_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__52111_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__52118,key){
var map__52119 = p__52118;
var map__52119__$1 = cljs.core.__destructure_map(map__52119);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52119__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__52129,msg){
var map__52130 = p__52129;
var map__52130__$1 = cljs.core.__destructure_map(map__52130);
var runtime = map__52130__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52130__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__52136,p__52137){
var map__52138 = p__52136;
var map__52138__$1 = cljs.core.__destructure_map(map__52138);
var runtime = map__52138__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52138__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__52139 = p__52137;
var map__52139__$1 = cljs.core.__destructure_map(map__52139);
var msg = map__52139__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52139__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52139__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
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
var seq__52146 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__52148 = null;
var count__52149 = (0);
var i__52150 = (0);
while(true){
if((i__52150 < count__52149)){
var map__52157 = chunk__52148.cljs$core$IIndexed$_nth$arity$2(null,i__52150);
var map__52157__$1 = cljs.core.__destructure_map(map__52157);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52157__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__52193 = seq__52146;
var G__52194 = chunk__52148;
var G__52195 = count__52149;
var G__52196 = (i__52150 + (1));
seq__52146 = G__52193;
chunk__52148 = G__52194;
count__52149 = G__52195;
i__52150 = G__52196;
continue;
} else {
var G__52197 = seq__52146;
var G__52198 = chunk__52148;
var G__52199 = count__52149;
var G__52200 = (i__52150 + (1));
seq__52146 = G__52197;
chunk__52148 = G__52198;
count__52149 = G__52199;
i__52150 = G__52200;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__52146);
if(temp__5753__auto__){
var seq__52146__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52146__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__52146__$1);
var G__52201 = cljs.core.chunk_rest(seq__52146__$1);
var G__52202 = c__4649__auto__;
var G__52203 = cljs.core.count(c__4649__auto__);
var G__52204 = (0);
seq__52146 = G__52201;
chunk__52148 = G__52202;
count__52149 = G__52203;
i__52150 = G__52204;
continue;
} else {
var map__52166 = cljs.core.first(seq__52146__$1);
var map__52166__$1 = cljs.core.__destructure_map(map__52166);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52166__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__52205 = cljs.core.next(seq__52146__$1);
var G__52206 = null;
var G__52207 = (0);
var G__52208 = (0);
seq__52146 = G__52205;
chunk__52148 = G__52206;
count__52149 = G__52207;
i__52150 = G__52208;
continue;
} else {
var G__52209 = cljs.core.next(seq__52146__$1);
var G__52210 = null;
var G__52211 = (0);
var G__52212 = (0);
seq__52146 = G__52209;
chunk__52148 = G__52210;
count__52149 = G__52211;
i__52150 = G__52212;
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

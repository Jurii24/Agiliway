goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__50410,p__50411){
var map__50412 = p__50410;
var map__50412__$1 = cljs.core.__destructure_map(map__50412);
var svc = map__50412__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50412__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50412__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50412__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__50413 = p__50411;
var map__50413__$1 = cljs.core.__destructure_map(map__50413);
var msg = map__50413__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50413__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50413__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50413__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50413__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__50415,p__50416){
var map__50417 = p__50415;
var map__50417__$1 = cljs.core.__destructure_map(map__50417);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50417__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__50418 = p__50416;
var map__50418__$1 = cljs.core.__destructure_map(map__50418);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50418__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__50419,p__50420){
var map__50421 = p__50419;
var map__50421__$1 = cljs.core.__destructure_map(map__50421);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50421__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50421__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__50422 = p__50420;
var map__50422__$1 = cljs.core.__destructure_map(map__50422);
var msg = map__50422__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50422__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__50428,tid){
var map__50431 = p__50428;
var map__50431__$1 = cljs.core.__destructure_map(map__50431);
var svc = map__50431__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50431__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__50439 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__50440 = null;
var count__50441 = (0);
var i__50442 = (0);
while(true){
if((i__50442 < count__50441)){
var vec__50449 = chunk__50440.cljs$core$IIndexed$_nth$arity$2(null,i__50442);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50449,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50449,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__50463 = seq__50439;
var G__50464 = chunk__50440;
var G__50465 = count__50441;
var G__50466 = (i__50442 + (1));
seq__50439 = G__50463;
chunk__50440 = G__50464;
count__50441 = G__50465;
i__50442 = G__50466;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__50439);
if(temp__5753__auto__){
var seq__50439__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50439__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__50439__$1);
var G__50467 = cljs.core.chunk_rest(seq__50439__$1);
var G__50468 = c__4649__auto__;
var G__50469 = cljs.core.count(c__4649__auto__);
var G__50470 = (0);
seq__50439 = G__50467;
chunk__50440 = G__50468;
count__50441 = G__50469;
i__50442 = G__50470;
continue;
} else {
var vec__50452 = cljs.core.first(seq__50439__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50452,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50452,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__50474 = cljs.core.next(seq__50439__$1);
var G__50475 = null;
var G__50476 = (0);
var G__50477 = (0);
seq__50439 = G__50474;
chunk__50440 = G__50475;
count__50441 = G__50476;
i__50442 = G__50477;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__50432_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__50432_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__50433_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__50433_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__50434_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__50434_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__50435_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__50435_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__50455){
var map__50456 = p__50455;
var map__50456__$1 = cljs.core.__destructure_map(map__50456);
var svc = map__50456__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50456__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50456__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map

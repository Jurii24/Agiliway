goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__63390,p__63391){
var map__63392 = p__63390;
var map__63392__$1 = cljs.core.__destructure_map(map__63392);
var svc = map__63392__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63392__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63392__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63392__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__63393 = p__63391;
var map__63393__$1 = cljs.core.__destructure_map(map__63393);
var msg = map__63393__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63393__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63393__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63393__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__63393__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__63395,p__63396){
var map__63399 = p__63395;
var map__63399__$1 = cljs.core.__destructure_map(map__63399);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63399__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__63400 = p__63396;
var map__63400__$1 = cljs.core.__destructure_map(map__63400);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63400__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__63407,p__63408){
var map__63409 = p__63407;
var map__63409__$1 = cljs.core.__destructure_map(map__63409);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63409__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63409__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__63410 = p__63408;
var map__63410__$1 = cljs.core.__destructure_map(map__63410);
var msg = map__63410__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__63410__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__63412,tid){
var map__63413 = p__63412;
var map__63413__$1 = cljs.core.__destructure_map(map__63413);
var svc = map__63413__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63413__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__63421 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__63422 = null;
var count__63423 = (0);
var i__63424 = (0);
while(true){
if((i__63424 < count__63423)){
var vec__63434 = chunk__63422.cljs$core$IIndexed$_nth$arity$2(null,i__63424);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63434,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63434,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__63454 = seq__63421;
var G__63455 = chunk__63422;
var G__63456 = count__63423;
var G__63457 = (i__63424 + (1));
seq__63421 = G__63454;
chunk__63422 = G__63455;
count__63423 = G__63456;
i__63424 = G__63457;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__63421);
if(temp__5753__auto__){
var seq__63421__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__63421__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__63421__$1);
var G__63458 = cljs.core.chunk_rest(seq__63421__$1);
var G__63459 = c__4649__auto__;
var G__63460 = cljs.core.count(c__4649__auto__);
var G__63461 = (0);
seq__63421 = G__63458;
chunk__63422 = G__63459;
count__63423 = G__63460;
i__63424 = G__63461;
continue;
} else {
var vec__63437 = cljs.core.first(seq__63421__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63437,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63437,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__63462 = cljs.core.next(seq__63421__$1);
var G__63463 = null;
var G__63464 = (0);
var G__63465 = (0);
seq__63421 = G__63462;
chunk__63422 = G__63463;
count__63423 = G__63464;
i__63424 = G__63465;
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
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__63416_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__63416_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__63417_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__63417_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__63418_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__63418_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__63419_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__63419_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__63444){
var map__63445 = p__63444;
var map__63445__$1 = cljs.core.__destructure_map(map__63445);
var svc = map__63445__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63445__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63445__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map

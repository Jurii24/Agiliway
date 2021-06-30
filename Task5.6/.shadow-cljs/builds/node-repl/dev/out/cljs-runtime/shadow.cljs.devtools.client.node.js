goog.provide('shadow.cljs.devtools.client.node');
shadow.cljs.devtools.client.node.node_eval = (function shadow$cljs$devtools$client$node$node_eval(p__50653){
var map__50654 = p__50653;
var map__50654__$1 = cljs.core.__destructure_map(map__50654);
var msg = map__50654__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50654__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var source_map_json = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50654__$1,new cljs.core.Keyword(null,"source-map-json","source-map-json",-299460036));
var result = SHADOW_NODE_EVAL(js,source_map_json);
return result;
});
shadow.cljs.devtools.client.node.is_loaded_QMARK_ = (function shadow$cljs$devtools$client$node$is_loaded_QMARK_(src){
return goog.object.get(SHADOW_IMPORTED,src) === true;
});
shadow.cljs.devtools.client.node.closure_import = (function shadow$cljs$devtools$client$node$closure_import(src){
if(typeof src === 'string'){
} else {
throw (new Error("Assert failed: (string? src)"));
}

return SHADOW_IMPORT(src);
});
shadow.cljs.devtools.client.node.handle_build_complete = (function shadow$cljs$devtools$client$node$handle_build_complete(runtime,p__50658){
var map__50659 = p__50658;
var map__50659__$1 = cljs.core.__destructure_map(map__50659);
var msg = map__50659__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50659__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50659__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__50662 = info;
var map__50662__$1 = cljs.core.__destructure_map(map__50662);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50662__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50662__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50662__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(((shadow.cljs.devtools.client.env.autoload) && (((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))))){
var files_to_require = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"output-name","output-name",-1769107767),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__50663){
var map__50664 = p__50663;
var map__50664__$1 = cljs.core.__destructure_map(map__50664);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50664__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50664__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(compiled,resource_id)) || (cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__50666){
var map__50667 = p__50666;
var map__50667__$1 = cljs.core.__destructure_map(map__50667);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50667__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
}),sources))));
if(cljs.core.seq(files_to_require)){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$2(msg,(function (){
var seq__50668 = cljs.core.seq(files_to_require);
var chunk__50669 = null;
var count__50670 = (0);
var i__50671 = (0);
while(true){
if((i__50671 < count__50670)){
var src = chunk__50669.cljs$core$IIndexed$_nth$arity$2(null,i__50671);
shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.node.closure_import(src);


var G__50719 = seq__50668;
var G__50720 = chunk__50669;
var G__50721 = count__50670;
var G__50722 = (i__50671 + (1));
seq__50668 = G__50719;
chunk__50669 = G__50720;
count__50670 = G__50721;
i__50671 = G__50722;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__50668);
if(temp__5753__auto__){
var seq__50668__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50668__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__50668__$1);
var G__50723 = cljs.core.chunk_rest(seq__50668__$1);
var G__50724 = c__4649__auto__;
var G__50725 = cljs.core.count(c__4649__auto__);
var G__50726 = (0);
seq__50668 = G__50723;
chunk__50669 = G__50724;
count__50670 = G__50725;
i__50671 = G__50726;
continue;
} else {
var src = cljs.core.first(seq__50668__$1);
shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.node.closure_import(src);


var G__50727 = cljs.core.next(seq__50668__$1);
var G__50728 = null;
var G__50729 = (0);
var G__50730 = (0);
seq__50668 = G__50727;
chunk__50669 = G__50728;
count__50670 = G__50729;
i__50671 = G__50730;
continue;
}
} else {
return null;
}
}
break;
}
}));
} else {
return null;
}
} else {
return null;
}
});
shadow.cljs.devtools.client.node.client_info = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"host","host",-1558485167),new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.Keyword(null,"desc","desc",2093485764),["Node ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(process.version)].join('')], null);
shadow.cljs.devtools.client.node.start = (function shadow$cljs$devtools$client$node$start(runtime){
var ws_url = shadow.cljs.devtools.client.env.get_ws_relay_url();
var socket = (new shadow.js.shim.module$ws(ws_url,({"rejectUnauthorized": false})));
var ws_active_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
socket.on("message",(function (data){
if(cljs.core.truth_(cljs.core.deref(ws_active_ref))){
return shadow.cljs.devtools.client.shared.remote_msg(runtime,data);
} else {
return null;
}
}));

socket.on("open",(function (e){
if(cljs.core.truth_(cljs.core.deref(ws_active_ref))){
return shadow.cljs.devtools.client.shared.remote_open(runtime,e);
} else {
return null;
}
}));

socket.on("close",(function (e){
if(cljs.core.truth_(cljs.core.deref(ws_active_ref))){
return shadow.cljs.devtools.client.shared.remote_close(runtime,e,ws_url);
} else {
return null;
}
}));

socket.on("error",(function (e){
if(cljs.core.truth_(cljs.core.deref(ws_active_ref))){
return shadow.cljs.devtools.client.shared.remote_error(runtime,e);
} else {
return null;
}
}));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"socket","socket",59137063),socket,new cljs.core.Keyword(null,"ws-active-ref","ws-active-ref",804496391),ws_active_ref], null);
});
shadow.cljs.devtools.client.node.send = (function shadow$cljs$devtools$client$node$send(p__50682,msg){
var map__50683 = p__50682;
var map__50683__$1 = cljs.core.__destructure_map(map__50683);
var socket = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50683__$1,new cljs.core.Keyword(null,"socket","socket",59137063));
return socket.send(msg);
});
shadow.cljs.devtools.client.node.stop = (function shadow$cljs$devtools$client$node$stop(p__50684){
var map__50685 = p__50684;
var map__50685__$1 = cljs.core.__destructure_map(map__50685);
var socket = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50685__$1,new cljs.core.Keyword(null,"socket","socket",59137063));
var ws_active_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50685__$1,new cljs.core.Keyword(null,"ws-active-ref","ws-active-ref",804496391));
cljs.core.reset_BANG_(ws_active_ref,false);

return socket.close();
});
if((shadow.cljs.devtools.client.env.worker_client_id > (0))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return SHADOW_NODE_EVAL(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,msg){
var this$__$1 = this;
return shadow.cljs.devtools.client.node.node_eval(msg);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__50687,done,error){
var map__50688 = p__50687;
var map__50688__$1 = cljs.core.__destructure_map(map__50688);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50688__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
try{var seq__50690_50731 = cljs.core.seq(repl_sources);
var chunk__50692_50732 = null;
var count__50693_50733 = (0);
var i__50694_50734 = (0);
while(true){
if((i__50694_50734 < count__50693_50733)){
var map__50700_50735 = chunk__50692_50732.cljs$core$IIndexed$_nth$arity$2(null,i__50694_50734);
var map__50700_50736__$1 = cljs.core.__destructure_map(map__50700_50735);
var src_50737 = map__50700_50736__$1;
var output_name_50738 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50700_50736__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
if((!(shadow.cljs.devtools.client.node.is_loaded_QMARK_(output_name_50738)))){
shadow.cljs.devtools.client.node.closure_import(output_name_50738);


var G__50739 = seq__50690_50731;
var G__50740 = chunk__50692_50732;
var G__50741 = count__50693_50733;
var G__50742 = (i__50694_50734 + (1));
seq__50690_50731 = G__50739;
chunk__50692_50732 = G__50740;
count__50693_50733 = G__50741;
i__50694_50734 = G__50742;
continue;
} else {
var G__50743 = seq__50690_50731;
var G__50744 = chunk__50692_50732;
var G__50745 = count__50693_50733;
var G__50746 = (i__50694_50734 + (1));
seq__50690_50731 = G__50743;
chunk__50692_50732 = G__50744;
count__50693_50733 = G__50745;
i__50694_50734 = G__50746;
continue;
}
} else {
var temp__5753__auto___50747 = cljs.core.seq(seq__50690_50731);
if(temp__5753__auto___50747){
var seq__50690_50748__$1 = temp__5753__auto___50747;
if(cljs.core.chunked_seq_QMARK_(seq__50690_50748__$1)){
var c__4649__auto___50749 = cljs.core.chunk_first(seq__50690_50748__$1);
var G__50750 = cljs.core.chunk_rest(seq__50690_50748__$1);
var G__50751 = c__4649__auto___50749;
var G__50752 = cljs.core.count(c__4649__auto___50749);
var G__50753 = (0);
seq__50690_50731 = G__50750;
chunk__50692_50732 = G__50751;
count__50693_50733 = G__50752;
i__50694_50734 = G__50753;
continue;
} else {
var map__50701_50754 = cljs.core.first(seq__50690_50748__$1);
var map__50701_50755__$1 = cljs.core.__destructure_map(map__50701_50754);
var src_50756 = map__50701_50755__$1;
var output_name_50757 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50701_50755__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
if((!(shadow.cljs.devtools.client.node.is_loaded_QMARK_(output_name_50757)))){
shadow.cljs.devtools.client.node.closure_import(output_name_50757);


var G__50758 = cljs.core.next(seq__50690_50748__$1);
var G__50759 = null;
var G__50760 = (0);
var G__50761 = (0);
seq__50690_50731 = G__50758;
chunk__50692_50732 = G__50759;
count__50693_50733 = G__50760;
i__50694_50734 = G__50761;
continue;
} else {
var G__50762 = cljs.core.next(seq__50690_50748__$1);
var G__50763 = null;
var G__50764 = (0);
var G__50765 = (0);
seq__50690_50731 = G__50762;
chunk__50692_50732 = G__50763;
count__50693_50733 = G__50764;
i__50694_50734 = G__50765;
continue;
}
}
} else {
}
}
break;
}

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}catch (e50689){var e = e50689;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(e) : error.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (this$,p__50702,done,error){
var map__50703 = p__50702;
var map__50703__$1 = cljs.core.__destructure_map(map__50703);
var msg = map__50703__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50703__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50703__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var this$__$1 = this;
try{var seq__50705_50766 = cljs.core.seq(sources);
var chunk__50706_50767 = null;
var count__50707_50768 = (0);
var i__50708_50769 = (0);
while(true){
if((i__50708_50769 < count__50707_50768)){
var map__50711_50770 = chunk__50706_50767.cljs$core$IIndexed$_nth$arity$2(null,i__50708_50769);
var map__50711_50771__$1 = cljs.core.__destructure_map(map__50711_50770);
var src_50772 = map__50711_50771__$1;
var provides_50773 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50711_50771__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var output_name_50774 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50711_50771__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
if(cljs.core.truth_((function (){var or__4223__auto__ = (!(shadow.cljs.devtools.client.node.is_loaded_QMARK_(output_name_50774)));
if(or__4223__auto__){
return or__4223__auto__;
} else {
return cljs.core.some(reload_namespaces,provides_50773);
}
})())){
shadow.cljs.devtools.client.node.closure_import(output_name_50774);
} else {
}


var G__50775 = seq__50705_50766;
var G__50776 = chunk__50706_50767;
var G__50777 = count__50707_50768;
var G__50778 = (i__50708_50769 + (1));
seq__50705_50766 = G__50775;
chunk__50706_50767 = G__50776;
count__50707_50768 = G__50777;
i__50708_50769 = G__50778;
continue;
} else {
var temp__5753__auto___50779 = cljs.core.seq(seq__50705_50766);
if(temp__5753__auto___50779){
var seq__50705_50780__$1 = temp__5753__auto___50779;
if(cljs.core.chunked_seq_QMARK_(seq__50705_50780__$1)){
var c__4649__auto___50781 = cljs.core.chunk_first(seq__50705_50780__$1);
var G__50782 = cljs.core.chunk_rest(seq__50705_50780__$1);
var G__50783 = c__4649__auto___50781;
var G__50784 = cljs.core.count(c__4649__auto___50781);
var G__50785 = (0);
seq__50705_50766 = G__50782;
chunk__50706_50767 = G__50783;
count__50707_50768 = G__50784;
i__50708_50769 = G__50785;
continue;
} else {
var map__50712_50786 = cljs.core.first(seq__50705_50780__$1);
var map__50712_50787__$1 = cljs.core.__destructure_map(map__50712_50786);
var src_50788 = map__50712_50787__$1;
var provides_50789 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50712_50787__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var output_name_50790 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50712_50787__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
if(cljs.core.truth_((function (){var or__4223__auto__ = (!(shadow.cljs.devtools.client.node.is_loaded_QMARK_(output_name_50790)));
if(or__4223__auto__){
return or__4223__auto__;
} else {
return cljs.core.some(reload_namespaces,provides_50789);
}
})())){
shadow.cljs.devtools.client.node.closure_import(output_name_50790);
} else {
}


var G__50791 = cljs.core.next(seq__50705_50780__$1);
var G__50792 = null;
var G__50793 = (0);
var G__50794 = (0);
seq__50705_50766 = G__50791;
chunk__50706_50767 = G__50792;
count__50707_50768 = G__50793;
i__50708_50769 = G__50794;
continue;
}
} else {
}
}
break;
}

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}catch (e50704){var e = e50704;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(e) : error.call(null,e));
}}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.node","client","shadow.cljs.devtools.client.node/client",1327452098),cljs.core.PersistentHashSet.EMPTY,(function (p__50713){
var map__50714 = p__50713;
var map__50714__$1 = cljs.core.__destructure_map(map__50714);
var env = map__50714__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50714__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.node","client","shadow.cljs.devtools.client.node/client",1327452098),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
shadow.cljs.devtools.client.env.patch_goog_BANG_();

if(shadow.cljs.devtools.client.env.log){
return console.log(["shadow-cljs - #",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (){
return console.warn("The shadow-cljs Websocket was disconnected.");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
return console.error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.node.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__50715){
var map__50716 = p__50715;
var map__50716__$1 = cljs.core.__destructure_map(map__50716);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50716__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50716__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
return console.warn("shadow-cljs - The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
return console.warn("shadow-cljs - A new watch for this build was started, restart of this process required!");
} else {
return null;

}
}
})], null)], null));

return svc;
}),(function (p__50717){
var map__50718 = p__50717;
var map__50718__$1 = cljs.core.__destructure_map(map__50718);
var svc = map__50718__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50718__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.node","client","shadow.cljs.devtools.client.node/client",1327452098));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.node.client_info,shadow.cljs.devtools.client.node.start,shadow.cljs.devtools.client.node.send,shadow.cljs.devtools.client.node.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.node.js.map

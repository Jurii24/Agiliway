goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4835__auto__ = [];
var len__4829__auto___53897 = arguments.length;
var i__4830__auto___53898 = (0);
while(true){
if((i__4830__auto___53898 < len__4829__auto___53897)){
args__4835__auto__.push((arguments[i__4830__auto___53898]));

var G__53899 = (i__4830__auto___53898 + (1));
i__4830__auto___53898 = G__53899;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq53602){
var G__53603 = cljs.core.first(seq53602);
var seq53602__$1 = cljs.core.next(seq53602);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53603,seq53602__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__53610 = cljs.core.seq(sources);
var chunk__53611 = null;
var count__53612 = (0);
var i__53613 = (0);
while(true){
if((i__53613 < count__53612)){
var map__53620 = chunk__53611.cljs$core$IIndexed$_nth$arity$2(null,i__53613);
var map__53620__$1 = cljs.core.__destructure_map(map__53620);
var src = map__53620__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53620__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53620__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53620__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53620__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e53621){var e_53902 = e53621;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_53902);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_53902.message)].join('')));
}

var G__53903 = seq__53610;
var G__53904 = chunk__53611;
var G__53905 = count__53612;
var G__53906 = (i__53613 + (1));
seq__53610 = G__53903;
chunk__53611 = G__53904;
count__53612 = G__53905;
i__53613 = G__53906;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__53610);
if(temp__5753__auto__){
var seq__53610__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53610__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__53610__$1);
var G__53907 = cljs.core.chunk_rest(seq__53610__$1);
var G__53908 = c__4649__auto__;
var G__53909 = cljs.core.count(c__4649__auto__);
var G__53910 = (0);
seq__53610 = G__53907;
chunk__53611 = G__53908;
count__53612 = G__53909;
i__53613 = G__53910;
continue;
} else {
var map__53622 = cljs.core.first(seq__53610__$1);
var map__53622__$1 = cljs.core.__destructure_map(map__53622);
var src = map__53622__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53622__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53622__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53622__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53622__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e53628){var e_53913 = e53628;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_53913);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_53913.message)].join('')));
}

var G__53916 = cljs.core.next(seq__53610__$1);
var G__53917 = null;
var G__53918 = (0);
var G__53919 = (0);
seq__53610 = G__53916;
chunk__53611 = G__53917;
count__53612 = G__53918;
i__53613 = G__53919;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__53629 = cljs.core.seq(js_requires);
var chunk__53630 = null;
var count__53631 = (0);
var i__53632 = (0);
while(true){
if((i__53632 < count__53631)){
var js_ns = chunk__53630.cljs$core$IIndexed$_nth$arity$2(null,i__53632);
var require_str_53920 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_53920);


var G__53921 = seq__53629;
var G__53922 = chunk__53630;
var G__53923 = count__53631;
var G__53924 = (i__53632 + (1));
seq__53629 = G__53921;
chunk__53630 = G__53922;
count__53631 = G__53923;
i__53632 = G__53924;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__53629);
if(temp__5753__auto__){
var seq__53629__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53629__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__53629__$1);
var G__53925 = cljs.core.chunk_rest(seq__53629__$1);
var G__53926 = c__4649__auto__;
var G__53927 = cljs.core.count(c__4649__auto__);
var G__53928 = (0);
seq__53629 = G__53925;
chunk__53630 = G__53926;
count__53631 = G__53927;
i__53632 = G__53928;
continue;
} else {
var js_ns = cljs.core.first(seq__53629__$1);
var require_str_53929 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_53929);


var G__53930 = cljs.core.next(seq__53629__$1);
var G__53931 = null;
var G__53932 = (0);
var G__53933 = (0);
seq__53629 = G__53930;
chunk__53630 = G__53931;
count__53631 = G__53932;
i__53632 = G__53933;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__53648){
var map__53649 = p__53648;
var map__53649__$1 = cljs.core.__destructure_map(map__53649);
var msg = map__53649__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53649__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53649__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4622__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__53657(s__53658){
return (new cljs.core.LazySeq(null,(function (){
var s__53658__$1 = s__53658;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__53658__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__53672 = cljs.core.first(xs__6308__auto__);
var map__53672__$1 = cljs.core.__destructure_map(map__53672);
var src = map__53672__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53672__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53672__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4618__auto__ = ((function (s__53658__$1,map__53672,map__53672__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__53649,map__53649__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__53657_$_iter__53659(s__53660){
return (new cljs.core.LazySeq(null,((function (s__53658__$1,map__53672,map__53672__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__53649,map__53649__$1,msg,info,reload_info){
return (function (){
var s__53660__$1 = s__53660;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__53660__$1);
if(temp__5753__auto____$1){
var s__53660__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__53660__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__53660__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__53662 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__53661 = (0);
while(true){
if((i__53661 < size__4621__auto__)){
var warning = cljs.core._nth(c__4620__auto__,i__53661);
cljs.core.chunk_append(b__53662,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__53934 = (i__53661 + (1));
i__53661 = G__53934;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__53662),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__53657_$_iter__53659(cljs.core.chunk_rest(s__53660__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__53662),null);
}
} else {
var warning = cljs.core.first(s__53660__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__53657_$_iter__53659(cljs.core.rest(s__53660__$2)));
}
} else {
return null;
}
break;
}
});})(s__53658__$1,map__53672,map__53672__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__53649,map__53649__$1,msg,info,reload_info))
,null,null));
});})(s__53658__$1,map__53672,map__53672__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__53649,map__53649__$1,msg,info,reload_info))
;
var fs__4619__auto__ = cljs.core.seq(iterys__4618__auto__(warnings));
if(fs__4619__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4619__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__53657(cljs.core.rest(s__53658__$1)));
} else {
var G__53935 = cljs.core.rest(s__53658__$1);
s__53658__$1 = G__53935;
continue;
}
} else {
var G__53936 = cljs.core.rest(s__53658__$1);
s__53658__$1 = G__53936;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__53684_53937 = cljs.core.seq(warnings);
var chunk__53685_53938 = null;
var count__53686_53939 = (0);
var i__53687_53940 = (0);
while(true){
if((i__53687_53940 < count__53686_53939)){
var map__53707_53941 = chunk__53685_53938.cljs$core$IIndexed$_nth$arity$2(null,i__53687_53940);
var map__53707_53942__$1 = cljs.core.__destructure_map(map__53707_53941);
var w_53943 = map__53707_53942__$1;
var msg_53944__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53707_53942__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_53945 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53707_53942__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_53946 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53707_53942__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_53947 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53707_53942__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_53947)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_53945),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_53946),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_53944__$1)].join(''));


var G__53948 = seq__53684_53937;
var G__53949 = chunk__53685_53938;
var G__53950 = count__53686_53939;
var G__53951 = (i__53687_53940 + (1));
seq__53684_53937 = G__53948;
chunk__53685_53938 = G__53949;
count__53686_53939 = G__53950;
i__53687_53940 = G__53951;
continue;
} else {
var temp__5753__auto___53952 = cljs.core.seq(seq__53684_53937);
if(temp__5753__auto___53952){
var seq__53684_53953__$1 = temp__5753__auto___53952;
if(cljs.core.chunked_seq_QMARK_(seq__53684_53953__$1)){
var c__4649__auto___53954 = cljs.core.chunk_first(seq__53684_53953__$1);
var G__53955 = cljs.core.chunk_rest(seq__53684_53953__$1);
var G__53956 = c__4649__auto___53954;
var G__53957 = cljs.core.count(c__4649__auto___53954);
var G__53958 = (0);
seq__53684_53937 = G__53955;
chunk__53685_53938 = G__53956;
count__53686_53939 = G__53957;
i__53687_53940 = G__53958;
continue;
} else {
var map__53711_53959 = cljs.core.first(seq__53684_53953__$1);
var map__53711_53960__$1 = cljs.core.__destructure_map(map__53711_53959);
var w_53961 = map__53711_53960__$1;
var msg_53962__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53711_53960__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_53963 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53711_53960__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_53964 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53711_53960__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_53965 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53711_53960__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_53965)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_53963),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_53964),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_53962__$1)].join(''));


var G__53968 = cljs.core.next(seq__53684_53953__$1);
var G__53969 = null;
var G__53970 = (0);
var G__53971 = (0);
seq__53684_53937 = G__53968;
chunk__53685_53938 = G__53969;
count__53686_53939 = G__53970;
i__53687_53940 = G__53971;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__53647_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__53647_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4221__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4221__auto__){
var and__4221__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4221__auto____$1){
return new$;
} else {
return and__4221__auto____$1;
}
} else {
return and__4221__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__53737){
var map__53739 = p__53737;
var map__53739__$1 = cljs.core.__destructure_map(map__53739);
var msg = map__53739__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53739__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__53740 = cljs.core.seq(updates);
var chunk__53742 = null;
var count__53743 = (0);
var i__53744 = (0);
while(true){
if((i__53744 < count__53743)){
var path = chunk__53742.cljs$core$IIndexed$_nth$arity$2(null,i__53744);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__53788_53972 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__53792_53973 = null;
var count__53793_53974 = (0);
var i__53794_53975 = (0);
while(true){
if((i__53794_53975 < count__53793_53974)){
var node_53976 = chunk__53792_53973.cljs$core$IIndexed$_nth$arity$2(null,i__53794_53975);
if(cljs.core.not(node_53976.shadow$old)){
var path_match_53977 = shadow.cljs.devtools.client.browser.match_paths(node_53976.getAttribute("href"),path);
if(cljs.core.truth_(path_match_53977)){
var new_link_53978 = (function (){var G__53805 = node_53976.cloneNode(true);
G__53805.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_53977),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__53805;
})();
(node_53976.shadow$old = true);

(new_link_53978.onload = ((function (seq__53788_53972,chunk__53792_53973,count__53793_53974,i__53794_53975,seq__53740,chunk__53742,count__53743,i__53744,new_link_53978,path_match_53977,node_53976,path,map__53739,map__53739__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_53976);
});})(seq__53788_53972,chunk__53792_53973,count__53793_53974,i__53794_53975,seq__53740,chunk__53742,count__53743,i__53744,new_link_53978,path_match_53977,node_53976,path,map__53739,map__53739__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_53977], 0));

goog.dom.insertSiblingAfter(new_link_53978,node_53976);


var G__53979 = seq__53788_53972;
var G__53980 = chunk__53792_53973;
var G__53981 = count__53793_53974;
var G__53982 = (i__53794_53975 + (1));
seq__53788_53972 = G__53979;
chunk__53792_53973 = G__53980;
count__53793_53974 = G__53981;
i__53794_53975 = G__53982;
continue;
} else {
var G__53983 = seq__53788_53972;
var G__53984 = chunk__53792_53973;
var G__53985 = count__53793_53974;
var G__53986 = (i__53794_53975 + (1));
seq__53788_53972 = G__53983;
chunk__53792_53973 = G__53984;
count__53793_53974 = G__53985;
i__53794_53975 = G__53986;
continue;
}
} else {
var G__53987 = seq__53788_53972;
var G__53988 = chunk__53792_53973;
var G__53989 = count__53793_53974;
var G__53990 = (i__53794_53975 + (1));
seq__53788_53972 = G__53987;
chunk__53792_53973 = G__53988;
count__53793_53974 = G__53989;
i__53794_53975 = G__53990;
continue;
}
} else {
var temp__5753__auto___53991 = cljs.core.seq(seq__53788_53972);
if(temp__5753__auto___53991){
var seq__53788_53992__$1 = temp__5753__auto___53991;
if(cljs.core.chunked_seq_QMARK_(seq__53788_53992__$1)){
var c__4649__auto___53993 = cljs.core.chunk_first(seq__53788_53992__$1);
var G__53994 = cljs.core.chunk_rest(seq__53788_53992__$1);
var G__53995 = c__4649__auto___53993;
var G__53996 = cljs.core.count(c__4649__auto___53993);
var G__53997 = (0);
seq__53788_53972 = G__53994;
chunk__53792_53973 = G__53995;
count__53793_53974 = G__53996;
i__53794_53975 = G__53997;
continue;
} else {
var node_53998 = cljs.core.first(seq__53788_53992__$1);
if(cljs.core.not(node_53998.shadow$old)){
var path_match_53999 = shadow.cljs.devtools.client.browser.match_paths(node_53998.getAttribute("href"),path);
if(cljs.core.truth_(path_match_53999)){
var new_link_54000 = (function (){var G__53806 = node_53998.cloneNode(true);
G__53806.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_53999),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__53806;
})();
(node_53998.shadow$old = true);

(new_link_54000.onload = ((function (seq__53788_53972,chunk__53792_53973,count__53793_53974,i__53794_53975,seq__53740,chunk__53742,count__53743,i__53744,new_link_54000,path_match_53999,node_53998,seq__53788_53992__$1,temp__5753__auto___53991,path,map__53739,map__53739__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_53998);
});})(seq__53788_53972,chunk__53792_53973,count__53793_53974,i__53794_53975,seq__53740,chunk__53742,count__53743,i__53744,new_link_54000,path_match_53999,node_53998,seq__53788_53992__$1,temp__5753__auto___53991,path,map__53739,map__53739__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_53999], 0));

goog.dom.insertSiblingAfter(new_link_54000,node_53998);


var G__54004 = cljs.core.next(seq__53788_53992__$1);
var G__54005 = null;
var G__54006 = (0);
var G__54007 = (0);
seq__53788_53972 = G__54004;
chunk__53792_53973 = G__54005;
count__53793_53974 = G__54006;
i__53794_53975 = G__54007;
continue;
} else {
var G__54008 = cljs.core.next(seq__53788_53992__$1);
var G__54009 = null;
var G__54010 = (0);
var G__54011 = (0);
seq__53788_53972 = G__54008;
chunk__53792_53973 = G__54009;
count__53793_53974 = G__54010;
i__53794_53975 = G__54011;
continue;
}
} else {
var G__54012 = cljs.core.next(seq__53788_53992__$1);
var G__54013 = null;
var G__54014 = (0);
var G__54015 = (0);
seq__53788_53972 = G__54012;
chunk__53792_53973 = G__54013;
count__53793_53974 = G__54014;
i__53794_53975 = G__54015;
continue;
}
}
} else {
}
}
break;
}


var G__54016 = seq__53740;
var G__54017 = chunk__53742;
var G__54018 = count__53743;
var G__54019 = (i__53744 + (1));
seq__53740 = G__54016;
chunk__53742 = G__54017;
count__53743 = G__54018;
i__53744 = G__54019;
continue;
} else {
var G__54020 = seq__53740;
var G__54021 = chunk__53742;
var G__54022 = count__53743;
var G__54023 = (i__53744 + (1));
seq__53740 = G__54020;
chunk__53742 = G__54021;
count__53743 = G__54022;
i__53744 = G__54023;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__53740);
if(temp__5753__auto__){
var seq__53740__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53740__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__53740__$1);
var G__54025 = cljs.core.chunk_rest(seq__53740__$1);
var G__54026 = c__4649__auto__;
var G__54027 = cljs.core.count(c__4649__auto__);
var G__54028 = (0);
seq__53740 = G__54025;
chunk__53742 = G__54026;
count__53743 = G__54027;
i__53744 = G__54028;
continue;
} else {
var path = cljs.core.first(seq__53740__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__53807_54029 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__53811_54030 = null;
var count__53812_54031 = (0);
var i__53813_54032 = (0);
while(true){
if((i__53813_54032 < count__53812_54031)){
var node_54033 = chunk__53811_54030.cljs$core$IIndexed$_nth$arity$2(null,i__53813_54032);
if(cljs.core.not(node_54033.shadow$old)){
var path_match_54034 = shadow.cljs.devtools.client.browser.match_paths(node_54033.getAttribute("href"),path);
if(cljs.core.truth_(path_match_54034)){
var new_link_54035 = (function (){var G__53820 = node_54033.cloneNode(true);
G__53820.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_54034),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__53820;
})();
(node_54033.shadow$old = true);

(new_link_54035.onload = ((function (seq__53807_54029,chunk__53811_54030,count__53812_54031,i__53813_54032,seq__53740,chunk__53742,count__53743,i__53744,new_link_54035,path_match_54034,node_54033,path,seq__53740__$1,temp__5753__auto__,map__53739,map__53739__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_54033);
});})(seq__53807_54029,chunk__53811_54030,count__53812_54031,i__53813_54032,seq__53740,chunk__53742,count__53743,i__53744,new_link_54035,path_match_54034,node_54033,path,seq__53740__$1,temp__5753__auto__,map__53739,map__53739__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_54034], 0));

goog.dom.insertSiblingAfter(new_link_54035,node_54033);


var G__54036 = seq__53807_54029;
var G__54037 = chunk__53811_54030;
var G__54038 = count__53812_54031;
var G__54039 = (i__53813_54032 + (1));
seq__53807_54029 = G__54036;
chunk__53811_54030 = G__54037;
count__53812_54031 = G__54038;
i__53813_54032 = G__54039;
continue;
} else {
var G__54040 = seq__53807_54029;
var G__54041 = chunk__53811_54030;
var G__54042 = count__53812_54031;
var G__54043 = (i__53813_54032 + (1));
seq__53807_54029 = G__54040;
chunk__53811_54030 = G__54041;
count__53812_54031 = G__54042;
i__53813_54032 = G__54043;
continue;
}
} else {
var G__54046 = seq__53807_54029;
var G__54047 = chunk__53811_54030;
var G__54048 = count__53812_54031;
var G__54049 = (i__53813_54032 + (1));
seq__53807_54029 = G__54046;
chunk__53811_54030 = G__54047;
count__53812_54031 = G__54048;
i__53813_54032 = G__54049;
continue;
}
} else {
var temp__5753__auto___54050__$1 = cljs.core.seq(seq__53807_54029);
if(temp__5753__auto___54050__$1){
var seq__53807_54051__$1 = temp__5753__auto___54050__$1;
if(cljs.core.chunked_seq_QMARK_(seq__53807_54051__$1)){
var c__4649__auto___54052 = cljs.core.chunk_first(seq__53807_54051__$1);
var G__54053 = cljs.core.chunk_rest(seq__53807_54051__$1);
var G__54054 = c__4649__auto___54052;
var G__54055 = cljs.core.count(c__4649__auto___54052);
var G__54056 = (0);
seq__53807_54029 = G__54053;
chunk__53811_54030 = G__54054;
count__53812_54031 = G__54055;
i__53813_54032 = G__54056;
continue;
} else {
var node_54057 = cljs.core.first(seq__53807_54051__$1);
if(cljs.core.not(node_54057.shadow$old)){
var path_match_54058 = shadow.cljs.devtools.client.browser.match_paths(node_54057.getAttribute("href"),path);
if(cljs.core.truth_(path_match_54058)){
var new_link_54059 = (function (){var G__53821 = node_54057.cloneNode(true);
G__53821.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_54058),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__53821;
})();
(node_54057.shadow$old = true);

(new_link_54059.onload = ((function (seq__53807_54029,chunk__53811_54030,count__53812_54031,i__53813_54032,seq__53740,chunk__53742,count__53743,i__53744,new_link_54059,path_match_54058,node_54057,seq__53807_54051__$1,temp__5753__auto___54050__$1,path,seq__53740__$1,temp__5753__auto__,map__53739,map__53739__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_54057);
});})(seq__53807_54029,chunk__53811_54030,count__53812_54031,i__53813_54032,seq__53740,chunk__53742,count__53743,i__53744,new_link_54059,path_match_54058,node_54057,seq__53807_54051__$1,temp__5753__auto___54050__$1,path,seq__53740__$1,temp__5753__auto__,map__53739,map__53739__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_54058], 0));

goog.dom.insertSiblingAfter(new_link_54059,node_54057);


var G__54060 = cljs.core.next(seq__53807_54051__$1);
var G__54061 = null;
var G__54062 = (0);
var G__54063 = (0);
seq__53807_54029 = G__54060;
chunk__53811_54030 = G__54061;
count__53812_54031 = G__54062;
i__53813_54032 = G__54063;
continue;
} else {
var G__54064 = cljs.core.next(seq__53807_54051__$1);
var G__54065 = null;
var G__54066 = (0);
var G__54067 = (0);
seq__53807_54029 = G__54064;
chunk__53811_54030 = G__54065;
count__53812_54031 = G__54066;
i__53813_54032 = G__54067;
continue;
}
} else {
var G__54068 = cljs.core.next(seq__53807_54051__$1);
var G__54069 = null;
var G__54070 = (0);
var G__54071 = (0);
seq__53807_54029 = G__54068;
chunk__53811_54030 = G__54069;
count__53812_54031 = G__54070;
i__53813_54032 = G__54071;
continue;
}
}
} else {
}
}
break;
}


var G__54072 = cljs.core.next(seq__53740__$1);
var G__54073 = null;
var G__54074 = (0);
var G__54075 = (0);
seq__53740 = G__54072;
chunk__53742 = G__54073;
count__53743 = G__54074;
i__53744 = G__54075;
continue;
} else {
var G__54076 = cljs.core.next(seq__53740__$1);
var G__54077 = null;
var G__54078 = (0);
var G__54079 = (0);
seq__53740 = G__54076;
chunk__53742 = G__54077;
count__53743 = G__54078;
i__53744 = G__54079;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__53822){
var map__53823 = p__53822;
var map__53823__$1 = cljs.core.__destructure_map(map__53823);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53823__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__53834){
var map__53835 = p__53834;
var map__53835__$1 = cljs.core.__destructure_map(map__53835);
var _ = map__53835__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53835__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__53836,done,error){
var map__53837 = p__53836;
var map__53837__$1 = cljs.core.__destructure_map(map__53837);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53837__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__53838,done,error){
var map__53846 = p__53838;
var map__53846__$1 = cljs.core.__destructure_map(map__53846);
var msg = map__53846__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53846__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53846__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53846__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__53847){
var map__53848 = p__53847;
var map__53848__$1 = cljs.core.__destructure_map(map__53848);
var src = map__53848__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53848__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4221__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4221__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4221__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__53849 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__53849) : done.call(null,G__53849));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__53858){
var map__53859 = p__53858;
var map__53859__$1 = cljs.core.__destructure_map(map__53859);
var msg__$1 = map__53859__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53859__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e53860){var ex = e53860;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__53861){
var map__53862 = p__53861;
var map__53862__$1 = cljs.core.__destructure_map(map__53862);
var env = map__53862__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53862__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__53868){
var map__53870 = p__53868;
var map__53870__$1 = cljs.core.__destructure_map(map__53870);
var msg = map__53870__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53870__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__53874){
var map__53876 = p__53874;
var map__53876__$1 = cljs.core.__destructure_map(map__53876);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53876__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53876__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__53887){
var map__53888 = p__53887;
var map__53888__$1 = cljs.core.__destructure_map(map__53888);
var svc = map__53888__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53888__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map

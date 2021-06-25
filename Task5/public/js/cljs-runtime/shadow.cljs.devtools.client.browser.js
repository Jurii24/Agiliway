goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4835__auto__ = [];
var len__4829__auto___53783 = arguments.length;
var i__4830__auto___53784 = (0);
while(true){
if((i__4830__auto___53784 < len__4829__auto___53783)){
args__4835__auto__.push((arguments[i__4830__auto___53784]));

var G__53785 = (i__4830__auto___53784 + (1));
i__4830__auto___53784 = G__53785;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq53651){
var G__53652 = cljs.core.first(seq53651);
var seq53651__$1 = cljs.core.next(seq53651);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53652,seq53651__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__53656 = cljs.core.seq(sources);
var chunk__53657 = null;
var count__53658 = (0);
var i__53659 = (0);
while(true){
if((i__53659 < count__53658)){
var map__53669 = chunk__53657.cljs$core$IIndexed$_nth$arity$2(null,i__53659);
var map__53669__$1 = cljs.core.__destructure_map(map__53669);
var src = map__53669__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53669__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53669__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53669__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53669__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e53670){var e_53786 = e53670;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_53786);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_53786.message)].join('')));
}

var G__53787 = seq__53656;
var G__53788 = chunk__53657;
var G__53789 = count__53658;
var G__53790 = (i__53659 + (1));
seq__53656 = G__53787;
chunk__53657 = G__53788;
count__53658 = G__53789;
i__53659 = G__53790;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__53656);
if(temp__5753__auto__){
var seq__53656__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53656__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__53656__$1);
var G__53791 = cljs.core.chunk_rest(seq__53656__$1);
var G__53792 = c__4649__auto__;
var G__53793 = cljs.core.count(c__4649__auto__);
var G__53794 = (0);
seq__53656 = G__53791;
chunk__53657 = G__53792;
count__53658 = G__53793;
i__53659 = G__53794;
continue;
} else {
var map__53671 = cljs.core.first(seq__53656__$1);
var map__53671__$1 = cljs.core.__destructure_map(map__53671);
var src = map__53671__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53671__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53671__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53671__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53671__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e53672){var e_53795 = e53672;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_53795);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_53795.message)].join('')));
}

var G__53796 = cljs.core.next(seq__53656__$1);
var G__53797 = null;
var G__53798 = (0);
var G__53799 = (0);
seq__53656 = G__53796;
chunk__53657 = G__53797;
count__53658 = G__53798;
i__53659 = G__53799;
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
var seq__53675 = cljs.core.seq(js_requires);
var chunk__53676 = null;
var count__53677 = (0);
var i__53678 = (0);
while(true){
if((i__53678 < count__53677)){
var js_ns = chunk__53676.cljs$core$IIndexed$_nth$arity$2(null,i__53678);
var require_str_53800 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_53800);


var G__53801 = seq__53675;
var G__53802 = chunk__53676;
var G__53803 = count__53677;
var G__53804 = (i__53678 + (1));
seq__53675 = G__53801;
chunk__53676 = G__53802;
count__53677 = G__53803;
i__53678 = G__53804;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__53675);
if(temp__5753__auto__){
var seq__53675__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53675__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__53675__$1);
var G__53805 = cljs.core.chunk_rest(seq__53675__$1);
var G__53806 = c__4649__auto__;
var G__53807 = cljs.core.count(c__4649__auto__);
var G__53808 = (0);
seq__53675 = G__53805;
chunk__53676 = G__53806;
count__53677 = G__53807;
i__53678 = G__53808;
continue;
} else {
var js_ns = cljs.core.first(seq__53675__$1);
var require_str_53809 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_53809);


var G__53810 = cljs.core.next(seq__53675__$1);
var G__53811 = null;
var G__53812 = (0);
var G__53813 = (0);
seq__53675 = G__53810;
chunk__53676 = G__53811;
count__53677 = G__53812;
i__53678 = G__53813;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__53680){
var map__53681 = p__53680;
var map__53681__$1 = cljs.core.__destructure_map(map__53681);
var msg = map__53681__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53681__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53681__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4622__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__53682(s__53683){
return (new cljs.core.LazySeq(null,(function (){
var s__53683__$1 = s__53683;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__53683__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__53688 = cljs.core.first(xs__6308__auto__);
var map__53688__$1 = cljs.core.__destructure_map(map__53688);
var src = map__53688__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53688__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53688__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4618__auto__ = ((function (s__53683__$1,map__53688,map__53688__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__53681,map__53681__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__53682_$_iter__53684(s__53685){
return (new cljs.core.LazySeq(null,((function (s__53683__$1,map__53688,map__53688__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__53681,map__53681__$1,msg,info,reload_info){
return (function (){
var s__53685__$1 = s__53685;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__53685__$1);
if(temp__5753__auto____$1){
var s__53685__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__53685__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__53685__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__53687 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__53686 = (0);
while(true){
if((i__53686 < size__4621__auto__)){
var warning = cljs.core._nth(c__4620__auto__,i__53686);
cljs.core.chunk_append(b__53687,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__53814 = (i__53686 + (1));
i__53686 = G__53814;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__53687),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__53682_$_iter__53684(cljs.core.chunk_rest(s__53685__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__53687),null);
}
} else {
var warning = cljs.core.first(s__53685__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__53682_$_iter__53684(cljs.core.rest(s__53685__$2)));
}
} else {
return null;
}
break;
}
});})(s__53683__$1,map__53688,map__53688__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__53681,map__53681__$1,msg,info,reload_info))
,null,null));
});})(s__53683__$1,map__53688,map__53688__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__53681,map__53681__$1,msg,info,reload_info))
;
var fs__4619__auto__ = cljs.core.seq(iterys__4618__auto__(warnings));
if(fs__4619__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4619__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__53682(cljs.core.rest(s__53683__$1)));
} else {
var G__53815 = cljs.core.rest(s__53683__$1);
s__53683__$1 = G__53815;
continue;
}
} else {
var G__53816 = cljs.core.rest(s__53683__$1);
s__53683__$1 = G__53816;
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
var seq__53689_53817 = cljs.core.seq(warnings);
var chunk__53690_53818 = null;
var count__53691_53819 = (0);
var i__53692_53820 = (0);
while(true){
if((i__53692_53820 < count__53691_53819)){
var map__53695_53821 = chunk__53690_53818.cljs$core$IIndexed$_nth$arity$2(null,i__53692_53820);
var map__53695_53822__$1 = cljs.core.__destructure_map(map__53695_53821);
var w_53823 = map__53695_53822__$1;
var msg_53824__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53695_53822__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_53825 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53695_53822__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_53826 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53695_53822__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_53827 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53695_53822__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_53827)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_53825),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_53826),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_53824__$1)].join(''));


var G__53828 = seq__53689_53817;
var G__53829 = chunk__53690_53818;
var G__53830 = count__53691_53819;
var G__53831 = (i__53692_53820 + (1));
seq__53689_53817 = G__53828;
chunk__53690_53818 = G__53829;
count__53691_53819 = G__53830;
i__53692_53820 = G__53831;
continue;
} else {
var temp__5753__auto___53832 = cljs.core.seq(seq__53689_53817);
if(temp__5753__auto___53832){
var seq__53689_53833__$1 = temp__5753__auto___53832;
if(cljs.core.chunked_seq_QMARK_(seq__53689_53833__$1)){
var c__4649__auto___53834 = cljs.core.chunk_first(seq__53689_53833__$1);
var G__53835 = cljs.core.chunk_rest(seq__53689_53833__$1);
var G__53836 = c__4649__auto___53834;
var G__53837 = cljs.core.count(c__4649__auto___53834);
var G__53838 = (0);
seq__53689_53817 = G__53835;
chunk__53690_53818 = G__53836;
count__53691_53819 = G__53837;
i__53692_53820 = G__53838;
continue;
} else {
var map__53696_53839 = cljs.core.first(seq__53689_53833__$1);
var map__53696_53840__$1 = cljs.core.__destructure_map(map__53696_53839);
var w_53841 = map__53696_53840__$1;
var msg_53842__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53696_53840__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_53843 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53696_53840__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_53844 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53696_53840__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_53845 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53696_53840__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_53845)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_53843),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_53844),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_53842__$1)].join(''));


var G__53846 = cljs.core.next(seq__53689_53833__$1);
var G__53847 = null;
var G__53848 = (0);
var G__53849 = (0);
seq__53689_53817 = G__53846;
chunk__53690_53818 = G__53847;
count__53691_53819 = G__53848;
i__53692_53820 = G__53849;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__53679_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__53679_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__53697){
var map__53698 = p__53697;
var map__53698__$1 = cljs.core.__destructure_map(map__53698);
var msg = map__53698__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53698__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__53699 = cljs.core.seq(updates);
var chunk__53701 = null;
var count__53702 = (0);
var i__53703 = (0);
while(true){
if((i__53703 < count__53702)){
var path = chunk__53701.cljs$core$IIndexed$_nth$arity$2(null,i__53703);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__53733_53850 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__53737_53851 = null;
var count__53738_53852 = (0);
var i__53739_53853 = (0);
while(true){
if((i__53739_53853 < count__53738_53852)){
var node_53854 = chunk__53737_53851.cljs$core$IIndexed$_nth$arity$2(null,i__53739_53853);
if(cljs.core.not(node_53854.shadow$old)){
var path_match_53855 = shadow.cljs.devtools.client.browser.match_paths(node_53854.getAttribute("href"),path);
if(cljs.core.truth_(path_match_53855)){
var new_link_53856 = (function (){var G__53745 = node_53854.cloneNode(true);
G__53745.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_53855),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__53745;
})();
(node_53854.shadow$old = true);

(new_link_53856.onload = ((function (seq__53733_53850,chunk__53737_53851,count__53738_53852,i__53739_53853,seq__53699,chunk__53701,count__53702,i__53703,new_link_53856,path_match_53855,node_53854,path,map__53698,map__53698__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_53854);
});})(seq__53733_53850,chunk__53737_53851,count__53738_53852,i__53739_53853,seq__53699,chunk__53701,count__53702,i__53703,new_link_53856,path_match_53855,node_53854,path,map__53698,map__53698__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_53855], 0));

goog.dom.insertSiblingAfter(new_link_53856,node_53854);


var G__53857 = seq__53733_53850;
var G__53858 = chunk__53737_53851;
var G__53859 = count__53738_53852;
var G__53860 = (i__53739_53853 + (1));
seq__53733_53850 = G__53857;
chunk__53737_53851 = G__53858;
count__53738_53852 = G__53859;
i__53739_53853 = G__53860;
continue;
} else {
var G__53861 = seq__53733_53850;
var G__53862 = chunk__53737_53851;
var G__53863 = count__53738_53852;
var G__53864 = (i__53739_53853 + (1));
seq__53733_53850 = G__53861;
chunk__53737_53851 = G__53862;
count__53738_53852 = G__53863;
i__53739_53853 = G__53864;
continue;
}
} else {
var G__53865 = seq__53733_53850;
var G__53866 = chunk__53737_53851;
var G__53867 = count__53738_53852;
var G__53868 = (i__53739_53853 + (1));
seq__53733_53850 = G__53865;
chunk__53737_53851 = G__53866;
count__53738_53852 = G__53867;
i__53739_53853 = G__53868;
continue;
}
} else {
var temp__5753__auto___53869 = cljs.core.seq(seq__53733_53850);
if(temp__5753__auto___53869){
var seq__53733_53870__$1 = temp__5753__auto___53869;
if(cljs.core.chunked_seq_QMARK_(seq__53733_53870__$1)){
var c__4649__auto___53871 = cljs.core.chunk_first(seq__53733_53870__$1);
var G__53872 = cljs.core.chunk_rest(seq__53733_53870__$1);
var G__53873 = c__4649__auto___53871;
var G__53874 = cljs.core.count(c__4649__auto___53871);
var G__53875 = (0);
seq__53733_53850 = G__53872;
chunk__53737_53851 = G__53873;
count__53738_53852 = G__53874;
i__53739_53853 = G__53875;
continue;
} else {
var node_53876 = cljs.core.first(seq__53733_53870__$1);
if(cljs.core.not(node_53876.shadow$old)){
var path_match_53877 = shadow.cljs.devtools.client.browser.match_paths(node_53876.getAttribute("href"),path);
if(cljs.core.truth_(path_match_53877)){
var new_link_53878 = (function (){var G__53746 = node_53876.cloneNode(true);
G__53746.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_53877),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__53746;
})();
(node_53876.shadow$old = true);

(new_link_53878.onload = ((function (seq__53733_53850,chunk__53737_53851,count__53738_53852,i__53739_53853,seq__53699,chunk__53701,count__53702,i__53703,new_link_53878,path_match_53877,node_53876,seq__53733_53870__$1,temp__5753__auto___53869,path,map__53698,map__53698__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_53876);
});})(seq__53733_53850,chunk__53737_53851,count__53738_53852,i__53739_53853,seq__53699,chunk__53701,count__53702,i__53703,new_link_53878,path_match_53877,node_53876,seq__53733_53870__$1,temp__5753__auto___53869,path,map__53698,map__53698__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_53877], 0));

goog.dom.insertSiblingAfter(new_link_53878,node_53876);


var G__53879 = cljs.core.next(seq__53733_53870__$1);
var G__53880 = null;
var G__53881 = (0);
var G__53882 = (0);
seq__53733_53850 = G__53879;
chunk__53737_53851 = G__53880;
count__53738_53852 = G__53881;
i__53739_53853 = G__53882;
continue;
} else {
var G__53883 = cljs.core.next(seq__53733_53870__$1);
var G__53884 = null;
var G__53885 = (0);
var G__53886 = (0);
seq__53733_53850 = G__53883;
chunk__53737_53851 = G__53884;
count__53738_53852 = G__53885;
i__53739_53853 = G__53886;
continue;
}
} else {
var G__53887 = cljs.core.next(seq__53733_53870__$1);
var G__53888 = null;
var G__53889 = (0);
var G__53890 = (0);
seq__53733_53850 = G__53887;
chunk__53737_53851 = G__53888;
count__53738_53852 = G__53889;
i__53739_53853 = G__53890;
continue;
}
}
} else {
}
}
break;
}


var G__53891 = seq__53699;
var G__53892 = chunk__53701;
var G__53893 = count__53702;
var G__53894 = (i__53703 + (1));
seq__53699 = G__53891;
chunk__53701 = G__53892;
count__53702 = G__53893;
i__53703 = G__53894;
continue;
} else {
var G__53895 = seq__53699;
var G__53896 = chunk__53701;
var G__53897 = count__53702;
var G__53898 = (i__53703 + (1));
seq__53699 = G__53895;
chunk__53701 = G__53896;
count__53702 = G__53897;
i__53703 = G__53898;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__53699);
if(temp__5753__auto__){
var seq__53699__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53699__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__53699__$1);
var G__53899 = cljs.core.chunk_rest(seq__53699__$1);
var G__53900 = c__4649__auto__;
var G__53901 = cljs.core.count(c__4649__auto__);
var G__53902 = (0);
seq__53699 = G__53899;
chunk__53701 = G__53900;
count__53702 = G__53901;
i__53703 = G__53902;
continue;
} else {
var path = cljs.core.first(seq__53699__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__53747_53903 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__53751_53904 = null;
var count__53752_53905 = (0);
var i__53753_53906 = (0);
while(true){
if((i__53753_53906 < count__53752_53905)){
var node_53907 = chunk__53751_53904.cljs$core$IIndexed$_nth$arity$2(null,i__53753_53906);
if(cljs.core.not(node_53907.shadow$old)){
var path_match_53908 = shadow.cljs.devtools.client.browser.match_paths(node_53907.getAttribute("href"),path);
if(cljs.core.truth_(path_match_53908)){
var new_link_53909 = (function (){var G__53759 = node_53907.cloneNode(true);
G__53759.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_53908),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__53759;
})();
(node_53907.shadow$old = true);

(new_link_53909.onload = ((function (seq__53747_53903,chunk__53751_53904,count__53752_53905,i__53753_53906,seq__53699,chunk__53701,count__53702,i__53703,new_link_53909,path_match_53908,node_53907,path,seq__53699__$1,temp__5753__auto__,map__53698,map__53698__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_53907);
});})(seq__53747_53903,chunk__53751_53904,count__53752_53905,i__53753_53906,seq__53699,chunk__53701,count__53702,i__53703,new_link_53909,path_match_53908,node_53907,path,seq__53699__$1,temp__5753__auto__,map__53698,map__53698__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_53908], 0));

goog.dom.insertSiblingAfter(new_link_53909,node_53907);


var G__53910 = seq__53747_53903;
var G__53911 = chunk__53751_53904;
var G__53912 = count__53752_53905;
var G__53913 = (i__53753_53906 + (1));
seq__53747_53903 = G__53910;
chunk__53751_53904 = G__53911;
count__53752_53905 = G__53912;
i__53753_53906 = G__53913;
continue;
} else {
var G__53914 = seq__53747_53903;
var G__53915 = chunk__53751_53904;
var G__53916 = count__53752_53905;
var G__53917 = (i__53753_53906 + (1));
seq__53747_53903 = G__53914;
chunk__53751_53904 = G__53915;
count__53752_53905 = G__53916;
i__53753_53906 = G__53917;
continue;
}
} else {
var G__53918 = seq__53747_53903;
var G__53919 = chunk__53751_53904;
var G__53920 = count__53752_53905;
var G__53921 = (i__53753_53906 + (1));
seq__53747_53903 = G__53918;
chunk__53751_53904 = G__53919;
count__53752_53905 = G__53920;
i__53753_53906 = G__53921;
continue;
}
} else {
var temp__5753__auto___53922__$1 = cljs.core.seq(seq__53747_53903);
if(temp__5753__auto___53922__$1){
var seq__53747_53923__$1 = temp__5753__auto___53922__$1;
if(cljs.core.chunked_seq_QMARK_(seq__53747_53923__$1)){
var c__4649__auto___53924 = cljs.core.chunk_first(seq__53747_53923__$1);
var G__53925 = cljs.core.chunk_rest(seq__53747_53923__$1);
var G__53926 = c__4649__auto___53924;
var G__53927 = cljs.core.count(c__4649__auto___53924);
var G__53928 = (0);
seq__53747_53903 = G__53925;
chunk__53751_53904 = G__53926;
count__53752_53905 = G__53927;
i__53753_53906 = G__53928;
continue;
} else {
var node_53929 = cljs.core.first(seq__53747_53923__$1);
if(cljs.core.not(node_53929.shadow$old)){
var path_match_53930 = shadow.cljs.devtools.client.browser.match_paths(node_53929.getAttribute("href"),path);
if(cljs.core.truth_(path_match_53930)){
var new_link_53931 = (function (){var G__53760 = node_53929.cloneNode(true);
G__53760.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_53930),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__53760;
})();
(node_53929.shadow$old = true);

(new_link_53931.onload = ((function (seq__53747_53903,chunk__53751_53904,count__53752_53905,i__53753_53906,seq__53699,chunk__53701,count__53702,i__53703,new_link_53931,path_match_53930,node_53929,seq__53747_53923__$1,temp__5753__auto___53922__$1,path,seq__53699__$1,temp__5753__auto__,map__53698,map__53698__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_53929);
});})(seq__53747_53903,chunk__53751_53904,count__53752_53905,i__53753_53906,seq__53699,chunk__53701,count__53702,i__53703,new_link_53931,path_match_53930,node_53929,seq__53747_53923__$1,temp__5753__auto___53922__$1,path,seq__53699__$1,temp__5753__auto__,map__53698,map__53698__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_53930], 0));

goog.dom.insertSiblingAfter(new_link_53931,node_53929);


var G__53932 = cljs.core.next(seq__53747_53923__$1);
var G__53933 = null;
var G__53934 = (0);
var G__53935 = (0);
seq__53747_53903 = G__53932;
chunk__53751_53904 = G__53933;
count__53752_53905 = G__53934;
i__53753_53906 = G__53935;
continue;
} else {
var G__53936 = cljs.core.next(seq__53747_53923__$1);
var G__53937 = null;
var G__53938 = (0);
var G__53939 = (0);
seq__53747_53903 = G__53936;
chunk__53751_53904 = G__53937;
count__53752_53905 = G__53938;
i__53753_53906 = G__53939;
continue;
}
} else {
var G__53940 = cljs.core.next(seq__53747_53923__$1);
var G__53941 = null;
var G__53942 = (0);
var G__53943 = (0);
seq__53747_53903 = G__53940;
chunk__53751_53904 = G__53941;
count__53752_53905 = G__53942;
i__53753_53906 = G__53943;
continue;
}
}
} else {
}
}
break;
}


var G__53944 = cljs.core.next(seq__53699__$1);
var G__53945 = null;
var G__53946 = (0);
var G__53947 = (0);
seq__53699 = G__53944;
chunk__53701 = G__53945;
count__53702 = G__53946;
i__53703 = G__53947;
continue;
} else {
var G__53948 = cljs.core.next(seq__53699__$1);
var G__53949 = null;
var G__53950 = (0);
var G__53951 = (0);
seq__53699 = G__53948;
chunk__53701 = G__53949;
count__53702 = G__53950;
i__53703 = G__53951;
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
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__53761){
var map__53762 = p__53761;
var map__53762__$1 = cljs.core.__destructure_map(map__53762);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53762__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__53763){
var map__53764 = p__53763;
var map__53764__$1 = cljs.core.__destructure_map(map__53764);
var _ = map__53764__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53764__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__53765,done,error){
var map__53766 = p__53765;
var map__53766__$1 = cljs.core.__destructure_map(map__53766);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53766__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__53767,done,error){
var map__53768 = p__53767;
var map__53768__$1 = cljs.core.__destructure_map(map__53768);
var msg = map__53768__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53768__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53768__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53768__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__53769){
var map__53770 = p__53769;
var map__53770__$1 = cljs.core.__destructure_map(map__53770);
var src = map__53770__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53770__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4221__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4221__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4221__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__53771 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__53771) : done.call(null,G__53771));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__53772){
var map__53773 = p__53772;
var map__53773__$1 = cljs.core.__destructure_map(map__53773);
var msg__$1 = map__53773__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53773__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e53774){var ex = e53774;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__53775){
var map__53776 = p__53775;
var map__53776__$1 = cljs.core.__destructure_map(map__53776);
var env = map__53776__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53776__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__53777){
var map__53778 = p__53777;
var map__53778__$1 = cljs.core.__destructure_map(map__53778);
var msg = map__53778__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53778__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__53779){
var map__53780 = p__53779;
var map__53780__$1 = cljs.core.__destructure_map(map__53780);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53780__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53780__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__53781){
var map__53782 = p__53781;
var map__53782__$1 = cljs.core.__destructure_map(map__53782);
var svc = map__53782__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53782__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map

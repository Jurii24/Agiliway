goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4835__auto__ = [];
var len__4829__auto___63766 = arguments.length;
var i__4830__auto___63767 = (0);
while(true){
if((i__4830__auto___63767 < len__4829__auto___63766)){
args__4835__auto__.push((arguments[i__4830__auto___63767]));

var G__63768 = (i__4830__auto___63767 + (1));
i__4830__auto___63767 = G__63768;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq63634){
var G__63635 = cljs.core.first(seq63634);
var seq63634__$1 = cljs.core.next(seq63634);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__63635,seq63634__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__63639 = cljs.core.seq(sources);
var chunk__63640 = null;
var count__63641 = (0);
var i__63642 = (0);
while(true){
if((i__63642 < count__63641)){
var map__63652 = chunk__63640.cljs$core$IIndexed$_nth$arity$2(null,i__63642);
var map__63652__$1 = cljs.core.__destructure_map(map__63652);
var src = map__63652__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63652__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63652__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63652__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63652__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e63653){var e_63769 = e63653;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_63769);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_63769.message)].join('')));
}

var G__63770 = seq__63639;
var G__63771 = chunk__63640;
var G__63772 = count__63641;
var G__63773 = (i__63642 + (1));
seq__63639 = G__63770;
chunk__63640 = G__63771;
count__63641 = G__63772;
i__63642 = G__63773;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__63639);
if(temp__5753__auto__){
var seq__63639__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__63639__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__63639__$1);
var G__63774 = cljs.core.chunk_rest(seq__63639__$1);
var G__63775 = c__4649__auto__;
var G__63776 = cljs.core.count(c__4649__auto__);
var G__63777 = (0);
seq__63639 = G__63774;
chunk__63640 = G__63775;
count__63641 = G__63776;
i__63642 = G__63777;
continue;
} else {
var map__63654 = cljs.core.first(seq__63639__$1);
var map__63654__$1 = cljs.core.__destructure_map(map__63654);
var src = map__63654__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63654__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63654__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63654__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63654__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e63655){var e_63778 = e63655;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_63778);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_63778.message)].join('')));
}

var G__63779 = cljs.core.next(seq__63639__$1);
var G__63780 = null;
var G__63781 = (0);
var G__63782 = (0);
seq__63639 = G__63779;
chunk__63640 = G__63780;
count__63641 = G__63781;
i__63642 = G__63782;
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
var seq__63656 = cljs.core.seq(js_requires);
var chunk__63657 = null;
var count__63658 = (0);
var i__63659 = (0);
while(true){
if((i__63659 < count__63658)){
var js_ns = chunk__63657.cljs$core$IIndexed$_nth$arity$2(null,i__63659);
var require_str_63783 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_63783);


var G__63784 = seq__63656;
var G__63785 = chunk__63657;
var G__63786 = count__63658;
var G__63787 = (i__63659 + (1));
seq__63656 = G__63784;
chunk__63657 = G__63785;
count__63658 = G__63786;
i__63659 = G__63787;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__63656);
if(temp__5753__auto__){
var seq__63656__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__63656__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__63656__$1);
var G__63788 = cljs.core.chunk_rest(seq__63656__$1);
var G__63789 = c__4649__auto__;
var G__63790 = cljs.core.count(c__4649__auto__);
var G__63791 = (0);
seq__63656 = G__63788;
chunk__63657 = G__63789;
count__63658 = G__63790;
i__63659 = G__63791;
continue;
} else {
var js_ns = cljs.core.first(seq__63656__$1);
var require_str_63792 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_63792);


var G__63793 = cljs.core.next(seq__63656__$1);
var G__63794 = null;
var G__63795 = (0);
var G__63796 = (0);
seq__63656 = G__63793;
chunk__63657 = G__63794;
count__63658 = G__63795;
i__63659 = G__63796;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__63661){
var map__63662 = p__63661;
var map__63662__$1 = cljs.core.__destructure_map(map__63662);
var msg = map__63662__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63662__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63662__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4622__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__63665(s__63666){
return (new cljs.core.LazySeq(null,(function (){
var s__63666__$1 = s__63666;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__63666__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__63671 = cljs.core.first(xs__6308__auto__);
var map__63671__$1 = cljs.core.__destructure_map(map__63671);
var src = map__63671__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63671__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63671__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4618__auto__ = ((function (s__63666__$1,map__63671,map__63671__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__63662,map__63662__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__63665_$_iter__63667(s__63668){
return (new cljs.core.LazySeq(null,((function (s__63666__$1,map__63671,map__63671__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__63662,map__63662__$1,msg,info,reload_info){
return (function (){
var s__63668__$1 = s__63668;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__63668__$1);
if(temp__5753__auto____$1){
var s__63668__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__63668__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__63668__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__63670 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__63669 = (0);
while(true){
if((i__63669 < size__4621__auto__)){
var warning = cljs.core._nth(c__4620__auto__,i__63669);
cljs.core.chunk_append(b__63670,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__63797 = (i__63669 + (1));
i__63669 = G__63797;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__63670),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__63665_$_iter__63667(cljs.core.chunk_rest(s__63668__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__63670),null);
}
} else {
var warning = cljs.core.first(s__63668__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__63665_$_iter__63667(cljs.core.rest(s__63668__$2)));
}
} else {
return null;
}
break;
}
});})(s__63666__$1,map__63671,map__63671__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__63662,map__63662__$1,msg,info,reload_info))
,null,null));
});})(s__63666__$1,map__63671,map__63671__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__63662,map__63662__$1,msg,info,reload_info))
;
var fs__4619__auto__ = cljs.core.seq(iterys__4618__auto__(warnings));
if(fs__4619__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4619__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__63665(cljs.core.rest(s__63666__$1)));
} else {
var G__63798 = cljs.core.rest(s__63666__$1);
s__63666__$1 = G__63798;
continue;
}
} else {
var G__63799 = cljs.core.rest(s__63666__$1);
s__63666__$1 = G__63799;
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
var seq__63672_63800 = cljs.core.seq(warnings);
var chunk__63673_63801 = null;
var count__63674_63802 = (0);
var i__63675_63803 = (0);
while(true){
if((i__63675_63803 < count__63674_63802)){
var map__63678_63804 = chunk__63673_63801.cljs$core$IIndexed$_nth$arity$2(null,i__63675_63803);
var map__63678_63805__$1 = cljs.core.__destructure_map(map__63678_63804);
var w_63806 = map__63678_63805__$1;
var msg_63807__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63678_63805__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_63808 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63678_63805__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_63809 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63678_63805__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_63810 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63678_63805__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_63810)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_63808),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_63809),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_63807__$1)].join(''));


var G__63811 = seq__63672_63800;
var G__63812 = chunk__63673_63801;
var G__63813 = count__63674_63802;
var G__63814 = (i__63675_63803 + (1));
seq__63672_63800 = G__63811;
chunk__63673_63801 = G__63812;
count__63674_63802 = G__63813;
i__63675_63803 = G__63814;
continue;
} else {
var temp__5753__auto___63815 = cljs.core.seq(seq__63672_63800);
if(temp__5753__auto___63815){
var seq__63672_63816__$1 = temp__5753__auto___63815;
if(cljs.core.chunked_seq_QMARK_(seq__63672_63816__$1)){
var c__4649__auto___63817 = cljs.core.chunk_first(seq__63672_63816__$1);
var G__63818 = cljs.core.chunk_rest(seq__63672_63816__$1);
var G__63819 = c__4649__auto___63817;
var G__63820 = cljs.core.count(c__4649__auto___63817);
var G__63821 = (0);
seq__63672_63800 = G__63818;
chunk__63673_63801 = G__63819;
count__63674_63802 = G__63820;
i__63675_63803 = G__63821;
continue;
} else {
var map__63679_63822 = cljs.core.first(seq__63672_63816__$1);
var map__63679_63823__$1 = cljs.core.__destructure_map(map__63679_63822);
var w_63824 = map__63679_63823__$1;
var msg_63825__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63679_63823__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_63826 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63679_63823__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_63827 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63679_63823__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_63828 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63679_63823__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_63828)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_63826),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_63827),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_63825__$1)].join(''));


var G__63829 = cljs.core.next(seq__63672_63816__$1);
var G__63830 = null;
var G__63831 = (0);
var G__63832 = (0);
seq__63672_63800 = G__63829;
chunk__63673_63801 = G__63830;
count__63674_63802 = G__63831;
i__63675_63803 = G__63832;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__63660_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__63660_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__63680){
var map__63681 = p__63680;
var map__63681__$1 = cljs.core.__destructure_map(map__63681);
var msg = map__63681__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63681__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__63682 = cljs.core.seq(updates);
var chunk__63684 = null;
var count__63685 = (0);
var i__63686 = (0);
while(true){
if((i__63686 < count__63685)){
var path = chunk__63684.cljs$core$IIndexed$_nth$arity$2(null,i__63686);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__63716_63833 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__63720_63834 = null;
var count__63721_63835 = (0);
var i__63722_63836 = (0);
while(true){
if((i__63722_63836 < count__63721_63835)){
var node_63837 = chunk__63720_63834.cljs$core$IIndexed$_nth$arity$2(null,i__63722_63836);
if(cljs.core.not(node_63837.shadow$old)){
var path_match_63838 = shadow.cljs.devtools.client.browser.match_paths(node_63837.getAttribute("href"),path);
if(cljs.core.truth_(path_match_63838)){
var new_link_63839 = (function (){var G__63728 = node_63837.cloneNode(true);
G__63728.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_63838),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__63728;
})();
(node_63837.shadow$old = true);

(new_link_63839.onload = ((function (seq__63716_63833,chunk__63720_63834,count__63721_63835,i__63722_63836,seq__63682,chunk__63684,count__63685,i__63686,new_link_63839,path_match_63838,node_63837,path,map__63681,map__63681__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_63837);
});})(seq__63716_63833,chunk__63720_63834,count__63721_63835,i__63722_63836,seq__63682,chunk__63684,count__63685,i__63686,new_link_63839,path_match_63838,node_63837,path,map__63681,map__63681__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_63838], 0));

goog.dom.insertSiblingAfter(new_link_63839,node_63837);


var G__63840 = seq__63716_63833;
var G__63841 = chunk__63720_63834;
var G__63842 = count__63721_63835;
var G__63843 = (i__63722_63836 + (1));
seq__63716_63833 = G__63840;
chunk__63720_63834 = G__63841;
count__63721_63835 = G__63842;
i__63722_63836 = G__63843;
continue;
} else {
var G__63844 = seq__63716_63833;
var G__63845 = chunk__63720_63834;
var G__63846 = count__63721_63835;
var G__63847 = (i__63722_63836 + (1));
seq__63716_63833 = G__63844;
chunk__63720_63834 = G__63845;
count__63721_63835 = G__63846;
i__63722_63836 = G__63847;
continue;
}
} else {
var G__63848 = seq__63716_63833;
var G__63849 = chunk__63720_63834;
var G__63850 = count__63721_63835;
var G__63851 = (i__63722_63836 + (1));
seq__63716_63833 = G__63848;
chunk__63720_63834 = G__63849;
count__63721_63835 = G__63850;
i__63722_63836 = G__63851;
continue;
}
} else {
var temp__5753__auto___63852 = cljs.core.seq(seq__63716_63833);
if(temp__5753__auto___63852){
var seq__63716_63853__$1 = temp__5753__auto___63852;
if(cljs.core.chunked_seq_QMARK_(seq__63716_63853__$1)){
var c__4649__auto___63854 = cljs.core.chunk_first(seq__63716_63853__$1);
var G__63855 = cljs.core.chunk_rest(seq__63716_63853__$1);
var G__63856 = c__4649__auto___63854;
var G__63857 = cljs.core.count(c__4649__auto___63854);
var G__63858 = (0);
seq__63716_63833 = G__63855;
chunk__63720_63834 = G__63856;
count__63721_63835 = G__63857;
i__63722_63836 = G__63858;
continue;
} else {
var node_63859 = cljs.core.first(seq__63716_63853__$1);
if(cljs.core.not(node_63859.shadow$old)){
var path_match_63860 = shadow.cljs.devtools.client.browser.match_paths(node_63859.getAttribute("href"),path);
if(cljs.core.truth_(path_match_63860)){
var new_link_63861 = (function (){var G__63729 = node_63859.cloneNode(true);
G__63729.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_63860),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__63729;
})();
(node_63859.shadow$old = true);

(new_link_63861.onload = ((function (seq__63716_63833,chunk__63720_63834,count__63721_63835,i__63722_63836,seq__63682,chunk__63684,count__63685,i__63686,new_link_63861,path_match_63860,node_63859,seq__63716_63853__$1,temp__5753__auto___63852,path,map__63681,map__63681__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_63859);
});})(seq__63716_63833,chunk__63720_63834,count__63721_63835,i__63722_63836,seq__63682,chunk__63684,count__63685,i__63686,new_link_63861,path_match_63860,node_63859,seq__63716_63853__$1,temp__5753__auto___63852,path,map__63681,map__63681__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_63860], 0));

goog.dom.insertSiblingAfter(new_link_63861,node_63859);


var G__63862 = cljs.core.next(seq__63716_63853__$1);
var G__63863 = null;
var G__63864 = (0);
var G__63865 = (0);
seq__63716_63833 = G__63862;
chunk__63720_63834 = G__63863;
count__63721_63835 = G__63864;
i__63722_63836 = G__63865;
continue;
} else {
var G__63866 = cljs.core.next(seq__63716_63853__$1);
var G__63867 = null;
var G__63868 = (0);
var G__63869 = (0);
seq__63716_63833 = G__63866;
chunk__63720_63834 = G__63867;
count__63721_63835 = G__63868;
i__63722_63836 = G__63869;
continue;
}
} else {
var G__63870 = cljs.core.next(seq__63716_63853__$1);
var G__63871 = null;
var G__63872 = (0);
var G__63873 = (0);
seq__63716_63833 = G__63870;
chunk__63720_63834 = G__63871;
count__63721_63835 = G__63872;
i__63722_63836 = G__63873;
continue;
}
}
} else {
}
}
break;
}


var G__63874 = seq__63682;
var G__63875 = chunk__63684;
var G__63876 = count__63685;
var G__63877 = (i__63686 + (1));
seq__63682 = G__63874;
chunk__63684 = G__63875;
count__63685 = G__63876;
i__63686 = G__63877;
continue;
} else {
var G__63878 = seq__63682;
var G__63879 = chunk__63684;
var G__63880 = count__63685;
var G__63881 = (i__63686 + (1));
seq__63682 = G__63878;
chunk__63684 = G__63879;
count__63685 = G__63880;
i__63686 = G__63881;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__63682);
if(temp__5753__auto__){
var seq__63682__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__63682__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__63682__$1);
var G__63882 = cljs.core.chunk_rest(seq__63682__$1);
var G__63883 = c__4649__auto__;
var G__63884 = cljs.core.count(c__4649__auto__);
var G__63885 = (0);
seq__63682 = G__63882;
chunk__63684 = G__63883;
count__63685 = G__63884;
i__63686 = G__63885;
continue;
} else {
var path = cljs.core.first(seq__63682__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__63730_63886 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__63734_63887 = null;
var count__63735_63888 = (0);
var i__63736_63889 = (0);
while(true){
if((i__63736_63889 < count__63735_63888)){
var node_63890 = chunk__63734_63887.cljs$core$IIndexed$_nth$arity$2(null,i__63736_63889);
if(cljs.core.not(node_63890.shadow$old)){
var path_match_63891 = shadow.cljs.devtools.client.browser.match_paths(node_63890.getAttribute("href"),path);
if(cljs.core.truth_(path_match_63891)){
var new_link_63892 = (function (){var G__63742 = node_63890.cloneNode(true);
G__63742.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_63891),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__63742;
})();
(node_63890.shadow$old = true);

(new_link_63892.onload = ((function (seq__63730_63886,chunk__63734_63887,count__63735_63888,i__63736_63889,seq__63682,chunk__63684,count__63685,i__63686,new_link_63892,path_match_63891,node_63890,path,seq__63682__$1,temp__5753__auto__,map__63681,map__63681__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_63890);
});})(seq__63730_63886,chunk__63734_63887,count__63735_63888,i__63736_63889,seq__63682,chunk__63684,count__63685,i__63686,new_link_63892,path_match_63891,node_63890,path,seq__63682__$1,temp__5753__auto__,map__63681,map__63681__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_63891], 0));

goog.dom.insertSiblingAfter(new_link_63892,node_63890);


var G__63893 = seq__63730_63886;
var G__63894 = chunk__63734_63887;
var G__63895 = count__63735_63888;
var G__63896 = (i__63736_63889 + (1));
seq__63730_63886 = G__63893;
chunk__63734_63887 = G__63894;
count__63735_63888 = G__63895;
i__63736_63889 = G__63896;
continue;
} else {
var G__63897 = seq__63730_63886;
var G__63898 = chunk__63734_63887;
var G__63899 = count__63735_63888;
var G__63900 = (i__63736_63889 + (1));
seq__63730_63886 = G__63897;
chunk__63734_63887 = G__63898;
count__63735_63888 = G__63899;
i__63736_63889 = G__63900;
continue;
}
} else {
var G__63901 = seq__63730_63886;
var G__63902 = chunk__63734_63887;
var G__63903 = count__63735_63888;
var G__63904 = (i__63736_63889 + (1));
seq__63730_63886 = G__63901;
chunk__63734_63887 = G__63902;
count__63735_63888 = G__63903;
i__63736_63889 = G__63904;
continue;
}
} else {
var temp__5753__auto___63905__$1 = cljs.core.seq(seq__63730_63886);
if(temp__5753__auto___63905__$1){
var seq__63730_63906__$1 = temp__5753__auto___63905__$1;
if(cljs.core.chunked_seq_QMARK_(seq__63730_63906__$1)){
var c__4649__auto___63907 = cljs.core.chunk_first(seq__63730_63906__$1);
var G__63908 = cljs.core.chunk_rest(seq__63730_63906__$1);
var G__63909 = c__4649__auto___63907;
var G__63910 = cljs.core.count(c__4649__auto___63907);
var G__63911 = (0);
seq__63730_63886 = G__63908;
chunk__63734_63887 = G__63909;
count__63735_63888 = G__63910;
i__63736_63889 = G__63911;
continue;
} else {
var node_63912 = cljs.core.first(seq__63730_63906__$1);
if(cljs.core.not(node_63912.shadow$old)){
var path_match_63913 = shadow.cljs.devtools.client.browser.match_paths(node_63912.getAttribute("href"),path);
if(cljs.core.truth_(path_match_63913)){
var new_link_63914 = (function (){var G__63743 = node_63912.cloneNode(true);
G__63743.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_63913),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__63743;
})();
(node_63912.shadow$old = true);

(new_link_63914.onload = ((function (seq__63730_63886,chunk__63734_63887,count__63735_63888,i__63736_63889,seq__63682,chunk__63684,count__63685,i__63686,new_link_63914,path_match_63913,node_63912,seq__63730_63906__$1,temp__5753__auto___63905__$1,path,seq__63682__$1,temp__5753__auto__,map__63681,map__63681__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_63912);
});})(seq__63730_63886,chunk__63734_63887,count__63735_63888,i__63736_63889,seq__63682,chunk__63684,count__63685,i__63686,new_link_63914,path_match_63913,node_63912,seq__63730_63906__$1,temp__5753__auto___63905__$1,path,seq__63682__$1,temp__5753__auto__,map__63681,map__63681__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_63913], 0));

goog.dom.insertSiblingAfter(new_link_63914,node_63912);


var G__63915 = cljs.core.next(seq__63730_63906__$1);
var G__63916 = null;
var G__63917 = (0);
var G__63918 = (0);
seq__63730_63886 = G__63915;
chunk__63734_63887 = G__63916;
count__63735_63888 = G__63917;
i__63736_63889 = G__63918;
continue;
} else {
var G__63919 = cljs.core.next(seq__63730_63906__$1);
var G__63920 = null;
var G__63921 = (0);
var G__63922 = (0);
seq__63730_63886 = G__63919;
chunk__63734_63887 = G__63920;
count__63735_63888 = G__63921;
i__63736_63889 = G__63922;
continue;
}
} else {
var G__63923 = cljs.core.next(seq__63730_63906__$1);
var G__63924 = null;
var G__63925 = (0);
var G__63926 = (0);
seq__63730_63886 = G__63923;
chunk__63734_63887 = G__63924;
count__63735_63888 = G__63925;
i__63736_63889 = G__63926;
continue;
}
}
} else {
}
}
break;
}


var G__63927 = cljs.core.next(seq__63682__$1);
var G__63928 = null;
var G__63929 = (0);
var G__63930 = (0);
seq__63682 = G__63927;
chunk__63684 = G__63928;
count__63685 = G__63929;
i__63686 = G__63930;
continue;
} else {
var G__63931 = cljs.core.next(seq__63682__$1);
var G__63932 = null;
var G__63933 = (0);
var G__63934 = (0);
seq__63682 = G__63931;
chunk__63684 = G__63932;
count__63685 = G__63933;
i__63686 = G__63934;
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
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__63744){
var map__63745 = p__63744;
var map__63745__$1 = cljs.core.__destructure_map(map__63745);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63745__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__63746){
var map__63747 = p__63746;
var map__63747__$1 = cljs.core.__destructure_map(map__63747);
var _ = map__63747__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63747__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__63748,done,error){
var map__63749 = p__63748;
var map__63749__$1 = cljs.core.__destructure_map(map__63749);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63749__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__63750,done,error){
var map__63751 = p__63750;
var map__63751__$1 = cljs.core.__destructure_map(map__63751);
var msg = map__63751__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63751__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63751__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63751__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__63752){
var map__63753 = p__63752;
var map__63753__$1 = cljs.core.__destructure_map(map__63753);
var src = map__63753__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63753__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4221__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4221__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4221__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__63754 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__63754) : done.call(null,G__63754));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__63755){
var map__63756 = p__63755;
var map__63756__$1 = cljs.core.__destructure_map(map__63756);
var msg__$1 = map__63756__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63756__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e63757){var ex = e63757;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__63758){
var map__63759 = p__63758;
var map__63759__$1 = cljs.core.__destructure_map(map__63759);
var env = map__63759__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63759__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__63760){
var map__63761 = p__63760;
var map__63761__$1 = cljs.core.__destructure_map(map__63761);
var msg = map__63761__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63761__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__63762){
var map__63763 = p__63762;
var map__63763__$1 = cljs.core.__destructure_map(map__63763);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63763__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63763__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__63764){
var map__63765 = p__63764;
var map__63765__$1 = cljs.core.__destructure_map(map__63765);
var svc = map__63765__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63765__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map

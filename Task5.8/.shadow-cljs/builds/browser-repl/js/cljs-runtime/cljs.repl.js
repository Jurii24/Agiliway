goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__62960){
var map__62961 = p__62960;
var map__62961__$1 = cljs.core.__destructure_map(map__62961);
var m = map__62961__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62961__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62961__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4223__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return [(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__62962_63167 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__62963_63168 = null;
var count__62964_63169 = (0);
var i__62965_63170 = (0);
while(true){
if((i__62965_63170 < count__62964_63169)){
var f_63171 = chunk__62963_63168.cljs$core$IIndexed$_nth$arity$2(null,i__62965_63170);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_63171], 0));


var G__63172 = seq__62962_63167;
var G__63173 = chunk__62963_63168;
var G__63174 = count__62964_63169;
var G__63175 = (i__62965_63170 + (1));
seq__62962_63167 = G__63172;
chunk__62963_63168 = G__63173;
count__62964_63169 = G__63174;
i__62965_63170 = G__63175;
continue;
} else {
var temp__5753__auto___63176 = cljs.core.seq(seq__62962_63167);
if(temp__5753__auto___63176){
var seq__62962_63177__$1 = temp__5753__auto___63176;
if(cljs.core.chunked_seq_QMARK_(seq__62962_63177__$1)){
var c__4649__auto___63178 = cljs.core.chunk_first(seq__62962_63177__$1);
var G__63179 = cljs.core.chunk_rest(seq__62962_63177__$1);
var G__63180 = c__4649__auto___63178;
var G__63181 = cljs.core.count(c__4649__auto___63178);
var G__63182 = (0);
seq__62962_63167 = G__63179;
chunk__62963_63168 = G__63180;
count__62964_63169 = G__63181;
i__62965_63170 = G__63182;
continue;
} else {
var f_63184 = cljs.core.first(seq__62962_63177__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_63184], 0));


var G__63185 = cljs.core.next(seq__62962_63177__$1);
var G__63186 = null;
var G__63187 = (0);
var G__63188 = (0);
seq__62962_63167 = G__63185;
chunk__62963_63168 = G__63186;
count__62964_63169 = G__63187;
i__62965_63170 = G__63188;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_63189 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4223__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_63189], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_63189)))?cljs.core.second(arglists_63189):arglists_63189)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__62966_63192 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__62967_63193 = null;
var count__62968_63194 = (0);
var i__62969_63195 = (0);
while(true){
if((i__62969_63195 < count__62968_63194)){
var vec__62981_63196 = chunk__62967_63193.cljs$core$IIndexed$_nth$arity$2(null,i__62969_63195);
var name_63197 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62981_63196,(0),null);
var map__62984_63198 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62981_63196,(1),null);
var map__62984_63199__$1 = cljs.core.__destructure_map(map__62984_63198);
var doc_63200 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62984_63199__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_63201 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62984_63199__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_63197], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_63201], 0));

if(cljs.core.truth_(doc_63200)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_63200], 0));
} else {
}


var G__63202 = seq__62966_63192;
var G__63203 = chunk__62967_63193;
var G__63204 = count__62968_63194;
var G__63205 = (i__62969_63195 + (1));
seq__62966_63192 = G__63202;
chunk__62967_63193 = G__63203;
count__62968_63194 = G__63204;
i__62969_63195 = G__63205;
continue;
} else {
var temp__5753__auto___63206 = cljs.core.seq(seq__62966_63192);
if(temp__5753__auto___63206){
var seq__62966_63207__$1 = temp__5753__auto___63206;
if(cljs.core.chunked_seq_QMARK_(seq__62966_63207__$1)){
var c__4649__auto___63208 = cljs.core.chunk_first(seq__62966_63207__$1);
var G__63209 = cljs.core.chunk_rest(seq__62966_63207__$1);
var G__63210 = c__4649__auto___63208;
var G__63211 = cljs.core.count(c__4649__auto___63208);
var G__63212 = (0);
seq__62966_63192 = G__63209;
chunk__62967_63193 = G__63210;
count__62968_63194 = G__63211;
i__62969_63195 = G__63212;
continue;
} else {
var vec__62987_63218 = cljs.core.first(seq__62966_63207__$1);
var name_63219 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62987_63218,(0),null);
var map__62990_63220 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62987_63218,(1),null);
var map__62990_63221__$1 = cljs.core.__destructure_map(map__62990_63220);
var doc_63222 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62990_63221__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_63223 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62990_63221__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_63219], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_63223], 0));

if(cljs.core.truth_(doc_63222)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_63222], 0));
} else {
}


var G__63224 = cljs.core.next(seq__62966_63207__$1);
var G__63225 = null;
var G__63226 = (0);
var G__63227 = (0);
seq__62966_63192 = G__63224;
chunk__62967_63193 = G__63225;
count__62968_63194 = G__63226;
i__62969_63195 = G__63227;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5753__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5753__auto__)){
var fnspec = temp__5753__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__62993 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__62994 = null;
var count__62995 = (0);
var i__62996 = (0);
while(true){
if((i__62996 < count__62995)){
var role = chunk__62994.cljs$core$IIndexed$_nth$arity$2(null,i__62996);
var temp__5753__auto___63228__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___63228__$1)){
var spec_63229 = temp__5753__auto___63228__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_63229)], 0));
} else {
}


var G__63230 = seq__62993;
var G__63231 = chunk__62994;
var G__63232 = count__62995;
var G__63233 = (i__62996 + (1));
seq__62993 = G__63230;
chunk__62994 = G__63231;
count__62995 = G__63232;
i__62996 = G__63233;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__62993);
if(temp__5753__auto____$1){
var seq__62993__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__62993__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__62993__$1);
var G__63234 = cljs.core.chunk_rest(seq__62993__$1);
var G__63235 = c__4649__auto__;
var G__63236 = cljs.core.count(c__4649__auto__);
var G__63237 = (0);
seq__62993 = G__63234;
chunk__62994 = G__63235;
count__62995 = G__63236;
i__62996 = G__63237;
continue;
} else {
var role = cljs.core.first(seq__62993__$1);
var temp__5753__auto___63238__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___63238__$2)){
var spec_63239 = temp__5753__auto___63238__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_63239)], 0));
} else {
}


var G__63240 = cljs.core.next(seq__62993__$1);
var G__63241 = null;
var G__63242 = (0);
var G__63243 = (0);
seq__62993 = G__63240;
chunk__62994 = G__63241;
count__62995 = G__63242;
i__62996 = G__63243;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5753__auto__)){
var msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5753__auto__)){
var ed = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__63244 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__63245 = cljs.core.ex_cause(t);
via = G__63244;
t = G__63245;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5753__auto__)){
var root_msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5753__auto__)){
var data = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5753__auto__)){
var phase = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__63004 = datafied_throwable;
var map__63004__$1 = cljs.core.__destructure_map(map__63004);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63004__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63004__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__63004__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__63005 = cljs.core.last(via);
var map__63005__$1 = cljs.core.__destructure_map(map__63005);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63005__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63005__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63005__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__63006 = data;
var map__63006__$1 = cljs.core.__destructure_map(map__63006);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63006__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63006__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63006__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__63007 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__63007__$1 = cljs.core.__destructure_map(map__63007);
var top_data = map__63007__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63007__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__63008 = phase;
var G__63008__$1 = (((G__63008 instanceof cljs.core.Keyword))?G__63008.fqn:null);
switch (G__63008__$1) {
case "read-source":
var map__63009 = data;
var map__63009__$1 = cljs.core.__destructure_map(map__63009);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63009__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63009__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__63010 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__63010__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63010,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__63010);
var G__63010__$2 = (cljs.core.truth_((function (){var fexpr__63011 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__63011.cljs$core$IFn$_invoke$arity$1 ? fexpr__63011.cljs$core$IFn$_invoke$arity$1(source) : fexpr__63011.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__63010__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__63010__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63010__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__63010__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__63012 = top_data;
var G__63012__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63012,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__63012);
var G__63012__$2 = (cljs.core.truth_((function (){var fexpr__63013 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__63013.cljs$core$IFn$_invoke$arity$1 ? fexpr__63013.cljs$core$IFn$_invoke$arity$1(source) : fexpr__63013.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__63012__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__63012__$1);
var G__63012__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63012__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__63012__$2);
var G__63012__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63012__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__63012__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63012__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__63012__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__63014 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63014,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63014,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63014,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63014,(3),null);
var G__63017 = top_data;
var G__63017__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63017,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__63017);
var G__63017__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63017__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__63017__$1);
var G__63017__$3 = (cljs.core.truth_((function (){var and__4221__auto__ = source__$1;
if(cljs.core.truth_(and__4221__auto__)){
return method;
} else {
return and__4221__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63017__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__63017__$2);
var G__63017__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63017__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__63017__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63017__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__63017__$4;
}

break;
case "execution":
var vec__63035 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63035,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63035,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63035,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63035,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__63002_SHARP_){
var or__4223__auto__ = (p1__63002_SHARP_ == null);
if(or__4223__auto__){
return or__4223__auto__;
} else {
var fexpr__63038 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__63038.cljs$core$IFn$_invoke$arity$1 ? fexpr__63038.cljs$core$IFn$_invoke$arity$1(p1__63002_SHARP_) : fexpr__63038.call(null,p1__63002_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4223__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return line;
}
})();
var G__63046 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__63046__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63046,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__63046);
var G__63046__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63046__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__63046__$1);
var G__63046__$3 = (cljs.core.truth_((function (){var or__4223__auto__ = fn;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
var and__4221__auto__ = source__$1;
if(cljs.core.truth_(and__4221__auto__)){
return method;
} else {
return and__4221__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63046__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4223__auto__ = fn;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__63046__$2);
var G__63046__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63046__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__63046__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__63046__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__63046__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__63008__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__63063){
var map__63068 = p__63063;
var map__63068__$1 = cljs.core.__destructure_map(map__63068);
var triage_data = map__63068__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63068__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63068__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63068__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63068__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63068__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63068__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63068__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63068__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4223__auto__ = source;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4223__auto__ = line;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4223__auto__ = class$;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__63089 = phase;
var G__63089__$1 = (((G__63089 instanceof cljs.core.Keyword))?G__63089.fqn:null);
switch (G__63089__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__63097 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__63098 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__63099 = loc;
var G__63100 = (cljs.core.truth_(spec)?(function (){var sb__4760__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__63101_63262 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__63102_63263 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__63103_63264 = true;
var _STAR_print_fn_STAR__temp_val__63104_63265 = (function (x__4761__auto__){
return sb__4760__auto__.append(x__4761__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__63103_63264);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__63104_63265);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__63061_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__63061_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__63102_63263);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__63101_63262);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4760__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__63097,G__63098,G__63099,G__63100) : format.call(null,G__63097,G__63098,G__63099,G__63100));

break;
case "macroexpansion":
var G__63119 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__63120 = cause_type;
var G__63121 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__63122 = loc;
var G__63123 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__63119,G__63120,G__63121,G__63122,G__63123) : format.call(null,G__63119,G__63120,G__63121,G__63122,G__63123));

break;
case "compile-syntax-check":
var G__63132 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__63133 = cause_type;
var G__63134 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__63135 = loc;
var G__63136 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__63132,G__63133,G__63134,G__63135,G__63136) : format.call(null,G__63132,G__63133,G__63134,G__63135,G__63136));

break;
case "compilation":
var G__63137 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__63138 = cause_type;
var G__63139 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__63140 = loc;
var G__63141 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__63137,G__63138,G__63139,G__63140,G__63141) : format.call(null,G__63137,G__63138,G__63139,G__63140,G__63141));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__63142 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__63143 = symbol;
var G__63144 = loc;
var G__63145 = (function (){var sb__4760__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__63150_63270 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__63151_63271 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__63152_63272 = true;
var _STAR_print_fn_STAR__temp_val__63153_63273 = (function (x__4761__auto__){
return sb__4760__auto__.append(x__4761__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__63152_63272);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__63153_63273);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__63062_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__63062_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__63151_63271);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__63150_63270);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4760__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__63142,G__63143,G__63144,G__63145) : format.call(null,G__63142,G__63143,G__63144,G__63145));
} else {
var G__63154 = "Execution error%s at %s(%s).\n%s\n";
var G__63155 = cause_type;
var G__63156 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__63157 = loc;
var G__63158 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__63154,G__63155,G__63156,G__63157,G__63158) : format.call(null,G__63154,G__63155,G__63156,G__63157,G__63158));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__63089__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map

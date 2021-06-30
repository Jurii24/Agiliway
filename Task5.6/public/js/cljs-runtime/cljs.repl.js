goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__52978){
var map__52979 = p__52978;
var map__52979__$1 = cljs.core.__destructure_map(map__52979);
var m = map__52979__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52979__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52979__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__52980_53197 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__52981_53198 = null;
var count__52982_53199 = (0);
var i__52983_53200 = (0);
while(true){
if((i__52983_53200 < count__52982_53199)){
var f_53201 = chunk__52981_53198.cljs$core$IIndexed$_nth$arity$2(null,i__52983_53200);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_53201], 0));


var G__53202 = seq__52980_53197;
var G__53203 = chunk__52981_53198;
var G__53204 = count__52982_53199;
var G__53205 = (i__52983_53200 + (1));
seq__52980_53197 = G__53202;
chunk__52981_53198 = G__53203;
count__52982_53199 = G__53204;
i__52983_53200 = G__53205;
continue;
} else {
var temp__5753__auto___53206 = cljs.core.seq(seq__52980_53197);
if(temp__5753__auto___53206){
var seq__52980_53207__$1 = temp__5753__auto___53206;
if(cljs.core.chunked_seq_QMARK_(seq__52980_53207__$1)){
var c__4649__auto___53208 = cljs.core.chunk_first(seq__52980_53207__$1);
var G__53209 = cljs.core.chunk_rest(seq__52980_53207__$1);
var G__53210 = c__4649__auto___53208;
var G__53211 = cljs.core.count(c__4649__auto___53208);
var G__53212 = (0);
seq__52980_53197 = G__53209;
chunk__52981_53198 = G__53210;
count__52982_53199 = G__53211;
i__52983_53200 = G__53212;
continue;
} else {
var f_53214 = cljs.core.first(seq__52980_53207__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_53214], 0));


var G__53215 = cljs.core.next(seq__52980_53207__$1);
var G__53216 = null;
var G__53217 = (0);
var G__53218 = (0);
seq__52980_53197 = G__53215;
chunk__52981_53198 = G__53216;
count__52982_53199 = G__53217;
i__52983_53200 = G__53218;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_53219 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4223__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_53219], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_53219)))?cljs.core.second(arglists_53219):arglists_53219)], 0));
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
var seq__52989_53220 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__52990_53221 = null;
var count__52991_53222 = (0);
var i__52992_53223 = (0);
while(true){
if((i__52992_53223 < count__52991_53222)){
var vec__53003_53224 = chunk__52990_53221.cljs$core$IIndexed$_nth$arity$2(null,i__52992_53223);
var name_53225 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53003_53224,(0),null);
var map__53006_53226 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53003_53224,(1),null);
var map__53006_53227__$1 = cljs.core.__destructure_map(map__53006_53226);
var doc_53228 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53006_53227__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_53229 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53006_53227__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_53225], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_53229], 0));

if(cljs.core.truth_(doc_53228)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_53228], 0));
} else {
}


var G__53231 = seq__52989_53220;
var G__53232 = chunk__52990_53221;
var G__53233 = count__52991_53222;
var G__53234 = (i__52992_53223 + (1));
seq__52989_53220 = G__53231;
chunk__52990_53221 = G__53232;
count__52991_53222 = G__53233;
i__52992_53223 = G__53234;
continue;
} else {
var temp__5753__auto___53238 = cljs.core.seq(seq__52989_53220);
if(temp__5753__auto___53238){
var seq__52989_53239__$1 = temp__5753__auto___53238;
if(cljs.core.chunked_seq_QMARK_(seq__52989_53239__$1)){
var c__4649__auto___53240 = cljs.core.chunk_first(seq__52989_53239__$1);
var G__53241 = cljs.core.chunk_rest(seq__52989_53239__$1);
var G__53242 = c__4649__auto___53240;
var G__53243 = cljs.core.count(c__4649__auto___53240);
var G__53244 = (0);
seq__52989_53220 = G__53241;
chunk__52990_53221 = G__53242;
count__52991_53222 = G__53243;
i__52992_53223 = G__53244;
continue;
} else {
var vec__53009_53245 = cljs.core.first(seq__52989_53239__$1);
var name_53246 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53009_53245,(0),null);
var map__53012_53247 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53009_53245,(1),null);
var map__53012_53248__$1 = cljs.core.__destructure_map(map__53012_53247);
var doc_53249 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53012_53248__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_53250 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53012_53248__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_53246], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_53250], 0));

if(cljs.core.truth_(doc_53249)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_53249], 0));
} else {
}


var G__53251 = cljs.core.next(seq__52989_53239__$1);
var G__53252 = null;
var G__53253 = (0);
var G__53254 = (0);
seq__52989_53220 = G__53251;
chunk__52990_53221 = G__53252;
count__52991_53222 = G__53253;
i__52992_53223 = G__53254;
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

var seq__53014 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__53015 = null;
var count__53016 = (0);
var i__53017 = (0);
while(true){
if((i__53017 < count__53016)){
var role = chunk__53015.cljs$core$IIndexed$_nth$arity$2(null,i__53017);
var temp__5753__auto___53256__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___53256__$1)){
var spec_53257 = temp__5753__auto___53256__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_53257)], 0));
} else {
}


var G__53258 = seq__53014;
var G__53259 = chunk__53015;
var G__53260 = count__53016;
var G__53261 = (i__53017 + (1));
seq__53014 = G__53258;
chunk__53015 = G__53259;
count__53016 = G__53260;
i__53017 = G__53261;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__53014);
if(temp__5753__auto____$1){
var seq__53014__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__53014__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__53014__$1);
var G__53262 = cljs.core.chunk_rest(seq__53014__$1);
var G__53263 = c__4649__auto__;
var G__53264 = cljs.core.count(c__4649__auto__);
var G__53265 = (0);
seq__53014 = G__53262;
chunk__53015 = G__53263;
count__53016 = G__53264;
i__53017 = G__53265;
continue;
} else {
var role = cljs.core.first(seq__53014__$1);
var temp__5753__auto___53266__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___53266__$2)){
var spec_53267 = temp__5753__auto___53266__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_53267)], 0));
} else {
}


var G__53268 = cljs.core.next(seq__53014__$1);
var G__53269 = null;
var G__53270 = (0);
var G__53271 = (0);
seq__53014 = G__53268;
chunk__53015 = G__53269;
count__53016 = G__53270;
i__53017 = G__53271;
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
var G__53272 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__53273 = cljs.core.ex_cause(t);
via = G__53272;
t = G__53273;
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
var map__53084 = datafied_throwable;
var map__53084__$1 = cljs.core.__destructure_map(map__53084);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53084__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53084__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__53084__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__53085 = cljs.core.last(via);
var map__53085__$1 = cljs.core.__destructure_map(map__53085);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53085__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53085__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53085__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__53086 = data;
var map__53086__$1 = cljs.core.__destructure_map(map__53086);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53086__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53086__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53086__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__53087 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__53087__$1 = cljs.core.__destructure_map(map__53087);
var top_data = map__53087__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53087__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__53095 = phase;
var G__53095__$1 = (((G__53095 instanceof cljs.core.Keyword))?G__53095.fqn:null);
switch (G__53095__$1) {
case "read-source":
var map__53110 = data;
var map__53110__$1 = cljs.core.__destructure_map(map__53110);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53110__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53110__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__53115 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__53115__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53115,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__53115);
var G__53115__$2 = (cljs.core.truth_((function (){var fexpr__53124 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__53124.cljs$core$IFn$_invoke$arity$1 ? fexpr__53124.cljs$core$IFn$_invoke$arity$1(source) : fexpr__53124.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__53115__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__53115__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53115__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__53115__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__53125 = top_data;
var G__53125__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53125,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__53125);
var G__53125__$2 = (cljs.core.truth_((function (){var fexpr__53126 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__53126.cljs$core$IFn$_invoke$arity$1 ? fexpr__53126.cljs$core$IFn$_invoke$arity$1(source) : fexpr__53126.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__53125__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__53125__$1);
var G__53125__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53125__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__53125__$2);
var G__53125__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53125__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__53125__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53125__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__53125__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__53128 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53128,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53128,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53128,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53128,(3),null);
var G__53131 = top_data;
var G__53131__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53131,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__53131);
var G__53131__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53131__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__53131__$1);
var G__53131__$3 = (cljs.core.truth_((function (){var and__4221__auto__ = source__$1;
if(cljs.core.truth_(and__4221__auto__)){
return method;
} else {
return and__4221__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53131__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__53131__$2);
var G__53131__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53131__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__53131__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53131__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__53131__$4;
}

break;
case "execution":
var vec__53133 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53133,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53133,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53133,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53133,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__53063_SHARP_){
var or__4223__auto__ = (p1__53063_SHARP_ == null);
if(or__4223__auto__){
return or__4223__auto__;
} else {
var fexpr__53136 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__53136.cljs$core$IFn$_invoke$arity$1 ? fexpr__53136.cljs$core$IFn$_invoke$arity$1(p1__53063_SHARP_) : fexpr__53136.call(null,p1__53063_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4223__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return line;
}
})();
var G__53138 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__53138__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53138,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__53138);
var G__53138__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53138__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__53138__$1);
var G__53138__$3 = (cljs.core.truth_((function (){var or__4223__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53138__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4223__auto__ = fn;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__53138__$2);
var G__53138__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53138__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__53138__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53138__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__53138__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__53095__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__53143){
var map__53144 = p__53143;
var map__53144__$1 = cljs.core.__destructure_map(map__53144);
var triage_data = map__53144__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53144__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53144__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53144__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53144__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53144__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53144__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53144__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53144__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__53146 = phase;
var G__53146__$1 = (((G__53146 instanceof cljs.core.Keyword))?G__53146.fqn:null);
switch (G__53146__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__53147 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__53148 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__53149 = loc;
var G__53150 = (cljs.core.truth_(spec)?(function (){var sb__4760__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__53151_53285 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__53152_53286 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__53153_53287 = true;
var _STAR_print_fn_STAR__temp_val__53154_53288 = (function (x__4761__auto__){
return sb__4760__auto__.append(x__4761__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__53153_53287);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__53154_53288);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__53141_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__53141_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__53152_53286);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__53151_53285);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4760__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__53147,G__53148,G__53149,G__53150) : format.call(null,G__53147,G__53148,G__53149,G__53150));

break;
case "macroexpansion":
var G__53159 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__53160 = cause_type;
var G__53161 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__53162 = loc;
var G__53163 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__53159,G__53160,G__53161,G__53162,G__53163) : format.call(null,G__53159,G__53160,G__53161,G__53162,G__53163));

break;
case "compile-syntax-check":
var G__53164 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__53165 = cause_type;
var G__53166 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__53167 = loc;
var G__53168 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__53164,G__53165,G__53166,G__53167,G__53168) : format.call(null,G__53164,G__53165,G__53166,G__53167,G__53168));

break;
case "compilation":
var G__53169 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__53170 = cause_type;
var G__53171 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__53172 = loc;
var G__53173 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__53169,G__53170,G__53171,G__53172,G__53173) : format.call(null,G__53169,G__53170,G__53171,G__53172,G__53173));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__53178 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__53179 = symbol;
var G__53180 = loc;
var G__53181 = (function (){var sb__4760__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__53182_53291 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__53183_53292 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__53184_53293 = true;
var _STAR_print_fn_STAR__temp_val__53185_53294 = (function (x__4761__auto__){
return sb__4760__auto__.append(x__4761__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__53184_53293);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__53185_53294);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__53142_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__53142_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__53183_53292);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__53182_53291);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4760__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__53178,G__53179,G__53180,G__53181) : format.call(null,G__53178,G__53179,G__53180,G__53181));
} else {
var G__53186 = "Execution error%s at %s(%s).\n%s\n";
var G__53187 = cause_type;
var G__53188 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__53189 = loc;
var G__53190 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__53186,G__53187,G__53188,G__53189,G__53190) : format.call(null,G__53186,G__53187,G__53188,G__53189,G__53190));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__53146__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map

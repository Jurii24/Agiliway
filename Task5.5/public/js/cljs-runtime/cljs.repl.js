goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__52918){
var map__52919 = p__52918;
var map__52919__$1 = cljs.core.__destructure_map(map__52919);
var m = map__52919__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52919__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52919__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__52920_53123 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__52921_53124 = null;
var count__52922_53125 = (0);
var i__52923_53126 = (0);
while(true){
if((i__52923_53126 < count__52922_53125)){
var f_53127 = chunk__52921_53124.cljs$core$IIndexed$_nth$arity$2(null,i__52923_53126);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_53127], 0));


var G__53128 = seq__52920_53123;
var G__53129 = chunk__52921_53124;
var G__53130 = count__52922_53125;
var G__53131 = (i__52923_53126 + (1));
seq__52920_53123 = G__53128;
chunk__52921_53124 = G__53129;
count__52922_53125 = G__53130;
i__52923_53126 = G__53131;
continue;
} else {
var temp__5753__auto___53133 = cljs.core.seq(seq__52920_53123);
if(temp__5753__auto___53133){
var seq__52920_53135__$1 = temp__5753__auto___53133;
if(cljs.core.chunked_seq_QMARK_(seq__52920_53135__$1)){
var c__4649__auto___53138 = cljs.core.chunk_first(seq__52920_53135__$1);
var G__53139 = cljs.core.chunk_rest(seq__52920_53135__$1);
var G__53140 = c__4649__auto___53138;
var G__53141 = cljs.core.count(c__4649__auto___53138);
var G__53142 = (0);
seq__52920_53123 = G__53139;
chunk__52921_53124 = G__53140;
count__52922_53125 = G__53141;
i__52923_53126 = G__53142;
continue;
} else {
var f_53143 = cljs.core.first(seq__52920_53135__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_53143], 0));


var G__53144 = cljs.core.next(seq__52920_53135__$1);
var G__53145 = null;
var G__53146 = (0);
var G__53147 = (0);
seq__52920_53123 = G__53144;
chunk__52921_53124 = G__53145;
count__52922_53125 = G__53146;
i__52923_53126 = G__53147;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_53148 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4223__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_53148], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_53148)))?cljs.core.second(arglists_53148):arglists_53148)], 0));
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
var seq__52928_53157 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__52929_53158 = null;
var count__52930_53159 = (0);
var i__52931_53160 = (0);
while(true){
if((i__52931_53160 < count__52930_53159)){
var vec__52943_53162 = chunk__52929_53158.cljs$core$IIndexed$_nth$arity$2(null,i__52931_53160);
var name_53163 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52943_53162,(0),null);
var map__52946_53164 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52943_53162,(1),null);
var map__52946_53165__$1 = cljs.core.__destructure_map(map__52946_53164);
var doc_53166 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52946_53165__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_53167 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52946_53165__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_53163], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_53167], 0));

if(cljs.core.truth_(doc_53166)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_53166], 0));
} else {
}


var G__53168 = seq__52928_53157;
var G__53169 = chunk__52929_53158;
var G__53170 = count__52930_53159;
var G__53171 = (i__52931_53160 + (1));
seq__52928_53157 = G__53168;
chunk__52929_53158 = G__53169;
count__52930_53159 = G__53170;
i__52931_53160 = G__53171;
continue;
} else {
var temp__5753__auto___53172 = cljs.core.seq(seq__52928_53157);
if(temp__5753__auto___53172){
var seq__52928_53173__$1 = temp__5753__auto___53172;
if(cljs.core.chunked_seq_QMARK_(seq__52928_53173__$1)){
var c__4649__auto___53174 = cljs.core.chunk_first(seq__52928_53173__$1);
var G__53175 = cljs.core.chunk_rest(seq__52928_53173__$1);
var G__53176 = c__4649__auto___53174;
var G__53177 = cljs.core.count(c__4649__auto___53174);
var G__53178 = (0);
seq__52928_53157 = G__53175;
chunk__52929_53158 = G__53176;
count__52930_53159 = G__53177;
i__52931_53160 = G__53178;
continue;
} else {
var vec__52947_53179 = cljs.core.first(seq__52928_53173__$1);
var name_53180 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52947_53179,(0),null);
var map__52950_53181 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52947_53179,(1),null);
var map__52950_53182__$1 = cljs.core.__destructure_map(map__52950_53181);
var doc_53183 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52950_53182__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_53184 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52950_53182__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_53180], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_53184], 0));

if(cljs.core.truth_(doc_53183)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_53183], 0));
} else {
}


var G__53185 = cljs.core.next(seq__52928_53173__$1);
var G__53186 = null;
var G__53187 = (0);
var G__53188 = (0);
seq__52928_53157 = G__53185;
chunk__52929_53158 = G__53186;
count__52930_53159 = G__53187;
i__52931_53160 = G__53188;
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

var seq__52953 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__52954 = null;
var count__52955 = (0);
var i__52956 = (0);
while(true){
if((i__52956 < count__52955)){
var role = chunk__52954.cljs$core$IIndexed$_nth$arity$2(null,i__52956);
var temp__5753__auto___53190__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___53190__$1)){
var spec_53191 = temp__5753__auto___53190__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_53191)], 0));
} else {
}


var G__53192 = seq__52953;
var G__53193 = chunk__52954;
var G__53194 = count__52955;
var G__53195 = (i__52956 + (1));
seq__52953 = G__53192;
chunk__52954 = G__53193;
count__52955 = G__53194;
i__52956 = G__53195;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__52953);
if(temp__5753__auto____$1){
var seq__52953__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__52953__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__52953__$1);
var G__53196 = cljs.core.chunk_rest(seq__52953__$1);
var G__53197 = c__4649__auto__;
var G__53198 = cljs.core.count(c__4649__auto__);
var G__53199 = (0);
seq__52953 = G__53196;
chunk__52954 = G__53197;
count__52955 = G__53198;
i__52956 = G__53199;
continue;
} else {
var role = cljs.core.first(seq__52953__$1);
var temp__5753__auto___53200__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___53200__$2)){
var spec_53201 = temp__5753__auto___53200__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_53201)], 0));
} else {
}


var G__53202 = cljs.core.next(seq__52953__$1);
var G__53203 = null;
var G__53204 = (0);
var G__53205 = (0);
seq__52953 = G__53202;
chunk__52954 = G__53203;
count__52955 = G__53204;
i__52956 = G__53205;
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
var G__53210 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__53211 = cljs.core.ex_cause(t);
via = G__53210;
t = G__53211;
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
var map__52986 = datafied_throwable;
var map__52986__$1 = cljs.core.__destructure_map(map__52986);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52986__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52986__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__52986__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__52987 = cljs.core.last(via);
var map__52987__$1 = cljs.core.__destructure_map(map__52987);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52987__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52987__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52987__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__52988 = data;
var map__52988__$1 = cljs.core.__destructure_map(map__52988);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52988__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52988__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52988__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__52989 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__52989__$1 = cljs.core.__destructure_map(map__52989);
var top_data = map__52989__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52989__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__53004 = phase;
var G__53004__$1 = (((G__53004 instanceof cljs.core.Keyword))?G__53004.fqn:null);
switch (G__53004__$1) {
case "read-source":
var map__53015 = data;
var map__53015__$1 = cljs.core.__destructure_map(map__53015);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53015__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53015__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__53030 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__53030__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53030,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__53030);
var G__53030__$2 = (cljs.core.truth_((function (){var fexpr__53031 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__53031.cljs$core$IFn$_invoke$arity$1 ? fexpr__53031.cljs$core$IFn$_invoke$arity$1(source) : fexpr__53031.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__53030__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__53030__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53030__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__53030__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__53032 = top_data;
var G__53032__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53032,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__53032);
var G__53032__$2 = (cljs.core.truth_((function (){var fexpr__53037 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__53037.cljs$core$IFn$_invoke$arity$1 ? fexpr__53037.cljs$core$IFn$_invoke$arity$1(source) : fexpr__53037.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__53032__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__53032__$1);
var G__53032__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53032__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__53032__$2);
var G__53032__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53032__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__53032__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53032__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__53032__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__53045 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53045,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53045,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53045,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53045,(3),null);
var G__53055 = top_data;
var G__53055__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53055,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__53055);
var G__53055__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53055__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__53055__$1);
var G__53055__$3 = (cljs.core.truth_((function (){var and__4221__auto__ = source__$1;
if(cljs.core.truth_(and__4221__auto__)){
return method;
} else {
return and__4221__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53055__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__53055__$2);
var G__53055__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53055__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__53055__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53055__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__53055__$4;
}

break;
case "execution":
var vec__53067 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53067,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53067,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53067,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53067,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__52980_SHARP_){
var or__4223__auto__ = (p1__52980_SHARP_ == null);
if(or__4223__auto__){
return or__4223__auto__;
} else {
var fexpr__53074 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__53074.cljs$core$IFn$_invoke$arity$1 ? fexpr__53074.cljs$core$IFn$_invoke$arity$1(p1__52980_SHARP_) : fexpr__53074.call(null,p1__52980_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4223__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return line;
}
})();
var G__53075 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__53075__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53075,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__53075);
var G__53075__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53075__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__53075__$1);
var G__53075__$3 = (cljs.core.truth_((function (){var or__4223__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53075__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4223__auto__ = fn;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__53075__$2);
var G__53075__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53075__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__53075__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53075__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__53075__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__53004__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__53080){
var map__53081 = p__53080;
var map__53081__$1 = cljs.core.__destructure_map(map__53081);
var triage_data = map__53081__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53081__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53081__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53081__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53081__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53081__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53081__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53081__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53081__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__53083 = phase;
var G__53083__$1 = (((G__53083 instanceof cljs.core.Keyword))?G__53083.fqn:null);
switch (G__53083__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__53085 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__53086 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__53087 = loc;
var G__53088 = (cljs.core.truth_(spec)?(function (){var sb__4760__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__53089_53216 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__53090_53217 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__53091_53218 = true;
var _STAR_print_fn_STAR__temp_val__53092_53219 = (function (x__4761__auto__){
return sb__4760__auto__.append(x__4761__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__53091_53218);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__53092_53219);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__53078_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__53078_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__53090_53217);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__53089_53216);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4760__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__53085,G__53086,G__53087,G__53088) : format.call(null,G__53085,G__53086,G__53087,G__53088));

break;
case "macroexpansion":
var G__53094 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__53095 = cause_type;
var G__53096 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__53097 = loc;
var G__53098 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__53094,G__53095,G__53096,G__53097,G__53098) : format.call(null,G__53094,G__53095,G__53096,G__53097,G__53098));

break;
case "compile-syntax-check":
var G__53099 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__53100 = cause_type;
var G__53101 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__53102 = loc;
var G__53103 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__53099,G__53100,G__53101,G__53102,G__53103) : format.call(null,G__53099,G__53100,G__53101,G__53102,G__53103));

break;
case "compilation":
var G__53104 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__53105 = cause_type;
var G__53106 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__53107 = loc;
var G__53108 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__53104,G__53105,G__53106,G__53107,G__53108) : format.call(null,G__53104,G__53105,G__53106,G__53107,G__53108));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__53109 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__53110 = symbol;
var G__53111 = loc;
var G__53112 = (function (){var sb__4760__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__53114_53224 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__53115_53225 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__53116_53226 = true;
var _STAR_print_fn_STAR__temp_val__53117_53227 = (function (x__4761__auto__){
return sb__4760__auto__.append(x__4761__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__53116_53226);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__53117_53227);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__53079_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__53079_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__53115_53225);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__53114_53224);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4760__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__53109,G__53110,G__53111,G__53112) : format.call(null,G__53109,G__53110,G__53111,G__53112));
} else {
var G__53118 = "Execution error%s at %s(%s).\n%s\n";
var G__53119 = cause_type;
var G__53120 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__53121 = loc;
var G__53122 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__53118,G__53119,G__53120,G__53121,G__53122) : format.call(null,G__53118,G__53119,G__53120,G__53121,G__53122));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__53083__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map

goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__53776__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__53776 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__53777__i = 0, G__53777__a = new Array(arguments.length -  0);
while (G__53777__i < G__53777__a.length) {G__53777__a[G__53777__i] = arguments[G__53777__i + 0]; ++G__53777__i;}
  args = new cljs.core.IndexedSeq(G__53777__a,0,null);
} 
return G__53776__delegate.call(this,args);};
G__53776.cljs$lang$maxFixedArity = 0;
G__53776.cljs$lang$applyTo = (function (arglist__53778){
var args = cljs.core.seq(arglist__53778);
return G__53776__delegate(args);
});
G__53776.cljs$core$IFn$_invoke$arity$variadic = G__53776__delegate;
return G__53776;
})()
);

(o.error = (function() { 
var G__53779__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__53779 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__53781__i = 0, G__53781__a = new Array(arguments.length -  0);
while (G__53781__i < G__53781__a.length) {G__53781__a[G__53781__i] = arguments[G__53781__i + 0]; ++G__53781__i;}
  args = new cljs.core.IndexedSeq(G__53781__a,0,null);
} 
return G__53779__delegate.call(this,args);};
G__53779.cljs$lang$maxFixedArity = 0;
G__53779.cljs$lang$applyTo = (function (arglist__53782){
var args = cljs.core.seq(arglist__53782);
return G__53779__delegate(args);
});
G__53779.cljs$core$IFn$_invoke$arity$variadic = G__53779__delegate;
return G__53779;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map

goog.provide('app.core');
app.core.color = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["red","yellow","green","yellow"], null));
app.core.updater = (function app$core$updater(){
return cljs.core.rest(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app.core.color),cljs.core.first(cljs.core.deref(app.core.color))));
});
app.core.up = (function app$core$up(color){
var col = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(color));
cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(col));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(col,app.core.updater);

return cljs.core.reset_BANG_(col,cljs.core.deref(col));
});
cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.core.color));
if((typeof app !== 'undefined') && (typeof app.core !== 'undefined') && (typeof app.core.timer !== 'undefined')){
} else {
app.core.timer = setInterval((function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app.core.color,app.core.updater);
}),(3000));
}
app.core.app_container = (function app$core$app_container(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),"100",new cljs.core.Keyword(null,"width","width",-384071477),"100"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"cx","cx",1272694324),"50",new cljs.core.Keyword(null,"cy","cy",755331060),"50",new cljs.core.Keyword(null,"r","r",-471384190),"40",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"black",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"3",new cljs.core.Keyword(null,"fill","fill",883462889),cljs.core.first(cljs.core.deref(app.core.color))], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),app.core.color], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),cljs.core.deref(app.core.color)], null)], null);
});
/**
 * Render the toplevel component for this app.
 */
app.core.render = (function app$core$render(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.core.app_container], null),document.getElementById("app"));
});
app.core.main = (function app$core$main(){
console.log("MAIN FN Reloaded");

return app.core.render();
});

//# sourceMappingURL=app.core.js.map

goog.provide('app.core');
app.core.colors = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["red","yellow","green","yellow"], null));
app.core.circle = (function app$core$circle(step_position,color){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-center","div.text-center",921869624),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),((100) + step_position),new cljs.core.Keyword(null,"width","width",-384071477),"100"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"cx","cx",1272694324),"50",new cljs.core.Keyword(null,"cy","cy",755331060),((50) + step_position),new cljs.core.Keyword(null,"r","r",-471384190),"40",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"black",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"3",new cljs.core.Keyword(null,"fill","fill",883462889),color], null)], null)], null)], null)], null);
});
app.core.app_container = (function app$core$app_container(){
var upd = setInterval((function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app.core.colors,(function (_){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.rest(cljs.core.deref(app.core.colors)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(cljs.core.deref(app.core.colors))], null));
}));
}),(2000));
return (function (){
var G__46402 = cljs.core.first(cljs.core.deref(app.core.colors));
switch (G__46402) {
case "red":
return app.core.circle((0),"red");

break;
case "yellow":
return app.core.circle((100),"yellow");

break;
case "green":
return app.core.circle((200),"green");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__46402)].join('')));

}
});
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

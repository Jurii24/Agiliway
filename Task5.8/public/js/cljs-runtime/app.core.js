goog.provide('app.core');
var module$node_modules$react_analogue_clock$build$index=shadow.js.require("module$node_modules$react_analogue_clock$build$index", {});
app.core.app_container = (function app$core$app_container(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$react_analogue_clock$build$index.default,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"showNumbers","showNumbers",117077572),new cljs.core.Keyword(null,"borderColor","borderColor",1372977096),new cljs.core.Keyword(null,"centerColor","centerColor",596433035),new cljs.core.Keyword(null,"baseColor","baseColor",-184242612),new cljs.core.Keyword(null,"borderWidth","borderWidth",1775770350),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"notchColor","notchColor",1032063503),new cljs.core.Keyword(null,"numbersColor","numbersColor",-664516139),new cljs.core.Keyword(null,"handColors","handColors",-783255589)],[true,"#000000","#000000","#ffffff",(5),(300),"#000000","#000000",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hour","hour",-555989214),"#000000",new cljs.core.Keyword(null,"minute","minute",-642875969),"#000000",new cljs.core.Keyword(null,"second","second",-444702010),"#000000"], null)])], null);
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

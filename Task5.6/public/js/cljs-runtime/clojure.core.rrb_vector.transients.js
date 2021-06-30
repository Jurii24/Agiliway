goog.provide('clojure.core.rrb_vector.transients');
clojure.core.rrb_vector.transients.ensure_editable = (function clojure$core$rrb_vector$transients$ensure_editable(edit,node){
if((node.edit === edit)){
return node;
} else {
var new_arr = cljs.core.aclone(node.arr);
if(((33) === new_arr.length)){
(new_arr[(32)] = cljs.core.aclone((new_arr[(32)])));
} else {
}

return (new cljs.core.VectorNode(edit,new_arr));
}
});
clojure.core.rrb_vector.transients.editable_root = (function clojure$core$rrb_vector$transients$editable_root(root){
var new_arr = cljs.core.aclone(root.arr);
if(((33) === new_arr.length)){
(new_arr[(32)] = cljs.core.aclone((new_arr[(32)])));
} else {
}

return (new cljs.core.VectorNode(({}),new_arr));
});
clojure.core.rrb_vector.transients.editable_tail = (function clojure$core$rrb_vector$transients$editable_tail(tail){
var ret = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
cljs.core.array_copy(tail,(0),ret,(0),tail.length);

return ret;
});
clojure.core.rrb_vector.transients.push_tail_BANG_ = (function clojure$core$rrb_vector$transients$push_tail_BANG_(shift,cnt,root_edit,current_node,tail_node){
var ret = clojure.core.rrb_vector.transients.ensure_editable(root_edit,current_node);
if(clojure.core.rrb_vector.nodes.regular_QMARK_(ret)){
var n_49391 = ret;
var shift_49392__$1 = shift;
while(true){
var arr_49393 = n_49391.arr;
var subidx_49394 = (((cnt - (1)) >> shift_49392__$1) & (31));
if((shift_49392__$1 === (5))){
(arr_49393[subidx_49394] = tail_node);
} else {
var child_49395 = (arr_49393[subidx_49394]);
if((child_49395 == null)){
(arr_49393[subidx_49394] = clojure.core.rrb_vector.trees.new_path(tail_node.arr,root_edit,(shift_49392__$1 - (5)),tail_node));
} else {
var editable_child_49396 = clojure.core.rrb_vector.transients.ensure_editable(root_edit,child_49395);
(arr_49393[subidx_49394] = editable_child_49396);

var G__49397 = editable_child_49396;
var G__49398 = (shift_49392__$1 - (5));
n_49391 = G__49397;
shift_49392__$1 = G__49398;
continue;
}
}
break;
}

return ret;
} else {
var arr = ret.arr;
var rngs = clojure.core.rrb_vector.nodes.node_ranges(ret);
var li = ((rngs[(32)]) - (1));
var cret = (((shift === (5)))?null:(function (){var child = clojure.core.rrb_vector.transients.ensure_editable(root_edit,(arr[li]));
var ccnt = ((((li > (0)))?((rngs[li]) - (rngs[(li - (1))])):(rngs[(0)])) + (32));
if((!(clojure.core.rrb_vector.nodes.overflow_QMARK_(child,(shift - (5)),ccnt)))){
var G__49373 = (shift - (5));
var G__49374 = ccnt;
var G__49375 = root_edit;
var G__49376 = child;
var G__49377 = tail_node;
return (clojure.core.rrb_vector.transients.push_tail_BANG_.cljs$core$IFn$_invoke$arity$5 ? clojure.core.rrb_vector.transients.push_tail_BANG_.cljs$core$IFn$_invoke$arity$5(G__49373,G__49374,G__49375,G__49376,G__49377) : clojure.core.rrb_vector.transients.push_tail_BANG_.call(null,G__49373,G__49374,G__49375,G__49376,G__49377));
} else {
return null;
}
})());
if(cljs.core.truth_(cret)){
(arr[li] = cret);

(rngs[li] = ((rngs[li]) + (32)));

return ret;
} else {
if((li >= (31))){
var msg_49405 = ["Assigning index ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((li + (1)))," of vector"," object array to become a node, when that"," index should only be used for storing"," range arrays."].join('');
var data_49406 = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"shift","shift",997140064),shift,new cljs.core.Keyword(null,"cnd","cnd",-521882032),cnt,new cljs.core.Keyword(null,"current-node","current-node",-814308842),current_node,new cljs.core.Keyword(null,"tail-node","tail-node",-1373693221),tail_node,new cljs.core.Keyword(null,"rngs","rngs",-8039697),rngs,new cljs.core.Keyword(null,"li","li",723558921),li,new cljs.core.Keyword(null,"cret","cret",2090504467),cret], null);
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(msg_49405,data_49406);
} else {
}

(arr[(li + (1))] = clojure.core.rrb_vector.trees.new_path(tail_node.arr,root_edit,(shift - (5)),tail_node));

(rngs[(li + (1))] = ((rngs[li]) + (32)));

(rngs[(32)] = ((rngs[(32)]) + (1)));

return ret;
}
}
});
clojure.core.rrb_vector.transients.pop_tail_BANG_ = (function clojure$core$rrb_vector$transients$pop_tail_BANG_(shift,cnt,root_edit,current_node){
var ret = clojure.core.rrb_vector.transients.ensure_editable(root_edit,current_node);
if(clojure.core.rrb_vector.nodes.regular_QMARK_(ret)){
var subidx = (((cnt - (2)) >> shift) & (31));
if((shift > (5))){
var child = (function (){var G__49378 = (shift - (5));
var G__49379 = cnt;
var G__49380 = root_edit;
var G__49381 = (ret.arr[subidx]);
return (clojure.core.rrb_vector.transients.pop_tail_BANG_.cljs$core$IFn$_invoke$arity$4 ? clojure.core.rrb_vector.transients.pop_tail_BANG_.cljs$core$IFn$_invoke$arity$4(G__49378,G__49379,G__49380,G__49381) : clojure.core.rrb_vector.transients.pop_tail_BANG_.call(null,G__49378,G__49379,G__49380,G__49381));
})();
if((((child == null)) && ((subidx === (0))))){
return null;
} else {
var arr = ret.arr;
(arr[subidx] = child);

return ret;
}
} else {
if((subidx === (0))){
return null;
} else {
var arr = ret.arr;
(arr[subidx] = null);

return ret;

}
}
} else {
var rngs = clojure.core.rrb_vector.nodes.node_ranges(ret);
var subidx = ((rngs[(32)]) - (1));
if((shift > (5))){
var child = (ret.arr[subidx]);
var child_cnt = (((subidx === (0)))?(rngs[(0)]):((rngs[subidx]) - (rngs[(subidx - (1))])));
var new_child = (function (){var G__49382 = (shift - (5));
var G__49383 = child_cnt;
var G__49384 = root_edit;
var G__49385 = child;
return (clojure.core.rrb_vector.transients.pop_tail_BANG_.cljs$core$IFn$_invoke$arity$4 ? clojure.core.rrb_vector.transients.pop_tail_BANG_.cljs$core$IFn$_invoke$arity$4(G__49382,G__49383,G__49384,G__49385) : clojure.core.rrb_vector.transients.pop_tail_BANG_.call(null,G__49382,G__49383,G__49384,G__49385));
})();
if((((new_child == null)) && ((subidx === (0))))){
return null;
} else {
if(clojure.core.rrb_vector.nodes.regular_QMARK_(child)){
var arr = ret.arr;
(rngs[subidx] = ((rngs[subidx]) - (32)));

(arr[subidx] = new_child);

if((new_child == null)){
(rngs[(32)] = ((rngs[(32)]) - (1)));
} else {
}

return ret;
} else {
var rng = clojure.core.rrb_vector.nodes.last_range(child);
var diff = (rng - (cljs.core.truth_(new_child)?clojure.core.rrb_vector.nodes.last_range(new_child):(0)));
var arr = ret.arr;
(rngs[subidx] = ((rngs[subidx]) - diff));

(arr[subidx] = new_child);

if((new_child == null)){
(rngs[(32)] = ((rngs[(32)]) - (1)));
} else {
}

return ret;

}
}
} else {
if((subidx === (0))){
return null;
} else {
var arr = ret.arr;
var child = (arr[subidx]);
(arr[subidx] = null);

(rngs[subidx] = (0));

(rngs[(32)] = ((rngs[(32)]) - (1)));

return ret;

}
}
}
});
clojure.core.rrb_vector.transients.do_assoc_BANG_ = (function clojure$core$rrb_vector$transients$do_assoc_BANG_(shift,root_edit,current_node,i,val){
var ret = clojure.core.rrb_vector.transients.ensure_editable(root_edit,current_node);
if(clojure.core.rrb_vector.nodes.regular_QMARK_(ret)){
var shift_49431__$1 = shift;
var node_49432 = ret;
while(true){
if((shift_49431__$1 === (0))){
var arr_49433 = node_49432.arr;
(arr_49433[(i & (31))] = val);
} else {
var arr_49434 = node_49432.arr;
var subidx_49435 = ((i >> shift_49431__$1) & (31));
var child_49436 = clojure.core.rrb_vector.transients.ensure_editable(root_edit,(arr_49434[subidx_49435]));
(arr_49434[subidx_49435] = child_49436);

var G__49439 = (shift_49431__$1 - (5));
var G__49440 = child_49436;
shift_49431__$1 = G__49439;
node_49432 = G__49440;
continue;
}
break;
}
} else {
var arr_49441 = ret.arr;
var rngs_49442 = clojure.core.rrb_vector.nodes.node_ranges(ret);
var subidx_49443 = ((i >> shift) & (31));
var subidx_49444__$1 = (function (){var subidx_49444__$1 = subidx_49443;
while(true){
if((i < ((rngs_49442[subidx_49444__$1]) | (0)))){
return subidx_49444__$1;
} else {
var G__49446 = (subidx_49444__$1 + (1));
subidx_49444__$1 = G__49446;
continue;
}
break;
}
})();
var i_49445__$1 = (((subidx_49444__$1 === (0)))?i:(i - (rngs_49442[(subidx_49444__$1 - (1))])));
(arr_49441[subidx_49444__$1] = (function (){var G__49386 = (shift - (5));
var G__49387 = root_edit;
var G__49388 = (arr_49441[subidx_49444__$1]);
var G__49389 = i_49445__$1;
var G__49390 = val;
return (clojure.core.rrb_vector.transients.do_assoc_BANG_.cljs$core$IFn$_invoke$arity$5 ? clojure.core.rrb_vector.transients.do_assoc_BANG_.cljs$core$IFn$_invoke$arity$5(G__49386,G__49387,G__49388,G__49389,G__49390) : clojure.core.rrb_vector.transients.do_assoc_BANG_.call(null,G__49386,G__49387,G__49388,G__49389,G__49390));
})());
}

return ret;
});

//# sourceMappingURL=clojure.core.rrb_vector.transients.js.map

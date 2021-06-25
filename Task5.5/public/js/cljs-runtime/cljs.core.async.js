goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__48323 = arguments.length;
switch (G__48323) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async48324 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48324 = (function (f,blockable,meta48325){
this.f = f;
this.blockable = blockable;
this.meta48325 = meta48325;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48324.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48326,meta48325__$1){
var self__ = this;
var _48326__$1 = this;
return (new cljs.core.async.t_cljs$core$async48324(self__.f,self__.blockable,meta48325__$1));
}));

(cljs.core.async.t_cljs$core$async48324.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48326){
var self__ = this;
var _48326__$1 = this;
return self__.meta48325;
}));

(cljs.core.async.t_cljs$core$async48324.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48324.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async48324.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async48324.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async48324.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta48325","meta48325",1692507505,null)], null);
}));

(cljs.core.async.t_cljs$core$async48324.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48324.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48324");

(cljs.core.async.t_cljs$core$async48324.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async48324");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48324.
 */
cljs.core.async.__GT_t_cljs$core$async48324 = (function cljs$core$async$__GT_t_cljs$core$async48324(f__$1,blockable__$1,meta48325){
return (new cljs.core.async.t_cljs$core$async48324(f__$1,blockable__$1,meta48325));
});

}

return (new cljs.core.async.t_cljs$core$async48324(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__48357 = arguments.length;
switch (G__48357) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__48359 = arguments.length;
switch (G__48359) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__48373 = arguments.length;
switch (G__48373) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_50199 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_50199) : fn1.call(null,val_50199));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_50199) : fn1.call(null,val_50199));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__48381 = arguments.length;
switch (G__48381) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4706__auto___50201 = n;
var x_50202 = (0);
while(true){
if((x_50202 < n__4706__auto___50201)){
(a[x_50202] = x_50202);

var G__50203 = (x_50202 + (1));
x_50202 = G__50203;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async48388 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48388 = (function (flag,meta48389){
this.flag = flag;
this.meta48389 = meta48389;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48388.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48390,meta48389__$1){
var self__ = this;
var _48390__$1 = this;
return (new cljs.core.async.t_cljs$core$async48388(self__.flag,meta48389__$1));
}));

(cljs.core.async.t_cljs$core$async48388.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48390){
var self__ = this;
var _48390__$1 = this;
return self__.meta48389;
}));

(cljs.core.async.t_cljs$core$async48388.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48388.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async48388.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async48388.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async48388.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta48389","meta48389",1923607274,null)], null);
}));

(cljs.core.async.t_cljs$core$async48388.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48388.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48388");

(cljs.core.async.t_cljs$core$async48388.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async48388");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48388.
 */
cljs.core.async.__GT_t_cljs$core$async48388 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async48388(flag__$1,meta48389){
return (new cljs.core.async.t_cljs$core$async48388(flag__$1,meta48389));
});

}

return (new cljs.core.async.t_cljs$core$async48388(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async48391 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48391 = (function (flag,cb,meta48392){
this.flag = flag;
this.cb = cb;
this.meta48392 = meta48392;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48391.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48393,meta48392__$1){
var self__ = this;
var _48393__$1 = this;
return (new cljs.core.async.t_cljs$core$async48391(self__.flag,self__.cb,meta48392__$1));
}));

(cljs.core.async.t_cljs$core$async48391.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48393){
var self__ = this;
var _48393__$1 = this;
return self__.meta48392;
}));

(cljs.core.async.t_cljs$core$async48391.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48391.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async48391.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async48391.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async48391.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta48392","meta48392",-1525898599,null)], null);
}));

(cljs.core.async.t_cljs$core$async48391.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48391.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48391");

(cljs.core.async.t_cljs$core$async48391.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async48391");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48391.
 */
cljs.core.async.__GT_t_cljs$core$async48391 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async48391(flag__$1,cb__$1,meta48392){
return (new cljs.core.async.t_cljs$core$async48391(flag__$1,cb__$1,meta48392));
});

}

return (new cljs.core.async.t_cljs$core$async48391(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__48394_SHARP_){
var G__48396 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__48394_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__48396) : fret.call(null,G__48396));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__48395_SHARP_){
var G__48397 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__48395_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__48397) : fret.call(null,G__48397));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4223__auto__ = wport;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return port;
}
})()], null));
} else {
var G__50207 = (i + (1));
i = G__50207;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4223__auto__ = ret;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__4221__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4221__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4221__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___50208 = arguments.length;
var i__4830__auto___50209 = (0);
while(true){
if((i__4830__auto___50209 < len__4829__auto___50208)){
args__4835__auto__.push((arguments[i__4830__auto___50209]));

var G__50210 = (i__4830__auto___50209 + (1));
i__4830__auto___50209 = G__50210;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__48403){
var map__48404 = p__48403;
var map__48404__$1 = cljs.core.__destructure_map(map__48404);
var opts = map__48404__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq48401){
var G__48402 = cljs.core.first(seq48401);
var seq48401__$1 = cljs.core.next(seq48401);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48402,seq48401__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__48412 = arguments.length;
switch (G__48412) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__48204__auto___50215 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48205__auto__ = (function (){var switch__48100__auto__ = (function (state_48448){
var state_val_48451 = (state_48448[(1)]);
if((state_val_48451 === (7))){
var inst_48441 = (state_48448[(2)]);
var state_48448__$1 = state_48448;
var statearr_48470_50216 = state_48448__$1;
(statearr_48470_50216[(2)] = inst_48441);

(statearr_48470_50216[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48451 === (1))){
var state_48448__$1 = state_48448;
var statearr_48471_50217 = state_48448__$1;
(statearr_48471_50217[(2)] = null);

(statearr_48471_50217[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48451 === (4))){
var inst_48424 = (state_48448[(7)]);
var inst_48424__$1 = (state_48448[(2)]);
var inst_48425 = (inst_48424__$1 == null);
var state_48448__$1 = (function (){var statearr_48472 = state_48448;
(statearr_48472[(7)] = inst_48424__$1);

return statearr_48472;
})();
if(cljs.core.truth_(inst_48425)){
var statearr_48473_50220 = state_48448__$1;
(statearr_48473_50220[(1)] = (5));

} else {
var statearr_48478_50221 = state_48448__$1;
(statearr_48478_50221[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48451 === (13))){
var state_48448__$1 = state_48448;
var statearr_48479_50223 = state_48448__$1;
(statearr_48479_50223[(2)] = null);

(statearr_48479_50223[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48451 === (6))){
var inst_48424 = (state_48448[(7)]);
var state_48448__$1 = state_48448;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48448__$1,(11),to,inst_48424);
} else {
if((state_val_48451 === (3))){
var inst_48443 = (state_48448[(2)]);
var state_48448__$1 = state_48448;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48448__$1,inst_48443);
} else {
if((state_val_48451 === (12))){
var state_48448__$1 = state_48448;
var statearr_48480_50225 = state_48448__$1;
(statearr_48480_50225[(2)] = null);

(statearr_48480_50225[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48451 === (2))){
var state_48448__$1 = state_48448;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48448__$1,(4),from);
} else {
if((state_val_48451 === (11))){
var inst_48434 = (state_48448[(2)]);
var state_48448__$1 = state_48448;
if(cljs.core.truth_(inst_48434)){
var statearr_48481_50227 = state_48448__$1;
(statearr_48481_50227[(1)] = (12));

} else {
var statearr_48482_50228 = state_48448__$1;
(statearr_48482_50228[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48451 === (9))){
var state_48448__$1 = state_48448;
var statearr_48483_50229 = state_48448__$1;
(statearr_48483_50229[(2)] = null);

(statearr_48483_50229[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48451 === (5))){
var state_48448__$1 = state_48448;
if(cljs.core.truth_(close_QMARK_)){
var statearr_48484_50230 = state_48448__$1;
(statearr_48484_50230[(1)] = (8));

} else {
var statearr_48485_50231 = state_48448__$1;
(statearr_48485_50231[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48451 === (14))){
var inst_48439 = (state_48448[(2)]);
var state_48448__$1 = state_48448;
var statearr_48487_50232 = state_48448__$1;
(statearr_48487_50232[(2)] = inst_48439);

(statearr_48487_50232[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48451 === (10))){
var inst_48431 = (state_48448[(2)]);
var state_48448__$1 = state_48448;
var statearr_48488_50233 = state_48448__$1;
(statearr_48488_50233[(2)] = inst_48431);

(statearr_48488_50233[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48451 === (8))){
var inst_48428 = cljs.core.async.close_BANG_(to);
var state_48448__$1 = state_48448;
var statearr_48489_50234 = state_48448__$1;
(statearr_48489_50234[(2)] = inst_48428);

(statearr_48489_50234[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__48101__auto__ = null;
var cljs$core$async$state_machine__48101__auto____0 = (function (){
var statearr_48491 = [null,null,null,null,null,null,null,null];
(statearr_48491[(0)] = cljs$core$async$state_machine__48101__auto__);

(statearr_48491[(1)] = (1));

return statearr_48491;
});
var cljs$core$async$state_machine__48101__auto____1 = (function (state_48448){
while(true){
var ret_value__48102__auto__ = (function (){try{while(true){
var result__48103__auto__ = switch__48100__auto__(state_48448);
if(cljs.core.keyword_identical_QMARK_(result__48103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48103__auto__;
}
break;
}
}catch (e48492){var ex__48104__auto__ = e48492;
var statearr_48493_50236 = state_48448;
(statearr_48493_50236[(2)] = ex__48104__auto__);


if(cljs.core.seq((state_48448[(4)]))){
var statearr_48494_50238 = state_48448;
(statearr_48494_50238[(1)] = cljs.core.first((state_48448[(4)])));

} else {
throw ex__48104__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50239 = state_48448;
state_48448 = G__50239;
continue;
} else {
return ret_value__48102__auto__;
}
break;
}
});
cljs$core$async$state_machine__48101__auto__ = function(state_48448){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48101__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48101__auto____1.call(this,state_48448);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48101__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48101__auto____0;
cljs$core$async$state_machine__48101__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48101__auto____1;
return cljs$core$async$state_machine__48101__auto__;
})()
})();
var state__48206__auto__ = (function (){var statearr_48495 = f__48205__auto__();
(statearr_48495[(6)] = c__48204__auto___50215);

return statearr_48495;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48206__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__48502){
var vec__48503 = p__48502;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48503,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48503,(1),null);
var job = vec__48503;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__48204__auto___50240 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48205__auto__ = (function (){var switch__48100__auto__ = (function (state_48510){
var state_val_48511 = (state_48510[(1)]);
if((state_val_48511 === (1))){
var state_48510__$1 = state_48510;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48510__$1,(2),res,v);
} else {
if((state_val_48511 === (2))){
var inst_48507 = (state_48510[(2)]);
var inst_48508 = cljs.core.async.close_BANG_(res);
var state_48510__$1 = (function (){var statearr_48512 = state_48510;
(statearr_48512[(7)] = inst_48507);

return statearr_48512;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_48510__$1,inst_48508);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__48101__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__48101__auto____0 = (function (){
var statearr_48513 = [null,null,null,null,null,null,null,null];
(statearr_48513[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__48101__auto__);

(statearr_48513[(1)] = (1));

return statearr_48513;
});
var cljs$core$async$pipeline_STAR__$_state_machine__48101__auto____1 = (function (state_48510){
while(true){
var ret_value__48102__auto__ = (function (){try{while(true){
var result__48103__auto__ = switch__48100__auto__(state_48510);
if(cljs.core.keyword_identical_QMARK_(result__48103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48103__auto__;
}
break;
}
}catch (e48514){var ex__48104__auto__ = e48514;
var statearr_48515_50244 = state_48510;
(statearr_48515_50244[(2)] = ex__48104__auto__);


if(cljs.core.seq((state_48510[(4)]))){
var statearr_48516_50246 = state_48510;
(statearr_48516_50246[(1)] = cljs.core.first((state_48510[(4)])));

} else {
throw ex__48104__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50247 = state_48510;
state_48510 = G__50247;
continue;
} else {
return ret_value__48102__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__48101__auto__ = function(state_48510){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__48101__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__48101__auto____1.call(this,state_48510);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__48101__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__48101__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__48101__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__48101__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__48101__auto__;
})()
})();
var state__48206__auto__ = (function (){var statearr_48517 = f__48205__auto__();
(statearr_48517[(6)] = c__48204__auto___50240);

return statearr_48517;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48206__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__48522){
var vec__48535 = p__48522;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48535,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48535,(1),null);
var job = vec__48535;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4706__auto___50249 = n;
var __50250 = (0);
while(true){
if((__50250 < n__4706__auto___50249)){
var G__48538_50251 = type;
var G__48538_50252__$1 = (((G__48538_50251 instanceof cljs.core.Keyword))?G__48538_50251.fqn:null);
switch (G__48538_50252__$1) {
case "compute":
var c__48204__auto___50254 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__50250,c__48204__auto___50254,G__48538_50251,G__48538_50252__$1,n__4706__auto___50249,jobs,results,process,async){
return (function (){
var f__48205__auto__ = (function (){var switch__48100__auto__ = ((function (__50250,c__48204__auto___50254,G__48538_50251,G__48538_50252__$1,n__4706__auto___50249,jobs,results,process,async){
return (function (state_48551){
var state_val_48552 = (state_48551[(1)]);
if((state_val_48552 === (1))){
var state_48551__$1 = state_48551;
var statearr_48561_50255 = state_48551__$1;
(statearr_48561_50255[(2)] = null);

(statearr_48561_50255[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48552 === (2))){
var state_48551__$1 = state_48551;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48551__$1,(4),jobs);
} else {
if((state_val_48552 === (3))){
var inst_48549 = (state_48551[(2)]);
var state_48551__$1 = state_48551;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48551__$1,inst_48549);
} else {
if((state_val_48552 === (4))){
var inst_48541 = (state_48551[(2)]);
var inst_48542 = process(inst_48541);
var state_48551__$1 = state_48551;
if(cljs.core.truth_(inst_48542)){
var statearr_48562_50258 = state_48551__$1;
(statearr_48562_50258[(1)] = (5));

} else {
var statearr_48563_50259 = state_48551__$1;
(statearr_48563_50259[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48552 === (5))){
var state_48551__$1 = state_48551;
var statearr_48564_50260 = state_48551__$1;
(statearr_48564_50260[(2)] = null);

(statearr_48564_50260[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48552 === (6))){
var state_48551__$1 = state_48551;
var statearr_48565_50261 = state_48551__$1;
(statearr_48565_50261[(2)] = null);

(statearr_48565_50261[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48552 === (7))){
var inst_48547 = (state_48551[(2)]);
var state_48551__$1 = state_48551;
var statearr_48566_50262 = state_48551__$1;
(statearr_48566_50262[(2)] = inst_48547);

(statearr_48566_50262[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__50250,c__48204__auto___50254,G__48538_50251,G__48538_50252__$1,n__4706__auto___50249,jobs,results,process,async))
;
return ((function (__50250,switch__48100__auto__,c__48204__auto___50254,G__48538_50251,G__48538_50252__$1,n__4706__auto___50249,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__48101__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__48101__auto____0 = (function (){
var statearr_48569 = [null,null,null,null,null,null,null];
(statearr_48569[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__48101__auto__);

(statearr_48569[(1)] = (1));

return statearr_48569;
});
var cljs$core$async$pipeline_STAR__$_state_machine__48101__auto____1 = (function (state_48551){
while(true){
var ret_value__48102__auto__ = (function (){try{while(true){
var result__48103__auto__ = switch__48100__auto__(state_48551);
if(cljs.core.keyword_identical_QMARK_(result__48103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48103__auto__;
}
break;
}
}catch (e48570){var ex__48104__auto__ = e48570;
var statearr_48571_50263 = state_48551;
(statearr_48571_50263[(2)] = ex__48104__auto__);


if(cljs.core.seq((state_48551[(4)]))){
var statearr_48572_50264 = state_48551;
(statearr_48572_50264[(1)] = cljs.core.first((state_48551[(4)])));

} else {
throw ex__48104__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50265 = state_48551;
state_48551 = G__50265;
continue;
} else {
return ret_value__48102__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__48101__auto__ = function(state_48551){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__48101__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__48101__auto____1.call(this,state_48551);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__48101__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__48101__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__48101__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__48101__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__48101__auto__;
})()
;})(__50250,switch__48100__auto__,c__48204__auto___50254,G__48538_50251,G__48538_50252__$1,n__4706__auto___50249,jobs,results,process,async))
})();
var state__48206__auto__ = (function (){var statearr_48573 = f__48205__auto__();
(statearr_48573[(6)] = c__48204__auto___50254);

return statearr_48573;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48206__auto__);
});})(__50250,c__48204__auto___50254,G__48538_50251,G__48538_50252__$1,n__4706__auto___50249,jobs,results,process,async))
);


break;
case "async":
var c__48204__auto___50266 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__50250,c__48204__auto___50266,G__48538_50251,G__48538_50252__$1,n__4706__auto___50249,jobs,results,process,async){
return (function (){
var f__48205__auto__ = (function (){var switch__48100__auto__ = ((function (__50250,c__48204__auto___50266,G__48538_50251,G__48538_50252__$1,n__4706__auto___50249,jobs,results,process,async){
return (function (state_48586){
var state_val_48587 = (state_48586[(1)]);
if((state_val_48587 === (1))){
var state_48586__$1 = state_48586;
var statearr_48588_50268 = state_48586__$1;
(statearr_48588_50268[(2)] = null);

(statearr_48588_50268[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48587 === (2))){
var state_48586__$1 = state_48586;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48586__$1,(4),jobs);
} else {
if((state_val_48587 === (3))){
var inst_48584 = (state_48586[(2)]);
var state_48586__$1 = state_48586;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48586__$1,inst_48584);
} else {
if((state_val_48587 === (4))){
var inst_48576 = (state_48586[(2)]);
var inst_48577 = async(inst_48576);
var state_48586__$1 = state_48586;
if(cljs.core.truth_(inst_48577)){
var statearr_48589_50269 = state_48586__$1;
(statearr_48589_50269[(1)] = (5));

} else {
var statearr_48590_50270 = state_48586__$1;
(statearr_48590_50270[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48587 === (5))){
var state_48586__$1 = state_48586;
var statearr_48591_50271 = state_48586__$1;
(statearr_48591_50271[(2)] = null);

(statearr_48591_50271[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48587 === (6))){
var state_48586__$1 = state_48586;
var statearr_48592_50274 = state_48586__$1;
(statearr_48592_50274[(2)] = null);

(statearr_48592_50274[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48587 === (7))){
var inst_48582 = (state_48586[(2)]);
var state_48586__$1 = state_48586;
var statearr_48593_50275 = state_48586__$1;
(statearr_48593_50275[(2)] = inst_48582);

(statearr_48593_50275[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__50250,c__48204__auto___50266,G__48538_50251,G__48538_50252__$1,n__4706__auto___50249,jobs,results,process,async))
;
return ((function (__50250,switch__48100__auto__,c__48204__auto___50266,G__48538_50251,G__48538_50252__$1,n__4706__auto___50249,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__48101__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__48101__auto____0 = (function (){
var statearr_48594 = [null,null,null,null,null,null,null];
(statearr_48594[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__48101__auto__);

(statearr_48594[(1)] = (1));

return statearr_48594;
});
var cljs$core$async$pipeline_STAR__$_state_machine__48101__auto____1 = (function (state_48586){
while(true){
var ret_value__48102__auto__ = (function (){try{while(true){
var result__48103__auto__ = switch__48100__auto__(state_48586);
if(cljs.core.keyword_identical_QMARK_(result__48103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48103__auto__;
}
break;
}
}catch (e48595){var ex__48104__auto__ = e48595;
var statearr_48596_50276 = state_48586;
(statearr_48596_50276[(2)] = ex__48104__auto__);


if(cljs.core.seq((state_48586[(4)]))){
var statearr_48597_50277 = state_48586;
(statearr_48597_50277[(1)] = cljs.core.first((state_48586[(4)])));

} else {
throw ex__48104__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50279 = state_48586;
state_48586 = G__50279;
continue;
} else {
return ret_value__48102__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__48101__auto__ = function(state_48586){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__48101__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__48101__auto____1.call(this,state_48586);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__48101__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__48101__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__48101__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__48101__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__48101__auto__;
})()
;})(__50250,switch__48100__auto__,c__48204__auto___50266,G__48538_50251,G__48538_50252__$1,n__4706__auto___50249,jobs,results,process,async))
})();
var state__48206__auto__ = (function (){var statearr_48599 = f__48205__auto__();
(statearr_48599[(6)] = c__48204__auto___50266);

return statearr_48599;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48206__auto__);
});})(__50250,c__48204__auto___50266,G__48538_50251,G__48538_50252__$1,n__4706__auto___50249,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48538_50252__$1)].join('')));

}

var G__50280 = (__50250 + (1));
__50250 = G__50280;
continue;
} else {
}
break;
}

var c__48204__auto___50281 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48205__auto__ = (function (){var switch__48100__auto__ = (function (state_48621){
var state_val_48622 = (state_48621[(1)]);
if((state_val_48622 === (7))){
var inst_48617 = (state_48621[(2)]);
var state_48621__$1 = state_48621;
var statearr_48623_50282 = state_48621__$1;
(statearr_48623_50282[(2)] = inst_48617);

(statearr_48623_50282[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48622 === (1))){
var state_48621__$1 = state_48621;
var statearr_48624_50283 = state_48621__$1;
(statearr_48624_50283[(2)] = null);

(statearr_48624_50283[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48622 === (4))){
var inst_48602 = (state_48621[(7)]);
var inst_48602__$1 = (state_48621[(2)]);
var inst_48603 = (inst_48602__$1 == null);
var state_48621__$1 = (function (){var statearr_48625 = state_48621;
(statearr_48625[(7)] = inst_48602__$1);

return statearr_48625;
})();
if(cljs.core.truth_(inst_48603)){
var statearr_48626_50284 = state_48621__$1;
(statearr_48626_50284[(1)] = (5));

} else {
var statearr_48627_50285 = state_48621__$1;
(statearr_48627_50285[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48622 === (6))){
var inst_48607 = (state_48621[(8)]);
var inst_48602 = (state_48621[(7)]);
var inst_48607__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_48608 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_48609 = [inst_48602,inst_48607__$1];
var inst_48610 = (new cljs.core.PersistentVector(null,2,(5),inst_48608,inst_48609,null));
var state_48621__$1 = (function (){var statearr_48628 = state_48621;
(statearr_48628[(8)] = inst_48607__$1);

return statearr_48628;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48621__$1,(8),jobs,inst_48610);
} else {
if((state_val_48622 === (3))){
var inst_48619 = (state_48621[(2)]);
var state_48621__$1 = state_48621;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48621__$1,inst_48619);
} else {
if((state_val_48622 === (2))){
var state_48621__$1 = state_48621;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48621__$1,(4),from);
} else {
if((state_val_48622 === (9))){
var inst_48614 = (state_48621[(2)]);
var state_48621__$1 = (function (){var statearr_48634 = state_48621;
(statearr_48634[(9)] = inst_48614);

return statearr_48634;
})();
var statearr_48635_50286 = state_48621__$1;
(statearr_48635_50286[(2)] = null);

(statearr_48635_50286[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48622 === (5))){
var inst_48605 = cljs.core.async.close_BANG_(jobs);
var state_48621__$1 = state_48621;
var statearr_48640_50287 = state_48621__$1;
(statearr_48640_50287[(2)] = inst_48605);

(statearr_48640_50287[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48622 === (8))){
var inst_48607 = (state_48621[(8)]);
var inst_48612 = (state_48621[(2)]);
var state_48621__$1 = (function (){var statearr_48645 = state_48621;
(statearr_48645[(10)] = inst_48612);

return statearr_48645;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48621__$1,(9),results,inst_48607);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__48101__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__48101__auto____0 = (function (){
var statearr_48666 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_48666[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__48101__auto__);

(statearr_48666[(1)] = (1));

return statearr_48666;
});
var cljs$core$async$pipeline_STAR__$_state_machine__48101__auto____1 = (function (state_48621){
while(true){
var ret_value__48102__auto__ = (function (){try{while(true){
var result__48103__auto__ = switch__48100__auto__(state_48621);
if(cljs.core.keyword_identical_QMARK_(result__48103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48103__auto__;
}
break;
}
}catch (e48667){var ex__48104__auto__ = e48667;
var statearr_48668_50288 = state_48621;
(statearr_48668_50288[(2)] = ex__48104__auto__);


if(cljs.core.seq((state_48621[(4)]))){
var statearr_48669_50289 = state_48621;
(statearr_48669_50289[(1)] = cljs.core.first((state_48621[(4)])));

} else {
throw ex__48104__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50290 = state_48621;
state_48621 = G__50290;
continue;
} else {
return ret_value__48102__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__48101__auto__ = function(state_48621){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__48101__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__48101__auto____1.call(this,state_48621);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__48101__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__48101__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__48101__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__48101__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__48101__auto__;
})()
})();
var state__48206__auto__ = (function (){var statearr_48675 = f__48205__auto__();
(statearr_48675[(6)] = c__48204__auto___50281);

return statearr_48675;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48206__auto__);
}));


var c__48204__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48205__auto__ = (function (){var switch__48100__auto__ = (function (state_48714){
var state_val_48715 = (state_48714[(1)]);
if((state_val_48715 === (7))){
var inst_48710 = (state_48714[(2)]);
var state_48714__$1 = state_48714;
var statearr_48716_50295 = state_48714__$1;
(statearr_48716_50295[(2)] = inst_48710);

(statearr_48716_50295[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48715 === (20))){
var state_48714__$1 = state_48714;
var statearr_48717_50296 = state_48714__$1;
(statearr_48717_50296[(2)] = null);

(statearr_48717_50296[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48715 === (1))){
var state_48714__$1 = state_48714;
var statearr_48718_50297 = state_48714__$1;
(statearr_48718_50297[(2)] = null);

(statearr_48718_50297[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48715 === (4))){
var inst_48678 = (state_48714[(7)]);
var inst_48678__$1 = (state_48714[(2)]);
var inst_48679 = (inst_48678__$1 == null);
var state_48714__$1 = (function (){var statearr_48719 = state_48714;
(statearr_48719[(7)] = inst_48678__$1);

return statearr_48719;
})();
if(cljs.core.truth_(inst_48679)){
var statearr_48720_50298 = state_48714__$1;
(statearr_48720_50298[(1)] = (5));

} else {
var statearr_48721_50299 = state_48714__$1;
(statearr_48721_50299[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48715 === (15))){
var inst_48692 = (state_48714[(8)]);
var state_48714__$1 = state_48714;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48714__$1,(18),to,inst_48692);
} else {
if((state_val_48715 === (21))){
var inst_48705 = (state_48714[(2)]);
var state_48714__$1 = state_48714;
var statearr_48722_50300 = state_48714__$1;
(statearr_48722_50300[(2)] = inst_48705);

(statearr_48722_50300[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48715 === (13))){
var inst_48707 = (state_48714[(2)]);
var state_48714__$1 = (function (){var statearr_48723 = state_48714;
(statearr_48723[(9)] = inst_48707);

return statearr_48723;
})();
var statearr_48724_50301 = state_48714__$1;
(statearr_48724_50301[(2)] = null);

(statearr_48724_50301[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48715 === (6))){
var inst_48678 = (state_48714[(7)]);
var state_48714__$1 = state_48714;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48714__$1,(11),inst_48678);
} else {
if((state_val_48715 === (17))){
var inst_48700 = (state_48714[(2)]);
var state_48714__$1 = state_48714;
if(cljs.core.truth_(inst_48700)){
var statearr_48725_50302 = state_48714__$1;
(statearr_48725_50302[(1)] = (19));

} else {
var statearr_48726_50303 = state_48714__$1;
(statearr_48726_50303[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48715 === (3))){
var inst_48712 = (state_48714[(2)]);
var state_48714__$1 = state_48714;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48714__$1,inst_48712);
} else {
if((state_val_48715 === (12))){
var inst_48688 = (state_48714[(10)]);
var state_48714__$1 = state_48714;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48714__$1,(14),inst_48688);
} else {
if((state_val_48715 === (2))){
var state_48714__$1 = state_48714;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48714__$1,(4),results);
} else {
if((state_val_48715 === (19))){
var state_48714__$1 = state_48714;
var statearr_48732_50304 = state_48714__$1;
(statearr_48732_50304[(2)] = null);

(statearr_48732_50304[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48715 === (11))){
var inst_48688 = (state_48714[(2)]);
var state_48714__$1 = (function (){var statearr_48733 = state_48714;
(statearr_48733[(10)] = inst_48688);

return statearr_48733;
})();
var statearr_48734_50305 = state_48714__$1;
(statearr_48734_50305[(2)] = null);

(statearr_48734_50305[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48715 === (9))){
var state_48714__$1 = state_48714;
var statearr_48735_50306 = state_48714__$1;
(statearr_48735_50306[(2)] = null);

(statearr_48735_50306[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48715 === (5))){
var state_48714__$1 = state_48714;
if(cljs.core.truth_(close_QMARK_)){
var statearr_48738_50307 = state_48714__$1;
(statearr_48738_50307[(1)] = (8));

} else {
var statearr_48740_50308 = state_48714__$1;
(statearr_48740_50308[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48715 === (14))){
var inst_48692 = (state_48714[(8)]);
var inst_48694 = (state_48714[(11)]);
var inst_48692__$1 = (state_48714[(2)]);
var inst_48693 = (inst_48692__$1 == null);
var inst_48694__$1 = cljs.core.not(inst_48693);
var state_48714__$1 = (function (){var statearr_48741 = state_48714;
(statearr_48741[(8)] = inst_48692__$1);

(statearr_48741[(11)] = inst_48694__$1);

return statearr_48741;
})();
if(inst_48694__$1){
var statearr_48742_50309 = state_48714__$1;
(statearr_48742_50309[(1)] = (15));

} else {
var statearr_48743_50310 = state_48714__$1;
(statearr_48743_50310[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48715 === (16))){
var inst_48694 = (state_48714[(11)]);
var state_48714__$1 = state_48714;
var statearr_48746_50311 = state_48714__$1;
(statearr_48746_50311[(2)] = inst_48694);

(statearr_48746_50311[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48715 === (10))){
var inst_48685 = (state_48714[(2)]);
var state_48714__$1 = state_48714;
var statearr_48747_50312 = state_48714__$1;
(statearr_48747_50312[(2)] = inst_48685);

(statearr_48747_50312[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48715 === (18))){
var inst_48697 = (state_48714[(2)]);
var state_48714__$1 = state_48714;
var statearr_48748_50313 = state_48714__$1;
(statearr_48748_50313[(2)] = inst_48697);

(statearr_48748_50313[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48715 === (8))){
var inst_48682 = cljs.core.async.close_BANG_(to);
var state_48714__$1 = state_48714;
var statearr_48752_50314 = state_48714__$1;
(statearr_48752_50314[(2)] = inst_48682);

(statearr_48752_50314[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__48101__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__48101__auto____0 = (function (){
var statearr_48753 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48753[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__48101__auto__);

(statearr_48753[(1)] = (1));

return statearr_48753;
});
var cljs$core$async$pipeline_STAR__$_state_machine__48101__auto____1 = (function (state_48714){
while(true){
var ret_value__48102__auto__ = (function (){try{while(true){
var result__48103__auto__ = switch__48100__auto__(state_48714);
if(cljs.core.keyword_identical_QMARK_(result__48103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48103__auto__;
}
break;
}
}catch (e48754){var ex__48104__auto__ = e48754;
var statearr_48755_50317 = state_48714;
(statearr_48755_50317[(2)] = ex__48104__auto__);


if(cljs.core.seq((state_48714[(4)]))){
var statearr_48756_50318 = state_48714;
(statearr_48756_50318[(1)] = cljs.core.first((state_48714[(4)])));

} else {
throw ex__48104__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50319 = state_48714;
state_48714 = G__50319;
continue;
} else {
return ret_value__48102__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__48101__auto__ = function(state_48714){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__48101__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__48101__auto____1.call(this,state_48714);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__48101__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__48101__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__48101__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__48101__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__48101__auto__;
})()
})();
var state__48206__auto__ = (function (){var statearr_48761 = f__48205__auto__();
(statearr_48761[(6)] = c__48204__auto__);

return statearr_48761;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48206__auto__);
}));

return c__48204__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__48767 = arguments.length;
switch (G__48767) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__48769 = arguments.length;
switch (G__48769) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__48771 = arguments.length;
switch (G__48771) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__48204__auto___50327 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48205__auto__ = (function (){var switch__48100__auto__ = (function (state_48797){
var state_val_48798 = (state_48797[(1)]);
if((state_val_48798 === (7))){
var inst_48793 = (state_48797[(2)]);
var state_48797__$1 = state_48797;
var statearr_48799_50328 = state_48797__$1;
(statearr_48799_50328[(2)] = inst_48793);

(statearr_48799_50328[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48798 === (1))){
var state_48797__$1 = state_48797;
var statearr_48800_50332 = state_48797__$1;
(statearr_48800_50332[(2)] = null);

(statearr_48800_50332[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48798 === (4))){
var inst_48774 = (state_48797[(7)]);
var inst_48774__$1 = (state_48797[(2)]);
var inst_48775 = (inst_48774__$1 == null);
var state_48797__$1 = (function (){var statearr_48801 = state_48797;
(statearr_48801[(7)] = inst_48774__$1);

return statearr_48801;
})();
if(cljs.core.truth_(inst_48775)){
var statearr_48802_50333 = state_48797__$1;
(statearr_48802_50333[(1)] = (5));

} else {
var statearr_48803_50354 = state_48797__$1;
(statearr_48803_50354[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48798 === (13))){
var state_48797__$1 = state_48797;
var statearr_48804_50359 = state_48797__$1;
(statearr_48804_50359[(2)] = null);

(statearr_48804_50359[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48798 === (6))){
var inst_48774 = (state_48797[(7)]);
var inst_48780 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_48774) : p.call(null,inst_48774));
var state_48797__$1 = state_48797;
if(cljs.core.truth_(inst_48780)){
var statearr_48805_50362 = state_48797__$1;
(statearr_48805_50362[(1)] = (9));

} else {
var statearr_48819_50363 = state_48797__$1;
(statearr_48819_50363[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48798 === (3))){
var inst_48795 = (state_48797[(2)]);
var state_48797__$1 = state_48797;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48797__$1,inst_48795);
} else {
if((state_val_48798 === (12))){
var state_48797__$1 = state_48797;
var statearr_48820_50370 = state_48797__$1;
(statearr_48820_50370[(2)] = null);

(statearr_48820_50370[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48798 === (2))){
var state_48797__$1 = state_48797;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48797__$1,(4),ch);
} else {
if((state_val_48798 === (11))){
var inst_48774 = (state_48797[(7)]);
var inst_48784 = (state_48797[(2)]);
var state_48797__$1 = state_48797;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48797__$1,(8),inst_48784,inst_48774);
} else {
if((state_val_48798 === (9))){
var state_48797__$1 = state_48797;
var statearr_48821_50378 = state_48797__$1;
(statearr_48821_50378[(2)] = tc);

(statearr_48821_50378[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48798 === (5))){
var inst_48777 = cljs.core.async.close_BANG_(tc);
var inst_48778 = cljs.core.async.close_BANG_(fc);
var state_48797__$1 = (function (){var statearr_48822 = state_48797;
(statearr_48822[(8)] = inst_48777);

return statearr_48822;
})();
var statearr_48823_50382 = state_48797__$1;
(statearr_48823_50382[(2)] = inst_48778);

(statearr_48823_50382[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48798 === (14))){
var inst_48791 = (state_48797[(2)]);
var state_48797__$1 = state_48797;
var statearr_48824_50383 = state_48797__$1;
(statearr_48824_50383[(2)] = inst_48791);

(statearr_48824_50383[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48798 === (10))){
var state_48797__$1 = state_48797;
var statearr_48825_50386 = state_48797__$1;
(statearr_48825_50386[(2)] = fc);

(statearr_48825_50386[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48798 === (8))){
var inst_48786 = (state_48797[(2)]);
var state_48797__$1 = state_48797;
if(cljs.core.truth_(inst_48786)){
var statearr_48826_50389 = state_48797__$1;
(statearr_48826_50389[(1)] = (12));

} else {
var statearr_48827_50412 = state_48797__$1;
(statearr_48827_50412[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__48101__auto__ = null;
var cljs$core$async$state_machine__48101__auto____0 = (function (){
var statearr_48828 = [null,null,null,null,null,null,null,null,null];
(statearr_48828[(0)] = cljs$core$async$state_machine__48101__auto__);

(statearr_48828[(1)] = (1));

return statearr_48828;
});
var cljs$core$async$state_machine__48101__auto____1 = (function (state_48797){
while(true){
var ret_value__48102__auto__ = (function (){try{while(true){
var result__48103__auto__ = switch__48100__auto__(state_48797);
if(cljs.core.keyword_identical_QMARK_(result__48103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48103__auto__;
}
break;
}
}catch (e48829){var ex__48104__auto__ = e48829;
var statearr_48830_50417 = state_48797;
(statearr_48830_50417[(2)] = ex__48104__auto__);


if(cljs.core.seq((state_48797[(4)]))){
var statearr_48831_50418 = state_48797;
(statearr_48831_50418[(1)] = cljs.core.first((state_48797[(4)])));

} else {
throw ex__48104__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50419 = state_48797;
state_48797 = G__50419;
continue;
} else {
return ret_value__48102__auto__;
}
break;
}
});
cljs$core$async$state_machine__48101__auto__ = function(state_48797){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48101__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48101__auto____1.call(this,state_48797);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48101__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48101__auto____0;
cljs$core$async$state_machine__48101__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48101__auto____1;
return cljs$core$async$state_machine__48101__auto__;
})()
})();
var state__48206__auto__ = (function (){var statearr_48832 = f__48205__auto__();
(statearr_48832[(6)] = c__48204__auto___50327);

return statearr_48832;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48206__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__48204__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48205__auto__ = (function (){var switch__48100__auto__ = (function (state_48854){
var state_val_48855 = (state_48854[(1)]);
if((state_val_48855 === (7))){
var inst_48850 = (state_48854[(2)]);
var state_48854__$1 = state_48854;
var statearr_48856_50421 = state_48854__$1;
(statearr_48856_50421[(2)] = inst_48850);

(statearr_48856_50421[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48855 === (1))){
var inst_48833 = init;
var inst_48834 = inst_48833;
var state_48854__$1 = (function (){var statearr_48860 = state_48854;
(statearr_48860[(7)] = inst_48834);

return statearr_48860;
})();
var statearr_48861_50422 = state_48854__$1;
(statearr_48861_50422[(2)] = null);

(statearr_48861_50422[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48855 === (4))){
var inst_48837 = (state_48854[(8)]);
var inst_48837__$1 = (state_48854[(2)]);
var inst_48838 = (inst_48837__$1 == null);
var state_48854__$1 = (function (){var statearr_48865 = state_48854;
(statearr_48865[(8)] = inst_48837__$1);

return statearr_48865;
})();
if(cljs.core.truth_(inst_48838)){
var statearr_48868_50423 = state_48854__$1;
(statearr_48868_50423[(1)] = (5));

} else {
var statearr_48870_50424 = state_48854__$1;
(statearr_48870_50424[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48855 === (6))){
var inst_48837 = (state_48854[(8)]);
var inst_48841 = (state_48854[(9)]);
var inst_48834 = (state_48854[(7)]);
var inst_48841__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_48834,inst_48837) : f.call(null,inst_48834,inst_48837));
var inst_48842 = cljs.core.reduced_QMARK_(inst_48841__$1);
var state_48854__$1 = (function (){var statearr_48872 = state_48854;
(statearr_48872[(9)] = inst_48841__$1);

return statearr_48872;
})();
if(inst_48842){
var statearr_48873_50433 = state_48854__$1;
(statearr_48873_50433[(1)] = (8));

} else {
var statearr_48874_50435 = state_48854__$1;
(statearr_48874_50435[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48855 === (3))){
var inst_48852 = (state_48854[(2)]);
var state_48854__$1 = state_48854;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48854__$1,inst_48852);
} else {
if((state_val_48855 === (2))){
var state_48854__$1 = state_48854;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48854__$1,(4),ch);
} else {
if((state_val_48855 === (9))){
var inst_48841 = (state_48854[(9)]);
var inst_48834 = inst_48841;
var state_48854__$1 = (function (){var statearr_48875 = state_48854;
(statearr_48875[(7)] = inst_48834);

return statearr_48875;
})();
var statearr_48876_50437 = state_48854__$1;
(statearr_48876_50437[(2)] = null);

(statearr_48876_50437[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48855 === (5))){
var inst_48834 = (state_48854[(7)]);
var state_48854__$1 = state_48854;
var statearr_48877_50438 = state_48854__$1;
(statearr_48877_50438[(2)] = inst_48834);

(statearr_48877_50438[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48855 === (10))){
var inst_48848 = (state_48854[(2)]);
var state_48854__$1 = state_48854;
var statearr_48878_50439 = state_48854__$1;
(statearr_48878_50439[(2)] = inst_48848);

(statearr_48878_50439[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48855 === (8))){
var inst_48841 = (state_48854[(9)]);
var inst_48844 = cljs.core.deref(inst_48841);
var state_48854__$1 = state_48854;
var statearr_48879_50440 = state_48854__$1;
(statearr_48879_50440[(2)] = inst_48844);

(statearr_48879_50440[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__48101__auto__ = null;
var cljs$core$async$reduce_$_state_machine__48101__auto____0 = (function (){
var statearr_48880 = [null,null,null,null,null,null,null,null,null,null];
(statearr_48880[(0)] = cljs$core$async$reduce_$_state_machine__48101__auto__);

(statearr_48880[(1)] = (1));

return statearr_48880;
});
var cljs$core$async$reduce_$_state_machine__48101__auto____1 = (function (state_48854){
while(true){
var ret_value__48102__auto__ = (function (){try{while(true){
var result__48103__auto__ = switch__48100__auto__(state_48854);
if(cljs.core.keyword_identical_QMARK_(result__48103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48103__auto__;
}
break;
}
}catch (e48881){var ex__48104__auto__ = e48881;
var statearr_48882_50441 = state_48854;
(statearr_48882_50441[(2)] = ex__48104__auto__);


if(cljs.core.seq((state_48854[(4)]))){
var statearr_48883_50442 = state_48854;
(statearr_48883_50442[(1)] = cljs.core.first((state_48854[(4)])));

} else {
throw ex__48104__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50443 = state_48854;
state_48854 = G__50443;
continue;
} else {
return ret_value__48102__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__48101__auto__ = function(state_48854){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__48101__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__48101__auto____1.call(this,state_48854);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__48101__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__48101__auto____0;
cljs$core$async$reduce_$_state_machine__48101__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__48101__auto____1;
return cljs$core$async$reduce_$_state_machine__48101__auto__;
})()
})();
var state__48206__auto__ = (function (){var statearr_48884 = f__48205__auto__();
(statearr_48884[(6)] = c__48204__auto__);

return statearr_48884;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48206__auto__);
}));

return c__48204__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__48204__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48205__auto__ = (function (){var switch__48100__auto__ = (function (state_48890){
var state_val_48891 = (state_48890[(1)]);
if((state_val_48891 === (1))){
var inst_48885 = cljs.core.async.reduce(f__$1,init,ch);
var state_48890__$1 = state_48890;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48890__$1,(2),inst_48885);
} else {
if((state_val_48891 === (2))){
var inst_48887 = (state_48890[(2)]);
var inst_48888 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_48887) : f__$1.call(null,inst_48887));
var state_48890__$1 = state_48890;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48890__$1,inst_48888);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__48101__auto__ = null;
var cljs$core$async$transduce_$_state_machine__48101__auto____0 = (function (){
var statearr_48892 = [null,null,null,null,null,null,null];
(statearr_48892[(0)] = cljs$core$async$transduce_$_state_machine__48101__auto__);

(statearr_48892[(1)] = (1));

return statearr_48892;
});
var cljs$core$async$transduce_$_state_machine__48101__auto____1 = (function (state_48890){
while(true){
var ret_value__48102__auto__ = (function (){try{while(true){
var result__48103__auto__ = switch__48100__auto__(state_48890);
if(cljs.core.keyword_identical_QMARK_(result__48103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48103__auto__;
}
break;
}
}catch (e48893){var ex__48104__auto__ = e48893;
var statearr_48894_50451 = state_48890;
(statearr_48894_50451[(2)] = ex__48104__auto__);


if(cljs.core.seq((state_48890[(4)]))){
var statearr_48895_50452 = state_48890;
(statearr_48895_50452[(1)] = cljs.core.first((state_48890[(4)])));

} else {
throw ex__48104__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50453 = state_48890;
state_48890 = G__50453;
continue;
} else {
return ret_value__48102__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__48101__auto__ = function(state_48890){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__48101__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__48101__auto____1.call(this,state_48890);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__48101__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__48101__auto____0;
cljs$core$async$transduce_$_state_machine__48101__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__48101__auto____1;
return cljs$core$async$transduce_$_state_machine__48101__auto__;
})()
})();
var state__48206__auto__ = (function (){var statearr_48896 = f__48205__auto__();
(statearr_48896[(6)] = c__48204__auto__);

return statearr_48896;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48206__auto__);
}));

return c__48204__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__48898 = arguments.length;
switch (G__48898) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__48204__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48205__auto__ = (function (){var switch__48100__auto__ = (function (state_48923){
var state_val_48924 = (state_48923[(1)]);
if((state_val_48924 === (7))){
var inst_48905 = (state_48923[(2)]);
var state_48923__$1 = state_48923;
var statearr_48925_50455 = state_48923__$1;
(statearr_48925_50455[(2)] = inst_48905);

(statearr_48925_50455[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48924 === (1))){
var inst_48899 = cljs.core.seq(coll);
var inst_48900 = inst_48899;
var state_48923__$1 = (function (){var statearr_48926 = state_48923;
(statearr_48926[(7)] = inst_48900);

return statearr_48926;
})();
var statearr_48927_50457 = state_48923__$1;
(statearr_48927_50457[(2)] = null);

(statearr_48927_50457[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48924 === (4))){
var inst_48900 = (state_48923[(7)]);
var inst_48903 = cljs.core.first(inst_48900);
var state_48923__$1 = state_48923;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48923__$1,(7),ch,inst_48903);
} else {
if((state_val_48924 === (13))){
var inst_48917 = (state_48923[(2)]);
var state_48923__$1 = state_48923;
var statearr_48928_50460 = state_48923__$1;
(statearr_48928_50460[(2)] = inst_48917);

(statearr_48928_50460[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48924 === (6))){
var inst_48908 = (state_48923[(2)]);
var state_48923__$1 = state_48923;
if(cljs.core.truth_(inst_48908)){
var statearr_48929_50462 = state_48923__$1;
(statearr_48929_50462[(1)] = (8));

} else {
var statearr_48930_50463 = state_48923__$1;
(statearr_48930_50463[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48924 === (3))){
var inst_48921 = (state_48923[(2)]);
var state_48923__$1 = state_48923;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48923__$1,inst_48921);
} else {
if((state_val_48924 === (12))){
var state_48923__$1 = state_48923;
var statearr_48931_50464 = state_48923__$1;
(statearr_48931_50464[(2)] = null);

(statearr_48931_50464[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48924 === (2))){
var inst_48900 = (state_48923[(7)]);
var state_48923__$1 = state_48923;
if(cljs.core.truth_(inst_48900)){
var statearr_48933_50465 = state_48923__$1;
(statearr_48933_50465[(1)] = (4));

} else {
var statearr_48934_50466 = state_48923__$1;
(statearr_48934_50466[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48924 === (11))){
var inst_48914 = cljs.core.async.close_BANG_(ch);
var state_48923__$1 = state_48923;
var statearr_48935_50467 = state_48923__$1;
(statearr_48935_50467[(2)] = inst_48914);

(statearr_48935_50467[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48924 === (9))){
var state_48923__$1 = state_48923;
if(cljs.core.truth_(close_QMARK_)){
var statearr_48936_50468 = state_48923__$1;
(statearr_48936_50468[(1)] = (11));

} else {
var statearr_48937_50469 = state_48923__$1;
(statearr_48937_50469[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48924 === (5))){
var inst_48900 = (state_48923[(7)]);
var state_48923__$1 = state_48923;
var statearr_48938_50470 = state_48923__$1;
(statearr_48938_50470[(2)] = inst_48900);

(statearr_48938_50470[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48924 === (10))){
var inst_48919 = (state_48923[(2)]);
var state_48923__$1 = state_48923;
var statearr_48939_50471 = state_48923__$1;
(statearr_48939_50471[(2)] = inst_48919);

(statearr_48939_50471[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48924 === (8))){
var inst_48900 = (state_48923[(7)]);
var inst_48910 = cljs.core.next(inst_48900);
var inst_48900__$1 = inst_48910;
var state_48923__$1 = (function (){var statearr_48940 = state_48923;
(statearr_48940[(7)] = inst_48900__$1);

return statearr_48940;
})();
var statearr_48941_50472 = state_48923__$1;
(statearr_48941_50472[(2)] = null);

(statearr_48941_50472[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__48101__auto__ = null;
var cljs$core$async$state_machine__48101__auto____0 = (function (){
var statearr_48942 = [null,null,null,null,null,null,null,null];
(statearr_48942[(0)] = cljs$core$async$state_machine__48101__auto__);

(statearr_48942[(1)] = (1));

return statearr_48942;
});
var cljs$core$async$state_machine__48101__auto____1 = (function (state_48923){
while(true){
var ret_value__48102__auto__ = (function (){try{while(true){
var result__48103__auto__ = switch__48100__auto__(state_48923);
if(cljs.core.keyword_identical_QMARK_(result__48103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48103__auto__;
}
break;
}
}catch (e48943){var ex__48104__auto__ = e48943;
var statearr_48944_50473 = state_48923;
(statearr_48944_50473[(2)] = ex__48104__auto__);


if(cljs.core.seq((state_48923[(4)]))){
var statearr_48945_50474 = state_48923;
(statearr_48945_50474[(1)] = cljs.core.first((state_48923[(4)])));

} else {
throw ex__48104__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50475 = state_48923;
state_48923 = G__50475;
continue;
} else {
return ret_value__48102__auto__;
}
break;
}
});
cljs$core$async$state_machine__48101__auto__ = function(state_48923){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48101__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48101__auto____1.call(this,state_48923);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48101__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48101__auto____0;
cljs$core$async$state_machine__48101__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48101__auto____1;
return cljs$core$async$state_machine__48101__auto__;
})()
})();
var state__48206__auto__ = (function (){var statearr_48946 = f__48205__auto__();
(statearr_48946[(6)] = c__48204__auto__);

return statearr_48946;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48206__auto__);
}));

return c__48204__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__48950 = arguments.length;
switch (G__48950) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_50477 = (function (_){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4522__auto__.call(null,_));
} else {
var m__4519__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4519__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_50477(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_50478 = (function (m,ch,close_QMARK_){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4522__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4519__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4519__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_50478(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_50479 = (function (m,ch){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4522__auto__.call(null,m,ch));
} else {
var m__4519__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4519__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_50479(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_50480 = (function (m){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4522__auto__.call(null,m));
} else {
var m__4519__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4519__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_50480(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async49007 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49007 = (function (ch,cs,meta49008){
this.ch = ch;
this.cs = cs;
this.meta49008 = meta49008;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async49007.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49009,meta49008__$1){
var self__ = this;
var _49009__$1 = this;
return (new cljs.core.async.t_cljs$core$async49007(self__.ch,self__.cs,meta49008__$1));
}));

(cljs.core.async.t_cljs$core$async49007.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49009){
var self__ = this;
var _49009__$1 = this;
return self__.meta49008;
}));

(cljs.core.async.t_cljs$core$async49007.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49007.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async49007.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49007.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async49007.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async49007.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async49007.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta49008","meta49008",45564514,null)], null);
}));

(cljs.core.async.t_cljs$core$async49007.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async49007.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49007");

(cljs.core.async.t_cljs$core$async49007.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async49007");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49007.
 */
cljs.core.async.__GT_t_cljs$core$async49007 = (function cljs$core$async$mult_$___GT_t_cljs$core$async49007(ch__$1,cs__$1,meta49008){
return (new cljs.core.async.t_cljs$core$async49007(ch__$1,cs__$1,meta49008));
});

}

return (new cljs.core.async.t_cljs$core$async49007(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__48204__auto___50483 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48205__auto__ = (function (){var switch__48100__auto__ = (function (state_49198){
var state_val_49199 = (state_49198[(1)]);
if((state_val_49199 === (7))){
var inst_49194 = (state_49198[(2)]);
var state_49198__$1 = state_49198;
var statearr_49204_50488 = state_49198__$1;
(statearr_49204_50488[(2)] = inst_49194);

(statearr_49204_50488[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49199 === (20))){
var inst_49084 = (state_49198[(7)]);
var inst_49097 = cljs.core.first(inst_49084);
var inst_49098 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_49097,(0),null);
var inst_49100 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_49097,(1),null);
var state_49198__$1 = (function (){var statearr_49211 = state_49198;
(statearr_49211[(8)] = inst_49098);

return statearr_49211;
})();
if(cljs.core.truth_(inst_49100)){
var statearr_49214_50489 = state_49198__$1;
(statearr_49214_50489[(1)] = (22));

} else {
var statearr_49216_50490 = state_49198__$1;
(statearr_49216_50490[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49199 === (27))){
var inst_49134 = (state_49198[(9)]);
var inst_49142 = (state_49198[(10)]);
var inst_49046 = (state_49198[(11)]);
var inst_49132 = (state_49198[(12)]);
var inst_49142__$1 = cljs.core._nth(inst_49132,inst_49134);
var inst_49143 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_49142__$1,inst_49046,done);
var state_49198__$1 = (function (){var statearr_49223 = state_49198;
(statearr_49223[(10)] = inst_49142__$1);

return statearr_49223;
})();
if(cljs.core.truth_(inst_49143)){
var statearr_49228_50491 = state_49198__$1;
(statearr_49228_50491[(1)] = (30));

} else {
var statearr_49229_50492 = state_49198__$1;
(statearr_49229_50492[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49199 === (1))){
var state_49198__$1 = state_49198;
var statearr_49230_50493 = state_49198__$1;
(statearr_49230_50493[(2)] = null);

(statearr_49230_50493[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49199 === (24))){
var inst_49084 = (state_49198[(7)]);
var inst_49106 = (state_49198[(2)]);
var inst_49107 = cljs.core.next(inst_49084);
var inst_49055 = inst_49107;
var inst_49056 = null;
var inst_49057 = (0);
var inst_49058 = (0);
var state_49198__$1 = (function (){var statearr_49237 = state_49198;
(statearr_49237[(13)] = inst_49056);

(statearr_49237[(14)] = inst_49057);

(statearr_49237[(15)] = inst_49055);

(statearr_49237[(16)] = inst_49058);

(statearr_49237[(17)] = inst_49106);

return statearr_49237;
})();
var statearr_49238_50496 = state_49198__$1;
(statearr_49238_50496[(2)] = null);

(statearr_49238_50496[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49199 === (39))){
var state_49198__$1 = state_49198;
var statearr_49248_50497 = state_49198__$1;
(statearr_49248_50497[(2)] = null);

(statearr_49248_50497[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49199 === (4))){
var inst_49046 = (state_49198[(11)]);
var inst_49046__$1 = (state_49198[(2)]);
var inst_49047 = (inst_49046__$1 == null);
var state_49198__$1 = (function (){var statearr_49256 = state_49198;
(statearr_49256[(11)] = inst_49046__$1);

return statearr_49256;
})();
if(cljs.core.truth_(inst_49047)){
var statearr_49259_50498 = state_49198__$1;
(statearr_49259_50498[(1)] = (5));

} else {
var statearr_49260_50499 = state_49198__$1;
(statearr_49260_50499[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49199 === (15))){
var inst_49056 = (state_49198[(13)]);
var inst_49057 = (state_49198[(14)]);
var inst_49055 = (state_49198[(15)]);
var inst_49058 = (state_49198[(16)]);
var inst_49080 = (state_49198[(2)]);
var inst_49081 = (inst_49058 + (1));
var tmp49243 = inst_49056;
var tmp49244 = inst_49057;
var tmp49245 = inst_49055;
var inst_49055__$1 = tmp49245;
var inst_49056__$1 = tmp49243;
var inst_49057__$1 = tmp49244;
var inst_49058__$1 = inst_49081;
var state_49198__$1 = (function (){var statearr_49265 = state_49198;
(statearr_49265[(18)] = inst_49080);

(statearr_49265[(13)] = inst_49056__$1);

(statearr_49265[(14)] = inst_49057__$1);

(statearr_49265[(15)] = inst_49055__$1);

(statearr_49265[(16)] = inst_49058__$1);

return statearr_49265;
})();
var statearr_49268_50500 = state_49198__$1;
(statearr_49268_50500[(2)] = null);

(statearr_49268_50500[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49199 === (21))){
var inst_49110 = (state_49198[(2)]);
var state_49198__$1 = state_49198;
var statearr_49277_50501 = state_49198__$1;
(statearr_49277_50501[(2)] = inst_49110);

(statearr_49277_50501[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49199 === (31))){
var inst_49142 = (state_49198[(10)]);
var inst_49147 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_49142);
var state_49198__$1 = state_49198;
var statearr_49286_50502 = state_49198__$1;
(statearr_49286_50502[(2)] = inst_49147);

(statearr_49286_50502[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49199 === (32))){
var inst_49134 = (state_49198[(9)]);
var inst_49131 = (state_49198[(19)]);
var inst_49132 = (state_49198[(12)]);
var inst_49133 = (state_49198[(20)]);
var inst_49149 = (state_49198[(2)]);
var inst_49150 = (inst_49134 + (1));
var tmp49273 = inst_49131;
var tmp49274 = inst_49132;
var tmp49275 = inst_49133;
var inst_49131__$1 = tmp49273;
var inst_49132__$1 = tmp49274;
var inst_49133__$1 = tmp49275;
var inst_49134__$1 = inst_49150;
var state_49198__$1 = (function (){var statearr_49289 = state_49198;
(statearr_49289[(9)] = inst_49134__$1);

(statearr_49289[(21)] = inst_49149);

(statearr_49289[(19)] = inst_49131__$1);

(statearr_49289[(12)] = inst_49132__$1);

(statearr_49289[(20)] = inst_49133__$1);

return statearr_49289;
})();
var statearr_49290_50503 = state_49198__$1;
(statearr_49290_50503[(2)] = null);

(statearr_49290_50503[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49199 === (40))){
var inst_49164 = (state_49198[(22)]);
var inst_49169 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_49164);
var state_49198__$1 = state_49198;
var statearr_49291_50504 = state_49198__$1;
(statearr_49291_50504[(2)] = inst_49169);

(statearr_49291_50504[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49199 === (33))){
var inst_49153 = (state_49198[(23)]);
var inst_49155 = cljs.core.chunked_seq_QMARK_(inst_49153);
var state_49198__$1 = state_49198;
if(inst_49155){
var statearr_49294_50505 = state_49198__$1;
(statearr_49294_50505[(1)] = (36));

} else {
var statearr_49296_50506 = state_49198__$1;
(statearr_49296_50506[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49199 === (13))){
var inst_49074 = (state_49198[(24)]);
var inst_49077 = cljs.core.async.close_BANG_(inst_49074);
var state_49198__$1 = state_49198;
var statearr_49303_50507 = state_49198__$1;
(statearr_49303_50507[(2)] = inst_49077);

(statearr_49303_50507[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49199 === (22))){
var inst_49098 = (state_49198[(8)]);
var inst_49103 = cljs.core.async.close_BANG_(inst_49098);
var state_49198__$1 = state_49198;
var statearr_49306_50508 = state_49198__$1;
(statearr_49306_50508[(2)] = inst_49103);

(statearr_49306_50508[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49199 === (36))){
var inst_49153 = (state_49198[(23)]);
var inst_49157 = cljs.core.chunk_first(inst_49153);
var inst_49160 = cljs.core.chunk_rest(inst_49153);
var inst_49161 = cljs.core.count(inst_49157);
var inst_49131 = inst_49160;
var inst_49132 = inst_49157;
var inst_49133 = inst_49161;
var inst_49134 = (0);
var state_49198__$1 = (function (){var statearr_49308 = state_49198;
(statearr_49308[(9)] = inst_49134);

(statearr_49308[(19)] = inst_49131);

(statearr_49308[(12)] = inst_49132);

(statearr_49308[(20)] = inst_49133);

return statearr_49308;
})();
var statearr_49309_50530 = state_49198__$1;
(statearr_49309_50530[(2)] = null);

(statearr_49309_50530[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49199 === (41))){
var inst_49153 = (state_49198[(23)]);
var inst_49171 = (state_49198[(2)]);
var inst_49172 = cljs.core.next(inst_49153);
var inst_49131 = inst_49172;
var inst_49132 = null;
var inst_49133 = (0);
var inst_49134 = (0);
var state_49198__$1 = (function (){var statearr_49310 = state_49198;
(statearr_49310[(9)] = inst_49134);

(statearr_49310[(19)] = inst_49131);

(statearr_49310[(25)] = inst_49171);

(statearr_49310[(12)] = inst_49132);

(statearr_49310[(20)] = inst_49133);

return statearr_49310;
})();
var statearr_49311_50531 = state_49198__$1;
(statearr_49311_50531[(2)] = null);

(statearr_49311_50531[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49199 === (43))){
var state_49198__$1 = state_49198;
var statearr_49312_50532 = state_49198__$1;
(statearr_49312_50532[(2)] = null);

(statearr_49312_50532[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49199 === (29))){
var inst_49182 = (state_49198[(2)]);
var state_49198__$1 = state_49198;
var statearr_49313_50533 = state_49198__$1;
(statearr_49313_50533[(2)] = inst_49182);

(statearr_49313_50533[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49199 === (44))){
var inst_49191 = (state_49198[(2)]);
var state_49198__$1 = (function (){var statearr_49314 = state_49198;
(statearr_49314[(26)] = inst_49191);

return statearr_49314;
})();
var statearr_49315_50534 = state_49198__$1;
(statearr_49315_50534[(2)] = null);

(statearr_49315_50534[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49199 === (6))){
var inst_49120 = (state_49198[(27)]);
var inst_49119 = cljs.core.deref(cs);
var inst_49120__$1 = cljs.core.keys(inst_49119);
var inst_49121 = cljs.core.count(inst_49120__$1);
var inst_49122 = cljs.core.reset_BANG_(dctr,inst_49121);
var inst_49128 = cljs.core.seq(inst_49120__$1);
var inst_49131 = inst_49128;
var inst_49132 = null;
var inst_49133 = (0);
var inst_49134 = (0);
var state_49198__$1 = (function (){var statearr_49316 = state_49198;
(statearr_49316[(9)] = inst_49134);

(statearr_49316[(27)] = inst_49120__$1);

(statearr_49316[(19)] = inst_49131);

(statearr_49316[(28)] = inst_49122);

(statearr_49316[(12)] = inst_49132);

(statearr_49316[(20)] = inst_49133);

return statearr_49316;
})();
var statearr_49318_50535 = state_49198__$1;
(statearr_49318_50535[(2)] = null);

(statearr_49318_50535[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49199 === (28))){
var inst_49153 = (state_49198[(23)]);
var inst_49131 = (state_49198[(19)]);
var inst_49153__$1 = cljs.core.seq(inst_49131);
var state_49198__$1 = (function (){var statearr_49319 = state_49198;
(statearr_49319[(23)] = inst_49153__$1);

return statearr_49319;
})();
if(inst_49153__$1){
var statearr_49320_50542 = state_49198__$1;
(statearr_49320_50542[(1)] = (33));

} else {
var statearr_49321_50543 = state_49198__$1;
(statearr_49321_50543[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49199 === (25))){
var inst_49134 = (state_49198[(9)]);
var inst_49133 = (state_49198[(20)]);
var inst_49137 = (inst_49134 < inst_49133);
var inst_49138 = inst_49137;
var state_49198__$1 = state_49198;
if(cljs.core.truth_(inst_49138)){
var statearr_49323_50544 = state_49198__$1;
(statearr_49323_50544[(1)] = (27));

} else {
var statearr_49324_50545 = state_49198__$1;
(statearr_49324_50545[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49199 === (34))){
var state_49198__$1 = state_49198;
var statearr_49325_50546 = state_49198__$1;
(statearr_49325_50546[(2)] = null);

(statearr_49325_50546[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49199 === (17))){
var state_49198__$1 = state_49198;
var statearr_49326_50547 = state_49198__$1;
(statearr_49326_50547[(2)] = null);

(statearr_49326_50547[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49199 === (3))){
var inst_49196 = (state_49198[(2)]);
var state_49198__$1 = state_49198;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49198__$1,inst_49196);
} else {
if((state_val_49199 === (12))){
var inst_49115 = (state_49198[(2)]);
var state_49198__$1 = state_49198;
var statearr_49331_50548 = state_49198__$1;
(statearr_49331_50548[(2)] = inst_49115);

(statearr_49331_50548[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49199 === (2))){
var state_49198__$1 = state_49198;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49198__$1,(4),ch);
} else {
if((state_val_49199 === (23))){
var state_49198__$1 = state_49198;
var statearr_49340_50555 = state_49198__$1;
(statearr_49340_50555[(2)] = null);

(statearr_49340_50555[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49199 === (35))){
var inst_49179 = (state_49198[(2)]);
var state_49198__$1 = state_49198;
var statearr_49341_50556 = state_49198__$1;
(statearr_49341_50556[(2)] = inst_49179);

(statearr_49341_50556[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49199 === (19))){
var inst_49084 = (state_49198[(7)]);
var inst_49088 = cljs.core.chunk_first(inst_49084);
var inst_49089 = cljs.core.chunk_rest(inst_49084);
var inst_49090 = cljs.core.count(inst_49088);
var inst_49055 = inst_49089;
var inst_49056 = inst_49088;
var inst_49057 = inst_49090;
var inst_49058 = (0);
var state_49198__$1 = (function (){var statearr_49342 = state_49198;
(statearr_49342[(13)] = inst_49056);

(statearr_49342[(14)] = inst_49057);

(statearr_49342[(15)] = inst_49055);

(statearr_49342[(16)] = inst_49058);

return statearr_49342;
})();
var statearr_49343_50557 = state_49198__$1;
(statearr_49343_50557[(2)] = null);

(statearr_49343_50557[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49199 === (11))){
var inst_49084 = (state_49198[(7)]);
var inst_49055 = (state_49198[(15)]);
var inst_49084__$1 = cljs.core.seq(inst_49055);
var state_49198__$1 = (function (){var statearr_49344 = state_49198;
(statearr_49344[(7)] = inst_49084__$1);

return statearr_49344;
})();
if(inst_49084__$1){
var statearr_49345_50558 = state_49198__$1;
(statearr_49345_50558[(1)] = (16));

} else {
var statearr_49346_50559 = state_49198__$1;
(statearr_49346_50559[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49199 === (9))){
var inst_49117 = (state_49198[(2)]);
var state_49198__$1 = state_49198;
var statearr_49347_50560 = state_49198__$1;
(statearr_49347_50560[(2)] = inst_49117);

(statearr_49347_50560[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49199 === (5))){
var inst_49053 = cljs.core.deref(cs);
var inst_49054 = cljs.core.seq(inst_49053);
var inst_49055 = inst_49054;
var inst_49056 = null;
var inst_49057 = (0);
var inst_49058 = (0);
var state_49198__$1 = (function (){var statearr_49348 = state_49198;
(statearr_49348[(13)] = inst_49056);

(statearr_49348[(14)] = inst_49057);

(statearr_49348[(15)] = inst_49055);

(statearr_49348[(16)] = inst_49058);

return statearr_49348;
})();
var statearr_49349_50567 = state_49198__$1;
(statearr_49349_50567[(2)] = null);

(statearr_49349_50567[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49199 === (14))){
var state_49198__$1 = state_49198;
var statearr_49350_50568 = state_49198__$1;
(statearr_49350_50568[(2)] = null);

(statearr_49350_50568[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49199 === (45))){
var inst_49188 = (state_49198[(2)]);
var state_49198__$1 = state_49198;
var statearr_49351_50569 = state_49198__$1;
(statearr_49351_50569[(2)] = inst_49188);

(statearr_49351_50569[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49199 === (26))){
var inst_49120 = (state_49198[(27)]);
var inst_49184 = (state_49198[(2)]);
var inst_49185 = cljs.core.seq(inst_49120);
var state_49198__$1 = (function (){var statearr_49352 = state_49198;
(statearr_49352[(29)] = inst_49184);

return statearr_49352;
})();
if(inst_49185){
var statearr_49353_50570 = state_49198__$1;
(statearr_49353_50570[(1)] = (42));

} else {
var statearr_49354_50571 = state_49198__$1;
(statearr_49354_50571[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49199 === (16))){
var inst_49084 = (state_49198[(7)]);
var inst_49086 = cljs.core.chunked_seq_QMARK_(inst_49084);
var state_49198__$1 = state_49198;
if(inst_49086){
var statearr_49355_50572 = state_49198__$1;
(statearr_49355_50572[(1)] = (19));

} else {
var statearr_49356_50573 = state_49198__$1;
(statearr_49356_50573[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49199 === (38))){
var inst_49176 = (state_49198[(2)]);
var state_49198__$1 = state_49198;
var statearr_49357_50574 = state_49198__$1;
(statearr_49357_50574[(2)] = inst_49176);

(statearr_49357_50574[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49199 === (30))){
var state_49198__$1 = state_49198;
var statearr_49358_50575 = state_49198__$1;
(statearr_49358_50575[(2)] = null);

(statearr_49358_50575[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49199 === (10))){
var inst_49056 = (state_49198[(13)]);
var inst_49058 = (state_49198[(16)]);
var inst_49073 = cljs.core._nth(inst_49056,inst_49058);
var inst_49074 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_49073,(0),null);
var inst_49075 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_49073,(1),null);
var state_49198__$1 = (function (){var statearr_49359 = state_49198;
(statearr_49359[(24)] = inst_49074);

return statearr_49359;
})();
if(cljs.core.truth_(inst_49075)){
var statearr_49360_50576 = state_49198__$1;
(statearr_49360_50576[(1)] = (13));

} else {
var statearr_49361_50577 = state_49198__$1;
(statearr_49361_50577[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49199 === (18))){
var inst_49113 = (state_49198[(2)]);
var state_49198__$1 = state_49198;
var statearr_49362_50578 = state_49198__$1;
(statearr_49362_50578[(2)] = inst_49113);

(statearr_49362_50578[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49199 === (42))){
var state_49198__$1 = state_49198;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49198__$1,(45),dchan);
} else {
if((state_val_49199 === (37))){
var inst_49153 = (state_49198[(23)]);
var inst_49164 = (state_49198[(22)]);
var inst_49046 = (state_49198[(11)]);
var inst_49164__$1 = cljs.core.first(inst_49153);
var inst_49165 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_49164__$1,inst_49046,done);
var state_49198__$1 = (function (){var statearr_49363 = state_49198;
(statearr_49363[(22)] = inst_49164__$1);

return statearr_49363;
})();
if(cljs.core.truth_(inst_49165)){
var statearr_49364_50579 = state_49198__$1;
(statearr_49364_50579[(1)] = (39));

} else {
var statearr_49365_50580 = state_49198__$1;
(statearr_49365_50580[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49199 === (8))){
var inst_49057 = (state_49198[(14)]);
var inst_49058 = (state_49198[(16)]);
var inst_49061 = (inst_49058 < inst_49057);
var inst_49063 = inst_49061;
var state_49198__$1 = state_49198;
if(cljs.core.truth_(inst_49063)){
var statearr_49366_50581 = state_49198__$1;
(statearr_49366_50581[(1)] = (10));

} else {
var statearr_49367_50582 = state_49198__$1;
(statearr_49367_50582[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__48101__auto__ = null;
var cljs$core$async$mult_$_state_machine__48101__auto____0 = (function (){
var statearr_49368 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49368[(0)] = cljs$core$async$mult_$_state_machine__48101__auto__);

(statearr_49368[(1)] = (1));

return statearr_49368;
});
var cljs$core$async$mult_$_state_machine__48101__auto____1 = (function (state_49198){
while(true){
var ret_value__48102__auto__ = (function (){try{while(true){
var result__48103__auto__ = switch__48100__auto__(state_49198);
if(cljs.core.keyword_identical_QMARK_(result__48103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48103__auto__;
}
break;
}
}catch (e49369){var ex__48104__auto__ = e49369;
var statearr_49370_50583 = state_49198;
(statearr_49370_50583[(2)] = ex__48104__auto__);


if(cljs.core.seq((state_49198[(4)]))){
var statearr_49371_50584 = state_49198;
(statearr_49371_50584[(1)] = cljs.core.first((state_49198[(4)])));

} else {
throw ex__48104__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50585 = state_49198;
state_49198 = G__50585;
continue;
} else {
return ret_value__48102__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__48101__auto__ = function(state_49198){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__48101__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__48101__auto____1.call(this,state_49198);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__48101__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__48101__auto____0;
cljs$core$async$mult_$_state_machine__48101__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__48101__auto____1;
return cljs$core$async$mult_$_state_machine__48101__auto__;
})()
})();
var state__48206__auto__ = (function (){var statearr_49372 = f__48205__auto__();
(statearr_49372[(6)] = c__48204__auto___50483);

return statearr_49372;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48206__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__49374 = arguments.length;
switch (G__49374) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_50596 = (function (m,ch){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4522__auto__.call(null,m,ch));
} else {
var m__4519__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4519__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_50596(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_50597 = (function (m,ch){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4522__auto__.call(null,m,ch));
} else {
var m__4519__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4519__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_50597(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_50598 = (function (m){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4522__auto__.call(null,m));
} else {
var m__4519__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4519__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_50598(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_50599 = (function (m,state_map){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4522__auto__.call(null,m,state_map));
} else {
var m__4519__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4519__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_50599(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_50601 = (function (m,mode){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4522__auto__.call(null,m,mode));
} else {
var m__4519__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4519__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_50601(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___50603 = arguments.length;
var i__4830__auto___50604 = (0);
while(true){
if((i__4830__auto___50604 < len__4829__auto___50603)){
args__4835__auto__.push((arguments[i__4830__auto___50604]));

var G__50605 = (i__4830__auto___50604 + (1));
i__4830__auto___50604 = G__50605;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((3) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4836__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__49379){
var map__49380 = p__49379;
var map__49380__$1 = cljs.core.__destructure_map(map__49380);
var opts = map__49380__$1;
var statearr_49381_50606 = state;
(statearr_49381_50606[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_49382_50608 = state;
(statearr_49382_50608[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_49383_50609 = state;
(statearr_49383_50609[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq49375){
var G__49376 = cljs.core.first(seq49375);
var seq49375__$1 = cljs.core.next(seq49375);
var G__49377 = cljs.core.first(seq49375__$1);
var seq49375__$2 = cljs.core.next(seq49375__$1);
var G__49378 = cljs.core.first(seq49375__$2);
var seq49375__$3 = cljs.core.next(seq49375__$2);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49376,G__49377,G__49378,seq49375__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async49384 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49384 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta49385){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta49385 = meta49385;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async49384.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49386,meta49385__$1){
var self__ = this;
var _49386__$1 = this;
return (new cljs.core.async.t_cljs$core$async49384(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta49385__$1));
}));

(cljs.core.async.t_cljs$core$async49384.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49386){
var self__ = this;
var _49386__$1 = this;
return self__.meta49385;
}));

(cljs.core.async.t_cljs$core$async49384.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49384.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async49384.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49384.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async49384.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async49384.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async49384.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async49384.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async49384.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta49385","meta49385",2059709077,null)], null);
}));

(cljs.core.async.t_cljs$core$async49384.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async49384.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49384");

(cljs.core.async.t_cljs$core$async49384.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async49384");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49384.
 */
cljs.core.async.__GT_t_cljs$core$async49384 = (function cljs$core$async$mix_$___GT_t_cljs$core$async49384(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta49385){
return (new cljs.core.async.t_cljs$core$async49384(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta49385));
});

}

return (new cljs.core.async.t_cljs$core$async49384(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__48204__auto___50634 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48205__auto__ = (function (){var switch__48100__auto__ = (function (state_49454){
var state_val_49455 = (state_49454[(1)]);
if((state_val_49455 === (7))){
var inst_49414 = (state_49454[(2)]);
var state_49454__$1 = state_49454;
if(cljs.core.truth_(inst_49414)){
var statearr_49456_50635 = state_49454__$1;
(statearr_49456_50635[(1)] = (8));

} else {
var statearr_49457_50636 = state_49454__$1;
(statearr_49457_50636[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49455 === (20))){
var inst_49407 = (state_49454[(7)]);
var state_49454__$1 = state_49454;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49454__$1,(23),out,inst_49407);
} else {
if((state_val_49455 === (1))){
var inst_49390 = calc_state();
var inst_49391 = cljs.core.__destructure_map(inst_49390);
var inst_49392 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_49391,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_49393 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_49391,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_49394 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_49391,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_49395 = inst_49390;
var state_49454__$1 = (function (){var statearr_49458 = state_49454;
(statearr_49458[(8)] = inst_49394);

(statearr_49458[(9)] = inst_49393);

(statearr_49458[(10)] = inst_49392);

(statearr_49458[(11)] = inst_49395);

return statearr_49458;
})();
var statearr_49459_50638 = state_49454__$1;
(statearr_49459_50638[(2)] = null);

(statearr_49459_50638[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49455 === (24))){
var inst_49398 = (state_49454[(12)]);
var inst_49395 = inst_49398;
var state_49454__$1 = (function (){var statearr_49460 = state_49454;
(statearr_49460[(11)] = inst_49395);

return statearr_49460;
})();
var statearr_49461_50639 = state_49454__$1;
(statearr_49461_50639[(2)] = null);

(statearr_49461_50639[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49455 === (4))){
var inst_49407 = (state_49454[(7)]);
var inst_49409 = (state_49454[(13)]);
var inst_49406 = (state_49454[(2)]);
var inst_49407__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_49406,(0),null);
var inst_49408 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_49406,(1),null);
var inst_49409__$1 = (inst_49407__$1 == null);
var state_49454__$1 = (function (){var statearr_49462 = state_49454;
(statearr_49462[(7)] = inst_49407__$1);

(statearr_49462[(14)] = inst_49408);

(statearr_49462[(13)] = inst_49409__$1);

return statearr_49462;
})();
if(cljs.core.truth_(inst_49409__$1)){
var statearr_49463_50641 = state_49454__$1;
(statearr_49463_50641[(1)] = (5));

} else {
var statearr_49464_50642 = state_49454__$1;
(statearr_49464_50642[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49455 === (15))){
var inst_49399 = (state_49454[(15)]);
var inst_49428 = (state_49454[(16)]);
var inst_49428__$1 = cljs.core.empty_QMARK_(inst_49399);
var state_49454__$1 = (function (){var statearr_49465 = state_49454;
(statearr_49465[(16)] = inst_49428__$1);

return statearr_49465;
})();
if(inst_49428__$1){
var statearr_49466_50643 = state_49454__$1;
(statearr_49466_50643[(1)] = (17));

} else {
var statearr_49467_50644 = state_49454__$1;
(statearr_49467_50644[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49455 === (21))){
var inst_49398 = (state_49454[(12)]);
var inst_49395 = inst_49398;
var state_49454__$1 = (function (){var statearr_49468 = state_49454;
(statearr_49468[(11)] = inst_49395);

return statearr_49468;
})();
var statearr_49469_50645 = state_49454__$1;
(statearr_49469_50645[(2)] = null);

(statearr_49469_50645[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49455 === (13))){
var inst_49421 = (state_49454[(2)]);
var inst_49422 = calc_state();
var inst_49395 = inst_49422;
var state_49454__$1 = (function (){var statearr_49470 = state_49454;
(statearr_49470[(17)] = inst_49421);

(statearr_49470[(11)] = inst_49395);

return statearr_49470;
})();
var statearr_49471_50646 = state_49454__$1;
(statearr_49471_50646[(2)] = null);

(statearr_49471_50646[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49455 === (22))){
var inst_49448 = (state_49454[(2)]);
var state_49454__$1 = state_49454;
var statearr_49472_50647 = state_49454__$1;
(statearr_49472_50647[(2)] = inst_49448);

(statearr_49472_50647[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49455 === (6))){
var inst_49408 = (state_49454[(14)]);
var inst_49412 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_49408,change);
var state_49454__$1 = state_49454;
var statearr_49473_50648 = state_49454__$1;
(statearr_49473_50648[(2)] = inst_49412);

(statearr_49473_50648[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49455 === (25))){
var state_49454__$1 = state_49454;
var statearr_49474_50649 = state_49454__$1;
(statearr_49474_50649[(2)] = null);

(statearr_49474_50649[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49455 === (17))){
var inst_49408 = (state_49454[(14)]);
var inst_49400 = (state_49454[(18)]);
var inst_49430 = (inst_49400.cljs$core$IFn$_invoke$arity$1 ? inst_49400.cljs$core$IFn$_invoke$arity$1(inst_49408) : inst_49400.call(null,inst_49408));
var inst_49431 = cljs.core.not(inst_49430);
var state_49454__$1 = state_49454;
var statearr_49475_50650 = state_49454__$1;
(statearr_49475_50650[(2)] = inst_49431);

(statearr_49475_50650[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49455 === (3))){
var inst_49452 = (state_49454[(2)]);
var state_49454__$1 = state_49454;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49454__$1,inst_49452);
} else {
if((state_val_49455 === (12))){
var state_49454__$1 = state_49454;
var statearr_49476_50651 = state_49454__$1;
(statearr_49476_50651[(2)] = null);

(statearr_49476_50651[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49455 === (2))){
var inst_49398 = (state_49454[(12)]);
var inst_49395 = (state_49454[(11)]);
var inst_49398__$1 = cljs.core.__destructure_map(inst_49395);
var inst_49399 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_49398__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_49400 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_49398__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_49401 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_49398__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_49454__$1 = (function (){var statearr_49477 = state_49454;
(statearr_49477[(12)] = inst_49398__$1);

(statearr_49477[(15)] = inst_49399);

(statearr_49477[(18)] = inst_49400);

return statearr_49477;
})();
return cljs.core.async.ioc_alts_BANG_(state_49454__$1,(4),inst_49401);
} else {
if((state_val_49455 === (23))){
var inst_49439 = (state_49454[(2)]);
var state_49454__$1 = state_49454;
if(cljs.core.truth_(inst_49439)){
var statearr_49478_50652 = state_49454__$1;
(statearr_49478_50652[(1)] = (24));

} else {
var statearr_49479_50653 = state_49454__$1;
(statearr_49479_50653[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49455 === (19))){
var inst_49434 = (state_49454[(2)]);
var state_49454__$1 = state_49454;
var statearr_49480_50654 = state_49454__$1;
(statearr_49480_50654[(2)] = inst_49434);

(statearr_49480_50654[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49455 === (11))){
var inst_49408 = (state_49454[(14)]);
var inst_49418 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_49408);
var state_49454__$1 = state_49454;
var statearr_49481_50655 = state_49454__$1;
(statearr_49481_50655[(2)] = inst_49418);

(statearr_49481_50655[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49455 === (9))){
var inst_49425 = (state_49454[(19)]);
var inst_49408 = (state_49454[(14)]);
var inst_49399 = (state_49454[(15)]);
var inst_49425__$1 = (inst_49399.cljs$core$IFn$_invoke$arity$1 ? inst_49399.cljs$core$IFn$_invoke$arity$1(inst_49408) : inst_49399.call(null,inst_49408));
var state_49454__$1 = (function (){var statearr_49482 = state_49454;
(statearr_49482[(19)] = inst_49425__$1);

return statearr_49482;
})();
if(cljs.core.truth_(inst_49425__$1)){
var statearr_49483_50656 = state_49454__$1;
(statearr_49483_50656[(1)] = (14));

} else {
var statearr_49484_50657 = state_49454__$1;
(statearr_49484_50657[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49455 === (5))){
var inst_49409 = (state_49454[(13)]);
var state_49454__$1 = state_49454;
var statearr_49485_50658 = state_49454__$1;
(statearr_49485_50658[(2)] = inst_49409);

(statearr_49485_50658[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49455 === (14))){
var inst_49425 = (state_49454[(19)]);
var state_49454__$1 = state_49454;
var statearr_49486_50659 = state_49454__$1;
(statearr_49486_50659[(2)] = inst_49425);

(statearr_49486_50659[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49455 === (26))){
var inst_49444 = (state_49454[(2)]);
var state_49454__$1 = state_49454;
var statearr_49487_50664 = state_49454__$1;
(statearr_49487_50664[(2)] = inst_49444);

(statearr_49487_50664[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49455 === (16))){
var inst_49436 = (state_49454[(2)]);
var state_49454__$1 = state_49454;
if(cljs.core.truth_(inst_49436)){
var statearr_49488_50665 = state_49454__$1;
(statearr_49488_50665[(1)] = (20));

} else {
var statearr_49489_50666 = state_49454__$1;
(statearr_49489_50666[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49455 === (10))){
var inst_49450 = (state_49454[(2)]);
var state_49454__$1 = state_49454;
var statearr_49490_50667 = state_49454__$1;
(statearr_49490_50667[(2)] = inst_49450);

(statearr_49490_50667[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49455 === (18))){
var inst_49428 = (state_49454[(16)]);
var state_49454__$1 = state_49454;
var statearr_49491_50668 = state_49454__$1;
(statearr_49491_50668[(2)] = inst_49428);

(statearr_49491_50668[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49455 === (8))){
var inst_49407 = (state_49454[(7)]);
var inst_49416 = (inst_49407 == null);
var state_49454__$1 = state_49454;
if(cljs.core.truth_(inst_49416)){
var statearr_49492_50669 = state_49454__$1;
(statearr_49492_50669[(1)] = (11));

} else {
var statearr_49493_50670 = state_49454__$1;
(statearr_49493_50670[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__48101__auto__ = null;
var cljs$core$async$mix_$_state_machine__48101__auto____0 = (function (){
var statearr_49494 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49494[(0)] = cljs$core$async$mix_$_state_machine__48101__auto__);

(statearr_49494[(1)] = (1));

return statearr_49494;
});
var cljs$core$async$mix_$_state_machine__48101__auto____1 = (function (state_49454){
while(true){
var ret_value__48102__auto__ = (function (){try{while(true){
var result__48103__auto__ = switch__48100__auto__(state_49454);
if(cljs.core.keyword_identical_QMARK_(result__48103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48103__auto__;
}
break;
}
}catch (e49495){var ex__48104__auto__ = e49495;
var statearr_49496_50671 = state_49454;
(statearr_49496_50671[(2)] = ex__48104__auto__);


if(cljs.core.seq((state_49454[(4)]))){
var statearr_49497_50672 = state_49454;
(statearr_49497_50672[(1)] = cljs.core.first((state_49454[(4)])));

} else {
throw ex__48104__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50673 = state_49454;
state_49454 = G__50673;
continue;
} else {
return ret_value__48102__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__48101__auto__ = function(state_49454){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__48101__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__48101__auto____1.call(this,state_49454);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__48101__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__48101__auto____0;
cljs$core$async$mix_$_state_machine__48101__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__48101__auto____1;
return cljs$core$async$mix_$_state_machine__48101__auto__;
})()
})();
var state__48206__auto__ = (function (){var statearr_49498 = f__48205__auto__();
(statearr_49498[(6)] = c__48204__auto___50634);

return statearr_49498;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48206__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_50674 = (function (p,v,ch,close_QMARK_){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4522__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4519__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4519__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_50674(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_50680 = (function (p,v,ch){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4522__auto__.call(null,p,v,ch));
} else {
var m__4519__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4519__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_50680(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_50681 = (function() {
var G__50682 = null;
var G__50682__1 = (function (p){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4522__auto__.call(null,p));
} else {
var m__4519__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4519__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__50682__2 = (function (p,v){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4522__auto__.call(null,p,v));
} else {
var m__4519__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4519__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__50682 = function(p,v){
switch(arguments.length){
case 1:
return G__50682__1.call(this,p);
case 2:
return G__50682__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__50682.cljs$core$IFn$_invoke$arity$1 = G__50682__1;
G__50682.cljs$core$IFn$_invoke$arity$2 = G__50682__2;
return G__50682;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__49500 = arguments.length;
switch (G__49500) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_50681(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_50681(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__49503 = arguments.length;
switch (G__49503) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4223__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__49501_SHARP_){
if(cljs.core.truth_((p1__49501_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__49501_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__49501_SHARP_.call(null,topic)))){
return p1__49501_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__49501_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async49504 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49504 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta49505){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta49505 = meta49505;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async49504.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49506,meta49505__$1){
var self__ = this;
var _49506__$1 = this;
return (new cljs.core.async.t_cljs$core$async49504(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta49505__$1));
}));

(cljs.core.async.t_cljs$core$async49504.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49506){
var self__ = this;
var _49506__$1 = this;
return self__.meta49505;
}));

(cljs.core.async.t_cljs$core$async49504.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49504.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async49504.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49504.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async49504.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async49504.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async49504.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async49504.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta49505","meta49505",-1674903274,null)], null);
}));

(cljs.core.async.t_cljs$core$async49504.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async49504.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49504");

(cljs.core.async.t_cljs$core$async49504.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async49504");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49504.
 */
cljs.core.async.__GT_t_cljs$core$async49504 = (function cljs$core$async$__GT_t_cljs$core$async49504(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta49505){
return (new cljs.core.async.t_cljs$core$async49504(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta49505));
});

}

return (new cljs.core.async.t_cljs$core$async49504(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__48204__auto___50690 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48205__auto__ = (function (){var switch__48100__auto__ = (function (state_49578){
var state_val_49579 = (state_49578[(1)]);
if((state_val_49579 === (7))){
var inst_49574 = (state_49578[(2)]);
var state_49578__$1 = state_49578;
var statearr_49580_50691 = state_49578__$1;
(statearr_49580_50691[(2)] = inst_49574);

(statearr_49580_50691[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49579 === (20))){
var state_49578__$1 = state_49578;
var statearr_49581_50692 = state_49578__$1;
(statearr_49581_50692[(2)] = null);

(statearr_49581_50692[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49579 === (1))){
var state_49578__$1 = state_49578;
var statearr_49582_50693 = state_49578__$1;
(statearr_49582_50693[(2)] = null);

(statearr_49582_50693[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49579 === (24))){
var inst_49557 = (state_49578[(7)]);
var inst_49566 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_49557);
var state_49578__$1 = state_49578;
var statearr_49583_50694 = state_49578__$1;
(statearr_49583_50694[(2)] = inst_49566);

(statearr_49583_50694[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49579 === (4))){
var inst_49509 = (state_49578[(8)]);
var inst_49509__$1 = (state_49578[(2)]);
var inst_49510 = (inst_49509__$1 == null);
var state_49578__$1 = (function (){var statearr_49584 = state_49578;
(statearr_49584[(8)] = inst_49509__$1);

return statearr_49584;
})();
if(cljs.core.truth_(inst_49510)){
var statearr_49585_50695 = state_49578__$1;
(statearr_49585_50695[(1)] = (5));

} else {
var statearr_49586_50696 = state_49578__$1;
(statearr_49586_50696[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49579 === (15))){
var inst_49551 = (state_49578[(2)]);
var state_49578__$1 = state_49578;
var statearr_49587_50697 = state_49578__$1;
(statearr_49587_50697[(2)] = inst_49551);

(statearr_49587_50697[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49579 === (21))){
var inst_49571 = (state_49578[(2)]);
var state_49578__$1 = (function (){var statearr_49588 = state_49578;
(statearr_49588[(9)] = inst_49571);

return statearr_49588;
})();
var statearr_49589_50698 = state_49578__$1;
(statearr_49589_50698[(2)] = null);

(statearr_49589_50698[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49579 === (13))){
var inst_49533 = (state_49578[(10)]);
var inst_49535 = cljs.core.chunked_seq_QMARK_(inst_49533);
var state_49578__$1 = state_49578;
if(inst_49535){
var statearr_49590_50699 = state_49578__$1;
(statearr_49590_50699[(1)] = (16));

} else {
var statearr_49591_50700 = state_49578__$1;
(statearr_49591_50700[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49579 === (22))){
var inst_49563 = (state_49578[(2)]);
var state_49578__$1 = state_49578;
if(cljs.core.truth_(inst_49563)){
var statearr_49592_50701 = state_49578__$1;
(statearr_49592_50701[(1)] = (23));

} else {
var statearr_49593_50702 = state_49578__$1;
(statearr_49593_50702[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49579 === (6))){
var inst_49509 = (state_49578[(8)]);
var inst_49557 = (state_49578[(7)]);
var inst_49559 = (state_49578[(11)]);
var inst_49557__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_49509) : topic_fn.call(null,inst_49509));
var inst_49558 = cljs.core.deref(mults);
var inst_49559__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_49558,inst_49557__$1);
var state_49578__$1 = (function (){var statearr_49594 = state_49578;
(statearr_49594[(7)] = inst_49557__$1);

(statearr_49594[(11)] = inst_49559__$1);

return statearr_49594;
})();
if(cljs.core.truth_(inst_49559__$1)){
var statearr_49595_50703 = state_49578__$1;
(statearr_49595_50703[(1)] = (19));

} else {
var statearr_49596_50704 = state_49578__$1;
(statearr_49596_50704[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49579 === (25))){
var inst_49568 = (state_49578[(2)]);
var state_49578__$1 = state_49578;
var statearr_49597_50705 = state_49578__$1;
(statearr_49597_50705[(2)] = inst_49568);

(statearr_49597_50705[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49579 === (17))){
var inst_49533 = (state_49578[(10)]);
var inst_49542 = cljs.core.first(inst_49533);
var inst_49543 = cljs.core.async.muxch_STAR_(inst_49542);
var inst_49544 = cljs.core.async.close_BANG_(inst_49543);
var inst_49545 = cljs.core.next(inst_49533);
var inst_49519 = inst_49545;
var inst_49520 = null;
var inst_49521 = (0);
var inst_49522 = (0);
var state_49578__$1 = (function (){var statearr_49598 = state_49578;
(statearr_49598[(12)] = inst_49519);

(statearr_49598[(13)] = inst_49521);

(statearr_49598[(14)] = inst_49522);

(statearr_49598[(15)] = inst_49544);

(statearr_49598[(16)] = inst_49520);

return statearr_49598;
})();
var statearr_49599_50707 = state_49578__$1;
(statearr_49599_50707[(2)] = null);

(statearr_49599_50707[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49579 === (3))){
var inst_49576 = (state_49578[(2)]);
var state_49578__$1 = state_49578;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49578__$1,inst_49576);
} else {
if((state_val_49579 === (12))){
var inst_49553 = (state_49578[(2)]);
var state_49578__$1 = state_49578;
var statearr_49600_50711 = state_49578__$1;
(statearr_49600_50711[(2)] = inst_49553);

(statearr_49600_50711[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49579 === (2))){
var state_49578__$1 = state_49578;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49578__$1,(4),ch);
} else {
if((state_val_49579 === (23))){
var state_49578__$1 = state_49578;
var statearr_49601_50712 = state_49578__$1;
(statearr_49601_50712[(2)] = null);

(statearr_49601_50712[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49579 === (19))){
var inst_49509 = (state_49578[(8)]);
var inst_49559 = (state_49578[(11)]);
var inst_49561 = cljs.core.async.muxch_STAR_(inst_49559);
var state_49578__$1 = state_49578;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49578__$1,(22),inst_49561,inst_49509);
} else {
if((state_val_49579 === (11))){
var inst_49519 = (state_49578[(12)]);
var inst_49533 = (state_49578[(10)]);
var inst_49533__$1 = cljs.core.seq(inst_49519);
var state_49578__$1 = (function (){var statearr_49602 = state_49578;
(statearr_49602[(10)] = inst_49533__$1);

return statearr_49602;
})();
if(inst_49533__$1){
var statearr_49603_50713 = state_49578__$1;
(statearr_49603_50713[(1)] = (13));

} else {
var statearr_49604_50714 = state_49578__$1;
(statearr_49604_50714[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49579 === (9))){
var inst_49555 = (state_49578[(2)]);
var state_49578__$1 = state_49578;
var statearr_49605_50715 = state_49578__$1;
(statearr_49605_50715[(2)] = inst_49555);

(statearr_49605_50715[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49579 === (5))){
var inst_49516 = cljs.core.deref(mults);
var inst_49517 = cljs.core.vals(inst_49516);
var inst_49518 = cljs.core.seq(inst_49517);
var inst_49519 = inst_49518;
var inst_49520 = null;
var inst_49521 = (0);
var inst_49522 = (0);
var state_49578__$1 = (function (){var statearr_49606 = state_49578;
(statearr_49606[(12)] = inst_49519);

(statearr_49606[(13)] = inst_49521);

(statearr_49606[(14)] = inst_49522);

(statearr_49606[(16)] = inst_49520);

return statearr_49606;
})();
var statearr_49607_50716 = state_49578__$1;
(statearr_49607_50716[(2)] = null);

(statearr_49607_50716[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49579 === (14))){
var state_49578__$1 = state_49578;
var statearr_49611_50717 = state_49578__$1;
(statearr_49611_50717[(2)] = null);

(statearr_49611_50717[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49579 === (16))){
var inst_49533 = (state_49578[(10)]);
var inst_49537 = cljs.core.chunk_first(inst_49533);
var inst_49538 = cljs.core.chunk_rest(inst_49533);
var inst_49539 = cljs.core.count(inst_49537);
var inst_49519 = inst_49538;
var inst_49520 = inst_49537;
var inst_49521 = inst_49539;
var inst_49522 = (0);
var state_49578__$1 = (function (){var statearr_49612 = state_49578;
(statearr_49612[(12)] = inst_49519);

(statearr_49612[(13)] = inst_49521);

(statearr_49612[(14)] = inst_49522);

(statearr_49612[(16)] = inst_49520);

return statearr_49612;
})();
var statearr_49613_50718 = state_49578__$1;
(statearr_49613_50718[(2)] = null);

(statearr_49613_50718[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49579 === (10))){
var inst_49519 = (state_49578[(12)]);
var inst_49521 = (state_49578[(13)]);
var inst_49522 = (state_49578[(14)]);
var inst_49520 = (state_49578[(16)]);
var inst_49527 = cljs.core._nth(inst_49520,inst_49522);
var inst_49528 = cljs.core.async.muxch_STAR_(inst_49527);
var inst_49529 = cljs.core.async.close_BANG_(inst_49528);
var inst_49530 = (inst_49522 + (1));
var tmp49608 = inst_49519;
var tmp49609 = inst_49521;
var tmp49610 = inst_49520;
var inst_49519__$1 = tmp49608;
var inst_49520__$1 = tmp49610;
var inst_49521__$1 = tmp49609;
var inst_49522__$1 = inst_49530;
var state_49578__$1 = (function (){var statearr_49614 = state_49578;
(statearr_49614[(12)] = inst_49519__$1);

(statearr_49614[(13)] = inst_49521__$1);

(statearr_49614[(14)] = inst_49522__$1);

(statearr_49614[(17)] = inst_49529);

(statearr_49614[(16)] = inst_49520__$1);

return statearr_49614;
})();
var statearr_49615_50719 = state_49578__$1;
(statearr_49615_50719[(2)] = null);

(statearr_49615_50719[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49579 === (18))){
var inst_49548 = (state_49578[(2)]);
var state_49578__$1 = state_49578;
var statearr_49616_50721 = state_49578__$1;
(statearr_49616_50721[(2)] = inst_49548);

(statearr_49616_50721[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49579 === (8))){
var inst_49521 = (state_49578[(13)]);
var inst_49522 = (state_49578[(14)]);
var inst_49524 = (inst_49522 < inst_49521);
var inst_49525 = inst_49524;
var state_49578__$1 = state_49578;
if(cljs.core.truth_(inst_49525)){
var statearr_49617_50722 = state_49578__$1;
(statearr_49617_50722[(1)] = (10));

} else {
var statearr_49618_50723 = state_49578__$1;
(statearr_49618_50723[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__48101__auto__ = null;
var cljs$core$async$state_machine__48101__auto____0 = (function (){
var statearr_49619 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49619[(0)] = cljs$core$async$state_machine__48101__auto__);

(statearr_49619[(1)] = (1));

return statearr_49619;
});
var cljs$core$async$state_machine__48101__auto____1 = (function (state_49578){
while(true){
var ret_value__48102__auto__ = (function (){try{while(true){
var result__48103__auto__ = switch__48100__auto__(state_49578);
if(cljs.core.keyword_identical_QMARK_(result__48103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48103__auto__;
}
break;
}
}catch (e49620){var ex__48104__auto__ = e49620;
var statearr_49621_50724 = state_49578;
(statearr_49621_50724[(2)] = ex__48104__auto__);


if(cljs.core.seq((state_49578[(4)]))){
var statearr_49622_50725 = state_49578;
(statearr_49622_50725[(1)] = cljs.core.first((state_49578[(4)])));

} else {
throw ex__48104__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50726 = state_49578;
state_49578 = G__50726;
continue;
} else {
return ret_value__48102__auto__;
}
break;
}
});
cljs$core$async$state_machine__48101__auto__ = function(state_49578){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48101__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48101__auto____1.call(this,state_49578);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48101__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48101__auto____0;
cljs$core$async$state_machine__48101__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48101__auto____1;
return cljs$core$async$state_machine__48101__auto__;
})()
})();
var state__48206__auto__ = (function (){var statearr_49623 = f__48205__auto__();
(statearr_49623[(6)] = c__48204__auto___50690);

return statearr_49623;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48206__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__49625 = arguments.length;
switch (G__49625) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__49627 = arguments.length;
switch (G__49627) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__49629 = arguments.length;
switch (G__49629) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__48204__auto___50735 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48205__auto__ = (function (){var switch__48100__auto__ = (function (state_49672){
var state_val_49673 = (state_49672[(1)]);
if((state_val_49673 === (7))){
var state_49672__$1 = state_49672;
var statearr_49674_50736 = state_49672__$1;
(statearr_49674_50736[(2)] = null);

(statearr_49674_50736[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49673 === (1))){
var state_49672__$1 = state_49672;
var statearr_49675_50737 = state_49672__$1;
(statearr_49675_50737[(2)] = null);

(statearr_49675_50737[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49673 === (4))){
var inst_49633 = (state_49672[(7)]);
var inst_49632 = (state_49672[(8)]);
var inst_49635 = (inst_49633 < inst_49632);
var state_49672__$1 = state_49672;
if(cljs.core.truth_(inst_49635)){
var statearr_49676_50738 = state_49672__$1;
(statearr_49676_50738[(1)] = (6));

} else {
var statearr_49677_50739 = state_49672__$1;
(statearr_49677_50739[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49673 === (15))){
var inst_49658 = (state_49672[(9)]);
var inst_49663 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_49658);
var state_49672__$1 = state_49672;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49672__$1,(17),out,inst_49663);
} else {
if((state_val_49673 === (13))){
var inst_49658 = (state_49672[(9)]);
var inst_49658__$1 = (state_49672[(2)]);
var inst_49659 = cljs.core.some(cljs.core.nil_QMARK_,inst_49658__$1);
var state_49672__$1 = (function (){var statearr_49678 = state_49672;
(statearr_49678[(9)] = inst_49658__$1);

return statearr_49678;
})();
if(cljs.core.truth_(inst_49659)){
var statearr_49679_50741 = state_49672__$1;
(statearr_49679_50741[(1)] = (14));

} else {
var statearr_49680_50742 = state_49672__$1;
(statearr_49680_50742[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49673 === (6))){
var state_49672__$1 = state_49672;
var statearr_49681_50743 = state_49672__$1;
(statearr_49681_50743[(2)] = null);

(statearr_49681_50743[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49673 === (17))){
var inst_49665 = (state_49672[(2)]);
var state_49672__$1 = (function (){var statearr_49683 = state_49672;
(statearr_49683[(10)] = inst_49665);

return statearr_49683;
})();
var statearr_49684_50745 = state_49672__$1;
(statearr_49684_50745[(2)] = null);

(statearr_49684_50745[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49673 === (3))){
var inst_49670 = (state_49672[(2)]);
var state_49672__$1 = state_49672;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49672__$1,inst_49670);
} else {
if((state_val_49673 === (12))){
var _ = (function (){var statearr_49685 = state_49672;
(statearr_49685[(4)] = cljs.core.rest((state_49672[(4)])));

return statearr_49685;
})();
var state_49672__$1 = state_49672;
var ex49682 = (state_49672__$1[(2)]);
var statearr_49686_50749 = state_49672__$1;
(statearr_49686_50749[(5)] = ex49682);


if((ex49682 instanceof Object)){
var statearr_49687_50750 = state_49672__$1;
(statearr_49687_50750[(1)] = (11));

(statearr_49687_50750[(5)] = null);

} else {
throw ex49682;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49673 === (2))){
var inst_49631 = cljs.core.reset_BANG_(dctr,cnt);
var inst_49632 = cnt;
var inst_49633 = (0);
var state_49672__$1 = (function (){var statearr_49688 = state_49672;
(statearr_49688[(11)] = inst_49631);

(statearr_49688[(7)] = inst_49633);

(statearr_49688[(8)] = inst_49632);

return statearr_49688;
})();
var statearr_49689_50751 = state_49672__$1;
(statearr_49689_50751[(2)] = null);

(statearr_49689_50751[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49673 === (11))){
var inst_49637 = (state_49672[(2)]);
var inst_49638 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_49672__$1 = (function (){var statearr_49690 = state_49672;
(statearr_49690[(12)] = inst_49637);

return statearr_49690;
})();
var statearr_49691_50752 = state_49672__$1;
(statearr_49691_50752[(2)] = inst_49638);

(statearr_49691_50752[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49673 === (9))){
var inst_49633 = (state_49672[(7)]);
var _ = (function (){var statearr_49692 = state_49672;
(statearr_49692[(4)] = cljs.core.cons((12),(state_49672[(4)])));

return statearr_49692;
})();
var inst_49644 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_49633) : chs__$1.call(null,inst_49633));
var inst_49645 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_49633) : done.call(null,inst_49633));
var inst_49646 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_49644,inst_49645);
var ___$1 = (function (){var statearr_49693 = state_49672;
(statearr_49693[(4)] = cljs.core.rest((state_49672[(4)])));

return statearr_49693;
})();
var state_49672__$1 = state_49672;
var statearr_49694_50753 = state_49672__$1;
(statearr_49694_50753[(2)] = inst_49646);

(statearr_49694_50753[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49673 === (5))){
var inst_49656 = (state_49672[(2)]);
var state_49672__$1 = (function (){var statearr_49695 = state_49672;
(statearr_49695[(13)] = inst_49656);

return statearr_49695;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49672__$1,(13),dchan);
} else {
if((state_val_49673 === (14))){
var inst_49661 = cljs.core.async.close_BANG_(out);
var state_49672__$1 = state_49672;
var statearr_49696_50754 = state_49672__$1;
(statearr_49696_50754[(2)] = inst_49661);

(statearr_49696_50754[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49673 === (16))){
var inst_49668 = (state_49672[(2)]);
var state_49672__$1 = state_49672;
var statearr_49697_50755 = state_49672__$1;
(statearr_49697_50755[(2)] = inst_49668);

(statearr_49697_50755[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49673 === (10))){
var inst_49633 = (state_49672[(7)]);
var inst_49649 = (state_49672[(2)]);
var inst_49650 = (inst_49633 + (1));
var inst_49633__$1 = inst_49650;
var state_49672__$1 = (function (){var statearr_49698 = state_49672;
(statearr_49698[(14)] = inst_49649);

(statearr_49698[(7)] = inst_49633__$1);

return statearr_49698;
})();
var statearr_49699_50756 = state_49672__$1;
(statearr_49699_50756[(2)] = null);

(statearr_49699_50756[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49673 === (8))){
var inst_49654 = (state_49672[(2)]);
var state_49672__$1 = state_49672;
var statearr_49700_50757 = state_49672__$1;
(statearr_49700_50757[(2)] = inst_49654);

(statearr_49700_50757[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__48101__auto__ = null;
var cljs$core$async$state_machine__48101__auto____0 = (function (){
var statearr_49701 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49701[(0)] = cljs$core$async$state_machine__48101__auto__);

(statearr_49701[(1)] = (1));

return statearr_49701;
});
var cljs$core$async$state_machine__48101__auto____1 = (function (state_49672){
while(true){
var ret_value__48102__auto__ = (function (){try{while(true){
var result__48103__auto__ = switch__48100__auto__(state_49672);
if(cljs.core.keyword_identical_QMARK_(result__48103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48103__auto__;
}
break;
}
}catch (e49702){var ex__48104__auto__ = e49702;
var statearr_49703_50758 = state_49672;
(statearr_49703_50758[(2)] = ex__48104__auto__);


if(cljs.core.seq((state_49672[(4)]))){
var statearr_49704_50759 = state_49672;
(statearr_49704_50759[(1)] = cljs.core.first((state_49672[(4)])));

} else {
throw ex__48104__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50760 = state_49672;
state_49672 = G__50760;
continue;
} else {
return ret_value__48102__auto__;
}
break;
}
});
cljs$core$async$state_machine__48101__auto__ = function(state_49672){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48101__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48101__auto____1.call(this,state_49672);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48101__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48101__auto____0;
cljs$core$async$state_machine__48101__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48101__auto____1;
return cljs$core$async$state_machine__48101__auto__;
})()
})();
var state__48206__auto__ = (function (){var statearr_49705 = f__48205__auto__();
(statearr_49705[(6)] = c__48204__auto___50735);

return statearr_49705;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48206__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__49708 = arguments.length;
switch (G__49708) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__48204__auto___50762 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48205__auto__ = (function (){var switch__48100__auto__ = (function (state_49740){
var state_val_49741 = (state_49740[(1)]);
if((state_val_49741 === (7))){
var inst_49719 = (state_49740[(7)]);
var inst_49720 = (state_49740[(8)]);
var inst_49719__$1 = (state_49740[(2)]);
var inst_49720__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_49719__$1,(0),null);
var inst_49721 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_49719__$1,(1),null);
var inst_49722 = (inst_49720__$1 == null);
var state_49740__$1 = (function (){var statearr_49742 = state_49740;
(statearr_49742[(9)] = inst_49721);

(statearr_49742[(7)] = inst_49719__$1);

(statearr_49742[(8)] = inst_49720__$1);

return statearr_49742;
})();
if(cljs.core.truth_(inst_49722)){
var statearr_49743_50763 = state_49740__$1;
(statearr_49743_50763[(1)] = (8));

} else {
var statearr_49744_50764 = state_49740__$1;
(statearr_49744_50764[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49741 === (1))){
var inst_49709 = cljs.core.vec(chs);
var inst_49710 = inst_49709;
var state_49740__$1 = (function (){var statearr_49745 = state_49740;
(statearr_49745[(10)] = inst_49710);

return statearr_49745;
})();
var statearr_49746_50765 = state_49740__$1;
(statearr_49746_50765[(2)] = null);

(statearr_49746_50765[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49741 === (4))){
var inst_49710 = (state_49740[(10)]);
var state_49740__$1 = state_49740;
return cljs.core.async.ioc_alts_BANG_(state_49740__$1,(7),inst_49710);
} else {
if((state_val_49741 === (6))){
var inst_49736 = (state_49740[(2)]);
var state_49740__$1 = state_49740;
var statearr_49747_50766 = state_49740__$1;
(statearr_49747_50766[(2)] = inst_49736);

(statearr_49747_50766[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49741 === (3))){
var inst_49738 = (state_49740[(2)]);
var state_49740__$1 = state_49740;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49740__$1,inst_49738);
} else {
if((state_val_49741 === (2))){
var inst_49710 = (state_49740[(10)]);
var inst_49712 = cljs.core.count(inst_49710);
var inst_49713 = (inst_49712 > (0));
var state_49740__$1 = state_49740;
if(cljs.core.truth_(inst_49713)){
var statearr_49749_50767 = state_49740__$1;
(statearr_49749_50767[(1)] = (4));

} else {
var statearr_49750_50769 = state_49740__$1;
(statearr_49750_50769[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49741 === (11))){
var inst_49710 = (state_49740[(10)]);
var inst_49729 = (state_49740[(2)]);
var tmp49748 = inst_49710;
var inst_49710__$1 = tmp49748;
var state_49740__$1 = (function (){var statearr_49751 = state_49740;
(statearr_49751[(10)] = inst_49710__$1);

(statearr_49751[(11)] = inst_49729);

return statearr_49751;
})();
var statearr_49752_50770 = state_49740__$1;
(statearr_49752_50770[(2)] = null);

(statearr_49752_50770[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49741 === (9))){
var inst_49720 = (state_49740[(8)]);
var state_49740__$1 = state_49740;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49740__$1,(11),out,inst_49720);
} else {
if((state_val_49741 === (5))){
var inst_49734 = cljs.core.async.close_BANG_(out);
var state_49740__$1 = state_49740;
var statearr_49753_50774 = state_49740__$1;
(statearr_49753_50774[(2)] = inst_49734);

(statearr_49753_50774[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49741 === (10))){
var inst_49732 = (state_49740[(2)]);
var state_49740__$1 = state_49740;
var statearr_49754_50775 = state_49740__$1;
(statearr_49754_50775[(2)] = inst_49732);

(statearr_49754_50775[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49741 === (8))){
var inst_49721 = (state_49740[(9)]);
var inst_49710 = (state_49740[(10)]);
var inst_49719 = (state_49740[(7)]);
var inst_49720 = (state_49740[(8)]);
var inst_49724 = (function (){var cs = inst_49710;
var vec__49715 = inst_49719;
var v = inst_49720;
var c = inst_49721;
return (function (p1__49706_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__49706_SHARP_);
});
})();
var inst_49725 = cljs.core.filterv(inst_49724,inst_49710);
var inst_49710__$1 = inst_49725;
var state_49740__$1 = (function (){var statearr_49755 = state_49740;
(statearr_49755[(10)] = inst_49710__$1);

return statearr_49755;
})();
var statearr_49756_50776 = state_49740__$1;
(statearr_49756_50776[(2)] = null);

(statearr_49756_50776[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__48101__auto__ = null;
var cljs$core$async$state_machine__48101__auto____0 = (function (){
var statearr_49757 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49757[(0)] = cljs$core$async$state_machine__48101__auto__);

(statearr_49757[(1)] = (1));

return statearr_49757;
});
var cljs$core$async$state_machine__48101__auto____1 = (function (state_49740){
while(true){
var ret_value__48102__auto__ = (function (){try{while(true){
var result__48103__auto__ = switch__48100__auto__(state_49740);
if(cljs.core.keyword_identical_QMARK_(result__48103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48103__auto__;
}
break;
}
}catch (e49758){var ex__48104__auto__ = e49758;
var statearr_49759_50777 = state_49740;
(statearr_49759_50777[(2)] = ex__48104__auto__);


if(cljs.core.seq((state_49740[(4)]))){
var statearr_49760_50778 = state_49740;
(statearr_49760_50778[(1)] = cljs.core.first((state_49740[(4)])));

} else {
throw ex__48104__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50779 = state_49740;
state_49740 = G__50779;
continue;
} else {
return ret_value__48102__auto__;
}
break;
}
});
cljs$core$async$state_machine__48101__auto__ = function(state_49740){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48101__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48101__auto____1.call(this,state_49740);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48101__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48101__auto____0;
cljs$core$async$state_machine__48101__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48101__auto____1;
return cljs$core$async$state_machine__48101__auto__;
})()
})();
var state__48206__auto__ = (function (){var statearr_49761 = f__48205__auto__();
(statearr_49761[(6)] = c__48204__auto___50762);

return statearr_49761;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48206__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__49763 = arguments.length;
switch (G__49763) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__48204__auto___50781 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48205__auto__ = (function (){var switch__48100__auto__ = (function (state_49787){
var state_val_49788 = (state_49787[(1)]);
if((state_val_49788 === (7))){
var inst_49769 = (state_49787[(7)]);
var inst_49769__$1 = (state_49787[(2)]);
var inst_49770 = (inst_49769__$1 == null);
var inst_49771 = cljs.core.not(inst_49770);
var state_49787__$1 = (function (){var statearr_49789 = state_49787;
(statearr_49789[(7)] = inst_49769__$1);

return statearr_49789;
})();
if(inst_49771){
var statearr_49790_50782 = state_49787__$1;
(statearr_49790_50782[(1)] = (8));

} else {
var statearr_49791_50783 = state_49787__$1;
(statearr_49791_50783[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49788 === (1))){
var inst_49764 = (0);
var state_49787__$1 = (function (){var statearr_49792 = state_49787;
(statearr_49792[(8)] = inst_49764);

return statearr_49792;
})();
var statearr_49793_50784 = state_49787__$1;
(statearr_49793_50784[(2)] = null);

(statearr_49793_50784[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49788 === (4))){
var state_49787__$1 = state_49787;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49787__$1,(7),ch);
} else {
if((state_val_49788 === (6))){
var inst_49782 = (state_49787[(2)]);
var state_49787__$1 = state_49787;
var statearr_49794_50785 = state_49787__$1;
(statearr_49794_50785[(2)] = inst_49782);

(statearr_49794_50785[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49788 === (3))){
var inst_49784 = (state_49787[(2)]);
var inst_49785 = cljs.core.async.close_BANG_(out);
var state_49787__$1 = (function (){var statearr_49795 = state_49787;
(statearr_49795[(9)] = inst_49784);

return statearr_49795;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_49787__$1,inst_49785);
} else {
if((state_val_49788 === (2))){
var inst_49764 = (state_49787[(8)]);
var inst_49766 = (inst_49764 < n);
var state_49787__$1 = state_49787;
if(cljs.core.truth_(inst_49766)){
var statearr_49796_50786 = state_49787__$1;
(statearr_49796_50786[(1)] = (4));

} else {
var statearr_49797_50787 = state_49787__$1;
(statearr_49797_50787[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49788 === (11))){
var inst_49764 = (state_49787[(8)]);
var inst_49774 = (state_49787[(2)]);
var inst_49775 = (inst_49764 + (1));
var inst_49764__$1 = inst_49775;
var state_49787__$1 = (function (){var statearr_49798 = state_49787;
(statearr_49798[(8)] = inst_49764__$1);

(statearr_49798[(10)] = inst_49774);

return statearr_49798;
})();
var statearr_49799_50788 = state_49787__$1;
(statearr_49799_50788[(2)] = null);

(statearr_49799_50788[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49788 === (9))){
var state_49787__$1 = state_49787;
var statearr_49800_50789 = state_49787__$1;
(statearr_49800_50789[(2)] = null);

(statearr_49800_50789[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49788 === (5))){
var state_49787__$1 = state_49787;
var statearr_49801_50791 = state_49787__$1;
(statearr_49801_50791[(2)] = null);

(statearr_49801_50791[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49788 === (10))){
var inst_49779 = (state_49787[(2)]);
var state_49787__$1 = state_49787;
var statearr_49802_50792 = state_49787__$1;
(statearr_49802_50792[(2)] = inst_49779);

(statearr_49802_50792[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49788 === (8))){
var inst_49769 = (state_49787[(7)]);
var state_49787__$1 = state_49787;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49787__$1,(11),out,inst_49769);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__48101__auto__ = null;
var cljs$core$async$state_machine__48101__auto____0 = (function (){
var statearr_49803 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_49803[(0)] = cljs$core$async$state_machine__48101__auto__);

(statearr_49803[(1)] = (1));

return statearr_49803;
});
var cljs$core$async$state_machine__48101__auto____1 = (function (state_49787){
while(true){
var ret_value__48102__auto__ = (function (){try{while(true){
var result__48103__auto__ = switch__48100__auto__(state_49787);
if(cljs.core.keyword_identical_QMARK_(result__48103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48103__auto__;
}
break;
}
}catch (e49804){var ex__48104__auto__ = e49804;
var statearr_49805_50793 = state_49787;
(statearr_49805_50793[(2)] = ex__48104__auto__);


if(cljs.core.seq((state_49787[(4)]))){
var statearr_49806_50794 = state_49787;
(statearr_49806_50794[(1)] = cljs.core.first((state_49787[(4)])));

} else {
throw ex__48104__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50795 = state_49787;
state_49787 = G__50795;
continue;
} else {
return ret_value__48102__auto__;
}
break;
}
});
cljs$core$async$state_machine__48101__auto__ = function(state_49787){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48101__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48101__auto____1.call(this,state_49787);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48101__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48101__auto____0;
cljs$core$async$state_machine__48101__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48101__auto____1;
return cljs$core$async$state_machine__48101__auto__;
})()
})();
var state__48206__auto__ = (function (){var statearr_49807 = f__48205__auto__();
(statearr_49807[(6)] = c__48204__auto___50781);

return statearr_49807;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48206__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async49809 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49809 = (function (f,ch,meta49810){
this.f = f;
this.ch = ch;
this.meta49810 = meta49810;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async49809.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49811,meta49810__$1){
var self__ = this;
var _49811__$1 = this;
return (new cljs.core.async.t_cljs$core$async49809(self__.f,self__.ch,meta49810__$1));
}));

(cljs.core.async.t_cljs$core$async49809.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49811){
var self__ = this;
var _49811__$1 = this;
return self__.meta49810;
}));

(cljs.core.async.t_cljs$core$async49809.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49809.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async49809.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async49809.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49809.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async49812 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49812 = (function (f,ch,meta49810,_,fn1,meta49813){
this.f = f;
this.ch = ch;
this.meta49810 = meta49810;
this._ = _;
this.fn1 = fn1;
this.meta49813 = meta49813;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async49812.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49814,meta49813__$1){
var self__ = this;
var _49814__$1 = this;
return (new cljs.core.async.t_cljs$core$async49812(self__.f,self__.ch,self__.meta49810,self__._,self__.fn1,meta49813__$1));
}));

(cljs.core.async.t_cljs$core$async49812.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49814){
var self__ = this;
var _49814__$1 = this;
return self__.meta49813;
}));

(cljs.core.async.t_cljs$core$async49812.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49812.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async49812.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async49812.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__49808_SHARP_){
var G__49815 = (((p1__49808_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__49808_SHARP_) : self__.f.call(null,p1__49808_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__49815) : f1.call(null,G__49815));
});
}));

(cljs.core.async.t_cljs$core$async49812.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta49810","meta49810",1385914304,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async49809","cljs.core.async/t_cljs$core$async49809",-1374594260,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta49813","meta49813",-176268941,null)], null);
}));

(cljs.core.async.t_cljs$core$async49812.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async49812.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49812");

(cljs.core.async.t_cljs$core$async49812.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async49812");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49812.
 */
cljs.core.async.__GT_t_cljs$core$async49812 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async49812(f__$1,ch__$1,meta49810__$1,___$2,fn1__$1,meta49813){
return (new cljs.core.async.t_cljs$core$async49812(f__$1,ch__$1,meta49810__$1,___$2,fn1__$1,meta49813));
});

}

return (new cljs.core.async.t_cljs$core$async49812(self__.f,self__.ch,self__.meta49810,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4221__auto__ = ret;
if(cljs.core.truth_(and__4221__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4221__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__49816 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__49816) : self__.f.call(null,G__49816));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async49809.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49809.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async49809.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta49810","meta49810",1385914304,null)], null);
}));

(cljs.core.async.t_cljs$core$async49809.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async49809.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49809");

(cljs.core.async.t_cljs$core$async49809.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async49809");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49809.
 */
cljs.core.async.__GT_t_cljs$core$async49809 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async49809(f__$1,ch__$1,meta49810){
return (new cljs.core.async.t_cljs$core$async49809(f__$1,ch__$1,meta49810));
});

}

return (new cljs.core.async.t_cljs$core$async49809(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async49817 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49817 = (function (f,ch,meta49818){
this.f = f;
this.ch = ch;
this.meta49818 = meta49818;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async49817.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49819,meta49818__$1){
var self__ = this;
var _49819__$1 = this;
return (new cljs.core.async.t_cljs$core$async49817(self__.f,self__.ch,meta49818__$1));
}));

(cljs.core.async.t_cljs$core$async49817.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49819){
var self__ = this;
var _49819__$1 = this;
return self__.meta49818;
}));

(cljs.core.async.t_cljs$core$async49817.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49817.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async49817.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49817.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async49817.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49817.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async49817.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta49818","meta49818",-1663181050,null)], null);
}));

(cljs.core.async.t_cljs$core$async49817.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async49817.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49817");

(cljs.core.async.t_cljs$core$async49817.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async49817");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49817.
 */
cljs.core.async.__GT_t_cljs$core$async49817 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async49817(f__$1,ch__$1,meta49818){
return (new cljs.core.async.t_cljs$core$async49817(f__$1,ch__$1,meta49818));
});

}

return (new cljs.core.async.t_cljs$core$async49817(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async49820 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49820 = (function (p,ch,meta49821){
this.p = p;
this.ch = ch;
this.meta49821 = meta49821;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async49820.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49822,meta49821__$1){
var self__ = this;
var _49822__$1 = this;
return (new cljs.core.async.t_cljs$core$async49820(self__.p,self__.ch,meta49821__$1));
}));

(cljs.core.async.t_cljs$core$async49820.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49822){
var self__ = this;
var _49822__$1 = this;
return self__.meta49821;
}));

(cljs.core.async.t_cljs$core$async49820.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49820.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async49820.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async49820.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49820.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async49820.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49820.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async49820.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta49821","meta49821",-1300457512,null)], null);
}));

(cljs.core.async.t_cljs$core$async49820.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async49820.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49820");

(cljs.core.async.t_cljs$core$async49820.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async49820");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49820.
 */
cljs.core.async.__GT_t_cljs$core$async49820 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async49820(p__$1,ch__$1,meta49821){
return (new cljs.core.async.t_cljs$core$async49820(p__$1,ch__$1,meta49821));
});

}

return (new cljs.core.async.t_cljs$core$async49820(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__49824 = arguments.length;
switch (G__49824) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__48204__auto___50817 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48205__auto__ = (function (){var switch__48100__auto__ = (function (state_49845){
var state_val_49846 = (state_49845[(1)]);
if((state_val_49846 === (7))){
var inst_49841 = (state_49845[(2)]);
var state_49845__$1 = state_49845;
var statearr_49847_50821 = state_49845__$1;
(statearr_49847_50821[(2)] = inst_49841);

(statearr_49847_50821[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49846 === (1))){
var state_49845__$1 = state_49845;
var statearr_49848_50822 = state_49845__$1;
(statearr_49848_50822[(2)] = null);

(statearr_49848_50822[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49846 === (4))){
var inst_49827 = (state_49845[(7)]);
var inst_49827__$1 = (state_49845[(2)]);
var inst_49828 = (inst_49827__$1 == null);
var state_49845__$1 = (function (){var statearr_49849 = state_49845;
(statearr_49849[(7)] = inst_49827__$1);

return statearr_49849;
})();
if(cljs.core.truth_(inst_49828)){
var statearr_49850_50823 = state_49845__$1;
(statearr_49850_50823[(1)] = (5));

} else {
var statearr_49851_50824 = state_49845__$1;
(statearr_49851_50824[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49846 === (6))){
var inst_49827 = (state_49845[(7)]);
var inst_49832 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_49827) : p.call(null,inst_49827));
var state_49845__$1 = state_49845;
if(cljs.core.truth_(inst_49832)){
var statearr_49852_50828 = state_49845__$1;
(statearr_49852_50828[(1)] = (8));

} else {
var statearr_49853_50829 = state_49845__$1;
(statearr_49853_50829[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49846 === (3))){
var inst_49843 = (state_49845[(2)]);
var state_49845__$1 = state_49845;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49845__$1,inst_49843);
} else {
if((state_val_49846 === (2))){
var state_49845__$1 = state_49845;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49845__$1,(4),ch);
} else {
if((state_val_49846 === (11))){
var inst_49835 = (state_49845[(2)]);
var state_49845__$1 = state_49845;
var statearr_49854_50830 = state_49845__$1;
(statearr_49854_50830[(2)] = inst_49835);

(statearr_49854_50830[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49846 === (9))){
var state_49845__$1 = state_49845;
var statearr_49855_50831 = state_49845__$1;
(statearr_49855_50831[(2)] = null);

(statearr_49855_50831[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49846 === (5))){
var inst_49830 = cljs.core.async.close_BANG_(out);
var state_49845__$1 = state_49845;
var statearr_49856_50832 = state_49845__$1;
(statearr_49856_50832[(2)] = inst_49830);

(statearr_49856_50832[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49846 === (10))){
var inst_49838 = (state_49845[(2)]);
var state_49845__$1 = (function (){var statearr_49857 = state_49845;
(statearr_49857[(8)] = inst_49838);

return statearr_49857;
})();
var statearr_49858_50840 = state_49845__$1;
(statearr_49858_50840[(2)] = null);

(statearr_49858_50840[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49846 === (8))){
var inst_49827 = (state_49845[(7)]);
var state_49845__$1 = state_49845;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49845__$1,(11),out,inst_49827);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__48101__auto__ = null;
var cljs$core$async$state_machine__48101__auto____0 = (function (){
var statearr_49859 = [null,null,null,null,null,null,null,null,null];
(statearr_49859[(0)] = cljs$core$async$state_machine__48101__auto__);

(statearr_49859[(1)] = (1));

return statearr_49859;
});
var cljs$core$async$state_machine__48101__auto____1 = (function (state_49845){
while(true){
var ret_value__48102__auto__ = (function (){try{while(true){
var result__48103__auto__ = switch__48100__auto__(state_49845);
if(cljs.core.keyword_identical_QMARK_(result__48103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48103__auto__;
}
break;
}
}catch (e49860){var ex__48104__auto__ = e49860;
var statearr_49861_50847 = state_49845;
(statearr_49861_50847[(2)] = ex__48104__auto__);


if(cljs.core.seq((state_49845[(4)]))){
var statearr_49862_50848 = state_49845;
(statearr_49862_50848[(1)] = cljs.core.first((state_49845[(4)])));

} else {
throw ex__48104__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50849 = state_49845;
state_49845 = G__50849;
continue;
} else {
return ret_value__48102__auto__;
}
break;
}
});
cljs$core$async$state_machine__48101__auto__ = function(state_49845){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48101__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48101__auto____1.call(this,state_49845);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48101__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48101__auto____0;
cljs$core$async$state_machine__48101__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48101__auto____1;
return cljs$core$async$state_machine__48101__auto__;
})()
})();
var state__48206__auto__ = (function (){var statearr_49863 = f__48205__auto__();
(statearr_49863[(6)] = c__48204__auto___50817);

return statearr_49863;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48206__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__49865 = arguments.length;
switch (G__49865) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__48204__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48205__auto__ = (function (){var switch__48100__auto__ = (function (state_49927){
var state_val_49928 = (state_49927[(1)]);
if((state_val_49928 === (7))){
var inst_49923 = (state_49927[(2)]);
var state_49927__$1 = state_49927;
var statearr_49929_50857 = state_49927__$1;
(statearr_49929_50857[(2)] = inst_49923);

(statearr_49929_50857[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49928 === (20))){
var inst_49893 = (state_49927[(7)]);
var inst_49904 = (state_49927[(2)]);
var inst_49905 = cljs.core.next(inst_49893);
var inst_49879 = inst_49905;
var inst_49880 = null;
var inst_49881 = (0);
var inst_49882 = (0);
var state_49927__$1 = (function (){var statearr_49930 = state_49927;
(statearr_49930[(8)] = inst_49880);

(statearr_49930[(9)] = inst_49881);

(statearr_49930[(10)] = inst_49882);

(statearr_49930[(11)] = inst_49879);

(statearr_49930[(12)] = inst_49904);

return statearr_49930;
})();
var statearr_49931_50864 = state_49927__$1;
(statearr_49931_50864[(2)] = null);

(statearr_49931_50864[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49928 === (1))){
var state_49927__$1 = state_49927;
var statearr_49932_50865 = state_49927__$1;
(statearr_49932_50865[(2)] = null);

(statearr_49932_50865[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49928 === (4))){
var inst_49868 = (state_49927[(13)]);
var inst_49868__$1 = (state_49927[(2)]);
var inst_49869 = (inst_49868__$1 == null);
var state_49927__$1 = (function (){var statearr_49933 = state_49927;
(statearr_49933[(13)] = inst_49868__$1);

return statearr_49933;
})();
if(cljs.core.truth_(inst_49869)){
var statearr_49934_50866 = state_49927__$1;
(statearr_49934_50866[(1)] = (5));

} else {
var statearr_49935_50867 = state_49927__$1;
(statearr_49935_50867[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49928 === (15))){
var state_49927__$1 = state_49927;
var statearr_49939_50868 = state_49927__$1;
(statearr_49939_50868[(2)] = null);

(statearr_49939_50868[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49928 === (21))){
var state_49927__$1 = state_49927;
var statearr_49940_50869 = state_49927__$1;
(statearr_49940_50869[(2)] = null);

(statearr_49940_50869[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49928 === (13))){
var inst_49880 = (state_49927[(8)]);
var inst_49881 = (state_49927[(9)]);
var inst_49882 = (state_49927[(10)]);
var inst_49879 = (state_49927[(11)]);
var inst_49889 = (state_49927[(2)]);
var inst_49890 = (inst_49882 + (1));
var tmp49936 = inst_49880;
var tmp49937 = inst_49881;
var tmp49938 = inst_49879;
var inst_49879__$1 = tmp49938;
var inst_49880__$1 = tmp49936;
var inst_49881__$1 = tmp49937;
var inst_49882__$1 = inst_49890;
var state_49927__$1 = (function (){var statearr_49941 = state_49927;
(statearr_49941[(8)] = inst_49880__$1);

(statearr_49941[(9)] = inst_49881__$1);

(statearr_49941[(14)] = inst_49889);

(statearr_49941[(10)] = inst_49882__$1);

(statearr_49941[(11)] = inst_49879__$1);

return statearr_49941;
})();
var statearr_49942_50876 = state_49927__$1;
(statearr_49942_50876[(2)] = null);

(statearr_49942_50876[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49928 === (22))){
var state_49927__$1 = state_49927;
var statearr_49943_50877 = state_49927__$1;
(statearr_49943_50877[(2)] = null);

(statearr_49943_50877[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49928 === (6))){
var inst_49868 = (state_49927[(13)]);
var inst_49877 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_49868) : f.call(null,inst_49868));
var inst_49878 = cljs.core.seq(inst_49877);
var inst_49879 = inst_49878;
var inst_49880 = null;
var inst_49881 = (0);
var inst_49882 = (0);
var state_49927__$1 = (function (){var statearr_49944 = state_49927;
(statearr_49944[(8)] = inst_49880);

(statearr_49944[(9)] = inst_49881);

(statearr_49944[(10)] = inst_49882);

(statearr_49944[(11)] = inst_49879);

return statearr_49944;
})();
var statearr_49945_50878 = state_49927__$1;
(statearr_49945_50878[(2)] = null);

(statearr_49945_50878[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49928 === (17))){
var inst_49893 = (state_49927[(7)]);
var inst_49897 = cljs.core.chunk_first(inst_49893);
var inst_49898 = cljs.core.chunk_rest(inst_49893);
var inst_49899 = cljs.core.count(inst_49897);
var inst_49879 = inst_49898;
var inst_49880 = inst_49897;
var inst_49881 = inst_49899;
var inst_49882 = (0);
var state_49927__$1 = (function (){var statearr_49946 = state_49927;
(statearr_49946[(8)] = inst_49880);

(statearr_49946[(9)] = inst_49881);

(statearr_49946[(10)] = inst_49882);

(statearr_49946[(11)] = inst_49879);

return statearr_49946;
})();
var statearr_49947_50885 = state_49927__$1;
(statearr_49947_50885[(2)] = null);

(statearr_49947_50885[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49928 === (3))){
var inst_49925 = (state_49927[(2)]);
var state_49927__$1 = state_49927;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49927__$1,inst_49925);
} else {
if((state_val_49928 === (12))){
var inst_49913 = (state_49927[(2)]);
var state_49927__$1 = state_49927;
var statearr_49948_50886 = state_49927__$1;
(statearr_49948_50886[(2)] = inst_49913);

(statearr_49948_50886[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49928 === (2))){
var state_49927__$1 = state_49927;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49927__$1,(4),in$);
} else {
if((state_val_49928 === (23))){
var inst_49921 = (state_49927[(2)]);
var state_49927__$1 = state_49927;
var statearr_49949_50887 = state_49927__$1;
(statearr_49949_50887[(2)] = inst_49921);

(statearr_49949_50887[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49928 === (19))){
var inst_49908 = (state_49927[(2)]);
var state_49927__$1 = state_49927;
var statearr_49950_50888 = state_49927__$1;
(statearr_49950_50888[(2)] = inst_49908);

(statearr_49950_50888[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49928 === (11))){
var inst_49893 = (state_49927[(7)]);
var inst_49879 = (state_49927[(11)]);
var inst_49893__$1 = cljs.core.seq(inst_49879);
var state_49927__$1 = (function (){var statearr_49951 = state_49927;
(statearr_49951[(7)] = inst_49893__$1);

return statearr_49951;
})();
if(inst_49893__$1){
var statearr_49952_50889 = state_49927__$1;
(statearr_49952_50889[(1)] = (14));

} else {
var statearr_49953_50890 = state_49927__$1;
(statearr_49953_50890[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49928 === (9))){
var inst_49915 = (state_49927[(2)]);
var inst_49916 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_49927__$1 = (function (){var statearr_49954 = state_49927;
(statearr_49954[(15)] = inst_49915);

return statearr_49954;
})();
if(cljs.core.truth_(inst_49916)){
var statearr_49955_50891 = state_49927__$1;
(statearr_49955_50891[(1)] = (21));

} else {
var statearr_49956_50892 = state_49927__$1;
(statearr_49956_50892[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49928 === (5))){
var inst_49871 = cljs.core.async.close_BANG_(out);
var state_49927__$1 = state_49927;
var statearr_49957_50893 = state_49927__$1;
(statearr_49957_50893[(2)] = inst_49871);

(statearr_49957_50893[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49928 === (14))){
var inst_49893 = (state_49927[(7)]);
var inst_49895 = cljs.core.chunked_seq_QMARK_(inst_49893);
var state_49927__$1 = state_49927;
if(inst_49895){
var statearr_49958_50894 = state_49927__$1;
(statearr_49958_50894[(1)] = (17));

} else {
var statearr_49959_50895 = state_49927__$1;
(statearr_49959_50895[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49928 === (16))){
var inst_49911 = (state_49927[(2)]);
var state_49927__$1 = state_49927;
var statearr_49960_50896 = state_49927__$1;
(statearr_49960_50896[(2)] = inst_49911);

(statearr_49960_50896[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49928 === (10))){
var inst_49880 = (state_49927[(8)]);
var inst_49882 = (state_49927[(10)]);
var inst_49887 = cljs.core._nth(inst_49880,inst_49882);
var state_49927__$1 = state_49927;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49927__$1,(13),out,inst_49887);
} else {
if((state_val_49928 === (18))){
var inst_49893 = (state_49927[(7)]);
var inst_49902 = cljs.core.first(inst_49893);
var state_49927__$1 = state_49927;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49927__$1,(20),out,inst_49902);
} else {
if((state_val_49928 === (8))){
var inst_49881 = (state_49927[(9)]);
var inst_49882 = (state_49927[(10)]);
var inst_49884 = (inst_49882 < inst_49881);
var inst_49885 = inst_49884;
var state_49927__$1 = state_49927;
if(cljs.core.truth_(inst_49885)){
var statearr_49961_50897 = state_49927__$1;
(statearr_49961_50897[(1)] = (10));

} else {
var statearr_49962_50900 = state_49927__$1;
(statearr_49962_50900[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__48101__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__48101__auto____0 = (function (){
var statearr_49963 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49963[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__48101__auto__);

(statearr_49963[(1)] = (1));

return statearr_49963;
});
var cljs$core$async$mapcat_STAR__$_state_machine__48101__auto____1 = (function (state_49927){
while(true){
var ret_value__48102__auto__ = (function (){try{while(true){
var result__48103__auto__ = switch__48100__auto__(state_49927);
if(cljs.core.keyword_identical_QMARK_(result__48103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48103__auto__;
}
break;
}
}catch (e49964){var ex__48104__auto__ = e49964;
var statearr_49965_50901 = state_49927;
(statearr_49965_50901[(2)] = ex__48104__auto__);


if(cljs.core.seq((state_49927[(4)]))){
var statearr_49966_50902 = state_49927;
(statearr_49966_50902[(1)] = cljs.core.first((state_49927[(4)])));

} else {
throw ex__48104__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50904 = state_49927;
state_49927 = G__50904;
continue;
} else {
return ret_value__48102__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__48101__auto__ = function(state_49927){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__48101__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__48101__auto____1.call(this,state_49927);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__48101__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__48101__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__48101__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__48101__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__48101__auto__;
})()
})();
var state__48206__auto__ = (function (){var statearr_49967 = f__48205__auto__();
(statearr_49967[(6)] = c__48204__auto__);

return statearr_49967;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48206__auto__);
}));

return c__48204__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__49969 = arguments.length;
switch (G__49969) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__49971 = arguments.length;
switch (G__49971) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__49973 = arguments.length;
switch (G__49973) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__48204__auto___50921 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48205__auto__ = (function (){var switch__48100__auto__ = (function (state_49997){
var state_val_49998 = (state_49997[(1)]);
if((state_val_49998 === (7))){
var inst_49992 = (state_49997[(2)]);
var state_49997__$1 = state_49997;
var statearr_49999_50922 = state_49997__$1;
(statearr_49999_50922[(2)] = inst_49992);

(statearr_49999_50922[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49998 === (1))){
var inst_49974 = null;
var state_49997__$1 = (function (){var statearr_50000 = state_49997;
(statearr_50000[(7)] = inst_49974);

return statearr_50000;
})();
var statearr_50001_50923 = state_49997__$1;
(statearr_50001_50923[(2)] = null);

(statearr_50001_50923[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49998 === (4))){
var inst_49977 = (state_49997[(8)]);
var inst_49977__$1 = (state_49997[(2)]);
var inst_49978 = (inst_49977__$1 == null);
var inst_49979 = cljs.core.not(inst_49978);
var state_49997__$1 = (function (){var statearr_50002 = state_49997;
(statearr_50002[(8)] = inst_49977__$1);

return statearr_50002;
})();
if(inst_49979){
var statearr_50003_50924 = state_49997__$1;
(statearr_50003_50924[(1)] = (5));

} else {
var statearr_50004_50925 = state_49997__$1;
(statearr_50004_50925[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49998 === (6))){
var state_49997__$1 = state_49997;
var statearr_50005_50926 = state_49997__$1;
(statearr_50005_50926[(2)] = null);

(statearr_50005_50926[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49998 === (3))){
var inst_49994 = (state_49997[(2)]);
var inst_49995 = cljs.core.async.close_BANG_(out);
var state_49997__$1 = (function (){var statearr_50006 = state_49997;
(statearr_50006[(9)] = inst_49994);

return statearr_50006;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_49997__$1,inst_49995);
} else {
if((state_val_49998 === (2))){
var state_49997__$1 = state_49997;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49997__$1,(4),ch);
} else {
if((state_val_49998 === (11))){
var inst_49977 = (state_49997[(8)]);
var inst_49986 = (state_49997[(2)]);
var inst_49974 = inst_49977;
var state_49997__$1 = (function (){var statearr_50007 = state_49997;
(statearr_50007[(10)] = inst_49986);

(statearr_50007[(7)] = inst_49974);

return statearr_50007;
})();
var statearr_50008_50928 = state_49997__$1;
(statearr_50008_50928[(2)] = null);

(statearr_50008_50928[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49998 === (9))){
var inst_49977 = (state_49997[(8)]);
var state_49997__$1 = state_49997;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49997__$1,(11),out,inst_49977);
} else {
if((state_val_49998 === (5))){
var inst_49974 = (state_49997[(7)]);
var inst_49977 = (state_49997[(8)]);
var inst_49981 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_49977,inst_49974);
var state_49997__$1 = state_49997;
if(inst_49981){
var statearr_50010_50930 = state_49997__$1;
(statearr_50010_50930[(1)] = (8));

} else {
var statearr_50011_50931 = state_49997__$1;
(statearr_50011_50931[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49998 === (10))){
var inst_49989 = (state_49997[(2)]);
var state_49997__$1 = state_49997;
var statearr_50012_50932 = state_49997__$1;
(statearr_50012_50932[(2)] = inst_49989);

(statearr_50012_50932[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49998 === (8))){
var inst_49974 = (state_49997[(7)]);
var tmp50009 = inst_49974;
var inst_49974__$1 = tmp50009;
var state_49997__$1 = (function (){var statearr_50013 = state_49997;
(statearr_50013[(7)] = inst_49974__$1);

return statearr_50013;
})();
var statearr_50014_50933 = state_49997__$1;
(statearr_50014_50933[(2)] = null);

(statearr_50014_50933[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__48101__auto__ = null;
var cljs$core$async$state_machine__48101__auto____0 = (function (){
var statearr_50015 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_50015[(0)] = cljs$core$async$state_machine__48101__auto__);

(statearr_50015[(1)] = (1));

return statearr_50015;
});
var cljs$core$async$state_machine__48101__auto____1 = (function (state_49997){
while(true){
var ret_value__48102__auto__ = (function (){try{while(true){
var result__48103__auto__ = switch__48100__auto__(state_49997);
if(cljs.core.keyword_identical_QMARK_(result__48103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48103__auto__;
}
break;
}
}catch (e50016){var ex__48104__auto__ = e50016;
var statearr_50017_50934 = state_49997;
(statearr_50017_50934[(2)] = ex__48104__auto__);


if(cljs.core.seq((state_49997[(4)]))){
var statearr_50018_50935 = state_49997;
(statearr_50018_50935[(1)] = cljs.core.first((state_49997[(4)])));

} else {
throw ex__48104__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50936 = state_49997;
state_49997 = G__50936;
continue;
} else {
return ret_value__48102__auto__;
}
break;
}
});
cljs$core$async$state_machine__48101__auto__ = function(state_49997){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48101__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48101__auto____1.call(this,state_49997);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48101__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48101__auto____0;
cljs$core$async$state_machine__48101__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48101__auto____1;
return cljs$core$async$state_machine__48101__auto__;
})()
})();
var state__48206__auto__ = (function (){var statearr_50019 = f__48205__auto__();
(statearr_50019[(6)] = c__48204__auto___50921);

return statearr_50019;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48206__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__50021 = arguments.length;
switch (G__50021) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__48204__auto___50938 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48205__auto__ = (function (){var switch__48100__auto__ = (function (state_50059){
var state_val_50060 = (state_50059[(1)]);
if((state_val_50060 === (7))){
var inst_50055 = (state_50059[(2)]);
var state_50059__$1 = state_50059;
var statearr_50061_50945 = state_50059__$1;
(statearr_50061_50945[(2)] = inst_50055);

(statearr_50061_50945[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50060 === (1))){
var inst_50022 = (new Array(n));
var inst_50023 = inst_50022;
var inst_50024 = (0);
var state_50059__$1 = (function (){var statearr_50062 = state_50059;
(statearr_50062[(7)] = inst_50024);

(statearr_50062[(8)] = inst_50023);

return statearr_50062;
})();
var statearr_50063_50946 = state_50059__$1;
(statearr_50063_50946[(2)] = null);

(statearr_50063_50946[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50060 === (4))){
var inst_50027 = (state_50059[(9)]);
var inst_50027__$1 = (state_50059[(2)]);
var inst_50028 = (inst_50027__$1 == null);
var inst_50029 = cljs.core.not(inst_50028);
var state_50059__$1 = (function (){var statearr_50064 = state_50059;
(statearr_50064[(9)] = inst_50027__$1);

return statearr_50064;
})();
if(inst_50029){
var statearr_50065_50948 = state_50059__$1;
(statearr_50065_50948[(1)] = (5));

} else {
var statearr_50066_50949 = state_50059__$1;
(statearr_50066_50949[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50060 === (15))){
var inst_50049 = (state_50059[(2)]);
var state_50059__$1 = state_50059;
var statearr_50067_50954 = state_50059__$1;
(statearr_50067_50954[(2)] = inst_50049);

(statearr_50067_50954[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50060 === (13))){
var state_50059__$1 = state_50059;
var statearr_50068_50959 = state_50059__$1;
(statearr_50068_50959[(2)] = null);

(statearr_50068_50959[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50060 === (6))){
var inst_50024 = (state_50059[(7)]);
var inst_50045 = (inst_50024 > (0));
var state_50059__$1 = state_50059;
if(cljs.core.truth_(inst_50045)){
var statearr_50069_50961 = state_50059__$1;
(statearr_50069_50961[(1)] = (12));

} else {
var statearr_50070_50962 = state_50059__$1;
(statearr_50070_50962[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50060 === (3))){
var inst_50057 = (state_50059[(2)]);
var state_50059__$1 = state_50059;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50059__$1,inst_50057);
} else {
if((state_val_50060 === (12))){
var inst_50023 = (state_50059[(8)]);
var inst_50047 = cljs.core.vec(inst_50023);
var state_50059__$1 = state_50059;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50059__$1,(15),out,inst_50047);
} else {
if((state_val_50060 === (2))){
var state_50059__$1 = state_50059;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50059__$1,(4),ch);
} else {
if((state_val_50060 === (11))){
var inst_50039 = (state_50059[(2)]);
var inst_50040 = (new Array(n));
var inst_50023 = inst_50040;
var inst_50024 = (0);
var state_50059__$1 = (function (){var statearr_50071 = state_50059;
(statearr_50071[(10)] = inst_50039);

(statearr_50071[(7)] = inst_50024);

(statearr_50071[(8)] = inst_50023);

return statearr_50071;
})();
var statearr_50072_50968 = state_50059__$1;
(statearr_50072_50968[(2)] = null);

(statearr_50072_50968[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50060 === (9))){
var inst_50023 = (state_50059[(8)]);
var inst_50037 = cljs.core.vec(inst_50023);
var state_50059__$1 = state_50059;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50059__$1,(11),out,inst_50037);
} else {
if((state_val_50060 === (5))){
var inst_50032 = (state_50059[(11)]);
var inst_50024 = (state_50059[(7)]);
var inst_50023 = (state_50059[(8)]);
var inst_50027 = (state_50059[(9)]);
var inst_50031 = (inst_50023[inst_50024] = inst_50027);
var inst_50032__$1 = (inst_50024 + (1));
var inst_50033 = (inst_50032__$1 < n);
var state_50059__$1 = (function (){var statearr_50073 = state_50059;
(statearr_50073[(11)] = inst_50032__$1);

(statearr_50073[(12)] = inst_50031);

return statearr_50073;
})();
if(cljs.core.truth_(inst_50033)){
var statearr_50074_50989 = state_50059__$1;
(statearr_50074_50989[(1)] = (8));

} else {
var statearr_50075_50990 = state_50059__$1;
(statearr_50075_50990[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50060 === (14))){
var inst_50052 = (state_50059[(2)]);
var inst_50053 = cljs.core.async.close_BANG_(out);
var state_50059__$1 = (function (){var statearr_50077 = state_50059;
(statearr_50077[(13)] = inst_50052);

return statearr_50077;
})();
var statearr_50078_50995 = state_50059__$1;
(statearr_50078_50995[(2)] = inst_50053);

(statearr_50078_50995[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50060 === (10))){
var inst_50043 = (state_50059[(2)]);
var state_50059__$1 = state_50059;
var statearr_50079_50999 = state_50059__$1;
(statearr_50079_50999[(2)] = inst_50043);

(statearr_50079_50999[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50060 === (8))){
var inst_50032 = (state_50059[(11)]);
var inst_50023 = (state_50059[(8)]);
var tmp50076 = inst_50023;
var inst_50023__$1 = tmp50076;
var inst_50024 = inst_50032;
var state_50059__$1 = (function (){var statearr_50080 = state_50059;
(statearr_50080[(7)] = inst_50024);

(statearr_50080[(8)] = inst_50023__$1);

return statearr_50080;
})();
var statearr_50081_51000 = state_50059__$1;
(statearr_50081_51000[(2)] = null);

(statearr_50081_51000[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__48101__auto__ = null;
var cljs$core$async$state_machine__48101__auto____0 = (function (){
var statearr_50082 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50082[(0)] = cljs$core$async$state_machine__48101__auto__);

(statearr_50082[(1)] = (1));

return statearr_50082;
});
var cljs$core$async$state_machine__48101__auto____1 = (function (state_50059){
while(true){
var ret_value__48102__auto__ = (function (){try{while(true){
var result__48103__auto__ = switch__48100__auto__(state_50059);
if(cljs.core.keyword_identical_QMARK_(result__48103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48103__auto__;
}
break;
}
}catch (e50083){var ex__48104__auto__ = e50083;
var statearr_50084_51001 = state_50059;
(statearr_50084_51001[(2)] = ex__48104__auto__);


if(cljs.core.seq((state_50059[(4)]))){
var statearr_50085_51004 = state_50059;
(statearr_50085_51004[(1)] = cljs.core.first((state_50059[(4)])));

} else {
throw ex__48104__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51005 = state_50059;
state_50059 = G__51005;
continue;
} else {
return ret_value__48102__auto__;
}
break;
}
});
cljs$core$async$state_machine__48101__auto__ = function(state_50059){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48101__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48101__auto____1.call(this,state_50059);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48101__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48101__auto____0;
cljs$core$async$state_machine__48101__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48101__auto____1;
return cljs$core$async$state_machine__48101__auto__;
})()
})();
var state__48206__auto__ = (function (){var statearr_50086 = f__48205__auto__();
(statearr_50086[(6)] = c__48204__auto___50938);

return statearr_50086;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48206__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__50088 = arguments.length;
switch (G__50088) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__48204__auto___51007 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48205__auto__ = (function (){var switch__48100__auto__ = (function (state_50133){
var state_val_50134 = (state_50133[(1)]);
if((state_val_50134 === (7))){
var inst_50129 = (state_50133[(2)]);
var state_50133__$1 = state_50133;
var statearr_50135_51008 = state_50133__$1;
(statearr_50135_51008[(2)] = inst_50129);

(statearr_50135_51008[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50134 === (1))){
var inst_50089 = [];
var inst_50090 = inst_50089;
var inst_50091 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_50133__$1 = (function (){var statearr_50136 = state_50133;
(statearr_50136[(7)] = inst_50091);

(statearr_50136[(8)] = inst_50090);

return statearr_50136;
})();
var statearr_50137_51009 = state_50133__$1;
(statearr_50137_51009[(2)] = null);

(statearr_50137_51009[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50134 === (4))){
var inst_50094 = (state_50133[(9)]);
var inst_50094__$1 = (state_50133[(2)]);
var inst_50095 = (inst_50094__$1 == null);
var inst_50096 = cljs.core.not(inst_50095);
var state_50133__$1 = (function (){var statearr_50138 = state_50133;
(statearr_50138[(9)] = inst_50094__$1);

return statearr_50138;
})();
if(inst_50096){
var statearr_50139_51010 = state_50133__$1;
(statearr_50139_51010[(1)] = (5));

} else {
var statearr_50140_51011 = state_50133__$1;
(statearr_50140_51011[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50134 === (15))){
var inst_50090 = (state_50133[(8)]);
var inst_50121 = cljs.core.vec(inst_50090);
var state_50133__$1 = state_50133;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50133__$1,(18),out,inst_50121);
} else {
if((state_val_50134 === (13))){
var inst_50116 = (state_50133[(2)]);
var state_50133__$1 = state_50133;
var statearr_50141_51018 = state_50133__$1;
(statearr_50141_51018[(2)] = inst_50116);

(statearr_50141_51018[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50134 === (6))){
var inst_50090 = (state_50133[(8)]);
var inst_50118 = inst_50090.length;
var inst_50119 = (inst_50118 > (0));
var state_50133__$1 = state_50133;
if(cljs.core.truth_(inst_50119)){
var statearr_50142_51024 = state_50133__$1;
(statearr_50142_51024[(1)] = (15));

} else {
var statearr_50143_51096 = state_50133__$1;
(statearr_50143_51096[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50134 === (17))){
var inst_50126 = (state_50133[(2)]);
var inst_50127 = cljs.core.async.close_BANG_(out);
var state_50133__$1 = (function (){var statearr_50144 = state_50133;
(statearr_50144[(10)] = inst_50126);

return statearr_50144;
})();
var statearr_50145_51097 = state_50133__$1;
(statearr_50145_51097[(2)] = inst_50127);

(statearr_50145_51097[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50134 === (3))){
var inst_50131 = (state_50133[(2)]);
var state_50133__$1 = state_50133;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50133__$1,inst_50131);
} else {
if((state_val_50134 === (12))){
var inst_50090 = (state_50133[(8)]);
var inst_50109 = cljs.core.vec(inst_50090);
var state_50133__$1 = state_50133;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50133__$1,(14),out,inst_50109);
} else {
if((state_val_50134 === (2))){
var state_50133__$1 = state_50133;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50133__$1,(4),ch);
} else {
if((state_val_50134 === (11))){
var inst_50090 = (state_50133[(8)]);
var inst_50098 = (state_50133[(11)]);
var inst_50094 = (state_50133[(9)]);
var inst_50106 = inst_50090.push(inst_50094);
var tmp50146 = inst_50090;
var inst_50090__$1 = tmp50146;
var inst_50091 = inst_50098;
var state_50133__$1 = (function (){var statearr_50147 = state_50133;
(statearr_50147[(12)] = inst_50106);

(statearr_50147[(7)] = inst_50091);

(statearr_50147[(8)] = inst_50090__$1);

return statearr_50147;
})();
var statearr_50148_51099 = state_50133__$1;
(statearr_50148_51099[(2)] = null);

(statearr_50148_51099[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50134 === (9))){
var inst_50091 = (state_50133[(7)]);
var inst_50102 = cljs.core.keyword_identical_QMARK_(inst_50091,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_50133__$1 = state_50133;
var statearr_50149_51104 = state_50133__$1;
(statearr_50149_51104[(2)] = inst_50102);

(statearr_50149_51104[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50134 === (5))){
var inst_50091 = (state_50133[(7)]);
var inst_50098 = (state_50133[(11)]);
var inst_50099 = (state_50133[(13)]);
var inst_50094 = (state_50133[(9)]);
var inst_50098__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_50094) : f.call(null,inst_50094));
var inst_50099__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_50098__$1,inst_50091);
var state_50133__$1 = (function (){var statearr_50150 = state_50133;
(statearr_50150[(11)] = inst_50098__$1);

(statearr_50150[(13)] = inst_50099__$1);

return statearr_50150;
})();
if(inst_50099__$1){
var statearr_50151_51113 = state_50133__$1;
(statearr_50151_51113[(1)] = (8));

} else {
var statearr_50152_51114 = state_50133__$1;
(statearr_50152_51114[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50134 === (14))){
var inst_50098 = (state_50133[(11)]);
var inst_50094 = (state_50133[(9)]);
var inst_50111 = (state_50133[(2)]);
var inst_50112 = [];
var inst_50113 = inst_50112.push(inst_50094);
var inst_50090 = inst_50112;
var inst_50091 = inst_50098;
var state_50133__$1 = (function (){var statearr_50153 = state_50133;
(statearr_50153[(7)] = inst_50091);

(statearr_50153[(8)] = inst_50090);

(statearr_50153[(14)] = inst_50113);

(statearr_50153[(15)] = inst_50111);

return statearr_50153;
})();
var statearr_50154_51116 = state_50133__$1;
(statearr_50154_51116[(2)] = null);

(statearr_50154_51116[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50134 === (16))){
var state_50133__$1 = state_50133;
var statearr_50155_51118 = state_50133__$1;
(statearr_50155_51118[(2)] = null);

(statearr_50155_51118[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50134 === (10))){
var inst_50104 = (state_50133[(2)]);
var state_50133__$1 = state_50133;
if(cljs.core.truth_(inst_50104)){
var statearr_50156_51120 = state_50133__$1;
(statearr_50156_51120[(1)] = (11));

} else {
var statearr_50157_51121 = state_50133__$1;
(statearr_50157_51121[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50134 === (18))){
var inst_50123 = (state_50133[(2)]);
var state_50133__$1 = state_50133;
var statearr_50158_51122 = state_50133__$1;
(statearr_50158_51122[(2)] = inst_50123);

(statearr_50158_51122[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50134 === (8))){
var inst_50099 = (state_50133[(13)]);
var state_50133__$1 = state_50133;
var statearr_50159_51123 = state_50133__$1;
(statearr_50159_51123[(2)] = inst_50099);

(statearr_50159_51123[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__48101__auto__ = null;
var cljs$core$async$state_machine__48101__auto____0 = (function (){
var statearr_50160 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50160[(0)] = cljs$core$async$state_machine__48101__auto__);

(statearr_50160[(1)] = (1));

return statearr_50160;
});
var cljs$core$async$state_machine__48101__auto____1 = (function (state_50133){
while(true){
var ret_value__48102__auto__ = (function (){try{while(true){
var result__48103__auto__ = switch__48100__auto__(state_50133);
if(cljs.core.keyword_identical_QMARK_(result__48103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48103__auto__;
}
break;
}
}catch (e50161){var ex__48104__auto__ = e50161;
var statearr_50166_51148 = state_50133;
(statearr_50166_51148[(2)] = ex__48104__auto__);


if(cljs.core.seq((state_50133[(4)]))){
var statearr_50170_51153 = state_50133;
(statearr_50170_51153[(1)] = cljs.core.first((state_50133[(4)])));

} else {
throw ex__48104__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51157 = state_50133;
state_50133 = G__51157;
continue;
} else {
return ret_value__48102__auto__;
}
break;
}
});
cljs$core$async$state_machine__48101__auto__ = function(state_50133){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48101__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48101__auto____1.call(this,state_50133);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48101__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48101__auto____0;
cljs$core$async$state_machine__48101__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48101__auto____1;
return cljs$core$async$state_machine__48101__auto__;
})()
})();
var state__48206__auto__ = (function (){var statearr_50171 = f__48205__auto__();
(statearr_50171[(6)] = c__48204__auto___51007);

return statearr_50171;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48206__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map

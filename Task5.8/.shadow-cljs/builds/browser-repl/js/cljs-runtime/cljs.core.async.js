goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__57594 = arguments.length;
switch (G__57594) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async57595 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async57595 = (function (f,blockable,meta57596){
this.f = f;
this.blockable = blockable;
this.meta57596 = meta57596;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async57595.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_57597,meta57596__$1){
var self__ = this;
var _57597__$1 = this;
return (new cljs.core.async.t_cljs$core$async57595(self__.f,self__.blockable,meta57596__$1));
}));

(cljs.core.async.t_cljs$core$async57595.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_57597){
var self__ = this;
var _57597__$1 = this;
return self__.meta57596;
}));

(cljs.core.async.t_cljs$core$async57595.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57595.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async57595.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async57595.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async57595.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta57596","meta57596",-1102755517,null)], null);
}));

(cljs.core.async.t_cljs$core$async57595.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async57595.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async57595");

(cljs.core.async.t_cljs$core$async57595.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async57595");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async57595.
 */
cljs.core.async.__GT_t_cljs$core$async57595 = (function cljs$core$async$__GT_t_cljs$core$async57595(f__$1,blockable__$1,meta57596){
return (new cljs.core.async.t_cljs$core$async57595(f__$1,blockable__$1,meta57596));
});

}

return (new cljs.core.async.t_cljs$core$async57595(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__57660 = arguments.length;
switch (G__57660) {
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
var G__57669 = arguments.length;
switch (G__57669) {
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
var G__57686 = arguments.length;
switch (G__57686) {
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
var val_60279 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_60279) : fn1.call(null,val_60279));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_60279) : fn1.call(null,val_60279));
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
var G__57705 = arguments.length;
switch (G__57705) {
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
var n__4706__auto___60281 = n;
var x_60282 = (0);
while(true){
if((x_60282 < n__4706__auto___60281)){
(a[x_60282] = x_60282);

var G__60283 = (x_60282 + (1));
x_60282 = G__60283;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async57711 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async57711 = (function (flag,meta57712){
this.flag = flag;
this.meta57712 = meta57712;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async57711.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_57713,meta57712__$1){
var self__ = this;
var _57713__$1 = this;
return (new cljs.core.async.t_cljs$core$async57711(self__.flag,meta57712__$1));
}));

(cljs.core.async.t_cljs$core$async57711.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_57713){
var self__ = this;
var _57713__$1 = this;
return self__.meta57712;
}));

(cljs.core.async.t_cljs$core$async57711.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57711.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async57711.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async57711.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async57711.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta57712","meta57712",275551079,null)], null);
}));

(cljs.core.async.t_cljs$core$async57711.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async57711.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async57711");

(cljs.core.async.t_cljs$core$async57711.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async57711");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async57711.
 */
cljs.core.async.__GT_t_cljs$core$async57711 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async57711(flag__$1,meta57712){
return (new cljs.core.async.t_cljs$core$async57711(flag__$1,meta57712));
});

}

return (new cljs.core.async.t_cljs$core$async57711(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async57727 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async57727 = (function (flag,cb,meta57728){
this.flag = flag;
this.cb = cb;
this.meta57728 = meta57728;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async57727.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_57729,meta57728__$1){
var self__ = this;
var _57729__$1 = this;
return (new cljs.core.async.t_cljs$core$async57727(self__.flag,self__.cb,meta57728__$1));
}));

(cljs.core.async.t_cljs$core$async57727.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_57729){
var self__ = this;
var _57729__$1 = this;
return self__.meta57728;
}));

(cljs.core.async.t_cljs$core$async57727.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57727.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async57727.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async57727.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async57727.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta57728","meta57728",-152838796,null)], null);
}));

(cljs.core.async.t_cljs$core$async57727.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async57727.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async57727");

(cljs.core.async.t_cljs$core$async57727.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async57727");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async57727.
 */
cljs.core.async.__GT_t_cljs$core$async57727 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async57727(flag__$1,cb__$1,meta57728){
return (new cljs.core.async.t_cljs$core$async57727(flag__$1,cb__$1,meta57728));
});

}

return (new cljs.core.async.t_cljs$core$async57727(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__57747_SHARP_){
var G__57766 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__57747_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__57766) : fret.call(null,G__57766));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__57748_SHARP_){
var G__57767 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__57748_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__57767) : fret.call(null,G__57767));
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
var G__60285 = (i + (1));
i = G__60285;
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
var len__4829__auto___60288 = arguments.length;
var i__4830__auto___60289 = (0);
while(true){
if((i__4830__auto___60289 < len__4829__auto___60288)){
args__4835__auto__.push((arguments[i__4830__auto___60289]));

var G__60290 = (i__4830__auto___60289 + (1));
i__4830__auto___60289 = G__60290;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__57797){
var map__57809 = p__57797;
var map__57809__$1 = cljs.core.__destructure_map(map__57809);
var opts = map__57809__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq57795){
var G__57796 = cljs.core.first(seq57795);
var seq57795__$1 = cljs.core.next(seq57795);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__57796,seq57795__$1);
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
var G__57838 = arguments.length;
switch (G__57838) {
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
var c__48697__auto___60296 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48698__auto__ = (function (){var switch__48472__auto__ = (function (state_57865){
var state_val_57866 = (state_57865[(1)]);
if((state_val_57866 === (7))){
var inst_57861 = (state_57865[(2)]);
var state_57865__$1 = state_57865;
var statearr_57882_60297 = state_57865__$1;
(statearr_57882_60297[(2)] = inst_57861);

(statearr_57882_60297[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57866 === (1))){
var state_57865__$1 = state_57865;
var statearr_57883_60298 = state_57865__$1;
(statearr_57883_60298[(2)] = null);

(statearr_57883_60298[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57866 === (4))){
var inst_57844 = (state_57865[(7)]);
var inst_57844__$1 = (state_57865[(2)]);
var inst_57845 = (inst_57844__$1 == null);
var state_57865__$1 = (function (){var statearr_57886 = state_57865;
(statearr_57886[(7)] = inst_57844__$1);

return statearr_57886;
})();
if(cljs.core.truth_(inst_57845)){
var statearr_57895_60299 = state_57865__$1;
(statearr_57895_60299[(1)] = (5));

} else {
var statearr_57896_60300 = state_57865__$1;
(statearr_57896_60300[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57866 === (13))){
var state_57865__$1 = state_57865;
var statearr_57901_60301 = state_57865__$1;
(statearr_57901_60301[(2)] = null);

(statearr_57901_60301[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57866 === (6))){
var inst_57844 = (state_57865[(7)]);
var state_57865__$1 = state_57865;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57865__$1,(11),to,inst_57844);
} else {
if((state_val_57866 === (3))){
var inst_57863 = (state_57865[(2)]);
var state_57865__$1 = state_57865;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57865__$1,inst_57863);
} else {
if((state_val_57866 === (12))){
var state_57865__$1 = state_57865;
var statearr_57904_60302 = state_57865__$1;
(statearr_57904_60302[(2)] = null);

(statearr_57904_60302[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57866 === (2))){
var state_57865__$1 = state_57865;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57865__$1,(4),from);
} else {
if((state_val_57866 === (11))){
var inst_57854 = (state_57865[(2)]);
var state_57865__$1 = state_57865;
if(cljs.core.truth_(inst_57854)){
var statearr_57906_60303 = state_57865__$1;
(statearr_57906_60303[(1)] = (12));

} else {
var statearr_57907_60304 = state_57865__$1;
(statearr_57907_60304[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57866 === (9))){
var state_57865__$1 = state_57865;
var statearr_57908_60305 = state_57865__$1;
(statearr_57908_60305[(2)] = null);

(statearr_57908_60305[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57866 === (5))){
var state_57865__$1 = state_57865;
if(cljs.core.truth_(close_QMARK_)){
var statearr_57913_60306 = state_57865__$1;
(statearr_57913_60306[(1)] = (8));

} else {
var statearr_57914_60307 = state_57865__$1;
(statearr_57914_60307[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57866 === (14))){
var inst_57859 = (state_57865[(2)]);
var state_57865__$1 = state_57865;
var statearr_57919_60308 = state_57865__$1;
(statearr_57919_60308[(2)] = inst_57859);

(statearr_57919_60308[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57866 === (10))){
var inst_57851 = (state_57865[(2)]);
var state_57865__$1 = state_57865;
var statearr_57923_60310 = state_57865__$1;
(statearr_57923_60310[(2)] = inst_57851);

(statearr_57923_60310[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57866 === (8))){
var inst_57848 = cljs.core.async.close_BANG_(to);
var state_57865__$1 = state_57865;
var statearr_57926_60312 = state_57865__$1;
(statearr_57926_60312[(2)] = inst_57848);

(statearr_57926_60312[(1)] = (10));


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
var cljs$core$async$state_machine__48474__auto__ = null;
var cljs$core$async$state_machine__48474__auto____0 = (function (){
var statearr_57933 = [null,null,null,null,null,null,null,null];
(statearr_57933[(0)] = cljs$core$async$state_machine__48474__auto__);

(statearr_57933[(1)] = (1));

return statearr_57933;
});
var cljs$core$async$state_machine__48474__auto____1 = (function (state_57865){
while(true){
var ret_value__48475__auto__ = (function (){try{while(true){
var result__48476__auto__ = switch__48472__auto__(state_57865);
if(cljs.core.keyword_identical_QMARK_(result__48476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48476__auto__;
}
break;
}
}catch (e57938){var ex__48478__auto__ = e57938;
var statearr_57939_60313 = state_57865;
(statearr_57939_60313[(2)] = ex__48478__auto__);


if(cljs.core.seq((state_57865[(4)]))){
var statearr_57940_60314 = state_57865;
(statearr_57940_60314[(1)] = cljs.core.first((state_57865[(4)])));

} else {
throw ex__48478__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60315 = state_57865;
state_57865 = G__60315;
continue;
} else {
return ret_value__48475__auto__;
}
break;
}
});
cljs$core$async$state_machine__48474__auto__ = function(state_57865){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48474__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48474__auto____1.call(this,state_57865);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48474__auto____0;
cljs$core$async$state_machine__48474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48474__auto____1;
return cljs$core$async$state_machine__48474__auto__;
})()
})();
var state__48699__auto__ = (function (){var statearr_57947 = f__48698__auto__();
(statearr_57947[(6)] = c__48697__auto___60296);

return statearr_57947;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48699__auto__);
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
var process = (function (p__57973){
var vec__57975 = p__57973;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57975,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57975,(1),null);
var job = vec__57975;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__48697__auto___60316 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48698__auto__ = (function (){var switch__48472__auto__ = (function (state_57983){
var state_val_57984 = (state_57983[(1)]);
if((state_val_57984 === (1))){
var state_57983__$1 = state_57983;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57983__$1,(2),res,v);
} else {
if((state_val_57984 === (2))){
var inst_57980 = (state_57983[(2)]);
var inst_57981 = cljs.core.async.close_BANG_(res);
var state_57983__$1 = (function (){var statearr_58002 = state_57983;
(statearr_58002[(7)] = inst_57980);

return statearr_58002;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_57983__$1,inst_57981);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__48474__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__48474__auto____0 = (function (){
var statearr_58006 = [null,null,null,null,null,null,null,null];
(statearr_58006[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__48474__auto__);

(statearr_58006[(1)] = (1));

return statearr_58006;
});
var cljs$core$async$pipeline_STAR__$_state_machine__48474__auto____1 = (function (state_57983){
while(true){
var ret_value__48475__auto__ = (function (){try{while(true){
var result__48476__auto__ = switch__48472__auto__(state_57983);
if(cljs.core.keyword_identical_QMARK_(result__48476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48476__auto__;
}
break;
}
}catch (e58007){var ex__48478__auto__ = e58007;
var statearr_58008_60319 = state_57983;
(statearr_58008_60319[(2)] = ex__48478__auto__);


if(cljs.core.seq((state_57983[(4)]))){
var statearr_58009_60320 = state_57983;
(statearr_58009_60320[(1)] = cljs.core.first((state_57983[(4)])));

} else {
throw ex__48478__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60321 = state_57983;
state_57983 = G__60321;
continue;
} else {
return ret_value__48475__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__48474__auto__ = function(state_57983){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__48474__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__48474__auto____1.call(this,state_57983);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__48474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__48474__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__48474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__48474__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__48474__auto__;
})()
})();
var state__48699__auto__ = (function (){var statearr_58018 = f__48698__auto__();
(statearr_58018[(6)] = c__48697__auto___60316);

return statearr_58018;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48699__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__58020){
var vec__58021 = p__58020;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58021,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58021,(1),null);
var job = vec__58021;
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
var n__4706__auto___60322 = n;
var __60323 = (0);
while(true){
if((__60323 < n__4706__auto___60322)){
var G__58026_60324 = type;
var G__58026_60325__$1 = (((G__58026_60324 instanceof cljs.core.Keyword))?G__58026_60324.fqn:null);
switch (G__58026_60325__$1) {
case "compute":
var c__48697__auto___60327 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__60323,c__48697__auto___60327,G__58026_60324,G__58026_60325__$1,n__4706__auto___60322,jobs,results,process,async){
return (function (){
var f__48698__auto__ = (function (){var switch__48472__auto__ = ((function (__60323,c__48697__auto___60327,G__58026_60324,G__58026_60325__$1,n__4706__auto___60322,jobs,results,process,async){
return (function (state_58039){
var state_val_58040 = (state_58039[(1)]);
if((state_val_58040 === (1))){
var state_58039__$1 = state_58039;
var statearr_58052_60328 = state_58039__$1;
(statearr_58052_60328[(2)] = null);

(statearr_58052_60328[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58040 === (2))){
var state_58039__$1 = state_58039;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58039__$1,(4),jobs);
} else {
if((state_val_58040 === (3))){
var inst_58037 = (state_58039[(2)]);
var state_58039__$1 = state_58039;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58039__$1,inst_58037);
} else {
if((state_val_58040 === (4))){
var inst_58029 = (state_58039[(2)]);
var inst_58030 = process(inst_58029);
var state_58039__$1 = state_58039;
if(cljs.core.truth_(inst_58030)){
var statearr_58059_60329 = state_58039__$1;
(statearr_58059_60329[(1)] = (5));

} else {
var statearr_58060_60330 = state_58039__$1;
(statearr_58060_60330[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58040 === (5))){
var state_58039__$1 = state_58039;
var statearr_58061_60331 = state_58039__$1;
(statearr_58061_60331[(2)] = null);

(statearr_58061_60331[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58040 === (6))){
var state_58039__$1 = state_58039;
var statearr_58066_60332 = state_58039__$1;
(statearr_58066_60332[(2)] = null);

(statearr_58066_60332[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58040 === (7))){
var inst_58035 = (state_58039[(2)]);
var state_58039__$1 = state_58039;
var statearr_58067_60333 = state_58039__$1;
(statearr_58067_60333[(2)] = inst_58035);

(statearr_58067_60333[(1)] = (3));


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
});})(__60323,c__48697__auto___60327,G__58026_60324,G__58026_60325__$1,n__4706__auto___60322,jobs,results,process,async))
;
return ((function (__60323,switch__48472__auto__,c__48697__auto___60327,G__58026_60324,G__58026_60325__$1,n__4706__auto___60322,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__48474__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__48474__auto____0 = (function (){
var statearr_58068 = [null,null,null,null,null,null,null];
(statearr_58068[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__48474__auto__);

(statearr_58068[(1)] = (1));

return statearr_58068;
});
var cljs$core$async$pipeline_STAR__$_state_machine__48474__auto____1 = (function (state_58039){
while(true){
var ret_value__48475__auto__ = (function (){try{while(true){
var result__48476__auto__ = switch__48472__auto__(state_58039);
if(cljs.core.keyword_identical_QMARK_(result__48476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48476__auto__;
}
break;
}
}catch (e58071){var ex__48478__auto__ = e58071;
var statearr_58072_60335 = state_58039;
(statearr_58072_60335[(2)] = ex__48478__auto__);


if(cljs.core.seq((state_58039[(4)]))){
var statearr_58073_60337 = state_58039;
(statearr_58073_60337[(1)] = cljs.core.first((state_58039[(4)])));

} else {
throw ex__48478__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60338 = state_58039;
state_58039 = G__60338;
continue;
} else {
return ret_value__48475__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__48474__auto__ = function(state_58039){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__48474__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__48474__auto____1.call(this,state_58039);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__48474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__48474__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__48474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__48474__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__48474__auto__;
})()
;})(__60323,switch__48472__auto__,c__48697__auto___60327,G__58026_60324,G__58026_60325__$1,n__4706__auto___60322,jobs,results,process,async))
})();
var state__48699__auto__ = (function (){var statearr_58074 = f__48698__auto__();
(statearr_58074[(6)] = c__48697__auto___60327);

return statearr_58074;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48699__auto__);
});})(__60323,c__48697__auto___60327,G__58026_60324,G__58026_60325__$1,n__4706__auto___60322,jobs,results,process,async))
);


break;
case "async":
var c__48697__auto___60339 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__60323,c__48697__auto___60339,G__58026_60324,G__58026_60325__$1,n__4706__auto___60322,jobs,results,process,async){
return (function (){
var f__48698__auto__ = (function (){var switch__48472__auto__ = ((function (__60323,c__48697__auto___60339,G__58026_60324,G__58026_60325__$1,n__4706__auto___60322,jobs,results,process,async){
return (function (state_58090){
var state_val_58091 = (state_58090[(1)]);
if((state_val_58091 === (1))){
var state_58090__$1 = state_58090;
var statearr_58094_60340 = state_58090__$1;
(statearr_58094_60340[(2)] = null);

(statearr_58094_60340[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58091 === (2))){
var state_58090__$1 = state_58090;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58090__$1,(4),jobs);
} else {
if((state_val_58091 === (3))){
var inst_58088 = (state_58090[(2)]);
var state_58090__$1 = state_58090;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58090__$1,inst_58088);
} else {
if((state_val_58091 === (4))){
var inst_58080 = (state_58090[(2)]);
var inst_58081 = async(inst_58080);
var state_58090__$1 = state_58090;
if(cljs.core.truth_(inst_58081)){
var statearr_58095_60341 = state_58090__$1;
(statearr_58095_60341[(1)] = (5));

} else {
var statearr_58096_60342 = state_58090__$1;
(statearr_58096_60342[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58091 === (5))){
var state_58090__$1 = state_58090;
var statearr_58097_60343 = state_58090__$1;
(statearr_58097_60343[(2)] = null);

(statearr_58097_60343[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58091 === (6))){
var state_58090__$1 = state_58090;
var statearr_58098_60344 = state_58090__$1;
(statearr_58098_60344[(2)] = null);

(statearr_58098_60344[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58091 === (7))){
var inst_58086 = (state_58090[(2)]);
var state_58090__$1 = state_58090;
var statearr_58099_60345 = state_58090__$1;
(statearr_58099_60345[(2)] = inst_58086);

(statearr_58099_60345[(1)] = (3));


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
});})(__60323,c__48697__auto___60339,G__58026_60324,G__58026_60325__$1,n__4706__auto___60322,jobs,results,process,async))
;
return ((function (__60323,switch__48472__auto__,c__48697__auto___60339,G__58026_60324,G__58026_60325__$1,n__4706__auto___60322,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__48474__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__48474__auto____0 = (function (){
var statearr_58100 = [null,null,null,null,null,null,null];
(statearr_58100[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__48474__auto__);

(statearr_58100[(1)] = (1));

return statearr_58100;
});
var cljs$core$async$pipeline_STAR__$_state_machine__48474__auto____1 = (function (state_58090){
while(true){
var ret_value__48475__auto__ = (function (){try{while(true){
var result__48476__auto__ = switch__48472__auto__(state_58090);
if(cljs.core.keyword_identical_QMARK_(result__48476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48476__auto__;
}
break;
}
}catch (e58101){var ex__48478__auto__ = e58101;
var statearr_58102_60346 = state_58090;
(statearr_58102_60346[(2)] = ex__48478__auto__);


if(cljs.core.seq((state_58090[(4)]))){
var statearr_58103_60348 = state_58090;
(statearr_58103_60348[(1)] = cljs.core.first((state_58090[(4)])));

} else {
throw ex__48478__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60349 = state_58090;
state_58090 = G__60349;
continue;
} else {
return ret_value__48475__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__48474__auto__ = function(state_58090){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__48474__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__48474__auto____1.call(this,state_58090);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__48474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__48474__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__48474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__48474__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__48474__auto__;
})()
;})(__60323,switch__48472__auto__,c__48697__auto___60339,G__58026_60324,G__58026_60325__$1,n__4706__auto___60322,jobs,results,process,async))
})();
var state__48699__auto__ = (function (){var statearr_58110 = f__48698__auto__();
(statearr_58110[(6)] = c__48697__auto___60339);

return statearr_58110;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48699__auto__);
});})(__60323,c__48697__auto___60339,G__58026_60324,G__58026_60325__$1,n__4706__auto___60322,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__58026_60325__$1)].join('')));

}

var G__60350 = (__60323 + (1));
__60323 = G__60350;
continue;
} else {
}
break;
}

var c__48697__auto___60351 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48698__auto__ = (function (){var switch__48472__auto__ = (function (state_58136){
var state_val_58137 = (state_58136[(1)]);
if((state_val_58137 === (7))){
var inst_58132 = (state_58136[(2)]);
var state_58136__$1 = state_58136;
var statearr_58149_60352 = state_58136__$1;
(statearr_58149_60352[(2)] = inst_58132);

(statearr_58149_60352[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58137 === (1))){
var state_58136__$1 = state_58136;
var statearr_58154_60353 = state_58136__$1;
(statearr_58154_60353[(2)] = null);

(statearr_58154_60353[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58137 === (4))){
var inst_58113 = (state_58136[(7)]);
var inst_58113__$1 = (state_58136[(2)]);
var inst_58114 = (inst_58113__$1 == null);
var state_58136__$1 = (function (){var statearr_58155 = state_58136;
(statearr_58155[(7)] = inst_58113__$1);

return statearr_58155;
})();
if(cljs.core.truth_(inst_58114)){
var statearr_58156_60354 = state_58136__$1;
(statearr_58156_60354[(1)] = (5));

} else {
var statearr_58159_60355 = state_58136__$1;
(statearr_58159_60355[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58137 === (6))){
var inst_58119 = (state_58136[(8)]);
var inst_58113 = (state_58136[(7)]);
var inst_58119__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_58120 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_58122 = [inst_58113,inst_58119__$1];
var inst_58124 = (new cljs.core.PersistentVector(null,2,(5),inst_58120,inst_58122,null));
var state_58136__$1 = (function (){var statearr_58163 = state_58136;
(statearr_58163[(8)] = inst_58119__$1);

return statearr_58163;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_58136__$1,(8),jobs,inst_58124);
} else {
if((state_val_58137 === (3))){
var inst_58134 = (state_58136[(2)]);
var state_58136__$1 = state_58136;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58136__$1,inst_58134);
} else {
if((state_val_58137 === (2))){
var state_58136__$1 = state_58136;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58136__$1,(4),from);
} else {
if((state_val_58137 === (9))){
var inst_58128 = (state_58136[(2)]);
var state_58136__$1 = (function (){var statearr_58166 = state_58136;
(statearr_58166[(9)] = inst_58128);

return statearr_58166;
})();
var statearr_58167_60356 = state_58136__$1;
(statearr_58167_60356[(2)] = null);

(statearr_58167_60356[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58137 === (5))){
var inst_58116 = cljs.core.async.close_BANG_(jobs);
var state_58136__$1 = state_58136;
var statearr_58169_60357 = state_58136__$1;
(statearr_58169_60357[(2)] = inst_58116);

(statearr_58169_60357[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58137 === (8))){
var inst_58119 = (state_58136[(8)]);
var inst_58126 = (state_58136[(2)]);
var state_58136__$1 = (function (){var statearr_58171 = state_58136;
(statearr_58171[(10)] = inst_58126);

return statearr_58171;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_58136__$1,(9),results,inst_58119);
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
var cljs$core$async$pipeline_STAR__$_state_machine__48474__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__48474__auto____0 = (function (){
var statearr_58175 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_58175[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__48474__auto__);

(statearr_58175[(1)] = (1));

return statearr_58175;
});
var cljs$core$async$pipeline_STAR__$_state_machine__48474__auto____1 = (function (state_58136){
while(true){
var ret_value__48475__auto__ = (function (){try{while(true){
var result__48476__auto__ = switch__48472__auto__(state_58136);
if(cljs.core.keyword_identical_QMARK_(result__48476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48476__auto__;
}
break;
}
}catch (e58177){var ex__48478__auto__ = e58177;
var statearr_58181_60362 = state_58136;
(statearr_58181_60362[(2)] = ex__48478__auto__);


if(cljs.core.seq((state_58136[(4)]))){
var statearr_58182_60363 = state_58136;
(statearr_58182_60363[(1)] = cljs.core.first((state_58136[(4)])));

} else {
throw ex__48478__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60364 = state_58136;
state_58136 = G__60364;
continue;
} else {
return ret_value__48475__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__48474__auto__ = function(state_58136){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__48474__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__48474__auto____1.call(this,state_58136);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__48474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__48474__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__48474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__48474__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__48474__auto__;
})()
})();
var state__48699__auto__ = (function (){var statearr_58183 = f__48698__auto__();
(statearr_58183[(6)] = c__48697__auto___60351);

return statearr_58183;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48699__auto__);
}));


var c__48697__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48698__auto__ = (function (){var switch__48472__auto__ = (function (state_58227){
var state_val_58228 = (state_58227[(1)]);
if((state_val_58228 === (7))){
var inst_58223 = (state_58227[(2)]);
var state_58227__$1 = state_58227;
var statearr_58233_60365 = state_58227__$1;
(statearr_58233_60365[(2)] = inst_58223);

(statearr_58233_60365[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58228 === (20))){
var state_58227__$1 = state_58227;
var statearr_58234_60366 = state_58227__$1;
(statearr_58234_60366[(2)] = null);

(statearr_58234_60366[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58228 === (1))){
var state_58227__$1 = state_58227;
var statearr_58256_60367 = state_58227__$1;
(statearr_58256_60367[(2)] = null);

(statearr_58256_60367[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58228 === (4))){
var inst_58186 = (state_58227[(7)]);
var inst_58186__$1 = (state_58227[(2)]);
var inst_58187 = (inst_58186__$1 == null);
var state_58227__$1 = (function (){var statearr_58261 = state_58227;
(statearr_58261[(7)] = inst_58186__$1);

return statearr_58261;
})();
if(cljs.core.truth_(inst_58187)){
var statearr_58262_60368 = state_58227__$1;
(statearr_58262_60368[(1)] = (5));

} else {
var statearr_58263_60369 = state_58227__$1;
(statearr_58263_60369[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58228 === (15))){
var inst_58199 = (state_58227[(8)]);
var state_58227__$1 = state_58227;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_58227__$1,(18),to,inst_58199);
} else {
if((state_val_58228 === (21))){
var inst_58215 = (state_58227[(2)]);
var state_58227__$1 = state_58227;
var statearr_58270_60370 = state_58227__$1;
(statearr_58270_60370[(2)] = inst_58215);

(statearr_58270_60370[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58228 === (13))){
var inst_58220 = (state_58227[(2)]);
var state_58227__$1 = (function (){var statearr_58275 = state_58227;
(statearr_58275[(9)] = inst_58220);

return statearr_58275;
})();
var statearr_58276_60371 = state_58227__$1;
(statearr_58276_60371[(2)] = null);

(statearr_58276_60371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58228 === (6))){
var inst_58186 = (state_58227[(7)]);
var state_58227__$1 = state_58227;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58227__$1,(11),inst_58186);
} else {
if((state_val_58228 === (17))){
var inst_58207 = (state_58227[(2)]);
var state_58227__$1 = state_58227;
if(cljs.core.truth_(inst_58207)){
var statearr_58280_60372 = state_58227__$1;
(statearr_58280_60372[(1)] = (19));

} else {
var statearr_58281_60373 = state_58227__$1;
(statearr_58281_60373[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58228 === (3))){
var inst_58225 = (state_58227[(2)]);
var state_58227__$1 = state_58227;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58227__$1,inst_58225);
} else {
if((state_val_58228 === (12))){
var inst_58196 = (state_58227[(10)]);
var state_58227__$1 = state_58227;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58227__$1,(14),inst_58196);
} else {
if((state_val_58228 === (2))){
var state_58227__$1 = state_58227;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58227__$1,(4),results);
} else {
if((state_val_58228 === (19))){
var state_58227__$1 = state_58227;
var statearr_58282_60374 = state_58227__$1;
(statearr_58282_60374[(2)] = null);

(statearr_58282_60374[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58228 === (11))){
var inst_58196 = (state_58227[(2)]);
var state_58227__$1 = (function (){var statearr_58283 = state_58227;
(statearr_58283[(10)] = inst_58196);

return statearr_58283;
})();
var statearr_58285_60375 = state_58227__$1;
(statearr_58285_60375[(2)] = null);

(statearr_58285_60375[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58228 === (9))){
var state_58227__$1 = state_58227;
var statearr_58286_60376 = state_58227__$1;
(statearr_58286_60376[(2)] = null);

(statearr_58286_60376[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58228 === (5))){
var state_58227__$1 = state_58227;
if(cljs.core.truth_(close_QMARK_)){
var statearr_58287_60377 = state_58227__$1;
(statearr_58287_60377[(1)] = (8));

} else {
var statearr_58288_60378 = state_58227__$1;
(statearr_58288_60378[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58228 === (14))){
var inst_58201 = (state_58227[(11)]);
var inst_58199 = (state_58227[(8)]);
var inst_58199__$1 = (state_58227[(2)]);
var inst_58200 = (inst_58199__$1 == null);
var inst_58201__$1 = cljs.core.not(inst_58200);
var state_58227__$1 = (function (){var statearr_58289 = state_58227;
(statearr_58289[(11)] = inst_58201__$1);

(statearr_58289[(8)] = inst_58199__$1);

return statearr_58289;
})();
if(inst_58201__$1){
var statearr_58290_60379 = state_58227__$1;
(statearr_58290_60379[(1)] = (15));

} else {
var statearr_58295_60380 = state_58227__$1;
(statearr_58295_60380[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58228 === (16))){
var inst_58201 = (state_58227[(11)]);
var state_58227__$1 = state_58227;
var statearr_58300_60382 = state_58227__$1;
(statearr_58300_60382[(2)] = inst_58201);

(statearr_58300_60382[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58228 === (10))){
var inst_58193 = (state_58227[(2)]);
var state_58227__$1 = state_58227;
var statearr_58319_60384 = state_58227__$1;
(statearr_58319_60384[(2)] = inst_58193);

(statearr_58319_60384[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58228 === (18))){
var inst_58204 = (state_58227[(2)]);
var state_58227__$1 = state_58227;
var statearr_58323_60385 = state_58227__$1;
(statearr_58323_60385[(2)] = inst_58204);

(statearr_58323_60385[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58228 === (8))){
var inst_58190 = cljs.core.async.close_BANG_(to);
var state_58227__$1 = state_58227;
var statearr_58324_60386 = state_58227__$1;
(statearr_58324_60386[(2)] = inst_58190);

(statearr_58324_60386[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__48474__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__48474__auto____0 = (function (){
var statearr_58328 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58328[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__48474__auto__);

(statearr_58328[(1)] = (1));

return statearr_58328;
});
var cljs$core$async$pipeline_STAR__$_state_machine__48474__auto____1 = (function (state_58227){
while(true){
var ret_value__48475__auto__ = (function (){try{while(true){
var result__48476__auto__ = switch__48472__auto__(state_58227);
if(cljs.core.keyword_identical_QMARK_(result__48476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48476__auto__;
}
break;
}
}catch (e58329){var ex__48478__auto__ = e58329;
var statearr_58330_60387 = state_58227;
(statearr_58330_60387[(2)] = ex__48478__auto__);


if(cljs.core.seq((state_58227[(4)]))){
var statearr_58331_60388 = state_58227;
(statearr_58331_60388[(1)] = cljs.core.first((state_58227[(4)])));

} else {
throw ex__48478__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60389 = state_58227;
state_58227 = G__60389;
continue;
} else {
return ret_value__48475__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__48474__auto__ = function(state_58227){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__48474__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__48474__auto____1.call(this,state_58227);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__48474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__48474__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__48474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__48474__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__48474__auto__;
})()
})();
var state__48699__auto__ = (function (){var statearr_58340 = f__48698__auto__();
(statearr_58340[(6)] = c__48697__auto__);

return statearr_58340;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48699__auto__);
}));

return c__48697__auto__;
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
var G__58345 = arguments.length;
switch (G__58345) {
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
var G__58362 = arguments.length;
switch (G__58362) {
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
var G__58377 = arguments.length;
switch (G__58377) {
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
var c__48697__auto___60397 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48698__auto__ = (function (){var switch__48472__auto__ = (function (state_58412){
var state_val_58413 = (state_58412[(1)]);
if((state_val_58413 === (7))){
var inst_58408 = (state_58412[(2)]);
var state_58412__$1 = state_58412;
var statearr_58414_60401 = state_58412__$1;
(statearr_58414_60401[(2)] = inst_58408);

(statearr_58414_60401[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58413 === (1))){
var state_58412__$1 = state_58412;
var statearr_58415_60402 = state_58412__$1;
(statearr_58415_60402[(2)] = null);

(statearr_58415_60402[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58413 === (4))){
var inst_58389 = (state_58412[(7)]);
var inst_58389__$1 = (state_58412[(2)]);
var inst_58390 = (inst_58389__$1 == null);
var state_58412__$1 = (function (){var statearr_58416 = state_58412;
(statearr_58416[(7)] = inst_58389__$1);

return statearr_58416;
})();
if(cljs.core.truth_(inst_58390)){
var statearr_58417_60403 = state_58412__$1;
(statearr_58417_60403[(1)] = (5));

} else {
var statearr_58418_60404 = state_58412__$1;
(statearr_58418_60404[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58413 === (13))){
var state_58412__$1 = state_58412;
var statearr_58423_60405 = state_58412__$1;
(statearr_58423_60405[(2)] = null);

(statearr_58423_60405[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58413 === (6))){
var inst_58389 = (state_58412[(7)]);
var inst_58395 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_58389) : p.call(null,inst_58389));
var state_58412__$1 = state_58412;
if(cljs.core.truth_(inst_58395)){
var statearr_58424_60409 = state_58412__$1;
(statearr_58424_60409[(1)] = (9));

} else {
var statearr_58425_60410 = state_58412__$1;
(statearr_58425_60410[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58413 === (3))){
var inst_58410 = (state_58412[(2)]);
var state_58412__$1 = state_58412;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58412__$1,inst_58410);
} else {
if((state_val_58413 === (12))){
var state_58412__$1 = state_58412;
var statearr_58426_60411 = state_58412__$1;
(statearr_58426_60411[(2)] = null);

(statearr_58426_60411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58413 === (2))){
var state_58412__$1 = state_58412;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58412__$1,(4),ch);
} else {
if((state_val_58413 === (11))){
var inst_58389 = (state_58412[(7)]);
var inst_58399 = (state_58412[(2)]);
var state_58412__$1 = state_58412;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_58412__$1,(8),inst_58399,inst_58389);
} else {
if((state_val_58413 === (9))){
var state_58412__$1 = state_58412;
var statearr_58427_60415 = state_58412__$1;
(statearr_58427_60415[(2)] = tc);

(statearr_58427_60415[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58413 === (5))){
var inst_58392 = cljs.core.async.close_BANG_(tc);
var inst_58393 = cljs.core.async.close_BANG_(fc);
var state_58412__$1 = (function (){var statearr_58432 = state_58412;
(statearr_58432[(8)] = inst_58392);

return statearr_58432;
})();
var statearr_58433_60416 = state_58412__$1;
(statearr_58433_60416[(2)] = inst_58393);

(statearr_58433_60416[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58413 === (14))){
var inst_58406 = (state_58412[(2)]);
var state_58412__$1 = state_58412;
var statearr_58434_60417 = state_58412__$1;
(statearr_58434_60417[(2)] = inst_58406);

(statearr_58434_60417[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58413 === (10))){
var state_58412__$1 = state_58412;
var statearr_58440_60421 = state_58412__$1;
(statearr_58440_60421[(2)] = fc);

(statearr_58440_60421[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58413 === (8))){
var inst_58401 = (state_58412[(2)]);
var state_58412__$1 = state_58412;
if(cljs.core.truth_(inst_58401)){
var statearr_58441_60422 = state_58412__$1;
(statearr_58441_60422[(1)] = (12));

} else {
var statearr_58442_60423 = state_58412__$1;
(statearr_58442_60423[(1)] = (13));

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
var cljs$core$async$state_machine__48474__auto__ = null;
var cljs$core$async$state_machine__48474__auto____0 = (function (){
var statearr_58443 = [null,null,null,null,null,null,null,null,null];
(statearr_58443[(0)] = cljs$core$async$state_machine__48474__auto__);

(statearr_58443[(1)] = (1));

return statearr_58443;
});
var cljs$core$async$state_machine__48474__auto____1 = (function (state_58412){
while(true){
var ret_value__48475__auto__ = (function (){try{while(true){
var result__48476__auto__ = switch__48472__auto__(state_58412);
if(cljs.core.keyword_identical_QMARK_(result__48476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48476__auto__;
}
break;
}
}catch (e58444){var ex__48478__auto__ = e58444;
var statearr_58445_60424 = state_58412;
(statearr_58445_60424[(2)] = ex__48478__auto__);


if(cljs.core.seq((state_58412[(4)]))){
var statearr_58446_60425 = state_58412;
(statearr_58446_60425[(1)] = cljs.core.first((state_58412[(4)])));

} else {
throw ex__48478__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60426 = state_58412;
state_58412 = G__60426;
continue;
} else {
return ret_value__48475__auto__;
}
break;
}
});
cljs$core$async$state_machine__48474__auto__ = function(state_58412){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48474__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48474__auto____1.call(this,state_58412);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48474__auto____0;
cljs$core$async$state_machine__48474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48474__auto____1;
return cljs$core$async$state_machine__48474__auto__;
})()
})();
var state__48699__auto__ = (function (){var statearr_58451 = f__48698__auto__();
(statearr_58451[(6)] = c__48697__auto___60397);

return statearr_58451;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48699__auto__);
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
var c__48697__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48698__auto__ = (function (){var switch__48472__auto__ = (function (state_58478){
var state_val_58479 = (state_58478[(1)]);
if((state_val_58479 === (7))){
var inst_58474 = (state_58478[(2)]);
var state_58478__$1 = state_58478;
var statearr_58482_60434 = state_58478__$1;
(statearr_58482_60434[(2)] = inst_58474);

(statearr_58482_60434[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58479 === (1))){
var inst_58457 = init;
var inst_58458 = inst_58457;
var state_58478__$1 = (function (){var statearr_58485 = state_58478;
(statearr_58485[(7)] = inst_58458);

return statearr_58485;
})();
var statearr_58486_60435 = state_58478__$1;
(statearr_58486_60435[(2)] = null);

(statearr_58486_60435[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58479 === (4))){
var inst_58461 = (state_58478[(8)]);
var inst_58461__$1 = (state_58478[(2)]);
var inst_58462 = (inst_58461__$1 == null);
var state_58478__$1 = (function (){var statearr_58487 = state_58478;
(statearr_58487[(8)] = inst_58461__$1);

return statearr_58487;
})();
if(cljs.core.truth_(inst_58462)){
var statearr_58488_60436 = state_58478__$1;
(statearr_58488_60436[(1)] = (5));

} else {
var statearr_58489_60437 = state_58478__$1;
(statearr_58489_60437[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58479 === (6))){
var inst_58461 = (state_58478[(8)]);
var inst_58465 = (state_58478[(9)]);
var inst_58458 = (state_58478[(7)]);
var inst_58465__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_58458,inst_58461) : f.call(null,inst_58458,inst_58461));
var inst_58466 = cljs.core.reduced_QMARK_(inst_58465__$1);
var state_58478__$1 = (function (){var statearr_58494 = state_58478;
(statearr_58494[(9)] = inst_58465__$1);

return statearr_58494;
})();
if(inst_58466){
var statearr_58495_60438 = state_58478__$1;
(statearr_58495_60438[(1)] = (8));

} else {
var statearr_58497_60439 = state_58478__$1;
(statearr_58497_60439[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58479 === (3))){
var inst_58476 = (state_58478[(2)]);
var state_58478__$1 = state_58478;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58478__$1,inst_58476);
} else {
if((state_val_58479 === (2))){
var state_58478__$1 = state_58478;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58478__$1,(4),ch);
} else {
if((state_val_58479 === (9))){
var inst_58465 = (state_58478[(9)]);
var inst_58458 = inst_58465;
var state_58478__$1 = (function (){var statearr_58498 = state_58478;
(statearr_58498[(7)] = inst_58458);

return statearr_58498;
})();
var statearr_58499_60443 = state_58478__$1;
(statearr_58499_60443[(2)] = null);

(statearr_58499_60443[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58479 === (5))){
var inst_58458 = (state_58478[(7)]);
var state_58478__$1 = state_58478;
var statearr_58500_60444 = state_58478__$1;
(statearr_58500_60444[(2)] = inst_58458);

(statearr_58500_60444[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58479 === (10))){
var inst_58472 = (state_58478[(2)]);
var state_58478__$1 = state_58478;
var statearr_58505_60448 = state_58478__$1;
(statearr_58505_60448[(2)] = inst_58472);

(statearr_58505_60448[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58479 === (8))){
var inst_58465 = (state_58478[(9)]);
var inst_58468 = cljs.core.deref(inst_58465);
var state_58478__$1 = state_58478;
var statearr_58506_60449 = state_58478__$1;
(statearr_58506_60449[(2)] = inst_58468);

(statearr_58506_60449[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__48474__auto__ = null;
var cljs$core$async$reduce_$_state_machine__48474__auto____0 = (function (){
var statearr_58508 = [null,null,null,null,null,null,null,null,null,null];
(statearr_58508[(0)] = cljs$core$async$reduce_$_state_machine__48474__auto__);

(statearr_58508[(1)] = (1));

return statearr_58508;
});
var cljs$core$async$reduce_$_state_machine__48474__auto____1 = (function (state_58478){
while(true){
var ret_value__48475__auto__ = (function (){try{while(true){
var result__48476__auto__ = switch__48472__auto__(state_58478);
if(cljs.core.keyword_identical_QMARK_(result__48476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48476__auto__;
}
break;
}
}catch (e58509){var ex__48478__auto__ = e58509;
var statearr_58510_60450 = state_58478;
(statearr_58510_60450[(2)] = ex__48478__auto__);


if(cljs.core.seq((state_58478[(4)]))){
var statearr_58514_60451 = state_58478;
(statearr_58514_60451[(1)] = cljs.core.first((state_58478[(4)])));

} else {
throw ex__48478__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60455 = state_58478;
state_58478 = G__60455;
continue;
} else {
return ret_value__48475__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__48474__auto__ = function(state_58478){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__48474__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__48474__auto____1.call(this,state_58478);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__48474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__48474__auto____0;
cljs$core$async$reduce_$_state_machine__48474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__48474__auto____1;
return cljs$core$async$reduce_$_state_machine__48474__auto__;
})()
})();
var state__48699__auto__ = (function (){var statearr_58515 = f__48698__auto__();
(statearr_58515[(6)] = c__48697__auto__);

return statearr_58515;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48699__auto__);
}));

return c__48697__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__48697__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48698__auto__ = (function (){var switch__48472__auto__ = (function (state_58521){
var state_val_58522 = (state_58521[(1)]);
if((state_val_58522 === (1))){
var inst_58516 = cljs.core.async.reduce(f__$1,init,ch);
var state_58521__$1 = state_58521;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58521__$1,(2),inst_58516);
} else {
if((state_val_58522 === (2))){
var inst_58518 = (state_58521[(2)]);
var inst_58519 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_58518) : f__$1.call(null,inst_58518));
var state_58521__$1 = state_58521;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58521__$1,inst_58519);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__48474__auto__ = null;
var cljs$core$async$transduce_$_state_machine__48474__auto____0 = (function (){
var statearr_58529 = [null,null,null,null,null,null,null];
(statearr_58529[(0)] = cljs$core$async$transduce_$_state_machine__48474__auto__);

(statearr_58529[(1)] = (1));

return statearr_58529;
});
var cljs$core$async$transduce_$_state_machine__48474__auto____1 = (function (state_58521){
while(true){
var ret_value__48475__auto__ = (function (){try{while(true){
var result__48476__auto__ = switch__48472__auto__(state_58521);
if(cljs.core.keyword_identical_QMARK_(result__48476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48476__auto__;
}
break;
}
}catch (e58530){var ex__48478__auto__ = e58530;
var statearr_58531_60456 = state_58521;
(statearr_58531_60456[(2)] = ex__48478__auto__);


if(cljs.core.seq((state_58521[(4)]))){
var statearr_58532_60457 = state_58521;
(statearr_58532_60457[(1)] = cljs.core.first((state_58521[(4)])));

} else {
throw ex__48478__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60458 = state_58521;
state_58521 = G__60458;
continue;
} else {
return ret_value__48475__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__48474__auto__ = function(state_58521){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__48474__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__48474__auto____1.call(this,state_58521);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__48474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__48474__auto____0;
cljs$core$async$transduce_$_state_machine__48474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__48474__auto____1;
return cljs$core$async$transduce_$_state_machine__48474__auto__;
})()
})();
var state__48699__auto__ = (function (){var statearr_58537 = f__48698__auto__();
(statearr_58537[(6)] = c__48697__auto__);

return statearr_58537;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48699__auto__);
}));

return c__48697__auto__;
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
var G__58542 = arguments.length;
switch (G__58542) {
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
var c__48697__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48698__auto__ = (function (){var switch__48472__auto__ = (function (state_58577){
var state_val_58578 = (state_58577[(1)]);
if((state_val_58578 === (7))){
var inst_58559 = (state_58577[(2)]);
var state_58577__$1 = state_58577;
var statearr_58582_60461 = state_58577__$1;
(statearr_58582_60461[(2)] = inst_58559);

(statearr_58582_60461[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58578 === (1))){
var inst_58550 = cljs.core.seq(coll);
var inst_58551 = inst_58550;
var state_58577__$1 = (function (){var statearr_58583 = state_58577;
(statearr_58583[(7)] = inst_58551);

return statearr_58583;
})();
var statearr_58584_60462 = state_58577__$1;
(statearr_58584_60462[(2)] = null);

(statearr_58584_60462[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58578 === (4))){
var inst_58551 = (state_58577[(7)]);
var inst_58557 = cljs.core.first(inst_58551);
var state_58577__$1 = state_58577;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_58577__$1,(7),ch,inst_58557);
} else {
if((state_val_58578 === (13))){
var inst_58571 = (state_58577[(2)]);
var state_58577__$1 = state_58577;
var statearr_58592_60463 = state_58577__$1;
(statearr_58592_60463[(2)] = inst_58571);

(statearr_58592_60463[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58578 === (6))){
var inst_58562 = (state_58577[(2)]);
var state_58577__$1 = state_58577;
if(cljs.core.truth_(inst_58562)){
var statearr_58593_60464 = state_58577__$1;
(statearr_58593_60464[(1)] = (8));

} else {
var statearr_58594_60465 = state_58577__$1;
(statearr_58594_60465[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58578 === (3))){
var inst_58575 = (state_58577[(2)]);
var state_58577__$1 = state_58577;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58577__$1,inst_58575);
} else {
if((state_val_58578 === (12))){
var state_58577__$1 = state_58577;
var statearr_58595_60466 = state_58577__$1;
(statearr_58595_60466[(2)] = null);

(statearr_58595_60466[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58578 === (2))){
var inst_58551 = (state_58577[(7)]);
var state_58577__$1 = state_58577;
if(cljs.core.truth_(inst_58551)){
var statearr_58596_60467 = state_58577__$1;
(statearr_58596_60467[(1)] = (4));

} else {
var statearr_58597_60468 = state_58577__$1;
(statearr_58597_60468[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58578 === (11))){
var inst_58568 = cljs.core.async.close_BANG_(ch);
var state_58577__$1 = state_58577;
var statearr_58599_60469 = state_58577__$1;
(statearr_58599_60469[(2)] = inst_58568);

(statearr_58599_60469[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58578 === (9))){
var state_58577__$1 = state_58577;
if(cljs.core.truth_(close_QMARK_)){
var statearr_58600_60470 = state_58577__$1;
(statearr_58600_60470[(1)] = (11));

} else {
var statearr_58601_60471 = state_58577__$1;
(statearr_58601_60471[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58578 === (5))){
var inst_58551 = (state_58577[(7)]);
var state_58577__$1 = state_58577;
var statearr_58602_60472 = state_58577__$1;
(statearr_58602_60472[(2)] = inst_58551);

(statearr_58602_60472[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58578 === (10))){
var inst_58573 = (state_58577[(2)]);
var state_58577__$1 = state_58577;
var statearr_58603_60473 = state_58577__$1;
(statearr_58603_60473[(2)] = inst_58573);

(statearr_58603_60473[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58578 === (8))){
var inst_58551 = (state_58577[(7)]);
var inst_58564 = cljs.core.next(inst_58551);
var inst_58551__$1 = inst_58564;
var state_58577__$1 = (function (){var statearr_58604 = state_58577;
(statearr_58604[(7)] = inst_58551__$1);

return statearr_58604;
})();
var statearr_58605_60474 = state_58577__$1;
(statearr_58605_60474[(2)] = null);

(statearr_58605_60474[(1)] = (2));


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
var cljs$core$async$state_machine__48474__auto__ = null;
var cljs$core$async$state_machine__48474__auto____0 = (function (){
var statearr_58606 = [null,null,null,null,null,null,null,null];
(statearr_58606[(0)] = cljs$core$async$state_machine__48474__auto__);

(statearr_58606[(1)] = (1));

return statearr_58606;
});
var cljs$core$async$state_machine__48474__auto____1 = (function (state_58577){
while(true){
var ret_value__48475__auto__ = (function (){try{while(true){
var result__48476__auto__ = switch__48472__auto__(state_58577);
if(cljs.core.keyword_identical_QMARK_(result__48476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48476__auto__;
}
break;
}
}catch (e58607){var ex__48478__auto__ = e58607;
var statearr_58608_60475 = state_58577;
(statearr_58608_60475[(2)] = ex__48478__auto__);


if(cljs.core.seq((state_58577[(4)]))){
var statearr_58609_60476 = state_58577;
(statearr_58609_60476[(1)] = cljs.core.first((state_58577[(4)])));

} else {
throw ex__48478__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60477 = state_58577;
state_58577 = G__60477;
continue;
} else {
return ret_value__48475__auto__;
}
break;
}
});
cljs$core$async$state_machine__48474__auto__ = function(state_58577){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48474__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48474__auto____1.call(this,state_58577);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48474__auto____0;
cljs$core$async$state_machine__48474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48474__auto____1;
return cljs$core$async$state_machine__48474__auto__;
})()
})();
var state__48699__auto__ = (function (){var statearr_58613 = f__48698__auto__();
(statearr_58613[(6)] = c__48697__auto__);

return statearr_58613;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48699__auto__);
}));

return c__48697__auto__;
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
var G__58617 = arguments.length;
switch (G__58617) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_60479 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_60479(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_60480 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_60480(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_60481 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_60481(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_60482 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_60482(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async58653 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async58653 = (function (ch,cs,meta58654){
this.ch = ch;
this.cs = cs;
this.meta58654 = meta58654;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async58653.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58655,meta58654__$1){
var self__ = this;
var _58655__$1 = this;
return (new cljs.core.async.t_cljs$core$async58653(self__.ch,self__.cs,meta58654__$1));
}));

(cljs.core.async.t_cljs$core$async58653.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58655){
var self__ = this;
var _58655__$1 = this;
return self__.meta58654;
}));

(cljs.core.async.t_cljs$core$async58653.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async58653.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async58653.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async58653.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async58653.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async58653.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async58653.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta58654","meta58654",-878435168,null)], null);
}));

(cljs.core.async.t_cljs$core$async58653.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async58653.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async58653");

(cljs.core.async.t_cljs$core$async58653.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async58653");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async58653.
 */
cljs.core.async.__GT_t_cljs$core$async58653 = (function cljs$core$async$mult_$___GT_t_cljs$core$async58653(ch__$1,cs__$1,meta58654){
return (new cljs.core.async.t_cljs$core$async58653(ch__$1,cs__$1,meta58654));
});

}

return (new cljs.core.async.t_cljs$core$async58653(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__48697__auto___60491 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48698__auto__ = (function (){var switch__48472__auto__ = (function (state_58871){
var state_val_58873 = (state_58871[(1)]);
if((state_val_58873 === (7))){
var inst_58863 = (state_58871[(2)]);
var state_58871__$1 = state_58871;
var statearr_58875_60492 = state_58871__$1;
(statearr_58875_60492[(2)] = inst_58863);

(statearr_58875_60492[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58873 === (20))){
var inst_58744 = (state_58871[(7)]);
var inst_58760 = cljs.core.first(inst_58744);
var inst_58761 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_58760,(0),null);
var inst_58762 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_58760,(1),null);
var state_58871__$1 = (function (){var statearr_58878 = state_58871;
(statearr_58878[(8)] = inst_58761);

return statearr_58878;
})();
if(cljs.core.truth_(inst_58762)){
var statearr_58879_60497 = state_58871__$1;
(statearr_58879_60497[(1)] = (22));

} else {
var statearr_58881_60498 = state_58871__$1;
(statearr_58881_60498[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58873 === (27))){
var inst_58707 = (state_58871[(9)]);
var inst_58798 = (state_58871[(10)]);
var inst_58800 = (state_58871[(11)]);
var inst_58805 = (state_58871[(12)]);
var inst_58805__$1 = cljs.core._nth(inst_58798,inst_58800);
var inst_58806 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_58805__$1,inst_58707,done);
var state_58871__$1 = (function (){var statearr_58883 = state_58871;
(statearr_58883[(12)] = inst_58805__$1);

return statearr_58883;
})();
if(cljs.core.truth_(inst_58806)){
var statearr_58884_60510 = state_58871__$1;
(statearr_58884_60510[(1)] = (30));

} else {
var statearr_58885_60511 = state_58871__$1;
(statearr_58885_60511[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58873 === (1))){
var state_58871__$1 = state_58871;
var statearr_58886_60518 = state_58871__$1;
(statearr_58886_60518[(2)] = null);

(statearr_58886_60518[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58873 === (24))){
var inst_58744 = (state_58871[(7)]);
var inst_58775 = (state_58871[(2)]);
var inst_58776 = cljs.core.next(inst_58744);
var inst_58720 = inst_58776;
var inst_58721 = null;
var inst_58722 = (0);
var inst_58723 = (0);
var state_58871__$1 = (function (){var statearr_58893 = state_58871;
(statearr_58893[(13)] = inst_58720);

(statearr_58893[(14)] = inst_58723);

(statearr_58893[(15)] = inst_58775);

(statearr_58893[(16)] = inst_58722);

(statearr_58893[(17)] = inst_58721);

return statearr_58893;
})();
var statearr_58894_60519 = state_58871__$1;
(statearr_58894_60519[(2)] = null);

(statearr_58894_60519[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58873 === (39))){
var state_58871__$1 = state_58871;
var statearr_58900_60520 = state_58871__$1;
(statearr_58900_60520[(2)] = null);

(statearr_58900_60520[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58873 === (4))){
var inst_58707 = (state_58871[(9)]);
var inst_58707__$1 = (state_58871[(2)]);
var inst_58712 = (inst_58707__$1 == null);
var state_58871__$1 = (function (){var statearr_58901 = state_58871;
(statearr_58901[(9)] = inst_58707__$1);

return statearr_58901;
})();
if(cljs.core.truth_(inst_58712)){
var statearr_58902_60521 = state_58871__$1;
(statearr_58902_60521[(1)] = (5));

} else {
var statearr_58903_60522 = state_58871__$1;
(statearr_58903_60522[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58873 === (15))){
var inst_58720 = (state_58871[(13)]);
var inst_58723 = (state_58871[(14)]);
var inst_58722 = (state_58871[(16)]);
var inst_58721 = (state_58871[(17)]);
var inst_58740 = (state_58871[(2)]);
var inst_58741 = (inst_58723 + (1));
var tmp58895 = inst_58720;
var tmp58896 = inst_58722;
var tmp58897 = inst_58721;
var inst_58720__$1 = tmp58895;
var inst_58721__$1 = tmp58897;
var inst_58722__$1 = tmp58896;
var inst_58723__$1 = inst_58741;
var state_58871__$1 = (function (){var statearr_58906 = state_58871;
(statearr_58906[(13)] = inst_58720__$1);

(statearr_58906[(18)] = inst_58740);

(statearr_58906[(14)] = inst_58723__$1);

(statearr_58906[(16)] = inst_58722__$1);

(statearr_58906[(17)] = inst_58721__$1);

return statearr_58906;
})();
var statearr_58908_60529 = state_58871__$1;
(statearr_58908_60529[(2)] = null);

(statearr_58908_60529[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58873 === (21))){
var inst_58779 = (state_58871[(2)]);
var state_58871__$1 = state_58871;
var statearr_58913_60530 = state_58871__$1;
(statearr_58913_60530[(2)] = inst_58779);

(statearr_58913_60530[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58873 === (31))){
var inst_58805 = (state_58871[(12)]);
var inst_58809 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_58805);
var state_58871__$1 = state_58871;
var statearr_58919_60531 = state_58871__$1;
(statearr_58919_60531[(2)] = inst_58809);

(statearr_58919_60531[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58873 === (32))){
var inst_58797 = (state_58871[(19)]);
var inst_58799 = (state_58871[(20)]);
var inst_58798 = (state_58871[(10)]);
var inst_58800 = (state_58871[(11)]);
var inst_58811 = (state_58871[(2)]);
var inst_58812 = (inst_58800 + (1));
var tmp58909 = inst_58797;
var tmp58910 = inst_58799;
var tmp58911 = inst_58798;
var inst_58797__$1 = tmp58909;
var inst_58798__$1 = tmp58911;
var inst_58799__$1 = tmp58910;
var inst_58800__$1 = inst_58812;
var state_58871__$1 = (function (){var statearr_58921 = state_58871;
(statearr_58921[(19)] = inst_58797__$1);

(statearr_58921[(20)] = inst_58799__$1);

(statearr_58921[(10)] = inst_58798__$1);

(statearr_58921[(11)] = inst_58800__$1);

(statearr_58921[(21)] = inst_58811);

return statearr_58921;
})();
var statearr_58923_60538 = state_58871__$1;
(statearr_58923_60538[(2)] = null);

(statearr_58923_60538[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58873 === (40))){
var inst_58835 = (state_58871[(22)]);
var inst_58839 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_58835);
var state_58871__$1 = state_58871;
var statearr_58924_60539 = state_58871__$1;
(statearr_58924_60539[(2)] = inst_58839);

(statearr_58924_60539[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58873 === (33))){
var inst_58817 = (state_58871[(23)]);
var inst_58820 = cljs.core.chunked_seq_QMARK_(inst_58817);
var state_58871__$1 = state_58871;
if(inst_58820){
var statearr_58925_60540 = state_58871__$1;
(statearr_58925_60540[(1)] = (36));

} else {
var statearr_58926_60541 = state_58871__$1;
(statearr_58926_60541[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58873 === (13))){
var inst_58734 = (state_58871[(24)]);
var inst_58737 = cljs.core.async.close_BANG_(inst_58734);
var state_58871__$1 = state_58871;
var statearr_58927_60542 = state_58871__$1;
(statearr_58927_60542[(2)] = inst_58737);

(statearr_58927_60542[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58873 === (22))){
var inst_58761 = (state_58871[(8)]);
var inst_58764 = cljs.core.async.close_BANG_(inst_58761);
var state_58871__$1 = state_58871;
var statearr_58928_60543 = state_58871__$1;
(statearr_58928_60543[(2)] = inst_58764);

(statearr_58928_60543[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58873 === (36))){
var inst_58817 = (state_58871[(23)]);
var inst_58830 = cljs.core.chunk_first(inst_58817);
var inst_58831 = cljs.core.chunk_rest(inst_58817);
var inst_58832 = cljs.core.count(inst_58830);
var inst_58797 = inst_58831;
var inst_58798 = inst_58830;
var inst_58799 = inst_58832;
var inst_58800 = (0);
var state_58871__$1 = (function (){var statearr_58929 = state_58871;
(statearr_58929[(19)] = inst_58797);

(statearr_58929[(20)] = inst_58799);

(statearr_58929[(10)] = inst_58798);

(statearr_58929[(11)] = inst_58800);

return statearr_58929;
})();
var statearr_58931_60544 = state_58871__$1;
(statearr_58931_60544[(2)] = null);

(statearr_58931_60544[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58873 === (41))){
var inst_58817 = (state_58871[(23)]);
var inst_58841 = (state_58871[(2)]);
var inst_58842 = cljs.core.next(inst_58817);
var inst_58797 = inst_58842;
var inst_58798 = null;
var inst_58799 = (0);
var inst_58800 = (0);
var state_58871__$1 = (function (){var statearr_58932 = state_58871;
(statearr_58932[(19)] = inst_58797);

(statearr_58932[(20)] = inst_58799);

(statearr_58932[(10)] = inst_58798);

(statearr_58932[(11)] = inst_58800);

(statearr_58932[(25)] = inst_58841);

return statearr_58932;
})();
var statearr_58933_60545 = state_58871__$1;
(statearr_58933_60545[(2)] = null);

(statearr_58933_60545[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58873 === (43))){
var state_58871__$1 = state_58871;
var statearr_58934_60546 = state_58871__$1;
(statearr_58934_60546[(2)] = null);

(statearr_58934_60546[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58873 === (29))){
var inst_58850 = (state_58871[(2)]);
var state_58871__$1 = state_58871;
var statearr_58936_60547 = state_58871__$1;
(statearr_58936_60547[(2)] = inst_58850);

(statearr_58936_60547[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58873 === (44))){
var inst_58859 = (state_58871[(2)]);
var state_58871__$1 = (function (){var statearr_58937 = state_58871;
(statearr_58937[(26)] = inst_58859);

return statearr_58937;
})();
var statearr_58938_60548 = state_58871__$1;
(statearr_58938_60548[(2)] = null);

(statearr_58938_60548[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58873 === (6))){
var inst_58789 = (state_58871[(27)]);
var inst_58788 = cljs.core.deref(cs);
var inst_58789__$1 = cljs.core.keys(inst_58788);
var inst_58790 = cljs.core.count(inst_58789__$1);
var inst_58791 = cljs.core.reset_BANG_(dctr,inst_58790);
var inst_58796 = cljs.core.seq(inst_58789__$1);
var inst_58797 = inst_58796;
var inst_58798 = null;
var inst_58799 = (0);
var inst_58800 = (0);
var state_58871__$1 = (function (){var statearr_58941 = state_58871;
(statearr_58941[(19)] = inst_58797);

(statearr_58941[(20)] = inst_58799);

(statearr_58941[(27)] = inst_58789__$1);

(statearr_58941[(10)] = inst_58798);

(statearr_58941[(11)] = inst_58800);

(statearr_58941[(28)] = inst_58791);

return statearr_58941;
})();
var statearr_58942_60555 = state_58871__$1;
(statearr_58942_60555[(2)] = null);

(statearr_58942_60555[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58873 === (28))){
var inst_58797 = (state_58871[(19)]);
var inst_58817 = (state_58871[(23)]);
var inst_58817__$1 = cljs.core.seq(inst_58797);
var state_58871__$1 = (function (){var statearr_58943 = state_58871;
(statearr_58943[(23)] = inst_58817__$1);

return statearr_58943;
})();
if(inst_58817__$1){
var statearr_58944_60556 = state_58871__$1;
(statearr_58944_60556[(1)] = (33));

} else {
var statearr_58945_60557 = state_58871__$1;
(statearr_58945_60557[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58873 === (25))){
var inst_58799 = (state_58871[(20)]);
var inst_58800 = (state_58871[(11)]);
var inst_58802 = (inst_58800 < inst_58799);
var inst_58803 = inst_58802;
var state_58871__$1 = state_58871;
if(cljs.core.truth_(inst_58803)){
var statearr_58946_60558 = state_58871__$1;
(statearr_58946_60558[(1)] = (27));

} else {
var statearr_58947_60559 = state_58871__$1;
(statearr_58947_60559[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58873 === (34))){
var state_58871__$1 = state_58871;
var statearr_58948_60560 = state_58871__$1;
(statearr_58948_60560[(2)] = null);

(statearr_58948_60560[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58873 === (17))){
var state_58871__$1 = state_58871;
var statearr_58949_60561 = state_58871__$1;
(statearr_58949_60561[(2)] = null);

(statearr_58949_60561[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58873 === (3))){
var inst_58866 = (state_58871[(2)]);
var state_58871__$1 = state_58871;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58871__$1,inst_58866);
} else {
if((state_val_58873 === (12))){
var inst_58784 = (state_58871[(2)]);
var state_58871__$1 = state_58871;
var statearr_58951_60562 = state_58871__$1;
(statearr_58951_60562[(2)] = inst_58784);

(statearr_58951_60562[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58873 === (2))){
var state_58871__$1 = state_58871;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58871__$1,(4),ch);
} else {
if((state_val_58873 === (23))){
var state_58871__$1 = state_58871;
var statearr_58953_60563 = state_58871__$1;
(statearr_58953_60563[(2)] = null);

(statearr_58953_60563[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58873 === (35))){
var inst_58848 = (state_58871[(2)]);
var state_58871__$1 = state_58871;
var statearr_58956_60564 = state_58871__$1;
(statearr_58956_60564[(2)] = inst_58848);

(statearr_58956_60564[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58873 === (19))){
var inst_58744 = (state_58871[(7)]);
var inst_58749 = cljs.core.chunk_first(inst_58744);
var inst_58750 = cljs.core.chunk_rest(inst_58744);
var inst_58751 = cljs.core.count(inst_58749);
var inst_58720 = inst_58750;
var inst_58721 = inst_58749;
var inst_58722 = inst_58751;
var inst_58723 = (0);
var state_58871__$1 = (function (){var statearr_58959 = state_58871;
(statearr_58959[(13)] = inst_58720);

(statearr_58959[(14)] = inst_58723);

(statearr_58959[(16)] = inst_58722);

(statearr_58959[(17)] = inst_58721);

return statearr_58959;
})();
var statearr_58960_60566 = state_58871__$1;
(statearr_58960_60566[(2)] = null);

(statearr_58960_60566[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58873 === (11))){
var inst_58720 = (state_58871[(13)]);
var inst_58744 = (state_58871[(7)]);
var inst_58744__$1 = cljs.core.seq(inst_58720);
var state_58871__$1 = (function (){var statearr_58963 = state_58871;
(statearr_58963[(7)] = inst_58744__$1);

return statearr_58963;
})();
if(inst_58744__$1){
var statearr_58964_60571 = state_58871__$1;
(statearr_58964_60571[(1)] = (16));

} else {
var statearr_58965_60572 = state_58871__$1;
(statearr_58965_60572[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58873 === (9))){
var inst_58786 = (state_58871[(2)]);
var state_58871__$1 = state_58871;
var statearr_58968_60573 = state_58871__$1;
(statearr_58968_60573[(2)] = inst_58786);

(statearr_58968_60573[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58873 === (5))){
var inst_58718 = cljs.core.deref(cs);
var inst_58719 = cljs.core.seq(inst_58718);
var inst_58720 = inst_58719;
var inst_58721 = null;
var inst_58722 = (0);
var inst_58723 = (0);
var state_58871__$1 = (function (){var statearr_58969 = state_58871;
(statearr_58969[(13)] = inst_58720);

(statearr_58969[(14)] = inst_58723);

(statearr_58969[(16)] = inst_58722);

(statearr_58969[(17)] = inst_58721);

return statearr_58969;
})();
var statearr_58970_60576 = state_58871__$1;
(statearr_58970_60576[(2)] = null);

(statearr_58970_60576[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58873 === (14))){
var state_58871__$1 = state_58871;
var statearr_58971_60578 = state_58871__$1;
(statearr_58971_60578[(2)] = null);

(statearr_58971_60578[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58873 === (45))){
var inst_58856 = (state_58871[(2)]);
var state_58871__$1 = state_58871;
var statearr_58973_60579 = state_58871__$1;
(statearr_58973_60579[(2)] = inst_58856);

(statearr_58973_60579[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58873 === (26))){
var inst_58789 = (state_58871[(27)]);
var inst_58852 = (state_58871[(2)]);
var inst_58853 = cljs.core.seq(inst_58789);
var state_58871__$1 = (function (){var statearr_58975 = state_58871;
(statearr_58975[(29)] = inst_58852);

return statearr_58975;
})();
if(inst_58853){
var statearr_58977_60581 = state_58871__$1;
(statearr_58977_60581[(1)] = (42));

} else {
var statearr_58979_60582 = state_58871__$1;
(statearr_58979_60582[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58873 === (16))){
var inst_58744 = (state_58871[(7)]);
var inst_58747 = cljs.core.chunked_seq_QMARK_(inst_58744);
var state_58871__$1 = state_58871;
if(inst_58747){
var statearr_58980_60583 = state_58871__$1;
(statearr_58980_60583[(1)] = (19));

} else {
var statearr_58981_60584 = state_58871__$1;
(statearr_58981_60584[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58873 === (38))){
var inst_58845 = (state_58871[(2)]);
var state_58871__$1 = state_58871;
var statearr_58983_60585 = state_58871__$1;
(statearr_58983_60585[(2)] = inst_58845);

(statearr_58983_60585[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58873 === (30))){
var state_58871__$1 = state_58871;
var statearr_58984_60586 = state_58871__$1;
(statearr_58984_60586[(2)] = null);

(statearr_58984_60586[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58873 === (10))){
var inst_58723 = (state_58871[(14)]);
var inst_58721 = (state_58871[(17)]);
var inst_58732 = cljs.core._nth(inst_58721,inst_58723);
var inst_58734 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_58732,(0),null);
var inst_58735 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_58732,(1),null);
var state_58871__$1 = (function (){var statearr_58985 = state_58871;
(statearr_58985[(24)] = inst_58734);

return statearr_58985;
})();
if(cljs.core.truth_(inst_58735)){
var statearr_58986_60587 = state_58871__$1;
(statearr_58986_60587[(1)] = (13));

} else {
var statearr_58987_60588 = state_58871__$1;
(statearr_58987_60588[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58873 === (18))){
var inst_58782 = (state_58871[(2)]);
var state_58871__$1 = state_58871;
var statearr_58990_60589 = state_58871__$1;
(statearr_58990_60589[(2)] = inst_58782);

(statearr_58990_60589[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58873 === (42))){
var state_58871__$1 = state_58871;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58871__$1,(45),dchan);
} else {
if((state_val_58873 === (37))){
var inst_58707 = (state_58871[(9)]);
var inst_58835 = (state_58871[(22)]);
var inst_58817 = (state_58871[(23)]);
var inst_58835__$1 = cljs.core.first(inst_58817);
var inst_58836 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_58835__$1,inst_58707,done);
var state_58871__$1 = (function (){var statearr_58998 = state_58871;
(statearr_58998[(22)] = inst_58835__$1);

return statearr_58998;
})();
if(cljs.core.truth_(inst_58836)){
var statearr_58999_60590 = state_58871__$1;
(statearr_58999_60590[(1)] = (39));

} else {
var statearr_59003_60591 = state_58871__$1;
(statearr_59003_60591[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58873 === (8))){
var inst_58723 = (state_58871[(14)]);
var inst_58722 = (state_58871[(16)]);
var inst_58725 = (inst_58723 < inst_58722);
var inst_58726 = inst_58725;
var state_58871__$1 = state_58871;
if(cljs.core.truth_(inst_58726)){
var statearr_59005_60592 = state_58871__$1;
(statearr_59005_60592[(1)] = (10));

} else {
var statearr_59006_60593 = state_58871__$1;
(statearr_59006_60593[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__48474__auto__ = null;
var cljs$core$async$mult_$_state_machine__48474__auto____0 = (function (){
var statearr_59008 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_59008[(0)] = cljs$core$async$mult_$_state_machine__48474__auto__);

(statearr_59008[(1)] = (1));

return statearr_59008;
});
var cljs$core$async$mult_$_state_machine__48474__auto____1 = (function (state_58871){
while(true){
var ret_value__48475__auto__ = (function (){try{while(true){
var result__48476__auto__ = switch__48472__auto__(state_58871);
if(cljs.core.keyword_identical_QMARK_(result__48476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48476__auto__;
}
break;
}
}catch (e59010){var ex__48478__auto__ = e59010;
var statearr_59011_60594 = state_58871;
(statearr_59011_60594[(2)] = ex__48478__auto__);


if(cljs.core.seq((state_58871[(4)]))){
var statearr_59012_60595 = state_58871;
(statearr_59012_60595[(1)] = cljs.core.first((state_58871[(4)])));

} else {
throw ex__48478__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60596 = state_58871;
state_58871 = G__60596;
continue;
} else {
return ret_value__48475__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__48474__auto__ = function(state_58871){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__48474__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__48474__auto____1.call(this,state_58871);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__48474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__48474__auto____0;
cljs$core$async$mult_$_state_machine__48474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__48474__auto____1;
return cljs$core$async$mult_$_state_machine__48474__auto__;
})()
})();
var state__48699__auto__ = (function (){var statearr_59015 = f__48698__auto__();
(statearr_59015[(6)] = c__48697__auto___60491);

return statearr_59015;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48699__auto__);
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
var G__59020 = arguments.length;
switch (G__59020) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_60600 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_60600(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_60601 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_60601(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_60602 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_60602(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_60603 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_60603(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_60604 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_60604(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___60605 = arguments.length;
var i__4830__auto___60606 = (0);
while(true){
if((i__4830__auto___60606 < len__4829__auto___60605)){
args__4835__auto__.push((arguments[i__4830__auto___60606]));

var G__60607 = (i__4830__auto___60606 + (1));
i__4830__auto___60606 = G__60607;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((3) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4836__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__59040){
var map__59042 = p__59040;
var map__59042__$1 = cljs.core.__destructure_map(map__59042);
var opts = map__59042__$1;
var statearr_59043_60609 = state;
(statearr_59043_60609[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_59044_60610 = state;
(statearr_59044_60610[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_59045_60611 = state;
(statearr_59045_60611[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq59034){
var G__59035 = cljs.core.first(seq59034);
var seq59034__$1 = cljs.core.next(seq59034);
var G__59036 = cljs.core.first(seq59034__$1);
var seq59034__$2 = cljs.core.next(seq59034__$1);
var G__59037 = cljs.core.first(seq59034__$2);
var seq59034__$3 = cljs.core.next(seq59034__$2);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__59035,G__59036,G__59037,seq59034__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async59047 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async59047 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta59048){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta59048 = meta59048;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async59047.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_59049,meta59048__$1){
var self__ = this;
var _59049__$1 = this;
return (new cljs.core.async.t_cljs$core$async59047(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta59048__$1));
}));

(cljs.core.async.t_cljs$core$async59047.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_59049){
var self__ = this;
var _59049__$1 = this;
return self__.meta59048;
}));

(cljs.core.async.t_cljs$core$async59047.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async59047.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async59047.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async59047.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async59047.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async59047.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async59047.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async59047.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async59047.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta59048","meta59048",-1717441836,null)], null);
}));

(cljs.core.async.t_cljs$core$async59047.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async59047.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async59047");

(cljs.core.async.t_cljs$core$async59047.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async59047");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async59047.
 */
cljs.core.async.__GT_t_cljs$core$async59047 = (function cljs$core$async$mix_$___GT_t_cljs$core$async59047(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta59048){
return (new cljs.core.async.t_cljs$core$async59047(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta59048));
});

}

return (new cljs.core.async.t_cljs$core$async59047(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__48697__auto___60620 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48698__auto__ = (function (){var switch__48472__auto__ = (function (state_59137){
var state_val_59138 = (state_59137[(1)]);
if((state_val_59138 === (7))){
var inst_59095 = (state_59137[(2)]);
var state_59137__$1 = state_59137;
if(cljs.core.truth_(inst_59095)){
var statearr_59139_60624 = state_59137__$1;
(statearr_59139_60624[(1)] = (8));

} else {
var statearr_59140_60625 = state_59137__$1;
(statearr_59140_60625[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59138 === (20))){
var inst_59088 = (state_59137[(7)]);
var state_59137__$1 = state_59137;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59137__$1,(23),out,inst_59088);
} else {
if((state_val_59138 === (1))){
var inst_59071 = calc_state();
var inst_59072 = cljs.core.__destructure_map(inst_59071);
var inst_59073 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_59072,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_59074 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_59072,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_59075 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_59072,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_59076 = inst_59071;
var state_59137__$1 = (function (){var statearr_59147 = state_59137;
(statearr_59147[(8)] = inst_59076);

(statearr_59147[(9)] = inst_59074);

(statearr_59147[(10)] = inst_59075);

(statearr_59147[(11)] = inst_59073);

return statearr_59147;
})();
var statearr_59148_60629 = state_59137__$1;
(statearr_59148_60629[(2)] = null);

(statearr_59148_60629[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59138 === (24))){
var inst_59079 = (state_59137[(12)]);
var inst_59076 = inst_59079;
var state_59137__$1 = (function (){var statearr_59149 = state_59137;
(statearr_59149[(8)] = inst_59076);

return statearr_59149;
})();
var statearr_59150_60630 = state_59137__$1;
(statearr_59150_60630[(2)] = null);

(statearr_59150_60630[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59138 === (4))){
var inst_59088 = (state_59137[(7)]);
var inst_59090 = (state_59137[(13)]);
var inst_59087 = (state_59137[(2)]);
var inst_59088__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_59087,(0),null);
var inst_59089 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_59087,(1),null);
var inst_59090__$1 = (inst_59088__$1 == null);
var state_59137__$1 = (function (){var statearr_59153 = state_59137;
(statearr_59153[(14)] = inst_59089);

(statearr_59153[(7)] = inst_59088__$1);

(statearr_59153[(13)] = inst_59090__$1);

return statearr_59153;
})();
if(cljs.core.truth_(inst_59090__$1)){
var statearr_59155_60634 = state_59137__$1;
(statearr_59155_60634[(1)] = (5));

} else {
var statearr_59156_60635 = state_59137__$1;
(statearr_59156_60635[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59138 === (15))){
var inst_59080 = (state_59137[(15)]);
var inst_59109 = (state_59137[(16)]);
var inst_59109__$1 = cljs.core.empty_QMARK_(inst_59080);
var state_59137__$1 = (function (){var statearr_59165 = state_59137;
(statearr_59165[(16)] = inst_59109__$1);

return statearr_59165;
})();
if(inst_59109__$1){
var statearr_59167_60636 = state_59137__$1;
(statearr_59167_60636[(1)] = (17));

} else {
var statearr_59169_60637 = state_59137__$1;
(statearr_59169_60637[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59138 === (21))){
var inst_59079 = (state_59137[(12)]);
var inst_59076 = inst_59079;
var state_59137__$1 = (function (){var statearr_59171 = state_59137;
(statearr_59171[(8)] = inst_59076);

return statearr_59171;
})();
var statearr_59172_60641 = state_59137__$1;
(statearr_59172_60641[(2)] = null);

(statearr_59172_60641[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59138 === (13))){
var inst_59102 = (state_59137[(2)]);
var inst_59103 = calc_state();
var inst_59076 = inst_59103;
var state_59137__$1 = (function (){var statearr_59177 = state_59137;
(statearr_59177[(8)] = inst_59076);

(statearr_59177[(17)] = inst_59102);

return statearr_59177;
})();
var statearr_59178_60643 = state_59137__$1;
(statearr_59178_60643[(2)] = null);

(statearr_59178_60643[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59138 === (22))){
var inst_59131 = (state_59137[(2)]);
var state_59137__$1 = state_59137;
var statearr_59179_60647 = state_59137__$1;
(statearr_59179_60647[(2)] = inst_59131);

(statearr_59179_60647[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59138 === (6))){
var inst_59089 = (state_59137[(14)]);
var inst_59093 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_59089,change);
var state_59137__$1 = state_59137;
var statearr_59180_60648 = state_59137__$1;
(statearr_59180_60648[(2)] = inst_59093);

(statearr_59180_60648[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59138 === (25))){
var state_59137__$1 = state_59137;
var statearr_59181_60649 = state_59137__$1;
(statearr_59181_60649[(2)] = null);

(statearr_59181_60649[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59138 === (17))){
var inst_59089 = (state_59137[(14)]);
var inst_59081 = (state_59137[(18)]);
var inst_59111 = (inst_59081.cljs$core$IFn$_invoke$arity$1 ? inst_59081.cljs$core$IFn$_invoke$arity$1(inst_59089) : inst_59081.call(null,inst_59089));
var inst_59112 = cljs.core.not(inst_59111);
var state_59137__$1 = state_59137;
var statearr_59182_60650 = state_59137__$1;
(statearr_59182_60650[(2)] = inst_59112);

(statearr_59182_60650[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59138 === (3))){
var inst_59135 = (state_59137[(2)]);
var state_59137__$1 = state_59137;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59137__$1,inst_59135);
} else {
if((state_val_59138 === (12))){
var state_59137__$1 = state_59137;
var statearr_59183_60651 = state_59137__$1;
(statearr_59183_60651[(2)] = null);

(statearr_59183_60651[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59138 === (2))){
var inst_59076 = (state_59137[(8)]);
var inst_59079 = (state_59137[(12)]);
var inst_59079__$1 = cljs.core.__destructure_map(inst_59076);
var inst_59080 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_59079__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_59081 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_59079__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_59082 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_59079__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_59137__$1 = (function (){var statearr_59184 = state_59137;
(statearr_59184[(15)] = inst_59080);

(statearr_59184[(12)] = inst_59079__$1);

(statearr_59184[(18)] = inst_59081);

return statearr_59184;
})();
return cljs.core.async.ioc_alts_BANG_(state_59137__$1,(4),inst_59082);
} else {
if((state_val_59138 === (23))){
var inst_59122 = (state_59137[(2)]);
var state_59137__$1 = state_59137;
if(cljs.core.truth_(inst_59122)){
var statearr_59185_60652 = state_59137__$1;
(statearr_59185_60652[(1)] = (24));

} else {
var statearr_59186_60653 = state_59137__$1;
(statearr_59186_60653[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59138 === (19))){
var inst_59115 = (state_59137[(2)]);
var state_59137__$1 = state_59137;
var statearr_59187_60654 = state_59137__$1;
(statearr_59187_60654[(2)] = inst_59115);

(statearr_59187_60654[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59138 === (11))){
var inst_59089 = (state_59137[(14)]);
var inst_59099 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_59089);
var state_59137__$1 = state_59137;
var statearr_59188_60656 = state_59137__$1;
(statearr_59188_60656[(2)] = inst_59099);

(statearr_59188_60656[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59138 === (9))){
var inst_59089 = (state_59137[(14)]);
var inst_59080 = (state_59137[(15)]);
var inst_59106 = (state_59137[(19)]);
var inst_59106__$1 = (inst_59080.cljs$core$IFn$_invoke$arity$1 ? inst_59080.cljs$core$IFn$_invoke$arity$1(inst_59089) : inst_59080.call(null,inst_59089));
var state_59137__$1 = (function (){var statearr_59189 = state_59137;
(statearr_59189[(19)] = inst_59106__$1);

return statearr_59189;
})();
if(cljs.core.truth_(inst_59106__$1)){
var statearr_59190_60658 = state_59137__$1;
(statearr_59190_60658[(1)] = (14));

} else {
var statearr_59191_60659 = state_59137__$1;
(statearr_59191_60659[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59138 === (5))){
var inst_59090 = (state_59137[(13)]);
var state_59137__$1 = state_59137;
var statearr_59192_60660 = state_59137__$1;
(statearr_59192_60660[(2)] = inst_59090);

(statearr_59192_60660[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59138 === (14))){
var inst_59106 = (state_59137[(19)]);
var state_59137__$1 = state_59137;
var statearr_59193_60661 = state_59137__$1;
(statearr_59193_60661[(2)] = inst_59106);

(statearr_59193_60661[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59138 === (26))){
var inst_59127 = (state_59137[(2)]);
var state_59137__$1 = state_59137;
var statearr_59194_60662 = state_59137__$1;
(statearr_59194_60662[(2)] = inst_59127);

(statearr_59194_60662[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59138 === (16))){
var inst_59117 = (state_59137[(2)]);
var state_59137__$1 = state_59137;
if(cljs.core.truth_(inst_59117)){
var statearr_59195_60663 = state_59137__$1;
(statearr_59195_60663[(1)] = (20));

} else {
var statearr_59196_60664 = state_59137__$1;
(statearr_59196_60664[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59138 === (10))){
var inst_59133 = (state_59137[(2)]);
var state_59137__$1 = state_59137;
var statearr_59197_60665 = state_59137__$1;
(statearr_59197_60665[(2)] = inst_59133);

(statearr_59197_60665[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59138 === (18))){
var inst_59109 = (state_59137[(16)]);
var state_59137__$1 = state_59137;
var statearr_59198_60666 = state_59137__$1;
(statearr_59198_60666[(2)] = inst_59109);

(statearr_59198_60666[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59138 === (8))){
var inst_59088 = (state_59137[(7)]);
var inst_59097 = (inst_59088 == null);
var state_59137__$1 = state_59137;
if(cljs.core.truth_(inst_59097)){
var statearr_59199_60667 = state_59137__$1;
(statearr_59199_60667[(1)] = (11));

} else {
var statearr_59200_60668 = state_59137__$1;
(statearr_59200_60668[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__48474__auto__ = null;
var cljs$core$async$mix_$_state_machine__48474__auto____0 = (function (){
var statearr_59202 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_59202[(0)] = cljs$core$async$mix_$_state_machine__48474__auto__);

(statearr_59202[(1)] = (1));

return statearr_59202;
});
var cljs$core$async$mix_$_state_machine__48474__auto____1 = (function (state_59137){
while(true){
var ret_value__48475__auto__ = (function (){try{while(true){
var result__48476__auto__ = switch__48472__auto__(state_59137);
if(cljs.core.keyword_identical_QMARK_(result__48476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48476__auto__;
}
break;
}
}catch (e59203){var ex__48478__auto__ = e59203;
var statearr_59205_60669 = state_59137;
(statearr_59205_60669[(2)] = ex__48478__auto__);


if(cljs.core.seq((state_59137[(4)]))){
var statearr_59206_60670 = state_59137;
(statearr_59206_60670[(1)] = cljs.core.first((state_59137[(4)])));

} else {
throw ex__48478__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60671 = state_59137;
state_59137 = G__60671;
continue;
} else {
return ret_value__48475__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__48474__auto__ = function(state_59137){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__48474__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__48474__auto____1.call(this,state_59137);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__48474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__48474__auto____0;
cljs$core$async$mix_$_state_machine__48474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__48474__auto____1;
return cljs$core$async$mix_$_state_machine__48474__auto__;
})()
})();
var state__48699__auto__ = (function (){var statearr_59207 = f__48698__auto__();
(statearr_59207[(6)] = c__48697__auto___60620);

return statearr_59207;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48699__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_60672 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_60672(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_60673 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_60673(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_60674 = (function() {
var G__60675 = null;
var G__60675__1 = (function (p){
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
var G__60675__2 = (function (p,v){
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
G__60675 = function(p,v){
switch(arguments.length){
case 1:
return G__60675__1.call(this,p);
case 2:
return G__60675__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__60675.cljs$core$IFn$_invoke$arity$1 = G__60675__1;
G__60675.cljs$core$IFn$_invoke$arity$2 = G__60675__2;
return G__60675;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__59228 = arguments.length;
switch (G__59228) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_60674(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_60674(p,v);
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
var G__59233 = arguments.length;
switch (G__59233) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__59230_SHARP_){
if(cljs.core.truth_((p1__59230_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__59230_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__59230_SHARP_.call(null,topic)))){
return p1__59230_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__59230_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async59238 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async59238 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta59239){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta59239 = meta59239;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async59238.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_59240,meta59239__$1){
var self__ = this;
var _59240__$1 = this;
return (new cljs.core.async.t_cljs$core$async59238(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta59239__$1));
}));

(cljs.core.async.t_cljs$core$async59238.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_59240){
var self__ = this;
var _59240__$1 = this;
return self__.meta59239;
}));

(cljs.core.async.t_cljs$core$async59238.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async59238.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async59238.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async59238.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async59238.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async59238.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async59238.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async59238.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta59239","meta59239",-2108085855,null)], null);
}));

(cljs.core.async.t_cljs$core$async59238.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async59238.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async59238");

(cljs.core.async.t_cljs$core$async59238.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async59238");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async59238.
 */
cljs.core.async.__GT_t_cljs$core$async59238 = (function cljs$core$async$__GT_t_cljs$core$async59238(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta59239){
return (new cljs.core.async.t_cljs$core$async59238(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta59239));
});

}

return (new cljs.core.async.t_cljs$core$async59238(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__48697__auto___60688 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48698__auto__ = (function (){var switch__48472__auto__ = (function (state_59312){
var state_val_59313 = (state_59312[(1)]);
if((state_val_59313 === (7))){
var inst_59308 = (state_59312[(2)]);
var state_59312__$1 = state_59312;
var statearr_59315_60689 = state_59312__$1;
(statearr_59315_60689[(2)] = inst_59308);

(statearr_59315_60689[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59313 === (20))){
var state_59312__$1 = state_59312;
var statearr_59316_60690 = state_59312__$1;
(statearr_59316_60690[(2)] = null);

(statearr_59316_60690[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59313 === (1))){
var state_59312__$1 = state_59312;
var statearr_59317_60691 = state_59312__$1;
(statearr_59317_60691[(2)] = null);

(statearr_59317_60691[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59313 === (24))){
var inst_59291 = (state_59312[(7)]);
var inst_59300 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_59291);
var state_59312__$1 = state_59312;
var statearr_59318_60693 = state_59312__$1;
(statearr_59318_60693[(2)] = inst_59300);

(statearr_59318_60693[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59313 === (4))){
var inst_59243 = (state_59312[(8)]);
var inst_59243__$1 = (state_59312[(2)]);
var inst_59244 = (inst_59243__$1 == null);
var state_59312__$1 = (function (){var statearr_59319 = state_59312;
(statearr_59319[(8)] = inst_59243__$1);

return statearr_59319;
})();
if(cljs.core.truth_(inst_59244)){
var statearr_59321_60697 = state_59312__$1;
(statearr_59321_60697[(1)] = (5));

} else {
var statearr_59323_60698 = state_59312__$1;
(statearr_59323_60698[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59313 === (15))){
var inst_59285 = (state_59312[(2)]);
var state_59312__$1 = state_59312;
var statearr_59324_60699 = state_59312__$1;
(statearr_59324_60699[(2)] = inst_59285);

(statearr_59324_60699[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59313 === (21))){
var inst_59305 = (state_59312[(2)]);
var state_59312__$1 = (function (){var statearr_59325 = state_59312;
(statearr_59325[(9)] = inst_59305);

return statearr_59325;
})();
var statearr_59326_60700 = state_59312__$1;
(statearr_59326_60700[(2)] = null);

(statearr_59326_60700[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59313 === (13))){
var inst_59267 = (state_59312[(10)]);
var inst_59269 = cljs.core.chunked_seq_QMARK_(inst_59267);
var state_59312__$1 = state_59312;
if(inst_59269){
var statearr_59327_60701 = state_59312__$1;
(statearr_59327_60701[(1)] = (16));

} else {
var statearr_59328_60702 = state_59312__$1;
(statearr_59328_60702[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59313 === (22))){
var inst_59297 = (state_59312[(2)]);
var state_59312__$1 = state_59312;
if(cljs.core.truth_(inst_59297)){
var statearr_59329_60703 = state_59312__$1;
(statearr_59329_60703[(1)] = (23));

} else {
var statearr_59330_60704 = state_59312__$1;
(statearr_59330_60704[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59313 === (6))){
var inst_59291 = (state_59312[(7)]);
var inst_59243 = (state_59312[(8)]);
var inst_59293 = (state_59312[(11)]);
var inst_59291__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_59243) : topic_fn.call(null,inst_59243));
var inst_59292 = cljs.core.deref(mults);
var inst_59293__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_59292,inst_59291__$1);
var state_59312__$1 = (function (){var statearr_59331 = state_59312;
(statearr_59331[(7)] = inst_59291__$1);

(statearr_59331[(11)] = inst_59293__$1);

return statearr_59331;
})();
if(cljs.core.truth_(inst_59293__$1)){
var statearr_59332_60705 = state_59312__$1;
(statearr_59332_60705[(1)] = (19));

} else {
var statearr_59333_60706 = state_59312__$1;
(statearr_59333_60706[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59313 === (25))){
var inst_59302 = (state_59312[(2)]);
var state_59312__$1 = state_59312;
var statearr_59334_60707 = state_59312__$1;
(statearr_59334_60707[(2)] = inst_59302);

(statearr_59334_60707[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59313 === (17))){
var inst_59267 = (state_59312[(10)]);
var inst_59276 = cljs.core.first(inst_59267);
var inst_59277 = cljs.core.async.muxch_STAR_(inst_59276);
var inst_59278 = cljs.core.async.close_BANG_(inst_59277);
var inst_59279 = cljs.core.next(inst_59267);
var inst_59253 = inst_59279;
var inst_59254 = null;
var inst_59255 = (0);
var inst_59256 = (0);
var state_59312__$1 = (function (){var statearr_59339 = state_59312;
(statearr_59339[(12)] = inst_59253);

(statearr_59339[(13)] = inst_59278);

(statearr_59339[(14)] = inst_59254);

(statearr_59339[(15)] = inst_59255);

(statearr_59339[(16)] = inst_59256);

return statearr_59339;
})();
var statearr_59340_60708 = state_59312__$1;
(statearr_59340_60708[(2)] = null);

(statearr_59340_60708[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59313 === (3))){
var inst_59310 = (state_59312[(2)]);
var state_59312__$1 = state_59312;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59312__$1,inst_59310);
} else {
if((state_val_59313 === (12))){
var inst_59287 = (state_59312[(2)]);
var state_59312__$1 = state_59312;
var statearr_59341_60713 = state_59312__$1;
(statearr_59341_60713[(2)] = inst_59287);

(statearr_59341_60713[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59313 === (2))){
var state_59312__$1 = state_59312;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59312__$1,(4),ch);
} else {
if((state_val_59313 === (23))){
var state_59312__$1 = state_59312;
var statearr_59342_60714 = state_59312__$1;
(statearr_59342_60714[(2)] = null);

(statearr_59342_60714[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59313 === (19))){
var inst_59243 = (state_59312[(8)]);
var inst_59293 = (state_59312[(11)]);
var inst_59295 = cljs.core.async.muxch_STAR_(inst_59293);
var state_59312__$1 = state_59312;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59312__$1,(22),inst_59295,inst_59243);
} else {
if((state_val_59313 === (11))){
var inst_59267 = (state_59312[(10)]);
var inst_59253 = (state_59312[(12)]);
var inst_59267__$1 = cljs.core.seq(inst_59253);
var state_59312__$1 = (function (){var statearr_59346 = state_59312;
(statearr_59346[(10)] = inst_59267__$1);

return statearr_59346;
})();
if(inst_59267__$1){
var statearr_59347_60715 = state_59312__$1;
(statearr_59347_60715[(1)] = (13));

} else {
var statearr_59348_60716 = state_59312__$1;
(statearr_59348_60716[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59313 === (9))){
var inst_59289 = (state_59312[(2)]);
var state_59312__$1 = state_59312;
var statearr_59349_60717 = state_59312__$1;
(statearr_59349_60717[(2)] = inst_59289);

(statearr_59349_60717[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59313 === (5))){
var inst_59250 = cljs.core.deref(mults);
var inst_59251 = cljs.core.vals(inst_59250);
var inst_59252 = cljs.core.seq(inst_59251);
var inst_59253 = inst_59252;
var inst_59254 = null;
var inst_59255 = (0);
var inst_59256 = (0);
var state_59312__$1 = (function (){var statearr_59350 = state_59312;
(statearr_59350[(12)] = inst_59253);

(statearr_59350[(14)] = inst_59254);

(statearr_59350[(15)] = inst_59255);

(statearr_59350[(16)] = inst_59256);

return statearr_59350;
})();
var statearr_59351_60718 = state_59312__$1;
(statearr_59351_60718[(2)] = null);

(statearr_59351_60718[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59313 === (14))){
var state_59312__$1 = state_59312;
var statearr_59357_60719 = state_59312__$1;
(statearr_59357_60719[(2)] = null);

(statearr_59357_60719[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59313 === (16))){
var inst_59267 = (state_59312[(10)]);
var inst_59271 = cljs.core.chunk_first(inst_59267);
var inst_59272 = cljs.core.chunk_rest(inst_59267);
var inst_59273 = cljs.core.count(inst_59271);
var inst_59253 = inst_59272;
var inst_59254 = inst_59271;
var inst_59255 = inst_59273;
var inst_59256 = (0);
var state_59312__$1 = (function (){var statearr_59359 = state_59312;
(statearr_59359[(12)] = inst_59253);

(statearr_59359[(14)] = inst_59254);

(statearr_59359[(15)] = inst_59255);

(statearr_59359[(16)] = inst_59256);

return statearr_59359;
})();
var statearr_59360_60721 = state_59312__$1;
(statearr_59360_60721[(2)] = null);

(statearr_59360_60721[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59313 === (10))){
var inst_59253 = (state_59312[(12)]);
var inst_59254 = (state_59312[(14)]);
var inst_59255 = (state_59312[(15)]);
var inst_59256 = (state_59312[(16)]);
var inst_59261 = cljs.core._nth(inst_59254,inst_59256);
var inst_59262 = cljs.core.async.muxch_STAR_(inst_59261);
var inst_59263 = cljs.core.async.close_BANG_(inst_59262);
var inst_59264 = (inst_59256 + (1));
var tmp59352 = inst_59253;
var tmp59353 = inst_59254;
var tmp59354 = inst_59255;
var inst_59253__$1 = tmp59352;
var inst_59254__$1 = tmp59353;
var inst_59255__$1 = tmp59354;
var inst_59256__$1 = inst_59264;
var state_59312__$1 = (function (){var statearr_59363 = state_59312;
(statearr_59363[(17)] = inst_59263);

(statearr_59363[(12)] = inst_59253__$1);

(statearr_59363[(14)] = inst_59254__$1);

(statearr_59363[(15)] = inst_59255__$1);

(statearr_59363[(16)] = inst_59256__$1);

return statearr_59363;
})();
var statearr_59364_60722 = state_59312__$1;
(statearr_59364_60722[(2)] = null);

(statearr_59364_60722[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59313 === (18))){
var inst_59282 = (state_59312[(2)]);
var state_59312__$1 = state_59312;
var statearr_59365_60723 = state_59312__$1;
(statearr_59365_60723[(2)] = inst_59282);

(statearr_59365_60723[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59313 === (8))){
var inst_59255 = (state_59312[(15)]);
var inst_59256 = (state_59312[(16)]);
var inst_59258 = (inst_59256 < inst_59255);
var inst_59259 = inst_59258;
var state_59312__$1 = state_59312;
if(cljs.core.truth_(inst_59259)){
var statearr_59366_60730 = state_59312__$1;
(statearr_59366_60730[(1)] = (10));

} else {
var statearr_59367_60731 = state_59312__$1;
(statearr_59367_60731[(1)] = (11));

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
var cljs$core$async$state_machine__48474__auto__ = null;
var cljs$core$async$state_machine__48474__auto____0 = (function (){
var statearr_59368 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_59368[(0)] = cljs$core$async$state_machine__48474__auto__);

(statearr_59368[(1)] = (1));

return statearr_59368;
});
var cljs$core$async$state_machine__48474__auto____1 = (function (state_59312){
while(true){
var ret_value__48475__auto__ = (function (){try{while(true){
var result__48476__auto__ = switch__48472__auto__(state_59312);
if(cljs.core.keyword_identical_QMARK_(result__48476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48476__auto__;
}
break;
}
}catch (e59369){var ex__48478__auto__ = e59369;
var statearr_59370_60733 = state_59312;
(statearr_59370_60733[(2)] = ex__48478__auto__);


if(cljs.core.seq((state_59312[(4)]))){
var statearr_59371_60737 = state_59312;
(statearr_59371_60737[(1)] = cljs.core.first((state_59312[(4)])));

} else {
throw ex__48478__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60738 = state_59312;
state_59312 = G__60738;
continue;
} else {
return ret_value__48475__auto__;
}
break;
}
});
cljs$core$async$state_machine__48474__auto__ = function(state_59312){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48474__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48474__auto____1.call(this,state_59312);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48474__auto____0;
cljs$core$async$state_machine__48474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48474__auto____1;
return cljs$core$async$state_machine__48474__auto__;
})()
})();
var state__48699__auto__ = (function (){var statearr_59372 = f__48698__auto__();
(statearr_59372[(6)] = c__48697__auto___60688);

return statearr_59372;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48699__auto__);
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
var G__59374 = arguments.length;
switch (G__59374) {
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
var G__59393 = arguments.length;
switch (G__59393) {
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
var G__59395 = arguments.length;
switch (G__59395) {
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
var c__48697__auto___60743 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48698__auto__ = (function (){var switch__48472__auto__ = (function (state_59449){
var state_val_59450 = (state_59449[(1)]);
if((state_val_59450 === (7))){
var state_59449__$1 = state_59449;
var statearr_59452_60747 = state_59449__$1;
(statearr_59452_60747[(2)] = null);

(statearr_59452_60747[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59450 === (1))){
var state_59449__$1 = state_59449;
var statearr_59453_60748 = state_59449__$1;
(statearr_59453_60748[(2)] = null);

(statearr_59453_60748[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59450 === (4))){
var inst_59407 = (state_59449[(7)]);
var inst_59408 = (state_59449[(8)]);
var inst_59410 = (inst_59408 < inst_59407);
var state_59449__$1 = state_59449;
if(cljs.core.truth_(inst_59410)){
var statearr_59458_60749 = state_59449__$1;
(statearr_59458_60749[(1)] = (6));

} else {
var statearr_59459_60750 = state_59449__$1;
(statearr_59459_60750[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59450 === (15))){
var inst_59435 = (state_59449[(9)]);
var inst_59440 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_59435);
var state_59449__$1 = state_59449;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59449__$1,(17),out,inst_59440);
} else {
if((state_val_59450 === (13))){
var inst_59435 = (state_59449[(9)]);
var inst_59435__$1 = (state_59449[(2)]);
var inst_59436 = cljs.core.some(cljs.core.nil_QMARK_,inst_59435__$1);
var state_59449__$1 = (function (){var statearr_59460 = state_59449;
(statearr_59460[(9)] = inst_59435__$1);

return statearr_59460;
})();
if(cljs.core.truth_(inst_59436)){
var statearr_59461_60751 = state_59449__$1;
(statearr_59461_60751[(1)] = (14));

} else {
var statearr_59462_60752 = state_59449__$1;
(statearr_59462_60752[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59450 === (6))){
var state_59449__$1 = state_59449;
var statearr_59464_60753 = state_59449__$1;
(statearr_59464_60753[(2)] = null);

(statearr_59464_60753[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59450 === (17))){
var inst_59442 = (state_59449[(2)]);
var state_59449__$1 = (function (){var statearr_59466 = state_59449;
(statearr_59466[(10)] = inst_59442);

return statearr_59466;
})();
var statearr_59467_60754 = state_59449__$1;
(statearr_59467_60754[(2)] = null);

(statearr_59467_60754[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59450 === (3))){
var inst_59447 = (state_59449[(2)]);
var state_59449__$1 = state_59449;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59449__$1,inst_59447);
} else {
if((state_val_59450 === (12))){
var _ = (function (){var statearr_59468 = state_59449;
(statearr_59468[(4)] = cljs.core.rest((state_59449[(4)])));

return statearr_59468;
})();
var state_59449__$1 = state_59449;
var ex59465 = (state_59449__$1[(2)]);
var statearr_59469_60755 = state_59449__$1;
(statearr_59469_60755[(5)] = ex59465);


if((ex59465 instanceof Object)){
var statearr_59470_60756 = state_59449__$1;
(statearr_59470_60756[(1)] = (11));

(statearr_59470_60756[(5)] = null);

} else {
throw ex59465;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59450 === (2))){
var inst_59406 = cljs.core.reset_BANG_(dctr,cnt);
var inst_59407 = cnt;
var inst_59408 = (0);
var state_59449__$1 = (function (){var statearr_59471 = state_59449;
(statearr_59471[(7)] = inst_59407);

(statearr_59471[(8)] = inst_59408);

(statearr_59471[(11)] = inst_59406);

return statearr_59471;
})();
var statearr_59472_60757 = state_59449__$1;
(statearr_59472_60757[(2)] = null);

(statearr_59472_60757[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59450 === (11))){
var inst_59412 = (state_59449[(2)]);
var inst_59415 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_59449__$1 = (function (){var statearr_59473 = state_59449;
(statearr_59473[(12)] = inst_59412);

return statearr_59473;
})();
var statearr_59475_60758 = state_59449__$1;
(statearr_59475_60758[(2)] = inst_59415);

(statearr_59475_60758[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59450 === (9))){
var inst_59408 = (state_59449[(8)]);
var _ = (function (){var statearr_59476 = state_59449;
(statearr_59476[(4)] = cljs.core.cons((12),(state_59449[(4)])));

return statearr_59476;
})();
var inst_59421 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_59408) : chs__$1.call(null,inst_59408));
var inst_59422 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_59408) : done.call(null,inst_59408));
var inst_59423 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_59421,inst_59422);
var ___$1 = (function (){var statearr_59477 = state_59449;
(statearr_59477[(4)] = cljs.core.rest((state_59449[(4)])));

return statearr_59477;
})();
var state_59449__$1 = state_59449;
var statearr_59478_60759 = state_59449__$1;
(statearr_59478_60759[(2)] = inst_59423);

(statearr_59478_60759[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59450 === (5))){
var inst_59433 = (state_59449[(2)]);
var state_59449__$1 = (function (){var statearr_59479 = state_59449;
(statearr_59479[(13)] = inst_59433);

return statearr_59479;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59449__$1,(13),dchan);
} else {
if((state_val_59450 === (14))){
var inst_59438 = cljs.core.async.close_BANG_(out);
var state_59449__$1 = state_59449;
var statearr_59480_60761 = state_59449__$1;
(statearr_59480_60761[(2)] = inst_59438);

(statearr_59480_60761[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59450 === (16))){
var inst_59445 = (state_59449[(2)]);
var state_59449__$1 = state_59449;
var statearr_59481_60762 = state_59449__$1;
(statearr_59481_60762[(2)] = inst_59445);

(statearr_59481_60762[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59450 === (10))){
var inst_59408 = (state_59449[(8)]);
var inst_59426 = (state_59449[(2)]);
var inst_59427 = (inst_59408 + (1));
var inst_59408__$1 = inst_59427;
var state_59449__$1 = (function (){var statearr_59482 = state_59449;
(statearr_59482[(8)] = inst_59408__$1);

(statearr_59482[(14)] = inst_59426);

return statearr_59482;
})();
var statearr_59483_60763 = state_59449__$1;
(statearr_59483_60763[(2)] = null);

(statearr_59483_60763[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59450 === (8))){
var inst_59431 = (state_59449[(2)]);
var state_59449__$1 = state_59449;
var statearr_59484_60764 = state_59449__$1;
(statearr_59484_60764[(2)] = inst_59431);

(statearr_59484_60764[(1)] = (5));


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
var cljs$core$async$state_machine__48474__auto__ = null;
var cljs$core$async$state_machine__48474__auto____0 = (function (){
var statearr_59485 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_59485[(0)] = cljs$core$async$state_machine__48474__auto__);

(statearr_59485[(1)] = (1));

return statearr_59485;
});
var cljs$core$async$state_machine__48474__auto____1 = (function (state_59449){
while(true){
var ret_value__48475__auto__ = (function (){try{while(true){
var result__48476__auto__ = switch__48472__auto__(state_59449);
if(cljs.core.keyword_identical_QMARK_(result__48476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48476__auto__;
}
break;
}
}catch (e59486){var ex__48478__auto__ = e59486;
var statearr_59487_60769 = state_59449;
(statearr_59487_60769[(2)] = ex__48478__auto__);


if(cljs.core.seq((state_59449[(4)]))){
var statearr_59488_60770 = state_59449;
(statearr_59488_60770[(1)] = cljs.core.first((state_59449[(4)])));

} else {
throw ex__48478__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60771 = state_59449;
state_59449 = G__60771;
continue;
} else {
return ret_value__48475__auto__;
}
break;
}
});
cljs$core$async$state_machine__48474__auto__ = function(state_59449){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48474__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48474__auto____1.call(this,state_59449);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48474__auto____0;
cljs$core$async$state_machine__48474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48474__auto____1;
return cljs$core$async$state_machine__48474__auto__;
})()
})();
var state__48699__auto__ = (function (){var statearr_59490 = f__48698__auto__();
(statearr_59490[(6)] = c__48697__auto___60743);

return statearr_59490;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48699__auto__);
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
var G__59493 = arguments.length;
switch (G__59493) {
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
var c__48697__auto___60777 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48698__auto__ = (function (){var switch__48472__auto__ = (function (state_59525){
var state_val_59526 = (state_59525[(1)]);
if((state_val_59526 === (7))){
var inst_59505 = (state_59525[(7)]);
var inst_59504 = (state_59525[(8)]);
var inst_59504__$1 = (state_59525[(2)]);
var inst_59505__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_59504__$1,(0),null);
var inst_59506 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_59504__$1,(1),null);
var inst_59507 = (inst_59505__$1 == null);
var state_59525__$1 = (function (){var statearr_59528 = state_59525;
(statearr_59528[(7)] = inst_59505__$1);

(statearr_59528[(9)] = inst_59506);

(statearr_59528[(8)] = inst_59504__$1);

return statearr_59528;
})();
if(cljs.core.truth_(inst_59507)){
var statearr_59529_60779 = state_59525__$1;
(statearr_59529_60779[(1)] = (8));

} else {
var statearr_59530_60781 = state_59525__$1;
(statearr_59530_60781[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59526 === (1))){
var inst_59494 = cljs.core.vec(chs);
var inst_59495 = inst_59494;
var state_59525__$1 = (function (){var statearr_59531 = state_59525;
(statearr_59531[(10)] = inst_59495);

return statearr_59531;
})();
var statearr_59532_60782 = state_59525__$1;
(statearr_59532_60782[(2)] = null);

(statearr_59532_60782[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59526 === (4))){
var inst_59495 = (state_59525[(10)]);
var state_59525__$1 = state_59525;
return cljs.core.async.ioc_alts_BANG_(state_59525__$1,(7),inst_59495);
} else {
if((state_val_59526 === (6))){
var inst_59521 = (state_59525[(2)]);
var state_59525__$1 = state_59525;
var statearr_59533_60783 = state_59525__$1;
(statearr_59533_60783[(2)] = inst_59521);

(statearr_59533_60783[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59526 === (3))){
var inst_59523 = (state_59525[(2)]);
var state_59525__$1 = state_59525;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59525__$1,inst_59523);
} else {
if((state_val_59526 === (2))){
var inst_59495 = (state_59525[(10)]);
var inst_59497 = cljs.core.count(inst_59495);
var inst_59498 = (inst_59497 > (0));
var state_59525__$1 = state_59525;
if(cljs.core.truth_(inst_59498)){
var statearr_59535_60784 = state_59525__$1;
(statearr_59535_60784[(1)] = (4));

} else {
var statearr_59536_60785 = state_59525__$1;
(statearr_59536_60785[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59526 === (11))){
var inst_59495 = (state_59525[(10)]);
var inst_59514 = (state_59525[(2)]);
var tmp59534 = inst_59495;
var inst_59495__$1 = tmp59534;
var state_59525__$1 = (function (){var statearr_59537 = state_59525;
(statearr_59537[(10)] = inst_59495__$1);

(statearr_59537[(11)] = inst_59514);

return statearr_59537;
})();
var statearr_59538_60786 = state_59525__$1;
(statearr_59538_60786[(2)] = null);

(statearr_59538_60786[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59526 === (9))){
var inst_59505 = (state_59525[(7)]);
var state_59525__$1 = state_59525;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59525__$1,(11),out,inst_59505);
} else {
if((state_val_59526 === (5))){
var inst_59519 = cljs.core.async.close_BANG_(out);
var state_59525__$1 = state_59525;
var statearr_59539_60787 = state_59525__$1;
(statearr_59539_60787[(2)] = inst_59519);

(statearr_59539_60787[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59526 === (10))){
var inst_59517 = (state_59525[(2)]);
var state_59525__$1 = state_59525;
var statearr_59540_60788 = state_59525__$1;
(statearr_59540_60788[(2)] = inst_59517);

(statearr_59540_60788[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59526 === (8))){
var inst_59505 = (state_59525[(7)]);
var inst_59495 = (state_59525[(10)]);
var inst_59506 = (state_59525[(9)]);
var inst_59504 = (state_59525[(8)]);
var inst_59509 = (function (){var cs = inst_59495;
var vec__59500 = inst_59504;
var v = inst_59505;
var c = inst_59506;
return (function (p1__59491_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__59491_SHARP_);
});
})();
var inst_59510 = cljs.core.filterv(inst_59509,inst_59495);
var inst_59495__$1 = inst_59510;
var state_59525__$1 = (function (){var statearr_59541 = state_59525;
(statearr_59541[(10)] = inst_59495__$1);

return statearr_59541;
})();
var statearr_59542_60789 = state_59525__$1;
(statearr_59542_60789[(2)] = null);

(statearr_59542_60789[(1)] = (2));


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
var cljs$core$async$state_machine__48474__auto__ = null;
var cljs$core$async$state_machine__48474__auto____0 = (function (){
var statearr_59543 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_59543[(0)] = cljs$core$async$state_machine__48474__auto__);

(statearr_59543[(1)] = (1));

return statearr_59543;
});
var cljs$core$async$state_machine__48474__auto____1 = (function (state_59525){
while(true){
var ret_value__48475__auto__ = (function (){try{while(true){
var result__48476__auto__ = switch__48472__auto__(state_59525);
if(cljs.core.keyword_identical_QMARK_(result__48476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48476__auto__;
}
break;
}
}catch (e59544){var ex__48478__auto__ = e59544;
var statearr_59545_60790 = state_59525;
(statearr_59545_60790[(2)] = ex__48478__auto__);


if(cljs.core.seq((state_59525[(4)]))){
var statearr_59546_60791 = state_59525;
(statearr_59546_60791[(1)] = cljs.core.first((state_59525[(4)])));

} else {
throw ex__48478__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60792 = state_59525;
state_59525 = G__60792;
continue;
} else {
return ret_value__48475__auto__;
}
break;
}
});
cljs$core$async$state_machine__48474__auto__ = function(state_59525){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48474__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48474__auto____1.call(this,state_59525);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48474__auto____0;
cljs$core$async$state_machine__48474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48474__auto____1;
return cljs$core$async$state_machine__48474__auto__;
})()
})();
var state__48699__auto__ = (function (){var statearr_59553 = f__48698__auto__();
(statearr_59553[(6)] = c__48697__auto___60777);

return statearr_59553;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48699__auto__);
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
var G__59555 = arguments.length;
switch (G__59555) {
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
var c__48697__auto___60794 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48698__auto__ = (function (){var switch__48472__auto__ = (function (state_59583){
var state_val_59584 = (state_59583[(1)]);
if((state_val_59584 === (7))){
var inst_59561 = (state_59583[(7)]);
var inst_59561__$1 = (state_59583[(2)]);
var inst_59562 = (inst_59561__$1 == null);
var inst_59563 = cljs.core.not(inst_59562);
var state_59583__$1 = (function (){var statearr_59589 = state_59583;
(statearr_59589[(7)] = inst_59561__$1);

return statearr_59589;
})();
if(inst_59563){
var statearr_59592_60795 = state_59583__$1;
(statearr_59592_60795[(1)] = (8));

} else {
var statearr_59593_60796 = state_59583__$1;
(statearr_59593_60796[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59584 === (1))){
var inst_59556 = (0);
var state_59583__$1 = (function (){var statearr_59600 = state_59583;
(statearr_59600[(8)] = inst_59556);

return statearr_59600;
})();
var statearr_59601_60797 = state_59583__$1;
(statearr_59601_60797[(2)] = null);

(statearr_59601_60797[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59584 === (4))){
var state_59583__$1 = state_59583;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59583__$1,(7),ch);
} else {
if((state_val_59584 === (6))){
var inst_59578 = (state_59583[(2)]);
var state_59583__$1 = state_59583;
var statearr_59602_60814 = state_59583__$1;
(statearr_59602_60814[(2)] = inst_59578);

(statearr_59602_60814[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59584 === (3))){
var inst_59580 = (state_59583[(2)]);
var inst_59581 = cljs.core.async.close_BANG_(out);
var state_59583__$1 = (function (){var statearr_59611 = state_59583;
(statearr_59611[(9)] = inst_59580);

return statearr_59611;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_59583__$1,inst_59581);
} else {
if((state_val_59584 === (2))){
var inst_59556 = (state_59583[(8)]);
var inst_59558 = (inst_59556 < n);
var state_59583__$1 = state_59583;
if(cljs.core.truth_(inst_59558)){
var statearr_59612_60815 = state_59583__$1;
(statearr_59612_60815[(1)] = (4));

} else {
var statearr_59613_60816 = state_59583__$1;
(statearr_59613_60816[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59584 === (11))){
var inst_59556 = (state_59583[(8)]);
var inst_59566 = (state_59583[(2)]);
var inst_59571 = (inst_59556 + (1));
var inst_59556__$1 = inst_59571;
var state_59583__$1 = (function (){var statearr_59616 = state_59583;
(statearr_59616[(8)] = inst_59556__$1);

(statearr_59616[(10)] = inst_59566);

return statearr_59616;
})();
var statearr_59617_60821 = state_59583__$1;
(statearr_59617_60821[(2)] = null);

(statearr_59617_60821[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59584 === (9))){
var state_59583__$1 = state_59583;
var statearr_59618_60822 = state_59583__$1;
(statearr_59618_60822[(2)] = null);

(statearr_59618_60822[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59584 === (5))){
var state_59583__$1 = state_59583;
var statearr_59619_60823 = state_59583__$1;
(statearr_59619_60823[(2)] = null);

(statearr_59619_60823[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59584 === (10))){
var inst_59575 = (state_59583[(2)]);
var state_59583__$1 = state_59583;
var statearr_59621_60824 = state_59583__$1;
(statearr_59621_60824[(2)] = inst_59575);

(statearr_59621_60824[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59584 === (8))){
var inst_59561 = (state_59583[(7)]);
var state_59583__$1 = state_59583;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59583__$1,(11),out,inst_59561);
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
var cljs$core$async$state_machine__48474__auto__ = null;
var cljs$core$async$state_machine__48474__auto____0 = (function (){
var statearr_59622 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_59622[(0)] = cljs$core$async$state_machine__48474__auto__);

(statearr_59622[(1)] = (1));

return statearr_59622;
});
var cljs$core$async$state_machine__48474__auto____1 = (function (state_59583){
while(true){
var ret_value__48475__auto__ = (function (){try{while(true){
var result__48476__auto__ = switch__48472__auto__(state_59583);
if(cljs.core.keyword_identical_QMARK_(result__48476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48476__auto__;
}
break;
}
}catch (e59623){var ex__48478__auto__ = e59623;
var statearr_59624_60840 = state_59583;
(statearr_59624_60840[(2)] = ex__48478__auto__);


if(cljs.core.seq((state_59583[(4)]))){
var statearr_59625_60841 = state_59583;
(statearr_59625_60841[(1)] = cljs.core.first((state_59583[(4)])));

} else {
throw ex__48478__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60842 = state_59583;
state_59583 = G__60842;
continue;
} else {
return ret_value__48475__auto__;
}
break;
}
});
cljs$core$async$state_machine__48474__auto__ = function(state_59583){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48474__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48474__auto____1.call(this,state_59583);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48474__auto____0;
cljs$core$async$state_machine__48474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48474__auto____1;
return cljs$core$async$state_machine__48474__auto__;
})()
})();
var state__48699__auto__ = (function (){var statearr_59626 = f__48698__auto__();
(statearr_59626[(6)] = c__48697__auto___60794);

return statearr_59626;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48699__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async59628 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async59628 = (function (f,ch,meta59629){
this.f = f;
this.ch = ch;
this.meta59629 = meta59629;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async59628.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_59630,meta59629__$1){
var self__ = this;
var _59630__$1 = this;
return (new cljs.core.async.t_cljs$core$async59628(self__.f,self__.ch,meta59629__$1));
}));

(cljs.core.async.t_cljs$core$async59628.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_59630){
var self__ = this;
var _59630__$1 = this;
return self__.meta59629;
}));

(cljs.core.async.t_cljs$core$async59628.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async59628.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async59628.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async59628.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async59628.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async59670 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async59670 = (function (f,ch,meta59629,_,fn1,meta59671){
this.f = f;
this.ch = ch;
this.meta59629 = meta59629;
this._ = _;
this.fn1 = fn1;
this.meta59671 = meta59671;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async59670.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_59672,meta59671__$1){
var self__ = this;
var _59672__$1 = this;
return (new cljs.core.async.t_cljs$core$async59670(self__.f,self__.ch,self__.meta59629,self__._,self__.fn1,meta59671__$1));
}));

(cljs.core.async.t_cljs$core$async59670.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_59672){
var self__ = this;
var _59672__$1 = this;
return self__.meta59671;
}));

(cljs.core.async.t_cljs$core$async59670.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async59670.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async59670.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async59670.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__59627_SHARP_){
var G__59676 = (((p1__59627_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__59627_SHARP_) : self__.f.call(null,p1__59627_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__59676) : f1.call(null,G__59676));
});
}));

(cljs.core.async.t_cljs$core$async59670.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta59629","meta59629",969962027,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async59628","cljs.core.async/t_cljs$core$async59628",-2145746667,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta59671","meta59671",1734746200,null)], null);
}));

(cljs.core.async.t_cljs$core$async59670.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async59670.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async59670");

(cljs.core.async.t_cljs$core$async59670.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async59670");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async59670.
 */
cljs.core.async.__GT_t_cljs$core$async59670 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async59670(f__$1,ch__$1,meta59629__$1,___$2,fn1__$1,meta59671){
return (new cljs.core.async.t_cljs$core$async59670(f__$1,ch__$1,meta59629__$1,___$2,fn1__$1,meta59671));
});

}

return (new cljs.core.async.t_cljs$core$async59670(self__.f,self__.ch,self__.meta59629,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4221__auto__ = ret;
if(cljs.core.truth_(and__4221__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4221__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__59687 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__59687) : self__.f.call(null,G__59687));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async59628.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async59628.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async59628.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta59629","meta59629",969962027,null)], null);
}));

(cljs.core.async.t_cljs$core$async59628.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async59628.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async59628");

(cljs.core.async.t_cljs$core$async59628.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async59628");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async59628.
 */
cljs.core.async.__GT_t_cljs$core$async59628 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async59628(f__$1,ch__$1,meta59629){
return (new cljs.core.async.t_cljs$core$async59628(f__$1,ch__$1,meta59629));
});

}

return (new cljs.core.async.t_cljs$core$async59628(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async59696 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async59696 = (function (f,ch,meta59697){
this.f = f;
this.ch = ch;
this.meta59697 = meta59697;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async59696.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_59698,meta59697__$1){
var self__ = this;
var _59698__$1 = this;
return (new cljs.core.async.t_cljs$core$async59696(self__.f,self__.ch,meta59697__$1));
}));

(cljs.core.async.t_cljs$core$async59696.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_59698){
var self__ = this;
var _59698__$1 = this;
return self__.meta59697;
}));

(cljs.core.async.t_cljs$core$async59696.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async59696.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async59696.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async59696.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async59696.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async59696.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async59696.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta59697","meta59697",1300010729,null)], null);
}));

(cljs.core.async.t_cljs$core$async59696.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async59696.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async59696");

(cljs.core.async.t_cljs$core$async59696.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async59696");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async59696.
 */
cljs.core.async.__GT_t_cljs$core$async59696 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async59696(f__$1,ch__$1,meta59697){
return (new cljs.core.async.t_cljs$core$async59696(f__$1,ch__$1,meta59697));
});

}

return (new cljs.core.async.t_cljs$core$async59696(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async59712 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async59712 = (function (p,ch,meta59713){
this.p = p;
this.ch = ch;
this.meta59713 = meta59713;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async59712.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_59714,meta59713__$1){
var self__ = this;
var _59714__$1 = this;
return (new cljs.core.async.t_cljs$core$async59712(self__.p,self__.ch,meta59713__$1));
}));

(cljs.core.async.t_cljs$core$async59712.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_59714){
var self__ = this;
var _59714__$1 = this;
return self__.meta59713;
}));

(cljs.core.async.t_cljs$core$async59712.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async59712.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async59712.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async59712.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async59712.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async59712.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async59712.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async59712.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta59713","meta59713",1536295658,null)], null);
}));

(cljs.core.async.t_cljs$core$async59712.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async59712.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async59712");

(cljs.core.async.t_cljs$core$async59712.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async59712");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async59712.
 */
cljs.core.async.__GT_t_cljs$core$async59712 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async59712(p__$1,ch__$1,meta59713){
return (new cljs.core.async.t_cljs$core$async59712(p__$1,ch__$1,meta59713));
});

}

return (new cljs.core.async.t_cljs$core$async59712(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__59726 = arguments.length;
switch (G__59726) {
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
var c__48697__auto___60864 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48698__auto__ = (function (){var switch__48472__auto__ = (function (state_59747){
var state_val_59748 = (state_59747[(1)]);
if((state_val_59748 === (7))){
var inst_59743 = (state_59747[(2)]);
var state_59747__$1 = state_59747;
var statearr_59749_60865 = state_59747__$1;
(statearr_59749_60865[(2)] = inst_59743);

(statearr_59749_60865[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59748 === (1))){
var state_59747__$1 = state_59747;
var statearr_59750_60866 = state_59747__$1;
(statearr_59750_60866[(2)] = null);

(statearr_59750_60866[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59748 === (4))){
var inst_59729 = (state_59747[(7)]);
var inst_59729__$1 = (state_59747[(2)]);
var inst_59730 = (inst_59729__$1 == null);
var state_59747__$1 = (function (){var statearr_59751 = state_59747;
(statearr_59751[(7)] = inst_59729__$1);

return statearr_59751;
})();
if(cljs.core.truth_(inst_59730)){
var statearr_59752_60867 = state_59747__$1;
(statearr_59752_60867[(1)] = (5));

} else {
var statearr_59753_60868 = state_59747__$1;
(statearr_59753_60868[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59748 === (6))){
var inst_59729 = (state_59747[(7)]);
var inst_59734 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_59729) : p.call(null,inst_59729));
var state_59747__$1 = state_59747;
if(cljs.core.truth_(inst_59734)){
var statearr_59754_60869 = state_59747__$1;
(statearr_59754_60869[(1)] = (8));

} else {
var statearr_59755_60870 = state_59747__$1;
(statearr_59755_60870[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59748 === (3))){
var inst_59745 = (state_59747[(2)]);
var state_59747__$1 = state_59747;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59747__$1,inst_59745);
} else {
if((state_val_59748 === (2))){
var state_59747__$1 = state_59747;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59747__$1,(4),ch);
} else {
if((state_val_59748 === (11))){
var inst_59737 = (state_59747[(2)]);
var state_59747__$1 = state_59747;
var statearr_59756_60871 = state_59747__$1;
(statearr_59756_60871[(2)] = inst_59737);

(statearr_59756_60871[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59748 === (9))){
var state_59747__$1 = state_59747;
var statearr_59757_60872 = state_59747__$1;
(statearr_59757_60872[(2)] = null);

(statearr_59757_60872[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59748 === (5))){
var inst_59732 = cljs.core.async.close_BANG_(out);
var state_59747__$1 = state_59747;
var statearr_59758_60873 = state_59747__$1;
(statearr_59758_60873[(2)] = inst_59732);

(statearr_59758_60873[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59748 === (10))){
var inst_59740 = (state_59747[(2)]);
var state_59747__$1 = (function (){var statearr_59759 = state_59747;
(statearr_59759[(8)] = inst_59740);

return statearr_59759;
})();
var statearr_59760_60874 = state_59747__$1;
(statearr_59760_60874[(2)] = null);

(statearr_59760_60874[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59748 === (8))){
var inst_59729 = (state_59747[(7)]);
var state_59747__$1 = state_59747;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59747__$1,(11),out,inst_59729);
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
var cljs$core$async$state_machine__48474__auto__ = null;
var cljs$core$async$state_machine__48474__auto____0 = (function (){
var statearr_59761 = [null,null,null,null,null,null,null,null,null];
(statearr_59761[(0)] = cljs$core$async$state_machine__48474__auto__);

(statearr_59761[(1)] = (1));

return statearr_59761;
});
var cljs$core$async$state_machine__48474__auto____1 = (function (state_59747){
while(true){
var ret_value__48475__auto__ = (function (){try{while(true){
var result__48476__auto__ = switch__48472__auto__(state_59747);
if(cljs.core.keyword_identical_QMARK_(result__48476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48476__auto__;
}
break;
}
}catch (e59762){var ex__48478__auto__ = e59762;
var statearr_59763_60875 = state_59747;
(statearr_59763_60875[(2)] = ex__48478__auto__);


if(cljs.core.seq((state_59747[(4)]))){
var statearr_59765_60876 = state_59747;
(statearr_59765_60876[(1)] = cljs.core.first((state_59747[(4)])));

} else {
throw ex__48478__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60877 = state_59747;
state_59747 = G__60877;
continue;
} else {
return ret_value__48475__auto__;
}
break;
}
});
cljs$core$async$state_machine__48474__auto__ = function(state_59747){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48474__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48474__auto____1.call(this,state_59747);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48474__auto____0;
cljs$core$async$state_machine__48474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48474__auto____1;
return cljs$core$async$state_machine__48474__auto__;
})()
})();
var state__48699__auto__ = (function (){var statearr_59766 = f__48698__auto__();
(statearr_59766[(6)] = c__48697__auto___60864);

return statearr_59766;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48699__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__59768 = arguments.length;
switch (G__59768) {
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
var c__48697__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48698__auto__ = (function (){var switch__48472__auto__ = (function (state_59838){
var state_val_59839 = (state_59838[(1)]);
if((state_val_59839 === (7))){
var inst_59832 = (state_59838[(2)]);
var state_59838__$1 = state_59838;
var statearr_59846_60879 = state_59838__$1;
(statearr_59846_60879[(2)] = inst_59832);

(statearr_59846_60879[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59839 === (20))){
var inst_59798 = (state_59838[(7)]);
var inst_59809 = (state_59838[(2)]);
var inst_59810 = cljs.core.next(inst_59798);
var inst_59783 = inst_59810;
var inst_59784 = null;
var inst_59785 = (0);
var inst_59786 = (0);
var state_59838__$1 = (function (){var statearr_59851 = state_59838;
(statearr_59851[(8)] = inst_59784);

(statearr_59851[(9)] = inst_59785);

(statearr_59851[(10)] = inst_59783);

(statearr_59851[(11)] = inst_59809);

(statearr_59851[(12)] = inst_59786);

return statearr_59851;
})();
var statearr_59853_60880 = state_59838__$1;
(statearr_59853_60880[(2)] = null);

(statearr_59853_60880[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59839 === (1))){
var state_59838__$1 = state_59838;
var statearr_59856_60881 = state_59838__$1;
(statearr_59856_60881[(2)] = null);

(statearr_59856_60881[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59839 === (4))){
var inst_59771 = (state_59838[(13)]);
var inst_59771__$1 = (state_59838[(2)]);
var inst_59772 = (inst_59771__$1 == null);
var state_59838__$1 = (function (){var statearr_59857 = state_59838;
(statearr_59857[(13)] = inst_59771__$1);

return statearr_59857;
})();
if(cljs.core.truth_(inst_59772)){
var statearr_59858_60882 = state_59838__$1;
(statearr_59858_60882[(1)] = (5));

} else {
var statearr_59859_60883 = state_59838__$1;
(statearr_59859_60883[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59839 === (15))){
var state_59838__$1 = state_59838;
var statearr_59875_60885 = state_59838__$1;
(statearr_59875_60885[(2)] = null);

(statearr_59875_60885[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59839 === (21))){
var state_59838__$1 = state_59838;
var statearr_59878_60887 = state_59838__$1;
(statearr_59878_60887[(2)] = null);

(statearr_59878_60887[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59839 === (13))){
var inst_59784 = (state_59838[(8)]);
var inst_59785 = (state_59838[(9)]);
var inst_59783 = (state_59838[(10)]);
var inst_59786 = (state_59838[(12)]);
var inst_59794 = (state_59838[(2)]);
var inst_59795 = (inst_59786 + (1));
var tmp59872 = inst_59784;
var tmp59873 = inst_59785;
var tmp59874 = inst_59783;
var inst_59783__$1 = tmp59874;
var inst_59784__$1 = tmp59872;
var inst_59785__$1 = tmp59873;
var inst_59786__$1 = inst_59795;
var state_59838__$1 = (function (){var statearr_59880 = state_59838;
(statearr_59880[(14)] = inst_59794);

(statearr_59880[(8)] = inst_59784__$1);

(statearr_59880[(9)] = inst_59785__$1);

(statearr_59880[(10)] = inst_59783__$1);

(statearr_59880[(12)] = inst_59786__$1);

return statearr_59880;
})();
var statearr_59885_60888 = state_59838__$1;
(statearr_59885_60888[(2)] = null);

(statearr_59885_60888[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59839 === (22))){
var state_59838__$1 = state_59838;
var statearr_59886_60889 = state_59838__$1;
(statearr_59886_60889[(2)] = null);

(statearr_59886_60889[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59839 === (6))){
var inst_59771 = (state_59838[(13)]);
var inst_59780 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_59771) : f.call(null,inst_59771));
var inst_59781 = cljs.core.seq(inst_59780);
var inst_59783 = inst_59781;
var inst_59784 = null;
var inst_59785 = (0);
var inst_59786 = (0);
var state_59838__$1 = (function (){var statearr_59887 = state_59838;
(statearr_59887[(8)] = inst_59784);

(statearr_59887[(9)] = inst_59785);

(statearr_59887[(10)] = inst_59783);

(statearr_59887[(12)] = inst_59786);

return statearr_59887;
})();
var statearr_59889_60890 = state_59838__$1;
(statearr_59889_60890[(2)] = null);

(statearr_59889_60890[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59839 === (17))){
var inst_59798 = (state_59838[(7)]);
var inst_59802 = cljs.core.chunk_first(inst_59798);
var inst_59803 = cljs.core.chunk_rest(inst_59798);
var inst_59804 = cljs.core.count(inst_59802);
var inst_59783 = inst_59803;
var inst_59784 = inst_59802;
var inst_59785 = inst_59804;
var inst_59786 = (0);
var state_59838__$1 = (function (){var statearr_59892 = state_59838;
(statearr_59892[(8)] = inst_59784);

(statearr_59892[(9)] = inst_59785);

(statearr_59892[(10)] = inst_59783);

(statearr_59892[(12)] = inst_59786);

return statearr_59892;
})();
var statearr_59893_60891 = state_59838__$1;
(statearr_59893_60891[(2)] = null);

(statearr_59893_60891[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59839 === (3))){
var inst_59834 = (state_59838[(2)]);
var state_59838__$1 = state_59838;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59838__$1,inst_59834);
} else {
if((state_val_59839 === (12))){
var inst_59818 = (state_59838[(2)]);
var state_59838__$1 = state_59838;
var statearr_59898_60892 = state_59838__$1;
(statearr_59898_60892[(2)] = inst_59818);

(statearr_59898_60892[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59839 === (2))){
var state_59838__$1 = state_59838;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59838__$1,(4),in$);
} else {
if((state_val_59839 === (23))){
var inst_59830 = (state_59838[(2)]);
var state_59838__$1 = state_59838;
var statearr_59903_60893 = state_59838__$1;
(statearr_59903_60893[(2)] = inst_59830);

(statearr_59903_60893[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59839 === (19))){
var inst_59813 = (state_59838[(2)]);
var state_59838__$1 = state_59838;
var statearr_59911_60894 = state_59838__$1;
(statearr_59911_60894[(2)] = inst_59813);

(statearr_59911_60894[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59839 === (11))){
var inst_59798 = (state_59838[(7)]);
var inst_59783 = (state_59838[(10)]);
var inst_59798__$1 = cljs.core.seq(inst_59783);
var state_59838__$1 = (function (){var statearr_59920 = state_59838;
(statearr_59920[(7)] = inst_59798__$1);

return statearr_59920;
})();
if(inst_59798__$1){
var statearr_59921_60895 = state_59838__$1;
(statearr_59921_60895[(1)] = (14));

} else {
var statearr_59922_60896 = state_59838__$1;
(statearr_59922_60896[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59839 === (9))){
var inst_59820 = (state_59838[(2)]);
var inst_59821 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_59838__$1 = (function (){var statearr_59926 = state_59838;
(statearr_59926[(15)] = inst_59820);

return statearr_59926;
})();
if(cljs.core.truth_(inst_59821)){
var statearr_59927_60897 = state_59838__$1;
(statearr_59927_60897[(1)] = (21));

} else {
var statearr_59935_60898 = state_59838__$1;
(statearr_59935_60898[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59839 === (5))){
var inst_59774 = cljs.core.async.close_BANG_(out);
var state_59838__$1 = state_59838;
var statearr_59938_60899 = state_59838__$1;
(statearr_59938_60899[(2)] = inst_59774);

(statearr_59938_60899[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59839 === (14))){
var inst_59798 = (state_59838[(7)]);
var inst_59800 = cljs.core.chunked_seq_QMARK_(inst_59798);
var state_59838__$1 = state_59838;
if(inst_59800){
var statearr_59943_60900 = state_59838__$1;
(statearr_59943_60900[(1)] = (17));

} else {
var statearr_59944_60901 = state_59838__$1;
(statearr_59944_60901[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59839 === (16))){
var inst_59816 = (state_59838[(2)]);
var state_59838__$1 = state_59838;
var statearr_59945_60902 = state_59838__$1;
(statearr_59945_60902[(2)] = inst_59816);

(statearr_59945_60902[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59839 === (10))){
var inst_59784 = (state_59838[(8)]);
var inst_59786 = (state_59838[(12)]);
var inst_59792 = cljs.core._nth(inst_59784,inst_59786);
var state_59838__$1 = state_59838;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59838__$1,(13),out,inst_59792);
} else {
if((state_val_59839 === (18))){
var inst_59798 = (state_59838[(7)]);
var inst_59807 = cljs.core.first(inst_59798);
var state_59838__$1 = state_59838;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59838__$1,(20),out,inst_59807);
} else {
if((state_val_59839 === (8))){
var inst_59785 = (state_59838[(9)]);
var inst_59786 = (state_59838[(12)]);
var inst_59789 = (inst_59786 < inst_59785);
var inst_59790 = inst_59789;
var state_59838__$1 = state_59838;
if(cljs.core.truth_(inst_59790)){
var statearr_59953_60903 = state_59838__$1;
(statearr_59953_60903[(1)] = (10));

} else {
var statearr_59954_60904 = state_59838__$1;
(statearr_59954_60904[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__48474__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__48474__auto____0 = (function (){
var statearr_59959 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_59959[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__48474__auto__);

(statearr_59959[(1)] = (1));

return statearr_59959;
});
var cljs$core$async$mapcat_STAR__$_state_machine__48474__auto____1 = (function (state_59838){
while(true){
var ret_value__48475__auto__ = (function (){try{while(true){
var result__48476__auto__ = switch__48472__auto__(state_59838);
if(cljs.core.keyword_identical_QMARK_(result__48476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48476__auto__;
}
break;
}
}catch (e59972){var ex__48478__auto__ = e59972;
var statearr_59974_60905 = state_59838;
(statearr_59974_60905[(2)] = ex__48478__auto__);


if(cljs.core.seq((state_59838[(4)]))){
var statearr_59977_60906 = state_59838;
(statearr_59977_60906[(1)] = cljs.core.first((state_59838[(4)])));

} else {
throw ex__48478__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60907 = state_59838;
state_59838 = G__60907;
continue;
} else {
return ret_value__48475__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__48474__auto__ = function(state_59838){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__48474__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__48474__auto____1.call(this,state_59838);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__48474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__48474__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__48474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__48474__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__48474__auto__;
})()
})();
var state__48699__auto__ = (function (){var statearr_59984 = f__48698__auto__();
(statearr_59984[(6)] = c__48697__auto__);

return statearr_59984;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48699__auto__);
}));

return c__48697__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__59990 = arguments.length;
switch (G__59990) {
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
var G__60013 = arguments.length;
switch (G__60013) {
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
var G__60032 = arguments.length;
switch (G__60032) {
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
var c__48697__auto___60923 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48698__auto__ = (function (){var switch__48472__auto__ = (function (state_60079){
var state_val_60080 = (state_60079[(1)]);
if((state_val_60080 === (7))){
var inst_60072 = (state_60079[(2)]);
var state_60079__$1 = state_60079;
var statearr_60088_60924 = state_60079__$1;
(statearr_60088_60924[(2)] = inst_60072);

(statearr_60088_60924[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60080 === (1))){
var inst_60050 = null;
var state_60079__$1 = (function (){var statearr_60091 = state_60079;
(statearr_60091[(7)] = inst_60050);

return statearr_60091;
})();
var statearr_60092_60925 = state_60079__$1;
(statearr_60092_60925[(2)] = null);

(statearr_60092_60925[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60080 === (4))){
var inst_60053 = (state_60079[(8)]);
var inst_60053__$1 = (state_60079[(2)]);
var inst_60058 = (inst_60053__$1 == null);
var inst_60059 = cljs.core.not(inst_60058);
var state_60079__$1 = (function (){var statearr_60095 = state_60079;
(statearr_60095[(8)] = inst_60053__$1);

return statearr_60095;
})();
if(inst_60059){
var statearr_60096_60926 = state_60079__$1;
(statearr_60096_60926[(1)] = (5));

} else {
var statearr_60098_60927 = state_60079__$1;
(statearr_60098_60927[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60080 === (6))){
var state_60079__$1 = state_60079;
var statearr_60099_60928 = state_60079__$1;
(statearr_60099_60928[(2)] = null);

(statearr_60099_60928[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60080 === (3))){
var inst_60074 = (state_60079[(2)]);
var inst_60075 = cljs.core.async.close_BANG_(out);
var state_60079__$1 = (function (){var statearr_60100 = state_60079;
(statearr_60100[(9)] = inst_60074);

return statearr_60100;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_60079__$1,inst_60075);
} else {
if((state_val_60080 === (2))){
var state_60079__$1 = state_60079;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60079__$1,(4),ch);
} else {
if((state_val_60080 === (11))){
var inst_60053 = (state_60079[(8)]);
var inst_60066 = (state_60079[(2)]);
var inst_60050 = inst_60053;
var state_60079__$1 = (function (){var statearr_60101 = state_60079;
(statearr_60101[(10)] = inst_60066);

(statearr_60101[(7)] = inst_60050);

return statearr_60101;
})();
var statearr_60102_60929 = state_60079__$1;
(statearr_60102_60929[(2)] = null);

(statearr_60102_60929[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60080 === (9))){
var inst_60053 = (state_60079[(8)]);
var state_60079__$1 = state_60079;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_60079__$1,(11),out,inst_60053);
} else {
if((state_val_60080 === (5))){
var inst_60053 = (state_60079[(8)]);
var inst_60050 = (state_60079[(7)]);
var inst_60061 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_60053,inst_60050);
var state_60079__$1 = state_60079;
if(inst_60061){
var statearr_60104_60931 = state_60079__$1;
(statearr_60104_60931[(1)] = (8));

} else {
var statearr_60105_60932 = state_60079__$1;
(statearr_60105_60932[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60080 === (10))){
var inst_60069 = (state_60079[(2)]);
var state_60079__$1 = state_60079;
var statearr_60106_60933 = state_60079__$1;
(statearr_60106_60933[(2)] = inst_60069);

(statearr_60106_60933[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60080 === (8))){
var inst_60050 = (state_60079[(7)]);
var tmp60103 = inst_60050;
var inst_60050__$1 = tmp60103;
var state_60079__$1 = (function (){var statearr_60109 = state_60079;
(statearr_60109[(7)] = inst_60050__$1);

return statearr_60109;
})();
var statearr_60110_60935 = state_60079__$1;
(statearr_60110_60935[(2)] = null);

(statearr_60110_60935[(1)] = (2));


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
var cljs$core$async$state_machine__48474__auto__ = null;
var cljs$core$async$state_machine__48474__auto____0 = (function (){
var statearr_60115 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_60115[(0)] = cljs$core$async$state_machine__48474__auto__);

(statearr_60115[(1)] = (1));

return statearr_60115;
});
var cljs$core$async$state_machine__48474__auto____1 = (function (state_60079){
while(true){
var ret_value__48475__auto__ = (function (){try{while(true){
var result__48476__auto__ = switch__48472__auto__(state_60079);
if(cljs.core.keyword_identical_QMARK_(result__48476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48476__auto__;
}
break;
}
}catch (e60124){var ex__48478__auto__ = e60124;
var statearr_60125_60936 = state_60079;
(statearr_60125_60936[(2)] = ex__48478__auto__);


if(cljs.core.seq((state_60079[(4)]))){
var statearr_60126_60937 = state_60079;
(statearr_60126_60937[(1)] = cljs.core.first((state_60079[(4)])));

} else {
throw ex__48478__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60938 = state_60079;
state_60079 = G__60938;
continue;
} else {
return ret_value__48475__auto__;
}
break;
}
});
cljs$core$async$state_machine__48474__auto__ = function(state_60079){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48474__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48474__auto____1.call(this,state_60079);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48474__auto____0;
cljs$core$async$state_machine__48474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48474__auto____1;
return cljs$core$async$state_machine__48474__auto__;
})()
})();
var state__48699__auto__ = (function (){var statearr_60127 = f__48698__auto__();
(statearr_60127[(6)] = c__48697__auto___60923);

return statearr_60127;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48699__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__60129 = arguments.length;
switch (G__60129) {
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
var c__48697__auto___60942 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48698__auto__ = (function (){var switch__48472__auto__ = (function (state_60167){
var state_val_60168 = (state_60167[(1)]);
if((state_val_60168 === (7))){
var inst_60163 = (state_60167[(2)]);
var state_60167__$1 = state_60167;
var statearr_60169_60944 = state_60167__$1;
(statearr_60169_60944[(2)] = inst_60163);

(statearr_60169_60944[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60168 === (1))){
var inst_60130 = (new Array(n));
var inst_60131 = inst_60130;
var inst_60132 = (0);
var state_60167__$1 = (function (){var statearr_60170 = state_60167;
(statearr_60170[(7)] = inst_60131);

(statearr_60170[(8)] = inst_60132);

return statearr_60170;
})();
var statearr_60171_60945 = state_60167__$1;
(statearr_60171_60945[(2)] = null);

(statearr_60171_60945[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60168 === (4))){
var inst_60135 = (state_60167[(9)]);
var inst_60135__$1 = (state_60167[(2)]);
var inst_60136 = (inst_60135__$1 == null);
var inst_60137 = cljs.core.not(inst_60136);
var state_60167__$1 = (function (){var statearr_60172 = state_60167;
(statearr_60172[(9)] = inst_60135__$1);

return statearr_60172;
})();
if(inst_60137){
var statearr_60173_60947 = state_60167__$1;
(statearr_60173_60947[(1)] = (5));

} else {
var statearr_60174_60948 = state_60167__$1;
(statearr_60174_60948[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60168 === (15))){
var inst_60157 = (state_60167[(2)]);
var state_60167__$1 = state_60167;
var statearr_60175_60949 = state_60167__$1;
(statearr_60175_60949[(2)] = inst_60157);

(statearr_60175_60949[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60168 === (13))){
var state_60167__$1 = state_60167;
var statearr_60176_60951 = state_60167__$1;
(statearr_60176_60951[(2)] = null);

(statearr_60176_60951[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60168 === (6))){
var inst_60132 = (state_60167[(8)]);
var inst_60153 = (inst_60132 > (0));
var state_60167__$1 = state_60167;
if(cljs.core.truth_(inst_60153)){
var statearr_60177_60952 = state_60167__$1;
(statearr_60177_60952[(1)] = (12));

} else {
var statearr_60178_60953 = state_60167__$1;
(statearr_60178_60953[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60168 === (3))){
var inst_60165 = (state_60167[(2)]);
var state_60167__$1 = state_60167;
return cljs.core.async.impl.ioc_helpers.return_chan(state_60167__$1,inst_60165);
} else {
if((state_val_60168 === (12))){
var inst_60131 = (state_60167[(7)]);
var inst_60155 = cljs.core.vec(inst_60131);
var state_60167__$1 = state_60167;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_60167__$1,(15),out,inst_60155);
} else {
if((state_val_60168 === (2))){
var state_60167__$1 = state_60167;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60167__$1,(4),ch);
} else {
if((state_val_60168 === (11))){
var inst_60147 = (state_60167[(2)]);
var inst_60148 = (new Array(n));
var inst_60131 = inst_60148;
var inst_60132 = (0);
var state_60167__$1 = (function (){var statearr_60179 = state_60167;
(statearr_60179[(10)] = inst_60147);

(statearr_60179[(7)] = inst_60131);

(statearr_60179[(8)] = inst_60132);

return statearr_60179;
})();
var statearr_60180_60999 = state_60167__$1;
(statearr_60180_60999[(2)] = null);

(statearr_60180_60999[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60168 === (9))){
var inst_60131 = (state_60167[(7)]);
var inst_60145 = cljs.core.vec(inst_60131);
var state_60167__$1 = state_60167;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_60167__$1,(11),out,inst_60145);
} else {
if((state_val_60168 === (5))){
var inst_60140 = (state_60167[(11)]);
var inst_60135 = (state_60167[(9)]);
var inst_60131 = (state_60167[(7)]);
var inst_60132 = (state_60167[(8)]);
var inst_60139 = (inst_60131[inst_60132] = inst_60135);
var inst_60140__$1 = (inst_60132 + (1));
var inst_60141 = (inst_60140__$1 < n);
var state_60167__$1 = (function (){var statearr_60181 = state_60167;
(statearr_60181[(11)] = inst_60140__$1);

(statearr_60181[(12)] = inst_60139);

return statearr_60181;
})();
if(cljs.core.truth_(inst_60141)){
var statearr_60182_61000 = state_60167__$1;
(statearr_60182_61000[(1)] = (8));

} else {
var statearr_60183_61001 = state_60167__$1;
(statearr_60183_61001[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60168 === (14))){
var inst_60160 = (state_60167[(2)]);
var inst_60161 = cljs.core.async.close_BANG_(out);
var state_60167__$1 = (function (){var statearr_60185 = state_60167;
(statearr_60185[(13)] = inst_60160);

return statearr_60185;
})();
var statearr_60186_61064 = state_60167__$1;
(statearr_60186_61064[(2)] = inst_60161);

(statearr_60186_61064[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60168 === (10))){
var inst_60151 = (state_60167[(2)]);
var state_60167__$1 = state_60167;
var statearr_60187_61071 = state_60167__$1;
(statearr_60187_61071[(2)] = inst_60151);

(statearr_60187_61071[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60168 === (8))){
var inst_60140 = (state_60167[(11)]);
var inst_60131 = (state_60167[(7)]);
var tmp60184 = inst_60131;
var inst_60131__$1 = tmp60184;
var inst_60132 = inst_60140;
var state_60167__$1 = (function (){var statearr_60188 = state_60167;
(statearr_60188[(7)] = inst_60131__$1);

(statearr_60188[(8)] = inst_60132);

return statearr_60188;
})();
var statearr_60189_61085 = state_60167__$1;
(statearr_60189_61085[(2)] = null);

(statearr_60189_61085[(1)] = (2));


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
var cljs$core$async$state_machine__48474__auto__ = null;
var cljs$core$async$state_machine__48474__auto____0 = (function (){
var statearr_60190 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_60190[(0)] = cljs$core$async$state_machine__48474__auto__);

(statearr_60190[(1)] = (1));

return statearr_60190;
});
var cljs$core$async$state_machine__48474__auto____1 = (function (state_60167){
while(true){
var ret_value__48475__auto__ = (function (){try{while(true){
var result__48476__auto__ = switch__48472__auto__(state_60167);
if(cljs.core.keyword_identical_QMARK_(result__48476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48476__auto__;
}
break;
}
}catch (e60191){var ex__48478__auto__ = e60191;
var statearr_60192_61086 = state_60167;
(statearr_60192_61086[(2)] = ex__48478__auto__);


if(cljs.core.seq((state_60167[(4)]))){
var statearr_60193_61087 = state_60167;
(statearr_60193_61087[(1)] = cljs.core.first((state_60167[(4)])));

} else {
throw ex__48478__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61088 = state_60167;
state_60167 = G__61088;
continue;
} else {
return ret_value__48475__auto__;
}
break;
}
});
cljs$core$async$state_machine__48474__auto__ = function(state_60167){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48474__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48474__auto____1.call(this,state_60167);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48474__auto____0;
cljs$core$async$state_machine__48474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48474__auto____1;
return cljs$core$async$state_machine__48474__auto__;
})()
})();
var state__48699__auto__ = (function (){var statearr_60194 = f__48698__auto__();
(statearr_60194[(6)] = c__48697__auto___60942);

return statearr_60194;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48699__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__60196 = arguments.length;
switch (G__60196) {
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
var c__48697__auto___61105 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48698__auto__ = (function (){var switch__48472__auto__ = (function (state_60241){
var state_val_60242 = (state_60241[(1)]);
if((state_val_60242 === (7))){
var inst_60237 = (state_60241[(2)]);
var state_60241__$1 = state_60241;
var statearr_60243_61106 = state_60241__$1;
(statearr_60243_61106[(2)] = inst_60237);

(statearr_60243_61106[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60242 === (1))){
var inst_60197 = [];
var inst_60198 = inst_60197;
var inst_60199 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_60241__$1 = (function (){var statearr_60244 = state_60241;
(statearr_60244[(7)] = inst_60199);

(statearr_60244[(8)] = inst_60198);

return statearr_60244;
})();
var statearr_60245_61107 = state_60241__$1;
(statearr_60245_61107[(2)] = null);

(statearr_60245_61107[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60242 === (4))){
var inst_60202 = (state_60241[(9)]);
var inst_60202__$1 = (state_60241[(2)]);
var inst_60203 = (inst_60202__$1 == null);
var inst_60204 = cljs.core.not(inst_60203);
var state_60241__$1 = (function (){var statearr_60246 = state_60241;
(statearr_60246[(9)] = inst_60202__$1);

return statearr_60246;
})();
if(inst_60204){
var statearr_60247_61111 = state_60241__$1;
(statearr_60247_61111[(1)] = (5));

} else {
var statearr_60248_61116 = state_60241__$1;
(statearr_60248_61116[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60242 === (15))){
var inst_60198 = (state_60241[(8)]);
var inst_60229 = cljs.core.vec(inst_60198);
var state_60241__$1 = state_60241;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_60241__$1,(18),out,inst_60229);
} else {
if((state_val_60242 === (13))){
var inst_60224 = (state_60241[(2)]);
var state_60241__$1 = state_60241;
var statearr_60249_61124 = state_60241__$1;
(statearr_60249_61124[(2)] = inst_60224);

(statearr_60249_61124[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60242 === (6))){
var inst_60198 = (state_60241[(8)]);
var inst_60226 = inst_60198.length;
var inst_60227 = (inst_60226 > (0));
var state_60241__$1 = state_60241;
if(cljs.core.truth_(inst_60227)){
var statearr_60250_61131 = state_60241__$1;
(statearr_60250_61131[(1)] = (15));

} else {
var statearr_60251_61136 = state_60241__$1;
(statearr_60251_61136[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60242 === (17))){
var inst_60234 = (state_60241[(2)]);
var inst_60235 = cljs.core.async.close_BANG_(out);
var state_60241__$1 = (function (){var statearr_60252 = state_60241;
(statearr_60252[(10)] = inst_60234);

return statearr_60252;
})();
var statearr_60253_61137 = state_60241__$1;
(statearr_60253_61137[(2)] = inst_60235);

(statearr_60253_61137[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60242 === (3))){
var inst_60239 = (state_60241[(2)]);
var state_60241__$1 = state_60241;
return cljs.core.async.impl.ioc_helpers.return_chan(state_60241__$1,inst_60239);
} else {
if((state_val_60242 === (12))){
var inst_60198 = (state_60241[(8)]);
var inst_60217 = cljs.core.vec(inst_60198);
var state_60241__$1 = state_60241;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_60241__$1,(14),out,inst_60217);
} else {
if((state_val_60242 === (2))){
var state_60241__$1 = state_60241;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60241__$1,(4),ch);
} else {
if((state_val_60242 === (11))){
var inst_60206 = (state_60241[(11)]);
var inst_60202 = (state_60241[(9)]);
var inst_60198 = (state_60241[(8)]);
var inst_60214 = inst_60198.push(inst_60202);
var tmp60254 = inst_60198;
var inst_60198__$1 = tmp60254;
var inst_60199 = inst_60206;
var state_60241__$1 = (function (){var statearr_60255 = state_60241;
(statearr_60255[(7)] = inst_60199);

(statearr_60255[(12)] = inst_60214);

(statearr_60255[(8)] = inst_60198__$1);

return statearr_60255;
})();
var statearr_60256_61163 = state_60241__$1;
(statearr_60256_61163[(2)] = null);

(statearr_60256_61163[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60242 === (9))){
var inst_60199 = (state_60241[(7)]);
var inst_60210 = cljs.core.keyword_identical_QMARK_(inst_60199,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_60241__$1 = state_60241;
var statearr_60257_61164 = state_60241__$1;
(statearr_60257_61164[(2)] = inst_60210);

(statearr_60257_61164[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60242 === (5))){
var inst_60207 = (state_60241[(13)]);
var inst_60206 = (state_60241[(11)]);
var inst_60199 = (state_60241[(7)]);
var inst_60202 = (state_60241[(9)]);
var inst_60206__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_60202) : f.call(null,inst_60202));
var inst_60207__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_60206__$1,inst_60199);
var state_60241__$1 = (function (){var statearr_60258 = state_60241;
(statearr_60258[(13)] = inst_60207__$1);

(statearr_60258[(11)] = inst_60206__$1);

return statearr_60258;
})();
if(inst_60207__$1){
var statearr_60259_61165 = state_60241__$1;
(statearr_60259_61165[(1)] = (8));

} else {
var statearr_60260_61182 = state_60241__$1;
(statearr_60260_61182[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60242 === (14))){
var inst_60206 = (state_60241[(11)]);
var inst_60202 = (state_60241[(9)]);
var inst_60219 = (state_60241[(2)]);
var inst_60220 = [];
var inst_60221 = inst_60220.push(inst_60202);
var inst_60198 = inst_60220;
var inst_60199 = inst_60206;
var state_60241__$1 = (function (){var statearr_60261 = state_60241;
(statearr_60261[(14)] = inst_60221);

(statearr_60261[(7)] = inst_60199);

(statearr_60261[(8)] = inst_60198);

(statearr_60261[(15)] = inst_60219);

return statearr_60261;
})();
var statearr_60262_61183 = state_60241__$1;
(statearr_60262_61183[(2)] = null);

(statearr_60262_61183[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60242 === (16))){
var state_60241__$1 = state_60241;
var statearr_60263_61184 = state_60241__$1;
(statearr_60263_61184[(2)] = null);

(statearr_60263_61184[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60242 === (10))){
var inst_60212 = (state_60241[(2)]);
var state_60241__$1 = state_60241;
if(cljs.core.truth_(inst_60212)){
var statearr_60264_61186 = state_60241__$1;
(statearr_60264_61186[(1)] = (11));

} else {
var statearr_60265_61187 = state_60241__$1;
(statearr_60265_61187[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60242 === (18))){
var inst_60231 = (state_60241[(2)]);
var state_60241__$1 = state_60241;
var statearr_60266_61190 = state_60241__$1;
(statearr_60266_61190[(2)] = inst_60231);

(statearr_60266_61190[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60242 === (8))){
var inst_60207 = (state_60241[(13)]);
var state_60241__$1 = state_60241;
var statearr_60267_61192 = state_60241__$1;
(statearr_60267_61192[(2)] = inst_60207);

(statearr_60267_61192[(1)] = (10));


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
var cljs$core$async$state_machine__48474__auto__ = null;
var cljs$core$async$state_machine__48474__auto____0 = (function (){
var statearr_60268 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_60268[(0)] = cljs$core$async$state_machine__48474__auto__);

(statearr_60268[(1)] = (1));

return statearr_60268;
});
var cljs$core$async$state_machine__48474__auto____1 = (function (state_60241){
while(true){
var ret_value__48475__auto__ = (function (){try{while(true){
var result__48476__auto__ = switch__48472__auto__(state_60241);
if(cljs.core.keyword_identical_QMARK_(result__48476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48476__auto__;
}
break;
}
}catch (e60269){var ex__48478__auto__ = e60269;
var statearr_60270_61193 = state_60241;
(statearr_60270_61193[(2)] = ex__48478__auto__);


if(cljs.core.seq((state_60241[(4)]))){
var statearr_60271_61194 = state_60241;
(statearr_60271_61194[(1)] = cljs.core.first((state_60241[(4)])));

} else {
throw ex__48478__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__61195 = state_60241;
state_60241 = G__61195;
continue;
} else {
return ret_value__48475__auto__;
}
break;
}
});
cljs$core$async$state_machine__48474__auto__ = function(state_60241){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48474__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48474__auto____1.call(this,state_60241);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48474__auto____0;
cljs$core$async$state_machine__48474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48474__auto____1;
return cljs$core$async$state_machine__48474__auto__;
})()
})();
var state__48699__auto__ = (function (){var statearr_60272 = f__48698__auto__();
(statearr_60272[(6)] = c__48697__auto___61105);

return statearr_60272;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48699__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map

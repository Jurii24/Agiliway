goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__48782 = arguments.length;
switch (G__48782) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async48783 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48783 = (function (f,blockable,meta48784){
this.f = f;
this.blockable = blockable;
this.meta48784 = meta48784;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48783.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48785,meta48784__$1){
var self__ = this;
var _48785__$1 = this;
return (new cljs.core.async.t_cljs$core$async48783(self__.f,self__.blockable,meta48784__$1));
}));

(cljs.core.async.t_cljs$core$async48783.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48785){
var self__ = this;
var _48785__$1 = this;
return self__.meta48784;
}));

(cljs.core.async.t_cljs$core$async48783.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48783.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async48783.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async48783.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async48783.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta48784","meta48784",1514098586,null)], null);
}));

(cljs.core.async.t_cljs$core$async48783.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48783.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48783");

(cljs.core.async.t_cljs$core$async48783.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async48783");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48783.
 */
cljs.core.async.__GT_t_cljs$core$async48783 = (function cljs$core$async$__GT_t_cljs$core$async48783(f__$1,blockable__$1,meta48784){
return (new cljs.core.async.t_cljs$core$async48783(f__$1,blockable__$1,meta48784));
});

}

return (new cljs.core.async.t_cljs$core$async48783(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__48810 = arguments.length;
switch (G__48810) {
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
var G__48812 = arguments.length;
switch (G__48812) {
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
var G__48814 = arguments.length;
switch (G__48814) {
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
var val_50335 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_50335) : fn1.call(null,val_50335));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_50335) : fn1.call(null,val_50335));
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
var G__48816 = arguments.length;
switch (G__48816) {
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
var n__4706__auto___50337 = n;
var x_50338 = (0);
while(true){
if((x_50338 < n__4706__auto___50337)){
(a[x_50338] = x_50338);

var G__50339 = (x_50338 + (1));
x_50338 = G__50339;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async48817 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48817 = (function (flag,meta48818){
this.flag = flag;
this.meta48818 = meta48818;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48817.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48819,meta48818__$1){
var self__ = this;
var _48819__$1 = this;
return (new cljs.core.async.t_cljs$core$async48817(self__.flag,meta48818__$1));
}));

(cljs.core.async.t_cljs$core$async48817.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48819){
var self__ = this;
var _48819__$1 = this;
return self__.meta48818;
}));

(cljs.core.async.t_cljs$core$async48817.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48817.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async48817.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async48817.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async48817.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta48818","meta48818",-50884688,null)], null);
}));

(cljs.core.async.t_cljs$core$async48817.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48817.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48817");

(cljs.core.async.t_cljs$core$async48817.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async48817");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48817.
 */
cljs.core.async.__GT_t_cljs$core$async48817 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async48817(flag__$1,meta48818){
return (new cljs.core.async.t_cljs$core$async48817(flag__$1,meta48818));
});

}

return (new cljs.core.async.t_cljs$core$async48817(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async48820 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48820 = (function (flag,cb,meta48821){
this.flag = flag;
this.cb = cb;
this.meta48821 = meta48821;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48820.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48822,meta48821__$1){
var self__ = this;
var _48822__$1 = this;
return (new cljs.core.async.t_cljs$core$async48820(self__.flag,self__.cb,meta48821__$1));
}));

(cljs.core.async.t_cljs$core$async48820.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48822){
var self__ = this;
var _48822__$1 = this;
return self__.meta48821;
}));

(cljs.core.async.t_cljs$core$async48820.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48820.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async48820.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async48820.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async48820.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta48821","meta48821",2106116817,null)], null);
}));

(cljs.core.async.t_cljs$core$async48820.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48820.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48820");

(cljs.core.async.t_cljs$core$async48820.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async48820");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48820.
 */
cljs.core.async.__GT_t_cljs$core$async48820 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async48820(flag__$1,cb__$1,meta48821){
return (new cljs.core.async.t_cljs$core$async48820(flag__$1,cb__$1,meta48821));
});

}

return (new cljs.core.async.t_cljs$core$async48820(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__48823_SHARP_){
var G__48825 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__48823_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__48825) : fret.call(null,G__48825));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__48824_SHARP_){
var G__48826 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__48824_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__48826) : fret.call(null,G__48826));
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
var G__50340 = (i + (1));
i = G__50340;
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
var len__4829__auto___50341 = arguments.length;
var i__4830__auto___50342 = (0);
while(true){
if((i__4830__auto___50342 < len__4829__auto___50341)){
args__4835__auto__.push((arguments[i__4830__auto___50342]));

var G__50343 = (i__4830__auto___50342 + (1));
i__4830__auto___50342 = G__50343;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__48829){
var map__48830 = p__48829;
var map__48830__$1 = cljs.core.__destructure_map(map__48830);
var opts = map__48830__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq48827){
var G__48828 = cljs.core.first(seq48827);
var seq48827__$1 = cljs.core.next(seq48827);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48828,seq48827__$1);
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
var G__48832 = arguments.length;
switch (G__48832) {
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
var c__48697__auto___50345 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48698__auto__ = (function (){var switch__48472__auto__ = (function (state_48856){
var state_val_48857 = (state_48856[(1)]);
if((state_val_48857 === (7))){
var inst_48852 = (state_48856[(2)]);
var state_48856__$1 = state_48856;
var statearr_48858_50346 = state_48856__$1;
(statearr_48858_50346[(2)] = inst_48852);

(statearr_48858_50346[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48857 === (1))){
var state_48856__$1 = state_48856;
var statearr_48859_50347 = state_48856__$1;
(statearr_48859_50347[(2)] = null);

(statearr_48859_50347[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48857 === (4))){
var inst_48835 = (state_48856[(7)]);
var inst_48835__$1 = (state_48856[(2)]);
var inst_48836 = (inst_48835__$1 == null);
var state_48856__$1 = (function (){var statearr_48860 = state_48856;
(statearr_48860[(7)] = inst_48835__$1);

return statearr_48860;
})();
if(cljs.core.truth_(inst_48836)){
var statearr_48861_50348 = state_48856__$1;
(statearr_48861_50348[(1)] = (5));

} else {
var statearr_48862_50349 = state_48856__$1;
(statearr_48862_50349[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48857 === (13))){
var state_48856__$1 = state_48856;
var statearr_48863_50350 = state_48856__$1;
(statearr_48863_50350[(2)] = null);

(statearr_48863_50350[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48857 === (6))){
var inst_48835 = (state_48856[(7)]);
var state_48856__$1 = state_48856;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48856__$1,(11),to,inst_48835);
} else {
if((state_val_48857 === (3))){
var inst_48854 = (state_48856[(2)]);
var state_48856__$1 = state_48856;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48856__$1,inst_48854);
} else {
if((state_val_48857 === (12))){
var state_48856__$1 = state_48856;
var statearr_48864_50351 = state_48856__$1;
(statearr_48864_50351[(2)] = null);

(statearr_48864_50351[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48857 === (2))){
var state_48856__$1 = state_48856;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48856__$1,(4),from);
} else {
if((state_val_48857 === (11))){
var inst_48845 = (state_48856[(2)]);
var state_48856__$1 = state_48856;
if(cljs.core.truth_(inst_48845)){
var statearr_48865_50352 = state_48856__$1;
(statearr_48865_50352[(1)] = (12));

} else {
var statearr_48866_50353 = state_48856__$1;
(statearr_48866_50353[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48857 === (9))){
var state_48856__$1 = state_48856;
var statearr_48867_50354 = state_48856__$1;
(statearr_48867_50354[(2)] = null);

(statearr_48867_50354[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48857 === (5))){
var state_48856__$1 = state_48856;
if(cljs.core.truth_(close_QMARK_)){
var statearr_48868_50357 = state_48856__$1;
(statearr_48868_50357[(1)] = (8));

} else {
var statearr_48869_50358 = state_48856__$1;
(statearr_48869_50358[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48857 === (14))){
var inst_48850 = (state_48856[(2)]);
var state_48856__$1 = state_48856;
var statearr_48870_50359 = state_48856__$1;
(statearr_48870_50359[(2)] = inst_48850);

(statearr_48870_50359[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48857 === (10))){
var inst_48842 = (state_48856[(2)]);
var state_48856__$1 = state_48856;
var statearr_48871_50360 = state_48856__$1;
(statearr_48871_50360[(2)] = inst_48842);

(statearr_48871_50360[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48857 === (8))){
var inst_48839 = cljs.core.async.close_BANG_(to);
var state_48856__$1 = state_48856;
var statearr_48872_50361 = state_48856__$1;
(statearr_48872_50361[(2)] = inst_48839);

(statearr_48872_50361[(1)] = (10));


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
var statearr_48873 = [null,null,null,null,null,null,null,null];
(statearr_48873[(0)] = cljs$core$async$state_machine__48474__auto__);

(statearr_48873[(1)] = (1));

return statearr_48873;
});
var cljs$core$async$state_machine__48474__auto____1 = (function (state_48856){
while(true){
var ret_value__48475__auto__ = (function (){try{while(true){
var result__48476__auto__ = switch__48472__auto__(state_48856);
if(cljs.core.keyword_identical_QMARK_(result__48476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48476__auto__;
}
break;
}
}catch (e48874){var ex__48478__auto__ = e48874;
var statearr_48875_50362 = state_48856;
(statearr_48875_50362[(2)] = ex__48478__auto__);


if(cljs.core.seq((state_48856[(4)]))){
var statearr_48876_50363 = state_48856;
(statearr_48876_50363[(1)] = cljs.core.first((state_48856[(4)])));

} else {
throw ex__48478__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50364 = state_48856;
state_48856 = G__50364;
continue;
} else {
return ret_value__48475__auto__;
}
break;
}
});
cljs$core$async$state_machine__48474__auto__ = function(state_48856){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48474__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48474__auto____1.call(this,state_48856);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48474__auto____0;
cljs$core$async$state_machine__48474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48474__auto____1;
return cljs$core$async$state_machine__48474__auto__;
})()
})();
var state__48699__auto__ = (function (){var statearr_48877 = f__48698__auto__();
(statearr_48877[(6)] = c__48697__auto___50345);

return statearr_48877;
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
var process = (function (p__48878){
var vec__48879 = p__48878;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48879,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48879,(1),null);
var job = vec__48879;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__48697__auto___50365 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48698__auto__ = (function (){var switch__48472__auto__ = (function (state_48886){
var state_val_48887 = (state_48886[(1)]);
if((state_val_48887 === (1))){
var state_48886__$1 = state_48886;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48886__$1,(2),res,v);
} else {
if((state_val_48887 === (2))){
var inst_48883 = (state_48886[(2)]);
var inst_48884 = cljs.core.async.close_BANG_(res);
var state_48886__$1 = (function (){var statearr_48888 = state_48886;
(statearr_48888[(7)] = inst_48883);

return statearr_48888;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_48886__$1,inst_48884);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__48474__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__48474__auto____0 = (function (){
var statearr_48889 = [null,null,null,null,null,null,null,null];
(statearr_48889[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__48474__auto__);

(statearr_48889[(1)] = (1));

return statearr_48889;
});
var cljs$core$async$pipeline_STAR__$_state_machine__48474__auto____1 = (function (state_48886){
while(true){
var ret_value__48475__auto__ = (function (){try{while(true){
var result__48476__auto__ = switch__48472__auto__(state_48886);
if(cljs.core.keyword_identical_QMARK_(result__48476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48476__auto__;
}
break;
}
}catch (e48890){var ex__48478__auto__ = e48890;
var statearr_48891_50366 = state_48886;
(statearr_48891_50366[(2)] = ex__48478__auto__);


if(cljs.core.seq((state_48886[(4)]))){
var statearr_48892_50367 = state_48886;
(statearr_48892_50367[(1)] = cljs.core.first((state_48886[(4)])));

} else {
throw ex__48478__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50368 = state_48886;
state_48886 = G__50368;
continue;
} else {
return ret_value__48475__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__48474__auto__ = function(state_48886){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__48474__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__48474__auto____1.call(this,state_48886);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__48474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__48474__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__48474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__48474__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__48474__auto__;
})()
})();
var state__48699__auto__ = (function (){var statearr_48893 = f__48698__auto__();
(statearr_48893[(6)] = c__48697__auto___50365);

return statearr_48893;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48699__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__48894){
var vec__48895 = p__48894;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48895,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48895,(1),null);
var job = vec__48895;
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
var n__4706__auto___50369 = n;
var __50370 = (0);
while(true){
if((__50370 < n__4706__auto___50369)){
var G__48898_50371 = type;
var G__48898_50372__$1 = (((G__48898_50371 instanceof cljs.core.Keyword))?G__48898_50371.fqn:null);
switch (G__48898_50372__$1) {
case "compute":
var c__48697__auto___50374 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__50370,c__48697__auto___50374,G__48898_50371,G__48898_50372__$1,n__4706__auto___50369,jobs,results,process,async){
return (function (){
var f__48698__auto__ = (function (){var switch__48472__auto__ = ((function (__50370,c__48697__auto___50374,G__48898_50371,G__48898_50372__$1,n__4706__auto___50369,jobs,results,process,async){
return (function (state_48911){
var state_val_48912 = (state_48911[(1)]);
if((state_val_48912 === (1))){
var state_48911__$1 = state_48911;
var statearr_48913_50375 = state_48911__$1;
(statearr_48913_50375[(2)] = null);

(statearr_48913_50375[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48912 === (2))){
var state_48911__$1 = state_48911;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48911__$1,(4),jobs);
} else {
if((state_val_48912 === (3))){
var inst_48909 = (state_48911[(2)]);
var state_48911__$1 = state_48911;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48911__$1,inst_48909);
} else {
if((state_val_48912 === (4))){
var inst_48901 = (state_48911[(2)]);
var inst_48902 = process(inst_48901);
var state_48911__$1 = state_48911;
if(cljs.core.truth_(inst_48902)){
var statearr_48914_50376 = state_48911__$1;
(statearr_48914_50376[(1)] = (5));

} else {
var statearr_48915_50377 = state_48911__$1;
(statearr_48915_50377[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48912 === (5))){
var state_48911__$1 = state_48911;
var statearr_48916_50378 = state_48911__$1;
(statearr_48916_50378[(2)] = null);

(statearr_48916_50378[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48912 === (6))){
var state_48911__$1 = state_48911;
var statearr_48917_50380 = state_48911__$1;
(statearr_48917_50380[(2)] = null);

(statearr_48917_50380[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48912 === (7))){
var inst_48907 = (state_48911[(2)]);
var state_48911__$1 = state_48911;
var statearr_48918_50381 = state_48911__$1;
(statearr_48918_50381[(2)] = inst_48907);

(statearr_48918_50381[(1)] = (3));


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
});})(__50370,c__48697__auto___50374,G__48898_50371,G__48898_50372__$1,n__4706__auto___50369,jobs,results,process,async))
;
return ((function (__50370,switch__48472__auto__,c__48697__auto___50374,G__48898_50371,G__48898_50372__$1,n__4706__auto___50369,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__48474__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__48474__auto____0 = (function (){
var statearr_48919 = [null,null,null,null,null,null,null];
(statearr_48919[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__48474__auto__);

(statearr_48919[(1)] = (1));

return statearr_48919;
});
var cljs$core$async$pipeline_STAR__$_state_machine__48474__auto____1 = (function (state_48911){
while(true){
var ret_value__48475__auto__ = (function (){try{while(true){
var result__48476__auto__ = switch__48472__auto__(state_48911);
if(cljs.core.keyword_identical_QMARK_(result__48476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48476__auto__;
}
break;
}
}catch (e48920){var ex__48478__auto__ = e48920;
var statearr_48921_50382 = state_48911;
(statearr_48921_50382[(2)] = ex__48478__auto__);


if(cljs.core.seq((state_48911[(4)]))){
var statearr_48922_50383 = state_48911;
(statearr_48922_50383[(1)] = cljs.core.first((state_48911[(4)])));

} else {
throw ex__48478__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50384 = state_48911;
state_48911 = G__50384;
continue;
} else {
return ret_value__48475__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__48474__auto__ = function(state_48911){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__48474__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__48474__auto____1.call(this,state_48911);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__48474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__48474__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__48474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__48474__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__48474__auto__;
})()
;})(__50370,switch__48472__auto__,c__48697__auto___50374,G__48898_50371,G__48898_50372__$1,n__4706__auto___50369,jobs,results,process,async))
})();
var state__48699__auto__ = (function (){var statearr_48923 = f__48698__auto__();
(statearr_48923[(6)] = c__48697__auto___50374);

return statearr_48923;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48699__auto__);
});})(__50370,c__48697__auto___50374,G__48898_50371,G__48898_50372__$1,n__4706__auto___50369,jobs,results,process,async))
);


break;
case "async":
var c__48697__auto___50385 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__50370,c__48697__auto___50385,G__48898_50371,G__48898_50372__$1,n__4706__auto___50369,jobs,results,process,async){
return (function (){
var f__48698__auto__ = (function (){var switch__48472__auto__ = ((function (__50370,c__48697__auto___50385,G__48898_50371,G__48898_50372__$1,n__4706__auto___50369,jobs,results,process,async){
return (function (state_48936){
var state_val_48937 = (state_48936[(1)]);
if((state_val_48937 === (1))){
var state_48936__$1 = state_48936;
var statearr_48938_50386 = state_48936__$1;
(statearr_48938_50386[(2)] = null);

(statearr_48938_50386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48937 === (2))){
var state_48936__$1 = state_48936;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48936__$1,(4),jobs);
} else {
if((state_val_48937 === (3))){
var inst_48934 = (state_48936[(2)]);
var state_48936__$1 = state_48936;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48936__$1,inst_48934);
} else {
if((state_val_48937 === (4))){
var inst_48926 = (state_48936[(2)]);
var inst_48927 = async(inst_48926);
var state_48936__$1 = state_48936;
if(cljs.core.truth_(inst_48927)){
var statearr_48939_50387 = state_48936__$1;
(statearr_48939_50387[(1)] = (5));

} else {
var statearr_48940_50388 = state_48936__$1;
(statearr_48940_50388[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48937 === (5))){
var state_48936__$1 = state_48936;
var statearr_48941_50389 = state_48936__$1;
(statearr_48941_50389[(2)] = null);

(statearr_48941_50389[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48937 === (6))){
var state_48936__$1 = state_48936;
var statearr_48942_50390 = state_48936__$1;
(statearr_48942_50390[(2)] = null);

(statearr_48942_50390[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48937 === (7))){
var inst_48932 = (state_48936[(2)]);
var state_48936__$1 = state_48936;
var statearr_48943_50391 = state_48936__$1;
(statearr_48943_50391[(2)] = inst_48932);

(statearr_48943_50391[(1)] = (3));


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
});})(__50370,c__48697__auto___50385,G__48898_50371,G__48898_50372__$1,n__4706__auto___50369,jobs,results,process,async))
;
return ((function (__50370,switch__48472__auto__,c__48697__auto___50385,G__48898_50371,G__48898_50372__$1,n__4706__auto___50369,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__48474__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__48474__auto____0 = (function (){
var statearr_48944 = [null,null,null,null,null,null,null];
(statearr_48944[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__48474__auto__);

(statearr_48944[(1)] = (1));

return statearr_48944;
});
var cljs$core$async$pipeline_STAR__$_state_machine__48474__auto____1 = (function (state_48936){
while(true){
var ret_value__48475__auto__ = (function (){try{while(true){
var result__48476__auto__ = switch__48472__auto__(state_48936);
if(cljs.core.keyword_identical_QMARK_(result__48476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48476__auto__;
}
break;
}
}catch (e48945){var ex__48478__auto__ = e48945;
var statearr_48946_50392 = state_48936;
(statearr_48946_50392[(2)] = ex__48478__auto__);


if(cljs.core.seq((state_48936[(4)]))){
var statearr_48947_50397 = state_48936;
(statearr_48947_50397[(1)] = cljs.core.first((state_48936[(4)])));

} else {
throw ex__48478__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50398 = state_48936;
state_48936 = G__50398;
continue;
} else {
return ret_value__48475__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__48474__auto__ = function(state_48936){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__48474__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__48474__auto____1.call(this,state_48936);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__48474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__48474__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__48474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__48474__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__48474__auto__;
})()
;})(__50370,switch__48472__auto__,c__48697__auto___50385,G__48898_50371,G__48898_50372__$1,n__4706__auto___50369,jobs,results,process,async))
})();
var state__48699__auto__ = (function (){var statearr_48948 = f__48698__auto__();
(statearr_48948[(6)] = c__48697__auto___50385);

return statearr_48948;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48699__auto__);
});})(__50370,c__48697__auto___50385,G__48898_50371,G__48898_50372__$1,n__4706__auto___50369,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48898_50372__$1)].join('')));

}

var G__50399 = (__50370 + (1));
__50370 = G__50399;
continue;
} else {
}
break;
}

var c__48697__auto___50400 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48698__auto__ = (function (){var switch__48472__auto__ = (function (state_48970){
var state_val_48971 = (state_48970[(1)]);
if((state_val_48971 === (7))){
var inst_48966 = (state_48970[(2)]);
var state_48970__$1 = state_48970;
var statearr_48972_50401 = state_48970__$1;
(statearr_48972_50401[(2)] = inst_48966);

(statearr_48972_50401[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48971 === (1))){
var state_48970__$1 = state_48970;
var statearr_48973_50402 = state_48970__$1;
(statearr_48973_50402[(2)] = null);

(statearr_48973_50402[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48971 === (4))){
var inst_48951 = (state_48970[(7)]);
var inst_48951__$1 = (state_48970[(2)]);
var inst_48952 = (inst_48951__$1 == null);
var state_48970__$1 = (function (){var statearr_48974 = state_48970;
(statearr_48974[(7)] = inst_48951__$1);

return statearr_48974;
})();
if(cljs.core.truth_(inst_48952)){
var statearr_48975_50403 = state_48970__$1;
(statearr_48975_50403[(1)] = (5));

} else {
var statearr_48976_50404 = state_48970__$1;
(statearr_48976_50404[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48971 === (6))){
var inst_48951 = (state_48970[(7)]);
var inst_48956 = (state_48970[(8)]);
var inst_48956__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_48957 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_48958 = [inst_48951,inst_48956__$1];
var inst_48959 = (new cljs.core.PersistentVector(null,2,(5),inst_48957,inst_48958,null));
var state_48970__$1 = (function (){var statearr_48977 = state_48970;
(statearr_48977[(8)] = inst_48956__$1);

return statearr_48977;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48970__$1,(8),jobs,inst_48959);
} else {
if((state_val_48971 === (3))){
var inst_48968 = (state_48970[(2)]);
var state_48970__$1 = state_48970;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48970__$1,inst_48968);
} else {
if((state_val_48971 === (2))){
var state_48970__$1 = state_48970;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48970__$1,(4),from);
} else {
if((state_val_48971 === (9))){
var inst_48963 = (state_48970[(2)]);
var state_48970__$1 = (function (){var statearr_48978 = state_48970;
(statearr_48978[(9)] = inst_48963);

return statearr_48978;
})();
var statearr_48979_50405 = state_48970__$1;
(statearr_48979_50405[(2)] = null);

(statearr_48979_50405[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48971 === (5))){
var inst_48954 = cljs.core.async.close_BANG_(jobs);
var state_48970__$1 = state_48970;
var statearr_48980_50406 = state_48970__$1;
(statearr_48980_50406[(2)] = inst_48954);

(statearr_48980_50406[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48971 === (8))){
var inst_48956 = (state_48970[(8)]);
var inst_48961 = (state_48970[(2)]);
var state_48970__$1 = (function (){var statearr_48981 = state_48970;
(statearr_48981[(10)] = inst_48961);

return statearr_48981;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48970__$1,(9),results,inst_48956);
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
var statearr_48982 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_48982[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__48474__auto__);

(statearr_48982[(1)] = (1));

return statearr_48982;
});
var cljs$core$async$pipeline_STAR__$_state_machine__48474__auto____1 = (function (state_48970){
while(true){
var ret_value__48475__auto__ = (function (){try{while(true){
var result__48476__auto__ = switch__48472__auto__(state_48970);
if(cljs.core.keyword_identical_QMARK_(result__48476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48476__auto__;
}
break;
}
}catch (e48983){var ex__48478__auto__ = e48983;
var statearr_48984_50407 = state_48970;
(statearr_48984_50407[(2)] = ex__48478__auto__);


if(cljs.core.seq((state_48970[(4)]))){
var statearr_48985_50411 = state_48970;
(statearr_48985_50411[(1)] = cljs.core.first((state_48970[(4)])));

} else {
throw ex__48478__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50412 = state_48970;
state_48970 = G__50412;
continue;
} else {
return ret_value__48475__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__48474__auto__ = function(state_48970){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__48474__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__48474__auto____1.call(this,state_48970);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__48474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__48474__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__48474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__48474__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__48474__auto__;
})()
})();
var state__48699__auto__ = (function (){var statearr_48986 = f__48698__auto__();
(statearr_48986[(6)] = c__48697__auto___50400);

return statearr_48986;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48699__auto__);
}));


var c__48697__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48698__auto__ = (function (){var switch__48472__auto__ = (function (state_49024){
var state_val_49025 = (state_49024[(1)]);
if((state_val_49025 === (7))){
var inst_49020 = (state_49024[(2)]);
var state_49024__$1 = state_49024;
var statearr_49026_50413 = state_49024__$1;
(statearr_49026_50413[(2)] = inst_49020);

(statearr_49026_50413[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49025 === (20))){
var state_49024__$1 = state_49024;
var statearr_49027_50414 = state_49024__$1;
(statearr_49027_50414[(2)] = null);

(statearr_49027_50414[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49025 === (1))){
var state_49024__$1 = state_49024;
var statearr_49028_50415 = state_49024__$1;
(statearr_49028_50415[(2)] = null);

(statearr_49028_50415[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49025 === (4))){
var inst_48989 = (state_49024[(7)]);
var inst_48989__$1 = (state_49024[(2)]);
var inst_48990 = (inst_48989__$1 == null);
var state_49024__$1 = (function (){var statearr_49029 = state_49024;
(statearr_49029[(7)] = inst_48989__$1);

return statearr_49029;
})();
if(cljs.core.truth_(inst_48990)){
var statearr_49030_50416 = state_49024__$1;
(statearr_49030_50416[(1)] = (5));

} else {
var statearr_49031_50417 = state_49024__$1;
(statearr_49031_50417[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49025 === (15))){
var inst_49002 = (state_49024[(8)]);
var state_49024__$1 = state_49024;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49024__$1,(18),to,inst_49002);
} else {
if((state_val_49025 === (21))){
var inst_49015 = (state_49024[(2)]);
var state_49024__$1 = state_49024;
var statearr_49032_50418 = state_49024__$1;
(statearr_49032_50418[(2)] = inst_49015);

(statearr_49032_50418[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49025 === (13))){
var inst_49017 = (state_49024[(2)]);
var state_49024__$1 = (function (){var statearr_49033 = state_49024;
(statearr_49033[(9)] = inst_49017);

return statearr_49033;
})();
var statearr_49034_50419 = state_49024__$1;
(statearr_49034_50419[(2)] = null);

(statearr_49034_50419[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49025 === (6))){
var inst_48989 = (state_49024[(7)]);
var state_49024__$1 = state_49024;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49024__$1,(11),inst_48989);
} else {
if((state_val_49025 === (17))){
var inst_49010 = (state_49024[(2)]);
var state_49024__$1 = state_49024;
if(cljs.core.truth_(inst_49010)){
var statearr_49035_50420 = state_49024__$1;
(statearr_49035_50420[(1)] = (19));

} else {
var statearr_49036_50421 = state_49024__$1;
(statearr_49036_50421[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49025 === (3))){
var inst_49022 = (state_49024[(2)]);
var state_49024__$1 = state_49024;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49024__$1,inst_49022);
} else {
if((state_val_49025 === (12))){
var inst_48999 = (state_49024[(10)]);
var state_49024__$1 = state_49024;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49024__$1,(14),inst_48999);
} else {
if((state_val_49025 === (2))){
var state_49024__$1 = state_49024;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49024__$1,(4),results);
} else {
if((state_val_49025 === (19))){
var state_49024__$1 = state_49024;
var statearr_49037_50422 = state_49024__$1;
(statearr_49037_50422[(2)] = null);

(statearr_49037_50422[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49025 === (11))){
var inst_48999 = (state_49024[(2)]);
var state_49024__$1 = (function (){var statearr_49038 = state_49024;
(statearr_49038[(10)] = inst_48999);

return statearr_49038;
})();
var statearr_49039_50423 = state_49024__$1;
(statearr_49039_50423[(2)] = null);

(statearr_49039_50423[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49025 === (9))){
var state_49024__$1 = state_49024;
var statearr_49040_50425 = state_49024__$1;
(statearr_49040_50425[(2)] = null);

(statearr_49040_50425[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49025 === (5))){
var state_49024__$1 = state_49024;
if(cljs.core.truth_(close_QMARK_)){
var statearr_49041_50426 = state_49024__$1;
(statearr_49041_50426[(1)] = (8));

} else {
var statearr_49042_50427 = state_49024__$1;
(statearr_49042_50427[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49025 === (14))){
var inst_49002 = (state_49024[(8)]);
var inst_49004 = (state_49024[(11)]);
var inst_49002__$1 = (state_49024[(2)]);
var inst_49003 = (inst_49002__$1 == null);
var inst_49004__$1 = cljs.core.not(inst_49003);
var state_49024__$1 = (function (){var statearr_49043 = state_49024;
(statearr_49043[(8)] = inst_49002__$1);

(statearr_49043[(11)] = inst_49004__$1);

return statearr_49043;
})();
if(inst_49004__$1){
var statearr_49044_50428 = state_49024__$1;
(statearr_49044_50428[(1)] = (15));

} else {
var statearr_49045_50429 = state_49024__$1;
(statearr_49045_50429[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49025 === (16))){
var inst_49004 = (state_49024[(11)]);
var state_49024__$1 = state_49024;
var statearr_49046_50430 = state_49024__$1;
(statearr_49046_50430[(2)] = inst_49004);

(statearr_49046_50430[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49025 === (10))){
var inst_48996 = (state_49024[(2)]);
var state_49024__$1 = state_49024;
var statearr_49047_50431 = state_49024__$1;
(statearr_49047_50431[(2)] = inst_48996);

(statearr_49047_50431[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49025 === (18))){
var inst_49007 = (state_49024[(2)]);
var state_49024__$1 = state_49024;
var statearr_49048_50432 = state_49024__$1;
(statearr_49048_50432[(2)] = inst_49007);

(statearr_49048_50432[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49025 === (8))){
var inst_48993 = cljs.core.async.close_BANG_(to);
var state_49024__$1 = state_49024;
var statearr_49049_50433 = state_49024__$1;
(statearr_49049_50433[(2)] = inst_48993);

(statearr_49049_50433[(1)] = (10));


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
var statearr_49050 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49050[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__48474__auto__);

(statearr_49050[(1)] = (1));

return statearr_49050;
});
var cljs$core$async$pipeline_STAR__$_state_machine__48474__auto____1 = (function (state_49024){
while(true){
var ret_value__48475__auto__ = (function (){try{while(true){
var result__48476__auto__ = switch__48472__auto__(state_49024);
if(cljs.core.keyword_identical_QMARK_(result__48476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48476__auto__;
}
break;
}
}catch (e49051){var ex__48478__auto__ = e49051;
var statearr_49052_50434 = state_49024;
(statearr_49052_50434[(2)] = ex__48478__auto__);


if(cljs.core.seq((state_49024[(4)]))){
var statearr_49053_50435 = state_49024;
(statearr_49053_50435[(1)] = cljs.core.first((state_49024[(4)])));

} else {
throw ex__48478__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50436 = state_49024;
state_49024 = G__50436;
continue;
} else {
return ret_value__48475__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__48474__auto__ = function(state_49024){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__48474__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__48474__auto____1.call(this,state_49024);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__48474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__48474__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__48474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__48474__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__48474__auto__;
})()
})();
var state__48699__auto__ = (function (){var statearr_49054 = f__48698__auto__();
(statearr_49054[(6)] = c__48697__auto__);

return statearr_49054;
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
var G__49056 = arguments.length;
switch (G__49056) {
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
var G__49058 = arguments.length;
switch (G__49058) {
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
var G__49060 = arguments.length;
switch (G__49060) {
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
var c__48697__auto___50440 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48698__auto__ = (function (){var switch__48472__auto__ = (function (state_49086){
var state_val_49087 = (state_49086[(1)]);
if((state_val_49087 === (7))){
var inst_49082 = (state_49086[(2)]);
var state_49086__$1 = state_49086;
var statearr_49088_50441 = state_49086__$1;
(statearr_49088_50441[(2)] = inst_49082);

(statearr_49088_50441[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49087 === (1))){
var state_49086__$1 = state_49086;
var statearr_49089_50442 = state_49086__$1;
(statearr_49089_50442[(2)] = null);

(statearr_49089_50442[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49087 === (4))){
var inst_49063 = (state_49086[(7)]);
var inst_49063__$1 = (state_49086[(2)]);
var inst_49064 = (inst_49063__$1 == null);
var state_49086__$1 = (function (){var statearr_49090 = state_49086;
(statearr_49090[(7)] = inst_49063__$1);

return statearr_49090;
})();
if(cljs.core.truth_(inst_49064)){
var statearr_49091_50443 = state_49086__$1;
(statearr_49091_50443[(1)] = (5));

} else {
var statearr_49092_50444 = state_49086__$1;
(statearr_49092_50444[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49087 === (13))){
var state_49086__$1 = state_49086;
var statearr_49093_50445 = state_49086__$1;
(statearr_49093_50445[(2)] = null);

(statearr_49093_50445[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49087 === (6))){
var inst_49063 = (state_49086[(7)]);
var inst_49069 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_49063) : p.call(null,inst_49063));
var state_49086__$1 = state_49086;
if(cljs.core.truth_(inst_49069)){
var statearr_49094_50446 = state_49086__$1;
(statearr_49094_50446[(1)] = (9));

} else {
var statearr_49095_50447 = state_49086__$1;
(statearr_49095_50447[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49087 === (3))){
var inst_49084 = (state_49086[(2)]);
var state_49086__$1 = state_49086;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49086__$1,inst_49084);
} else {
if((state_val_49087 === (12))){
var state_49086__$1 = state_49086;
var statearr_49096_50448 = state_49086__$1;
(statearr_49096_50448[(2)] = null);

(statearr_49096_50448[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49087 === (2))){
var state_49086__$1 = state_49086;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49086__$1,(4),ch);
} else {
if((state_val_49087 === (11))){
var inst_49063 = (state_49086[(7)]);
var inst_49073 = (state_49086[(2)]);
var state_49086__$1 = state_49086;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49086__$1,(8),inst_49073,inst_49063);
} else {
if((state_val_49087 === (9))){
var state_49086__$1 = state_49086;
var statearr_49097_50450 = state_49086__$1;
(statearr_49097_50450[(2)] = tc);

(statearr_49097_50450[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49087 === (5))){
var inst_49066 = cljs.core.async.close_BANG_(tc);
var inst_49067 = cljs.core.async.close_BANG_(fc);
var state_49086__$1 = (function (){var statearr_49098 = state_49086;
(statearr_49098[(8)] = inst_49066);

return statearr_49098;
})();
var statearr_49099_50452 = state_49086__$1;
(statearr_49099_50452[(2)] = inst_49067);

(statearr_49099_50452[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49087 === (14))){
var inst_49080 = (state_49086[(2)]);
var state_49086__$1 = state_49086;
var statearr_49100_50453 = state_49086__$1;
(statearr_49100_50453[(2)] = inst_49080);

(statearr_49100_50453[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49087 === (10))){
var state_49086__$1 = state_49086;
var statearr_49101_50454 = state_49086__$1;
(statearr_49101_50454[(2)] = fc);

(statearr_49101_50454[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49087 === (8))){
var inst_49075 = (state_49086[(2)]);
var state_49086__$1 = state_49086;
if(cljs.core.truth_(inst_49075)){
var statearr_49102_50455 = state_49086__$1;
(statearr_49102_50455[(1)] = (12));

} else {
var statearr_49103_50456 = state_49086__$1;
(statearr_49103_50456[(1)] = (13));

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
var statearr_49104 = [null,null,null,null,null,null,null,null,null];
(statearr_49104[(0)] = cljs$core$async$state_machine__48474__auto__);

(statearr_49104[(1)] = (1));

return statearr_49104;
});
var cljs$core$async$state_machine__48474__auto____1 = (function (state_49086){
while(true){
var ret_value__48475__auto__ = (function (){try{while(true){
var result__48476__auto__ = switch__48472__auto__(state_49086);
if(cljs.core.keyword_identical_QMARK_(result__48476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48476__auto__;
}
break;
}
}catch (e49105){var ex__48478__auto__ = e49105;
var statearr_49106_50457 = state_49086;
(statearr_49106_50457[(2)] = ex__48478__auto__);


if(cljs.core.seq((state_49086[(4)]))){
var statearr_49107_50458 = state_49086;
(statearr_49107_50458[(1)] = cljs.core.first((state_49086[(4)])));

} else {
throw ex__48478__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50459 = state_49086;
state_49086 = G__50459;
continue;
} else {
return ret_value__48475__auto__;
}
break;
}
});
cljs$core$async$state_machine__48474__auto__ = function(state_49086){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48474__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48474__auto____1.call(this,state_49086);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48474__auto____0;
cljs$core$async$state_machine__48474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48474__auto____1;
return cljs$core$async$state_machine__48474__auto__;
})()
})();
var state__48699__auto__ = (function (){var statearr_49108 = f__48698__auto__();
(statearr_49108[(6)] = c__48697__auto___50440);

return statearr_49108;
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
var f__48698__auto__ = (function (){var switch__48472__auto__ = (function (state_49130){
var state_val_49131 = (state_49130[(1)]);
if((state_val_49131 === (7))){
var inst_49126 = (state_49130[(2)]);
var state_49130__$1 = state_49130;
var statearr_49132_50460 = state_49130__$1;
(statearr_49132_50460[(2)] = inst_49126);

(statearr_49132_50460[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49131 === (1))){
var inst_49109 = init;
var inst_49110 = inst_49109;
var state_49130__$1 = (function (){var statearr_49133 = state_49130;
(statearr_49133[(7)] = inst_49110);

return statearr_49133;
})();
var statearr_49134_50461 = state_49130__$1;
(statearr_49134_50461[(2)] = null);

(statearr_49134_50461[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49131 === (4))){
var inst_49113 = (state_49130[(8)]);
var inst_49113__$1 = (state_49130[(2)]);
var inst_49114 = (inst_49113__$1 == null);
var state_49130__$1 = (function (){var statearr_49135 = state_49130;
(statearr_49135[(8)] = inst_49113__$1);

return statearr_49135;
})();
if(cljs.core.truth_(inst_49114)){
var statearr_49136_50464 = state_49130__$1;
(statearr_49136_50464[(1)] = (5));

} else {
var statearr_49137_50465 = state_49130__$1;
(statearr_49137_50465[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49131 === (6))){
var inst_49117 = (state_49130[(9)]);
var inst_49110 = (state_49130[(7)]);
var inst_49113 = (state_49130[(8)]);
var inst_49117__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_49110,inst_49113) : f.call(null,inst_49110,inst_49113));
var inst_49118 = cljs.core.reduced_QMARK_(inst_49117__$1);
var state_49130__$1 = (function (){var statearr_49138 = state_49130;
(statearr_49138[(9)] = inst_49117__$1);

return statearr_49138;
})();
if(inst_49118){
var statearr_49139_50466 = state_49130__$1;
(statearr_49139_50466[(1)] = (8));

} else {
var statearr_49140_50467 = state_49130__$1;
(statearr_49140_50467[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49131 === (3))){
var inst_49128 = (state_49130[(2)]);
var state_49130__$1 = state_49130;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49130__$1,inst_49128);
} else {
if((state_val_49131 === (2))){
var state_49130__$1 = state_49130;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49130__$1,(4),ch);
} else {
if((state_val_49131 === (9))){
var inst_49117 = (state_49130[(9)]);
var inst_49110 = inst_49117;
var state_49130__$1 = (function (){var statearr_49141 = state_49130;
(statearr_49141[(7)] = inst_49110);

return statearr_49141;
})();
var statearr_49142_50468 = state_49130__$1;
(statearr_49142_50468[(2)] = null);

(statearr_49142_50468[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49131 === (5))){
var inst_49110 = (state_49130[(7)]);
var state_49130__$1 = state_49130;
var statearr_49143_50469 = state_49130__$1;
(statearr_49143_50469[(2)] = inst_49110);

(statearr_49143_50469[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49131 === (10))){
var inst_49124 = (state_49130[(2)]);
var state_49130__$1 = state_49130;
var statearr_49144_50470 = state_49130__$1;
(statearr_49144_50470[(2)] = inst_49124);

(statearr_49144_50470[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49131 === (8))){
var inst_49117 = (state_49130[(9)]);
var inst_49120 = cljs.core.deref(inst_49117);
var state_49130__$1 = state_49130;
var statearr_49145_50471 = state_49130__$1;
(statearr_49145_50471[(2)] = inst_49120);

(statearr_49145_50471[(1)] = (10));


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
var statearr_49146 = [null,null,null,null,null,null,null,null,null,null];
(statearr_49146[(0)] = cljs$core$async$reduce_$_state_machine__48474__auto__);

(statearr_49146[(1)] = (1));

return statearr_49146;
});
var cljs$core$async$reduce_$_state_machine__48474__auto____1 = (function (state_49130){
while(true){
var ret_value__48475__auto__ = (function (){try{while(true){
var result__48476__auto__ = switch__48472__auto__(state_49130);
if(cljs.core.keyword_identical_QMARK_(result__48476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48476__auto__;
}
break;
}
}catch (e49147){var ex__48478__auto__ = e49147;
var statearr_49148_50472 = state_49130;
(statearr_49148_50472[(2)] = ex__48478__auto__);


if(cljs.core.seq((state_49130[(4)]))){
var statearr_49149_50473 = state_49130;
(statearr_49149_50473[(1)] = cljs.core.first((state_49130[(4)])));

} else {
throw ex__48478__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50474 = state_49130;
state_49130 = G__50474;
continue;
} else {
return ret_value__48475__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__48474__auto__ = function(state_49130){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__48474__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__48474__auto____1.call(this,state_49130);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__48474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__48474__auto____0;
cljs$core$async$reduce_$_state_machine__48474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__48474__auto____1;
return cljs$core$async$reduce_$_state_machine__48474__auto__;
})()
})();
var state__48699__auto__ = (function (){var statearr_49150 = f__48698__auto__();
(statearr_49150[(6)] = c__48697__auto__);

return statearr_49150;
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
var f__48698__auto__ = (function (){var switch__48472__auto__ = (function (state_49156){
var state_val_49157 = (state_49156[(1)]);
if((state_val_49157 === (1))){
var inst_49151 = cljs.core.async.reduce(f__$1,init,ch);
var state_49156__$1 = state_49156;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49156__$1,(2),inst_49151);
} else {
if((state_val_49157 === (2))){
var inst_49153 = (state_49156[(2)]);
var inst_49154 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_49153) : f__$1.call(null,inst_49153));
var state_49156__$1 = state_49156;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49156__$1,inst_49154);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__48474__auto__ = null;
var cljs$core$async$transduce_$_state_machine__48474__auto____0 = (function (){
var statearr_49158 = [null,null,null,null,null,null,null];
(statearr_49158[(0)] = cljs$core$async$transduce_$_state_machine__48474__auto__);

(statearr_49158[(1)] = (1));

return statearr_49158;
});
var cljs$core$async$transduce_$_state_machine__48474__auto____1 = (function (state_49156){
while(true){
var ret_value__48475__auto__ = (function (){try{while(true){
var result__48476__auto__ = switch__48472__auto__(state_49156);
if(cljs.core.keyword_identical_QMARK_(result__48476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48476__auto__;
}
break;
}
}catch (e49159){var ex__48478__auto__ = e49159;
var statearr_49160_50475 = state_49156;
(statearr_49160_50475[(2)] = ex__48478__auto__);


if(cljs.core.seq((state_49156[(4)]))){
var statearr_49161_50476 = state_49156;
(statearr_49161_50476[(1)] = cljs.core.first((state_49156[(4)])));

} else {
throw ex__48478__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50477 = state_49156;
state_49156 = G__50477;
continue;
} else {
return ret_value__48475__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__48474__auto__ = function(state_49156){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__48474__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__48474__auto____1.call(this,state_49156);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__48474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__48474__auto____0;
cljs$core$async$transduce_$_state_machine__48474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__48474__auto____1;
return cljs$core$async$transduce_$_state_machine__48474__auto__;
})()
})();
var state__48699__auto__ = (function (){var statearr_49162 = f__48698__auto__();
(statearr_49162[(6)] = c__48697__auto__);

return statearr_49162;
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
var G__49164 = arguments.length;
switch (G__49164) {
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
var f__48698__auto__ = (function (){var switch__48472__auto__ = (function (state_49189){
var state_val_49190 = (state_49189[(1)]);
if((state_val_49190 === (7))){
var inst_49171 = (state_49189[(2)]);
var state_49189__$1 = state_49189;
var statearr_49191_50479 = state_49189__$1;
(statearr_49191_50479[(2)] = inst_49171);

(statearr_49191_50479[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49190 === (1))){
var inst_49165 = cljs.core.seq(coll);
var inst_49166 = inst_49165;
var state_49189__$1 = (function (){var statearr_49192 = state_49189;
(statearr_49192[(7)] = inst_49166);

return statearr_49192;
})();
var statearr_49193_50480 = state_49189__$1;
(statearr_49193_50480[(2)] = null);

(statearr_49193_50480[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49190 === (4))){
var inst_49166 = (state_49189[(7)]);
var inst_49169 = cljs.core.first(inst_49166);
var state_49189__$1 = state_49189;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49189__$1,(7),ch,inst_49169);
} else {
if((state_val_49190 === (13))){
var inst_49183 = (state_49189[(2)]);
var state_49189__$1 = state_49189;
var statearr_49194_50481 = state_49189__$1;
(statearr_49194_50481[(2)] = inst_49183);

(statearr_49194_50481[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49190 === (6))){
var inst_49174 = (state_49189[(2)]);
var state_49189__$1 = state_49189;
if(cljs.core.truth_(inst_49174)){
var statearr_49195_50482 = state_49189__$1;
(statearr_49195_50482[(1)] = (8));

} else {
var statearr_49196_50483 = state_49189__$1;
(statearr_49196_50483[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49190 === (3))){
var inst_49187 = (state_49189[(2)]);
var state_49189__$1 = state_49189;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49189__$1,inst_49187);
} else {
if((state_val_49190 === (12))){
var state_49189__$1 = state_49189;
var statearr_49197_50484 = state_49189__$1;
(statearr_49197_50484[(2)] = null);

(statearr_49197_50484[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49190 === (2))){
var inst_49166 = (state_49189[(7)]);
var state_49189__$1 = state_49189;
if(cljs.core.truth_(inst_49166)){
var statearr_49198_50485 = state_49189__$1;
(statearr_49198_50485[(1)] = (4));

} else {
var statearr_49199_50486 = state_49189__$1;
(statearr_49199_50486[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49190 === (11))){
var inst_49180 = cljs.core.async.close_BANG_(ch);
var state_49189__$1 = state_49189;
var statearr_49200_50487 = state_49189__$1;
(statearr_49200_50487[(2)] = inst_49180);

(statearr_49200_50487[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49190 === (9))){
var state_49189__$1 = state_49189;
if(cljs.core.truth_(close_QMARK_)){
var statearr_49201_50489 = state_49189__$1;
(statearr_49201_50489[(1)] = (11));

} else {
var statearr_49202_50490 = state_49189__$1;
(statearr_49202_50490[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49190 === (5))){
var inst_49166 = (state_49189[(7)]);
var state_49189__$1 = state_49189;
var statearr_49203_50491 = state_49189__$1;
(statearr_49203_50491[(2)] = inst_49166);

(statearr_49203_50491[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49190 === (10))){
var inst_49185 = (state_49189[(2)]);
var state_49189__$1 = state_49189;
var statearr_49204_50492 = state_49189__$1;
(statearr_49204_50492[(2)] = inst_49185);

(statearr_49204_50492[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49190 === (8))){
var inst_49166 = (state_49189[(7)]);
var inst_49176 = cljs.core.next(inst_49166);
var inst_49166__$1 = inst_49176;
var state_49189__$1 = (function (){var statearr_49205 = state_49189;
(statearr_49205[(7)] = inst_49166__$1);

return statearr_49205;
})();
var statearr_49206_50493 = state_49189__$1;
(statearr_49206_50493[(2)] = null);

(statearr_49206_50493[(1)] = (2));


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
var statearr_49207 = [null,null,null,null,null,null,null,null];
(statearr_49207[(0)] = cljs$core$async$state_machine__48474__auto__);

(statearr_49207[(1)] = (1));

return statearr_49207;
});
var cljs$core$async$state_machine__48474__auto____1 = (function (state_49189){
while(true){
var ret_value__48475__auto__ = (function (){try{while(true){
var result__48476__auto__ = switch__48472__auto__(state_49189);
if(cljs.core.keyword_identical_QMARK_(result__48476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48476__auto__;
}
break;
}
}catch (e49208){var ex__48478__auto__ = e49208;
var statearr_49209_50494 = state_49189;
(statearr_49209_50494[(2)] = ex__48478__auto__);


if(cljs.core.seq((state_49189[(4)]))){
var statearr_49210_50495 = state_49189;
(statearr_49210_50495[(1)] = cljs.core.first((state_49189[(4)])));

} else {
throw ex__48478__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50496 = state_49189;
state_49189 = G__50496;
continue;
} else {
return ret_value__48475__auto__;
}
break;
}
});
cljs$core$async$state_machine__48474__auto__ = function(state_49189){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48474__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48474__auto____1.call(this,state_49189);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48474__auto____0;
cljs$core$async$state_machine__48474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48474__auto____1;
return cljs$core$async$state_machine__48474__auto__;
})()
})();
var state__48699__auto__ = (function (){var statearr_49211 = f__48698__auto__();
(statearr_49211[(6)] = c__48697__auto__);

return statearr_49211;
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
var G__49213 = arguments.length;
switch (G__49213) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_50498 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_50498(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_50499 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_50499(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_50500 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_50500(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_50501 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_50501(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async49214 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49214 = (function (ch,cs,meta49215){
this.ch = ch;
this.cs = cs;
this.meta49215 = meta49215;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async49214.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49216,meta49215__$1){
var self__ = this;
var _49216__$1 = this;
return (new cljs.core.async.t_cljs$core$async49214(self__.ch,self__.cs,meta49215__$1));
}));

(cljs.core.async.t_cljs$core$async49214.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49216){
var self__ = this;
var _49216__$1 = this;
return self__.meta49215;
}));

(cljs.core.async.t_cljs$core$async49214.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49214.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async49214.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49214.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async49214.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async49214.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async49214.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta49215","meta49215",-964865862,null)], null);
}));

(cljs.core.async.t_cljs$core$async49214.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async49214.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49214");

(cljs.core.async.t_cljs$core$async49214.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async49214");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49214.
 */
cljs.core.async.__GT_t_cljs$core$async49214 = (function cljs$core$async$mult_$___GT_t_cljs$core$async49214(ch__$1,cs__$1,meta49215){
return (new cljs.core.async.t_cljs$core$async49214(ch__$1,cs__$1,meta49215));
});

}

return (new cljs.core.async.t_cljs$core$async49214(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__48697__auto___50506 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48698__auto__ = (function (){var switch__48472__auto__ = (function (state_49349){
var state_val_49350 = (state_49349[(1)]);
if((state_val_49350 === (7))){
var inst_49345 = (state_49349[(2)]);
var state_49349__$1 = state_49349;
var statearr_49351_50507 = state_49349__$1;
(statearr_49351_50507[(2)] = inst_49345);

(statearr_49351_50507[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49350 === (20))){
var inst_49250 = (state_49349[(7)]);
var inst_49262 = cljs.core.first(inst_49250);
var inst_49263 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_49262,(0),null);
var inst_49264 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_49262,(1),null);
var state_49349__$1 = (function (){var statearr_49352 = state_49349;
(statearr_49352[(8)] = inst_49263);

return statearr_49352;
})();
if(cljs.core.truth_(inst_49264)){
var statearr_49353_50508 = state_49349__$1;
(statearr_49353_50508[(1)] = (22));

} else {
var statearr_49354_50509 = state_49349__$1;
(statearr_49354_50509[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49350 === (27))){
var inst_49292 = (state_49349[(9)]);
var inst_49219 = (state_49349[(10)]);
var inst_49294 = (state_49349[(11)]);
var inst_49299 = (state_49349[(12)]);
var inst_49299__$1 = cljs.core._nth(inst_49292,inst_49294);
var inst_49300 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_49299__$1,inst_49219,done);
var state_49349__$1 = (function (){var statearr_49355 = state_49349;
(statearr_49355[(12)] = inst_49299__$1);

return statearr_49355;
})();
if(cljs.core.truth_(inst_49300)){
var statearr_49356_50510 = state_49349__$1;
(statearr_49356_50510[(1)] = (30));

} else {
var statearr_49357_50511 = state_49349__$1;
(statearr_49357_50511[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49350 === (1))){
var state_49349__$1 = state_49349;
var statearr_49358_50512 = state_49349__$1;
(statearr_49358_50512[(2)] = null);

(statearr_49358_50512[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49350 === (24))){
var inst_49250 = (state_49349[(7)]);
var inst_49269 = (state_49349[(2)]);
var inst_49270 = cljs.core.next(inst_49250);
var inst_49228 = inst_49270;
var inst_49229 = null;
var inst_49230 = (0);
var inst_49231 = (0);
var state_49349__$1 = (function (){var statearr_49359 = state_49349;
(statearr_49359[(13)] = inst_49269);

(statearr_49359[(14)] = inst_49231);

(statearr_49359[(15)] = inst_49228);

(statearr_49359[(16)] = inst_49229);

(statearr_49359[(17)] = inst_49230);

return statearr_49359;
})();
var statearr_49360_50513 = state_49349__$1;
(statearr_49360_50513[(2)] = null);

(statearr_49360_50513[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49350 === (39))){
var state_49349__$1 = state_49349;
var statearr_49364_50514 = state_49349__$1;
(statearr_49364_50514[(2)] = null);

(statearr_49364_50514[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49350 === (4))){
var inst_49219 = (state_49349[(10)]);
var inst_49219__$1 = (state_49349[(2)]);
var inst_49220 = (inst_49219__$1 == null);
var state_49349__$1 = (function (){var statearr_49365 = state_49349;
(statearr_49365[(10)] = inst_49219__$1);

return statearr_49365;
})();
if(cljs.core.truth_(inst_49220)){
var statearr_49367_50515 = state_49349__$1;
(statearr_49367_50515[(1)] = (5));

} else {
var statearr_49371_50516 = state_49349__$1;
(statearr_49371_50516[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49350 === (15))){
var inst_49231 = (state_49349[(14)]);
var inst_49228 = (state_49349[(15)]);
var inst_49229 = (state_49349[(16)]);
var inst_49230 = (state_49349[(17)]);
var inst_49246 = (state_49349[(2)]);
var inst_49247 = (inst_49231 + (1));
var tmp49361 = inst_49228;
var tmp49362 = inst_49229;
var tmp49363 = inst_49230;
var inst_49228__$1 = tmp49361;
var inst_49229__$1 = tmp49362;
var inst_49230__$1 = tmp49363;
var inst_49231__$1 = inst_49247;
var state_49349__$1 = (function (){var statearr_49372 = state_49349;
(statearr_49372[(14)] = inst_49231__$1);

(statearr_49372[(15)] = inst_49228__$1);

(statearr_49372[(16)] = inst_49229__$1);

(statearr_49372[(18)] = inst_49246);

(statearr_49372[(17)] = inst_49230__$1);

return statearr_49372;
})();
var statearr_49373_50517 = state_49349__$1;
(statearr_49373_50517[(2)] = null);

(statearr_49373_50517[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49350 === (21))){
var inst_49273 = (state_49349[(2)]);
var state_49349__$1 = state_49349;
var statearr_49380_50518 = state_49349__$1;
(statearr_49380_50518[(2)] = inst_49273);

(statearr_49380_50518[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49350 === (31))){
var inst_49299 = (state_49349[(12)]);
var inst_49303 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_49299);
var state_49349__$1 = state_49349;
var statearr_49381_50519 = state_49349__$1;
(statearr_49381_50519[(2)] = inst_49303);

(statearr_49381_50519[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49350 === (32))){
var inst_49291 = (state_49349[(19)]);
var inst_49292 = (state_49349[(9)]);
var inst_49294 = (state_49349[(11)]);
var inst_49293 = (state_49349[(20)]);
var inst_49305 = (state_49349[(2)]);
var inst_49306 = (inst_49294 + (1));
var tmp49377 = inst_49291;
var tmp49378 = inst_49292;
var tmp49379 = inst_49293;
var inst_49291__$1 = tmp49377;
var inst_49292__$1 = tmp49378;
var inst_49293__$1 = tmp49379;
var inst_49294__$1 = inst_49306;
var state_49349__$1 = (function (){var statearr_49382 = state_49349;
(statearr_49382[(19)] = inst_49291__$1);

(statearr_49382[(9)] = inst_49292__$1);

(statearr_49382[(21)] = inst_49305);

(statearr_49382[(11)] = inst_49294__$1);

(statearr_49382[(20)] = inst_49293__$1);

return statearr_49382;
})();
var statearr_49383_50521 = state_49349__$1;
(statearr_49383_50521[(2)] = null);

(statearr_49383_50521[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49350 === (40))){
var inst_49318 = (state_49349[(22)]);
var inst_49322 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_49318);
var state_49349__$1 = state_49349;
var statearr_49384_50523 = state_49349__$1;
(statearr_49384_50523[(2)] = inst_49322);

(statearr_49384_50523[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49350 === (33))){
var inst_49309 = (state_49349[(23)]);
var inst_49311 = cljs.core.chunked_seq_QMARK_(inst_49309);
var state_49349__$1 = state_49349;
if(inst_49311){
var statearr_49386_50524 = state_49349__$1;
(statearr_49386_50524[(1)] = (36));

} else {
var statearr_49387_50525 = state_49349__$1;
(statearr_49387_50525[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49350 === (13))){
var inst_49240 = (state_49349[(24)]);
var inst_49243 = cljs.core.async.close_BANG_(inst_49240);
var state_49349__$1 = state_49349;
var statearr_49389_50526 = state_49349__$1;
(statearr_49389_50526[(2)] = inst_49243);

(statearr_49389_50526[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49350 === (22))){
var inst_49263 = (state_49349[(8)]);
var inst_49266 = cljs.core.async.close_BANG_(inst_49263);
var state_49349__$1 = state_49349;
var statearr_49390_50527 = state_49349__$1;
(statearr_49390_50527[(2)] = inst_49266);

(statearr_49390_50527[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49350 === (36))){
var inst_49309 = (state_49349[(23)]);
var inst_49313 = cljs.core.chunk_first(inst_49309);
var inst_49314 = cljs.core.chunk_rest(inst_49309);
var inst_49315 = cljs.core.count(inst_49313);
var inst_49291 = inst_49314;
var inst_49292 = inst_49313;
var inst_49293 = inst_49315;
var inst_49294 = (0);
var state_49349__$1 = (function (){var statearr_49391 = state_49349;
(statearr_49391[(19)] = inst_49291);

(statearr_49391[(9)] = inst_49292);

(statearr_49391[(11)] = inst_49294);

(statearr_49391[(20)] = inst_49293);

return statearr_49391;
})();
var statearr_49392_50532 = state_49349__$1;
(statearr_49392_50532[(2)] = null);

(statearr_49392_50532[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49350 === (41))){
var inst_49309 = (state_49349[(23)]);
var inst_49324 = (state_49349[(2)]);
var inst_49325 = cljs.core.next(inst_49309);
var inst_49291 = inst_49325;
var inst_49292 = null;
var inst_49293 = (0);
var inst_49294 = (0);
var state_49349__$1 = (function (){var statearr_49393 = state_49349;
(statearr_49393[(19)] = inst_49291);

(statearr_49393[(25)] = inst_49324);

(statearr_49393[(9)] = inst_49292);

(statearr_49393[(11)] = inst_49294);

(statearr_49393[(20)] = inst_49293);

return statearr_49393;
})();
var statearr_49394_50539 = state_49349__$1;
(statearr_49394_50539[(2)] = null);

(statearr_49394_50539[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49350 === (43))){
var state_49349__$1 = state_49349;
var statearr_49395_50543 = state_49349__$1;
(statearr_49395_50543[(2)] = null);

(statearr_49395_50543[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49350 === (29))){
var inst_49333 = (state_49349[(2)]);
var state_49349__$1 = state_49349;
var statearr_49396_50544 = state_49349__$1;
(statearr_49396_50544[(2)] = inst_49333);

(statearr_49396_50544[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49350 === (44))){
var inst_49342 = (state_49349[(2)]);
var state_49349__$1 = (function (){var statearr_49397 = state_49349;
(statearr_49397[(26)] = inst_49342);

return statearr_49397;
})();
var statearr_49398_50545 = state_49349__$1;
(statearr_49398_50545[(2)] = null);

(statearr_49398_50545[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49350 === (6))){
var inst_49283 = (state_49349[(27)]);
var inst_49282 = cljs.core.deref(cs);
var inst_49283__$1 = cljs.core.keys(inst_49282);
var inst_49284 = cljs.core.count(inst_49283__$1);
var inst_49285 = cljs.core.reset_BANG_(dctr,inst_49284);
var inst_49290 = cljs.core.seq(inst_49283__$1);
var inst_49291 = inst_49290;
var inst_49292 = null;
var inst_49293 = (0);
var inst_49294 = (0);
var state_49349__$1 = (function (){var statearr_49399 = state_49349;
(statearr_49399[(19)] = inst_49291);

(statearr_49399[(9)] = inst_49292);

(statearr_49399[(28)] = inst_49285);

(statearr_49399[(11)] = inst_49294);

(statearr_49399[(20)] = inst_49293);

(statearr_49399[(27)] = inst_49283__$1);

return statearr_49399;
})();
var statearr_49400_50559 = state_49349__$1;
(statearr_49400_50559[(2)] = null);

(statearr_49400_50559[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49350 === (28))){
var inst_49291 = (state_49349[(19)]);
var inst_49309 = (state_49349[(23)]);
var inst_49309__$1 = cljs.core.seq(inst_49291);
var state_49349__$1 = (function (){var statearr_49401 = state_49349;
(statearr_49401[(23)] = inst_49309__$1);

return statearr_49401;
})();
if(inst_49309__$1){
var statearr_49402_50560 = state_49349__$1;
(statearr_49402_50560[(1)] = (33));

} else {
var statearr_49403_50561 = state_49349__$1;
(statearr_49403_50561[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49350 === (25))){
var inst_49294 = (state_49349[(11)]);
var inst_49293 = (state_49349[(20)]);
var inst_49296 = (inst_49294 < inst_49293);
var inst_49297 = inst_49296;
var state_49349__$1 = state_49349;
if(cljs.core.truth_(inst_49297)){
var statearr_49404_50565 = state_49349__$1;
(statearr_49404_50565[(1)] = (27));

} else {
var statearr_49405_50566 = state_49349__$1;
(statearr_49405_50566[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49350 === (34))){
var state_49349__$1 = state_49349;
var statearr_49406_50567 = state_49349__$1;
(statearr_49406_50567[(2)] = null);

(statearr_49406_50567[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49350 === (17))){
var state_49349__$1 = state_49349;
var statearr_49407_50568 = state_49349__$1;
(statearr_49407_50568[(2)] = null);

(statearr_49407_50568[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49350 === (3))){
var inst_49347 = (state_49349[(2)]);
var state_49349__$1 = state_49349;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49349__$1,inst_49347);
} else {
if((state_val_49350 === (12))){
var inst_49278 = (state_49349[(2)]);
var state_49349__$1 = state_49349;
var statearr_49408_50569 = state_49349__$1;
(statearr_49408_50569[(2)] = inst_49278);

(statearr_49408_50569[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49350 === (2))){
var state_49349__$1 = state_49349;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49349__$1,(4),ch);
} else {
if((state_val_49350 === (23))){
var state_49349__$1 = state_49349;
var statearr_49409_50573 = state_49349__$1;
(statearr_49409_50573[(2)] = null);

(statearr_49409_50573[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49350 === (35))){
var inst_49331 = (state_49349[(2)]);
var state_49349__$1 = state_49349;
var statearr_49410_50574 = state_49349__$1;
(statearr_49410_50574[(2)] = inst_49331);

(statearr_49410_50574[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49350 === (19))){
var inst_49250 = (state_49349[(7)]);
var inst_49254 = cljs.core.chunk_first(inst_49250);
var inst_49255 = cljs.core.chunk_rest(inst_49250);
var inst_49256 = cljs.core.count(inst_49254);
var inst_49228 = inst_49255;
var inst_49229 = inst_49254;
var inst_49230 = inst_49256;
var inst_49231 = (0);
var state_49349__$1 = (function (){var statearr_49411 = state_49349;
(statearr_49411[(14)] = inst_49231);

(statearr_49411[(15)] = inst_49228);

(statearr_49411[(16)] = inst_49229);

(statearr_49411[(17)] = inst_49230);

return statearr_49411;
})();
var statearr_49412_50575 = state_49349__$1;
(statearr_49412_50575[(2)] = null);

(statearr_49412_50575[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49350 === (11))){
var inst_49228 = (state_49349[(15)]);
var inst_49250 = (state_49349[(7)]);
var inst_49250__$1 = cljs.core.seq(inst_49228);
var state_49349__$1 = (function (){var statearr_49414 = state_49349;
(statearr_49414[(7)] = inst_49250__$1);

return statearr_49414;
})();
if(inst_49250__$1){
var statearr_49416_50577 = state_49349__$1;
(statearr_49416_50577[(1)] = (16));

} else {
var statearr_49417_50578 = state_49349__$1;
(statearr_49417_50578[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49350 === (9))){
var inst_49280 = (state_49349[(2)]);
var state_49349__$1 = state_49349;
var statearr_49418_50579 = state_49349__$1;
(statearr_49418_50579[(2)] = inst_49280);

(statearr_49418_50579[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49350 === (5))){
var inst_49226 = cljs.core.deref(cs);
var inst_49227 = cljs.core.seq(inst_49226);
var inst_49228 = inst_49227;
var inst_49229 = null;
var inst_49230 = (0);
var inst_49231 = (0);
var state_49349__$1 = (function (){var statearr_49420 = state_49349;
(statearr_49420[(14)] = inst_49231);

(statearr_49420[(15)] = inst_49228);

(statearr_49420[(16)] = inst_49229);

(statearr_49420[(17)] = inst_49230);

return statearr_49420;
})();
var statearr_49421_50580 = state_49349__$1;
(statearr_49421_50580[(2)] = null);

(statearr_49421_50580[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49350 === (14))){
var state_49349__$1 = state_49349;
var statearr_49422_50581 = state_49349__$1;
(statearr_49422_50581[(2)] = null);

(statearr_49422_50581[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49350 === (45))){
var inst_49339 = (state_49349[(2)]);
var state_49349__$1 = state_49349;
var statearr_49423_50582 = state_49349__$1;
(statearr_49423_50582[(2)] = inst_49339);

(statearr_49423_50582[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49350 === (26))){
var inst_49283 = (state_49349[(27)]);
var inst_49335 = (state_49349[(2)]);
var inst_49336 = cljs.core.seq(inst_49283);
var state_49349__$1 = (function (){var statearr_49424 = state_49349;
(statearr_49424[(29)] = inst_49335);

return statearr_49424;
})();
if(inst_49336){
var statearr_49425_50583 = state_49349__$1;
(statearr_49425_50583[(1)] = (42));

} else {
var statearr_49426_50584 = state_49349__$1;
(statearr_49426_50584[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49350 === (16))){
var inst_49250 = (state_49349[(7)]);
var inst_49252 = cljs.core.chunked_seq_QMARK_(inst_49250);
var state_49349__$1 = state_49349;
if(inst_49252){
var statearr_49427_50585 = state_49349__$1;
(statearr_49427_50585[(1)] = (19));

} else {
var statearr_49428_50586 = state_49349__$1;
(statearr_49428_50586[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49350 === (38))){
var inst_49328 = (state_49349[(2)]);
var state_49349__$1 = state_49349;
var statearr_49430_50587 = state_49349__$1;
(statearr_49430_50587[(2)] = inst_49328);

(statearr_49430_50587[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49350 === (30))){
var state_49349__$1 = state_49349;
var statearr_49431_50588 = state_49349__$1;
(statearr_49431_50588[(2)] = null);

(statearr_49431_50588[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49350 === (10))){
var inst_49231 = (state_49349[(14)]);
var inst_49229 = (state_49349[(16)]);
var inst_49239 = cljs.core._nth(inst_49229,inst_49231);
var inst_49240 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_49239,(0),null);
var inst_49241 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_49239,(1),null);
var state_49349__$1 = (function (){var statearr_49434 = state_49349;
(statearr_49434[(24)] = inst_49240);

return statearr_49434;
})();
if(cljs.core.truth_(inst_49241)){
var statearr_49435_50589 = state_49349__$1;
(statearr_49435_50589[(1)] = (13));

} else {
var statearr_49436_50590 = state_49349__$1;
(statearr_49436_50590[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49350 === (18))){
var inst_49276 = (state_49349[(2)]);
var state_49349__$1 = state_49349;
var statearr_49437_50591 = state_49349__$1;
(statearr_49437_50591[(2)] = inst_49276);

(statearr_49437_50591[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49350 === (42))){
var state_49349__$1 = state_49349;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49349__$1,(45),dchan);
} else {
if((state_val_49350 === (37))){
var inst_49309 = (state_49349[(23)]);
var inst_49318 = (state_49349[(22)]);
var inst_49219 = (state_49349[(10)]);
var inst_49318__$1 = cljs.core.first(inst_49309);
var inst_49319 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_49318__$1,inst_49219,done);
var state_49349__$1 = (function (){var statearr_49438 = state_49349;
(statearr_49438[(22)] = inst_49318__$1);

return statearr_49438;
})();
if(cljs.core.truth_(inst_49319)){
var statearr_49439_50600 = state_49349__$1;
(statearr_49439_50600[(1)] = (39));

} else {
var statearr_49440_50601 = state_49349__$1;
(statearr_49440_50601[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49350 === (8))){
var inst_49231 = (state_49349[(14)]);
var inst_49230 = (state_49349[(17)]);
var inst_49233 = (inst_49231 < inst_49230);
var inst_49234 = inst_49233;
var state_49349__$1 = state_49349;
if(cljs.core.truth_(inst_49234)){
var statearr_49441_50602 = state_49349__$1;
(statearr_49441_50602[(1)] = (10));

} else {
var statearr_49442_50603 = state_49349__$1;
(statearr_49442_50603[(1)] = (11));

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
var statearr_49444 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49444[(0)] = cljs$core$async$mult_$_state_machine__48474__auto__);

(statearr_49444[(1)] = (1));

return statearr_49444;
});
var cljs$core$async$mult_$_state_machine__48474__auto____1 = (function (state_49349){
while(true){
var ret_value__48475__auto__ = (function (){try{while(true){
var result__48476__auto__ = switch__48472__auto__(state_49349);
if(cljs.core.keyword_identical_QMARK_(result__48476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48476__auto__;
}
break;
}
}catch (e49445){var ex__48478__auto__ = e49445;
var statearr_49446_50604 = state_49349;
(statearr_49446_50604[(2)] = ex__48478__auto__);


if(cljs.core.seq((state_49349[(4)]))){
var statearr_49447_50605 = state_49349;
(statearr_49447_50605[(1)] = cljs.core.first((state_49349[(4)])));

} else {
throw ex__48478__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50606 = state_49349;
state_49349 = G__50606;
continue;
} else {
return ret_value__48475__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__48474__auto__ = function(state_49349){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__48474__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__48474__auto____1.call(this,state_49349);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__48474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__48474__auto____0;
cljs$core$async$mult_$_state_machine__48474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__48474__auto____1;
return cljs$core$async$mult_$_state_machine__48474__auto__;
})()
})();
var state__48699__auto__ = (function (){var statearr_49449 = f__48698__auto__();
(statearr_49449[(6)] = c__48697__auto___50506);

return statearr_49449;
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
var G__49452 = arguments.length;
switch (G__49452) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_50612 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_50612(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_50630 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_50630(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_50631 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_50631(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_50638 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_50638(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_50639 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_50639(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___50640 = arguments.length;
var i__4830__auto___50641 = (0);
while(true){
if((i__4830__auto___50641 < len__4829__auto___50640)){
args__4835__auto__.push((arguments[i__4830__auto___50641]));

var G__50642 = (i__4830__auto___50641 + (1));
i__4830__auto___50641 = G__50642;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((3) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4836__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__49458){
var map__49459 = p__49458;
var map__49459__$1 = cljs.core.__destructure_map(map__49459);
var opts = map__49459__$1;
var statearr_49460_50643 = state;
(statearr_49460_50643[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_49461_50644 = state;
(statearr_49461_50644[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_49462_50645 = state;
(statearr_49462_50645[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq49454){
var G__49455 = cljs.core.first(seq49454);
var seq49454__$1 = cljs.core.next(seq49454);
var G__49456 = cljs.core.first(seq49454__$1);
var seq49454__$2 = cljs.core.next(seq49454__$1);
var G__49457 = cljs.core.first(seq49454__$2);
var seq49454__$3 = cljs.core.next(seq49454__$2);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49455,G__49456,G__49457,seq49454__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async49463 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49463 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta49464){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta49464 = meta49464;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async49463.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49465,meta49464__$1){
var self__ = this;
var _49465__$1 = this;
return (new cljs.core.async.t_cljs$core$async49463(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta49464__$1));
}));

(cljs.core.async.t_cljs$core$async49463.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49465){
var self__ = this;
var _49465__$1 = this;
return self__.meta49464;
}));

(cljs.core.async.t_cljs$core$async49463.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49463.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async49463.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49463.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async49463.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async49463.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async49463.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async49463.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async49463.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta49464","meta49464",-1830621300,null)], null);
}));

(cljs.core.async.t_cljs$core$async49463.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async49463.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49463");

(cljs.core.async.t_cljs$core$async49463.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async49463");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49463.
 */
cljs.core.async.__GT_t_cljs$core$async49463 = (function cljs$core$async$mix_$___GT_t_cljs$core$async49463(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta49464){
return (new cljs.core.async.t_cljs$core$async49463(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta49464));
});

}

return (new cljs.core.async.t_cljs$core$async49463(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__48697__auto___50652 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48698__auto__ = (function (){var switch__48472__auto__ = (function (state_49590){
var state_val_49591 = (state_49590[(1)]);
if((state_val_49591 === (7))){
var inst_49550 = (state_49590[(2)]);
var state_49590__$1 = state_49590;
if(cljs.core.truth_(inst_49550)){
var statearr_49592_50653 = state_49590__$1;
(statearr_49592_50653[(1)] = (8));

} else {
var statearr_49597_50654 = state_49590__$1;
(statearr_49597_50654[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49591 === (20))){
var inst_49543 = (state_49590[(7)]);
var state_49590__$1 = state_49590;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49590__$1,(23),out,inst_49543);
} else {
if((state_val_49591 === (1))){
var inst_49526 = calc_state();
var inst_49527 = cljs.core.__destructure_map(inst_49526);
var inst_49528 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_49527,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_49529 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_49527,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_49530 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_49527,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_49531 = inst_49526;
var state_49590__$1 = (function (){var statearr_49599 = state_49590;
(statearr_49599[(8)] = inst_49530);

(statearr_49599[(9)] = inst_49531);

(statearr_49599[(10)] = inst_49529);

(statearr_49599[(11)] = inst_49528);

return statearr_49599;
})();
var statearr_49600_50661 = state_49590__$1;
(statearr_49600_50661[(2)] = null);

(statearr_49600_50661[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49591 === (24))){
var inst_49534 = (state_49590[(12)]);
var inst_49531 = inst_49534;
var state_49590__$1 = (function (){var statearr_49602 = state_49590;
(statearr_49602[(9)] = inst_49531);

return statearr_49602;
})();
var statearr_49603_50662 = state_49590__$1;
(statearr_49603_50662[(2)] = null);

(statearr_49603_50662[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49591 === (4))){
var inst_49545 = (state_49590[(13)]);
var inst_49543 = (state_49590[(7)]);
var inst_49542 = (state_49590[(2)]);
var inst_49543__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_49542,(0),null);
var inst_49544 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_49542,(1),null);
var inst_49545__$1 = (inst_49543__$1 == null);
var state_49590__$1 = (function (){var statearr_49605 = state_49590;
(statearr_49605[(13)] = inst_49545__$1);

(statearr_49605[(14)] = inst_49544);

(statearr_49605[(7)] = inst_49543__$1);

return statearr_49605;
})();
if(cljs.core.truth_(inst_49545__$1)){
var statearr_49606_50663 = state_49590__$1;
(statearr_49606_50663[(1)] = (5));

} else {
var statearr_49607_50664 = state_49590__$1;
(statearr_49607_50664[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49591 === (15))){
var inst_49564 = (state_49590[(15)]);
var inst_49535 = (state_49590[(16)]);
var inst_49564__$1 = cljs.core.empty_QMARK_(inst_49535);
var state_49590__$1 = (function (){var statearr_49608 = state_49590;
(statearr_49608[(15)] = inst_49564__$1);

return statearr_49608;
})();
if(inst_49564__$1){
var statearr_49609_50665 = state_49590__$1;
(statearr_49609_50665[(1)] = (17));

} else {
var statearr_49610_50666 = state_49590__$1;
(statearr_49610_50666[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49591 === (21))){
var inst_49534 = (state_49590[(12)]);
var inst_49531 = inst_49534;
var state_49590__$1 = (function (){var statearr_49615 = state_49590;
(statearr_49615[(9)] = inst_49531);

return statearr_49615;
})();
var statearr_49616_50667 = state_49590__$1;
(statearr_49616_50667[(2)] = null);

(statearr_49616_50667[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49591 === (13))){
var inst_49557 = (state_49590[(2)]);
var inst_49558 = calc_state();
var inst_49531 = inst_49558;
var state_49590__$1 = (function (){var statearr_49617 = state_49590;
(statearr_49617[(9)] = inst_49531);

(statearr_49617[(17)] = inst_49557);

return statearr_49617;
})();
var statearr_49618_50668 = state_49590__$1;
(statearr_49618_50668[(2)] = null);

(statearr_49618_50668[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49591 === (22))){
var inst_49584 = (state_49590[(2)]);
var state_49590__$1 = state_49590;
var statearr_49619_50669 = state_49590__$1;
(statearr_49619_50669[(2)] = inst_49584);

(statearr_49619_50669[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49591 === (6))){
var inst_49544 = (state_49590[(14)]);
var inst_49548 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_49544,change);
var state_49590__$1 = state_49590;
var statearr_49620_50670 = state_49590__$1;
(statearr_49620_50670[(2)] = inst_49548);

(statearr_49620_50670[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49591 === (25))){
var state_49590__$1 = state_49590;
var statearr_49621_50671 = state_49590__$1;
(statearr_49621_50671[(2)] = null);

(statearr_49621_50671[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49591 === (17))){
var inst_49544 = (state_49590[(14)]);
var inst_49536 = (state_49590[(18)]);
var inst_49566 = (inst_49536.cljs$core$IFn$_invoke$arity$1 ? inst_49536.cljs$core$IFn$_invoke$arity$1(inst_49544) : inst_49536.call(null,inst_49544));
var inst_49567 = cljs.core.not(inst_49566);
var state_49590__$1 = state_49590;
var statearr_49622_50672 = state_49590__$1;
(statearr_49622_50672[(2)] = inst_49567);

(statearr_49622_50672[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49591 === (3))){
var inst_49588 = (state_49590[(2)]);
var state_49590__$1 = state_49590;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49590__$1,inst_49588);
} else {
if((state_val_49591 === (12))){
var state_49590__$1 = state_49590;
var statearr_49623_50673 = state_49590__$1;
(statearr_49623_50673[(2)] = null);

(statearr_49623_50673[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49591 === (2))){
var inst_49534 = (state_49590[(12)]);
var inst_49531 = (state_49590[(9)]);
var inst_49534__$1 = cljs.core.__destructure_map(inst_49531);
var inst_49535 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_49534__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_49536 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_49534__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_49537 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_49534__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_49590__$1 = (function (){var statearr_49624 = state_49590;
(statearr_49624[(12)] = inst_49534__$1);

(statearr_49624[(16)] = inst_49535);

(statearr_49624[(18)] = inst_49536);

return statearr_49624;
})();
return cljs.core.async.ioc_alts_BANG_(state_49590__$1,(4),inst_49537);
} else {
if((state_val_49591 === (23))){
var inst_49575 = (state_49590[(2)]);
var state_49590__$1 = state_49590;
if(cljs.core.truth_(inst_49575)){
var statearr_49625_50674 = state_49590__$1;
(statearr_49625_50674[(1)] = (24));

} else {
var statearr_49626_50675 = state_49590__$1;
(statearr_49626_50675[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49591 === (19))){
var inst_49570 = (state_49590[(2)]);
var state_49590__$1 = state_49590;
var statearr_49627_50676 = state_49590__$1;
(statearr_49627_50676[(2)] = inst_49570);

(statearr_49627_50676[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49591 === (11))){
var inst_49544 = (state_49590[(14)]);
var inst_49554 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_49544);
var state_49590__$1 = state_49590;
var statearr_49628_50677 = state_49590__$1;
(statearr_49628_50677[(2)] = inst_49554);

(statearr_49628_50677[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49591 === (9))){
var inst_49561 = (state_49590[(19)]);
var inst_49544 = (state_49590[(14)]);
var inst_49535 = (state_49590[(16)]);
var inst_49561__$1 = (inst_49535.cljs$core$IFn$_invoke$arity$1 ? inst_49535.cljs$core$IFn$_invoke$arity$1(inst_49544) : inst_49535.call(null,inst_49544));
var state_49590__$1 = (function (){var statearr_49629 = state_49590;
(statearr_49629[(19)] = inst_49561__$1);

return statearr_49629;
})();
if(cljs.core.truth_(inst_49561__$1)){
var statearr_49630_50683 = state_49590__$1;
(statearr_49630_50683[(1)] = (14));

} else {
var statearr_49631_50684 = state_49590__$1;
(statearr_49631_50684[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49591 === (5))){
var inst_49545 = (state_49590[(13)]);
var state_49590__$1 = state_49590;
var statearr_49632_50685 = state_49590__$1;
(statearr_49632_50685[(2)] = inst_49545);

(statearr_49632_50685[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49591 === (14))){
var inst_49561 = (state_49590[(19)]);
var state_49590__$1 = state_49590;
var statearr_49633_50686 = state_49590__$1;
(statearr_49633_50686[(2)] = inst_49561);

(statearr_49633_50686[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49591 === (26))){
var inst_49580 = (state_49590[(2)]);
var state_49590__$1 = state_49590;
var statearr_49634_50687 = state_49590__$1;
(statearr_49634_50687[(2)] = inst_49580);

(statearr_49634_50687[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49591 === (16))){
var inst_49572 = (state_49590[(2)]);
var state_49590__$1 = state_49590;
if(cljs.core.truth_(inst_49572)){
var statearr_49635_50688 = state_49590__$1;
(statearr_49635_50688[(1)] = (20));

} else {
var statearr_49636_50689 = state_49590__$1;
(statearr_49636_50689[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49591 === (10))){
var inst_49586 = (state_49590[(2)]);
var state_49590__$1 = state_49590;
var statearr_49637_50690 = state_49590__$1;
(statearr_49637_50690[(2)] = inst_49586);

(statearr_49637_50690[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49591 === (18))){
var inst_49564 = (state_49590[(15)]);
var state_49590__$1 = state_49590;
var statearr_49638_50691 = state_49590__$1;
(statearr_49638_50691[(2)] = inst_49564);

(statearr_49638_50691[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49591 === (8))){
var inst_49543 = (state_49590[(7)]);
var inst_49552 = (inst_49543 == null);
var state_49590__$1 = state_49590;
if(cljs.core.truth_(inst_49552)){
var statearr_49639_50694 = state_49590__$1;
(statearr_49639_50694[(1)] = (11));

} else {
var statearr_49640_50695 = state_49590__$1;
(statearr_49640_50695[(1)] = (12));

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
var statearr_49641 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49641[(0)] = cljs$core$async$mix_$_state_machine__48474__auto__);

(statearr_49641[(1)] = (1));

return statearr_49641;
});
var cljs$core$async$mix_$_state_machine__48474__auto____1 = (function (state_49590){
while(true){
var ret_value__48475__auto__ = (function (){try{while(true){
var result__48476__auto__ = switch__48472__auto__(state_49590);
if(cljs.core.keyword_identical_QMARK_(result__48476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48476__auto__;
}
break;
}
}catch (e49642){var ex__48478__auto__ = e49642;
var statearr_49643_50696 = state_49590;
(statearr_49643_50696[(2)] = ex__48478__auto__);


if(cljs.core.seq((state_49590[(4)]))){
var statearr_49644_50697 = state_49590;
(statearr_49644_50697[(1)] = cljs.core.first((state_49590[(4)])));

} else {
throw ex__48478__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50698 = state_49590;
state_49590 = G__50698;
continue;
} else {
return ret_value__48475__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__48474__auto__ = function(state_49590){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__48474__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__48474__auto____1.call(this,state_49590);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__48474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__48474__auto____0;
cljs$core$async$mix_$_state_machine__48474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__48474__auto____1;
return cljs$core$async$mix_$_state_machine__48474__auto__;
})()
})();
var state__48699__auto__ = (function (){var statearr_49645 = f__48698__auto__();
(statearr_49645[(6)] = c__48697__auto___50652);

return statearr_49645;
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

var cljs$core$async$Pub$sub_STAR_$dyn_50701 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_50701(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_50704 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_50704(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_50705 = (function() {
var G__50706 = null;
var G__50706__1 = (function (p){
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
var G__50706__2 = (function (p,v){
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
G__50706 = function(p,v){
switch(arguments.length){
case 1:
return G__50706__1.call(this,p);
case 2:
return G__50706__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__50706.cljs$core$IFn$_invoke$arity$1 = G__50706__1;
G__50706.cljs$core$IFn$_invoke$arity$2 = G__50706__2;
return G__50706;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__49647 = arguments.length;
switch (G__49647) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_50705(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_50705(p,v);
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
var G__49650 = arguments.length;
switch (G__49650) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__49648_SHARP_){
if(cljs.core.truth_((p1__49648_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__49648_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__49648_SHARP_.call(null,topic)))){
return p1__49648_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__49648_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async49651 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49651 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta49652){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta49652 = meta49652;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async49651.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49653,meta49652__$1){
var self__ = this;
var _49653__$1 = this;
return (new cljs.core.async.t_cljs$core$async49651(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta49652__$1));
}));

(cljs.core.async.t_cljs$core$async49651.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49653){
var self__ = this;
var _49653__$1 = this;
return self__.meta49652;
}));

(cljs.core.async.t_cljs$core$async49651.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49651.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async49651.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49651.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async49651.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async49651.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async49651.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async49651.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta49652","meta49652",453440711,null)], null);
}));

(cljs.core.async.t_cljs$core$async49651.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async49651.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49651");

(cljs.core.async.t_cljs$core$async49651.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async49651");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49651.
 */
cljs.core.async.__GT_t_cljs$core$async49651 = (function cljs$core$async$__GT_t_cljs$core$async49651(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta49652){
return (new cljs.core.async.t_cljs$core$async49651(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta49652));
});

}

return (new cljs.core.async.t_cljs$core$async49651(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__48697__auto___50724 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48698__auto__ = (function (){var switch__48472__auto__ = (function (state_49725){
var state_val_49726 = (state_49725[(1)]);
if((state_val_49726 === (7))){
var inst_49721 = (state_49725[(2)]);
var state_49725__$1 = state_49725;
var statearr_49727_50735 = state_49725__$1;
(statearr_49727_50735[(2)] = inst_49721);

(statearr_49727_50735[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49726 === (20))){
var state_49725__$1 = state_49725;
var statearr_49728_50736 = state_49725__$1;
(statearr_49728_50736[(2)] = null);

(statearr_49728_50736[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49726 === (1))){
var state_49725__$1 = state_49725;
var statearr_49729_50737 = state_49725__$1;
(statearr_49729_50737[(2)] = null);

(statearr_49729_50737[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49726 === (24))){
var inst_49704 = (state_49725[(7)]);
var inst_49713 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_49704);
var state_49725__$1 = state_49725;
var statearr_49730_50738 = state_49725__$1;
(statearr_49730_50738[(2)] = inst_49713);

(statearr_49730_50738[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49726 === (4))){
var inst_49656 = (state_49725[(8)]);
var inst_49656__$1 = (state_49725[(2)]);
var inst_49657 = (inst_49656__$1 == null);
var state_49725__$1 = (function (){var statearr_49731 = state_49725;
(statearr_49731[(8)] = inst_49656__$1);

return statearr_49731;
})();
if(cljs.core.truth_(inst_49657)){
var statearr_49732_50739 = state_49725__$1;
(statearr_49732_50739[(1)] = (5));

} else {
var statearr_49733_50740 = state_49725__$1;
(statearr_49733_50740[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49726 === (15))){
var inst_49698 = (state_49725[(2)]);
var state_49725__$1 = state_49725;
var statearr_49734_50741 = state_49725__$1;
(statearr_49734_50741[(2)] = inst_49698);

(statearr_49734_50741[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49726 === (21))){
var inst_49718 = (state_49725[(2)]);
var state_49725__$1 = (function (){var statearr_49735 = state_49725;
(statearr_49735[(9)] = inst_49718);

return statearr_49735;
})();
var statearr_49736_50742 = state_49725__$1;
(statearr_49736_50742[(2)] = null);

(statearr_49736_50742[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49726 === (13))){
var inst_49680 = (state_49725[(10)]);
var inst_49682 = cljs.core.chunked_seq_QMARK_(inst_49680);
var state_49725__$1 = state_49725;
if(inst_49682){
var statearr_49737_50743 = state_49725__$1;
(statearr_49737_50743[(1)] = (16));

} else {
var statearr_49738_50744 = state_49725__$1;
(statearr_49738_50744[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49726 === (22))){
var inst_49710 = (state_49725[(2)]);
var state_49725__$1 = state_49725;
if(cljs.core.truth_(inst_49710)){
var statearr_49739_50745 = state_49725__$1;
(statearr_49739_50745[(1)] = (23));

} else {
var statearr_49740_50746 = state_49725__$1;
(statearr_49740_50746[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49726 === (6))){
var inst_49656 = (state_49725[(8)]);
var inst_49704 = (state_49725[(7)]);
var inst_49706 = (state_49725[(11)]);
var inst_49704__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_49656) : topic_fn.call(null,inst_49656));
var inst_49705 = cljs.core.deref(mults);
var inst_49706__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_49705,inst_49704__$1);
var state_49725__$1 = (function (){var statearr_49741 = state_49725;
(statearr_49741[(7)] = inst_49704__$1);

(statearr_49741[(11)] = inst_49706__$1);

return statearr_49741;
})();
if(cljs.core.truth_(inst_49706__$1)){
var statearr_49742_50747 = state_49725__$1;
(statearr_49742_50747[(1)] = (19));

} else {
var statearr_49743_50748 = state_49725__$1;
(statearr_49743_50748[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49726 === (25))){
var inst_49715 = (state_49725[(2)]);
var state_49725__$1 = state_49725;
var statearr_49744_50749 = state_49725__$1;
(statearr_49744_50749[(2)] = inst_49715);

(statearr_49744_50749[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49726 === (17))){
var inst_49680 = (state_49725[(10)]);
var inst_49689 = cljs.core.first(inst_49680);
var inst_49690 = cljs.core.async.muxch_STAR_(inst_49689);
var inst_49691 = cljs.core.async.close_BANG_(inst_49690);
var inst_49692 = cljs.core.next(inst_49680);
var inst_49666 = inst_49692;
var inst_49667 = null;
var inst_49668 = (0);
var inst_49669 = (0);
var state_49725__$1 = (function (){var statearr_49745 = state_49725;
(statearr_49745[(12)] = inst_49667);

(statearr_49745[(13)] = inst_49668);

(statearr_49745[(14)] = inst_49669);

(statearr_49745[(15)] = inst_49691);

(statearr_49745[(16)] = inst_49666);

return statearr_49745;
})();
var statearr_49746_50750 = state_49725__$1;
(statearr_49746_50750[(2)] = null);

(statearr_49746_50750[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49726 === (3))){
var inst_49723 = (state_49725[(2)]);
var state_49725__$1 = state_49725;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49725__$1,inst_49723);
} else {
if((state_val_49726 === (12))){
var inst_49700 = (state_49725[(2)]);
var state_49725__$1 = state_49725;
var statearr_49747_50751 = state_49725__$1;
(statearr_49747_50751[(2)] = inst_49700);

(statearr_49747_50751[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49726 === (2))){
var state_49725__$1 = state_49725;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49725__$1,(4),ch);
} else {
if((state_val_49726 === (23))){
var state_49725__$1 = state_49725;
var statearr_49748_50752 = state_49725__$1;
(statearr_49748_50752[(2)] = null);

(statearr_49748_50752[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49726 === (19))){
var inst_49656 = (state_49725[(8)]);
var inst_49706 = (state_49725[(11)]);
var inst_49708 = cljs.core.async.muxch_STAR_(inst_49706);
var state_49725__$1 = state_49725;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49725__$1,(22),inst_49708,inst_49656);
} else {
if((state_val_49726 === (11))){
var inst_49680 = (state_49725[(10)]);
var inst_49666 = (state_49725[(16)]);
var inst_49680__$1 = cljs.core.seq(inst_49666);
var state_49725__$1 = (function (){var statearr_49749 = state_49725;
(statearr_49749[(10)] = inst_49680__$1);

return statearr_49749;
})();
if(inst_49680__$1){
var statearr_49750_50753 = state_49725__$1;
(statearr_49750_50753[(1)] = (13));

} else {
var statearr_49751_50754 = state_49725__$1;
(statearr_49751_50754[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49726 === (9))){
var inst_49702 = (state_49725[(2)]);
var state_49725__$1 = state_49725;
var statearr_49752_50757 = state_49725__$1;
(statearr_49752_50757[(2)] = inst_49702);

(statearr_49752_50757[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49726 === (5))){
var inst_49663 = cljs.core.deref(mults);
var inst_49664 = cljs.core.vals(inst_49663);
var inst_49665 = cljs.core.seq(inst_49664);
var inst_49666 = inst_49665;
var inst_49667 = null;
var inst_49668 = (0);
var inst_49669 = (0);
var state_49725__$1 = (function (){var statearr_49753 = state_49725;
(statearr_49753[(12)] = inst_49667);

(statearr_49753[(13)] = inst_49668);

(statearr_49753[(14)] = inst_49669);

(statearr_49753[(16)] = inst_49666);

return statearr_49753;
})();
var statearr_49754_50758 = state_49725__$1;
(statearr_49754_50758[(2)] = null);

(statearr_49754_50758[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49726 === (14))){
var state_49725__$1 = state_49725;
var statearr_49758_50759 = state_49725__$1;
(statearr_49758_50759[(2)] = null);

(statearr_49758_50759[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49726 === (16))){
var inst_49680 = (state_49725[(10)]);
var inst_49684 = cljs.core.chunk_first(inst_49680);
var inst_49685 = cljs.core.chunk_rest(inst_49680);
var inst_49686 = cljs.core.count(inst_49684);
var inst_49666 = inst_49685;
var inst_49667 = inst_49684;
var inst_49668 = inst_49686;
var inst_49669 = (0);
var state_49725__$1 = (function (){var statearr_49759 = state_49725;
(statearr_49759[(12)] = inst_49667);

(statearr_49759[(13)] = inst_49668);

(statearr_49759[(14)] = inst_49669);

(statearr_49759[(16)] = inst_49666);

return statearr_49759;
})();
var statearr_49760_50760 = state_49725__$1;
(statearr_49760_50760[(2)] = null);

(statearr_49760_50760[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49726 === (10))){
var inst_49667 = (state_49725[(12)]);
var inst_49668 = (state_49725[(13)]);
var inst_49669 = (state_49725[(14)]);
var inst_49666 = (state_49725[(16)]);
var inst_49674 = cljs.core._nth(inst_49667,inst_49669);
var inst_49675 = cljs.core.async.muxch_STAR_(inst_49674);
var inst_49676 = cljs.core.async.close_BANG_(inst_49675);
var inst_49677 = (inst_49669 + (1));
var tmp49755 = inst_49667;
var tmp49756 = inst_49668;
var tmp49757 = inst_49666;
var inst_49666__$1 = tmp49757;
var inst_49667__$1 = tmp49755;
var inst_49668__$1 = tmp49756;
var inst_49669__$1 = inst_49677;
var state_49725__$1 = (function (){var statearr_49761 = state_49725;
(statearr_49761[(12)] = inst_49667__$1);

(statearr_49761[(13)] = inst_49668__$1);

(statearr_49761[(14)] = inst_49669__$1);

(statearr_49761[(17)] = inst_49676);

(statearr_49761[(16)] = inst_49666__$1);

return statearr_49761;
})();
var statearr_49762_50761 = state_49725__$1;
(statearr_49762_50761[(2)] = null);

(statearr_49762_50761[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49726 === (18))){
var inst_49695 = (state_49725[(2)]);
var state_49725__$1 = state_49725;
var statearr_49763_50762 = state_49725__$1;
(statearr_49763_50762[(2)] = inst_49695);

(statearr_49763_50762[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49726 === (8))){
var inst_49668 = (state_49725[(13)]);
var inst_49669 = (state_49725[(14)]);
var inst_49671 = (inst_49669 < inst_49668);
var inst_49672 = inst_49671;
var state_49725__$1 = state_49725;
if(cljs.core.truth_(inst_49672)){
var statearr_49764_50763 = state_49725__$1;
(statearr_49764_50763[(1)] = (10));

} else {
var statearr_49765_50764 = state_49725__$1;
(statearr_49765_50764[(1)] = (11));

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
var statearr_49766 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49766[(0)] = cljs$core$async$state_machine__48474__auto__);

(statearr_49766[(1)] = (1));

return statearr_49766;
});
var cljs$core$async$state_machine__48474__auto____1 = (function (state_49725){
while(true){
var ret_value__48475__auto__ = (function (){try{while(true){
var result__48476__auto__ = switch__48472__auto__(state_49725);
if(cljs.core.keyword_identical_QMARK_(result__48476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48476__auto__;
}
break;
}
}catch (e49767){var ex__48478__auto__ = e49767;
var statearr_49768_50769 = state_49725;
(statearr_49768_50769[(2)] = ex__48478__auto__);


if(cljs.core.seq((state_49725[(4)]))){
var statearr_49769_50770 = state_49725;
(statearr_49769_50770[(1)] = cljs.core.first((state_49725[(4)])));

} else {
throw ex__48478__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50771 = state_49725;
state_49725 = G__50771;
continue;
} else {
return ret_value__48475__auto__;
}
break;
}
});
cljs$core$async$state_machine__48474__auto__ = function(state_49725){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48474__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48474__auto____1.call(this,state_49725);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48474__auto____0;
cljs$core$async$state_machine__48474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48474__auto____1;
return cljs$core$async$state_machine__48474__auto__;
})()
})();
var state__48699__auto__ = (function (){var statearr_49770 = f__48698__auto__();
(statearr_49770[(6)] = c__48697__auto___50724);

return statearr_49770;
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
var G__49772 = arguments.length;
switch (G__49772) {
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
var G__49774 = arguments.length;
switch (G__49774) {
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
var G__49776 = arguments.length;
switch (G__49776) {
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
var c__48697__auto___50780 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48698__auto__ = (function (){var switch__48472__auto__ = (function (state_49819){
var state_val_49820 = (state_49819[(1)]);
if((state_val_49820 === (7))){
var state_49819__$1 = state_49819;
var statearr_49821_50781 = state_49819__$1;
(statearr_49821_50781[(2)] = null);

(statearr_49821_50781[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49820 === (1))){
var state_49819__$1 = state_49819;
var statearr_49822_50782 = state_49819__$1;
(statearr_49822_50782[(2)] = null);

(statearr_49822_50782[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49820 === (4))){
var inst_49779 = (state_49819[(7)]);
var inst_49780 = (state_49819[(8)]);
var inst_49782 = (inst_49780 < inst_49779);
var state_49819__$1 = state_49819;
if(cljs.core.truth_(inst_49782)){
var statearr_49823_50783 = state_49819__$1;
(statearr_49823_50783[(1)] = (6));

} else {
var statearr_49824_50784 = state_49819__$1;
(statearr_49824_50784[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49820 === (15))){
var inst_49805 = (state_49819[(9)]);
var inst_49810 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_49805);
var state_49819__$1 = state_49819;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49819__$1,(17),out,inst_49810);
} else {
if((state_val_49820 === (13))){
var inst_49805 = (state_49819[(9)]);
var inst_49805__$1 = (state_49819[(2)]);
var inst_49806 = cljs.core.some(cljs.core.nil_QMARK_,inst_49805__$1);
var state_49819__$1 = (function (){var statearr_49825 = state_49819;
(statearr_49825[(9)] = inst_49805__$1);

return statearr_49825;
})();
if(cljs.core.truth_(inst_49806)){
var statearr_49826_50785 = state_49819__$1;
(statearr_49826_50785[(1)] = (14));

} else {
var statearr_49827_50786 = state_49819__$1;
(statearr_49827_50786[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49820 === (6))){
var state_49819__$1 = state_49819;
var statearr_49828_50787 = state_49819__$1;
(statearr_49828_50787[(2)] = null);

(statearr_49828_50787[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49820 === (17))){
var inst_49812 = (state_49819[(2)]);
var state_49819__$1 = (function (){var statearr_49830 = state_49819;
(statearr_49830[(10)] = inst_49812);

return statearr_49830;
})();
var statearr_49831_50788 = state_49819__$1;
(statearr_49831_50788[(2)] = null);

(statearr_49831_50788[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49820 === (3))){
var inst_49817 = (state_49819[(2)]);
var state_49819__$1 = state_49819;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49819__$1,inst_49817);
} else {
if((state_val_49820 === (12))){
var _ = (function (){var statearr_49832 = state_49819;
(statearr_49832[(4)] = cljs.core.rest((state_49819[(4)])));

return statearr_49832;
})();
var state_49819__$1 = state_49819;
var ex49829 = (state_49819__$1[(2)]);
var statearr_49833_50789 = state_49819__$1;
(statearr_49833_50789[(5)] = ex49829);


if((ex49829 instanceof Object)){
var statearr_49834_50790 = state_49819__$1;
(statearr_49834_50790[(1)] = (11));

(statearr_49834_50790[(5)] = null);

} else {
throw ex49829;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49820 === (2))){
var inst_49778 = cljs.core.reset_BANG_(dctr,cnt);
var inst_49779 = cnt;
var inst_49780 = (0);
var state_49819__$1 = (function (){var statearr_49835 = state_49819;
(statearr_49835[(7)] = inst_49779);

(statearr_49835[(8)] = inst_49780);

(statearr_49835[(11)] = inst_49778);

return statearr_49835;
})();
var statearr_49836_50792 = state_49819__$1;
(statearr_49836_50792[(2)] = null);

(statearr_49836_50792[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49820 === (11))){
var inst_49784 = (state_49819[(2)]);
var inst_49785 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_49819__$1 = (function (){var statearr_49837 = state_49819;
(statearr_49837[(12)] = inst_49784);

return statearr_49837;
})();
var statearr_49838_50793 = state_49819__$1;
(statearr_49838_50793[(2)] = inst_49785);

(statearr_49838_50793[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49820 === (9))){
var inst_49780 = (state_49819[(8)]);
var _ = (function (){var statearr_49839 = state_49819;
(statearr_49839[(4)] = cljs.core.cons((12),(state_49819[(4)])));

return statearr_49839;
})();
var inst_49791 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_49780) : chs__$1.call(null,inst_49780));
var inst_49792 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_49780) : done.call(null,inst_49780));
var inst_49793 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_49791,inst_49792);
var ___$1 = (function (){var statearr_49840 = state_49819;
(statearr_49840[(4)] = cljs.core.rest((state_49819[(4)])));

return statearr_49840;
})();
var state_49819__$1 = state_49819;
var statearr_49841_50798 = state_49819__$1;
(statearr_49841_50798[(2)] = inst_49793);

(statearr_49841_50798[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49820 === (5))){
var inst_49803 = (state_49819[(2)]);
var state_49819__$1 = (function (){var statearr_49842 = state_49819;
(statearr_49842[(13)] = inst_49803);

return statearr_49842;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49819__$1,(13),dchan);
} else {
if((state_val_49820 === (14))){
var inst_49808 = cljs.core.async.close_BANG_(out);
var state_49819__$1 = state_49819;
var statearr_49843_50799 = state_49819__$1;
(statearr_49843_50799[(2)] = inst_49808);

(statearr_49843_50799[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49820 === (16))){
var inst_49815 = (state_49819[(2)]);
var state_49819__$1 = state_49819;
var statearr_49844_50800 = state_49819__$1;
(statearr_49844_50800[(2)] = inst_49815);

(statearr_49844_50800[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49820 === (10))){
var inst_49780 = (state_49819[(8)]);
var inst_49796 = (state_49819[(2)]);
var inst_49797 = (inst_49780 + (1));
var inst_49780__$1 = inst_49797;
var state_49819__$1 = (function (){var statearr_49845 = state_49819;
(statearr_49845[(8)] = inst_49780__$1);

(statearr_49845[(14)] = inst_49796);

return statearr_49845;
})();
var statearr_49846_50801 = state_49819__$1;
(statearr_49846_50801[(2)] = null);

(statearr_49846_50801[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49820 === (8))){
var inst_49801 = (state_49819[(2)]);
var state_49819__$1 = state_49819;
var statearr_49847_50802 = state_49819__$1;
(statearr_49847_50802[(2)] = inst_49801);

(statearr_49847_50802[(1)] = (5));


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
var statearr_49848 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49848[(0)] = cljs$core$async$state_machine__48474__auto__);

(statearr_49848[(1)] = (1));

return statearr_49848;
});
var cljs$core$async$state_machine__48474__auto____1 = (function (state_49819){
while(true){
var ret_value__48475__auto__ = (function (){try{while(true){
var result__48476__auto__ = switch__48472__auto__(state_49819);
if(cljs.core.keyword_identical_QMARK_(result__48476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48476__auto__;
}
break;
}
}catch (e49849){var ex__48478__auto__ = e49849;
var statearr_49850_50803 = state_49819;
(statearr_49850_50803[(2)] = ex__48478__auto__);


if(cljs.core.seq((state_49819[(4)]))){
var statearr_49851_50804 = state_49819;
(statearr_49851_50804[(1)] = cljs.core.first((state_49819[(4)])));

} else {
throw ex__48478__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50805 = state_49819;
state_49819 = G__50805;
continue;
} else {
return ret_value__48475__auto__;
}
break;
}
});
cljs$core$async$state_machine__48474__auto__ = function(state_49819){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48474__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48474__auto____1.call(this,state_49819);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48474__auto____0;
cljs$core$async$state_machine__48474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48474__auto____1;
return cljs$core$async$state_machine__48474__auto__;
})()
})();
var state__48699__auto__ = (function (){var statearr_49852 = f__48698__auto__();
(statearr_49852[(6)] = c__48697__auto___50780);

return statearr_49852;
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
var G__49855 = arguments.length;
switch (G__49855) {
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
var c__48697__auto___50807 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48698__auto__ = (function (){var switch__48472__auto__ = (function (state_49887){
var state_val_49888 = (state_49887[(1)]);
if((state_val_49888 === (7))){
var inst_49866 = (state_49887[(7)]);
var inst_49867 = (state_49887[(8)]);
var inst_49866__$1 = (state_49887[(2)]);
var inst_49867__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_49866__$1,(0),null);
var inst_49868 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_49866__$1,(1),null);
var inst_49869 = (inst_49867__$1 == null);
var state_49887__$1 = (function (){var statearr_49889 = state_49887;
(statearr_49889[(7)] = inst_49866__$1);

(statearr_49889[(8)] = inst_49867__$1);

(statearr_49889[(9)] = inst_49868);

return statearr_49889;
})();
if(cljs.core.truth_(inst_49869)){
var statearr_49890_50808 = state_49887__$1;
(statearr_49890_50808[(1)] = (8));

} else {
var statearr_49891_50809 = state_49887__$1;
(statearr_49891_50809[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49888 === (1))){
var inst_49856 = cljs.core.vec(chs);
var inst_49857 = inst_49856;
var state_49887__$1 = (function (){var statearr_49892 = state_49887;
(statearr_49892[(10)] = inst_49857);

return statearr_49892;
})();
var statearr_49893_50810 = state_49887__$1;
(statearr_49893_50810[(2)] = null);

(statearr_49893_50810[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49888 === (4))){
var inst_49857 = (state_49887[(10)]);
var state_49887__$1 = state_49887;
return cljs.core.async.ioc_alts_BANG_(state_49887__$1,(7),inst_49857);
} else {
if((state_val_49888 === (6))){
var inst_49883 = (state_49887[(2)]);
var state_49887__$1 = state_49887;
var statearr_49894_50811 = state_49887__$1;
(statearr_49894_50811[(2)] = inst_49883);

(statearr_49894_50811[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49888 === (3))){
var inst_49885 = (state_49887[(2)]);
var state_49887__$1 = state_49887;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49887__$1,inst_49885);
} else {
if((state_val_49888 === (2))){
var inst_49857 = (state_49887[(10)]);
var inst_49859 = cljs.core.count(inst_49857);
var inst_49860 = (inst_49859 > (0));
var state_49887__$1 = state_49887;
if(cljs.core.truth_(inst_49860)){
var statearr_49896_50812 = state_49887__$1;
(statearr_49896_50812[(1)] = (4));

} else {
var statearr_49897_50813 = state_49887__$1;
(statearr_49897_50813[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49888 === (11))){
var inst_49857 = (state_49887[(10)]);
var inst_49876 = (state_49887[(2)]);
var tmp49895 = inst_49857;
var inst_49857__$1 = tmp49895;
var state_49887__$1 = (function (){var statearr_49898 = state_49887;
(statearr_49898[(10)] = inst_49857__$1);

(statearr_49898[(11)] = inst_49876);

return statearr_49898;
})();
var statearr_49899_50814 = state_49887__$1;
(statearr_49899_50814[(2)] = null);

(statearr_49899_50814[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49888 === (9))){
var inst_49867 = (state_49887[(8)]);
var state_49887__$1 = state_49887;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49887__$1,(11),out,inst_49867);
} else {
if((state_val_49888 === (5))){
var inst_49881 = cljs.core.async.close_BANG_(out);
var state_49887__$1 = state_49887;
var statearr_49900_50815 = state_49887__$1;
(statearr_49900_50815[(2)] = inst_49881);

(statearr_49900_50815[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49888 === (10))){
var inst_49879 = (state_49887[(2)]);
var state_49887__$1 = state_49887;
var statearr_49901_50816 = state_49887__$1;
(statearr_49901_50816[(2)] = inst_49879);

(statearr_49901_50816[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49888 === (8))){
var inst_49857 = (state_49887[(10)]);
var inst_49866 = (state_49887[(7)]);
var inst_49867 = (state_49887[(8)]);
var inst_49868 = (state_49887[(9)]);
var inst_49871 = (function (){var cs = inst_49857;
var vec__49862 = inst_49866;
var v = inst_49867;
var c = inst_49868;
return (function (p1__49853_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__49853_SHARP_);
});
})();
var inst_49872 = cljs.core.filterv(inst_49871,inst_49857);
var inst_49857__$1 = inst_49872;
var state_49887__$1 = (function (){var statearr_49902 = state_49887;
(statearr_49902[(10)] = inst_49857__$1);

return statearr_49902;
})();
var statearr_49903_50817 = state_49887__$1;
(statearr_49903_50817[(2)] = null);

(statearr_49903_50817[(1)] = (2));


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
var statearr_49904 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49904[(0)] = cljs$core$async$state_machine__48474__auto__);

(statearr_49904[(1)] = (1));

return statearr_49904;
});
var cljs$core$async$state_machine__48474__auto____1 = (function (state_49887){
while(true){
var ret_value__48475__auto__ = (function (){try{while(true){
var result__48476__auto__ = switch__48472__auto__(state_49887);
if(cljs.core.keyword_identical_QMARK_(result__48476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48476__auto__;
}
break;
}
}catch (e49905){var ex__48478__auto__ = e49905;
var statearr_49906_50818 = state_49887;
(statearr_49906_50818[(2)] = ex__48478__auto__);


if(cljs.core.seq((state_49887[(4)]))){
var statearr_49907_50819 = state_49887;
(statearr_49907_50819[(1)] = cljs.core.first((state_49887[(4)])));

} else {
throw ex__48478__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50820 = state_49887;
state_49887 = G__50820;
continue;
} else {
return ret_value__48475__auto__;
}
break;
}
});
cljs$core$async$state_machine__48474__auto__ = function(state_49887){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48474__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48474__auto____1.call(this,state_49887);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48474__auto____0;
cljs$core$async$state_machine__48474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48474__auto____1;
return cljs$core$async$state_machine__48474__auto__;
})()
})();
var state__48699__auto__ = (function (){var statearr_49908 = f__48698__auto__();
(statearr_49908[(6)] = c__48697__auto___50807);

return statearr_49908;
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
var G__49910 = arguments.length;
switch (G__49910) {
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
var c__48697__auto___50822 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48698__auto__ = (function (){var switch__48472__auto__ = (function (state_49934){
var state_val_49935 = (state_49934[(1)]);
if((state_val_49935 === (7))){
var inst_49916 = (state_49934[(7)]);
var inst_49916__$1 = (state_49934[(2)]);
var inst_49917 = (inst_49916__$1 == null);
var inst_49918 = cljs.core.not(inst_49917);
var state_49934__$1 = (function (){var statearr_49936 = state_49934;
(statearr_49936[(7)] = inst_49916__$1);

return statearr_49936;
})();
if(inst_49918){
var statearr_49937_50823 = state_49934__$1;
(statearr_49937_50823[(1)] = (8));

} else {
var statearr_49938_50824 = state_49934__$1;
(statearr_49938_50824[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49935 === (1))){
var inst_49911 = (0);
var state_49934__$1 = (function (){var statearr_49939 = state_49934;
(statearr_49939[(8)] = inst_49911);

return statearr_49939;
})();
var statearr_49940_50825 = state_49934__$1;
(statearr_49940_50825[(2)] = null);

(statearr_49940_50825[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49935 === (4))){
var state_49934__$1 = state_49934;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49934__$1,(7),ch);
} else {
if((state_val_49935 === (6))){
var inst_49929 = (state_49934[(2)]);
var state_49934__$1 = state_49934;
var statearr_49941_50826 = state_49934__$1;
(statearr_49941_50826[(2)] = inst_49929);

(statearr_49941_50826[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49935 === (3))){
var inst_49931 = (state_49934[(2)]);
var inst_49932 = cljs.core.async.close_BANG_(out);
var state_49934__$1 = (function (){var statearr_49942 = state_49934;
(statearr_49942[(9)] = inst_49931);

return statearr_49942;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_49934__$1,inst_49932);
} else {
if((state_val_49935 === (2))){
var inst_49911 = (state_49934[(8)]);
var inst_49913 = (inst_49911 < n);
var state_49934__$1 = state_49934;
if(cljs.core.truth_(inst_49913)){
var statearr_49943_50827 = state_49934__$1;
(statearr_49943_50827[(1)] = (4));

} else {
var statearr_49944_50828 = state_49934__$1;
(statearr_49944_50828[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49935 === (11))){
var inst_49911 = (state_49934[(8)]);
var inst_49921 = (state_49934[(2)]);
var inst_49922 = (inst_49911 + (1));
var inst_49911__$1 = inst_49922;
var state_49934__$1 = (function (){var statearr_49945 = state_49934;
(statearr_49945[(8)] = inst_49911__$1);

(statearr_49945[(10)] = inst_49921);

return statearr_49945;
})();
var statearr_49946_50829 = state_49934__$1;
(statearr_49946_50829[(2)] = null);

(statearr_49946_50829[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49935 === (9))){
var state_49934__$1 = state_49934;
var statearr_49947_50830 = state_49934__$1;
(statearr_49947_50830[(2)] = null);

(statearr_49947_50830[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49935 === (5))){
var state_49934__$1 = state_49934;
var statearr_49948_50831 = state_49934__$1;
(statearr_49948_50831[(2)] = null);

(statearr_49948_50831[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49935 === (10))){
var inst_49926 = (state_49934[(2)]);
var state_49934__$1 = state_49934;
var statearr_49949_50832 = state_49934__$1;
(statearr_49949_50832[(2)] = inst_49926);

(statearr_49949_50832[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49935 === (8))){
var inst_49916 = (state_49934[(7)]);
var state_49934__$1 = state_49934;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49934__$1,(11),out,inst_49916);
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
var statearr_49950 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_49950[(0)] = cljs$core$async$state_machine__48474__auto__);

(statearr_49950[(1)] = (1));

return statearr_49950;
});
var cljs$core$async$state_machine__48474__auto____1 = (function (state_49934){
while(true){
var ret_value__48475__auto__ = (function (){try{while(true){
var result__48476__auto__ = switch__48472__auto__(state_49934);
if(cljs.core.keyword_identical_QMARK_(result__48476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48476__auto__;
}
break;
}
}catch (e49951){var ex__48478__auto__ = e49951;
var statearr_49952_50833 = state_49934;
(statearr_49952_50833[(2)] = ex__48478__auto__);


if(cljs.core.seq((state_49934[(4)]))){
var statearr_49953_50834 = state_49934;
(statearr_49953_50834[(1)] = cljs.core.first((state_49934[(4)])));

} else {
throw ex__48478__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50836 = state_49934;
state_49934 = G__50836;
continue;
} else {
return ret_value__48475__auto__;
}
break;
}
});
cljs$core$async$state_machine__48474__auto__ = function(state_49934){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48474__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48474__auto____1.call(this,state_49934);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48474__auto____0;
cljs$core$async$state_machine__48474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48474__auto____1;
return cljs$core$async$state_machine__48474__auto__;
})()
})();
var state__48699__auto__ = (function (){var statearr_49954 = f__48698__auto__();
(statearr_49954[(6)] = c__48697__auto___50822);

return statearr_49954;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async49956 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49956 = (function (f,ch,meta49957){
this.f = f;
this.ch = ch;
this.meta49957 = meta49957;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async49956.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49958,meta49957__$1){
var self__ = this;
var _49958__$1 = this;
return (new cljs.core.async.t_cljs$core$async49956(self__.f,self__.ch,meta49957__$1));
}));

(cljs.core.async.t_cljs$core$async49956.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49958){
var self__ = this;
var _49958__$1 = this;
return self__.meta49957;
}));

(cljs.core.async.t_cljs$core$async49956.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49956.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async49956.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async49956.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49956.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async49959 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49959 = (function (f,ch,meta49957,_,fn1,meta49960){
this.f = f;
this.ch = ch;
this.meta49957 = meta49957;
this._ = _;
this.fn1 = fn1;
this.meta49960 = meta49960;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async49959.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49961,meta49960__$1){
var self__ = this;
var _49961__$1 = this;
return (new cljs.core.async.t_cljs$core$async49959(self__.f,self__.ch,self__.meta49957,self__._,self__.fn1,meta49960__$1));
}));

(cljs.core.async.t_cljs$core$async49959.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49961){
var self__ = this;
var _49961__$1 = this;
return self__.meta49960;
}));

(cljs.core.async.t_cljs$core$async49959.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49959.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async49959.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async49959.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__49955_SHARP_){
var G__49962 = (((p1__49955_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__49955_SHARP_) : self__.f.call(null,p1__49955_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__49962) : f1.call(null,G__49962));
});
}));

(cljs.core.async.t_cljs$core$async49959.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta49957","meta49957",-417803052,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async49956","cljs.core.async/t_cljs$core$async49956",222625552,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta49960","meta49960",2104246316,null)], null);
}));

(cljs.core.async.t_cljs$core$async49959.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async49959.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49959");

(cljs.core.async.t_cljs$core$async49959.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async49959");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49959.
 */
cljs.core.async.__GT_t_cljs$core$async49959 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async49959(f__$1,ch__$1,meta49957__$1,___$2,fn1__$1,meta49960){
return (new cljs.core.async.t_cljs$core$async49959(f__$1,ch__$1,meta49957__$1,___$2,fn1__$1,meta49960));
});

}

return (new cljs.core.async.t_cljs$core$async49959(self__.f,self__.ch,self__.meta49957,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4221__auto__ = ret;
if(cljs.core.truth_(and__4221__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4221__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__49963 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__49963) : self__.f.call(null,G__49963));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async49956.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49956.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async49956.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta49957","meta49957",-417803052,null)], null);
}));

(cljs.core.async.t_cljs$core$async49956.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async49956.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49956");

(cljs.core.async.t_cljs$core$async49956.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async49956");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49956.
 */
cljs.core.async.__GT_t_cljs$core$async49956 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async49956(f__$1,ch__$1,meta49957){
return (new cljs.core.async.t_cljs$core$async49956(f__$1,ch__$1,meta49957));
});

}

return (new cljs.core.async.t_cljs$core$async49956(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async49964 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49964 = (function (f,ch,meta49965){
this.f = f;
this.ch = ch;
this.meta49965 = meta49965;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async49964.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49966,meta49965__$1){
var self__ = this;
var _49966__$1 = this;
return (new cljs.core.async.t_cljs$core$async49964(self__.f,self__.ch,meta49965__$1));
}));

(cljs.core.async.t_cljs$core$async49964.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49966){
var self__ = this;
var _49966__$1 = this;
return self__.meta49965;
}));

(cljs.core.async.t_cljs$core$async49964.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49964.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async49964.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49964.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async49964.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49964.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async49964.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta49965","meta49965",834812671,null)], null);
}));

(cljs.core.async.t_cljs$core$async49964.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async49964.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49964");

(cljs.core.async.t_cljs$core$async49964.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async49964");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49964.
 */
cljs.core.async.__GT_t_cljs$core$async49964 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async49964(f__$1,ch__$1,meta49965){
return (new cljs.core.async.t_cljs$core$async49964(f__$1,ch__$1,meta49965));
});

}

return (new cljs.core.async.t_cljs$core$async49964(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async49967 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49967 = (function (p,ch,meta49968){
this.p = p;
this.ch = ch;
this.meta49968 = meta49968;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async49967.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49969,meta49968__$1){
var self__ = this;
var _49969__$1 = this;
return (new cljs.core.async.t_cljs$core$async49967(self__.p,self__.ch,meta49968__$1));
}));

(cljs.core.async.t_cljs$core$async49967.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49969){
var self__ = this;
var _49969__$1 = this;
return self__.meta49968;
}));

(cljs.core.async.t_cljs$core$async49967.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49967.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async49967.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async49967.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49967.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async49967.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async49967.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async49967.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta49968","meta49968",-1638924842,null)], null);
}));

(cljs.core.async.t_cljs$core$async49967.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async49967.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49967");

(cljs.core.async.t_cljs$core$async49967.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async49967");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async49967.
 */
cljs.core.async.__GT_t_cljs$core$async49967 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async49967(p__$1,ch__$1,meta49968){
return (new cljs.core.async.t_cljs$core$async49967(p__$1,ch__$1,meta49968));
});

}

return (new cljs.core.async.t_cljs$core$async49967(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__49971 = arguments.length;
switch (G__49971) {
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
var c__48697__auto___50842 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48698__auto__ = (function (){var switch__48472__auto__ = (function (state_49992){
var state_val_49993 = (state_49992[(1)]);
if((state_val_49993 === (7))){
var inst_49988 = (state_49992[(2)]);
var state_49992__$1 = state_49992;
var statearr_49994_50843 = state_49992__$1;
(statearr_49994_50843[(2)] = inst_49988);

(statearr_49994_50843[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49993 === (1))){
var state_49992__$1 = state_49992;
var statearr_49995_50844 = state_49992__$1;
(statearr_49995_50844[(2)] = null);

(statearr_49995_50844[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49993 === (4))){
var inst_49974 = (state_49992[(7)]);
var inst_49974__$1 = (state_49992[(2)]);
var inst_49975 = (inst_49974__$1 == null);
var state_49992__$1 = (function (){var statearr_49996 = state_49992;
(statearr_49996[(7)] = inst_49974__$1);

return statearr_49996;
})();
if(cljs.core.truth_(inst_49975)){
var statearr_49997_50845 = state_49992__$1;
(statearr_49997_50845[(1)] = (5));

} else {
var statearr_49998_50846 = state_49992__$1;
(statearr_49998_50846[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49993 === (6))){
var inst_49974 = (state_49992[(7)]);
var inst_49979 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_49974) : p.call(null,inst_49974));
var state_49992__$1 = state_49992;
if(cljs.core.truth_(inst_49979)){
var statearr_49999_50847 = state_49992__$1;
(statearr_49999_50847[(1)] = (8));

} else {
var statearr_50000_50848 = state_49992__$1;
(statearr_50000_50848[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49993 === (3))){
var inst_49990 = (state_49992[(2)]);
var state_49992__$1 = state_49992;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49992__$1,inst_49990);
} else {
if((state_val_49993 === (2))){
var state_49992__$1 = state_49992;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49992__$1,(4),ch);
} else {
if((state_val_49993 === (11))){
var inst_49982 = (state_49992[(2)]);
var state_49992__$1 = state_49992;
var statearr_50001_50849 = state_49992__$1;
(statearr_50001_50849[(2)] = inst_49982);

(statearr_50001_50849[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49993 === (9))){
var state_49992__$1 = state_49992;
var statearr_50002_50850 = state_49992__$1;
(statearr_50002_50850[(2)] = null);

(statearr_50002_50850[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49993 === (5))){
var inst_49977 = cljs.core.async.close_BANG_(out);
var state_49992__$1 = state_49992;
var statearr_50003_50851 = state_49992__$1;
(statearr_50003_50851[(2)] = inst_49977);

(statearr_50003_50851[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49993 === (10))){
var inst_49985 = (state_49992[(2)]);
var state_49992__$1 = (function (){var statearr_50004 = state_49992;
(statearr_50004[(8)] = inst_49985);

return statearr_50004;
})();
var statearr_50005_50852 = state_49992__$1;
(statearr_50005_50852[(2)] = null);

(statearr_50005_50852[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49993 === (8))){
var inst_49974 = (state_49992[(7)]);
var state_49992__$1 = state_49992;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49992__$1,(11),out,inst_49974);
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
var statearr_50006 = [null,null,null,null,null,null,null,null,null];
(statearr_50006[(0)] = cljs$core$async$state_machine__48474__auto__);

(statearr_50006[(1)] = (1));

return statearr_50006;
});
var cljs$core$async$state_machine__48474__auto____1 = (function (state_49992){
while(true){
var ret_value__48475__auto__ = (function (){try{while(true){
var result__48476__auto__ = switch__48472__auto__(state_49992);
if(cljs.core.keyword_identical_QMARK_(result__48476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48476__auto__;
}
break;
}
}catch (e50007){var ex__48478__auto__ = e50007;
var statearr_50008_50853 = state_49992;
(statearr_50008_50853[(2)] = ex__48478__auto__);


if(cljs.core.seq((state_49992[(4)]))){
var statearr_50009_50854 = state_49992;
(statearr_50009_50854[(1)] = cljs.core.first((state_49992[(4)])));

} else {
throw ex__48478__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50860 = state_49992;
state_49992 = G__50860;
continue;
} else {
return ret_value__48475__auto__;
}
break;
}
});
cljs$core$async$state_machine__48474__auto__ = function(state_49992){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48474__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48474__auto____1.call(this,state_49992);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48474__auto____0;
cljs$core$async$state_machine__48474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48474__auto____1;
return cljs$core$async$state_machine__48474__auto__;
})()
})();
var state__48699__auto__ = (function (){var statearr_50010 = f__48698__auto__();
(statearr_50010[(6)] = c__48697__auto___50842);

return statearr_50010;
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
var G__50012 = arguments.length;
switch (G__50012) {
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
var f__48698__auto__ = (function (){var switch__48472__auto__ = (function (state_50074){
var state_val_50075 = (state_50074[(1)]);
if((state_val_50075 === (7))){
var inst_50070 = (state_50074[(2)]);
var state_50074__$1 = state_50074;
var statearr_50076_50863 = state_50074__$1;
(statearr_50076_50863[(2)] = inst_50070);

(statearr_50076_50863[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50075 === (20))){
var inst_50040 = (state_50074[(7)]);
var inst_50051 = (state_50074[(2)]);
var inst_50052 = cljs.core.next(inst_50040);
var inst_50026 = inst_50052;
var inst_50027 = null;
var inst_50028 = (0);
var inst_50029 = (0);
var state_50074__$1 = (function (){var statearr_50077 = state_50074;
(statearr_50077[(8)] = inst_50028);

(statearr_50077[(9)] = inst_50029);

(statearr_50077[(10)] = inst_50027);

(statearr_50077[(11)] = inst_50026);

(statearr_50077[(12)] = inst_50051);

return statearr_50077;
})();
var statearr_50078_50864 = state_50074__$1;
(statearr_50078_50864[(2)] = null);

(statearr_50078_50864[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50075 === (1))){
var state_50074__$1 = state_50074;
var statearr_50079_50869 = state_50074__$1;
(statearr_50079_50869[(2)] = null);

(statearr_50079_50869[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50075 === (4))){
var inst_50015 = (state_50074[(13)]);
var inst_50015__$1 = (state_50074[(2)]);
var inst_50016 = (inst_50015__$1 == null);
var state_50074__$1 = (function (){var statearr_50080 = state_50074;
(statearr_50080[(13)] = inst_50015__$1);

return statearr_50080;
})();
if(cljs.core.truth_(inst_50016)){
var statearr_50081_50870 = state_50074__$1;
(statearr_50081_50870[(1)] = (5));

} else {
var statearr_50082_50871 = state_50074__$1;
(statearr_50082_50871[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50075 === (15))){
var state_50074__$1 = state_50074;
var statearr_50086_50872 = state_50074__$1;
(statearr_50086_50872[(2)] = null);

(statearr_50086_50872[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50075 === (21))){
var state_50074__$1 = state_50074;
var statearr_50087_50873 = state_50074__$1;
(statearr_50087_50873[(2)] = null);

(statearr_50087_50873[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50075 === (13))){
var inst_50028 = (state_50074[(8)]);
var inst_50029 = (state_50074[(9)]);
var inst_50027 = (state_50074[(10)]);
var inst_50026 = (state_50074[(11)]);
var inst_50036 = (state_50074[(2)]);
var inst_50037 = (inst_50029 + (1));
var tmp50083 = inst_50028;
var tmp50084 = inst_50027;
var tmp50085 = inst_50026;
var inst_50026__$1 = tmp50085;
var inst_50027__$1 = tmp50084;
var inst_50028__$1 = tmp50083;
var inst_50029__$1 = inst_50037;
var state_50074__$1 = (function (){var statearr_50088 = state_50074;
(statearr_50088[(8)] = inst_50028__$1);

(statearr_50088[(9)] = inst_50029__$1);

(statearr_50088[(10)] = inst_50027__$1);

(statearr_50088[(11)] = inst_50026__$1);

(statearr_50088[(14)] = inst_50036);

return statearr_50088;
})();
var statearr_50089_50875 = state_50074__$1;
(statearr_50089_50875[(2)] = null);

(statearr_50089_50875[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50075 === (22))){
var state_50074__$1 = state_50074;
var statearr_50090_50876 = state_50074__$1;
(statearr_50090_50876[(2)] = null);

(statearr_50090_50876[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50075 === (6))){
var inst_50015 = (state_50074[(13)]);
var inst_50024 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_50015) : f.call(null,inst_50015));
var inst_50025 = cljs.core.seq(inst_50024);
var inst_50026 = inst_50025;
var inst_50027 = null;
var inst_50028 = (0);
var inst_50029 = (0);
var state_50074__$1 = (function (){var statearr_50091 = state_50074;
(statearr_50091[(8)] = inst_50028);

(statearr_50091[(9)] = inst_50029);

(statearr_50091[(10)] = inst_50027);

(statearr_50091[(11)] = inst_50026);

return statearr_50091;
})();
var statearr_50092_50880 = state_50074__$1;
(statearr_50092_50880[(2)] = null);

(statearr_50092_50880[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50075 === (17))){
var inst_50040 = (state_50074[(7)]);
var inst_50044 = cljs.core.chunk_first(inst_50040);
var inst_50045 = cljs.core.chunk_rest(inst_50040);
var inst_50046 = cljs.core.count(inst_50044);
var inst_50026 = inst_50045;
var inst_50027 = inst_50044;
var inst_50028 = inst_50046;
var inst_50029 = (0);
var state_50074__$1 = (function (){var statearr_50093 = state_50074;
(statearr_50093[(8)] = inst_50028);

(statearr_50093[(9)] = inst_50029);

(statearr_50093[(10)] = inst_50027);

(statearr_50093[(11)] = inst_50026);

return statearr_50093;
})();
var statearr_50094_50881 = state_50074__$1;
(statearr_50094_50881[(2)] = null);

(statearr_50094_50881[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50075 === (3))){
var inst_50072 = (state_50074[(2)]);
var state_50074__$1 = state_50074;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50074__$1,inst_50072);
} else {
if((state_val_50075 === (12))){
var inst_50060 = (state_50074[(2)]);
var state_50074__$1 = state_50074;
var statearr_50095_50882 = state_50074__$1;
(statearr_50095_50882[(2)] = inst_50060);

(statearr_50095_50882[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50075 === (2))){
var state_50074__$1 = state_50074;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50074__$1,(4),in$);
} else {
if((state_val_50075 === (23))){
var inst_50068 = (state_50074[(2)]);
var state_50074__$1 = state_50074;
var statearr_50096_50883 = state_50074__$1;
(statearr_50096_50883[(2)] = inst_50068);

(statearr_50096_50883[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50075 === (19))){
var inst_50055 = (state_50074[(2)]);
var state_50074__$1 = state_50074;
var statearr_50097_50885 = state_50074__$1;
(statearr_50097_50885[(2)] = inst_50055);

(statearr_50097_50885[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50075 === (11))){
var inst_50026 = (state_50074[(11)]);
var inst_50040 = (state_50074[(7)]);
var inst_50040__$1 = cljs.core.seq(inst_50026);
var state_50074__$1 = (function (){var statearr_50098 = state_50074;
(statearr_50098[(7)] = inst_50040__$1);

return statearr_50098;
})();
if(inst_50040__$1){
var statearr_50099_50886 = state_50074__$1;
(statearr_50099_50886[(1)] = (14));

} else {
var statearr_50100_50887 = state_50074__$1;
(statearr_50100_50887[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50075 === (9))){
var inst_50062 = (state_50074[(2)]);
var inst_50063 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_50074__$1 = (function (){var statearr_50101 = state_50074;
(statearr_50101[(15)] = inst_50062);

return statearr_50101;
})();
if(cljs.core.truth_(inst_50063)){
var statearr_50102_50888 = state_50074__$1;
(statearr_50102_50888[(1)] = (21));

} else {
var statearr_50103_50889 = state_50074__$1;
(statearr_50103_50889[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50075 === (5))){
var inst_50018 = cljs.core.async.close_BANG_(out);
var state_50074__$1 = state_50074;
var statearr_50104_50890 = state_50074__$1;
(statearr_50104_50890[(2)] = inst_50018);

(statearr_50104_50890[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50075 === (14))){
var inst_50040 = (state_50074[(7)]);
var inst_50042 = cljs.core.chunked_seq_QMARK_(inst_50040);
var state_50074__$1 = state_50074;
if(inst_50042){
var statearr_50105_50891 = state_50074__$1;
(statearr_50105_50891[(1)] = (17));

} else {
var statearr_50106_50892 = state_50074__$1;
(statearr_50106_50892[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50075 === (16))){
var inst_50058 = (state_50074[(2)]);
var state_50074__$1 = state_50074;
var statearr_50107_50893 = state_50074__$1;
(statearr_50107_50893[(2)] = inst_50058);

(statearr_50107_50893[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50075 === (10))){
var inst_50029 = (state_50074[(9)]);
var inst_50027 = (state_50074[(10)]);
var inst_50034 = cljs.core._nth(inst_50027,inst_50029);
var state_50074__$1 = state_50074;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50074__$1,(13),out,inst_50034);
} else {
if((state_val_50075 === (18))){
var inst_50040 = (state_50074[(7)]);
var inst_50049 = cljs.core.first(inst_50040);
var state_50074__$1 = state_50074;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50074__$1,(20),out,inst_50049);
} else {
if((state_val_50075 === (8))){
var inst_50028 = (state_50074[(8)]);
var inst_50029 = (state_50074[(9)]);
var inst_50031 = (inst_50029 < inst_50028);
var inst_50032 = inst_50031;
var state_50074__$1 = state_50074;
if(cljs.core.truth_(inst_50032)){
var statearr_50108_50894 = state_50074__$1;
(statearr_50108_50894[(1)] = (10));

} else {
var statearr_50109_50895 = state_50074__$1;
(statearr_50109_50895[(1)] = (11));

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
var statearr_50110 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50110[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__48474__auto__);

(statearr_50110[(1)] = (1));

return statearr_50110;
});
var cljs$core$async$mapcat_STAR__$_state_machine__48474__auto____1 = (function (state_50074){
while(true){
var ret_value__48475__auto__ = (function (){try{while(true){
var result__48476__auto__ = switch__48472__auto__(state_50074);
if(cljs.core.keyword_identical_QMARK_(result__48476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48476__auto__;
}
break;
}
}catch (e50111){var ex__48478__auto__ = e50111;
var statearr_50112_50896 = state_50074;
(statearr_50112_50896[(2)] = ex__48478__auto__);


if(cljs.core.seq((state_50074[(4)]))){
var statearr_50113_50897 = state_50074;
(statearr_50113_50897[(1)] = cljs.core.first((state_50074[(4)])));

} else {
throw ex__48478__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50899 = state_50074;
state_50074 = G__50899;
continue;
} else {
return ret_value__48475__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__48474__auto__ = function(state_50074){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__48474__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__48474__auto____1.call(this,state_50074);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__48474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__48474__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__48474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__48474__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__48474__auto__;
})()
})();
var state__48699__auto__ = (function (){var statearr_50114 = f__48698__auto__();
(statearr_50114[(6)] = c__48697__auto__);

return statearr_50114;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48699__auto__);
}));

return c__48697__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__50116 = arguments.length;
switch (G__50116) {
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
var G__50118 = arguments.length;
switch (G__50118) {
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
var G__50120 = arguments.length;
switch (G__50120) {
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
var c__48697__auto___50912 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48698__auto__ = (function (){var switch__48472__auto__ = (function (state_50144){
var state_val_50145 = (state_50144[(1)]);
if((state_val_50145 === (7))){
var inst_50139 = (state_50144[(2)]);
var state_50144__$1 = state_50144;
var statearr_50146_50913 = state_50144__$1;
(statearr_50146_50913[(2)] = inst_50139);

(statearr_50146_50913[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50145 === (1))){
var inst_50121 = null;
var state_50144__$1 = (function (){var statearr_50147 = state_50144;
(statearr_50147[(7)] = inst_50121);

return statearr_50147;
})();
var statearr_50148_50914 = state_50144__$1;
(statearr_50148_50914[(2)] = null);

(statearr_50148_50914[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50145 === (4))){
var inst_50124 = (state_50144[(8)]);
var inst_50124__$1 = (state_50144[(2)]);
var inst_50125 = (inst_50124__$1 == null);
var inst_50126 = cljs.core.not(inst_50125);
var state_50144__$1 = (function (){var statearr_50149 = state_50144;
(statearr_50149[(8)] = inst_50124__$1);

return statearr_50149;
})();
if(inst_50126){
var statearr_50150_50915 = state_50144__$1;
(statearr_50150_50915[(1)] = (5));

} else {
var statearr_50151_50916 = state_50144__$1;
(statearr_50151_50916[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50145 === (6))){
var state_50144__$1 = state_50144;
var statearr_50152_50917 = state_50144__$1;
(statearr_50152_50917[(2)] = null);

(statearr_50152_50917[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50145 === (3))){
var inst_50141 = (state_50144[(2)]);
var inst_50142 = cljs.core.async.close_BANG_(out);
var state_50144__$1 = (function (){var statearr_50153 = state_50144;
(statearr_50153[(9)] = inst_50141);

return statearr_50153;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_50144__$1,inst_50142);
} else {
if((state_val_50145 === (2))){
var state_50144__$1 = state_50144;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50144__$1,(4),ch);
} else {
if((state_val_50145 === (11))){
var inst_50124 = (state_50144[(8)]);
var inst_50133 = (state_50144[(2)]);
var inst_50121 = inst_50124;
var state_50144__$1 = (function (){var statearr_50154 = state_50144;
(statearr_50154[(7)] = inst_50121);

(statearr_50154[(10)] = inst_50133);

return statearr_50154;
})();
var statearr_50155_50918 = state_50144__$1;
(statearr_50155_50918[(2)] = null);

(statearr_50155_50918[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50145 === (9))){
var inst_50124 = (state_50144[(8)]);
var state_50144__$1 = state_50144;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50144__$1,(11),out,inst_50124);
} else {
if((state_val_50145 === (5))){
var inst_50121 = (state_50144[(7)]);
var inst_50124 = (state_50144[(8)]);
var inst_50128 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_50124,inst_50121);
var state_50144__$1 = state_50144;
if(inst_50128){
var statearr_50157_50919 = state_50144__$1;
(statearr_50157_50919[(1)] = (8));

} else {
var statearr_50158_50920 = state_50144__$1;
(statearr_50158_50920[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50145 === (10))){
var inst_50136 = (state_50144[(2)]);
var state_50144__$1 = state_50144;
var statearr_50159_50921 = state_50144__$1;
(statearr_50159_50921[(2)] = inst_50136);

(statearr_50159_50921[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50145 === (8))){
var inst_50121 = (state_50144[(7)]);
var tmp50156 = inst_50121;
var inst_50121__$1 = tmp50156;
var state_50144__$1 = (function (){var statearr_50160 = state_50144;
(statearr_50160[(7)] = inst_50121__$1);

return statearr_50160;
})();
var statearr_50161_50922 = state_50144__$1;
(statearr_50161_50922[(2)] = null);

(statearr_50161_50922[(1)] = (2));


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
var statearr_50162 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_50162[(0)] = cljs$core$async$state_machine__48474__auto__);

(statearr_50162[(1)] = (1));

return statearr_50162;
});
var cljs$core$async$state_machine__48474__auto____1 = (function (state_50144){
while(true){
var ret_value__48475__auto__ = (function (){try{while(true){
var result__48476__auto__ = switch__48472__auto__(state_50144);
if(cljs.core.keyword_identical_QMARK_(result__48476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48476__auto__;
}
break;
}
}catch (e50163){var ex__48478__auto__ = e50163;
var statearr_50164_50923 = state_50144;
(statearr_50164_50923[(2)] = ex__48478__auto__);


if(cljs.core.seq((state_50144[(4)]))){
var statearr_50165_50924 = state_50144;
(statearr_50165_50924[(1)] = cljs.core.first((state_50144[(4)])));

} else {
throw ex__48478__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50935 = state_50144;
state_50144 = G__50935;
continue;
} else {
return ret_value__48475__auto__;
}
break;
}
});
cljs$core$async$state_machine__48474__auto__ = function(state_50144){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48474__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48474__auto____1.call(this,state_50144);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48474__auto____0;
cljs$core$async$state_machine__48474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48474__auto____1;
return cljs$core$async$state_machine__48474__auto__;
})()
})();
var state__48699__auto__ = (function (){var statearr_50166 = f__48698__auto__();
(statearr_50166[(6)] = c__48697__auto___50912);

return statearr_50166;
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
var G__50168 = arguments.length;
switch (G__50168) {
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
var c__48697__auto___50937 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48698__auto__ = (function (){var switch__48472__auto__ = (function (state_50206){
var state_val_50207 = (state_50206[(1)]);
if((state_val_50207 === (7))){
var inst_50202 = (state_50206[(2)]);
var state_50206__$1 = state_50206;
var statearr_50208_50938 = state_50206__$1;
(statearr_50208_50938[(2)] = inst_50202);

(statearr_50208_50938[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50207 === (1))){
var inst_50169 = (new Array(n));
var inst_50170 = inst_50169;
var inst_50171 = (0);
var state_50206__$1 = (function (){var statearr_50209 = state_50206;
(statearr_50209[(7)] = inst_50170);

(statearr_50209[(8)] = inst_50171);

return statearr_50209;
})();
var statearr_50210_50939 = state_50206__$1;
(statearr_50210_50939[(2)] = null);

(statearr_50210_50939[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50207 === (4))){
var inst_50174 = (state_50206[(9)]);
var inst_50174__$1 = (state_50206[(2)]);
var inst_50175 = (inst_50174__$1 == null);
var inst_50176 = cljs.core.not(inst_50175);
var state_50206__$1 = (function (){var statearr_50211 = state_50206;
(statearr_50211[(9)] = inst_50174__$1);

return statearr_50211;
})();
if(inst_50176){
var statearr_50212_50940 = state_50206__$1;
(statearr_50212_50940[(1)] = (5));

} else {
var statearr_50213_50941 = state_50206__$1;
(statearr_50213_50941[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50207 === (15))){
var inst_50196 = (state_50206[(2)]);
var state_50206__$1 = state_50206;
var statearr_50214_50942 = state_50206__$1;
(statearr_50214_50942[(2)] = inst_50196);

(statearr_50214_50942[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50207 === (13))){
var state_50206__$1 = state_50206;
var statearr_50215_50943 = state_50206__$1;
(statearr_50215_50943[(2)] = null);

(statearr_50215_50943[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50207 === (6))){
var inst_50171 = (state_50206[(8)]);
var inst_50192 = (inst_50171 > (0));
var state_50206__$1 = state_50206;
if(cljs.core.truth_(inst_50192)){
var statearr_50216_50950 = state_50206__$1;
(statearr_50216_50950[(1)] = (12));

} else {
var statearr_50217_50951 = state_50206__$1;
(statearr_50217_50951[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50207 === (3))){
var inst_50204 = (state_50206[(2)]);
var state_50206__$1 = state_50206;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50206__$1,inst_50204);
} else {
if((state_val_50207 === (12))){
var inst_50170 = (state_50206[(7)]);
var inst_50194 = cljs.core.vec(inst_50170);
var state_50206__$1 = state_50206;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50206__$1,(15),out,inst_50194);
} else {
if((state_val_50207 === (2))){
var state_50206__$1 = state_50206;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50206__$1,(4),ch);
} else {
if((state_val_50207 === (11))){
var inst_50186 = (state_50206[(2)]);
var inst_50187 = (new Array(n));
var inst_50170 = inst_50187;
var inst_50171 = (0);
var state_50206__$1 = (function (){var statearr_50218 = state_50206;
(statearr_50218[(7)] = inst_50170);

(statearr_50218[(8)] = inst_50171);

(statearr_50218[(10)] = inst_50186);

return statearr_50218;
})();
var statearr_50219_50955 = state_50206__$1;
(statearr_50219_50955[(2)] = null);

(statearr_50219_50955[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50207 === (9))){
var inst_50170 = (state_50206[(7)]);
var inst_50184 = cljs.core.vec(inst_50170);
var state_50206__$1 = state_50206;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50206__$1,(11),out,inst_50184);
} else {
if((state_val_50207 === (5))){
var inst_50170 = (state_50206[(7)]);
var inst_50171 = (state_50206[(8)]);
var inst_50179 = (state_50206[(11)]);
var inst_50174 = (state_50206[(9)]);
var inst_50178 = (inst_50170[inst_50171] = inst_50174);
var inst_50179__$1 = (inst_50171 + (1));
var inst_50180 = (inst_50179__$1 < n);
var state_50206__$1 = (function (){var statearr_50220 = state_50206;
(statearr_50220[(12)] = inst_50178);

(statearr_50220[(11)] = inst_50179__$1);

return statearr_50220;
})();
if(cljs.core.truth_(inst_50180)){
var statearr_50221_50957 = state_50206__$1;
(statearr_50221_50957[(1)] = (8));

} else {
var statearr_50222_50958 = state_50206__$1;
(statearr_50222_50958[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50207 === (14))){
var inst_50199 = (state_50206[(2)]);
var inst_50200 = cljs.core.async.close_BANG_(out);
var state_50206__$1 = (function (){var statearr_50224 = state_50206;
(statearr_50224[(13)] = inst_50199);

return statearr_50224;
})();
var statearr_50225_50974 = state_50206__$1;
(statearr_50225_50974[(2)] = inst_50200);

(statearr_50225_50974[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50207 === (10))){
var inst_50190 = (state_50206[(2)]);
var state_50206__$1 = state_50206;
var statearr_50226_50975 = state_50206__$1;
(statearr_50226_50975[(2)] = inst_50190);

(statearr_50226_50975[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50207 === (8))){
var inst_50170 = (state_50206[(7)]);
var inst_50179 = (state_50206[(11)]);
var tmp50223 = inst_50170;
var inst_50170__$1 = tmp50223;
var inst_50171 = inst_50179;
var state_50206__$1 = (function (){var statearr_50227 = state_50206;
(statearr_50227[(7)] = inst_50170__$1);

(statearr_50227[(8)] = inst_50171);

return statearr_50227;
})();
var statearr_50228_50976 = state_50206__$1;
(statearr_50228_50976[(2)] = null);

(statearr_50228_50976[(1)] = (2));


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
var statearr_50229 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50229[(0)] = cljs$core$async$state_machine__48474__auto__);

(statearr_50229[(1)] = (1));

return statearr_50229;
});
var cljs$core$async$state_machine__48474__auto____1 = (function (state_50206){
while(true){
var ret_value__48475__auto__ = (function (){try{while(true){
var result__48476__auto__ = switch__48472__auto__(state_50206);
if(cljs.core.keyword_identical_QMARK_(result__48476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48476__auto__;
}
break;
}
}catch (e50230){var ex__48478__auto__ = e50230;
var statearr_50231_50977 = state_50206;
(statearr_50231_50977[(2)] = ex__48478__auto__);


if(cljs.core.seq((state_50206[(4)]))){
var statearr_50232_50978 = state_50206;
(statearr_50232_50978[(1)] = cljs.core.first((state_50206[(4)])));

} else {
throw ex__48478__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50979 = state_50206;
state_50206 = G__50979;
continue;
} else {
return ret_value__48475__auto__;
}
break;
}
});
cljs$core$async$state_machine__48474__auto__ = function(state_50206){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48474__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48474__auto____1.call(this,state_50206);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48474__auto____0;
cljs$core$async$state_machine__48474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48474__auto____1;
return cljs$core$async$state_machine__48474__auto__;
})()
})();
var state__48699__auto__ = (function (){var statearr_50233 = f__48698__auto__();
(statearr_50233[(6)] = c__48697__auto___50937);

return statearr_50233;
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
var G__50235 = arguments.length;
switch (G__50235) {
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
var c__48697__auto___50987 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__48698__auto__ = (function (){var switch__48472__auto__ = (function (state_50280){
var state_val_50281 = (state_50280[(1)]);
if((state_val_50281 === (7))){
var inst_50276 = (state_50280[(2)]);
var state_50280__$1 = state_50280;
var statearr_50282_50988 = state_50280__$1;
(statearr_50282_50988[(2)] = inst_50276);

(statearr_50282_50988[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50281 === (1))){
var inst_50236 = [];
var inst_50237 = inst_50236;
var inst_50238 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_50280__$1 = (function (){var statearr_50283 = state_50280;
(statearr_50283[(7)] = inst_50238);

(statearr_50283[(8)] = inst_50237);

return statearr_50283;
})();
var statearr_50284_50995 = state_50280__$1;
(statearr_50284_50995[(2)] = null);

(statearr_50284_50995[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50281 === (4))){
var inst_50241 = (state_50280[(9)]);
var inst_50241__$1 = (state_50280[(2)]);
var inst_50242 = (inst_50241__$1 == null);
var inst_50243 = cljs.core.not(inst_50242);
var state_50280__$1 = (function (){var statearr_50285 = state_50280;
(statearr_50285[(9)] = inst_50241__$1);

return statearr_50285;
})();
if(inst_50243){
var statearr_50286_50996 = state_50280__$1;
(statearr_50286_50996[(1)] = (5));

} else {
var statearr_50287_50997 = state_50280__$1;
(statearr_50287_50997[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50281 === (15))){
var inst_50237 = (state_50280[(8)]);
var inst_50268 = cljs.core.vec(inst_50237);
var state_50280__$1 = state_50280;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50280__$1,(18),out,inst_50268);
} else {
if((state_val_50281 === (13))){
var inst_50263 = (state_50280[(2)]);
var state_50280__$1 = state_50280;
var statearr_50288_50998 = state_50280__$1;
(statearr_50288_50998[(2)] = inst_50263);

(statearr_50288_50998[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50281 === (6))){
var inst_50237 = (state_50280[(8)]);
var inst_50265 = inst_50237.length;
var inst_50266 = (inst_50265 > (0));
var state_50280__$1 = state_50280;
if(cljs.core.truth_(inst_50266)){
var statearr_50289_50999 = state_50280__$1;
(statearr_50289_50999[(1)] = (15));

} else {
var statearr_50290_51000 = state_50280__$1;
(statearr_50290_51000[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50281 === (17))){
var inst_50273 = (state_50280[(2)]);
var inst_50274 = cljs.core.async.close_BANG_(out);
var state_50280__$1 = (function (){var statearr_50291 = state_50280;
(statearr_50291[(10)] = inst_50273);

return statearr_50291;
})();
var statearr_50292_51001 = state_50280__$1;
(statearr_50292_51001[(2)] = inst_50274);

(statearr_50292_51001[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50281 === (3))){
var inst_50278 = (state_50280[(2)]);
var state_50280__$1 = state_50280;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50280__$1,inst_50278);
} else {
if((state_val_50281 === (12))){
var inst_50237 = (state_50280[(8)]);
var inst_50256 = cljs.core.vec(inst_50237);
var state_50280__$1 = state_50280;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50280__$1,(14),out,inst_50256);
} else {
if((state_val_50281 === (2))){
var state_50280__$1 = state_50280;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50280__$1,(4),ch);
} else {
if((state_val_50281 === (11))){
var inst_50237 = (state_50280[(8)]);
var inst_50245 = (state_50280[(11)]);
var inst_50241 = (state_50280[(9)]);
var inst_50253 = inst_50237.push(inst_50241);
var tmp50293 = inst_50237;
var inst_50237__$1 = tmp50293;
var inst_50238 = inst_50245;
var state_50280__$1 = (function (){var statearr_50294 = state_50280;
(statearr_50294[(12)] = inst_50253);

(statearr_50294[(7)] = inst_50238);

(statearr_50294[(8)] = inst_50237__$1);

return statearr_50294;
})();
var statearr_50295_51008 = state_50280__$1;
(statearr_50295_51008[(2)] = null);

(statearr_50295_51008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50281 === (9))){
var inst_50238 = (state_50280[(7)]);
var inst_50249 = cljs.core.keyword_identical_QMARK_(inst_50238,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_50280__$1 = state_50280;
var statearr_50296_51009 = state_50280__$1;
(statearr_50296_51009[(2)] = inst_50249);

(statearr_50296_51009[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50281 === (5))){
var inst_50238 = (state_50280[(7)]);
var inst_50245 = (state_50280[(11)]);
var inst_50241 = (state_50280[(9)]);
var inst_50246 = (state_50280[(13)]);
var inst_50245__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_50241) : f.call(null,inst_50241));
var inst_50246__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_50245__$1,inst_50238);
var state_50280__$1 = (function (){var statearr_50297 = state_50280;
(statearr_50297[(11)] = inst_50245__$1);

(statearr_50297[(13)] = inst_50246__$1);

return statearr_50297;
})();
if(inst_50246__$1){
var statearr_50298_51010 = state_50280__$1;
(statearr_50298_51010[(1)] = (8));

} else {
var statearr_50299_51011 = state_50280__$1;
(statearr_50299_51011[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50281 === (14))){
var inst_50245 = (state_50280[(11)]);
var inst_50241 = (state_50280[(9)]);
var inst_50258 = (state_50280[(2)]);
var inst_50259 = [];
var inst_50260 = inst_50259.push(inst_50241);
var inst_50237 = inst_50259;
var inst_50238 = inst_50245;
var state_50280__$1 = (function (){var statearr_50300 = state_50280;
(statearr_50300[(7)] = inst_50238);

(statearr_50300[(14)] = inst_50258);

(statearr_50300[(8)] = inst_50237);

(statearr_50300[(15)] = inst_50260);

return statearr_50300;
})();
var statearr_50301_51012 = state_50280__$1;
(statearr_50301_51012[(2)] = null);

(statearr_50301_51012[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50281 === (16))){
var state_50280__$1 = state_50280;
var statearr_50302_51013 = state_50280__$1;
(statearr_50302_51013[(2)] = null);

(statearr_50302_51013[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50281 === (10))){
var inst_50251 = (state_50280[(2)]);
var state_50280__$1 = state_50280;
if(cljs.core.truth_(inst_50251)){
var statearr_50303_51014 = state_50280__$1;
(statearr_50303_51014[(1)] = (11));

} else {
var statearr_50304_51015 = state_50280__$1;
(statearr_50304_51015[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50281 === (18))){
var inst_50270 = (state_50280[(2)]);
var state_50280__$1 = state_50280;
var statearr_50305_51016 = state_50280__$1;
(statearr_50305_51016[(2)] = inst_50270);

(statearr_50305_51016[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50281 === (8))){
var inst_50246 = (state_50280[(13)]);
var state_50280__$1 = state_50280;
var statearr_50306_51017 = state_50280__$1;
(statearr_50306_51017[(2)] = inst_50246);

(statearr_50306_51017[(1)] = (10));


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
var statearr_50307 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50307[(0)] = cljs$core$async$state_machine__48474__auto__);

(statearr_50307[(1)] = (1));

return statearr_50307;
});
var cljs$core$async$state_machine__48474__auto____1 = (function (state_50280){
while(true){
var ret_value__48475__auto__ = (function (){try{while(true){
var result__48476__auto__ = switch__48472__auto__(state_50280);
if(cljs.core.keyword_identical_QMARK_(result__48476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48476__auto__;
}
break;
}
}catch (e50308){var ex__48478__auto__ = e50308;
var statearr_50309_51018 = state_50280;
(statearr_50309_51018[(2)] = ex__48478__auto__);


if(cljs.core.seq((state_50280[(4)]))){
var statearr_50310_51019 = state_50280;
(statearr_50310_51019[(1)] = cljs.core.first((state_50280[(4)])));

} else {
throw ex__48478__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__48475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51022 = state_50280;
state_50280 = G__51022;
continue;
} else {
return ret_value__48475__auto__;
}
break;
}
});
cljs$core$async$state_machine__48474__auto__ = function(state_50280){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48474__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48474__auto____1.call(this,state_50280);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48474__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48474__auto____0;
cljs$core$async$state_machine__48474__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48474__auto____1;
return cljs$core$async$state_machine__48474__auto__;
})()
})();
var state__48699__auto__ = (function (){var statearr_50311 = f__48698__auto__();
(statearr_50311[(6)] = c__48697__auto___50987);

return statearr_50311;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__48699__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map

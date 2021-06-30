goog.loadModule(function(exports) {
  "use strict";
  goog.module("goog.html.SafeScript");
  goog.module.declareLegacyNamespace();
  const Const = goog.require("goog.string.Const");
  const TypedString = goog.require("goog.string.TypedString");
  const trustedtypes = goog.require("goog.html.trustedtypes");
  const {fail} = goog.require("goog.asserts");
  const CONSTRUCTOR_TOKEN_PRIVATE = {};
  class SafeScript {
    constructor(value, token) {
      this.privateDoNotAccessOrElseSafeScriptWrappedValue_ = token === CONSTRUCTOR_TOKEN_PRIVATE ? value : "";
      this.implementsGoogStringTypedString = true;
    }
    static fromConstant(script) {
      const scriptString = Const.unwrap(script);
      if (scriptString.length === 0) {
        return SafeScript.EMPTY;
      }
      return SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(scriptString);
    }
    static fromConstantAndArgs(code, var_args) {
      const args = [];
      for (let i = 1; i < arguments.length; i++) {
        args.push(SafeScript.stringify_(arguments[i]));
      }
      return SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse("(" + Const.unwrap(code) + ")(" + args.join(", ") + ");");
    }
    static fromJson(val) {
      return SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(SafeScript.stringify_(val));
    }
    getTypedStringValue() {
      return this.privateDoNotAccessOrElseSafeScriptWrappedValue_.toString();
    }
    static unwrap(safeScript) {
      return SafeScript.unwrapTrustedScript(safeScript).toString();
    }
    static unwrapTrustedScript(safeScript) {
      if (safeScript instanceof SafeScript && safeScript.constructor === SafeScript) {
        return safeScript.privateDoNotAccessOrElseSafeScriptWrappedValue_;
      } else {
        fail("expected object of type SafeScript, got '" + safeScript + "' of type " + goog.typeOf(safeScript));
        return "type_error:SafeScript";
      }
    }
    static stringify_(val) {
      const json = JSON.stringify(val);
      return json.replace(/</g, "\\x3c");
    }
    static createSafeScriptSecurityPrivateDoNotAccessOrElse(script) {
      const policy = trustedtypes.getPolicyPrivateDoNotAccessOrElse();
      const trustedScript = policy ? policy.createScript(script) : script;
      return new SafeScript(trustedScript, CONSTRUCTOR_TOKEN_PRIVATE);
    }
  }
  if (goog.DEBUG) {
    SafeScript.prototype.toString = function() {
      return "SafeScript{" + this.privateDoNotAccessOrElseSafeScriptWrappedValue_ + "}";
    };
  }
  SafeScript.EMPTY = {valueOf:function() {
    return SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse("");
  }, }.valueOf();
  exports = SafeScript;
  return exports;
});

//# sourceMappingURL=goog.html.safescript.js.map

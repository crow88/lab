/**
* define primitive functions
 */
define(['jquery'], function($) {

  return {
    returnTrue: function() { return true; },
    returnFalse: function() { return false; },
    returnEmptyObject: function() { return {}; },
    returnResolvedPromise: function() { return new $.Deferred().resolve().promise(); },
    returnRejectedPromise: function() { return new $.Deferred().reject().promise(); }
  };

});

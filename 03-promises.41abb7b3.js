!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in t){var r=t[e];delete t[e];var o={id:e,exports:{}};return n[e]=o,r.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){t[e]=n},e.parcelRequired7c6=r);var o=r("h6c0i"),i=document.querySelector(".form");i.addEventListener("submit",(function(e){e.preventDefault(),function(){for(var e=function(e){var n=(a.delay+=a.step)-a.step,t=n;if((n||e)<=0)return o.Notify.info("values must be positive"),"break";setTimeout((function(){!function(e,n){Math.random()>.3?function(e,n){o.Notify.success("Fullfilled promise ".concat(e," in ").concat(n," ms"))}(e,n):function(e,n){o.Notify.failure("Rejected promise ".concat(e," in ").concat(n," ms"))}(e,n)}(e,n)}),t)},n=1;n<=a.amount;n+=1){if("break"===e(n))break}}(),e.currentTarget.reset()})),i.addEventListener("input",(function(e){a[e.target.name]=Number(e.target.value)}));var a={}}();
//# sourceMappingURL=03-promises.41abb7b3.js.map
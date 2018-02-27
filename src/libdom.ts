((win, doc) => {
  'use strict';

  const DOM = (elements) => {
    this.element = doc.querySelectorAll(elements);
  };

  /*
   * @ EventListeners
   *
   */

  DOM.prototype.on = on(eventType, callback) => {
    Array.prototype.forEach.call(this.element, (item, index) => {
      item.addEventListener(eventType, callback, 'false');
    });
  };

  DOM.prototype.off = off(eventType, callback) => {
    Array.prototype.forEach.call(this.element, (item, index) => {
      item.removeEventListener(eventType, callback, 'false');
    });
  };
})(window, document);

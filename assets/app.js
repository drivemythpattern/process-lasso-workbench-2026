/**
 * ProcessLasso — Pages helper (UI only).
 * Keyword: process lasso
 */
(function (global) {
  'use strict';

  var Product = {
    name: 'ProcessLasso',
    keyword: 'process lasso',
    channel: 'github-pages'
  };

  function ready(fn) {
    if (document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
  }

  function bindDownload(btn, url) {
    if (!btn || !url) return;
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      window.location.href = url;
    });
  }

  global.ProcessLassoUI = { Product: Product, ready: ready, bindDownload: bindDownload };
})(typeof window !== 'undefined' ? window : globalThis);

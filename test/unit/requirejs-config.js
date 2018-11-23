'use strict';

requirejs.config({
  baseUrl: '../../src/',
  paths: {
    angular: './../../node_modules/angular/angular',
    chai: './../../node_modules/chai/chai',
    underscore: './../../node_modules/underscore/underscore',
    jquery: './../../node_modules/jquery/dist/jquery',
    qlik: './../../test/unit/stubs/qlik.stub',
    text: './../../node_modules/requirejs-text/text'
  },
  shim: {
    angular: {
      deps: ['jquery'],
      exports: 'angular'
    },
    underscore: {
      exports: '_'
    },
    qlik: {
      deps: ['angular']
    }
  }
});

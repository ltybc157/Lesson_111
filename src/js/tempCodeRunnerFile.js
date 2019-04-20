

import { polyfill } from 'es6-promise'; polyfill();
require('formdata-polyfill');
//require('es6-promise').polyfill();
window.addEventListener('DOMContentLoaded', function() {
    'use strict';

let form = require('./parts/form.js'),
times = require('./parts/timer.js'),
tabs = require('./parts/tabs.js'),
script = require('./parts/script.js'),
pictire = require('./parts/picture.js');



form();
times();
tabs();
script();
pictire();

});
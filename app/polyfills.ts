// Polyfills
// (these modules are what are in 'angular2/bundles/angular2-polyfills' so don't use that here)

// import 'ie-shim'; // Internet Explorer
// import 'es6-shim';
// import 'es6-promise';
// import 'es7-reflect-metadata';

// Prefer CoreJS over the polyfills above

import 'core-js/es6';
import 'core-js/es7/reflect';
require('zone.js/dist/zone');

// Typescript emit helpers polyfill
/*
* Why?

 If you are using one of following ES2015/ES.next features with Typescript:

 inheritance via class Foo extends Moo{}
 async/await
 decorators via experimentalDecorators
 metadata reflection via emitDecoratorMetadata
 Typescript will generate helper code in every one file. This can be a problem when dealing with code coverage or payload size of you library/app

 To mitigate this problem Typescript starting from version 1.8 allow us to specify noEmitHelpers: truewhich wont generate these helpers.

 And that's where this little utility comes into play, it defines those helpers just once for whole app.
* */
 import 'ts-helpers';

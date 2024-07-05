'use strict';

let myNan = NaN;
let myUndef;
let myNull = null;
let myZero = 0;
let myEmptyString = '';


function show(iInput) {
  console.log( typeof iInput, iInput, Boolean(iInput), !iInput);
}

this.show(myNan);
this.show(myUndef);
this.show(myNull);
this.show(myZero);
this.show(myEmptyString);
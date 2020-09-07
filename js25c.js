'use strict';

    console.log('Truth table for conjunction');
    console.log('var1\t var2\t var1 && var 2');
var var1 = true;
var var2 = true;
console.log(var1 + '\t' + var2 +'\t'+ (var1 && var2));
var1 = false;
console.log(var1 + '\t' + var2 +'\t'+ (var1 && var2));
var1 =true;
var2 = false;
console.log(var1 + '\t' + var2 +'\t'+ (var1 && var2));
var1 = false;
console.log(var1 + '\t' + var2 +'\t'+ (var1 && var2));

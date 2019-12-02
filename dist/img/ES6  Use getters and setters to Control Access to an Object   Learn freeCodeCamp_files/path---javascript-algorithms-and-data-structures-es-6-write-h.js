webpackJsonp([0xfe8d29adabe],{3968:function(e,t){e.exports={data:{challengeNode:{title:"Write Higher Order Arrow Functions",description:["It's time we see how powerful arrow functions are when processing data.","Arrow functions work really well with higher order functions, such as <code>map()</code>, <code>filter()</code>, and <code>reduce()</code>, that take other functions as arguments for processing collections of data.","Read the following code:","<blockquote>FBPosts.filter(function(post) {<br>&nbsp;&nbsp;return post.thumbnail !== null && post.shares > 100 && post.likes > 500;<br>})</blockquote>","We have written this with <code>filter()</code> to at least make it somewhat readable. Now compare it to the following code which uses arrow function syntax instead:","<blockquote>FBPosts.filter((post) => post.thumbnail !== null && post.shares > 100 && post.likes > 500)</blockquote>","This code is more succinct and accomplishes the same task with fewer lines of code.","<hr>","Use arrow function syntax to compute the square of only the positive integers (decimal numbers are not integers) in the array <code>realNumberArray</code> and store the new array in the variable <code>squaredIntegers</code>."],challengeType:1,videoUrl:null,fields:{slug:"/javascript-algorithms-and-data-structures/es6/write-higher-order-arrow-functions",blockName:"ES6",tests:[{text:"<code>squaredIntegers</code> should be a constant variable (by using <code>const</code>).",testString:"getUserInput => assert(getUserInput('index').match(/const\\s+squaredIntegers/g), '<code>squaredIntegers</code> should be a constant variable (by using <code>const</code>).');"},{text:"<code>squaredIntegers</code> should be an <code>array</code>",testString:"assert(Array.isArray(squaredIntegers), '<code>squaredIntegers</code> should be an <code>array</code>');"},{text:"<code>squaredIntegers</code> should be <code>[16, 1764, 36]</code>",testString:"assert.deepStrictEqual(squaredIntegers, [16, 1764, 36], '<code>squaredIntegers</code> should be <code>[16, 1764, 36]</code>');"},{text:"<code>function</code> keyword was not used.",testString:"getUserInput => assert(!getUserInput('index').match(/function/g), '<code>function</code> keyword was not used.');"},{text:"loop should not be used",testString:"getUserInput => assert(!getUserInput('index').match(/(for)|(while)/g), 'loop should not be used');"},{text:"<code>map</code>, <code>filter</code>, or <code>reduce</code> should be used",testString:"getUserInput => assert(getUserInput('index').match(/map|filter|reduce/g), '<code>map</code>, <code>filter</code>, or <code>reduce</code> should be used');"}]},required:[],files:{indexhtml:null,indexjs:{key:"indexjs",ext:"js",name:"index",contents:'const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];\nconst squareList = (arr) => {\n  "use strict";\n  // change code below this line\n  const squaredIntegers = arr;\n  // change code above this line\n  return squaredIntegers;\n};\n// test your code\nconst squaredIntegers = squareList(realNumberArray);\nconsole.log(squaredIntegers);',head:"",tail:""},indexjsx:null}}},pathContext:{challengeMeta:{introPath:"",template:null,required:[],nextChallengePath:"/javascript-algorithms-and-data-structures/es6/set-default-parameters-for-your-functions",id:"587d7b88367417b2b2512b45"},slug:"/javascript-algorithms-and-data-structures/es6/write-higher-order-arrow-functions"}}}});
//# sourceMappingURL=path---javascript-algorithms-and-data-structures-es-6-write-higher-order-arrow-functions-24abfb95b84063bdc975.js.map
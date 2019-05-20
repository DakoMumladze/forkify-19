webpackJsonp([0xad562fc484f5],{3956:function(e,t){e.exports={data:{challengeNode:{title:"Use Destructuring Assignment to Assign Variables from Nested Objects",description:["We can similarly destructure <em>nested</em> objects into variables.","Consider the following code:","<blockquote>const a = {<br>&nbsp;&nbsp;start: { x: 5, y: 6},<br>&nbsp;&nbsp;end: { x: 6, y: -9 }<br>};<br>const { start : { x: startX, y: startY }} = a;<br>console.log(startX, startY); // 5, 6</blockquote>","In the example above, the variable <code>start</code> is assigned the value of <code>a.start</code>, which is also an object.","<hr>","Use destructuring assignment to obtain <code>max</code> of <code>forecast.tomorrow</code> and assign it to <code>maxOfTomorrow</code>."],challengeType:1,videoUrl:null,fields:{slug:"/javascript-algorithms-and-data-structures/es6/use-destructuring-assignment-to-assign-variables-from-nested-objects",blockName:"ES6",tests:[{text:"<code>maxOfTomorrow</code> equals <code>84.6</code>",testString:"assert(getMaxOfTmrw(LOCAL_FORECAST) === 84.6, '<code>maxOfTomorrow</code> equals <code>84.6</code>');"},{text:"nested destructuring was used",testString:"getUserInput => assert(getUserInput('index').match(/\\{\\s*tomorrow\\s*:\\s*\\{\\s*max\\s*:\\s*maxOfTomorrow\\s*\\}\\s*\\}\\s*=\\s*forecast/g),'nested destructuring was used');"}]},required:[],files:{indexhtml:null,indexjs:{key:"indexjs",ext:"js",name:"index",contents:'const LOCAL_FORECAST = {\n  today: { min: 72, max: 83 },\n  tomorrow: { min: 73.3, max: 84.6 }\n};\n\nfunction getMaxOfTmrw(forecast) {\n  "use strict";\n  // change code below this line\n  const maxOfTomorrow = undefined; // change this line\n  // change code above this line\n  return maxOfTomorrow;\n}\n\nconsole.log(getMaxOfTmrw(LOCAL_FORECAST)); // should be 84.6',head:"",tail:""},indexjsx:null}}},pathContext:{challengeMeta:{introPath:"",template:null,required:[],nextChallengePath:"/javascript-algorithms-and-data-structures/es6/use-destructuring-assignment-to-assign-variables-from-arrays",id:"587d7b89367417b2b2512b4a"},slug:"/javascript-algorithms-and-data-structures/es6/use-destructuring-assignment-to-assign-variables-from-nested-objects"}}}});
//# sourceMappingURL=path---javascript-algorithms-and-data-structures-es-6-use-destructuring-assignment-to-assign-variables-from-nested-objects-2a332ea5330309139dfc.js.map
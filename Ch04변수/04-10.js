console.log(score); // 런타임 이후에 실행됨 #2 :: undefined

score=80;           // 런타임 이후에 실행됨 #3
var score;          // 런타임 이전에 실행됨. 가장 첫번째로 실행됨 #1

console.log(score); // 런타임 이후에 실행됨 #4 :: 80
// var n = 10
// var space = n - 1;


// for (var i = 0; i < n; i++) {
//     // loop for initially space,  

//     for (var j = 0; j < space; j++) {
//         process.stdout.write(" ");
//     }
    
//     for (var j = 0; j <= i; j++) 
//         process.stdout.write("*");
//     console.log();
//     space--;
// }

// // reverse order 
// space = 0;


// for (var i = n; i > 0; i--) {
    
//     for (var j = 0; j < space; j++)
//         process.stdout.write(" ");

//     for (var j= 0; j < i; j++) 
//         process.stdout.write("*");

//         // process.stdout.write('\n');
//         console.log();
//     space++;
// }

var n=10;
var c;
var k;


  for (k = 1; k <= n; k++)
  {
    for (c = 1; c <= n-k; c++)
    process.stdout.write(" ");

    for (c = 1; c <= 2*k-1; c++)
    process.stdout.write("*");

    process.stdout.write("\n");
    console.log();
  }

  for (k = 1; k <= n - 1; k++)
  {
    for (c = 1; c <= k; c++)
    process.stdout.write(" ");

    for (c = 1 ; c <= 2*(n-k)-1; c++)
    process.stdout.write("*");

    process.stdout.write("\n");
    console.log();
  }

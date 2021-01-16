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

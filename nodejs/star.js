var i;
var j;
var k;
var n=5;
for(i=1;i<=n;i++)
{
    for(j=i;j<=n;j++){
        process.stdout.write(" ");
        // console.log();
    }
    for(k=1;k<(i*2);k++){
        process.stdout.write("*");
        
    }
    process.stdout.write("\n");
}
//reverse
for(i=n;i>=1;i--)
{
    for(j=n;j>=i;j--){
        process.stdout.write(" ");
    }
    for(k=1;k<(i*2);k++){
        process.stdout.write("*");
    }
    process.stdout.write("\n");
}
console.log(); 
    

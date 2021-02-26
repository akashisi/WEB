var list = [10,20,30,40,50];
console.log(list);

sum(10,8)

function sum(a, b) 
{
    console.log("Area = ", a + b);
}

var sum=0,x;
for(x in list)
{
    sum=sum+list[x];
}
console.log("sum = ",sum);
function dt()
{
    return(new Date());
}
console.log("date is :: ",dt());



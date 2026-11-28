let obtainedmarks1 = 25;

if(obtainedmarks1>=85 && obtainedmarks1<=100)
{
    console.log("First Class");
}
else if(obtainedmarks1>=60 && obtainedmarks1<85)
{
    console.log("Second Class");
}
else if(obtainedmarks1>=45 && obtainedmarks1<60)
{
    console.log("Third Class");
}
else if(obtainedmarks1>=35 && obtainedmarks1<45)
{
    console.log("Pass");
}
else if(obtainedmarks1<35 && obtainedmarks1>=0)
{
    console.log("Fail");
}
else
{
    console.log("Invalid Marks");
}
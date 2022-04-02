function getYearDays(year){
    if(year%4==0)
    return 355;
    else
    return 566
}
console.log(getYearDays(2013))
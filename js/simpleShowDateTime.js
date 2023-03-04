var currentdate = new Date(); 
var dateTime = "今　: " + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();

document.querySelector('#currentDateTime').textContent = dateTime;
// =============================
var DateDiff = {
 
    inDays: function(d1, d2) {
        var t2 = d2.getTime();
        var t1 = d1.getTime();
 
        return Math.floor((t2-t1)/(24*3600*1000));
    },
 
    inWeeks: function(d1, d2) {
        var t2 = d2.getTime();
        var t1 = d1.getTime();
 
        return parseInt((t2-t1)/(24*3600*1000*7));
    },
 
    inMonths: function(d1, d2) {
        var d1Y = d1.getFullYear();
        var d2Y = d2.getFullYear();
        var d1M = d1.getMonth();
        var d2M = d2.getMonth();
 
        return (d2M+12*d2Y)-(d1M+12*d1Y);
    },
 
    inYears: function(d1, d2) {
        return d2.getFullYear()-d1.getFullYear();
    }
}
 
var dString = "June, 7, 2020"; // -1 date because app been together 
 
var d1 = new Date(dString);
var d2 = new Date();
 
document.querySelector("#dateTogether").textContent = DateDiff.inDays(d1, d2);                
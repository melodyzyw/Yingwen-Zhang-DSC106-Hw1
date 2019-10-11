var chart = {
   type: 'bar'
           };
var title = {
   text: 'Application Data vs. Year'   
           };    
var xAxis = {
   categories: [2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018]
           };
var yAxis = {
   min: 0,
   title: {
       text: 'NumofPeople'
              },
   stackLabels: {
       enabled: true,
       style: {
           fontWeight: 'bold',
           color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                 }
              }
           };
var legend = {
   align: 'right',
   x: -30,
   verticalAlign: 'top',
   y: 25,
   floating: true,
              
   backgroundColor: (
       Highcharts.theme && Highcharts.theme.background2) || 'white',
   borderColor: '#CCC',
   borderWidth: 1,
   shadow: false
           };   
var tooltip = {
   formatter: function () {
   return '<b>' + this.x + '</b><br/>' +
   this.series.name + ': ' + this.y + '<br/>' +
   'Total: ' + this.point.stackTotal;
              }
           };
var plotOptions = {
   column: {
       stacking: 'normal',
       dataLabels: {
           enabled: true,
           color: (Highcharts.theme && Highcharts.theme.dataLabelsColor)
                       || 'red',
           style: {
               textShadow: '0 0 3px black'
                    }
                 }
              }
           };
var credits = {
   enabled: false
           };
var series = [
   {
      name: 'Full-time Men Applied',
      data: [18147,19838,20566, 21590, 22332, 25097, 28758, 31992, 34618, 37009, 39779, 41583, 45636]
   }, 
   {
      name: 'Full-time Women Applied',
      data: [22371, 23748, 24507,25775, 25321, 25761,28351,32049,35408,38822,41047,44430,46845,52265]
   }
           ];     
     
var json = {};   
json.chart = chart; 
json.title = title;   
json.xAxis = xAxis;
json.yAxis = yAxis;
json.legend = legend;
json.tooltip = tooltip;
json.plotOptions = plotOptions;
json.credits = credits;
json.series = series;
var someVar = document.getElementById("chartPlaceHolder");
Highcharts.chart(someVar, json);
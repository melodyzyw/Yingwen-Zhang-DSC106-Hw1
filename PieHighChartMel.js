var chart = {
   plotBackgroundColor: null,
   plotBorderWidth: null,
   plotShadow: false
            };
var title = {
   text: '2018 Applicantion Data'   
            };      
var tooltip = {
   pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            };
var plotOptions = {
   pie: {
      allowPointSelect: true,
      cursor: 'pointer',
                  
      dataLabels: {
         enabled: false           
                  },
                  
      showInLegend: true
               }
};
var series = [{
   type: 'pie',
   name: 'pie chart',
   data: [
      ['Fulltime Women Applied',   52265],
      ['fulltime Men Applied',    45636],
       
               ]
            }];     
var json = {};   
json.chart = chart; 
json.title = title;     
json.tooltip = tooltip;  
json.series = series;
json.plotOptions = plotOptions;
var someVar = document.getElementById("chartPlaceHolder");
Highcharts.chart(someVar, json);
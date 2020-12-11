var stateselect3 = "US"
var Yearselect3 = "2019"


function getState3()
{
    var stateselect3 = document.getElementById("list4").value;
    console.log(stateselect3);

    Plotly.d3.json("/api/v1.0/alldrugs", function(err, rows){
        function unpack(rows, key) {
        return rows.map(function(row) { return row[key]; });
      }

    var data3 = [{
        type: 'bar',
        x: unpack(rows, 'Drug Name'),
        y: unpack(rows, 'Death Count'),
        transforms: [
        {
        type: 'filter',
        target: unpack(rows, 'Year'),
        operation: '=',
        // want to change the value below to something defined by a dropdown
        value: Yearselect3
        }, 
        {
        type: 'filter',
        target: unpack(rows, 'State'),
        // want to change the value below to something defined by a dropdown
        operation: '=',
        value: stateselect3
        },
        {
        //   type: 'filter',
        //   target: unpack(rows, 'Month'),
        //   // want to change the value below to something defined by a dropdown
        //   operation: '=',
        //   value: 'July'
        },
        {
            type: 'aggregate',
            groups: unpack(rows, 'Month'),
            aggregations: [
            {target: 'y', func: 'avg'},
            ]
        }
        ]
        }]
      

      
      var layout3 = {
          // title: "Comparison 1",
          xaxis: { title: "Drug Type"},
          yaxis: { title: "Total Deaths"}
        }
      
      Plotly.newPlot('plot3', data3, layout3)
      
    });
}
getState3();

function getYear3()
{
    var Yearselect3 = document.getElementById("list5").value;
    console.log(Yearselect3);

    Plotly.d3.json("/api/v1.0/alldrugs", function(err, rows){
        function unpack(rows, key) {
        return rows.map(function(row) { return row[key]; });
      }

    var data3 = [{
        type: 'bar',
        x: unpack(rows, 'Drug Name'),
        y: unpack(rows, 'Death Count'),
        transforms: [
        {
        type: 'filter',
        target: unpack(rows, 'Year'),
        operation: '=',
        // want to change the value below to something defined by a dropdown
        value: Yearselect3
        }, 
        {
        type: 'filter',
        target: unpack(rows, 'State'),
        // want to change the value below to something defined by a dropdown
        operation: '=',
        value: stateselect3
        },
        {
        //   type: 'filter',
        //   target: unpack(rows, 'Month'),
        //   // want to change the value below to something defined by a dropdown
        //   operation: '=',
        //   value: 'July'
        },
        {
            type: 'aggregate',
            groups: unpack(rows, 'Month'),
            aggregations: [
            {target: 'y', func: 'avg'},
            ]
        }
        ]
        }]
      

      
      var layout3 = {
          // title: "Comparison 1",
          xaxis: { title: "Drug Type"},
          yaxis: { title: "Total Deaths"}
        }
      
      Plotly.react('plot3', data3, layout3)
      
    });
}
getYear3();
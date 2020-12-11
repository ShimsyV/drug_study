var stateselect2 = "US"
var Yearselect2 = "2019"


function getState2()
{
    var stateselect2 = document.getElementById("list2").value;
    console.log(stateselect2);

    Plotly.d3.json("/api/v1.0/alldrugs", function(err, rows2){
        function unpack(rows, key) {
          // console.log('unpack: ', key,rows);
        return rows.map(function(row) { return row[key]; });
      }
      // console.log('rows2: ', rows2);
    var data2 = [{
        type: 'bar',
        x: unpack(rows2, 'drug_name'),
        y: unpack(rows2, 'death_count'),
        transforms: [
        {
        type: 'filter',
        target: unpack(rows2, 'year'),
        operation: '=',
        // want to change the value below to something defined by a dropdown
        value: Yearselect2
        }, 
        {
        type: 'filter',
        target: unpack(rows2, 'state'),
        // want to change the value below to something defined by a dropdown
        operation: '=',
        value: stateselect2
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
            groups: unpack(rows2, 'drug_name'),
            aggregations: [
            {target: 'y', func: 'sum'}
            ]
        }
        ]
        }]
      

      
      var layout2 = {
          // title: "Comparison 1",
          xaxis: { title: "Drug Type"},
          yaxis: { title: "Total Deaths"}
        }
      
      Plotly.newPlot('plot2', data2, layout2)
      
    });
}
getState2();

function getYear2()
{
    var Yearselect2 = document.getElementById("list3").value;
    console.log(Yearselect2);

    Plotly.d3.json("/api/v1.0/alldrugs", function(err, rows){
        function unpack(rows, key) {
        return rows.map(function(row) { return row[key]; });
      }

    var data2 = [{
        type: 'bar',
        x: unpack(rows, 'drug_name'),
        y: unpack(rows, 'death_count'),
        transforms: [
        {
        type: 'filter',
        target: unpack(rows, 'year'),
        operation: '=',
        // want to change the value below to something defined by a dropdown
        value: Yearselect2
        }, 
        {
        type: 'filter',
        target: unpack(rows, 'state'),
        // want to change the value below to something defined by a dropdown
        operation: '=',
        value: stateselect2
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
            groups: unpack(rows, 'drug_name'),
            aggregations: [
            {target: 'y', func: 'sum'},
            ]
        }
        ]
        }]
      

      
      var layout2 = {
          // title: "Comparison 1",
          xaxis: { title: "Drug Type"},
          yaxis: { title: "Total Deaths"}
        }
      
      Plotly.newPlot('plot2', data2, layout2)
      
    });
}
getYear2();
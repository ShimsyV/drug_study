var stateselect1 = "US"

// Main Plot in aggregate: setting state = US is a catchall from the original dataset

Plotly.d3.json("https://raw.githubusercontent.com/jebreensa/Project-2_Group12/main/static/js/data.json", function(err, rows){

  function unpack(rows, key) {
  return rows.map(function(row) { return row[key]; });
}

  var data1 = [{
      type: 'scatter',
      mode: 'lines+markers',
      x: unpack(rows, 'Year'),
      y: unpack(rows, 'Death Count'),
      transforms: [
        {
        type: 'filter',
        target: unpack(rows, 'State'),
        // want to change the value below to something defined by a dropdown
        operation: '=',
        // value: "US"
        value: stateselect1
        },
        {
        type: 'groupby',
        groups: unpack(rows, 'Drug Name'),
        styles: [
          {target: 'Cocaine ', value: {marker: {color: 'red'}}},
          {target: 'Heroin ', value: {marker: {color: 'blue'}}},
          {target: 'Methadone', value: {marker: {color: 'orange'}}},
          {target: 'Opioids ', value: {marker: {color: 'green'}}},
          {target: 'Prescription Opioids', value: {marker: {color: 'brown'}}},
          {target: 'Psychostimulants ', value: {marker: {color: 'purple'}}}
        ]
        },
        {
            type: 'aggregate',
            groups: unpack(rows, 'Year'),
            aggregations: [
            {target: 'y', func: 'avg'},
            ]
        }]
    }]

    // Barchart plot 1
    var data2 = [{
        type: 'bar',
        x: unpack(rows, 'Drug Name'),
        y: unpack(rows, 'Death Count'),
        transforms: [
          {
          type: 'filter',
          target: unpack(rows, 'Year'),
          operation: '=',
          // want to change the value below to something defined by a dropdown
          value: '2019'
          }, 
          {
          type: 'filter',
          target: unpack(rows, 'State'),
          // want to change the value below to something defined by a dropdown
          operation: '=',
          value: 'AK'
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

    // Barchart Plot 2
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
            value: '2016'
            }, 
              {
              type: 'filter',
              target: unpack(rows, 'State'),
              // want to change the value below to something defined by a dropdown
              operation: '=',
              value: 'AK'
              },
            //   {
            //   type: 'filter',
            //   target: unpack(rows, 'Month'),
            //   // want to change the value below to something defined by a dropdown
            //   operation: '=',
            //   value: 'July'
            //   },
              {
                type: 'aggregate',
                groups: unpack(rows, 'Month'),
                aggregations: [
                  {target: 'y', func: 'avg'},
                ]
             },
              ]
    
    
              
          }]

          
      

var layout1 = {
  title: "Accumulated Drug Deaths in the United States, 2016 - 2019",
  xaxis: { title: "Year"},
  yaxis: { title: "Total Deaths"}
}

var layout2 = {
    // title: "Comparison 1",
    xaxis: { title: "Drug Type"},
    yaxis: { title: "Total Deaths"}
  }

var layout3 = {
    // title: "Comparison 1",
    xaxis: { title: "Drug Type"},
    yaxis: { title: "Total Deaths"}
  }

Plotly.newPlot('plot1', data1, layout1)

Plotly.newPlot('plot2', data2, layout2)

Plotly.newPlot('plot3', data3, layout3)
});


function getState()
{
    var stateselect1 = document.getElementById("list").value;
    console.log(stateselect1);
    Plotly.react('plot1', data1, layout1);
}
getState();
Plotly.d3.csv("https://raw.githubusercontent.com/jebreensa/Project-2_Group12/main/Output/drug_final3.csv", function(err, rows){

    function unpack(rows, key) {
        return rows.map(function(row) { return row[key]; });
    }

    var allState = unpack(rows, 'State'),
        allYear = unpack(rows, 'Year'),
        allDeathCount = unpack(rows, 'Death Count'),
        listofStates = [],
        currentstate,
        currentyear = [],
        currentDeathCount = [];

    for (var i = 0; i < allState.length; i++ ){
        if (listofStates.indexOf(allState[i]) === -1 ){
            listofStates.push(allState[i]);
        }
    }

    function getStateData(chosenState) {
        currentyear = [];
        currentDeathCount = [];
        for (var i = 0 ; i < allState.length ; i++){
            if ( allState[i] === chosenState ) {
                currentyear.push(allYear[i]);
                currentDeathCount.push(allDeathCount[i]);
            }
        }
    };

    // Default State
    setBubblePlot('US');

    function setBubblePlot(chosenState) {
        getStateData(chosenState);

        var trace1 = {
            y: currentDeathCount,
            x: currentyear,
            mode: 'lines+markers',
        };

        var data = [trace1];

        var layout = {
            title:'Line and Scatter Plot',
            height: 400,
            width: 480
        };

        Plotly.newPlot('plot1', data, layout);
    };

    var innerContainer = document.querySelector('[data-num="0"'),
        plotEl = innerContainer.querySelector('.plot'),
        StateSelector = innerContainer.querySelector('.Statedata');

    function assignOptions(textArray, selector) {
        for (var i = 0; i < textArray.length;  i++) {
            var currentOption = document.createElement('option');
            currentOption.text = textArray[i];
            selector.appendChild(currentOption);
        }
    }

    assignOptions(listofStates, StateSelector);

    function updateState(){
        setBubblePlot(StateSelector.value);
    }

    StateSelector.addEventListener('change', updateState, false);
});
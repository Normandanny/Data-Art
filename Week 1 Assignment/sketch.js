let populations;
let objArray = [];
let value = [];
let valueRemapped = [];
let countryName = [];

function preload() {
    populations = loadTable("data/simpleData_noRegions.csv", "csv", "header");
}

function setup() {
    console.log(populations.getRowCount() + " total rows in table");
    for (let i = 0; i < populations.getRowCount(); i++) {
        let oldObj = populations.getRow(i).obj;
        let newObj = {};
        newObj.country = oldObj.country;
        newObj.estimate = parseInt(oldObj.estimate);
        newObj.error = parseInt(oldObj.marginOfError);
        objArray.push(newObj);
    }

    for (let i = 0; i < 10; i++) {
        value.push(objArray[i].estimate)
    }

    for (let i = 0; i < 10; i++) {
        countryName.push(objArray[i].country)
    }

    for (let i = 0; i <= 10; i++) {
        let m = map(value[i], 0, 12000000, 0, 100);
        valueRemapped.push(m);
    }

    var ctx = document.getElementById("myChart");

var myChart = new Chart(ctx, {
    data: {
        datasets: [{
            data: valueRemapped,
            backgroundColor: [
                "#ff6384", "#7CC42C", "#CACC00", "#007AD3", "#3C3C3C", "#EB7013", "#84DB45", "#AC0100", "#FF00FF", "#000000"
            ]
        }],
        labels: countryName
    },
        // type: "polarArea",
        // type: "doughnut",
        type: "pie"
});
}


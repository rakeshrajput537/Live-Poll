window.onload = function () {
    var totalVisitors = 883000;
    var visitorsData = {
        "New vs Returning Visitors": [{
            click: visitorsChartDrilldownHandler,
            cursor: "pointer",
            explodeOnClick: false,
            innerRadius: "75%",
            legendMarkerType: "square",
            name: "New vs Returning Visitors",
            radius: "100%",
            showInLegend: true,
            startAngle: 90,
            type: "doughnut",
            dataPoints: [
                { y: 778, name: "New Visitors", color: "#E7823A" },
                { y: 363040, name: "Returning Visitors", color: "#546BC1" }
            ]
        }],
        "New Visitors": [{
            color: "#E7823A",
            name: "New Visitors",
            type: "column",
            xValueFormatString: "MMM YYYY",
    
        }],
        "Returning Visitors": [{
            color: "#546BC1",
            name: "Returning Visitors",
            type: "column",
            xValueFormatString: "MMM YYYY",
        }]
    };
    
    var newVSReturningVisitorsOptions = {
        animationEnabled: true,
        theme: "light2",
        title: {
            text: "New VS Returning Visitors"
        },
        legend: {
            fontFamily: "calibri",
            fontSize: 14,
            itemTextFormatter: function (e) {
                return e.dataPoint.name + ": " + Math.round(e.dataPoint.y / totalVisitors * 100) + "%";  
            }
        },
        data: []
    };
    
    var visitorsDrilldownedChartOptions = {
        animationEnabled: true,
        theme: "light2",
        axisX: {
            labelFontColor: "#717171",
            lineColor: "#a2a2a2",
            tickColor: "#a2a2a2"
        },
        axisY: {
            gridThickness: 0,
            includeZero: false,
            labelFontColor: "#717171",
            lineColor: "#a2a2a2",
            tickColor: "#a2a2a2",
            lineThickness: 1
        },
        data: []
    };
    
    newVSReturningVisitorsOptions.data = visitorsData["New vs Returning Visitors"];
    $("#chartContainer").CanvasJSChart(newVSReturningVisitorsOptions);
    
    function visitorsChartDrilldownHandler(e) {
        e.chart.options = visitorsDrilldownedChartOptions;
        e.chart.options.data = visitorsData[e.dataPoint.name];
        e.chart.options.title = { text: e.dataPoint.name }
        e.chart.render();
        $("#backButton").toggleClass("invisible");
    }
    
    $("#backButton").click(function() { 
        $(this).toggleClass("invisible");
        newVSReturningVisitorsOptions.data = visitorsData["New vs Returning Visitors"];
        $("#chartContainer").CanvasJSChart(newVSReturningVisitorsOptions);
    });
    
    }
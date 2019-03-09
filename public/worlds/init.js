// Themes begin
am4core.useTheme(am4themes_frozen);
am4core.useTheme(am4themes_animated);
// Themes end


// Create map instance
var chart = am4core.create("chartdiv", am4maps.MapChart);

var interfaceColors = new am4core.InterfaceColorSet();

// Set map definition
chart.geodata = am4geodata_worldLow;

// Set projection
chart.projection = new am4maps.projections.Mercator();

// Export
chart.exporting.menu = new am4core.ExportMenu();

// Zoom control
chart.zoomControl = new am4maps.ZoomControl();

// Data for general and map use
var originCities = [
    {
        "id": "london",
        "title": "GAMeD City (LVL 3)",
        "destinations": ["vilnius", "reykjavik", "lisbon", "moscow", "belgrade", "ljublana", "madrid", "stockholm", "bern", "kiev", "new york"],
        "latitude": 51.5002,
        "longitude": -0.1262,
        "scale": 1.5,
        "zoomLevel": 2.74,
        "zoomLongitude": -20.1341,
        "zoomLatitude": 49.1712,
    },
    {
        "id": "vilnius",
        "title": "Andrea City (LVL3)",
        "destinations": ["london", "brussels", "prague", "athens", "dublin", "oslo", "moscow", "bratislava", "belgrade", "madrid"],
        "latitude": 54.6896,
        "longitude": 25.2799,
        "scale": 1.5,
        "zoomLevel": 4.92,
        "zoomLongitude": 15.4492,
        "zoomLatitude": 50.2631
    }
];

var destinationCities = [{
    "id": "brussels",
    "title": "Dawid (LVL 1)",
    "latitude": 50.8371,
    "longitude": 4.3676
}, {
    "id": "prague",
    "title": "Marian (LVL 1)",
    "latitude": 50.0878,
    "longitude": 14.4205
}, {
    "id": "athens",
    "title": "User2 (LVL 1)",
    "latitude": 37.9792,
    "longitude": 23.7166
}, {
    "id": "reykjavik",
    "title": "User3 (LVL 1)",
    "latitude": 64.1353,
    "longitude": -21.8952
}, {
    "id": "dublin",
    "title": "User3 (LVL 1)",
    "latitude": 53.3441,
    "longitude": -6.2675
}, {
    "id": "oslo",
    "title": "User4 (LVL 1)",
    "latitude": 59.9138,
    "longitude": 10.7387
}, {
    "id": "lisbon",
    "title": "User5 (LVL 1)",
    "latitude": 38.7072,
    "longitude": -9.1355
}, {
    "id": "moscow",
    "title": "User6 (LVL 1)",
    "latitude": 55.7558,
    "longitude": 37.6176
}, {
    "id": "belgrade",
    "title": "User7 (LVL 1)",
    "latitude": 44.8048,
    "longitude": 20.4781
}, {
    "id": "bratislava",
    "title": "User8 (LVL 1)",
    "latitude": 48.2116,
    "longitude": 17.1547
}, {
    "id": "ljublana",
    "title": "User9 (LVL 1)",
    "latitude": 46.0514,
    "longitude": 14.5060
}, {
    "id": "madrid",
    "title": "User10 (LVL 1)",
    "latitude": 40.4167,
    "longitude": -3.7033
}, {
    "id": "stockholm",
    "title": "User11 (LVL 1)",
    "latitude": 59.3328,
    "longitude": 18.0645
}, {
    "id": "bern",
    "title": "User12 (LVL 1)",
    "latitude": 46.9480,
    "longitude": 7.4481
}, {
    "id": "kiev",
    "title": "User13 (LVL 1)",
    "latitude": 50.4422,
    "longitude": 30.5367
}, {
    "id": "paris",
    "title": "User14 (LVL 1)",
    "latitude": 48.8567,
    "longitude": 2.3510
}, {
    "id": "new york",
    "title": "User15 (LVL 1)",
    "latitude": 40.43,
    "longitude": -74
}];

// Default to London view
chart.homeGeoPoint = { "longitude": originCities[0].zoomLongitude, "latitude": originCities[0].zoomLatitude };
chart.homeZoomLevel = originCities[0].zoomLevel;

var targetSVG = "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z";
//var planeSVG = "m2,106h28l24,30h72l-44,-133h35l80,132h98c21,0 21,34 0,34l-98,0 -80,134h-35l43,-133h-71l-24,30h-28l15,-47";
var planeSVG= "";
// Texts
var labelsContainer = chart.createChild(am4core.Container);
labelsContainer.isMeasured = false;
labelsContainer.x = 80;
labelsContainer.y = 27;
labelsContainer.layout = "horizontal";
labelsContainer.zIndex = 10;

var title = labelsContainer.createChild(am4core.Label);
title.text = "Users Cities";
title.fill = am4core.color("#cc0000");
title.fontSize = 20;
title.valign = "middle";
title.dy = 2;
title.marginLeft = 15;

var changeLink = chart.createChild(am4core.TextLink);
//changeLink.text = "Click to change origin city";
changeLink.isMeasured = false;

changeLink.events.on("hit", function() {
    if (currentOrigin == originImageSeries.dataItems.getIndex(0)) {
        showLines(originImageSeries.dataItems.getIndex(1));
    }
    else {
        showLines(originImageSeries.dataItems.getIndex(0));
    }
})

changeLink.x = 142;
changeLink.y = 72;
changeLink.fontSize = 13;


// The world
var worldPolygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
worldPolygonSeries.useGeodata = true;
worldPolygonSeries.fillOpacity = 0.6;
worldPolygonSeries.exclude = ["AQ"];

// Origin series (big targets, London and Vilnius)
var originImageSeries = chart.series.push(new am4maps.MapImageSeries());

var originImageTemplate = originImageSeries.mapImages.template;

originImageTemplate.propertyFields.latitude = "latitude";
originImageTemplate.propertyFields.longitude = "longitude";
originImageTemplate.propertyFields.id = "id";

originImageTemplate.cursorOverStyle = am4core.MouseCursorStyle.pointer;
originImageTemplate.nonScaling = true;
originImageTemplate.tooltipText = "{title}";

originImageTemplate.setStateOnChildren = true;
originImageTemplate.states.create("hover");

originImageTemplate.horizontalCenter = "middle";
originImageTemplate.verticalCenter = "middle";

//originImageTemplate.addEventListener("clickMapObject", function(){ alert("Hello World!"); });

var originHitCircle = originImageTemplate.createChild(am4core.Circle);
originHitCircle.radius = 11;
originHitCircle.fill = interfaceColors.getFor("background");

var originTargetIcon = originImageTemplate.createChild(am4core.Sprite);
originTargetIcon.fill = interfaceColors.getFor("alternativeBackground");
originTargetIcon.strokeWidth = 0;
originTargetIcon.scale = 1.3;
originTargetIcon.horizontalCenter = "middle";
originTargetIcon.verticalCenter = "middle";
originTargetIcon.path = targetSVG;

var originHoverState = originTargetIcon.states.create("hover");
originHoverState.properties.fill = chart.colors.getIndex(1);

// when hit on city, change lines
originImageTemplate.events.on("hit", function(event) {
    showLines(event.target.dataItem);
    $(location).attr('href', '/my-city?id=' + event.target.dataItem._dataContext.id + "&title=" + event.target.dataItem._dataContext.title)
    console.log(event.target.dataItem._dataContext.id);
})

// destination series (small targets)
var destinationImageSeries = chart.series.push(new am4maps.MapImageSeries());
var destinationImageTemplate = destinationImageSeries.mapImages.template;

destinationImageTemplate.nonScaling = true;
destinationImageTemplate.tooltipText = "{title}";
destinationImageTemplate.fill = interfaceColors.getFor("alternativeBackground");
destinationImageTemplate.setStateOnChildren = true;
destinationImageTemplate.states.create("hover");

destinationImageTemplate.propertyFields.latitude = "latitude";
destinationImageTemplate.propertyFields.longitude = "longitude";
destinationImageTemplate.propertyFields.id = "id";

var destinationHitCircle = destinationImageTemplate.createChild(am4core.Circle);
destinationHitCircle.radius = 7;
destinationHitCircle.fillOpacity = 1;
destinationHitCircle.fill = interfaceColors.getFor("background");

var destinationTargetIcon = destinationImageTemplate.createChild(am4core.Sprite);
destinationTargetIcon.scale = 0.7;
destinationTargetIcon.path = targetSVG;
destinationTargetIcon.horizontalCenter = "middle";
destinationTargetIcon.verticalCenter = "middle";

originImageSeries.data = originCities;
destinationImageSeries.data = destinationCities;

// Line series
var lineSeries = chart.series.push(new am4maps.MapLineSeries());
lineSeries.mapLines.template.line.strokeOpacity = 0.5;

chart.events.on("ready", function() {
    showLines(originImageSeries.dataItems.getIndex(0));
})




var currentOrigin;

function showLines(origin) {

    var dataContext = origin.dataContext;
    var destinations = dataContext.destinations;
    // clear old
    lineSeries.mapLines.clear();
    lineSeries.toBack();
    worldPolygonSeries.toBack();

    currentOrigin = origin;

    if (destinations) {
        for (var i = 0; i < destinations.length; i++) {
            var line = lineSeries.mapLines.create();
            line.imagesToConnect = [origin.mapImage.id, destinations[i]];
        }
    }

    // title.text = "";

    chart.zoomToGeoPoint({ latitude: dataContext.zoomLatitude, longitude: dataContext.zoomLongitude }, dataContext.zoomLevel, true);
}
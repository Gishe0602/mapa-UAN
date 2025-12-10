var size = 0;
var placement = 'point';

var style_Areas_Deportivas_5 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("");
    var labelFont = "11px 'Open Sans', sans-serif";
    var labelFill = "#222222";
    var bufferColor = "#ffffff";
    var bufferWidth = 2;
    var textAlign = "center";
    var offsetX = 0;
    var offsetY = 3;
    var placement = 'point';

    var codigo = feature.get("clave");
    if (codigo === null) {
        codigo = feature.get("Clave");
    }

    if (codigo !== null && resolution < 4) {
        labelText = String(codigo);
    }

    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: 'rgba(255,140,0,0.9)',   // naranja
            lineDash: null,
            lineCap: 'butt',
            lineJoin: 'miter',
            width: 1.2
        }),
        fill: new ol.style.Fill({
            color: 'rgba(255,196,120,0.55)' // naranja claro transparente
        }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor, bufferWidth)
    })];

    return style;
};

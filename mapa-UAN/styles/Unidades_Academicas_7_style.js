var size = 0;
var placement = 'point';

var style_Unidades_Academicas_7 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("");
    var labelFont = "11px 'Open Sans', sans-serif";
    var labelFill = "#222222";
    var bufferColor = "#ffffff";  // halo blanco
    var bufferWidth = 2;
    var textAlign = "center";
    var offsetX = 0;
    var offsetY = 3;
    var placement = 'point';

    if (feature.get("Nombre") !== null) {
        labelText = String(feature.get("Nombre"));
    }

    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: 'rgba(60,40,120,0.9)',   // morado oscuro
            lineDash: null,
            lineCap: 'round',
            lineJoin: 'round',
            width: 1.8
        }),
        fill: new ol.style.Fill({
            color: 'rgba(154,85,210,0.55)'  // morado claro transparente
        }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor, bufferWidth)
    })];

    return style;
};

var size = 0;
var placement = 'point';

var style_Edificios_6 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("");
    var labelFont = "10px sans-serif";
    var labelFill = "#ffffff";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "center";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';

    if ("" !== null) {
        labelText = String("");
    }

    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: 'rgba(255,255,255,0.9)', // borde blanco suave
            lineDash: null,
            lineCap: 'round',
            lineJoin: 'round',
            width: 1
        }),
        fill: new ol.style.Fill({
            color: 'rgba(80,90,105,0.75)'   // gris azulado semi-transparente
        }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor, bufferWidth)
    })];

    return style;
};

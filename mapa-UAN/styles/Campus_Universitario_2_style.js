var size = 0;
var placement = 'point';

var style_Campus_Universitario_2 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("");
    var labelFont = "11px sans-serif";
    var labelFill = "#003050";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';

    if ("" !== null) {
        labelText = String("");
    }

    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: 'rgba(0,80,170,1.0)',    // azul fuerte
            lineDash: null,
            lineCap: 'round',
            lineJoin: 'round',
            width: 3
        }),
        fill: new ol.style.Fill({
            color: 'rgba(0,150,255,0.25)'   // azul cielo muy transparente
        }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor, bufferWidth)
    })];

    return style;
};

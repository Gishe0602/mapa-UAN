var size = 0;
var placement = 'point';

var style_Areas_Estacionamiento_4 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("");
    var labelFont = "11px 'Open Sans', sans-serif";
    var labelFill = "#333333";
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
            color: 'rgba(120,120,120,0.9)', // gris
            lineDash: [4,4],                // borde punteado
            lineCap: 'butt',
            lineJoin: 'miter',
            width: 1
        }),
        fill: new ol.style.Fill({
            color: 'rgba(255,228,150,0.6)'  // amarillo suave transparente
        }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor, bufferWidth)
    })];

    return style;
};

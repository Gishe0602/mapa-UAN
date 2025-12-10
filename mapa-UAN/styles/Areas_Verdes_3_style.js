var size = 0;
var placement = 'point';

var style_Areas_Verdes_3 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("");
    var labelFont = "11px 'Open Sans', sans-serif";
    var labelFill = "#ffffff";
    var bufferColor = "#303030";
    var bufferWidth = 2;
    var textAlign = "center";
    var offsetX = 0;
    var offsetY = 3;
    var placement = 'point';

    // --- tomar la clave, sea "clave" o "Clave" ---
    var codigo = feature.get("clave");
    if (codigo === null) {
        codigo = feature.get("Clave");
    }

    // mostrar etiqueta solo cuando estes cerca (zoom in)
    if (codigo !== null && resolution < 4) {
        labelText = String(codigo);
    }

    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: 'rgba(60,120,70,0.9)',   // borde verde oscuro
            width: 1
        }),
        fill: new ol.style.Fill({
            color: 'rgba(120,200,140,0.5)'  // verde claro transparente
        }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor, bufferWidth)
    })];

    return style;
};

var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_KelurahanPasirKalikiTerbaru_1 = new ol.format.GeoJSON();
var features_KelurahanPasirKalikiTerbaru_1 = format_KelurahanPasirKalikiTerbaru_1.readFeatures(json_KelurahanPasirKalikiTerbaru_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KelurahanPasirKalikiTerbaru_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KelurahanPasirKalikiTerbaru_1.addFeatures(features_KelurahanPasirKalikiTerbaru_1);
var lyr_KelurahanPasirKalikiTerbaru_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KelurahanPasirKalikiTerbaru_1, 
                style: style_KelurahanPasirKalikiTerbaru_1,
                popuplayertitle: "Kelurahan Pasir Kaliki Terbaru",
                interactive: true,
                title: '<img src="styles/legend/KelurahanPasirKalikiTerbaru_1.png" /> Kelurahan Pasir Kaliki Terbaru'
            });
var format_JALAN_LN_25K_2 = new ol.format.GeoJSON();
var features_JALAN_LN_25K_2 = format_JALAN_LN_25K_2.readFeatures(json_JALAN_LN_25K_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JALAN_LN_25K_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JALAN_LN_25K_2.addFeatures(features_JALAN_LN_25K_2);
var lyr_JALAN_LN_25K_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JALAN_LN_25K_2, 
                style: style_JALAN_LN_25K_2,
                popuplayertitle: "JALAN_LN_25K",
                interactive: true,
                title: '<img src="styles/legend/JALAN_LN_25K_2.png" /> JALAN_LN_25K'
            });
var format_SUNGAI_LN_25K_3 = new ol.format.GeoJSON();
var features_SUNGAI_LN_25K_3 = format_SUNGAI_LN_25K_3.readFeatures(json_SUNGAI_LN_25K_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUNGAI_LN_25K_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUNGAI_LN_25K_3.addFeatures(features_SUNGAI_LN_25K_3);
var lyr_SUNGAI_LN_25K_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUNGAI_LN_25K_3, 
                style: style_SUNGAI_LN_25K_3,
                popuplayertitle: "SUNGAI_LN_25K",
                interactive: true,
                title: '<img src="styles/legend/SUNGAI_LN_25K_3.png" /> SUNGAI_LN_25K'
            });
var format_BUFFERING200MREVISI_4 = new ol.format.GeoJSON();
var features_BUFFERING200MREVISI_4 = format_BUFFERING200MREVISI_4.readFeatures(json_BUFFERING200MREVISI_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BUFFERING200MREVISI_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BUFFERING200MREVISI_4.addFeatures(features_BUFFERING200MREVISI_4);
var lyr_BUFFERING200MREVISI_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BUFFERING200MREVISI_4, 
                style: style_BUFFERING200MREVISI_4,
                popuplayertitle: "BUFFERING 200M REVISI",
                interactive: true,
                title: '<img src="styles/legend/BUFFERING200MREVISI_4.png" /> BUFFERING 200M REVISI'
            });
var format_TempatPerindukanVektor_5 = new ol.format.GeoJSON();
var features_TempatPerindukanVektor_5 = format_TempatPerindukanVektor_5.readFeatures(json_TempatPerindukanVektor_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TempatPerindukanVektor_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TempatPerindukanVektor_5.addFeatures(features_TempatPerindukanVektor_5);
var lyr_TempatPerindukanVektor_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TempatPerindukanVektor_5, 
                style: style_TempatPerindukanVektor_5,
                popuplayertitle: "Tempat Perindukan Vektor",
                interactive: true,
                title: '<img src="styles/legend/TempatPerindukanVektor_5.png" /> Tempat Perindukan Vektor'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_KelurahanPasirKalikiTerbaru_1.setVisible(true);lyr_JALAN_LN_25K_2.setVisible(true);lyr_SUNGAI_LN_25K_3.setVisible(true);lyr_BUFFERING200MREVISI_4.setVisible(true);lyr_TempatPerindukanVektor_5.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_KelurahanPasirKalikiTerbaru_1,lyr_JALAN_LN_25K_2,lyr_SUNGAI_LN_25K_3,lyr_BUFFERING200MREVISI_4,lyr_TempatPerindukanVektor_5];
lyr_KelurahanPasirKalikiTerbaru_1.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'CIMAHI_ADM': 'CIMAHI_ADM', 'CIMAHI_A_1': 'CIMAHI_A_1', 'KECAMATAN': 'KECAMATAN', 'KELURAHAN': 'KELURAHAN', 'RW': 'RW', 'RT': 'RT', });
lyr_JALAN_LN_25K_2.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_SUNGAI_LN_25K_3.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'TIPSNG': 'TIPSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'STATUS': 'STATUS', 'WMAX': 'WMAX', 'DBTMAX': 'DBTMAX', 'SLPRT': 'SLPRT', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_BUFFERING200MREVISI_4.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_TempatPerindukanVektor_5.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_KelurahanPasirKalikiTerbaru_1.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'CIMAHI_ADM': 'TextEdit', 'CIMAHI_A_1': 'TextEdit', 'KECAMATAN': 'TextEdit', 'KELURAHAN': 'TextEdit', 'RW': 'TextEdit', 'RT': 'TextEdit', });
lyr_JALAN_LN_25K_2.set('fieldImages', {'NAMRJL': '', 'KONRJL': '', 'MATRJL': '', 'FGSRJL': '', 'UTKRJL': '', 'TOLRJL': '', 'WLYRJL': '', 'AUTRJL': '', 'KLSRJL': '', 'SPCRJL': '', 'JPARJL': '', 'ARHRJL': '', 'STARJL': '', 'KLLRJL': '', 'MEDRJL': '', 'LOCRJL': '', 'JARRJL': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', });
lyr_SUNGAI_LN_25K_3.set('fieldImages', {'NAMOBJ': '', 'TIPSNG': '', 'KLSSNG': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'NAMWS': '', 'NAMDAS': '', 'STATUS': '', 'WMAX': '', 'DBTMAX': '', 'SLPRT': '', 'SHAPE_Leng': '', });
lyr_BUFFERING200MREVISI_4.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_TempatPerindukanVektor_5.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_KelurahanPasirKalikiTerbaru_1.set('fieldLabels', {'AREA': 'no label', 'PERIMETER': 'no label', 'CIMAHI_ADM': 'no label', 'CIMAHI_A_1': 'no label', 'KECAMATAN': 'no label', 'KELURAHAN': 'no label', 'RW': 'no label', 'RT': 'no label', });
lyr_JALAN_LN_25K_2.set('fieldLabels', {'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_SUNGAI_LN_25K_3.set('fieldLabels', {'NAMOBJ': 'no label', 'TIPSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'STATUS': 'no label', 'WMAX': 'no label', 'DBTMAX': 'no label', 'SLPRT': 'no label', 'SHAPE_Leng': 'no label', });
lyr_BUFFERING200MREVISI_4.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_TempatPerindukanVektor_5.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_TempatPerindukanVektor_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
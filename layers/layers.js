var wms_layers = [];

var format_nam_0 = new ol.format.GeoJSON();
var features_nam_0 = format_nam_0.readFeatures(json_nam_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_nam_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_nam_0.addFeatures(features_nam_0);
var lyr_nam_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_nam_0, 
                style: style_nam_0,
                popuplayertitle: 'nam',
                interactive: true,
    title: 'nam<br />\
    <img src="styles/legend/nam_0_0.png" /> 1224<br />\
    <img src="styles/legend/nam_0_1.png" /> 1465<br />\
    <img src="styles/legend/nam_0_2.png" /> 1495<br />\
    <img src="styles/legend/nam_0_3.png" /> 1502<br />\
    <img src="styles/legend/nam_0_4.png" /> 1507<br />\
    <img src="styles/legend/nam_0_5.png" /> 1533<br />\
    <img src="styles/legend/nam_0_6.png" /> 1537<br />\
    <img src="styles/legend/nam_0_7.png" /> 1569<br />\
    <img src="styles/legend/nam_0_8.png" /> 1585<br />\
    <img src="styles/legend/nam_0_9.png" /> 1609<br />\
    <img src="styles/legend/nam_0_10.png" /> 1615<br />\
    <img src="styles/legend/nam_0_11.png" /> 1618<br />\
    <img src="styles/legend/nam_0_12.png" /> 1621<br />\
    <img src="styles/legend/nam_0_13.png" /> 1648<br />\
    <img src="styles/legend/nam_0_14.png" /> 1664<br />\
    <img src="styles/legend/nam_0_15.png" /> 1666<br />\
    <img src="styles/legend/nam_0_16.png" /> 1668<br />\
    <img src="styles/legend/nam_0_17.png" /> 1675<br />\
    <img src="styles/legend/nam_0_18.png" /> 1676<br />\
    <img src="styles/legend/nam_0_19.png" /> 1694<br />\
    <img src="styles/legend/nam_0_20.png" /> 1706<br />\
    <img src="styles/legend/nam_0_21.png" /> 1725<br />\
    <img src="styles/legend/nam_0_22.png" /> 1727<br />\
    <img src="styles/legend/nam_0_23.png" /> 1738<br />\
    <img src="styles/legend/nam_0_24.png" /> 1749<br />\
    <img src="styles/legend/nam_0_25.png" /> 1750<br />\
    <img src="styles/legend/nam_0_26.png" /> 1771<br />\
    <img src="styles/legend/nam_0_27.png" /> 1773<br />\
    <img src="styles/legend/nam_0_28.png" /> 1779<br />\
    <img src="styles/legend/nam_0_29.png" /> 1783<br />\
    <img src="styles/legend/nam_0_30.png" /> 1798<br />\
    <img src="styles/legend/nam_0_31.png" /> 1800<br />\
    <img src="styles/legend/nam_0_32.png" /> 1804<br />\
    <img src="styles/legend/nam_0_33.png" /> 1815<br />\
    <img src="styles/legend/nam_0_34.png" /> 1830<br />\
    <img src="styles/legend/nam_0_35.png" /> 1837<br />\
    <img src="styles/legend/nam_0_36.png" /> 1843<br />\
    <img src="styles/legend/nam_0_37.png" /> 1860<br />\
    <img src="styles/legend/nam_0_38.png" /> 1863<br />\
    <img src="styles/legend/nam_0_39.png" /> 1866<br />\
    <img src="styles/legend/nam_0_40.png" /> 1872<br />\
    <img src="styles/legend/nam_0_41.png" /> 1873<br />\
    <img src="styles/legend/nam_0_42.png" /> 1881<br />\
    <img src="styles/legend/nam_0_43.png" /> 1884<br />\
    <img src="styles/legend/nam_0_44.png" /> 1887<br />\
    <img src="styles/legend/nam_0_45.png" /> 1889<br />\
    <img src="styles/legend/nam_0_46.png" /> 1890<br />\
    <img src="styles/legend/nam_0_47.png" /> 1893<br />\
    <img src="styles/legend/nam_0_48.png" /> 1894<br />\
    <img src="styles/legend/nam_0_49.png" /> 1895<br />\
    <img src="styles/legend/nam_0_50.png" /> 1896<br />\
    <img src="styles/legend/nam_0_51.png" /> 1899<br />\
    <img src="styles/legend/nam_0_52.png" /> 1901<br />\
    <img src="styles/legend/nam_0_53.png" /> 1910<br />\
    <img src="styles/legend/nam_0_54.png" /> 1937<br />\
    <img src="styles/legend/nam_0_55.png" /> 1948<br />\
    <img src="styles/legend/nam_0_56.png" /> 1951<br />\
    <img src="styles/legend/nam_0_57.png" /> 1953<br />\
    <img src="styles/legend/nam_0_58.png" /> 1954<br />\
    <img src="styles/legend/nam_0_59.png" /> 1955<br />\
    <img src="styles/legend/nam_0_60.png" /> 1957<br />\
    <img src="styles/legend/nam_0_61.png" /> 1964<br />\
    <img src="styles/legend/nam_0_62.png" /> 1965<br />\
    <img src="styles/legend/nam_0_63.png" /> 1971<br />\
    <img src="styles/legend/nam_0_64.png" /> 1972<br />\
    <img src="styles/legend/nam_0_65.png" /> 1973<br />\
    <img src="styles/legend/nam_0_66.png" /> 1991<br />\
    <img src="styles/legend/nam_0_67.png" /> 2003<br />\
    <img src="styles/legend/nam_0_68.png" /> 2004<br />\
    <img src="styles/legend/nam_0_69.png" /> <br />' });
var format_huyen_1 = new ol.format.GeoJSON();
var features_huyen_1 = format_huyen_1.readFeatures(json_huyen_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_huyen_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_huyen_1.addFeatures(features_huyen_1);
var lyr_huyen_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_huyen_1, 
                style: style_huyen_1,
                popuplayertitle: 'huyen',
                interactive: true,
    title: 'huyen<br />\
    <img src="styles/legend/huyen_1_0.png" /> HUYỆN CÙ LAO DUNG<br />\
    <img src="styles/legend/huyen_1_1.png" /> HUYỆN CHÂU THÀNH<br />\
    <img src="styles/legend/huyen_1_2.png" /> HUYỆN KẾ SÁCH<br />\
    <img src="styles/legend/huyen_1_3.png" /> HUYỆN LONG PHÚ<br />\
    <img src="styles/legend/huyen_1_4.png" /> HUYỆN MỸ TÚ<br />\
    <img src="styles/legend/huyen_1_5.png" /> HUYỆN MỸ XUYÊN<br />\
    <img src="styles/legend/huyen_1_6.png" /> HUYỆN NGÃ NĂM<br />\
    <img src="styles/legend/huyen_1_7.png" /> HUYỆN THẠNH TRỊ<br />\
    <img src="styles/legend/huyen_1_8.png" /> HUYỆN TRẦN ĐỀ<br />\
    <img src="styles/legend/huyen_1_9.png" /> THÀNH PHỐ SÓC TRĂNG<br />\
    <img src="styles/legend/huyen_1_10.png" /> THỊ XÃ VĨNH CHÂU<br />\
    <img src="styles/legend/huyen_1_11.png" /> <br />' });
var format_tuoi_2 = new ol.format.GeoJSON();
var features_tuoi_2 = format_tuoi_2.readFeatures(json_tuoi_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tuoi_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tuoi_2.addFeatures(features_tuoi_2);
var lyr_tuoi_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tuoi_2, 
                style: style_tuoi_2,
                popuplayertitle: 'tuoi',
                interactive: true,
    title: 'tuoi<br />\
    <img src="styles/legend/tuoi_2_0.png" /> 21<br />\
    <img src="styles/legend/tuoi_2_1.png" /> 22<br />\
    <img src="styles/legend/tuoi_2_2.png" /> 34<br />\
    <img src="styles/legend/tuoi_2_3.png" /> 52<br />\
    <img src="styles/legend/tuoi_2_4.png" /> 53<br />\
    <img src="styles/legend/tuoi_2_5.png" /> 54<br />\
    <img src="styles/legend/tuoi_2_6.png" /> 60<br />\
    <img src="styles/legend/tuoi_2_7.png" /> 61<br />\
    <img src="styles/legend/tuoi_2_8.png" /> 68<br />\
    <img src="styles/legend/tuoi_2_9.png" /> 70<br />\
    <img src="styles/legend/tuoi_2_10.png" /> 71<br />\
    <img src="styles/legend/tuoi_2_11.png" /> 72<br />\
    <img src="styles/legend/tuoi_2_12.png" /> 74<br />\
    <img src="styles/legend/tuoi_2_13.png" /> 77<br />\
    <img src="styles/legend/tuoi_2_14.png" /> 88<br />\
    <img src="styles/legend/tuoi_2_15.png" /> 115<br />\
    <img src="styles/legend/tuoi_2_16.png" /> 124<br />\
    <img src="styles/legend/tuoi_2_17.png" /> 126<br />\
    <img src="styles/legend/tuoi_2_18.png" /> 129<br />\
    <img src="styles/legend/tuoi_2_19.png" /> 130<br />\
    <img src="styles/legend/tuoi_2_20.png" /> 131<br />\
    <img src="styles/legend/tuoi_2_21.png" /> 132<br />\
    <img src="styles/legend/tuoi_2_22.png" /> 135<br />\
    <img src="styles/legend/tuoi_2_23.png" /> 136<br />\
    <img src="styles/legend/tuoi_2_24.png" /> 138<br />\
    <img src="styles/legend/tuoi_2_25.png" /> 141<br />\
    <img src="styles/legend/tuoi_2_26.png" /> 144<br />\
    <img src="styles/legend/tuoi_2_27.png" /> 152<br />\
    <img src="styles/legend/tuoi_2_28.png" /> 153<br />\
    <img src="styles/legend/tuoi_2_29.png" /> 159<br />\
    <img src="styles/legend/tuoi_2_30.png" /> 162<br />\
    <img src="styles/legend/tuoi_2_31.png" /> 165<br />\
    <img src="styles/legend/tuoi_2_32.png" /> 182<br />\
    <img src="styles/legend/tuoi_2_33.png" /> 188<br />\
    <img src="styles/legend/tuoi_2_34.png" /> 195<br />\
    <img src="styles/legend/tuoi_2_35.png" /> 210<br />\
    <img src="styles/legend/tuoi_2_36.png" /> 221<br />\
    <img src="styles/legend/tuoi_2_37.png" /> 225<br />\
    <img src="styles/legend/tuoi_2_38.png" /> 227<br />\
    <img src="styles/legend/tuoi_2_39.png" /> 242<br />\
    <img src="styles/legend/tuoi_2_40.png" /> 246<br />\
    <img src="styles/legend/tuoi_2_41.png" /> 252<br />\
    <img src="styles/legend/tuoi_2_42.png" /> 254<br />\
    <img src="styles/legend/tuoi_2_43.png" /> 275<br />\
    <img src="styles/legend/tuoi_2_44.png" /> 276<br />\
    <img src="styles/legend/tuoi_2_45.png" /> 287<br />\
    <img src="styles/legend/tuoi_2_46.png" /> 298<br />\
    <img src="styles/legend/tuoi_2_47.png" /> 300<br />\
    <img src="styles/legend/tuoi_2_48.png" /> 319<br />\
    <img src="styles/legend/tuoi_2_49.png" /> 331<br />\
    <img src="styles/legend/tuoi_2_50.png" /> 349<br />\
    <img src="styles/legend/tuoi_2_51.png" /> 350<br />\
    <img src="styles/legend/tuoi_2_52.png" /> 357<br />\
    <img src="styles/legend/tuoi_2_53.png" /> 359<br />\
    <img src="styles/legend/tuoi_2_54.png" /> 361<br />\
    <img src="styles/legend/tuoi_2_55.png" /> 377<br />\
    <img src="styles/legend/tuoi_2_56.png" /> 404<br />\
    <img src="styles/legend/tuoi_2_57.png" /> 407<br />\
    <img src="styles/legend/tuoi_2_58.png" /> 410<br />\
    <img src="styles/legend/tuoi_2_59.png" /> 416<br />\
    <img src="styles/legend/tuoi_2_60.png" /> 440<br />\
    <img src="styles/legend/tuoi_2_61.png" /> 456<br />\
    <img src="styles/legend/tuoi_2_62.png" /> 488<br />\
    <img src="styles/legend/tuoi_2_63.png" /> 492<br />\
    <img src="styles/legend/tuoi_2_64.png" /> 518<br />\
    <img src="styles/legend/tuoi_2_65.png" /> 523<br />\
    <img src="styles/legend/tuoi_2_66.png" /> 530<br />\
    <img src="styles/legend/tuoi_2_67.png" /> 560<br />\
    <img src="styles/legend/tuoi_2_68.png" /> 801<br />\
    <img src="styles/legend/tuoi_2_69.png" /> <br />' });

lyr_nam_0.setVisible(true);lyr_huyen_1.setVisible(true);lyr_tuoi_2.setVisible(true);
var layersList = [lyr_nam_0,lyr_huyen_1,lyr_tuoi_2];
lyr_nam_0.set('fieldAliases', {'1': '1', 'Chùa Sêrey Cro Săng': 'Chùa Sêrey Cro Săng', 'Chùa Cro Săng': 'Chùa Cro Săng', 'Chùa Cà Săng': 'Chùa Cà Săng', '1576': 'Year of contrucstion', 'Khóm Cà Săng, Phường 2': 'Khóm Cà Săng, Phường 2', '106': '106', '9.328': '9.328', 'THỊ XÃ VĨNH CHÂU': 'THỊ XÃ VĨNH CHÂU', '449': 'age', '300-500': '300-500', });
lyr_huyen_1.set('fieldAliases', {'1': '1', 'Chùa Sêrey Cro Săng': 'Chùa Sêrey Cro Săng', 'Chùa Cro Săng': 'Chùa Cro Săng', 'Chùa Cà Săng': 'Chùa Cà Săng', '1576': 'Year of contrucstion', 'Khóm Cà Săng, Phường 2': 'Khóm Cà Săng, Phường 2', '106': '106', '9.328': '9.328', 'THỊ XÃ VĨNH CHÂU': 'THỊ XÃ VĨNH CHÂU', '449': 'age', '300-500': '300-500', });
lyr_tuoi_2.set('fieldAliases', {'1': '1', 'Chùa Sêrey Cro Săng': 'Chùa Sêrey Cro Săng', 'Chùa Cro Săng': 'Chùa Cro Săng', 'Chùa Cà Săng': 'Chùa Cà Săng', '1576': 'Year of contrucstion', 'Khóm Cà Săng, Phường 2': 'Khóm Cà Săng, Phường 2', '106': '106', '9.328': '9.328', 'THỊ XÃ VĨNH CHÂU': 'THỊ XÃ VĨNH CHÂU', '449': 'age', '300-500': '300-500', });
lyr_nam_0.set('fieldImages', {'1': 'Range', 'Chùa Sêrey Cro Săng': 'TextEdit', 'Chùa Cro Săng': 'TextEdit', 'Chùa Cà Săng': 'TextEdit', '1576': 'Range', 'Khóm Cà Săng, Phường 2': 'TextEdit', '106': 'Hidden', '9.328': 'Hidden', 'THỊ XÃ VĨNH CHÂU': 'TextEdit', '449': 'Range', '300-500': 'TextEdit', });
lyr_huyen_1.set('fieldImages', {'1': 'Range', 'Chùa Sêrey Cro Săng': 'TextEdit', 'Chùa Cro Săng': 'TextEdit', 'Chùa Cà Săng': 'TextEdit', '1576': 'Range', 'Khóm Cà Săng, Phường 2': 'TextEdit', '106': 'Hidden', '9.328': 'Hidden', 'THỊ XÃ VĨNH CHÂU': 'TextEdit', '449': 'Range', '300-500': 'TextEdit', });
lyr_tuoi_2.set('fieldImages', {'1': 'Range', 'Chùa Sêrey Cro Săng': 'TextEdit', 'Chùa Cro Săng': 'TextEdit', 'Chùa Cà Săng': 'TextEdit', '1576': 'Range', 'Khóm Cà Săng, Phường 2': 'TextEdit', '106': 'Hidden', '9.328': 'Hidden', 'THỊ XÃ VĨNH CHÂU': 'TextEdit', '449': 'Range', '300-500': 'TextEdit', });
lyr_nam_0.set('fieldLabels', {'1': 'no label', 'Chùa Sêrey Cro Săng': 'no label', 'Chùa Cro Săng': 'inline label - visible with data', 'Chùa Cà Săng': 'inline label - visible with data', '1576': 'inline label - visible with data', 'Khóm Cà Săng, Phường 2': 'inline label - visible with data', 'THỊ XÃ VĨNH CHÂU': 'inline label - visible with data', '449': 'inline label - visible with data', '300-500': 'inline label - visible with data', });
lyr_huyen_1.set('fieldLabels', {'1': 'no label', 'Chùa Sêrey Cro Săng': 'no label', 'Chùa Cro Săng': 'inline label - visible with data', 'Chùa Cà Săng': 'inline label - visible with data', '1576': 'inline label - visible with data', 'Khóm Cà Săng, Phường 2': 'inline label - visible with data', 'THỊ XÃ VĨNH CHÂU': 'inline label - visible with data', '449': 'inline label - visible with data', '300-500': 'inline label - visible with data', });
lyr_tuoi_2.set('fieldLabels', {'1': 'no label', 'Chùa Sêrey Cro Săng': 'no label', 'Chùa Cro Săng': 'inline label - visible with data', 'Chùa Cà Săng': 'inline label - visible with data', '1576': 'inline label - visible with data', 'Khóm Cà Săng, Phường 2': 'inline label - visible with data', 'THỊ XÃ VĨNH CHÂU': 'inline label - visible with data', '449': 'inline label - visible with data', '300-500': 'inline label - visible with data', });
lyr_tuoi_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
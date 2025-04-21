var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Administrasi_1 = new ol.format.GeoJSON();
var features_Administrasi_1 = format_Administrasi_1.readFeatures(json_Administrasi_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Administrasi_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Administrasi_1.addFeatures(features_Administrasi_1);
var lyr_Administrasi_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Administrasi_1, 
                style: style_Administrasi_1,
                popuplayertitle: 'Administrasi',
                interactive: true,
    title: 'Administrasi<br />\
    <img src="styles/legend/Administrasi_1_0.png" /> Babakan<br />\
    <img src="styles/legend/Administrasi_1_1.png" /> Bagolo<br />\
    <img src="styles/legend/Administrasi_1_2.png" /> Bangunjaya<br />\
    <img src="styles/legend/Administrasi_1_3.png" /> Bangunkarya<br />\
    <img src="styles/legend/Administrasi_1_4.png" /> Banjaranyar<br />\
    <img src="styles/legend/Administrasi_1_5.png" /> Banjarharja<br />\
    <img src="styles/legend/Administrasi_1_6.png" /> Batukaras<br />\
    <img src="styles/legend/Administrasi_1_7.png" /> Batumalang<br />\
    <img src="styles/legend/Administrasi_1_8.png" /> Bojong<br />\
    <img src="styles/legend/Administrasi_1_9.png" /> Bojongkondang<br />\
    <img src="styles/legend/Administrasi_1_10.png" /> Bojongsari<br />\
    <img src="styles/legend/Administrasi_1_11.png" /> Bunisari<br />\
    <img src="styles/legend/Administrasi_1_12.png" /> Campaka<br />\
    <img src="styles/legend/Administrasi_1_13.png" /> Ciakar<br />\
    <img src="styles/legend/Administrasi_1_14.png" /> Cibanten<br />\
    <img src="styles/legend/Administrasi_1_15.png" /> Cibenda<br />\
    <img src="styles/legend/Administrasi_1_16.png" /> Cibogo<br />\
    <img src="styles/legend/Administrasi_1_17.png" /> Cibuluh<br />\
    <img src="styles/legend/Administrasi_1_18.png" /> Cibuniasih<br />\
    <img src="styles/legend/Administrasi_1_19.png" /> Cicapar<br />\
    <img src="styles/legend/Administrasi_1_20.png" /> Ciganjeng<br />\
    <img src="styles/legend/Administrasi_1_21.png" /> Cigugur<br />\
    <img src="styles/legend/Administrasi_1_22.png" /> Cijulang<br />\
    <img src="styles/legend/Administrasi_1_23.png" /> Cikalong<br />\
    <img src="styles/legend/Administrasi_1_24.png" /> Cikambulan<br />\
    <img src="styles/legend/Administrasi_1_25.png" /> Cikupa<br />\
    <img src="styles/legend/Administrasi_1_26.png" /> Ciliang<br />\
    <img src="styles/legend/Administrasi_1_27.png" /> Cimanggu<br />\
    <img src="styles/legend/Administrasi_1_28.png" /> Cimanuk<br />\
    <img src="styles/legend/Administrasi_1_29.png" /> Cimerak<br />\
    <img src="styles/legend/Administrasi_1_30.png" /> Cimindi<br />\
    <img src="styles/legend/Administrasi_1_31.png" /> Cintakarya<br />\
    <img src="styles/legend/Administrasi_1_32.png" /> Cintaratu<br />\
    <img src="styles/legend/Administrasi_1_33.png" /> Cinyawang<br />\
    <img src="styles/legend/Administrasi_1_34.png" /> Ciparakan<br />\
    <img src="styles/legend/Administrasi_1_35.png" /> Ciparanti<br />\
    <img src="styles/legend/Administrasi_1_36.png" /> Cisarua<br />\
    <img src="styles/legend/Administrasi_1_37.png" /> Citalahab<br />\
    <img src="styles/legend/Administrasi_1_38.png" /> Ciulu<br />\
    <img src="styles/legend/Administrasi_1_39.png" /> Emplak<br />\
    <img src="styles/legend/Administrasi_1_40.png" /> Jadikarya<br />\
    <img src="styles/legend/Administrasi_1_41.png" /> Jadimulya<br />\
    <img src="styles/legend/Administrasi_1_42.png" /> Jangraga<br />\
    <img src="styles/legend/Administrasi_1_43.png" /> Jayamukti<br />\
    <img src="styles/legend/Administrasi_1_44.png" /> Jayasari<br />\
    <img src="styles/legend/Administrasi_1_45.png" /> Kalijati<br />\
    <img src="styles/legend/Administrasi_1_46.png" /> Kalijaya<br />\
    <img src="styles/legend/Administrasi_1_47.png" /> Kalipucang<br />\
    <img src="styles/legend/Administrasi_1_48.png" /> Karangbenda<br />\
    <img src="styles/legend/Administrasi_1_49.png" /> Karangjaladri<br />\
    <img src="styles/legend/Administrasi_1_50.png" /> Karangkemiri<br />\
    <img src="styles/legend/Administrasi_1_51.png" /> Karangmulya<br />\
    <img src="styles/legend/Administrasi_1_52.png" /> Karangpawitan<br />\
    <img src="styles/legend/Administrasi_1_53.png" /> Karangsari<br />\
    <img src="styles/legend/Administrasi_1_54.png" /> Kawasen<br />\
    <img src="styles/legend/Administrasi_1_55.png" /> Kedungwuluh<br />\
    <img src="styles/legend/Administrasi_1_56.png" /> Kersaratu<br />\
    <img src="styles/legend/Administrasi_1_57.png" /> Kertaharja<br />\
    <img src="styles/legend/Administrasi_1_58.png" /> Kertajaya<br />\
    <img src="styles/legend/Administrasi_1_59.png" /> Kertamukti<br />\
    <img src="styles/legend/Administrasi_1_60.png" /> Kertayasa<br />\
    <img src="styles/legend/Administrasi_1_61.png" /> Kondangjajar<br />\
    <img src="styles/legend/Administrasi_1_62.png" /> Langkaplancar<br />\
    <img src="styles/legend/Administrasi_1_63.png" /> Legokjawa<br />\
    <img src="styles/legend/Administrasi_1_64.png" /> Limusgede<br />\
    <img src="styles/legend/Administrasi_1_65.png" /> Mangunjaya<br />\
    <img src="styles/legend/Administrasi_1_66.png" /> Margacinta<br />\
    <img src="styles/legend/Administrasi_1_67.png" /> Maruyungsari<br />\
    <img src="styles/legend/Administrasi_1_68.png" /> Masawah<br />\
    <img src="styles/legend/Administrasi_1_69.png" /> Mekarsari<br />\
    <img src="styles/legend/Administrasi_1_70.png" /> Mulyasari<br />\
    <img src="styles/legend/Administrasi_1_71.png" /> Neglasari<br />\
    <img src="styles/legend/Administrasi_1_72.png" /> Padaherang<br />\
    <img src="styles/legend/Administrasi_1_73.png" /> Pagerbumi<br />\
    <img src="styles/legend/Administrasi_1_74.png" /> Pagergunung<br />\
    <img src="styles/legend/Administrasi_1_75.png" /> Pajaten<br />\
    <img src="styles/legend/Administrasi_1_76.png" /> Paledah<br />\
    <img src="styles/legend/Administrasi_1_77.png" /> Pamotan<br />\
    <img src="styles/legend/Administrasi_1_78.png" /> Pananjung<br />\
    <img src="styles/legend/Administrasi_1_79.png" /> Pancawangi<br />\
    <img src="styles/legend/Administrasi_1_80.png" /> Pangandaran<br />\
    <img src="styles/legend/Administrasi_1_81.png" /> Pangkalan<br />\
    <img src="styles/legend/Administrasi_1_82.png" /> Pangliaran<br />\
    <img src="styles/legend/Administrasi_1_83.png" /> Parakanmanggu<br />\
    <img src="styles/legend/Administrasi_1_84.png" /> Parigi<br />\
    <img src="styles/legend/Administrasi_1_85.png" /> Pasawahan<br />\
    <img src="styles/legend/Administrasi_1_86.png" /> Pasirgeulis<br />\
    <img src="styles/legend/Administrasi_1_87.png" /> Patimuan<br />\
    <img src="styles/legend/Administrasi_1_88.png" /> Payutran<br />\
    <img src="styles/legend/Administrasi_1_89.png" /> Purbahayu<br />\
    <img src="styles/legend/Administrasi_1_90.png" /> Purwajaya<br />\
    <img src="styles/legend/Administrasi_1_91.png" /> Purwasari<br />\
    <img src="styles/legend/Administrasi_1_92.png" /> Putrapinggan<br />\
    <img src="styles/legend/Administrasi_1_93.png" /> Ratawangi<br />\
    <img src="styles/legend/Administrasi_1_94.png" /> Rawaapu<br />\
    <img src="styles/legend/Administrasi_1_95.png" /> Rejamulya<br />\
    <img src="styles/legend/Administrasi_1_96.png" /> Selasari<br />\
    <img src="styles/legend/Administrasi_1_97.png" /> Sidamukti<br />\
    <img src="styles/legend/Administrasi_1_98.png" /> Sidamulih<br />\
    <img src="styles/legend/Administrasi_1_99.png" /> Sidanegara<br />\
    <img src="styles/legend/Administrasi_1_100.png" /> Sidarahayu<br />\
    <img src="styles/legend/Administrasi_1_101.png" /> Sidomulyo<br />\
    <img src="styles/legend/Administrasi_1_102.png" /> Sindangasih<br />\
    <img src="styles/legend/Administrasi_1_103.png" /> Sindangjaya<br />\
    <img src="styles/legend/Administrasi_1_104.png" /> Sindangsari<br />\
    <img src="styles/legend/Administrasi_1_105.png" /> Sindangwangi<br />\
    <img src="styles/legend/Administrasi_1_106.png" /> Sirnajaya<br />\
    <img src="styles/legend/Administrasi_1_107.png" /> Sukahurip<br />\
    <img src="styles/legend/Administrasi_1_108.png" /> Sukajaya<br />\
    <img src="styles/legend/Administrasi_1_109.png" /> Sukamaju<br />\
    <img src="styles/legend/Administrasi_1_110.png" /> Sukanagara<br />\
    <img src="styles/legend/Administrasi_1_111.png" /> Sukaresik<br />\
    <img src="styles/legend/Administrasi_1_112.png" /> Tambakreja<br />\
    <img src="styles/legend/Administrasi_1_113.png" /> Tambaksari<br />\
    <img src="styles/legend/Administrasi_1_114.png" /> Tanjungsari<br />\
    <img src="styles/legend/Administrasi_1_115.png" /> Tawang<br />\
    <img src="styles/legend/Administrasi_1_116.png" /> Tunggilis<br />\
    <img src="styles/legend/Administrasi_1_117.png" /> Wonoharjo<br />\
    <img src="styles/legend/Administrasi_1_118.png" /> <br />' });
var format_Jalan_2 = new ol.format.GeoJSON();
var features_Jalan_2 = format_Jalan_2.readFeatures(json_Jalan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_2.addFeatures(features_Jalan_2);
var lyr_Jalan_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jalan_2, 
                style: style_Jalan_2,
                popuplayertitle: 'Jalan',
                interactive: true,
    title: 'Jalan<br />\
    <img src="styles/legend/Jalan_2_0.png" /> Jalan Kolektor<br />\
    <img src="styles/legend/Jalan_2_1.png" /> Jalan Lain<br />\
    <img src="styles/legend/Jalan_2_2.png" /> Jalan Lokal<br />\
    <img src="styles/legend/Jalan_2_3.png" /> Jalan Setapak<br />\
    <img src="styles/legend/Jalan_2_4.png" /> <br />' });
var format_Pendidikan_3 = new ol.format.GeoJSON();
var features_Pendidikan_3 = format_Pendidikan_3.readFeatures(json_Pendidikan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pendidikan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pendidikan_3.addFeatures(features_Pendidikan_3);
var lyr_Pendidikan_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pendidikan_3, 
                style: style_Pendidikan_3,
                popuplayertitle: 'Pendidikan ',
                interactive: true,
                title: '<img src="styles/legend/Pendidikan_3.png" /> Pendidikan '
            });

lyr_OSMStandard_0.setVisible(true);lyr_Administrasi_1.setVisible(true);lyr_Jalan_2.setVisible(true);lyr_Pendidikan_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Administrasi_1,lyr_Jalan_2,lyr_Pendidikan_3];
lyr_Administrasi_1.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Jalan_2.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_Pendidikan_3.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'LUAS': 'LUAS', 'KATPDK': 'KATPDK', 'JLPDDK': 'JLPDDK', 'FGGPDK': 'FGGPDK', 'REMARK': 'REMARK', 'FCODE': 'FCODE', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'JJGPDF': 'JJGPDF', 'JNSPDL': 'JNSPDL', });
lyr_Administrasi_1.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Jalan_2.set('fieldImages', {'NAMRJL': 'TextEdit', 'KONRJL': 'TextEdit', 'MATRJL': 'TextEdit', 'FGSRJL': 'TextEdit', 'UTKRJL': 'TextEdit', 'TOLRJL': 'TextEdit', 'WLYRJL': 'TextEdit', 'AUTRJL': 'TextEdit', 'KLSRJL': 'TextEdit', 'SPCRJL': 'TextEdit', 'JPARJL': 'TextEdit', 'ARHRJL': 'TextEdit', 'STARJL': 'TextEdit', 'KLLRJL': 'TextEdit', 'MEDRJL': 'TextEdit', 'LOCRJL': 'TextEdit', 'JARRJL': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_Pendidikan_3.set('fieldImages', {'NAMOBJ': 'TextEdit', 'LUAS': 'TextEdit', 'KATPDK': 'TextEdit', 'JLPDDK': 'TextEdit', 'FGGPDK': 'TextEdit', 'REMARK': 'TextEdit', 'FCODE': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'JJGPDF': 'TextEdit', 'JNSPDL': 'TextEdit', });
lyr_Administrasi_1.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'inline label - always visible', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Jalan_2.set('fieldLabels', {'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'inline label - always visible', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_Pendidikan_3.set('fieldLabels', {'NAMOBJ': 'no label', 'LUAS': 'no label', 'KATPDK': 'no label', 'JLPDDK': 'no label', 'FGGPDK': 'no label', 'REMARK': 'inline label - always visible', 'FCODE': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'JJGPDF': 'no label', 'JNSPDL': 'no label', });
lyr_Pendidikan_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
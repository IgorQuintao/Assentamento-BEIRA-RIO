var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_faixadominioBAreprojetadoa_1 = new ol.format.GeoJSON();
var features_faixadominioBAreprojetadoa_1 = format_faixadominioBAreprojetadoa_1.readFeatures(json_faixadominioBAreprojetadoa_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_faixadominioBAreprojetadoa_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_faixadominioBAreprojetadoa_1.addFeatures(features_faixadominioBAreprojetadoa_1);
var lyr_faixadominioBAreprojetadoa_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_faixadominioBAreprojetadoa_1, 
                style: style_faixadominioBAreprojetadoa_1,
                popuplayertitle: 'faixa-dominio-BA — reprojetadoa',
                interactive: true,
                title: '<img src="styles/legend/faixadominioBAreprojetadoa_1.png" /> faixa-dominio-BA — reprojetadoa'
            });
var format_PerimetroBDNPABEIRARIOassentamento_brasil_ba_2 = new ol.format.GeoJSON();
var features_PerimetroBDNPABEIRARIOassentamento_brasil_ba_2 = format_PerimetroBDNPABEIRARIOassentamento_brasil_ba_2.readFeatures(json_PerimetroBDNPABEIRARIOassentamento_brasil_ba_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PerimetroBDNPABEIRARIOassentamento_brasil_ba_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PerimetroBDNPABEIRARIOassentamento_brasil_ba_2.addFeatures(features_PerimetroBDNPABEIRARIOassentamento_brasil_ba_2);
var lyr_PerimetroBDNPABEIRARIOassentamento_brasil_ba_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PerimetroBDNPABEIRARIOassentamento_brasil_ba_2, 
                style: style_PerimetroBDNPABEIRARIOassentamento_brasil_ba_2,
                popuplayertitle: 'Perimetro-BDN-PA-BEIRA-RIO — assentamento_brasil_ba',
                interactive: true,
                title: '<img src="styles/legend/PerimetroBDNPABEIRARIOassentamento_brasil_ba_2.png" /> Perimetro-BDN-PA-BEIRA-RIO — assentamento_brasil_ba'
            });
var format_preprojeto_PA_Beira_Rio_SIRGAS2000_3 = new ol.format.GeoJSON();
var features_preprojeto_PA_Beira_Rio_SIRGAS2000_3 = format_preprojeto_PA_Beira_Rio_SIRGAS2000_3.readFeatures(json_preprojeto_PA_Beira_Rio_SIRGAS2000_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_preprojeto_PA_Beira_Rio_SIRGAS2000_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_preprojeto_PA_Beira_Rio_SIRGAS2000_3.addFeatures(features_preprojeto_PA_Beira_Rio_SIRGAS2000_3);
var lyr_preprojeto_PA_Beira_Rio_SIRGAS2000_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_preprojeto_PA_Beira_Rio_SIRGAS2000_3, 
                style: style_preprojeto_PA_Beira_Rio_SIRGAS2000_3,
                popuplayertitle: 'pre-projeto_PA_Beira_Rio_SIRGAS2000',
                interactive: true,
                title: '<img src="styles/legend/preprojeto_PA_Beira_Rio_SIRGAS2000_3.png" /> pre-projeto_PA_Beira_Rio_SIRGAS2000'
            });
var format_Perimetro_PABEIRARIO_4 = new ol.format.GeoJSON();
var features_Perimetro_PABEIRARIO_4 = format_Perimetro_PABEIRARIO_4.readFeatures(json_Perimetro_PABEIRARIO_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Perimetro_PABEIRARIO_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Perimetro_PABEIRARIO_4.addFeatures(features_Perimetro_PABEIRARIO_4);
var lyr_Perimetro_PABEIRARIO_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Perimetro_PABEIRARIO_4, 
                style: style_Perimetro_PABEIRARIO_4,
                popuplayertitle: 'Perimetro_PA-BEIRA-RIO',
                interactive: true,
                title: '<img src="styles/legend/Perimetro_PABEIRARIO_4.png" /> Perimetro_PA-BEIRA-RIO'
            });
var format_assentamentoconfrontantePABEIRARIOassentamento_brasil_ba_5 = new ol.format.GeoJSON();
var features_assentamentoconfrontantePABEIRARIOassentamento_brasil_ba_5 = format_assentamentoconfrontantePABEIRARIOassentamento_brasil_ba_5.readFeatures(json_assentamentoconfrontantePABEIRARIOassentamento_brasil_ba_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_assentamentoconfrontantePABEIRARIOassentamento_brasil_ba_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_assentamentoconfrontantePABEIRARIOassentamento_brasil_ba_5.addFeatures(features_assentamentoconfrontantePABEIRARIOassentamento_brasil_ba_5);
var lyr_assentamentoconfrontantePABEIRARIOassentamento_brasil_ba_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_assentamentoconfrontantePABEIRARIOassentamento_brasil_ba_5, 
                style: style_assentamentoconfrontantePABEIRARIOassentamento_brasil_ba_5,
                popuplayertitle: 'assentamento-confrontante-PA-BEIRA-RIO — assentamento_brasil_ba',
                interactive: false,
                title: '<img src="styles/legend/assentamentoconfrontantePABEIRARIOassentamento_brasil_ba_5.png" /> assentamento-confrontante-PA-BEIRA-RIO — assentamento_brasil_ba'
            });
var format_confrontantesPABEIRARIOconfrontantespabeirario__sigef_brasil_ba_6 = new ol.format.GeoJSON();
var features_confrontantesPABEIRARIOconfrontantespabeirario__sigef_brasil_ba_6 = format_confrontantesPABEIRARIOconfrontantespabeirario__sigef_brasil_ba_6.readFeatures(json_confrontantesPABEIRARIOconfrontantespabeirario__sigef_brasil_ba_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_confrontantesPABEIRARIOconfrontantespabeirario__sigef_brasil_ba_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_confrontantesPABEIRARIOconfrontantespabeirario__sigef_brasil_ba_6.addFeatures(features_confrontantesPABEIRARIOconfrontantespabeirario__sigef_brasil_ba_6);
var lyr_confrontantesPABEIRARIOconfrontantespabeirario__sigef_brasil_ba_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_confrontantesPABEIRARIOconfrontantespabeirario__sigef_brasil_ba_6, 
                style: style_confrontantesPABEIRARIOconfrontantespabeirario__sigef_brasil_ba_6,
                popuplayertitle: 'confrontantes-PA-BEIRA-RIO — confrontantespabeirario__sigef_brasil_ba',
                interactive: false,
                title: '<img src="styles/legend/confrontantesPABEIRARIOconfrontantespabeirario__sigef_brasil_ba_6.png" /> confrontantes-PA-BEIRA-RIO — confrontantespabeirario__sigef_brasil_ba'
            });
var format_FazendaMinao_parcela_7 = new ol.format.GeoJSON();
var features_FazendaMinao_parcela_7 = format_FazendaMinao_parcela_7.readFeatures(json_FazendaMinao_parcela_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FazendaMinao_parcela_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FazendaMinao_parcela_7.addFeatures(features_FazendaMinao_parcela_7);
var lyr_FazendaMinao_parcela_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FazendaMinao_parcela_7, 
                style: style_FazendaMinao_parcela_7,
                popuplayertitle: 'Fazenda Minação_parcela',
                interactive: false,
                title: '<img src="styles/legend/FazendaMinao_parcela_7.png" /> Fazenda Minação_parcela'
            });
var format_FAZENDAMORRODOTUPYParte1_parcela_8 = new ol.format.GeoJSON();
var features_FAZENDAMORRODOTUPYParte1_parcela_8 = format_FAZENDAMORRODOTUPYParte1_parcela_8.readFeatures(json_FAZENDAMORRODOTUPYParte1_parcela_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FAZENDAMORRODOTUPYParte1_parcela_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FAZENDAMORRODOTUPYParte1_parcela_8.addFeatures(features_FAZENDAMORRODOTUPYParte1_parcela_8);
var lyr_FAZENDAMORRODOTUPYParte1_parcela_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FAZENDAMORRODOTUPYParte1_parcela_8, 
                style: style_FAZENDAMORRODOTUPYParte1_parcela_8,
                popuplayertitle: 'FAZENDA MORRO DO TUPY - Parte 1_parcela',
                interactive: false,
                title: '<img src="styles/legend/FAZENDAMORRODOTUPYParte1_parcela_8.png" /> FAZENDA MORRO DO TUPY - Parte 1_parcela'
            });
var format_FAZENDAPIRANHAS_parcela02_9 = new ol.format.GeoJSON();
var features_FAZENDAPIRANHAS_parcela02_9 = format_FAZENDAPIRANHAS_parcela02_9.readFeatures(json_FAZENDAPIRANHAS_parcela02_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FAZENDAPIRANHAS_parcela02_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FAZENDAPIRANHAS_parcela02_9.addFeatures(features_FAZENDAPIRANHAS_parcela02_9);
var lyr_FAZENDAPIRANHAS_parcela02_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FAZENDAPIRANHAS_parcela02_9, 
                style: style_FAZENDAPIRANHAS_parcela02_9,
                popuplayertitle: 'FAZENDA PIRANHAS_parcela-02',
                interactive: false,
                title: '<img src="styles/legend/FAZENDAPIRANHAS_parcela02_9.png" /> FAZENDA PIRANHAS_parcela-02'
            });
var format_FAZENDAPIRANHAS_parcela04_10 = new ol.format.GeoJSON();
var features_FAZENDAPIRANHAS_parcela04_10 = format_FAZENDAPIRANHAS_parcela04_10.readFeatures(json_FAZENDAPIRANHAS_parcela04_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FAZENDAPIRANHAS_parcela04_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FAZENDAPIRANHAS_parcela04_10.addFeatures(features_FAZENDAPIRANHAS_parcela04_10);
var lyr_FAZENDAPIRANHAS_parcela04_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FAZENDAPIRANHAS_parcela04_10, 
                style: style_FAZENDAPIRANHAS_parcela04_10,
                popuplayertitle: 'FAZENDA PIRANHAS_parcela-04',
                interactive: false,
                title: '<img src="styles/legend/FAZENDAPIRANHAS_parcela04_10.png" /> FAZENDA PIRANHAS_parcela-04'
            });
var format_FAZENDAVALEVERDEParte2_11 = new ol.format.GeoJSON();
var features_FAZENDAVALEVERDEParte2_11 = format_FAZENDAVALEVERDEParte2_11.readFeatures(json_FAZENDAVALEVERDEParte2_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FAZENDAVALEVERDEParte2_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FAZENDAVALEVERDEParte2_11.addFeatures(features_FAZENDAVALEVERDEParte2_11);
var lyr_FAZENDAVALEVERDEParte2_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FAZENDAVALEVERDEParte2_11, 
                style: style_FAZENDAVALEVERDEParte2_11,
                popuplayertitle: 'FAZENDA VALE VERDE - Parte 2',
                interactive: false,
                title: '<img src="styles/legend/FAZENDAVALEVERDEParte2_11.png" /> FAZENDA VALE VERDE - Parte 2'
            });
var format_FAZENDAVALEVERDEParte1_12 = new ol.format.GeoJSON();
var features_FAZENDAVALEVERDEParte1_12 = format_FAZENDAVALEVERDEParte1_12.readFeatures(json_FAZENDAVALEVERDEParte1_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FAZENDAVALEVERDEParte1_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FAZENDAVALEVERDEParte1_12.addFeatures(features_FAZENDAVALEVERDEParte1_12);
var lyr_FAZENDAVALEVERDEParte1_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FAZENDAVALEVERDEParte1_12, 
                style: style_FAZENDAVALEVERDEParte1_12,
                popuplayertitle: 'FAZENDA VALE VERDE - Parte 1',
                interactive: false,
                title: '<img src="styles/legend/FAZENDAVALEVERDEParte1_12.png" /> FAZENDA VALE VERDE - Parte 1'
            });
var format_FAZENDAMORRODOTUPYParte1_vertice_13 = new ol.format.GeoJSON();
var features_FAZENDAMORRODOTUPYParte1_vertice_13 = format_FAZENDAMORRODOTUPYParte1_vertice_13.readFeatures(json_FAZENDAMORRODOTUPYParte1_vertice_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FAZENDAMORRODOTUPYParte1_vertice_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FAZENDAMORRODOTUPYParte1_vertice_13.addFeatures(features_FAZENDAMORRODOTUPYParte1_vertice_13);
var lyr_FAZENDAMORRODOTUPYParte1_vertice_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FAZENDAMORRODOTUPYParte1_vertice_13, 
                style: style_FAZENDAMORRODOTUPYParte1_vertice_13,
                popuplayertitle: 'FAZENDA MORRO DO TUPY - Parte 1_vertice',
                interactive: true,
                title: '<img src="styles/legend/FAZENDAMORRODOTUPYParte1_vertice_13.png" /> FAZENDA MORRO DO TUPY - Parte 1_vertice'
            });
var format_FazendaMinao_vertice_14 = new ol.format.GeoJSON();
var features_FazendaMinao_vertice_14 = format_FazendaMinao_vertice_14.readFeatures(json_FazendaMinao_vertice_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FazendaMinao_vertice_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FazendaMinao_vertice_14.addFeatures(features_FazendaMinao_vertice_14);
var lyr_FazendaMinao_vertice_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FazendaMinao_vertice_14, 
                style: style_FazendaMinao_vertice_14,
                popuplayertitle: 'Fazenda Minação_vertice',
                interactive: true,
                title: '<img src="styles/legend/FazendaMinao_vertice_14.png" /> Fazenda Minação_vertice'
            });
var format_vertices_FAZENDAVALEVERDEParte2_15 = new ol.format.GeoJSON();
var features_vertices_FAZENDAVALEVERDEParte2_15 = format_vertices_FAZENDAVALEVERDEParte2_15.readFeatures(json_vertices_FAZENDAVALEVERDEParte2_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_vertices_FAZENDAVALEVERDEParte2_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_vertices_FAZENDAVALEVERDEParte2_15.addFeatures(features_vertices_FAZENDAVALEVERDEParte2_15);
var lyr_vertices_FAZENDAVALEVERDEParte2_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_vertices_FAZENDAVALEVERDEParte2_15, 
                style: style_vertices_FAZENDAVALEVERDEParte2_15,
                popuplayertitle: 'vertices_FAZENDA VALE VERDE - Parte 2',
                interactive: true,
                title: '<img src="styles/legend/vertices_FAZENDAVALEVERDEParte2_15.png" /> vertices_FAZENDA VALE VERDE - Parte 2'
            });
var format_vertices_FAZENDAVALEVERDEParte1_16 = new ol.format.GeoJSON();
var features_vertices_FAZENDAVALEVERDEParte1_16 = format_vertices_FAZENDAVALEVERDEParte1_16.readFeatures(json_vertices_FAZENDAVALEVERDEParte1_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_vertices_FAZENDAVALEVERDEParte1_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_vertices_FAZENDAVALEVERDEParte1_16.addFeatures(features_vertices_FAZENDAVALEVERDEParte1_16);
var lyr_vertices_FAZENDAVALEVERDEParte1_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_vertices_FAZENDAVALEVERDEParte1_16, 
                style: style_vertices_FAZENDAVALEVERDEParte1_16,
                popuplayertitle: 'vertices_FAZENDA VALE VERDE - Parte 1',
                interactive: true,
                title: '<img src="styles/legend/vertices_FAZENDAVALEVERDEParte1_16.png" /> vertices_FAZENDA VALE VERDE - Parte 1'
            });
var format_vertices_FazendaSoSebastioParcela1_17 = new ol.format.GeoJSON();
var features_vertices_FazendaSoSebastioParcela1_17 = format_vertices_FazendaSoSebastioParcela1_17.readFeatures(json_vertices_FazendaSoSebastioParcela1_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_vertices_FazendaSoSebastioParcela1_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_vertices_FazendaSoSebastioParcela1_17.addFeatures(features_vertices_FazendaSoSebastioParcela1_17);
var lyr_vertices_FazendaSoSebastioParcela1_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_vertices_FazendaSoSebastioParcela1_17, 
                style: style_vertices_FazendaSoSebastioParcela1_17,
                popuplayertitle: 'vertices_Fazenda São Sebastião - Parcela 1',
                interactive: true,
                title: '<img src="styles/legend/vertices_FazendaSoSebastioParcela1_17.png" /> vertices_Fazenda São Sebastião - Parcela 1'
            });
var format_vertices_FAZENDAGUASBELAS_18 = new ol.format.GeoJSON();
var features_vertices_FAZENDAGUASBELAS_18 = format_vertices_FAZENDAGUASBELAS_18.readFeatures(json_vertices_FAZENDAGUASBELAS_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_vertices_FAZENDAGUASBELAS_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_vertices_FAZENDAGUASBELAS_18.addFeatures(features_vertices_FAZENDAGUASBELAS_18);
var lyr_vertices_FAZENDAGUASBELAS_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_vertices_FAZENDAGUASBELAS_18, 
                style: style_vertices_FAZENDAGUASBELAS_18,
                popuplayertitle: 'vertices_FAZENDA ÁGUAS BELAS',
                interactive: true,
                title: '<img src="styles/legend/vertices_FAZENDAGUASBELAS_18.png" /> vertices_FAZENDA ÁGUAS BELAS'
            });
var format_vertices_FAZENDALAGOADOCHICO_19 = new ol.format.GeoJSON();
var features_vertices_FAZENDALAGOADOCHICO_19 = format_vertices_FAZENDALAGOADOCHICO_19.readFeatures(json_vertices_FAZENDALAGOADOCHICO_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_vertices_FAZENDALAGOADOCHICO_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_vertices_FAZENDALAGOADOCHICO_19.addFeatures(features_vertices_FAZENDALAGOADOCHICO_19);
var lyr_vertices_FAZENDALAGOADOCHICO_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_vertices_FAZENDALAGOADOCHICO_19, 
                style: style_vertices_FAZENDALAGOADOCHICO_19,
                popuplayertitle: 'vertices_FAZENDA LAGOA DO CHICO',
                interactive: true,
                title: '<img src="styles/legend/vertices_FAZENDALAGOADOCHICO_19.png" /> vertices_FAZENDA LAGOA DO CHICO'
            });
var format_vertices_FAZENDATRSIRMOS_20 = new ol.format.GeoJSON();
var features_vertices_FAZENDATRSIRMOS_20 = format_vertices_FAZENDATRSIRMOS_20.readFeatures(json_vertices_FAZENDATRSIRMOS_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_vertices_FAZENDATRSIRMOS_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_vertices_FAZENDATRSIRMOS_20.addFeatures(features_vertices_FAZENDATRSIRMOS_20);
var lyr_vertices_FAZENDATRSIRMOS_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_vertices_FAZENDATRSIRMOS_20, 
                style: style_vertices_FAZENDATRSIRMOS_20,
                popuplayertitle: 'vertices_FAZENDA TRÊS IRMÃOS',
                interactive: true,
                title: '<img src="styles/legend/vertices_FAZENDATRSIRMOS_20.png" /> vertices_FAZENDA TRÊS IRMÃOS'
            });
var format_vertices_FAZENDAPIRANHAS_parcela04_21 = new ol.format.GeoJSON();
var features_vertices_FAZENDAPIRANHAS_parcela04_21 = format_vertices_FAZENDAPIRANHAS_parcela04_21.readFeatures(json_vertices_FAZENDAPIRANHAS_parcela04_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_vertices_FAZENDAPIRANHAS_parcela04_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_vertices_FAZENDAPIRANHAS_parcela04_21.addFeatures(features_vertices_FAZENDAPIRANHAS_parcela04_21);
var lyr_vertices_FAZENDAPIRANHAS_parcela04_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_vertices_FAZENDAPIRANHAS_parcela04_21, 
                style: style_vertices_FAZENDAPIRANHAS_parcela04_21,
                popuplayertitle: 'vertices_FAZENDA PIRANHAS_parcela-04',
                interactive: true,
                title: '<img src="styles/legend/vertices_FAZENDAPIRANHAS_parcela04_21.png" /> vertices_FAZENDA PIRANHAS_parcela-04'
            });
var format_vertices_FAZENDAPIRANHAS_parcela02_22 = new ol.format.GeoJSON();
var features_vertices_FAZENDAPIRANHAS_parcela02_22 = format_vertices_FAZENDAPIRANHAS_parcela02_22.readFeatures(json_vertices_FAZENDAPIRANHAS_parcela02_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_vertices_FAZENDAPIRANHAS_parcela02_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_vertices_FAZENDAPIRANHAS_parcela02_22.addFeatures(features_vertices_FAZENDAPIRANHAS_parcela02_22);
var lyr_vertices_FAZENDAPIRANHAS_parcela02_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_vertices_FAZENDAPIRANHAS_parcela02_22, 
                style: style_vertices_FAZENDAPIRANHAS_parcela02_22,
                popuplayertitle: 'vertices_FAZENDA PIRANHAS_parcela-02',
                interactive: true,
                title: '<img src="styles/legend/vertices_FAZENDAPIRANHAS_parcela02_22.png" /> vertices_FAZENDA PIRANHAS_parcela-02'
            });
var format_vertices_FAZENDAPIRANHAS_parcela01_23 = new ol.format.GeoJSON();
var features_vertices_FAZENDAPIRANHAS_parcela01_23 = format_vertices_FAZENDAPIRANHAS_parcela01_23.readFeatures(json_vertices_FAZENDAPIRANHAS_parcela01_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_vertices_FAZENDAPIRANHAS_parcela01_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_vertices_FAZENDAPIRANHAS_parcela01_23.addFeatures(features_vertices_FAZENDAPIRANHAS_parcela01_23);
var lyr_vertices_FAZENDAPIRANHAS_parcela01_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_vertices_FAZENDAPIRANHAS_parcela01_23, 
                style: style_vertices_FAZENDAPIRANHAS_parcela01_23,
                popuplayertitle: 'vertices_FAZENDA PIRANHAS_parcela-01',
                interactive: true,
                title: '<img src="styles/legend/vertices_FAZENDAPIRANHAS_parcela01_23.png" /> vertices_FAZENDA PIRANHAS_parcela-01'
            });
var format_verticesFAZENDAPIRANHAS_semdesmembrar_24 = new ol.format.GeoJSON();
var features_verticesFAZENDAPIRANHAS_semdesmembrar_24 = format_verticesFAZENDAPIRANHAS_semdesmembrar_24.readFeatures(json_verticesFAZENDAPIRANHAS_semdesmembrar_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_verticesFAZENDAPIRANHAS_semdesmembrar_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_verticesFAZENDAPIRANHAS_semdesmembrar_24.addFeatures(features_verticesFAZENDAPIRANHAS_semdesmembrar_24);
var lyr_verticesFAZENDAPIRANHAS_semdesmembrar_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_verticesFAZENDAPIRANHAS_semdesmembrar_24, 
                style: style_verticesFAZENDAPIRANHAS_semdesmembrar_24,
                popuplayertitle: 'vertices-FAZENDA PIRANHAS_sem-desmembrar',
                interactive: true,
                title: '<img src="styles/legend/verticesFAZENDAPIRANHAS_semdesmembrar_24.png" /> vertices-FAZENDA PIRANHAS_sem-desmembrar'
            });
var format_verticesperimetro2025_25 = new ol.format.GeoJSON();
var features_verticesperimetro2025_25 = format_verticesperimetro2025_25.readFeatures(json_verticesperimetro2025_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_verticesperimetro2025_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_verticesperimetro2025_25.addFeatures(features_verticesperimetro2025_25);
var lyr_verticesperimetro2025_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_verticesperimetro2025_25, 
                style: style_verticesperimetro2025_25,
                popuplayertitle: 'vertices-perimetro-2025',
                interactive: false,
                title: '<img src="styles/legend/verticesperimetro2025_25.png" /> vertices-perimetro-2025'
            });
var group_VERTICESCONFRONTANTES = new ol.layer.Group({
                                layers: [lyr_FAZENDAMORRODOTUPYParte1_vertice_13,lyr_FazendaMinao_vertice_14,lyr_vertices_FAZENDAVALEVERDEParte2_15,lyr_vertices_FAZENDAVALEVERDEParte1_16,lyr_vertices_FazendaSoSebastioParcela1_17,lyr_vertices_FAZENDAGUASBELAS_18,lyr_vertices_FAZENDALAGOADOCHICO_19,lyr_vertices_FAZENDATRSIRMOS_20,lyr_vertices_FAZENDAPIRANHAS_parcela04_21,lyr_vertices_FAZENDAPIRANHAS_parcela02_22,lyr_vertices_FAZENDAPIRANHAS_parcela01_23,lyr_verticesFAZENDAPIRANHAS_semdesmembrar_24,],
                                fold: 'open',
                                title: 'VERTICES-CONFRONTANTES'});
var group_PARCELASCONFRONTANTES = new ol.layer.Group({
                                layers: [lyr_assentamentoconfrontantePABEIRARIOassentamento_brasil_ba_5,lyr_confrontantesPABEIRARIOconfrontantespabeirario__sigef_brasil_ba_6,lyr_FazendaMinao_parcela_7,lyr_FAZENDAMORRODOTUPYParte1_parcela_8,lyr_FAZENDAPIRANHAS_parcela02_9,lyr_FAZENDAPIRANHAS_parcela04_10,lyr_FAZENDAVALEVERDEParte2_11,lyr_FAZENDAVALEVERDEParte1_12,],
                                fold: 'open',
                                title: 'PARCELAS-CONFRONTANTES'});

lyr_GoogleSatelliteHybrid_0.setVisible(false);lyr_faixadominioBAreprojetadoa_1.setVisible(true);lyr_PerimetroBDNPABEIRARIOassentamento_brasil_ba_2.setVisible(false);lyr_preprojeto_PA_Beira_Rio_SIRGAS2000_3.setVisible(false);lyr_Perimetro_PABEIRARIO_4.setVisible(true);lyr_assentamentoconfrontantePABEIRARIOassentamento_brasil_ba_5.setVisible(true);lyr_confrontantesPABEIRARIOconfrontantespabeirario__sigef_brasil_ba_6.setVisible(true);lyr_FazendaMinao_parcela_7.setVisible(true);lyr_FAZENDAMORRODOTUPYParte1_parcela_8.setVisible(true);lyr_FAZENDAPIRANHAS_parcela02_9.setVisible(true);lyr_FAZENDAPIRANHAS_parcela04_10.setVisible(true);lyr_FAZENDAVALEVERDEParte2_11.setVisible(true);lyr_FAZENDAVALEVERDEParte1_12.setVisible(true);lyr_FAZENDAMORRODOTUPYParte1_vertice_13.setVisible(true);lyr_FazendaMinao_vertice_14.setVisible(true);lyr_vertices_FAZENDAVALEVERDEParte2_15.setVisible(true);lyr_vertices_FAZENDAVALEVERDEParte1_16.setVisible(true);lyr_vertices_FazendaSoSebastioParcela1_17.setVisible(true);lyr_vertices_FAZENDAGUASBELAS_18.setVisible(true);lyr_vertices_FAZENDALAGOADOCHICO_19.setVisible(true);lyr_vertices_FAZENDATRSIRMOS_20.setVisible(true);lyr_vertices_FAZENDAPIRANHAS_parcela04_21.setVisible(true);lyr_vertices_FAZENDAPIRANHAS_parcela02_22.setVisible(true);lyr_vertices_FAZENDAPIRANHAS_parcela01_23.setVisible(true);lyr_verticesFAZENDAPIRANHAS_semdesmembrar_24.setVisible(true);lyr_verticesperimetro2025_25.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_faixadominioBAreprojetadoa_1,lyr_PerimetroBDNPABEIRARIOassentamento_brasil_ba_2,lyr_preprojeto_PA_Beira_Rio_SIRGAS2000_3,lyr_Perimetro_PABEIRARIO_4,group_PARCELASCONFRONTANTES,group_VERTICESCONFRONTANTES,lyr_verticesperimetro2025_25];
lyr_faixadominioBAreprojetadoa_1.set('fieldAliases', {'fid': 'fid', 'id_cide': 'id_cide', 'Id_Referen': 'Id_Referen', 'Codigo_Rod': 'Codigo_Rod', 'Tipo_Trech': 'Tipo_Trech', 'Unidade_Fe': 'Unidade_Fe', 'Codigo_SNV': 'Codigo_SNV', 'Codigo_SRE': 'Codigo_SRE', 'Local_Inic': 'Local_Inic', 'Local_Fim': 'Local_Fim', 'Quilometra': 'Quilometra', 'Quilometr0': 'Quilometr0', 'Extensao': 'Extensao', 'Superficie': 'Superficie', 'Tipo_Reves': 'Tipo_Reves', 'Convenio': 'Convenio', 'MP082': 'MP082', 'Jurisdicao': 'Jurisdicao', 'Referencia': 'Referencia', 'dt_ini': 'dt_ini', 'dt_fim': 'dt_fim', });
lyr_PerimetroBDNPABEIRARIOassentamento_brasil_ba_2.set('fieldAliases', {'fid': 'fid', 'cd_sipra': 'cd_sipra', 'uf': 'uf', 'nome_proje': 'nome_proje', 'municipio': 'municipio', 'area_hecta': 'area_hecta', 'capacidade': 'capacidade', 'num_famili': 'num_famili', 'fase': 'fase', 'data_de_cr': 'data_de_cr', 'forma_obte': 'forma_obte', 'data_obten': 'data_obten', 'area_calc_': 'area_calc_', 'sr': 'sr', 'descricao_': 'descricao_', });
lyr_preprojeto_PA_Beira_Rio_SIRGAS2000_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Join_Count': 'Join_Count', 'TARGET_FID': 'TARGET_FID', 'Text': 'Text', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'area_ha': 'area_ha', });
lyr_Perimetro_PABEIRARIO_4.set('fieldAliases', {'fid': 'fid', 'ID_Lote': 'ID_Lote', 'Cod_PA': 'Cod_PA', 'Grupo': 'Grupo', 'Numero': 'Numero', 'Cod_lote': 'Cod_lote', 'Descricao': 'Descricao', 'Nome_lote': 'Nome_lote', 'Municipio': 'Municipio', 'Tipologia': 'Tipologia', 'Fuso_UTM': 'Fuso_UTM', 'Obs': 'Obs', 'CNS': 'CNS', 'MAT': 'MAT', 'CPF': 'CPF', 'Nome_Prop': 'Nome_Prop', 'Tipo_lote': 'Tipo_lote', 'ods_gerado': 'ods_gerado', });
lyr_assentamentoconfrontantePABEIRARIOassentamento_brasil_ba_5.set('fieldAliases', {'fid': 'fid', 'cd_sipra': 'cd_sipra', 'uf': 'uf', 'nome_proje': 'nome_proje', 'municipio': 'municipio', 'area_hecta': 'area_hecta', 'capacidade': 'capacidade', 'num_famili': 'num_famili', 'fase': 'fase', 'data_de_cr': 'data_de_cr', 'forma_obte': 'forma_obte', 'data_obten': 'data_obten', 'area_calc_': 'area_calc_', 'sr': 'sr', 'descricao_': 'descricao_', });
lyr_confrontantesPABEIRARIOconfrontantespabeirario__sigef_brasil_ba_6.set('fieldAliases', {'fid': 'fid', 'parcela_co': 'parcela_co', 'rt': 'rt', 'art': 'art', 'situacao_i': 'situacao_i', 'codigo_imo': 'codigo_imo', 'data_submi': 'data_submi', 'data_aprov': 'data_aprov', 'status': 'status', 'nome_area': 'nome_area', 'registro_m': 'registro_m', 'registro_d': 'registro_d', 'municipio_': 'municipio_', 'uf_id': 'uf_id', });
lyr_FazendaMinao_parcela_7.set('fieldAliases', {'qrcode': 'qrcode', 'nome': 'nome', });
lyr_FAZENDAMORRODOTUPYParte1_parcela_8.set('fieldAliases', {'qrcode': 'qrcode', 'nome': 'nome', });
lyr_FAZENDAPIRANHAS_parcela02_9.set('fieldAliases', {'qrcode': 'qrcode', 'nome': 'nome', });
lyr_FAZENDAPIRANHAS_parcela04_10.set('fieldAliases', {'qrcode': 'qrcode', 'nome': 'nome', });
lyr_FAZENDAVALEVERDEParte2_11.set('fieldAliases', {'qrcode': 'qrcode', 'nome': 'nome', });
lyr_FAZENDAVALEVERDEParte1_12.set('fieldAliases', {'qrcode': 'qrcode', 'nome': 'nome', });
lyr_FAZENDAMORRODOTUPYParte1_vertice_13.set('fieldAliases', {'sigma_z': 'sigma_z', 'sigma_y': 'sigma_y', 'sigma_x': 'sigma_x', 'lado': 'lado', 'tipo_verti': 'tipo_verti', 'indice': 'indice', 'metodo_pos': 'metodo_pos', 'vertice': 'vertice', 'qrcode': 'qrcode', });
lyr_FazendaMinao_vertice_14.set('fieldAliases', {'sigma_z': 'sigma_z', 'sigma_y': 'sigma_y', 'sigma_x': 'sigma_x', 'lado': 'lado', 'tipo_verti': 'tipo_verti', 'indice': 'indice', 'metodo_pos': 'metodo_pos', 'vertice': 'vertice', 'qrcode': 'qrcode', });
lyr_vertices_FAZENDAVALEVERDEParte2_15.set('fieldAliases', {'sigma_z': 'sigma_z', 'sigma_y': 'sigma_y', 'sigma_x': 'sigma_x', 'lado': 'lado', 'tipo_verti': 'tipo_verti', 'indice': 'indice', 'metodo_pos': 'metodo_pos', 'vertice': 'vertice', 'qrcode': 'qrcode', });
lyr_vertices_FAZENDAVALEVERDEParte1_16.set('fieldAliases', {'sigma_z': 'sigma_z', 'sigma_y': 'sigma_y', 'sigma_x': 'sigma_x', 'lado': 'lado', 'tipo_verti': 'tipo_verti', 'indice': 'indice', 'metodo_pos': 'metodo_pos', 'vertice': 'vertice', 'qrcode': 'qrcode', });
lyr_vertices_FazendaSoSebastioParcela1_17.set('fieldAliases', {'sigma_z': 'sigma_z', 'sigma_y': 'sigma_y', 'sigma_x': 'sigma_x', 'lado': 'lado', 'tipo_verti': 'tipo_verti', 'indice': 'indice', 'metodo_pos': 'metodo_pos', 'vertice': 'vertice', 'qrcode': 'qrcode', });
lyr_vertices_FAZENDAGUASBELAS_18.set('fieldAliases', {'sigma_z': 'sigma_z', 'sigma_y': 'sigma_y', 'sigma_x': 'sigma_x', 'lado': 'lado', 'tipo_verti': 'tipo_verti', 'indice': 'indice', 'metodo_pos': 'metodo_pos', 'vertice': 'vertice', 'qrcode': 'qrcode', });
lyr_vertices_FAZENDALAGOADOCHICO_19.set('fieldAliases', {'sigma_z': 'sigma_z', 'sigma_y': 'sigma_y', 'sigma_x': 'sigma_x', 'lado': 'lado', 'tipo_verti': 'tipo_verti', 'indice': 'indice', 'metodo_pos': 'metodo_pos', 'vertice': 'vertice', 'qrcode': 'qrcode', });
lyr_vertices_FAZENDATRSIRMOS_20.set('fieldAliases', {'sigma_z': 'sigma_z', 'sigma_y': 'sigma_y', 'sigma_x': 'sigma_x', 'lado': 'lado', 'tipo_verti': 'tipo_verti', 'indice': 'indice', 'metodo_pos': 'metodo_pos', 'vertice': 'vertice', 'qrcode': 'qrcode', });
lyr_vertices_FAZENDAPIRANHAS_parcela04_21.set('fieldAliases', {'sigma_z': 'sigma_z', 'sigma_y': 'sigma_y', 'sigma_x': 'sigma_x', 'lado': 'lado', 'tipo_verti': 'tipo_verti', 'indice': 'indice', 'metodo_pos': 'metodo_pos', 'vertice': 'vertice', 'qrcode': 'qrcode', });
lyr_vertices_FAZENDAPIRANHAS_parcela02_22.set('fieldAliases', {'sigma_z': 'sigma_z', 'sigma_y': 'sigma_y', 'sigma_x': 'sigma_x', 'lado': 'lado', 'tipo_verti': 'tipo_verti', 'indice': 'indice', 'metodo_pos': 'metodo_pos', 'vertice': 'vertice', 'qrcode': 'qrcode', });
lyr_vertices_FAZENDAPIRANHAS_parcela01_23.set('fieldAliases', {'sigma_z': 'sigma_z', 'sigma_y': 'sigma_y', 'sigma_x': 'sigma_x', 'lado': 'lado', 'tipo_verti': 'tipo_verti', 'indice': 'indice', 'metodo_pos': 'metodo_pos', 'vertice': 'vertice', 'qrcode': 'qrcode', });
lyr_verticesFAZENDAPIRANHAS_semdesmembrar_24.set('fieldAliases', {'sigma_z': 'sigma_z', 'sigma_y': 'sigma_y', 'sigma_x': 'sigma_x', 'lado': 'lado', 'tipo_verti': 'tipo_verti', 'indice': 'indice', 'metodo_pos': 'metodo_pos', 'vertice': 'vertice', 'qrcode': 'qrcode', });
lyr_verticesperimetro2025_25.set('fieldAliases', {'nome_ok': 'nome_ok', 'dxxx': 'dxxx', 'dyyy': 'dyyy', 'dzzz': 'dzzz', 'hhh': 'hhh', 'met_posGPS': 'met_posGPS', 'fonteDados': 'fonteDados', 'TIPO': 'TIPO', });
lyr_faixadominioBAreprojetadoa_1.set('fieldImages', {'fid': 'TextEdit', 'id_cide': 'Range', 'Id_Referen': 'TextEdit', 'Codigo_Rod': 'TextEdit', 'Tipo_Trech': 'TextEdit', 'Unidade_Fe': 'TextEdit', 'Codigo_SNV': 'TextEdit', 'Codigo_SRE': 'TextEdit', 'Local_Inic': 'TextEdit', 'Local_Fim': 'TextEdit', 'Quilometra': 'TextEdit', 'Quilometr0': 'TextEdit', 'Extensao': 'TextEdit', 'Superficie': 'TextEdit', 'Tipo_Reves': 'TextEdit', 'Convenio': 'TextEdit', 'MP082': 'TextEdit', 'Jurisdicao': 'TextEdit', 'Referencia': 'TextEdit', 'dt_ini': 'DateTime', 'dt_fim': 'DateTime', });
lyr_PerimetroBDNPABEIRARIOassentamento_brasil_ba_2.set('fieldImages', {'fid': 'TextEdit', 'cd_sipra': 'TextEdit', 'uf': 'TextEdit', 'nome_proje': 'TextEdit', 'municipio': 'TextEdit', 'area_hecta': 'TextEdit', 'capacidade': 'Range', 'num_famili': 'Range', 'fase': 'Range', 'data_de_cr': 'TextEdit', 'forma_obte': 'TextEdit', 'data_obten': 'TextEdit', 'area_calc_': 'TextEdit', 'sr': 'TextEdit', 'descricao_': 'TextEdit', });
lyr_preprojeto_PA_Beira_Rio_SIRGAS2000_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'Join_Count': 'TextEdit', 'TARGET_FID': 'TextEdit', 'Text': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'area_ha': 'TextEdit', });
lyr_Perimetro_PABEIRARIO_4.set('fieldImages', {'fid': 'TextEdit', 'ID_Lote': 'TextEdit', 'Cod_PA': 'TextEdit', 'Grupo': 'TextEdit', 'Numero': 'TextEdit', 'Cod_lote': 'TextEdit', 'Descricao': 'TextEdit', 'Nome_lote': 'TextEdit', 'Municipio': 'TextEdit', 'Tipologia': 'TextEdit', 'Fuso_UTM': 'TextEdit', 'Obs': 'TextEdit', 'CNS': 'TextEdit', 'MAT': 'TextEdit', 'CPF': 'TextEdit', 'Nome_Prop': 'TextEdit', 'Tipo_lote': 'TextEdit', 'ods_gerado': 'TextEdit', });
lyr_assentamentoconfrontantePABEIRARIOassentamento_brasil_ba_5.set('fieldImages', {'fid': 'TextEdit', 'cd_sipra': 'TextEdit', 'uf': 'TextEdit', 'nome_proje': 'TextEdit', 'municipio': 'TextEdit', 'area_hecta': 'TextEdit', 'capacidade': 'Range', 'num_famili': 'Range', 'fase': 'Range', 'data_de_cr': 'TextEdit', 'forma_obte': 'TextEdit', 'data_obten': 'TextEdit', 'area_calc_': 'TextEdit', 'sr': 'TextEdit', 'descricao_': 'TextEdit', });
lyr_confrontantesPABEIRARIOconfrontantespabeirario__sigef_brasil_ba_6.set('fieldImages', {'fid': 'TextEdit', 'parcela_co': 'TextEdit', 'rt': 'TextEdit', 'art': 'TextEdit', 'situacao_i': 'TextEdit', 'codigo_imo': 'TextEdit', 'data_submi': 'DateTime', 'data_aprov': 'DateTime', 'status': 'TextEdit', 'nome_area': 'TextEdit', 'registro_m': 'TextEdit', 'registro_d': 'DateTime', 'municipio_': 'Range', 'uf_id': 'Range', });
lyr_FazendaMinao_parcela_7.set('fieldImages', {'qrcode': 'TextEdit', 'nome': 'TextEdit', });
lyr_FAZENDAMORRODOTUPYParte1_parcela_8.set('fieldImages', {'qrcode': 'TextEdit', 'nome': 'TextEdit', });
lyr_FAZENDAPIRANHAS_parcela02_9.set('fieldImages', {'qrcode': 'TextEdit', 'nome': 'TextEdit', });
lyr_FAZENDAPIRANHAS_parcela04_10.set('fieldImages', {'qrcode': 'TextEdit', 'nome': 'TextEdit', });
lyr_FAZENDAVALEVERDEParte2_11.set('fieldImages', {'qrcode': 'TextEdit', 'nome': 'TextEdit', });
lyr_FAZENDAVALEVERDEParte1_12.set('fieldImages', {'qrcode': 'TextEdit', 'nome': 'TextEdit', });
lyr_FAZENDAMORRODOTUPYParte1_vertice_13.set('fieldImages', {'sigma_z': 'TextEdit', 'sigma_y': 'TextEdit', 'sigma_x': 'TextEdit', 'lado': 'TextEdit', 'tipo_verti': 'TextEdit', 'indice': 'TextEdit', 'metodo_pos': 'TextEdit', 'vertice': 'TextEdit', 'qrcode': 'TextEdit', });
lyr_FazendaMinao_vertice_14.set('fieldImages', {'sigma_z': 'TextEdit', 'sigma_y': 'TextEdit', 'sigma_x': 'TextEdit', 'lado': 'TextEdit', 'tipo_verti': 'TextEdit', 'indice': 'TextEdit', 'metodo_pos': 'TextEdit', 'vertice': 'TextEdit', 'qrcode': 'TextEdit', });
lyr_vertices_FAZENDAVALEVERDEParte2_15.set('fieldImages', {'sigma_z': 'TextEdit', 'sigma_y': 'TextEdit', 'sigma_x': 'TextEdit', 'lado': 'TextEdit', 'tipo_verti': 'TextEdit', 'indice': 'TextEdit', 'metodo_pos': 'TextEdit', 'vertice': 'TextEdit', 'qrcode': 'TextEdit', });
lyr_vertices_FAZENDAVALEVERDEParte1_16.set('fieldImages', {'sigma_z': 'TextEdit', 'sigma_y': 'TextEdit', 'sigma_x': 'TextEdit', 'lado': 'TextEdit', 'tipo_verti': 'TextEdit', 'indice': 'TextEdit', 'metodo_pos': 'TextEdit', 'vertice': 'TextEdit', 'qrcode': 'TextEdit', });
lyr_vertices_FazendaSoSebastioParcela1_17.set('fieldImages', {'sigma_z': 'TextEdit', 'sigma_y': 'TextEdit', 'sigma_x': 'TextEdit', 'lado': 'TextEdit', 'tipo_verti': 'TextEdit', 'indice': 'TextEdit', 'metodo_pos': 'TextEdit', 'vertice': 'TextEdit', 'qrcode': 'TextEdit', });
lyr_vertices_FAZENDAGUASBELAS_18.set('fieldImages', {'sigma_z': 'TextEdit', 'sigma_y': 'TextEdit', 'sigma_x': 'TextEdit', 'lado': 'TextEdit', 'tipo_verti': 'TextEdit', 'indice': 'TextEdit', 'metodo_pos': 'TextEdit', 'vertice': 'TextEdit', 'qrcode': 'TextEdit', });
lyr_vertices_FAZENDALAGOADOCHICO_19.set('fieldImages', {'sigma_z': 'TextEdit', 'sigma_y': 'TextEdit', 'sigma_x': 'TextEdit', 'lado': 'TextEdit', 'tipo_verti': 'TextEdit', 'indice': 'TextEdit', 'metodo_pos': 'TextEdit', 'vertice': 'TextEdit', 'qrcode': 'TextEdit', });
lyr_vertices_FAZENDATRSIRMOS_20.set('fieldImages', {'sigma_z': 'TextEdit', 'sigma_y': 'TextEdit', 'sigma_x': 'TextEdit', 'lado': 'TextEdit', 'tipo_verti': 'TextEdit', 'indice': 'TextEdit', 'metodo_pos': 'TextEdit', 'vertice': 'TextEdit', 'qrcode': 'TextEdit', });
lyr_vertices_FAZENDAPIRANHAS_parcela04_21.set('fieldImages', {'sigma_z': 'TextEdit', 'sigma_y': 'TextEdit', 'sigma_x': 'TextEdit', 'lado': 'TextEdit', 'tipo_verti': 'TextEdit', 'indice': 'TextEdit', 'metodo_pos': 'TextEdit', 'vertice': 'TextEdit', 'qrcode': 'TextEdit', });
lyr_vertices_FAZENDAPIRANHAS_parcela02_22.set('fieldImages', {'sigma_z': 'TextEdit', 'sigma_y': 'TextEdit', 'sigma_x': 'TextEdit', 'lado': 'TextEdit', 'tipo_verti': 'TextEdit', 'indice': 'TextEdit', 'metodo_pos': 'TextEdit', 'vertice': 'TextEdit', 'qrcode': 'TextEdit', });
lyr_vertices_FAZENDAPIRANHAS_parcela01_23.set('fieldImages', {'sigma_z': 'TextEdit', 'sigma_y': 'TextEdit', 'sigma_x': 'TextEdit', 'lado': 'TextEdit', 'tipo_verti': 'TextEdit', 'indice': 'TextEdit', 'metodo_pos': 'TextEdit', 'vertice': 'TextEdit', 'qrcode': 'TextEdit', });
lyr_verticesFAZENDAPIRANHAS_semdesmembrar_24.set('fieldImages', {'sigma_z': 'TextEdit', 'sigma_y': 'TextEdit', 'sigma_x': 'TextEdit', 'lado': 'TextEdit', 'tipo_verti': 'TextEdit', 'indice': 'TextEdit', 'metodo_pos': 'TextEdit', 'vertice': 'TextEdit', 'qrcode': 'TextEdit', });
lyr_verticesperimetro2025_25.set('fieldImages', {'nome_ok': 'TextEdit', 'dxxx': 'TextEdit', 'dyyy': 'TextEdit', 'dzzz': 'TextEdit', 'hhh': 'TextEdit', 'met_posGPS': 'TextEdit', 'fonteDados': 'TextEdit', 'TIPO': 'TextEdit', });
lyr_faixadominioBAreprojetadoa_1.set('fieldLabels', {'fid': 'hidden field', 'id_cide': 'no label', 'Id_Referen': 'no label', 'Codigo_Rod': 'no label', 'Tipo_Trech': 'no label', 'Unidade_Fe': 'no label', 'Codigo_SNV': 'no label', 'Codigo_SRE': 'no label', 'Local_Inic': 'no label', 'Local_Fim': 'no label', 'Quilometra': 'no label', 'Quilometr0': 'no label', 'Extensao': 'no label', 'Superficie': 'no label', 'Tipo_Reves': 'no label', 'Convenio': 'no label', 'MP082': 'no label', 'Jurisdicao': 'no label', 'Referencia': 'no label', 'dt_ini': 'no label', 'dt_fim': 'no label', });
lyr_PerimetroBDNPABEIRARIOassentamento_brasil_ba_2.set('fieldLabels', {'fid': 'no label', 'cd_sipra': 'no label', 'uf': 'no label', 'nome_proje': 'no label', 'municipio': 'no label', 'area_hecta': 'no label', 'capacidade': 'no label', 'num_famili': 'no label', 'fase': 'no label', 'data_de_cr': 'no label', 'forma_obte': 'no label', 'data_obten': 'no label', 'area_calc_': 'no label', 'sr': 'no label', 'descricao_': 'no label', });
lyr_preprojeto_PA_Beira_Rio_SIRGAS2000_3.set('fieldLabels', {'OBJECTID': 'no label', 'Join_Count': 'no label', 'TARGET_FID': 'no label', 'Text': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'area_ha': 'no label', });
lyr_Perimetro_PABEIRARIO_4.set('fieldLabels', {'fid': 'hidden field', 'ID_Lote': 'no label', 'Cod_PA': 'no label', 'Grupo': 'no label', 'Numero': 'no label', 'Cod_lote': 'no label', 'Descricao': 'no label', 'Nome_lote': 'no label', 'Municipio': 'no label', 'Tipologia': 'no label', 'Fuso_UTM': 'no label', 'Obs': 'no label', 'CNS': 'no label', 'MAT': 'no label', 'CPF': 'no label', 'Nome_Prop': 'no label', 'Tipo_lote': 'no label', 'ods_gerado': 'no label', });
lyr_assentamentoconfrontantePABEIRARIOassentamento_brasil_ba_5.set('fieldLabels', {'fid': 'hidden field', 'cd_sipra': 'no label', 'uf': 'no label', 'nome_proje': 'no label', 'municipio': 'no label', 'area_hecta': 'no label', 'capacidade': 'no label', 'num_famili': 'no label', 'fase': 'no label', 'data_de_cr': 'no label', 'forma_obte': 'no label', 'data_obten': 'no label', 'area_calc_': 'no label', 'sr': 'no label', 'descricao_': 'no label', });
lyr_confrontantesPABEIRARIOconfrontantespabeirario__sigef_brasil_ba_6.set('fieldLabels', {'fid': 'hidden field', 'parcela_co': 'no label', 'rt': 'no label', 'art': 'no label', 'situacao_i': 'no label', 'codigo_imo': 'no label', 'data_submi': 'no label', 'data_aprov': 'no label', 'status': 'no label', 'nome_area': 'no label', 'registro_m': 'no label', 'registro_d': 'no label', 'municipio_': 'no label', 'uf_id': 'no label', });
lyr_FazendaMinao_parcela_7.set('fieldLabels', {'qrcode': 'no label', 'nome': 'no label', });
lyr_FAZENDAMORRODOTUPYParte1_parcela_8.set('fieldLabels', {'qrcode': 'no label', 'nome': 'no label', });
lyr_FAZENDAPIRANHAS_parcela02_9.set('fieldLabels', {'qrcode': 'no label', 'nome': 'no label', });
lyr_FAZENDAPIRANHAS_parcela04_10.set('fieldLabels', {'qrcode': 'no label', 'nome': 'no label', });
lyr_FAZENDAVALEVERDEParte2_11.set('fieldLabels', {'qrcode': 'no label', 'nome': 'no label', });
lyr_FAZENDAVALEVERDEParte1_12.set('fieldLabels', {'qrcode': 'no label', 'nome': 'no label', });
lyr_FAZENDAMORRODOTUPYParte1_vertice_13.set('fieldLabels', {'sigma_z': 'no label', 'sigma_y': 'no label', 'sigma_x': 'no label', 'lado': 'no label', 'tipo_verti': 'no label', 'indice': 'no label', 'metodo_pos': 'no label', 'vertice': 'no label', 'qrcode': 'no label', });
lyr_FazendaMinao_vertice_14.set('fieldLabels', {'sigma_z': 'no label', 'sigma_y': 'no label', 'sigma_x': 'no label', 'lado': 'no label', 'tipo_verti': 'no label', 'indice': 'no label', 'metodo_pos': 'no label', 'vertice': 'no label', 'qrcode': 'no label', });
lyr_vertices_FAZENDAVALEVERDEParte2_15.set('fieldLabels', {'sigma_z': 'no label', 'sigma_y': 'no label', 'sigma_x': 'no label', 'lado': 'no label', 'tipo_verti': 'no label', 'indice': 'no label', 'metodo_pos': 'no label', 'vertice': 'no label', 'qrcode': 'no label', });
lyr_vertices_FAZENDAVALEVERDEParte1_16.set('fieldLabels', {'sigma_z': 'no label', 'sigma_y': 'no label', 'sigma_x': 'no label', 'lado': 'no label', 'tipo_verti': 'no label', 'indice': 'no label', 'metodo_pos': 'no label', 'vertice': 'no label', 'qrcode': 'no label', });
lyr_vertices_FazendaSoSebastioParcela1_17.set('fieldLabels', {'sigma_z': 'no label', 'sigma_y': 'no label', 'sigma_x': 'no label', 'lado': 'no label', 'tipo_verti': 'no label', 'indice': 'no label', 'metodo_pos': 'no label', 'vertice': 'no label', 'qrcode': 'no label', });
lyr_vertices_FAZENDAGUASBELAS_18.set('fieldLabels', {'sigma_z': 'no label', 'sigma_y': 'no label', 'sigma_x': 'no label', 'lado': 'no label', 'tipo_verti': 'no label', 'indice': 'no label', 'metodo_pos': 'no label', 'vertice': 'no label', 'qrcode': 'no label', });
lyr_vertices_FAZENDALAGOADOCHICO_19.set('fieldLabels', {'sigma_z': 'no label', 'sigma_y': 'no label', 'sigma_x': 'no label', 'lado': 'no label', 'tipo_verti': 'no label', 'indice': 'no label', 'metodo_pos': 'no label', 'vertice': 'no label', 'qrcode': 'no label', });
lyr_vertices_FAZENDATRSIRMOS_20.set('fieldLabels', {'sigma_z': 'no label', 'sigma_y': 'no label', 'sigma_x': 'no label', 'lado': 'no label', 'tipo_verti': 'no label', 'indice': 'no label', 'metodo_pos': 'no label', 'vertice': 'no label', 'qrcode': 'no label', });
lyr_vertices_FAZENDAPIRANHAS_parcela04_21.set('fieldLabels', {'sigma_z': 'no label', 'sigma_y': 'no label', 'sigma_x': 'no label', 'lado': 'no label', 'tipo_verti': 'no label', 'indice': 'no label', 'metodo_pos': 'no label', 'vertice': 'no label', 'qrcode': 'no label', });
lyr_vertices_FAZENDAPIRANHAS_parcela02_22.set('fieldLabels', {'sigma_z': 'no label', 'sigma_y': 'no label', 'sigma_x': 'no label', 'lado': 'no label', 'tipo_verti': 'no label', 'indice': 'no label', 'metodo_pos': 'no label', 'vertice': 'no label', 'qrcode': 'no label', });
lyr_vertices_FAZENDAPIRANHAS_parcela01_23.set('fieldLabels', {'sigma_z': 'no label', 'sigma_y': 'no label', 'sigma_x': 'no label', 'lado': 'no label', 'tipo_verti': 'no label', 'indice': 'no label', 'metodo_pos': 'no label', 'vertice': 'no label', 'qrcode': 'no label', });
lyr_verticesFAZENDAPIRANHAS_semdesmembrar_24.set('fieldLabels', {'sigma_z': 'no label', 'sigma_y': 'no label', 'sigma_x': 'no label', 'lado': 'no label', 'tipo_verti': 'no label', 'indice': 'no label', 'metodo_pos': 'no label', 'vertice': 'no label', 'qrcode': 'no label', });
lyr_verticesperimetro2025_25.set('fieldLabels', {'nome_ok': 'no label', 'dxxx': 'no label', 'dyyy': 'no label', 'dzzz': 'no label', 'hhh': 'no label', 'met_posGPS': 'no label', 'fonteDados': 'no label', 'TIPO': 'no label', });
lyr_verticesperimetro2025_25.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
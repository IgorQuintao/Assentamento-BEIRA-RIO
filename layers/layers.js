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
                interactive: false,
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
                interactive: false,
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
                interactive: true,
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
                interactive: true,
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
                interactive: true,
                title: '<img src="styles/legend/FazendaMinao_parcela_7.png" /> Fazenda Minação_parcela'
            });
var format_FazendaSantoAntnioI_parcela_8 = new ol.format.GeoJSON();
var features_FazendaSantoAntnioI_parcela_8 = format_FazendaSantoAntnioI_parcela_8.readFeatures(json_FazendaSantoAntnioI_parcela_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FazendaSantoAntnioI_parcela_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FazendaSantoAntnioI_parcela_8.addFeatures(features_FazendaSantoAntnioI_parcela_8);
var lyr_FazendaSantoAntnioI_parcela_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FazendaSantoAntnioI_parcela_8, 
                style: style_FazendaSantoAntnioI_parcela_8,
                popuplayertitle: 'Fazenda Santo Antônio I_parcela',
                interactive: true,
                title: '<img src="styles/legend/FazendaSantoAntnioI_parcela_8.png" /> Fazenda Santo Antônio I_parcela'
            });
var format_FAZENDAMORRODOTUPYParte1_parcela_9 = new ol.format.GeoJSON();
var features_FAZENDAMORRODOTUPYParte1_parcela_9 = format_FAZENDAMORRODOTUPYParte1_parcela_9.readFeatures(json_FAZENDAMORRODOTUPYParte1_parcela_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FAZENDAMORRODOTUPYParte1_parcela_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FAZENDAMORRODOTUPYParte1_parcela_9.addFeatures(features_FAZENDAMORRODOTUPYParte1_parcela_9);
var lyr_FAZENDAMORRODOTUPYParte1_parcela_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FAZENDAMORRODOTUPYParte1_parcela_9, 
                style: style_FAZENDAMORRODOTUPYParte1_parcela_9,
                popuplayertitle: 'FAZENDA MORRO DO TUPY - Parte 1_parcela',
                interactive: true,
                title: '<img src="styles/legend/FAZENDAMORRODOTUPYParte1_parcela_9.png" /> FAZENDA MORRO DO TUPY - Parte 1_parcela'
            });
var format_FAZENDASANTOANTONIO_parcela_10 = new ol.format.GeoJSON();
var features_FAZENDASANTOANTONIO_parcela_10 = format_FAZENDASANTOANTONIO_parcela_10.readFeatures(json_FAZENDASANTOANTONIO_parcela_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FAZENDASANTOANTONIO_parcela_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FAZENDASANTOANTONIO_parcela_10.addFeatures(features_FAZENDASANTOANTONIO_parcela_10);
var lyr_FAZENDASANTOANTONIO_parcela_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FAZENDASANTOANTONIO_parcela_10, 
                style: style_FAZENDASANTOANTONIO_parcela_10,
                popuplayertitle: 'FAZENDA SANTO ANTONIO_parcela',
                interactive: true,
                title: '<img src="styles/legend/FAZENDASANTOANTONIO_parcela_10.png" /> FAZENDA SANTO ANTONIO_parcela'
            });
var format_FAZENDAPIRANHAS_parcela02_11 = new ol.format.GeoJSON();
var features_FAZENDAPIRANHAS_parcela02_11 = format_FAZENDAPIRANHAS_parcela02_11.readFeatures(json_FAZENDAPIRANHAS_parcela02_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FAZENDAPIRANHAS_parcela02_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FAZENDAPIRANHAS_parcela02_11.addFeatures(features_FAZENDAPIRANHAS_parcela02_11);
var lyr_FAZENDAPIRANHAS_parcela02_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FAZENDAPIRANHAS_parcela02_11, 
                style: style_FAZENDAPIRANHAS_parcela02_11,
                popuplayertitle: 'FAZENDA PIRANHAS_parcela-02',
                interactive: true,
                title: '<img src="styles/legend/FAZENDAPIRANHAS_parcela02_11.png" /> FAZENDA PIRANHAS_parcela-02'
            });
var format_FAZENDAPIRANHAS_parcela04_12 = new ol.format.GeoJSON();
var features_FAZENDAPIRANHAS_parcela04_12 = format_FAZENDAPIRANHAS_parcela04_12.readFeatures(json_FAZENDAPIRANHAS_parcela04_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FAZENDAPIRANHAS_parcela04_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FAZENDAPIRANHAS_parcela04_12.addFeatures(features_FAZENDAPIRANHAS_parcela04_12);
var lyr_FAZENDAPIRANHAS_parcela04_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FAZENDAPIRANHAS_parcela04_12, 
                style: style_FAZENDAPIRANHAS_parcela04_12,
                popuplayertitle: 'FAZENDA PIRANHAS_parcela-04',
                interactive: true,
                title: '<img src="styles/legend/FAZENDAPIRANHAS_parcela04_12.png" /> FAZENDA PIRANHAS_parcela-04'
            });
var format_FAZENDAVALEVERDEParte2_13 = new ol.format.GeoJSON();
var features_FAZENDAVALEVERDEParte2_13 = format_FAZENDAVALEVERDEParte2_13.readFeatures(json_FAZENDAVALEVERDEParte2_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FAZENDAVALEVERDEParte2_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FAZENDAVALEVERDEParte2_13.addFeatures(features_FAZENDAVALEVERDEParte2_13);
var lyr_FAZENDAVALEVERDEParte2_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FAZENDAVALEVERDEParte2_13, 
                style: style_FAZENDAVALEVERDEParte2_13,
                popuplayertitle: 'FAZENDA VALE VERDE - Parte 2',
                interactive: true,
                title: '<img src="styles/legend/FAZENDAVALEVERDEParte2_13.png" /> FAZENDA VALE VERDE - Parte 2'
            });
var format_FAZENDAVALEVERDEParte1_14 = new ol.format.GeoJSON();
var features_FAZENDAVALEVERDEParte1_14 = format_FAZENDAVALEVERDEParte1_14.readFeatures(json_FAZENDAVALEVERDEParte1_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FAZENDAVALEVERDEParte1_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FAZENDAVALEVERDEParte1_14.addFeatures(features_FAZENDAVALEVERDEParte1_14);
var lyr_FAZENDAVALEVERDEParte1_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FAZENDAVALEVERDEParte1_14, 
                style: style_FAZENDAVALEVERDEParte1_14,
                popuplayertitle: 'FAZENDA VALE VERDE - Parte 1',
                interactive: true,
                title: '<img src="styles/legend/FAZENDAVALEVERDEParte1_14.png" /> FAZENDA VALE VERDE - Parte 1'
            });
var format_lote_15 = new ol.format.GeoJSON();
var features_lote_15 = format_lote_15.readFeatures(json_lote_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lote_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lote_15.addFeatures(features_lote_15);
var lyr_lote_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lote_15, 
                style: style_lote_15,
                popuplayertitle: 'lote',
                interactive: true,
                title: '<img src="styles/legend/lote_15.png" /> lote'
            });
var format_poligonoextraidoODSv4poligonos_wgs84_corrigido_16 = new ol.format.GeoJSON();
var features_poligonoextraidoODSv4poligonos_wgs84_corrigido_16 = format_poligonoextraidoODSv4poligonos_wgs84_corrigido_16.readFeatures(json_poligonoextraidoODSv4poligonos_wgs84_corrigido_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_poligonoextraidoODSv4poligonos_wgs84_corrigido_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_poligonoextraidoODSv4poligonos_wgs84_corrigido_16.addFeatures(features_poligonoextraidoODSv4poligonos_wgs84_corrigido_16);
var lyr_poligonoextraidoODSv4poligonos_wgs84_corrigido_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_poligonoextraidoODSv4poligonos_wgs84_corrigido_16, 
                style: style_poligonoextraidoODSv4poligonos_wgs84_corrigido_16,
                popuplayertitle: 'poligono-extraido-ODS-v4 — poligonos_wgs84_corrigido',
                interactive: false,
                title: '<img src="styles/legend/poligonoextraidoODSv4poligonos_wgs84_corrigido_16.png" /> poligono-extraido-ODS-v4 — poligonos_wgs84_corrigido'
            });
var format_verticesextraidosODSv4vertices_extraidos_17 = new ol.format.GeoJSON();
var features_verticesextraidosODSv4vertices_extraidos_17 = format_verticesextraidosODSv4vertices_extraidos_17.readFeatures(json_verticesextraidosODSv4vertices_extraidos_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_verticesextraidosODSv4vertices_extraidos_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_verticesextraidosODSv4vertices_extraidos_17.addFeatures(features_verticesextraidosODSv4vertices_extraidos_17);
var lyr_verticesextraidosODSv4vertices_extraidos_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_verticesextraidosODSv4vertices_extraidos_17, 
                style: style_verticesextraidosODSv4vertices_extraidos_17,
                popuplayertitle: 'vertices-extraidos-ODS-v4 — vertices_extraidos',
                interactive: false,
                title: '<img src="styles/legend/verticesextraidosODSv4vertices_extraidos_17.png" /> vertices-extraidos-ODS-v4 — vertices_extraidos'
            });
var group_PARCELASCONFRONTANTES = new ol.layer.Group({
                                layers: [lyr_assentamentoconfrontantePABEIRARIOassentamento_brasil_ba_5,lyr_confrontantesPABEIRARIOconfrontantespabeirario__sigef_brasil_ba_6,lyr_FazendaMinao_parcela_7,lyr_FazendaSantoAntnioI_parcela_8,lyr_FAZENDAMORRODOTUPYParte1_parcela_9,lyr_FAZENDASANTOANTONIO_parcela_10,lyr_FAZENDAPIRANHAS_parcela02_11,lyr_FAZENDAPIRANHAS_parcela04_12,lyr_FAZENDAVALEVERDEParte2_13,lyr_FAZENDAVALEVERDEParte1_14,],
                                fold: 'open',
                                title: 'PARCELAS-CONFRONTANTES'});
var group_AnlisePermetro = new ol.layer.Group({
                                layers: [lyr_PerimetroBDNPABEIRARIOassentamento_brasil_ba_2,lyr_preprojeto_PA_Beira_Rio_SIRGAS2000_3,lyr_Perimetro_PABEIRARIO_4,],
                                fold: 'open',
                                title: 'Análise Perímetro'});

lyr_GoogleSatelliteHybrid_0.setVisible(false);lyr_faixadominioBAreprojetadoa_1.setVisible(true);lyr_PerimetroBDNPABEIRARIOassentamento_brasil_ba_2.setVisible(false);lyr_preprojeto_PA_Beira_Rio_SIRGAS2000_3.setVisible(false);lyr_Perimetro_PABEIRARIO_4.setVisible(true);lyr_assentamentoconfrontantePABEIRARIOassentamento_brasil_ba_5.setVisible(true);lyr_confrontantesPABEIRARIOconfrontantespabeirario__sigef_brasil_ba_6.setVisible(true);lyr_FazendaMinao_parcela_7.setVisible(true);lyr_FazendaSantoAntnioI_parcela_8.setVisible(true);lyr_FAZENDAMORRODOTUPYParte1_parcela_9.setVisible(true);lyr_FAZENDASANTOANTONIO_parcela_10.setVisible(true);lyr_FAZENDAPIRANHAS_parcela02_11.setVisible(true);lyr_FAZENDAPIRANHAS_parcela04_12.setVisible(true);lyr_FAZENDAVALEVERDEParte2_13.setVisible(true);lyr_FAZENDAVALEVERDEParte1_14.setVisible(true);lyr_lote_15.setVisible(false);lyr_poligonoextraidoODSv4poligonos_wgs84_corrigido_16.setVisible(true);lyr_verticesextraidosODSv4vertices_extraidos_17.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_faixadominioBAreprojetadoa_1,group_AnlisePermetro,group_PARCELASCONFRONTANTES,lyr_lote_15,lyr_poligonoextraidoODSv4poligonos_wgs84_corrigido_16,lyr_verticesextraidosODSv4vertices_extraidos_17];
lyr_faixadominioBAreprojetadoa_1.set('fieldAliases', {'fid': 'fid', 'id_cide': 'id_cide', 'Id_Referen': 'Id_Referen', 'Codigo_Rod': 'Codigo_Rod', 'Tipo_Trech': 'Tipo_Trech', 'Unidade_Fe': 'Unidade_Fe', 'Codigo_SNV': 'Codigo_SNV', 'Codigo_SRE': 'Codigo_SRE', 'Local_Inic': 'Local_Inic', 'Local_Fim': 'Local_Fim', 'Quilometra': 'Quilometra', 'Quilometr0': 'Quilometr0', 'Extensao': 'Extensao', 'Superficie': 'Superficie', 'Tipo_Reves': 'Tipo_Reves', 'Convenio': 'Convenio', 'MP082': 'MP082', 'Jurisdicao': 'Jurisdicao', 'Referencia': 'Referencia', 'dt_ini': 'dt_ini', 'dt_fim': 'dt_fim', });
lyr_PerimetroBDNPABEIRARIOassentamento_brasil_ba_2.set('fieldAliases', {'fid': 'fid', 'cd_sipra': 'cd_sipra', 'uf': 'uf', 'nome_proje': 'nome_proje', 'municipio': 'municipio', 'area_hecta': 'area_hecta', 'capacidade': 'capacidade', 'num_famili': 'num_famili', 'fase': 'fase', 'data_de_cr': 'data_de_cr', 'forma_obte': 'forma_obte', 'data_obten': 'data_obten', 'area_calc_': 'area_calc_', 'sr': 'sr', 'descricao_': 'descricao_', });
lyr_preprojeto_PA_Beira_Rio_SIRGAS2000_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Join_Count': 'Join_Count', 'TARGET_FID': 'TARGET_FID', 'Text': 'Text', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'area_ha': 'area_ha', });
lyr_Perimetro_PABEIRARIO_4.set('fieldAliases', {'fid': 'fid', 'ID_Lote': 'ID_Lote', 'Cod_PA': 'Cod_PA', 'Grupo': 'Grupo', 'Numero': 'Numero', 'Cod_lote': 'Cod_lote', 'Descricao': 'Descricao', 'Nome_lote': 'Nome_lote', 'Municipio': 'Municipio', 'Tipologia': 'Tipologia', 'Fuso_UTM': 'Fuso_UTM', 'Obs': 'Obs', 'CNS': 'CNS', 'MAT': 'MAT', 'CPF': 'CPF', 'Nome_Prop': 'Nome_Prop', 'Tipo_lote': 'Tipo_lote', 'ods_gerado': 'ods_gerado', });
lyr_assentamentoconfrontantePABEIRARIOassentamento_brasil_ba_5.set('fieldAliases', {'fid': 'fid', 'cd_sipra': 'cd_sipra', 'uf': 'uf', 'nome_proje': 'nome_proje', 'municipio': 'municipio', 'area_hecta': 'area_hecta', 'capacidade': 'capacidade', 'num_famili': 'num_famili', 'fase': 'fase', 'data_de_cr': 'data_de_cr', 'forma_obte': 'forma_obte', 'data_obten': 'data_obten', 'area_calc_': 'area_calc_', 'sr': 'sr', 'descricao_': 'descricao_', });
lyr_confrontantesPABEIRARIOconfrontantespabeirario__sigef_brasil_ba_6.set('fieldAliases', {'fid': 'fid', 'parcela_co': 'parcela_co', 'rt': 'rt', 'art': 'art', 'situacao_i': 'situacao_i', 'codigo_imo': 'codigo_imo', 'data_submi': 'data_submi', 'data_aprov': 'data_aprov', 'status': 'status', 'nome_area': 'nome_area', 'registro_m': 'registro_m', 'registro_d': 'registro_d', 'municipio_': 'municipio_', 'uf_id': 'uf_id', });
lyr_FazendaMinao_parcela_7.set('fieldAliases', {'qrcode': 'qrcode', 'nome': 'nome', });
lyr_FazendaSantoAntnioI_parcela_8.set('fieldAliases', {'qrcode': 'qrcode', 'nome': 'nome', });
lyr_FAZENDAMORRODOTUPYParte1_parcela_9.set('fieldAliases', {'qrcode': 'qrcode', 'nome': 'nome', });
lyr_FAZENDASANTOANTONIO_parcela_10.set('fieldAliases', {'qrcode': 'qrcode', 'nome': 'nome', });
lyr_FAZENDAPIRANHAS_parcela02_11.set('fieldAliases', {'qrcode': 'qrcode', 'nome': 'nome', });
lyr_FAZENDAPIRANHAS_parcela04_12.set('fieldAliases', {'qrcode': 'qrcode', 'nome': 'nome', });
lyr_FAZENDAVALEVERDEParte2_13.set('fieldAliases', {'qrcode': 'qrcode', 'nome': 'nome', });
lyr_FAZENDAVALEVERDEParte1_14.set('fieldAliases', {'qrcode': 'qrcode', 'nome': 'nome', });
lyr_lote_15.set('fieldAliases', {'ID_Lote': 'ID_Lote', 'Cod_PA': 'Cod_PA', 'Grupo': 'Grupo', 'Numero': 'Numero', 'Cod_lote': 'Cod_lote', 'Descricao': 'Descricao', 'Nome_lote': 'Nome_lote', 'Municipio': 'Municipio', 'Tipologia': 'Tipologia', 'Fuso_UTM': 'Fuso_UTM', 'Obs': 'Obs', 'CNS': 'CNS', 'MAT': 'MAT', 'CPF': 'CPF', 'Nome_Prop': 'Nome_Prop', 'Tipo_lote': 'Tipo_lote', 'ods_gerado': 'ods_gerado', });
lyr_poligonoextraidoODSv4poligonos_wgs84_corrigido_16.set('fieldAliases', {'fid': 'fid', 'ID_Original': 'ID_Original', });
lyr_verticesextraidosODSv4vertices_extraidos_17.set('fieldAliases', {'fid': 'fid', 'Arquivo_Origem': 'Arquivo_Origem', 'Vertice': 'Vertice', 'Longitude_GMS': 'Longitude_GMS', 'Sigma_Lon': 'Sigma_Lon', 'Latitude_GMS': 'Latitude_GMS', 'Sigma_Lat': 'Sigma_Lat', 'Altitude': 'Altitude', 'Sigma_Alt': 'Sigma_Alt', 'Metodo': 'Metodo', 'Tipo_Limite': 'Tipo_Limite', 'cns': 'cns', 'Matricula': 'Matricula', 'Descricao': 'Descricao', });
lyr_faixadominioBAreprojetadoa_1.set('fieldImages', {'fid': 'TextEdit', 'id_cide': 'Range', 'Id_Referen': 'TextEdit', 'Codigo_Rod': 'TextEdit', 'Tipo_Trech': 'TextEdit', 'Unidade_Fe': 'TextEdit', 'Codigo_SNV': 'TextEdit', 'Codigo_SRE': 'TextEdit', 'Local_Inic': 'TextEdit', 'Local_Fim': 'TextEdit', 'Quilometra': 'TextEdit', 'Quilometr0': 'TextEdit', 'Extensao': 'TextEdit', 'Superficie': 'TextEdit', 'Tipo_Reves': 'TextEdit', 'Convenio': 'TextEdit', 'MP082': 'TextEdit', 'Jurisdicao': 'TextEdit', 'Referencia': 'TextEdit', 'dt_ini': 'DateTime', 'dt_fim': 'DateTime', });
lyr_PerimetroBDNPABEIRARIOassentamento_brasil_ba_2.set('fieldImages', {'fid': 'TextEdit', 'cd_sipra': 'TextEdit', 'uf': 'TextEdit', 'nome_proje': 'TextEdit', 'municipio': 'TextEdit', 'area_hecta': 'TextEdit', 'capacidade': 'Range', 'num_famili': 'Range', 'fase': 'Range', 'data_de_cr': 'TextEdit', 'forma_obte': 'TextEdit', 'data_obten': 'TextEdit', 'area_calc_': 'TextEdit', 'sr': 'TextEdit', 'descricao_': 'TextEdit', });
lyr_preprojeto_PA_Beira_Rio_SIRGAS2000_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'Join_Count': 'TextEdit', 'TARGET_FID': 'TextEdit', 'Text': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'area_ha': 'TextEdit', });
lyr_Perimetro_PABEIRARIO_4.set('fieldImages', {'fid': 'TextEdit', 'ID_Lote': 'TextEdit', 'Cod_PA': 'TextEdit', 'Grupo': 'TextEdit', 'Numero': 'TextEdit', 'Cod_lote': 'TextEdit', 'Descricao': 'TextEdit', 'Nome_lote': 'TextEdit', 'Municipio': 'TextEdit', 'Tipologia': 'TextEdit', 'Fuso_UTM': 'TextEdit', 'Obs': 'TextEdit', 'CNS': 'TextEdit', 'MAT': 'TextEdit', 'CPF': 'TextEdit', 'Nome_Prop': 'TextEdit', 'Tipo_lote': 'TextEdit', 'ods_gerado': 'TextEdit', });
lyr_assentamentoconfrontantePABEIRARIOassentamento_brasil_ba_5.set('fieldImages', {'fid': 'TextEdit', 'cd_sipra': 'TextEdit', 'uf': 'TextEdit', 'nome_proje': 'TextEdit', 'municipio': 'TextEdit', 'area_hecta': 'TextEdit', 'capacidade': 'Range', 'num_famili': 'Range', 'fase': 'Range', 'data_de_cr': 'TextEdit', 'forma_obte': 'TextEdit', 'data_obten': 'TextEdit', 'area_calc_': 'TextEdit', 'sr': 'TextEdit', 'descricao_': 'TextEdit', });
lyr_confrontantesPABEIRARIOconfrontantespabeirario__sigef_brasil_ba_6.set('fieldImages', {'fid': 'TextEdit', 'parcela_co': 'TextEdit', 'rt': 'TextEdit', 'art': 'TextEdit', 'situacao_i': 'TextEdit', 'codigo_imo': 'TextEdit', 'data_submi': 'DateTime', 'data_aprov': 'DateTime', 'status': 'TextEdit', 'nome_area': 'TextEdit', 'registro_m': 'TextEdit', 'registro_d': 'DateTime', 'municipio_': 'Range', 'uf_id': 'Range', });
lyr_FazendaMinao_parcela_7.set('fieldImages', {'qrcode': 'TextEdit', 'nome': 'TextEdit', });
lyr_FazendaSantoAntnioI_parcela_8.set('fieldImages', {'qrcode': 'TextEdit', 'nome': 'TextEdit', });
lyr_FAZENDAMORRODOTUPYParte1_parcela_9.set('fieldImages', {'qrcode': 'TextEdit', 'nome': 'TextEdit', });
lyr_FAZENDASANTOANTONIO_parcela_10.set('fieldImages', {'qrcode': 'TextEdit', 'nome': 'TextEdit', });
lyr_FAZENDAPIRANHAS_parcela02_11.set('fieldImages', {'qrcode': 'TextEdit', 'nome': 'TextEdit', });
lyr_FAZENDAPIRANHAS_parcela04_12.set('fieldImages', {'qrcode': 'TextEdit', 'nome': 'TextEdit', });
lyr_FAZENDAVALEVERDEParte2_13.set('fieldImages', {'qrcode': 'TextEdit', 'nome': 'TextEdit', });
lyr_FAZENDAVALEVERDEParte1_14.set('fieldImages', {'qrcode': 'TextEdit', 'nome': 'TextEdit', });
lyr_lote_15.set('fieldImages', {'ID_Lote': 'TextEdit', 'Cod_PA': 'TextEdit', 'Grupo': 'TextEdit', 'Numero': 'TextEdit', 'Cod_lote': 'TextEdit', 'Descricao': 'TextEdit', 'Nome_lote': 'TextEdit', 'Municipio': 'TextEdit', 'Tipologia': 'TextEdit', 'Fuso_UTM': 'TextEdit', 'Obs': 'TextEdit', 'CNS': 'TextEdit', 'MAT': 'TextEdit', 'CPF': 'TextEdit', 'Nome_Prop': 'TextEdit', 'Tipo_lote': 'TextEdit', 'ods_gerado': 'TextEdit', });
lyr_poligonoextraidoODSv4poligonos_wgs84_corrigido_16.set('fieldImages', {'fid': 'TextEdit', 'ID_Original': 'TextEdit', });
lyr_verticesextraidosODSv4vertices_extraidos_17.set('fieldImages', {'fid': 'TextEdit', 'Arquivo_Origem': 'TextEdit', 'Vertice': 'TextEdit', 'Longitude_GMS': 'TextEdit', 'Sigma_Lon': 'TextEdit', 'Latitude_GMS': 'TextEdit', 'Sigma_Lat': 'TextEdit', 'Altitude': 'TextEdit', 'Sigma_Alt': 'TextEdit', 'Metodo': 'TextEdit', 'Tipo_Limite': 'TextEdit', 'cns': 'TextEdit', 'Matricula': 'TextEdit', 'Descricao': 'TextEdit', });
lyr_faixadominioBAreprojetadoa_1.set('fieldLabels', {'fid': 'hidden field', 'id_cide': 'no label', 'Id_Referen': 'no label', 'Codigo_Rod': 'no label', 'Tipo_Trech': 'no label', 'Unidade_Fe': 'no label', 'Codigo_SNV': 'no label', 'Codigo_SRE': 'no label', 'Local_Inic': 'no label', 'Local_Fim': 'no label', 'Quilometra': 'no label', 'Quilometr0': 'no label', 'Extensao': 'no label', 'Superficie': 'no label', 'Tipo_Reves': 'no label', 'Convenio': 'no label', 'MP082': 'no label', 'Jurisdicao': 'no label', 'Referencia': 'no label', 'dt_ini': 'no label', 'dt_fim': 'no label', });
lyr_PerimetroBDNPABEIRARIOassentamento_brasil_ba_2.set('fieldLabels', {'fid': 'hidden field', 'cd_sipra': 'no label', 'uf': 'no label', 'nome_proje': 'no label', 'municipio': 'no label', 'area_hecta': 'no label', 'capacidade': 'no label', 'num_famili': 'no label', 'fase': 'no label', 'data_de_cr': 'no label', 'forma_obte': 'no label', 'data_obten': 'no label', 'area_calc_': 'no label', 'sr': 'no label', 'descricao_': 'no label', });
lyr_preprojeto_PA_Beira_Rio_SIRGAS2000_3.set('fieldLabels', {'OBJECTID': 'hidden field', 'Join_Count': 'hidden field', 'TARGET_FID': 'hidden field', 'Text': 'no label', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'area_ha': 'no label', });
lyr_Perimetro_PABEIRARIO_4.set('fieldLabels', {'fid': 'hidden field', 'ID_Lote': 'no label', 'Cod_PA': 'no label', 'Grupo': 'no label', 'Numero': 'no label', 'Cod_lote': 'no label', 'Descricao': 'no label', 'Nome_lote': 'no label', 'Municipio': 'no label', 'Tipologia': 'no label', 'Fuso_UTM': 'no label', 'Obs': 'no label', 'CNS': 'no label', 'MAT': 'no label', 'CPF': 'no label', 'Nome_Prop': 'no label', 'Tipo_lote': 'no label', 'ods_gerado': 'no label', });
lyr_assentamentoconfrontantePABEIRARIOassentamento_brasil_ba_5.set('fieldLabels', {'fid': 'hidden field', 'cd_sipra': 'no label', 'uf': 'no label', 'nome_proje': 'no label', 'municipio': 'no label', 'area_hecta': 'no label', 'capacidade': 'no label', 'num_famili': 'no label', 'fase': 'no label', 'data_de_cr': 'no label', 'forma_obte': 'no label', 'data_obten': 'no label', 'area_calc_': 'no label', 'sr': 'no label', 'descricao_': 'no label', });
lyr_confrontantesPABEIRARIOconfrontantespabeirario__sigef_brasil_ba_6.set('fieldLabels', {'fid': 'hidden field', 'parcela_co': 'no label', 'rt': 'no label', 'art': 'no label', 'situacao_i': 'no label', 'codigo_imo': 'no label', 'data_submi': 'no label', 'data_aprov': 'no label', 'status': 'no label', 'nome_area': 'no label', 'registro_m': 'no label', 'registro_d': 'no label', 'municipio_': 'no label', 'uf_id': 'no label', });
lyr_FazendaMinao_parcela_7.set('fieldLabels', {'qrcode': 'no label', 'nome': 'no label', });
lyr_FazendaSantoAntnioI_parcela_8.set('fieldLabels', {'qrcode': 'no label', 'nome': 'no label', });
lyr_FAZENDAMORRODOTUPYParte1_parcela_9.set('fieldLabels', {'qrcode': 'no label', 'nome': 'no label', });
lyr_FAZENDASANTOANTONIO_parcela_10.set('fieldLabels', {'qrcode': 'no label', 'nome': 'no label', });
lyr_FAZENDAPIRANHAS_parcela02_11.set('fieldLabels', {'qrcode': 'inline label - visible with data', 'nome': 'no label', });
lyr_FAZENDAPIRANHAS_parcela04_12.set('fieldLabels', {'qrcode': 'no label', 'nome': 'no label', });
lyr_FAZENDAVALEVERDEParte2_13.set('fieldLabels', {'qrcode': 'no label', 'nome': 'no label', });
lyr_FAZENDAVALEVERDEParte1_14.set('fieldLabels', {'qrcode': 'no label', 'nome': 'no label', });
lyr_lote_15.set('fieldLabels', {'ID_Lote': 'hidden field', 'Cod_PA': 'no label', 'Grupo': 'no label', 'Numero': 'no label', 'Cod_lote': 'no label', 'Descricao': 'no label', 'Nome_lote': 'no label', 'Municipio': 'no label', 'Tipologia': 'no label', 'Fuso_UTM': 'no label', 'Obs': 'no label', 'CNS': 'no label', 'MAT': 'no label', 'CPF': 'no label', 'Nome_Prop': 'no label', 'Tipo_lote': 'no label', 'ods_gerado': 'no label', });
lyr_poligonoextraidoODSv4poligonos_wgs84_corrigido_16.set('fieldLabels', {'fid': 'hidden field', 'ID_Original': 'no label', });
lyr_verticesextraidosODSv4vertices_extraidos_17.set('fieldLabels', {'fid': 'no label', 'Arquivo_Origem': 'no label', 'Vertice': 'no label', 'Longitude_GMS': 'no label', 'Sigma_Lon': 'no label', 'Latitude_GMS': 'no label', 'Sigma_Lat': 'no label', 'Altitude': 'no label', 'Sigma_Alt': 'no label', 'Metodo': 'no label', 'Tipo_Limite': 'no label', 'cns': 'no label', 'Matricula': 'no label', 'Descricao': 'no label', });
lyr_verticesextraidosODSv4vertices_extraidos_17.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
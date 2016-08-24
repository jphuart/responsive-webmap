// OpenLayers 3 - Test with mapserver for B-CGMS - Julien Minet - July 2016. 

// Definition of OpenLayers controls
var scaleLine = new ol.control.ScaleLine()

// Map creation
var olmap = new ol.Map({
   target: document.getElementById('map'),  // instead of "target: 'map' " because of the cursor pointer
   view: new ol.View({
   	center: ol.proj.transform([3.65, 50.5], 'EPSG:4326', 'EPSG:3857'),
      zoom: 8
   }),
   controls: ol.control.defaults({scaleLine: false}).extend([scaleLine]),
});

// Add default layers
var osmLayer = new ol.layer.Tile({
   source: new ol.source.OSM()
});
olmap.addLayer(osmLayer);

//JPH Add WMS meteo layer
var jphMeteoLayer = new ol.layer.Image({
  source: new ol.source.ImageWMS({
    url: 'http://localhost:8080/geoserver/aaa_jphtest/wms',
    params: {'LAYERS': 'aaa_jphtest:meteo_grille', 'viewparams': 'madate:2013-03-18'},
    serverType: 'geoserver'
  })
})
olmap.addLayer(jphMeteoLayer);


//JPH Add WMS layer
var jphLayer = new ol.layer.Image({
    source: new ol.source.ImageWMS({
      url: 'http://localhost:8080/geoserver/aaa_jphtest/wms',
      params: {'LAYERS': 'aaa_jphtest:belgique'},
      serverType: 'geoserver'
    })
  })
olmap.addLayer(jphLayer);


// Add specific classes to OpenLayers elements
$('.ol-scale-line').addClass('hidden-xs')
$('.ol-attribution').addClass('hidden-xs')

// Hide/show panel
var showPanel = true;
var collapsePanel = function(){
	if(showPanel === true){
	  $('div#panel').css('width','35px');
	  $('div#panelContent').css('opacity','0' );
	  $('div#collapseBtn button').text('>');
	  showPanel =! showPanel;
	  }
   else{
	  $('div#panel').css('width','300px');
	  $('div#panelContent').css('opacity','1');
	  $('div#collapseBtn button').text('<');
	  showPanel =! showPanel;
	  }
}

var showPanelXs = false;
var collapsePanelXs = function(){
	if(showPanelXs === true){
	  $('div#panel').css('width','0px');
	  $('div#panelContent').css('opacity','0' );
	  showPanelXs =! showPanelXs;
	  }
   else{
     $('div#panel').css('width','calc(100% - 45px)');
     $('div#panelContent').css('opacity','1');
     $('div#navbar').removeClass('in')
	  showPanelXs =! showPanelXs;
	  }
}







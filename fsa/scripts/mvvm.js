// mvvm.js

function Track(track) {
	var self = this;
	self.trackName = ko.observable(track.name ? track.name : track.title);
	self.albumName = ko.observable(track.album ? track.album.name : null);
	self.artists =  ko.observableArray(track.artists ? track.artists : [{href:track.user.id, name:track.user.username}]) ;
	self.selected = ko.observable(false);
}

function TrackListViewModel() {
	var  self = this;
	self.tracks = ko.observableArray([]);
	self.searchText = ko.observable();
	self.fullSearch = function() {
		  $.when(searchSpotify(this.searchText()), searchSoundcloud(this.searchText())).done(function(spotArgs,scArgs) {
			  var spotTracks = spotArgs[0].tracks; //object
			  spotTracks.sort(function(a,b){return a.name > b.name ? 1 : -1});
			  var scTracks = scArgs[0]; //object 
			  scTracks.sort(function(a,b){return a.title > b.title ? 1 : -1});
			  //alert(scTracks[0].title);
			  var allTracks= spotTracks.concat(scTracks);
			  var mappedTracks = $.map(allTracks, function(track) { return new Track(track) });
			  self.tracks(mappedTracks);
	   		  self.searchText("");
		  });
		
		  function searchSpotify(text) {
			var url = "http://ws.spotify.com/search/1/track.json";
			return $.ajax( url,{ 
					  data: {q:text},  
					  dataType: "json"
			 });
		  }
		  
		 function searchSoundcloud(text) {
			var url = 'https://api.soundcloud.com/tracks.json';
			 
			return $.ajax( url,{ 
					  data: {client_id: "75270149bb245c727c43829860e675d4",
					  		 q:text},  
					  dataType: "json"
			 });
		  }
	}
	
	self.selectedTracks = ko.computed(function() {
        return ko.utils.arrayFilter(self.tracks(), function(track) { return track.selected() });
    });
}

ko.applyBindings(new TrackListViewModel());
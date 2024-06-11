// play.js

function PlantViewModel() {
	var self = this;
	self.plants = ko.observableArray([]);
	self.searchText = ko.observable();
	self.fullSearch = function() {
		//var e = document.getElementById("choice");
		//var chosen = e.options[e.selectedIndex].value;
		getPlantData("labs");
		
		function getPlantData(game_requested) {
			var url = "" + game_requested + ".js";
			$.ajax( url,{ 
					data: {q:game_requested},  
					dataType: "json",
					success: function (data) {
						showGame(data.labs, game_requested);
					},
					error: function(xhr, textStatus, errorThrown) {
						alert(textStatus);
						// Handle error
					}
			});
			var url = "plants.js";
			$.ajax( url,{ 
					data: {q:game_requested},  
					dataType: "json",
					success: function (data2) {
						showGame2(data2.plants, game_requested);
					},
					error: function(xhr, textStatus, errorThrown) {
						alert("error: " + textStatus);
						// Handle error
					}
			});
			var url = "crops.js";
			$.ajax( url,{
					data: {q:game_requested},
					dataType: "json",
					success: function (data3) {
						showGame3(data3.crops, game_requested);
					},
					error: function(xhr, textStatus, errorThrown) {
						alert("error: " + textStatus);
						// Handle error
					}
			});
		}
	}
	
	self.selectedPlants = ko.computed(function() {
        return ko.utils.arrayFilter(self.plants(), function(plant) { return plant.selected() });
    });
}

ko.applyBindings(new PlantViewModel());
document.getElementById("mycanvas").addEventListener('click', interact, false);

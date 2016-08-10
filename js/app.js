function AppViewModel()
{
	this.firstName = "Brian";
}

function HomePageViewModel()
{
	var self = this;
	this.firstName = ko.observable();
	
	self.init = function()
	{
		$.getJSON("config/config.json" , function( data ) 
		{
			console.log( " loaded" );
			self.firstName = "Loading";	
		});	
	}	
}

function PageSetup()
{
	
	var vm = new HomePageViewModel();
	ko.applyBindings( vm );
	vm.init();

}



$(document).ready(function () {

  PageSetup();
});




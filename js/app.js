function AppViewModel()
{
	this.firstName = "Brian";
}

function HomePageViewModel()
{
	var self = this;
	this.firstName = "Brian";
	
	self.init = function()
	{
		$.getJSON("config/config.json" , function( data ) 
		{
			self.firstName = "Loading";	
		});	
	}	
}

function PageSetup()
{
	
	var vm = new HomePageViewModel();
	vm.init();
	ko.applyBindings( vm );
}



$(document).ready(function () {

  PageSetup();
});




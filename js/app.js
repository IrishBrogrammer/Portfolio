function AppViewModel()
{
	this.firstName = "Brian";
}

function HomePageViewModel()
{
	var self = this;

	self.init = new function()
	{
		$.getJSON("config/config.json" , function( data ) 
		{
			self.Name = "Loading";	
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




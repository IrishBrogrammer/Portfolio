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
			ko.applyBindings( this );
		});	
	}	
}

function PageSetup()
{
	
	var vm = new HomePageViewModel();
	vm.init();

}



$(document).ready(function () {

  PageSetup();
});




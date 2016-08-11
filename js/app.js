function AppViewModel()
{
	this.firstName = "Brian";
}


function SocialViewModel( desc , url , img )
{
	var self = this;
	console.log( " Desc " + desc);
	this.Desc = desc;
	this.Url = url;
	this.ImgURL = img;
}

function HomePageViewModel()
{
	var self = this;
	
	this.firstName = ko.observable();
	this.Social = ko.observableArray([]);
	
	
	self.init = function()
	{
		$.getJSON("config/config.json" , function( data ) 
		{
			console.log( " loaded" );
			self.firstName(data.title );
			self.Social( _.map( data.SocialLinks , 
				function( val , key )
				{
					return new SocialViewModel( val.desc , val.Link, val.Image);
				}	
			 ));
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




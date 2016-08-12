
function SocialViewModel( desc , url , img )
{
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
			self.firstName(data.title );
		
			self.Social( _.map( data.SocialLinks , 
				function( v , k ) 
				{
					return new SocialViewModel( v.desc , v.Link, v.Icon);	
				}));
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




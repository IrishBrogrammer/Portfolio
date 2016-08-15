
function SocialViewModel( desc , url , img )
{
	this.Desc = desc;
	this.Url = url;
	this.ImgURL = img;
}

function MapSocialModel( val ,key )
{
	return new SocialViewModel( val.desc , val.Link, val.Icon);	
}


function WorkViewModel( title , desc, link )
{
	this.Title = title;
	this.Desc = desc;
	this.URL = url;
}

function MapWorkModel( val , key )
{
	return new WorkViewModel( val.Title , val.Desc , val.Link );
}


function HomePageViewModel()
{
	var self = this;
	
	this.firstName = ko.observable();
	this.Social = ko.observableArray([]);
	this.Work   = ko.observableArray([]);
	
	self.init = function()
	{
		$.getJSON("config/config.json" , function( data ) 
		{
			self.firstName(data.title );
			self.Social( _.map( data.SocialLinks , MapSocialModel) );
			self.Work( _.map( data.ProWork , MapWorkModel ) );
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




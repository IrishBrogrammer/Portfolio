
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


function ProjectViewModel( title , desc, link )
{
	this.Title = title;
	this.Desc = desc;
	this.URL = link;
}

function MapProjectModel( val , key )
{
	return new ProjectViewModel( val.Title , val.Desc , val.Link );
}



function HomePageViewModel()
{
	var self = this;
	
	this.About = ko.observable();
	this.Social = ko.observableArray([]);
	this.Work   = ko.observableArray([]);
	this.Projects = ko.observableArray([]);
	
	self.init = function()
	{
		$.getJSON("config/config.json" , function( data ) 
		{
			self.About(data.About );
			self.Social( _.map( data.SocialLinks , MapSocialModel) );
			self.Work( _.map( data.ProWork , MapProjectModel ) );
			self.Projects( _.map( data.ProjectLinks , MapProjectModel ));
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




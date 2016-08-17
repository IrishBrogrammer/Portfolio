
function SocialViewModel( desc , url , img , cls  )
{
	this.Desc = desc;
	this.URL = url;
	this.ImgURL = img;
	this.Class = cls;
}

function MapSocialModel( val ,key )
{
	return new SocialViewModel( val.desc , val.Link, val.Icon , val.Class);	
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


function WorkViewModel( title , desc , link , icon , thumbnail )
{
	this.Title = title;
	this.Desc = desc;
	this.URL = link;
	this.Icon = icon;
	this.Thumbnail = thumbnail;
}

function MapWorkModel( val , key )
{
	return new WorkViewModel( val.Title , val.Desc , val.Link , val.Icon , val.Thumb );
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
			self.Work( _.map( data.ProWork , MapWorkModel ) );
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




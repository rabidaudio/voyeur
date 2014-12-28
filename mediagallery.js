var imgFormats = ['png', 'bmp', 'jpeg', 'jpg', 'gif', 'png', 'svg', 'xbm', 'webp'];
var audFormats = []; //['wav', 'mp3'];
var vidFormats = []; //['3gp', '3gpp', 'avi', 'flv', 'mov', 'mpeg', 'mpeg4', 'mp4', 'ogg', 'webm', 'wmv'];


var hash = CryptoJS.MD5("Message");



function get_file_type(filename){
   var ext = filename.substr(filename.lastIndexOf('.') + 1).toLowerCase();
   return (imgFormats.indexOf(ext) >= 0);
}

function

var MediaGallery = (function(CryptoJS){
	if(!CryptoJS || !CryptoJS.MD5) throw "CryptoJS required to use this module";

	var module={};

	module.directories = [];

	module.scan_files = function(directories){
		
	}

})(CryptoJS);
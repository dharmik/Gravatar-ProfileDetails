function Click(e) {

	if ($.textField.value) {
		var original = $.textField.value;
		var md5 = Ti.Utils.md5HexDigest(original);

		var url = 'http://www.gravatar.com/' + md5 + '.json';
		var xhr = Titanium.Network.createHTTPClient();

		xhr.onerror = function(e) {
			alert('Not Valid');
			Ti.API.info(JSON.stringify(e));
		}

		xhr.onload = function() {
			Ti.API.info('URL' + url);
			Ti.API.info('Dataa' + this.responseText);
			var data = JSON.parse(this.responseText);
			Ti.API.info('image URL' + data.entry[0].thumbnailUrl);
			Ti.API.info('image URL' + data.entry[0].name.givenName);
			Ti.API.info('image URL' + data.entry[0].name.familyName);
			Ti.API.info('image URL' + data.entry[0].name.formatted);
			Ti.API.info('image URL' + data.entry[0].currentLocation);
			
			var URL = data.entry[0].thumbnailUrl;
			var Name = data.entry[0].name.givenName ;
			var FamilyName = data.entry[0].name.familyName ;
			var Formatted = data.entry[0].name.formatted;
			var Location =  data.entry[0].currentLocation;
			

			var profileScreenView = Alloy.createController('profileDetail',{"URL": URL,"Name" : Name,"FamilyName" : FamilyName,"Formatted" : Formatted,"Location" : Location}).getView();
			profileScreenView.open();
		}
		xhr.open("GET", url);
		xhr.setRequestHeader("Content-Type", "application/json");
		xhr.send();
	} else {
		alert('Enter valid E-mail');
	}
}

$.index.open();


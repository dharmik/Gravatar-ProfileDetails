function Controller() {
    function Click() {
        if ($.textField.value) {
            var original = $.textField.value;
            var md5 = Ti.Utils.md5HexDigest(original);
            var url = "http://www.gravatar.com/" + md5 + ".json";
            var xhr = Titanium.Network.createHTTPClient();
            xhr.onerror = function(e) {
                alert("Not Valid");
                Ti.API.info(JSON.stringify(e));
            };
            xhr.onload = function() {
                Ti.API.info("URL" + url);
                Ti.API.info("Dataa" + this.responseText);
                var data = JSON.parse(this.responseText);
                Ti.API.info("image URL" + data.entry[0].thumbnailUrl);
                Ti.API.info("image URL" + data.entry[0].name.givenName);
                Ti.API.info("image URL" + data.entry[0].name.familyName);
                Ti.API.info("image URL" + data.entry[0].name.formatted);
                Ti.API.info("image URL" + data.entry[0].currentLocation);
                var URL = data.entry[0].thumbnailUrl;
                var Name = data.entry[0].name.givenName;
                var FamilyName = data.entry[0].name.familyName;
                var Formatted = data.entry[0].name.formatted;
                var Location = data.entry[0].currentLocation;
                var profileScreenView = Alloy.createController("profileDetail", {
                    URL: URL,
                    Name: Name,
                    FamilyName: FamilyName,
                    Formatted: Formatted,
                    Location: Location
                }).getView();
                profileScreenView.open();
            };
            xhr.open("GET", url);
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.send();
        } else alert("Enter valid E-mail");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.textField = Ti.UI.createTextField({
        width: "250",
        height: "40",
        color: "#336699",
        id: "textField",
        hintText: "Gravatar E-mail",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED
    });
    $.__views.index.add($.__views.textField);
    $.__views.button = Ti.UI.createButton({
        id: "button",
        title: "Click",
        width: "100",
        height: "30",
        bottom: "170"
    });
    $.__views.index.add($.__views.button);
    Click ? $.__views.button.addEventListener("click", Click) : __defers["$.__views.button!click!Click"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.open();
    __defers["$.__views.button!click!Click"] && $.__views.button.addEventListener("click", Click);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
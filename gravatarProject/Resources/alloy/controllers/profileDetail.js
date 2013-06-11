function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.profileDetail = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "profileDetail"
    });
    $.__views.profileDetail && $.addTopLevelView($.__views.profileDetail);
    $.__views.imageView = Ti.UI.createImageView({
        id: "imageView",
        top: "10",
        width: "60",
        height: "100"
    });
    $.__views.profileDetail.add($.__views.imageView);
    $.__views.label1 = Ti.UI.createLabel({
        id: "label1",
        top: "125",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE
    });
    $.__views.profileDetail.add($.__views.label1);
    $.__views.label2 = Ti.UI.createLabel({
        id: "label2",
        top: "155",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE
    });
    $.__views.profileDetail.add($.__views.label2);
    $.__views.label3 = Ti.UI.createLabel({
        id: "label3",
        top: "185",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE
    });
    $.__views.profileDetail.add($.__views.label3);
    $.__views.label4 = Ti.UI.createLabel({
        id: "label4",
        top: "215",
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE
    });
    $.__views.profileDetail.add($.__views.label4);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.imageView.image = args.URL;
    $.label1.text = "Name :" + args.Name;
    $.label2.text = "FamilyName :" + args.FamilyName;
    $.label3.text = "FullName :" + args.Formatted;
    $.label4.text = "Location :" + args.Location;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
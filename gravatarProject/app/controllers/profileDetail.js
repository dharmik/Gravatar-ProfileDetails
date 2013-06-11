var args = arguments[0] || {};

$.imageView.image =  args.URL ;

$.label1.text = 'Name :'+ args.Name;
$.label2.text = 'FamilyName :'+ args.FamilyName;
$.label3.text = 'FullName :'+ args.Formatted;
$.label4.text = 'Location :'+ args.Location;
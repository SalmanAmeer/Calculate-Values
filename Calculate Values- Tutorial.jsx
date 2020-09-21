//UI - Main Window
var UI = new Window("palette", "Calculate Amount", undefined);
UI.orientation = "column";

//Title Text
var Title = UI.add("statictext");
Title.text = "Calculate";

//Group for Value 1
var Group1 = UI.add("group", undefined);
Group1.orientation = "row";

//Value1 Elements
var value1T = Group1.add("statictext");
value1T.text = "Value1";
var value1E = Group1.add("edittext");
value1E.text = "0";
value1E.preferredSize.width = "40";

//Group for Value 2
var Group2 = UI.add("group", undefined);
Group2.orientation = "row";

//Value2 Elements
var value2T = Group2.add("statictext");
value2T.text = "Value2";
var value2E = Group2.add("edittext");
value2E.text = "0";
value2E.preferredSize.width = "40";


//Group for Value Total
var GroupTotal = UI.add("group", undefined);
GroupTotal.orientation = "row";

//ValueTotal
var valueTo = GroupTotal.add("statictext");
valueTo.text = "Total";
var valueToE = GroupTotal.add("edittext");
valueToE.text = "0";
valueToE.preferredSize.width = "50";


UI.show();
UI.center();

//Functions

value1E.onChanging = value1E.onChanged = function(){
	var val1 = parseFloat(value1E.text);
	var val2 = parseFloat(value2E.text);
	valueToE.text = val1 + val2;
}


value2E.onChanging = value2E.onChanged = function(){
	var val1 = parseFloat(value1E.text);
	var val2 = parseFloat(value2E.text);
	valueToE.text = val1 + val2;
}

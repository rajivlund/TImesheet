sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/ui/lund/timesheet/model/formatter"
], function (Controller, JSONModel, formatter) {
	"use strict";

	return Controller.extend("sap.ui.lund.timesheet.controller.TimesheetList", {

		formatter: formatter,
		
		onInit : function () {
			var oViewModel = new JSONModel({
				duration: "hours"
			});
			this.getView().setModel(oViewModel, "view");
		},
		
		onPress: function(oEvent){
			var oItem = oEvent.getSource();
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("detail", {
				timeitemPath: oItem.getBindingContext("timesheet").getPath().substr(1) 
			});
			
		}

	});
});
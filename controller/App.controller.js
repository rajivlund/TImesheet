sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("sap.ui.lund.timesheet.controller.App", {
		
		onOpenCalendar : function(){
			// Navidate to calendar
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("calendar");
		}

	});

});
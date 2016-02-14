sap.ui.define([
	"sap/ui/core/mvc/Controller",
	'sap/ui/lund/timesheet/controller/BaseController'
], function (Controller, BaseController) {
		"use strict";
		return BaseController.extend("sap.ui.lund.timesheet.controller.Detail", {
		onInit: function () {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.getRoute("detail").attachPatternMatched(this._onObjectMatched, this);
		},
		
		_onObjectMatched: function (oEvent){
			this.getView().bindElement({
				path: "/" + oEvent.getParameter("arguments").timeitemPath,
				model: "timesheet"
			});
		}
		});
});
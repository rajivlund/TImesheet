sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel"
], function (UIComponent, JSONModel) {
	"use strict";

	return UIComponent.extend("sap.ui.lund.timesheet.Component", {

		metadata : {
			manifest: "json"
		},

		init : function () {

			// call the init function of the parent
			UIComponent.prototype.init.apply(this, arguments);

			// set dummy data model
			var oData = {
				recipient : {
					name : "World"
				},
                exampleInteger : 5
			};
			var oModel = new JSONModel(oData);
			this.setModel(oModel);
			
			// Change the oData Model Binding Mode to TwoWay
			var oTimesheet = this.getModel("timesheet");
			oTimesheet.setDefaultBindingMode(sap.ui.model.BindingMode.TwoWay);
			this.setModel(oTimesheet);
			
			//Delete: Create Model for Timesheet Items - Locally
			//var oConfig = this.getMetadata().getConfig();
			//var sNamespace = this.getMetadata().getManifestEntry("sap.app").id;
			//var oTimesheetModel = new JSONModel(jQuery.sap.getModulePath(sNamespace, oConfig.timesheetLocal));
			//this.setModel(oTimesheetModel, "timesheet");			

			//create the views based on url/hash
			this.getRouter().initialize();
		}
	});

});
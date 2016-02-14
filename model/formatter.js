sap.ui.define([], function () {
	"use strict";
	return {
		statusText: function (sStatus) {
			var resourceBundle = this.getView().getModel("i18n").getResourceBundle();
			switch (sStatus) {
				case "A":
					return resourceBundle.getText("timesheetStatusA");
				case "B":
					return resourceBundle.getText("timesheetStatusB");
				case "C":
					return resourceBundle.getText("timesheetStatusC");
				default:
					return sStatus;
			}
		}
	};
});
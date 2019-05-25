var menu = {
	toolbar: document.getElementById("toolbar"),
	action: {
		archive: document.getElementById("act-archive"),
		edit: document.getElementById("act-edit"),
		option: document.getElementById("act-option"),
	},
	
	addAction: function(id) {
		var act  = document.getElementById("act-" + id);
		act.style.visibility = "visible";
		this.getAction = act;
	},
	removeAction: function(id) {
		var act  = document.getElementById("act-" + id);
		act.style.visibility = "invisible";
		this.getAction = act;
	},
	checkStats: function() {	
		if (menu.isArchiveOn == true) {
			Android.showToast("on");
		} else {
			Android.showToast("off");
		}
	},
	
	isArchiveOn: false,
	isEditOn: false,
	isOptionOn: false,
};

menu.action.archive.onmousedown = function() {
	menu.isArchiveOn = true;
	menu.isEditOn = false;
	menu.isOptionOn = false;
	
	menu.checkStats();
};

menu.action.edit.onmousedown = function() {
	menu.isArchiveOn = false;
	menu.isEditOn = true;
	menu.isOptionOn = false;
	
	menu.checkStats();
};

menu.action.option.onmousedown = function() {
	menu.isArchiveOn = false;
	menu.isEditOn = false;
	menu.isOptionOn = true;
	
	menu.checkStats();
};

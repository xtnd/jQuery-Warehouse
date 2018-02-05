$(document).on("pageinit", "#page1", function() {
	console.log("in pbs");
	$.ajax({
		type: "GET", url: "AJAX-01.xml", dataType: "xml",
		success: parseXML
	});
	
});

function parseXML(xml, store) {
	console.log("in buildPage");
	$("h4:first").append( 
						   $(xml).find("title").text() + "<br>"
						 + $(xml).find("studentNumber").attr("program")  + "<br>"
						 + $(xml).find("studentNumber").text()  + "<br>"
						 + $(xml).find("studentName").attr("login")  + "<br>"
						 );

		
		$(xml).find("store:nth(" + 0 + ")").find("itemName").each(function(){
			$("#tools").append(
					"<section data-role='collapsible' class='notext'>" +
						"<h6>Item Name: " + $(this).attr("name") + "</h6>" +
						"<p>Item Price: " + $(this).find("itemPrice").text() + "</p>" +
						"<p>Item Description: " + $(this).find("itemDescription").text() + "</p>" +
						"<p>Item Category: " + $(this).find("itemCategory").text() + "</p>" +
						"<p>Item InventoryID: " + $(this).find("itemInventoryID").text() + "</p>" +
					"</section>"
			);
		});
		
		
		
		$(xml).find("store:nth(" + 1 + ")").find("itemName").each(function(){
			$("#tools2").append(
					"<section data-role='collapsible'>" +
						"<h3>Item Name: " + $(this).attr("name") + "</h3>" +
						"<p>Item Price: " + $(this).find("itemPrice").text() + "</p>" +
						"<p>Item Description: " + $(this).find("itemDescription").text() + "</p>" +
						"<p>Item Category: " + $(this).find("itemCategory").text() + "</p>" +
						"<p>Item InventoryID: " + $(this).find("itemInventoryID").text() + "</p>" +
					"</section>"
			);
		});
		
		
		$(xml).find("store:nth(" + 2 + ")").find("itemName").each(function(){
			$("#tools3").append(
					"<section data-role='collapsible'>" +
						"<h3>Item Name: " + $(this).attr("name") + "</h3>" +
						"<p>Item Price: " + $(this).find("itemPrice").text() + "</p>" +
						"<p>Item Description: " + $(this).find("itemDescription").text() + "</p>" +
						"<p>Item Category: " + $(this).find("itemCategory").text() + "</p>" +
						"<p>Item InventoryID: " + $(this).find("itemInventoryID").text() + "</p>" +
					"</section>"
			);
		});
		
		$("#tools").collapsibleset("refresh");

			

	
		
		
		
		
		
		
		
		
}









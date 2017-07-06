//Set database object
var database = firebase.database().ref();

//button executes this function
function updateDB(){
    var name = $("#name").val();
    var message = $("#message").val();
    console.log(name + " : " + message);

    //Update database here
    var data = {
    	"NAME" : name,
    	"MESSAGE" : message
    }
    database.push(data);

}

database.on("child_added",  function(rowData) {
	// row is same as object we pushed
	var row = rowData.val();

	console.log(row); // debugging

	$(".allMessages").append("<div><em>"+row.NAME+' says</em> : '+row.MESSAGE+"</div>");

})

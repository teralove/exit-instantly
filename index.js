//vers 1.0

module.exports = function ExitInstantly(dispatch) {
				
    dispatch.hook('S_PREPARE_EXIT', 1, function(event) {
		//S_EXIT has 2 int32's, the 2nd one has a value of 16. 
		//Not sure of the purpose, but it still works without it.
		dispatch.toClient('S_EXIT', 1, {
//			unk1: 0,
//			unk2: 16
		})		
	});	
	
}
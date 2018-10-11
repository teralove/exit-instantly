//vers 1.0

module.exports = function ExitInstantly(dispatch) {

	dispatch.hook('S_PREPARE_EXIT', 1, function() {
		// The servers sends the S_EXIT packet with the int64 data:
		// 00000000 10000000
		// Not sure of the purpose, but client seems fine without it.
		dispatch.toClient('S_EXIT', 3, {})		
	});

}

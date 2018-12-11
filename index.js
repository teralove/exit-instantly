module.exports = function ExitInstantly(mod) {

	mod.hook('S_PREPARE_EXIT', 1, function(event) {
		mod.send('S_EXIT', 1, {})		
	});
}

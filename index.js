module.exports = function ExitInstantly(mod) {

    mod.hook('S_PREPARE_EXIT', 1, event => {
        mod.send('S_EXIT', 3, {
            category: 0,
            code: 0
        });
    });
}

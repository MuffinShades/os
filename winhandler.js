let wins = [];

Runtime.updates.push(function() {
    for (let w of wins) {
        w.update();
    }
});
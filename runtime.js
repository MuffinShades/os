var Runtime = {updates: []};

Runtime.update = function() {
    for (let u of updates) {
        u();
    }
}
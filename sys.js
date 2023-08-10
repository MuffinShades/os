const s = sessionStorage;
var System = {
    WriteToFile: function(path, data) {
        
    },
    SetVar: function(name, value) {
        if (typeof name == 'string' && typeof value != 'undefined') {
            s.setValue(name,value);
        }
    },
    GetVar: function(name) {
        if (typeof name == 'string') {
            return s.getItem(name);
        } else {
            return null;
        }
    }
}
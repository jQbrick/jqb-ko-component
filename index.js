
exports.register = function(name, tpl, vm) {
    vm = vm || function() {};
    switch (typeof vm) {
        case 'function':
            this.registerWithConstructor(name, tpl, vm);
            return;
        case 'object':
            this.registerWithObject(name, tpl, vm);
            return;
    }
    throw "Can't register KO component: \"" + name + "\", I don't know it's type!";  
};

exports.registerWithConstructor = function(name, tpl, vm) {
    ko.components.register(name, {
        viewModel: vm,
        template: tpl
    });
};

exports.registerWithObject = function(name, tpl, vm) {
    ko.components.register(name, {
        viewModel: {
            createViewModel: function(params, info) {
                var i = Object.create(vm);
                i.init && i.init(params, info);
                return i;
            }
        },
        template: tpl
    });
};

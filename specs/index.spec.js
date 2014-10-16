
// fake KnockoutJS
ko = {
    components: {
        register: function() {}
    }
};

var component = require('../index');

describe('jqb-ko-component', function() {

    it('should register a constructor view model', function() {
        var Constructor = function() {};
        var stub = sinon.stub(ko.components, 'register', function(name, config) {
            expect(config.viewModel).to.equal(Constructor);
            stub.restore();
        });
        component.register('foo', 'tpl', Constructor);
    });

    it('should register an object view model', function() {
    	var spy = sinon.spy();
    	var Prototype = {
    		init: spy
    	};
    	var stub = sinon.stub(ko.components, 'register', function(name, config) {
            config.viewModel.createViewModel('a','b');
            expect(spy.withArgs('a','b').calledOnce).to.be.true;
            stub.restore();
        });
        component.register('foo', 'tpl', Prototype);
    });

});

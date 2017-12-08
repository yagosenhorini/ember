import { test } from 'qunit';
import moduleForAcceptance from 'super-rentals/tests/helpers/module-for-acceptance';
import Service from '@ember/service';

let StubMapsService = Service.extend({
    getMapElement() {
        return document.createElement('div');
    }
});

moduleForAcceptance('Acceptance | list rentals', {
    beforeEach() {
        this.application.register('service:stubMaps', StubMapsService);
        this.application.inject('component:location-map', 'maps', 'service:stubMaps');
    }
});

test('deverá mostrar rentals como home page', function(assert) {
    visit('/');
    andThen(function() {
        assert.equal(currentURL(), '/rentals', 'should redirect this automatically');
    });
});
test('deverá ter um link para informações sobre compania', function(assert) {
    visit('/');
    click('a:contains("About")');
    andThen(function() {
        assert.equal(currentURL(), '/about', 'should show the informations about the company');
    });
});

test('should have a link to contact', function(assert) {
    visit('/contact');
    andThen(function() {
        assert.equal(currentURL(), '/contact', 'should show the contact page');
    })
});
test('should have a list available rentals', function(assert) {
    visit('/');
    andThen(function() {
        assert.equal(find('.listing').length, 2, 'should see 2 listing');
    })
});

test('should filter the list of rentals by city.', function(assert) {
    visit('/');
    fillIn('.list-filter input', 'Seattle');
    keyEvent('.list-filter input', 'keyup', 69);
    andThen(function() {
        assert.equal(find('.listing').length, 1, 'should show 1 listing');
        assert.equal(find('.listing .location:contains("Seattle")').length, 1, 'should contain 1 listing with location Seattle');
    });
});
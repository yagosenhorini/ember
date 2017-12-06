import { test } from 'qunit';
import moduleForAcceptance from 'super-rentals/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | list rentals');

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
        assert.equal(find('.listing').length, 1, 'should see 1 listing');
    })
});
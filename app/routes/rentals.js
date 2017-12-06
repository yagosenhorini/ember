import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return [{
            id: 'grand-old-mansion',
            title: 'Grand Old Mansion',
            owner: 'Veruca Salt',
            city: 'San Francisco',
            category: 'Estate',
            bedrooms: 15,
            image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg',
            description: 'This grand old mansion sits on over 100 acres of rolling hills and dense redwood forests.'
        }];
    }
});
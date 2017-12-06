export default function() {
    this.namespace = '/api';
    this.get('/rentals', function() {
        return {
            data: [{
                type: 'rentals',
                id: 'grand-old-mansion',
                attributes: {
                    title: 'Grand Old Mansion',
                    owner: 'Veruca Salt',
                    city: 'San Francisco',
                    "property-type": 'Estate',
                    bedrooms: 15,
                    image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg'
                }
            }]
        };
    });
}
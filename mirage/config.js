export default function() {
    this.namespace = '/api';
    let rentals = [{
            type: 'rentals',
            id: 'grand-old-mansion',
            attributes: {
                title: 'Grand Old Mansion',
                owner: 'Veruca Salt',
                city: 'San Francisco',
                category: 'Estate',
                "property-type": 'Estate',
                bedrooms: 15,
                image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg',
                description: 'Old mansion'
            }
        },
        {
            type: 'rentals',
            id: 'urban-living',
            attributes: {
                title: 'Urban Living',
                owner: 'Mike TV',
                city: 'Seattle',
                category: 'Apartment',
                "property-type": 'Condo',
                bedrooms: 1,
                image: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Alfonso_13_Highrise_Tegucigalpa.jpg',
                description: 'Apartment topzera'
            }
        }
    ];
    this.get('/rentals', function(db, request) {
        if (request.queryParams.city !== undefined) {
            let filteredRentals = rentals.filter(function(i) {
                return i.attributes.city.toLowerCase().indexOf(request.queryParams.city.toLowerCase()) !== -1;
            });
            return { data: filteredRentals };
        } else {
            return { data: rentals };
        }
    });
}
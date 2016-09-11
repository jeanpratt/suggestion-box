app.factory('suggestions', [function() {
	var demo = {
		posts: [
			{
				title: 'This is an opinion!',
				upvotes: 1,
				note: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.',
				comments: []
			},
			{
				title: 'This is not an opinion!',
				upvotes: 20,
				note: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.',
				comments: []
			},
			{
				title: 'I love to bake muffins.',
				upvotes: 5,
				note: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.',
				comments: []
			},
			{
				title: 'This tastes great with almond butter.',
				upvotes: 13,
				note: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.',
				comments: []
			},
			{
				title: '1 Like = 1 Muffin',
				upvotes: 0,
				note: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.',
				comments: []
			}
		]
	};
	return demo;
}]);
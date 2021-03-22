const { Post } = require('../models');

const postData = [{
        title: 'Post 1',
        content: 'Alpha',
        user_id: 1

    },
    {
        title: 'Post 2',
        content: 'Bravo',
        user_id: 2
    },
    {
        title: 'Post 3',
        content: 'Charlie',
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
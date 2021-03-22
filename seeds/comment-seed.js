const { Comment } = require('../models');

const commentData = [{
        comment_text: "This is a test 1244151",
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: "Second set of tests",
        user_id: 2,
        post_id: 2
    },
    {
        comment_text: "Last test file",
        user_id: 3,
        post_id: 3
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;

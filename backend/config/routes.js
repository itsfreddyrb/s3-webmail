module.exports = [
    {
        method: 'GET',
        path: '/messages/',
        handler: (req, reply) => {
            reply({
                testData: 'rawr',
            });
        },
    },
];

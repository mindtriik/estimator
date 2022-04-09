import ghpages from 'gh-pages'

// var ghpages = require('gh-pages');

ghpages.publish(
    'dist', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/mindtriik/estimator.git', // Update to point to your repository  
        user: {
            name: 'Donald JB', // update to use your name
            email: 'donald.jb@gmail.com' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)
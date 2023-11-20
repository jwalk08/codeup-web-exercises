const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];


(() => {
    const threeLanguages = users.filter((user) => {
        return user.languages.length >= 3;
    });
    console.log(threeLanguages);

    const userEmail = users.map((user) => {
        return user.email;
    });
    console.log(userEmail)

    const totalYears = users.reduce((total, user) => {
        return total + user.yearsOfExperience;
    }, 0);
    console.log(totalYears);

    const longestEmail = users.reduce((longest, user) => {
        if (user.email.length >= longest.length) {
            return user.email;
        } else {
            return longest;
        }
    },);
    console.log(longestEmail);


})();
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
    console.log("User's with 3 or more  languages => ", threeLanguages);


    const userEmail = users.map((user) => {
        return user.email;
    });
    console.log(userEmail)


    const totalYears = users.reduce((total, user) => {
        return total + user.yearsOfExperience;
    }, 0);
    console.log(totalYears); //35

    const averageYear = users.reduce((acc, user, index) => {
        if (index === users.length - 1) {
            return (acc + user.yearsOfExperience) / users.length;
        } else {
            return acc + user.yearsOfExperience;
        }
    });
    console.log(averageYear);//7


    const longestEmail = users.reduce((accumulator, user) => {
        if (user.email.length > accumulator.email.length) {
            return user;
        } else {
            return accumulator;
        }
    },);
    users[0];
    console.log(longestEmail);


    const instructors = users.reduce((accumulator, user, index) => {
        const separator = index < users.length - 1 ? ', and ' : ', ';
        return accumulator + user.name + separator;
    });
    console.log(instructors);

})();
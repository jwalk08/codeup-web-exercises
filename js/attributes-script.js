// attributes-script.js

document.addEventListener("DOMContentLoaded", function () {
    // Function to change profile picture after 2 seconds
    setTimeout(function () {
        let profilePic = document.getElementById('profile-pic');
        profilePic.src = "./img/times-icon.svg";
    }, 2000);

    // Function to change profile name after 4 seconds
    setTimeout(function () {
        let profileName = document.getElementById('profile-name');
        profileName.innerHTML = 'Jane Doe';
    }, 4000);

    // Function to add a new class to profile description after 6 seconds
    setTimeout(function () {
        let profileDesc = document.getElementById('profile-desc');
        profileDesc.classList.add('new-description');
    }, 6000);

    // Toggle background color every 2 seconds using setInterval
    let profileCard = document.getElementById('profile-card');
    let toggleBtn = document.getElementById('toggle-btn');
    let toggle = false;

    setInterval(function () {
        toggle = !toggle;
        profileCard.style.backgroundColor = toggle ? '#ffc107' : '#007BFF';
    }, 2000);
});

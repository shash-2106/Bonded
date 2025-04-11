// bonded/js/role.js

document.addEventListener('DOMContentLoaded', () => {
    const hostBtn = document.getElementById('hostBtn');
    const sponsorBtn = document.getElementById('sponsorBtn');
    const userBtn = document.getElementById('userBtn');
  
    hostBtn.addEventListener('click', () => selectRole('host'));
    sponsorBtn.addEventListener('click', () => selectRole('sponsor'));
    userBtn.addEventListener('click', () => selectRole('user'));
  });
  
  function selectRole(role) {
    // Save role to localStorage or send to Firebase if needed
    localStorage.setItem('userRole', role);
  
    // Redirect based on role (you can change the URLs as per your app's structure)
    switch (role) {
      case 'host':
        window.location.href = 'host.html';
        break;
      case 'sponsor':
        window.location.href = 'sponsor.html';
        break;
      case 'user':
        window.location.href = 'user.html';
        break;
    }
  }
  
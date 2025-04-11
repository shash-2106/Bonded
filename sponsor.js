import { db, auth } from './firebase.js';
import { collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";

const form = document.getElementById('sponsorForm');
const message = document.getElementById('message');

onAuthStateChanged(auth, (user) => {
  if (user) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const sponsorData = {
        userId: user.uid,
        name: document.getElementById('name').value,
        photo: document.getElementById('photo').value,
        description: document.getElementById('description').value,
        amount: document.getElementById('amount').value,
        createdAt: serverTimestamp()
      };

      try {
        await addDoc(collection(db, 'sponsors'), sponsorData);
        message.textContent = "Profile saved!";
        window.location.href = 'match-sponsor.html'; // ➡ Redirect to match page
      } catch (err) {
        message.textContent = "Error: " + err.message;
      }
    });
  } else {
    message.textContent = "You must be logged in.";
  }
});

import { db, auth } from './firebase.js';
import { collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";

const form = document.getElementById('hostForm');
const message = document.getElementById('message');

onAuthStateChanged(auth, (user) => {
  if (user) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const eventData = {
        userId: user.uid,
        eventName: document.getElementById('eventName').value,
        venue: document.getElementById('venue').value,
        organization: document.getElementById('organization').value,
        description: document.getElementById('description').value,
        createdAt: serverTimestamp()
      };

      try {
        await addDoc(collection(db, 'events'), eventData);
        message.textContent = "Event created!";
        window.location.href = 'host-matches.html'; // ➡ Go to swipe page
      } catch (err) {
        message.textContent = "Error: " + err.message;
      }
    });
  } else {
    message.textContent = "You must be logged in.";
  }
});

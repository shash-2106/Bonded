import { db, auth } from './firebase.js';
import { collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";

const form = document.getElementById('userForm');
const message = document.getElementById('message');

onAuthStateChanged(auth, (user) => {
  if (user) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const selectedTags = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(cb => cb.value);

      const userData = {
        userId: user.uid,
        name: document.getElementById('name').value,
        locality: document.getElementById('locality').value,
        interests: selectedTags,
        createdAt: serverTimestamp()
      };

      try {
        await addDoc(collection(db, 'users'), userData);
        message.textContent = "Profile saved!";
        window.location.href = 'user-events.html'; // ➡ Go to event discovery
      } catch (err) {
        message.textContent = "Error: " + err.message;
      }
    });
  } else {
    message.textContent = "You must be logged in.";
  }
});

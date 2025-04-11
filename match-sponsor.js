
import { db, auth } from './firebase.js';
import {
  collection,
  getDocs,
  addDoc,
  onSnapshot,
  query,
  where
} from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";

const cardsContainer = document.getElementById('cards-container');
const matchesList = document.getElementById('matchesList');

auth.onAuthStateChanged(async (user) => {
  if (!user) return;

  const hostEvents = await getDocs(collection(db, 'events'));

  hostEvents.forEach((docSnap) => {
    const host = docSnap.data();

    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <p><strong>${host.eventName}</strong> (${host.organization})</p>
      <p>${host.description}</p>
      <p><strong>Venue:</strong> ${host.venue}</p>
      <button class="yesBtn">✅ Yes</button>
      <button class="noBtn">❌ No</button>
    `;

    card.querySelector('.yesBtn').addEventListener('click', async () => {
      await addDoc(collection(db, 'matches'), {
        sponsorId: user.uid,
        hostId: docSnap.id,
        hostInfo: host
      });
      card.remove();
    });

    card.querySelector('.noBtn').addEventListener('click', () => {
      card.remove();
    });

    cardsContainer.appendChild(card);
  });

  const matchQuery = query(collection(db, 'matches'), where('sponsorId', '==', user.uid));
  onSnapshot(matchQuery, (snapshot) => {
    matchesList.innerHTML = '';
    snapshot.forEach((matchDoc) => {
      const m = matchDoc.data();
      const li = document.createElement('li');
      li.textContent = `${m.hostInfo.eventName} — ${m.hostInfo.organization}`;
      matchesList.appendChild(li);
    });
  });
});

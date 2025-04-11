`import { db, auth } from './firebase.js';
import {
  collection,
  getDocs,
  addDoc,
  onSnapshot,
  query,
  where,
  doc
} from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";

const cardsContainer = document.getElementById('cards-container');
const matchesList = document.getElementById('matchesList');

auth.onAuthStateChanged(async (user) => {
  if (!user) return;

  const sponsorsSnapshot = await getDocs(collection(db, 'sponsors'));

  sponsorsSnapshot.forEach((docSnap) => {
    const sponsor = docSnap.data();

    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <p><strong>Name:</strong> ${sponsor.name}</p>
      <div>
        <p>${sponsor.description}</p>
        <p><strong>Amount:</strong> ₹${sponsor.amount}</p>
        <button class="yesBtn">✅ Yes</button>
        <button class="noBtn">❌ No</button>
      </div>
    `;

    // If host clicks Yes — create match
    card.querySelector('.yesBtn').addEventListener('click', async () => {
      await addDoc(collection(db, 'matches'), {
        hostId: user.uid,
        sponsorId: docSnap.id,
        sponsorInfo: sponsor
      });
      card.remove();
    });

    // No = just remove card
    card.querySelector('.noBtn').addEventListener('click', () => {
      card.remove();
    });

    cardsContainer.appendChild(card);
  });

  // Live match display
  const matchQuery = query(collection(db, 'matches'), where('hostId', '==', user.uid));
  onSnapshot(matchQuery, (snapshot) => {
    matchesList.innerHTML = '';
    snapshot.forEach((matchDoc) => {
      const m = matchDoc.data();
      const li = document.createElement('li');
      li.textContent = `${m.sponsorInfo.name} — ₹${m.sponsorInfo.amount}`;
      matchesList.appendChild(li);
    });
  });
});

`
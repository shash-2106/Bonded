import { db, auth } from './firebase.js';
import {
  collection,
  getDocs,
  query,
  where
} from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";

const eventList = document.getElementById('eventList');

auth.onAuthStateChanged(async (user) => {
  if (!user) return;

  // Get current user profile
  const usersSnapshot = await getDocs(collection(db, 'users'));
  let userData;
  usersSnapshot.forEach(doc => {
    const data = doc.data();
    if (data.userId === user.uid) {
      userData = data;
    }
  });

  if (!userData) {
    eventList.innerHTML = "<p>User data not found.</p>";
    return;
  }

  // Show events that match at least one interest
  const eventsSnapshot = await getDocs(collection(db, 'events'));
  const matchedEvents = [];

  eventsSnapshot.forEach(doc => {
    const event = doc.data();

    // Match by shared tags (for now you can manually tag your event)
    if (event.tags && event.tags.some(tag => userData.interests.includes(tag))) {
      matchedEvents.push(event);
    }
  });

  // Display events
  if (matchedEvents.length === 0) {
    eventList.innerHTML = "<p>No matching events found.</p>";
  } else {
    matchedEvents.forEach(event => {
      const div = document.createElement('div');
      div.className = 'card';
      div.innerHTML = `
        <h3>${event.eventName}</h3>
        <p><strong>Venue:</strong> ${event.venue}</p>
        <p>${event.description}</p>
        <p><strong>Fee:</strong> ${event.fee || 'Free'}</p>
      `;
      eventList.appendChild(div);
    });
  }
});

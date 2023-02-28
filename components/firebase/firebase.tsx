import { EventRef, userRef } from "@/firebaseConfig";
import { async } from "@firebase/util";
import {
  addDoc,
  doc,
  getDocs,
  getDoc,
  onSnapshot,
  setDoc,
  SetOptions,
} from "firebase/firestore";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const getEvents = () => {
  const [Events, setEvents] = useState([]);
  useEffect(() => {
    onSnapshot(EventRef, (snapshot) => {
      let allEvent = [];
      snapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
          allEvent.push({ ...change.doc.data(), id: change.doc.id });
        }
        if (change.type === "modified") {
          allEvent = allEvent.map((Event) => {
            if (Event.id === change.doc.id) {
              return { ...change.doc.data(), id: change.doc.id };
            }
            return Event;
          });
        }
        if (change.type === "removed") {
          allEvent = allEvent.filter((Event) => Event.id !== change.doc.id);
        }
        setEvents(allEvent);
      });
    });
  }, []);
  
  return Events;
};

// export const getSingleEvent(eventId){
//     const Events = getEvents();
//     if(Events){

//     }
    
// }
export const sendEvent = (Event) => {
  addDoc(EventRef, Event)
    .then((docRef) => {
      location.href = './';
      console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
};

export const addUser = async (data, userId: string) => {
  const docRef = await setDoc(doc(userRef, userId), data);
  console.log("Document written with ID: ", docRef);
};

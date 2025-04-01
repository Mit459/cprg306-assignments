import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export const getItems = async (userId) => {
    try{
        const itemsRef = collection(db, "users", userId, "items");
        const q = query(itemsRef);
        const querySnapshot = await getDocs(q);

        const items = [];
        querySnapshot.forEach((doc) => {
            items.push({ id: doc.id, ...doc.data()});
        });

        return items;
    } 
    catch (error) {
            console.error("Encountered an error fetching items: ", error);
            return[];    
    }
};

export const addItem = async (userId, item) => {
    try {
        const itemsRef = collection(db, "users", userId, "items");
        const docRef = await addDoc(itemsRef, item);
        return docRef.id;
    } 
    catch (error) {
        console.error("Encountered an error adding item: ", error);
        return null;
    }
};
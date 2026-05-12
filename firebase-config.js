// NEXUS ELITE - Firebase Configuration
// Auto-generated: 2026-05-12

// Firebase v9+ Modular SDK (CDN via esm.sh for browser compatibility)
import { initializeApp } from "https://esm.sh/firebase@10.12.0/app";
import { 
    getAuth, 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup,
    updateProfile
} from "https://esm.sh/firebase@10.12.0/auth";
import { 
    getFirestore, 
    collection, 
    doc, 
    setDoc, 
    getDoc, 
    getDocs, 
    updateDoc, 
    deleteDoc,
    query, 
    where, 
    orderBy, 
    addDoc,
    serverTimestamp,
    onSnapshot,
    increment,
    limit
} from "https://esm.sh/firebase@10.12.0/firestore";
import { 
    getStorage, 
    ref, 
    uploadBytes, 
    getDownloadURL 
} from "https://esm.sh/firebase@10.12.0/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDaQZY2aOAh9lBGN0SUAFkby0mwDGIQm9o",
    authDomain: "nexus-elite-e0045.firebaseapp.com",
    projectId: "nexus-elite-e0045",
    storageBucket: "nexus-elite-e0045.firebasestorage.app",
    messagingSenderId: "418727847202",
    appId: "1:418727847202:web:7551d6c04dbb90a0b1b17b",
    measurementId: "G-1W7L6W50RZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// Export everything for use in other files
export { 
    app, auth, db, storage,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup,
    updateProfile,
    collection, doc, setDoc, getDoc, getDocs, updateDoc, deleteDoc,
    query, where, orderBy, addDoc, serverTimestamp, onSnapshot, increment, limit,
    ref, uploadBytes, getDownloadURL
};

// Helper: Get current user data from Firestore
export async function getCurrentUserData() {
    const user = auth.currentUser;
    if (!user) return null;
    const docRef = doc(db, 'users', user.uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        return { uid: user.uid, email: user.email, ...docSnap.data() };
    }
    return null;
}

// Helper: Format money
export function formatMoney(n) {
    return '$' + parseFloat(n || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// Helper: Format date
export function formatDate(d) {
    if (!d) return 'N/A';
    const date = d.toDate ? d.toDate() : new Date(d);
    return date.toLocaleDateString('en-US', {month:'short', day:'numeric', year:'numeric', hour:'2-digit', minute:'2-digit'});
}

// Helper: Check if user is admin
export async function isAdmin() {
    const data = await getCurrentUserData();
    return data && data.role === 'admin';
}

// Helper: Auth state wrapper
export function checkAuth(callback) {
    return onAuthStateChanged(auth, callback);
}

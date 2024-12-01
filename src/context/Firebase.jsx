import { createContext, useContext, useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import {getAuth,signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged} from "firebase/auth"
import { getFirestore, collection, addDoc, query, getDocs, orderBy, where,deleteDoc, doc} from "firebase/firestore";

const FirebaseContext = createContext(null);

const firebaseConfig = {
    apiKey: "AIzaSyD6fIPznX2Gr4XXYDrtixZ8jD5b98Vg8TY",
    authDomain: "career-link-de8ad.firebaseapp.com",
    projectId: "career-link-de8ad",
    storageBucket: "career-link-de8ad.firebasestorage.app",
    messagingSenderId: "551538302511",
    appId: "1:551538302511:web:9041a72d1f63b1bc52b0da"
  };

  const firebaseApp = initializeApp(firebaseConfig);
  const firebaseAuth = getAuth(firebaseApp);
  const firestore = getFirestore(firebaseApp);

export const FirebaseProvider = (props) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [jobs, setJobs] = useState([]);

    const auth = getAuth();

    useEffect(() => {
      onAuthStateChanged(firebaseAuth, (user) => {
        if(user) setUser(user);
        else setUser(null);
      })
    }, [])
    


    const signupUser = (email, password) => {
        return createUserWithEmailAndPassword(firebaseAuth, email, password)
    }
    


    const logoutUser = () => {
        return signOut(auth)
    }



    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(firebaseAuth, email, password)
    }


    const createJob = async (title,company,location,postedOn,experience,type,salary,skills,jobLink) => {
        try {
            await addDoc(collection(firestore, "jobs"), {
                title,
                company,
                location,
                postedOn,
                experience,
                type,
                salary,
                skills,
                jobLink
            });
            alert("Job created successfully");
        } catch (error) {
            console.error("Error adding document: ", error);
        }
    }


    const fetchJobs = async () => {
        setLoading(true); 
        const tempJobs = [];
        const jobsRef = query(collection(firestore, "jobs"));
        const q = query(jobsRef, orderBy("postedOn", "desc"));
        const req = await getDocs(q);
    
        req.forEach((job) => {
          tempJobs.push({
            ...job.data(),
            id: job.id,
          });
        });
        setJobs(tempJobs);
        setLoading(false);
      };



      const fetchJobsCustom = async ({ title, type, location, company }) => {
        console.log(title);
        const tempJobs = [];
    
        let jobsRef = query(collection(firestore, "jobs"));
        
        // Conditionally add where() clauses for each field with a non-empty value
        if (title) {
            jobsRef = query(jobsRef, where("title", "==", title));
        }
        if (type) {
            jobsRef = query(jobsRef, where("type", "==", type));
        }
        if (location) {
            jobsRef = query(jobsRef, where("location", "==", location));
        }
        if (company) {
            jobsRef = query(jobsRef, where("company", "==", company));
        }
    
        try {
            // Fetch jobs from Firestore based on the constructed query
            const req = await getDocs(jobsRef);
            req.forEach((job) => {
                tempJobs.push({
                    ...job.data(),
                    id: job.id,
                });
            });
    
            setJobs(tempJobs);
            console.log(tempJobs);
        } catch (error) {
            console.error("Error fetching jobs: ", error);
        }
    };
    
    const deleteJob = async (jobId) => {
        try {
            const jobRef = doc(firestore, "jobs", jobId); // Reference to the specific job document
            await deleteDoc(jobRef); // Delete the document
            alert("Job deleted successfully");
        } catch (error) {
            console.error("Error deleting document: ", error);
        }
    }
    

    const isLoggedIn = user ? true : false;



    return <FirebaseContext.Provider value={{signupUser, loginUser,isLoggedIn,createJob, fetchJobs,jobs,loading,logoutUser,fetchJobsCustom, user,deleteJob}}>
        {props.children} 
    </FirebaseContext.Provider>
}

export const useFirebase = () => useContext(FirebaseContext);
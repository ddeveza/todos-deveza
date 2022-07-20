import { getFirestore } from "firebase/firestore";
import { Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { FirestoreProvider, useFirebaseApp } from "reactfire";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";

function App() {
  const location = useLocation();
  const firestoreInstance = getFirestore(useFirebaseApp());
  return (
    <Routes location={location} key={location.key}>
      <FirestoreProvider sdk={firestoreInstance}>
        <Suspense fallback={<div>Loading...</div>}>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Login />} />
        </Suspense>
      </FirestoreProvider>
    </Routes>
  );
}

export default App;

import { getFirestore } from "firebase/firestore";
import { Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { FirestoreProvider, useFirebaseApp } from "reactfire";
import AuthLayout from "./layout/authLayout";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";

function App() {
  const location = useLocation();
  const firestoreInstance = getFirestore(useFirebaseApp());
  return (
    <FirestoreProvider sdk={firestoreInstance}>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes location={location} key={location.key}>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<AuthLayout pathname={location.pathname} />}>
            <Route index element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Route>
        </Routes>
      </Suspense>
    </FirestoreProvider>
  );
}

export default App;

"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";
import { auth, firestore } from "../../../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import { User } from "firebase/auth";
import {
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
} from '@mui/material';

const UserPage = () => {
    const [user, setUser] = useState<User | null>(null);
    const [firstName, setFirstName] = useState<string | null>(null);
    const [lastName, setLastName] = useState<string | null>(null);
    const [userEmail, setUserEmail] = useState<string | null>(null); 
    const [gender, setGender] = useState<string | null>(null); // Added state for gender
    const [loading, setLoading] = useState(true);
    
    const router = useRouter();
    console.log(user);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                setUser(user);
                const userDoc = await getDoc(doc(firestore, "users", user.uid));
                if (userDoc.exists()) {
                    const userData = userDoc.data();
                    setFirstName(userData.firstName);
                    setLastName(userData.lastName);
                    setUserEmail(userData.email);
                    setGender(userData.gender);  // Set gender from userData
                    console.log(userData.email);
                }
            } else {
                router.push("/login");
            }
            setLoading(false);
        });
        return () => unsubscribe();
    }, [router]);

    if (loading) {
        return <p>Loading....</p>;
    }

    return (
        <div style={{
            marginTop: "20px"
        }}>
            {firstName && lastName && userEmail ? (
                <div style={{
                    display: "flex",
                    position: "sticky", 
                    top: "8px", 
                    height: "100vh", 
                    justifyContent: "space-between"
                }}>
                    <TableContainer style={{ width: '100%', height: "300px", backgroundColor: '#0c0238', padding: '20px', borderRadius: '8px' }}>
                        <h2 style={{ marginBottom: '20px', color: 'white', fontWeight: "bold", fontSize: "24px" }}>
                            User Details
                        </h2>
                        <Table style={{ width: '100%' }}>
                            <TableHead>
                                <TableRow>
                                    <TableCell style={{ color: 'white', fontWeight: "bold", fontSize: "16px" }}>First Name</TableCell>
                                    <TableCell style={{ color: 'white', fontWeight: "bold", fontSize: "16px" }}>Last Name</TableCell>
                                    <TableCell style={{ color: 'white', fontWeight: "bold", fontSize: "16px" }}>Email</TableCell>
                                    <TableCell style={{ color: 'white', fontWeight: "bold", fontSize: "16px" }}>Gender</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell style={{ color: 'white', fontWeight: "bold"}}>{firstName?.toUpperCase()}</TableCell>
                                    <TableCell style={{ color: 'white', fontWeight: "bold" }}>{lastName?.toUpperCase()}</TableCell>
                                    <TableCell style={{ color: 'white', fontWeight: "bold" }}>{userEmail}</TableCell>
                                    <TableCell style={{ color: 'white', fontWeight: "bold" }}>{gender?.toUpperCase()}</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            ) : (
                <p>No user data found</p>
            )}
        </div>
    );
};

export default UserPage;

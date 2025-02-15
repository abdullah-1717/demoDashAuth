"use client";
import React from 'react';
import { Typography, Divider, Box } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import LogoutIcon from '@mui/icons-material/Logout';
import Button from "@mui/material/Button";
import MenuLink from './menuLink/MenuLink';
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../../../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import { User } from "firebase/auth";
import { firestore } from "../../../../firebase/firebase";

const menuItems = [
    {
        title: "Pages",
        list: [
            {
                title: "Dashboard",
                path: "/dashboard",
                icon: <DashboardIcon />
            },
            {
                title: "User ",
                path: "/dashboard/user",
                icon: <PersonIcon />
            },
            {
                title: "Products",
                path: "/dashboard/product",
                icon: <ShoppingCartIcon />
            }
        ]
    },
    {
        title: "User",
        list: [
            {
                title: "Setting",
                path: "/dashboard/settings", 
                icon: <SettingsIcon />
            },
            {
                title: "Help",
                path: "/dashboard/help",
                icon: <HelpOutlineIcon />
            },
        ]
    }
];

const Sidebar = () => {

    const [user, setUser ] = useState<User | null>(null);
    const [userName, setUserName] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);
    
    const router = useRouter();
    console.log(user);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                setUser (user);
                const userDoc = await getDoc(doc(firestore, "users", user.uid));
                if (userDoc.exists()) {
                    const userData = userDoc.data();
                    setUserName(`${userData.firstName} ${userData.lastName}`);
                }
            } else {
                router.push("/login");
            }
            setLoading(false);
        });
        return () => unsubscribe();
    }, [router]);

    const handleLogout = async () => {
        try {
            await signOut(auth);
            router.push("/login");
        } catch (error) {
            console.error("Logout Error", error);
        }
    };

    if (loading) {
        return <p>Loading....</p>;
    }

    return (
        <div 
            style={{ 
                display: "flex", 
                flexDirection: "column", 
                position: "sticky", 
                top: "40px", 
                height: "100vh", 
                justifyContent: "space-between" ,
                paddingBottom: "40px" 
            }}>
            <Box display="flex" alignItems="center" p={2} borderBottom="1px solid #ddd">
                <Typography variant="h6">{userName}</Typography>
            </Box>
            <Divider />
            <div style={{ padding: "10px", flexGrow: 1 }}>
                {menuItems.map((category) => (
                    <div key={category.title} style={{ marginBottom: '20px' }}>
                        
                        <Typography variant="subtitle1" style={{ fontWeight: 'bold', padding: '10px 0' }}>
                            {category.title}
                        </Typography>
                        <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
                            {category.list.map((item) => (
                                <MenuLink item={item} key={item.title} />
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <Button sx={{
                color: "#0c0238",
                padding: "8px",
                backgroundColor: "white",
                fontWeight: "bold",
                borderRadius: "8px",
                '&:hover': {
        backgroundColor: "#003366",
        color: "white" 
    }
            }} onClick={handleLogout}>
                <LogoutIcon sx={{ marginRight: "8px" }} />Logout
            </Button>
        </div>
    );
};

export default Sidebar;

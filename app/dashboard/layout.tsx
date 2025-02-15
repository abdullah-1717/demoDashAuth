"use client";
import React from 'react'; 
import Navbar from "../ui/dashboard/navbar/navbar";
import Sidebar from "../ui/dashboard/sidebar/sidebar";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div style={{
            display: "flex",
            color: "white",
        }}>
            <div style={{
                flex: "1",
                backgroundColor: "#0c0238",
                padding: "20px",
                color: "white",
            }}>
                <Sidebar />
            </div>
            <div style={{
                flex: "4",
                padding: "20px",
            }}>
                <div style={{
                    backgroundColor: "#0c0238",
                    borderRadius: "8px",
                }}>
                    <Navbar />
                </div>
                {children}
            </div>
        </div>
    );
}

export default Layout;

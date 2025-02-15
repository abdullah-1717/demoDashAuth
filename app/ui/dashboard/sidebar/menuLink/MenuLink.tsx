"use client";
import React from "react";
import Link from "next/link";
import { ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { usePathname } from "next/navigation";

interface MenuItem {
    title: string;
    path: string;
    icon: React.ReactNode; 
}

interface MenuLinkProps {
    item: MenuItem;
}

const MenuLink: React.FC<MenuLinkProps> = ({ item }) => {
    const pathName = usePathname(); 
    const isActive = pathName === item.path;  

    return (
        <Link href={item.path}>  
            <ListItem
                sx={{
                    backgroundColor: isActive ? 'white' : 'transparent', 
                    borderRadius: '8px', 
                    '&:hover': {
                        backgroundColor: isActive ? '#f0f0f0' : '#444444', 
                        borderColor: '#9999ff',  
                    },
                    color: isActive ? '#1976d2' : 'white',  
                }}
            >
                <ListItemIcon sx={{
                    color: isActive ? '#1976d2' : 'white',
                    '&:hover': {
                        color: '#9999ff',  
                    }
                }}>
                    {item.icon}
                </ListItemIcon>
                <ListItemText
                    primary={item.title}
                    sx={{
                        color: isActive ? '#1976d2' : 'white', 
                        '&:hover': {
                            color: '#9999ff',  
                        }
                    }}
                />
            </ListItem>
        </Link>
    );
};

export default MenuLink;
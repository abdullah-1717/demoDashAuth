"use client";
import React, { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { IconButton, Box, TextField, Typography } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatIcon from '@mui/icons-material/Chat';
import PublicIcon from '@mui/icons-material/Public';

const Navbar = () => {
    const [searchQuery, setSearchQuery] = useState('');  
    const pathName = usePathname();
    const currentPage = pathName.split('/').pop();
    const router = useRouter(); 


    const handleKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter' && searchQuery.trim() !== '') {
            
            if (searchQuery.trim().toLowerCase() === "dashboard") {
                router.push("/dashboard"); 
            } else {
                router.push(`/dashboard/${searchQuery.trim().toLowerCase()}`); // Navigate to "/dashboard/search" with the search query as a query parameter
            }
            setSearchQuery(""); 
        }
    };

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                p: 2,
                gap: 2,
                flexWrap: 'nowrap',
                width: '100%', 
            }}>
    
            <Typography
                variant="h6"
                style={{
                    textTransform: "capitalize",
                    fontWeight: "bold",
                    marginBottom: 0,
                }}
            >
                {currentPage ? `${currentPage}` : 'No Page Selected'}
            </Typography>

            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2, 
                    flexGrow: 1, 
                    justifyContent: 'flex-end',
                }}>
               
                <TextField
                    sx={{
                        maxWidth: 200,
                        backgroundColor: "white",
                        borderRadius: "8px",
                        padding: "4px",
                        display: { xs: 'none', sm: 'block' },
                    }}
                    variant="standard"
                    size="small"
                    placeholder="Search...."
                    value={searchQuery}  
                    onChange={(e) => setSearchQuery(e.target.value)}  
                    onKeyDown={handleKeyDown} 
                />
                <Box sx={{ display: 'flex', gap: 1 }}>
                    <IconButton
                        color="inherit"
                        aria-label="notifications"
                        sx={{
                            color: 'white',
                            '&:hover': {
                                color: '#1976d2',
                            },
                        }}
                    >
                        <NotificationsIcon />
                    </IconButton>

                    <IconButton
                        color="inherit"
                        aria-label="chat"
                        sx={{
                            color: 'white',
                            '&:hover': {
                                color: '#1976d2',
                            },
                        }}
                    >
                        <ChatIcon />
                    </IconButton>

                    <IconButton
                        color="inherit"
                        aria-label="public"
                        sx={{
                            color: 'white',
                            '&:hover': {
                                color: '#1976d2',
                            },
                        }}
                    >
                        <PublicIcon />
                    </IconButton>
                </Box>
            </Box>
        </Box>
    );
};

export default Navbar;

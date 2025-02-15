"use client";
import React, { useState } from "react";
import { useRouter, usePathname } from "next/navigation"; // Import useRouter from next/navigation
import { IconButton, Box, TextField, Typography } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatIcon from '@mui/icons-material/Chat';
import PublicIcon from '@mui/icons-material/Public';

const Navbar = () => {
    const [searchQuery, setSearchQuery] = useState('');  // State to hold search input
    const pathName = usePathname();
    const currentPage = pathName.split('/').pop();
    const router = useRouter(); // Get the router object

    // Handle when Enter key is pressed
    const handleKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter' && searchQuery.trim() !== '') {
            // Check if the search term is "dashboard"
            if (searchQuery.trim().toLowerCase() === "dashboard") {
                router.push("/dashboard"); // Navigate to "/dashboard" directly
            } else {
                router.push(`/dashboard/${searchQuery.trim().toLowerCase()}`); // Navigate to "/dashboard/search" with the search query as a query parameter
            }
            setSearchQuery(""); // Clear the search input
        }
    };

    return (
        <Box
            sx={{
                display: 'flex', // Ensure all elements are in a single row
                justifyContent: 'space-between',
                alignItems: 'center',
                p: 2,
                gap: 2, // Add gap between elements for spacing
                flexWrap: 'nowrap', // Ensure no wrapping occurs
                width: '100%', // Ensure the width of navbar is 100% of parent container
            }}
        >
            {/* Title section */}
            <Typography
                variant="h6"
                style={{
                    textTransform: "capitalize",
                    fontWeight: "bold",
                    marginBottom: 0, // Remove bottom margin
                }}
            >
                {currentPage ? `${currentPage}` : 'No Page Selected'}
            </Typography>

            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2, // Add gap between search bar and icons
                    flexGrow: 1, // Allow this section to grow to take remaining space
                    justifyContent: 'flex-end', // Align icons to the right of the navbar
                }}
            >
                {/* Only show TextField (Search Bar) on larger screens */}
                <TextField
                    sx={{
                        maxWidth: 200,
                        backgroundColor: "white",
                        borderRadius: "8px",
                        padding: "4px",
                        display: { xs: 'none', sm: 'block' }, // Hide on small screens, show on large screens
                    }}
                    variant="standard"
                    size="small"
                    placeholder="Search...."
                    value={searchQuery}  // Bind input value to the state
                    onChange={(e) => setSearchQuery(e.target.value)}  // Update search state on input change
                    onKeyDown={handleKeyDown}  // Handle key press events
                />
                
                {/* Icons container */}
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

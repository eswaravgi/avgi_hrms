import { Button, Fade, Menu, MenuItem } from "@mui/material"
import "./navbar.scss"
import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigatePage = useNavigate();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleLogout = () => {
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("accessToken");
        navigatePage('/');
    }

    return (
        <div className="navbar">
            <div className="logo">
                <img src="logo.svg" alt="" />
                <span>MyAdmin</span>
            </div>
            <div className="icons">
                {/* <div className="notification">
                    <img src="/notifications.svg" alt="" />
                    <span>1</span>
                </div>
                <div className="user">
                    <img src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                    <span>Muthamil</span>
                </div> */}
                <div className="user">
                    <img src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                    <Button
                        id="fade-button"
                        aria-controls={open ? 'fade-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        Muthamil
                    </Button>
                    <Menu
                        id="fade-menu"
                        MenuListProps={{
                            'aria-labelledby': 'fade-button',
                        }}
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        TransitionComponent={Fade}
                    >
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>My account</MenuItem>
                        <MenuItem onClick={handleLogout}>Logout</MenuItem>
                    </Menu>
                </div>
                <img src="/settings.svg" alt="" className="icon" />
            </div>
        </div>
    )
}

export default Navbar
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMicrochip} from "@fortawesome/free-solid-svg-icons";
import {Link, useNavigate} from 'react-router-dom';
import {useContext, useState} from "react";
import {UserData} from "../../../data/user/UserData.tsx";
import {LoginUserContext} from "../../../context/LoginUserContext.ts";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Spinner from "../../../util/Spinner.tsx";
import * as FirebaseAuthService from "../../../authService/FirebaseAuthService.tsx";
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import { CartContext, CartContextType } from "../../../context/CartContext.ts";



const SearchContainer = styled('form')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

// type Props = {
//     cartItemQuantity?: number
// }

export default function NavList() {
    const loginUser = useContext<UserData | null | undefined>(LoginUserContext);
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');
    // Ensure cartContext is defined before accessing properties
    const cartContext = useContext<CartContextType | undefined>(CartContext); // Consume context values
    const cartItemNumber = cartContext?.cartItemNumber;



    const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setSearchQuery(event.target.value);
    };


    const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (searchQuery.trim() !== '') {
            navigate(`/product/all/${searchQuery}`); // Navigate to SearchResultPage with search query
            setSearchQuery(''); // Reset search query after navigation
        }
    };

    const handleShoppingCartClick = () => {
        if (!loginUser) {
            // No user logged in, navigate to login page
            navigate('/login');
        } else {
            // User logged in, navigate to cart item page
            navigate('/shoppingcart');
        }
    };

    const renderLoginUser = ()=>{
        if (loginUser){
            return(
                <Stack direction='row'>
                    <Box sx={{display: "flex", margin: "12px 4px 0 8px"}}>
                        <Typography>
                            {loginUser.email}
                        </Typography>

                    </Box>
                    <Box sx={{display: "flex", margin: "6px 0 0 0"}}>
                        <Button onClick={()=>{
                            FirebaseAuthService.handleSignOut();
                        }}>
                            <LogoutIcon/>
                        </Button>
                    </Box>
                </Stack>
            )
        } else if (loginUser === null){
            return(
                <Stack direction='row'>
                    <Box sx={{display: "flex", margin: "6px 0 0 0"}}>
                        <Button onClick={()=>{
                            navigate("/login")
                        }}>
                            <LoginIcon/>
                        </Button>
                    </Box>
                </Stack>)
        } else if (loginUser === undefined){
            <Spinner/>
        }
    }



    return (
        <Box sx={{ flexGrow: 1}}>
            <AppBar position="fixed" sx={{ backgroundColor: 'black', marginBottom: '0'}}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 2 }}
                    >
                        <Link
                        to = "/"
                        style ={{color: "white"}}>
                            <FontAwesomeIcon icon={faMicrochip}/>
                        </Link>
                    </IconButton>
                    <Link
                        to = "/"
                        style ={{color: "white", textDecoration: 'none' }}>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ display: { xs: 'none', sm: 'block' } }}
                    >
                        Smart Home
                    </Typography>
                    </Link>
                    <SearchContainer  onSubmit={handleSearchSubmit}>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                            onChange={handleSearchInputChange}
                        />
                    </SearchContainer>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <IconButton
                            onClick={handleShoppingCartClick}
                            size="large" aria-label="show 4 new mails" color="inherit"
                            >
                            <Badge badgeContent={loginUser ? cartItemNumber : 0} color="error">
                                <ShoppingCartIcon />
                            </Badge>
                        </IconButton>
                        <Box
                            component="div"
                            aria-label="show 17 new notifications"
                            color="inherit"
                        >
                            <Badge color="error">
                                {
                                    renderLoginUser()
                                }
                            </Badge>
                        </Box>

                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
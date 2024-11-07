import { useEffect } from "react";
import { auth , provider } from "../firebase";
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import { selectUserName, selectUserEmail,selectUserPhoto, setUserLoginDetails, setSignOutState } from "../features/user/userSlice";
import styled from "styled-components"; 
import { signInWithPopup , signOut} from "firebase/auth";



const Header = (props) =>{


    const dispatch = useDispatch();
    const history = useHistory();
    const userName = useSelector(selectUserName);
    const userEmail = useSelector(selectUserEmail);
    const userPhoto = useSelector(selectUserPhoto);

    useEffect(()=>{
        auth.onAuthStateChanged(async(user)=>{
            if(user){
                setUser(user);
                history.push('/home');
            }
        })
    }, [userName]);

    const setUser = (user) => {
        dispatch(
            setUserLoginDetails({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL,

            })
        )
    };

    const handleAuth = () => {
        if (!userName){
        signInWithPopup(auth, provider).then((result) => {
            setUser(result.user);
        }).catch((error) => {
            alert(error.message)
        });

    } else if (userName) {
        signOut(auth).then(()=>{
            dispatch(setSignOutState());
            history.push("/");
        }).catch((err)=> alert(err.message));
    }
};


    return(  
    <Nav>
        <Logo>
            <img src={`${process.env.PUBLIC_URL}/images/logo.svg`} alt="Brand" />
        </Logo>
        {!userName ? <Login onClick={handleAuth}>Login</Login> : 
        <>
        <NavMenu>
    <a href="/home">
        <img src={`${process.env.PUBLIC_URL}/images/home-icon.svg`} alt="HOME" />
        <span>HOME</span>
    </a>
    <a href="/search">
        <img src={`${process.env.PUBLIC_URL}/images/search-icon.svg`} alt="SEARCH" />
        <span>SEARCH</span>
    </a>
    <a href="/watchlist">
        <img src={`${process.env.PUBLIC_URL}/images/watchlist-icon.svg`} alt="WATCHLIST" />
        <span>WATCHLIST</span>
    </a>
    <a href="/originals">
        <img src={`${process.env.PUBLIC_URL}/images/original-icon.svg`} alt="ORIGINALS" />
        <span>ORIGINALS</span>
    </a>
    <a href="/movies">
        <img src={`${process.env.PUBLIC_URL}/images/movie-icon.svg`} alt="MOVIES" />
        <span>MOVIES</span>
    </a>
    <a href="/series">
        <img src={`${process.env.PUBLIC_URL}/images/series-icon.svg`} alt="SERIES" />
        <span>SERIES</span>
    </a>
</NavMenu>

        <SignOut>
            <UserImage src={userPhoto} alt={userName} />
            <DropDown>
                <span onClick={handleAuth}>SignOut</span>
            </DropDown>
        </SignOut>
                </>
}
    </Nav>
    )
}

const Nav = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 70px !important;
    display: flex;
    justify-contact: space-between;
    align-items: center;
    padding: 0 36px;
    background-color: #090b13;
    letter-spacing: 16px;
    z-index: 3;

`;

const Logo = styled.a`
    padding: 0 ;
    width: 80px;
    margin-top: 4px;
    max-height: 80px;
    font-size: 0px;
    display: inline-block:
    img {
        display: block;
        width: 100px;
    }

`;

const NavMenu = styled.div`
    allign-items: center;
    display: flex;
    flex:flow:row nowrap;
    height: 100%;
    justify-content: flex-end;
    margin: 0px;
    padding: 0px;
    position: relative;
    margin-right: auto;
    margin-left: 25px;

    a {
        display: flex;
        align-items: center;
        padding: 0px 12px;

        img {
            height: 20px;
            min-width: 20p
            z-index: auto;
            width: 20px;
        }
        
    span {
        color: rgb(249,249,249);
        font-sizing: 13px; 
        letter-spacing: 1.42px;
        line-height: 1.08;
        padding: 2px 3px;
        white-space: nowrap;
        position: relative;

        &:before {
            background-color: rgb(249,249,249);
            border-radius: 0px 0px 4px 4px;
            bottom: -6px;
            content: "";
            left: 0px; 
            height: 2px;
            opacity: 0;
            position: absolute;
            right: 0px;
            transform-origin: left center;
            transform: scaleX(0);
            transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.94);
            visiblity: hidden;
            width: auto;
        }


    }

    &:hover {
        span:before{
            transform: scaleX(1);
            visiblity: visible;
            opacity: 1 !important;

        }
    }
    }

  

    @media(max-width: 768px){
        display: none;
    }

    
`;

const Login = styled.a`
    background-color: rgba(0,0,0,0.6);
    margin-left: auto;
    margin-right: 4vw !important;
    padding: 8px 16px;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    border: 1px solid #f9f9f9;
    border-radius: 4px;
    transition: all 0.2ms ease 0s;

    &:hover {
        background-color: #f9f9f9;
        color: #000;
        border-color: transparent;
    }
`;

const UserImage = styled.img`
    height : 100%;
    border-radius: 50%;

`;

const DropDown = styled.div`
    position: absolute;
    top: 48px;
    right: 30px;
    background: rgb(19,19,19);
    border: 1px solid rgba(151,151,151,0.34);
    border-radius: 4px;
    box-shadow: rgb(0,0,0 / 50%) 0px 0px 18px 0px;
    padding: 10px;
    font-size: 14px;
    letter-spacing: 3px;
    width: 100px;
    opacity: 0;

    

`;

const SignOut = styled.div`
    min-width: 50px;
    margin-left: auto;
    position: relative;
    height: 48px;
    width: 48px;
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;

    ${UserImage} {
        width: 100%;
    }

    &:hover {
        ${DropDown} {
            opacity: 1;
            transition-suration: 1s;
        }
    }


`;


export default Header;
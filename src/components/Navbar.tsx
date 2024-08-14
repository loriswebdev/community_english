'use client'
import React, {useEffect, useRef, useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import CloseIcon from '@mui/icons-material/Close';  


import Logo from './Logo';

import { RichTreeView, SimpleTreeView, TreeItem } from '@mui/x-tree-view';

import { ClickAwayListener, Icon, Modal, ThemeProvider} from '@mui/material';
import { theme } from '@/app/providers/globalThemeProvider'
import { useTreeViewApiRef } from '@mui/x-tree-view/hooks';
import Link from 'next/link';
import { Auth } from './Auth';
import { useAppDispatch, useAppSelector } from '@/app/lib/hooks';
import { signOut } from 'firebase/auth';
import { auth, googleProvider } from '@/app/firebase/firebase';
import { userData } from '@/app/_redux/slices/GetUserSlice';


function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [expanded, setExpanded] = useState<Boolean>(false);
  const [scrollPosition, setScrollPosition] = useState<Number>(0);
  const [showAuth, setShowAuth] = useState<Boolean>(false);
  const [paddingRight, setPaddingRight] = useState<Boolean>(false);
  const treeItemContainerRef = useRef(null)
  const pages = [{label:'Learn English',sx:{textTransform: "capitalize", color: 'black','& .MuiTreeItem-root:hover':{background:'rgba(7, 134, 182, 0.04)'}, '& .MuiTreeItem-root': {background: 'transparent'},'& .MuiTreeItem-content.Mui-selected,.MuiTreeItem-content.Mui-focused, .Mui-selected':{background: 'white'   }}, children: [{label:'grammar'}, {label:'vocabulary'}, {label: 'translation'}, {label:'pronuciation'}, {label:'find a tutor!'}]}, {label:'Classes'}, {label: 'About Us'}, {label: 'Contact Us', sx:{ color: {md: +scrollPosition >= 30 ? 'black': 'white'}}}];

const {user}:any = useAppSelector(state=> state.getUserData)
  
const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
    setPaddingRight(true)
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
    setPaddingRight(true)  
  };
  const buttonColor = '#49454F'
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    setPaddingRight(false)
  };
  const signInClick = ()=>{
    setShowAuth(true)
  }
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
    setPaddingRight(false);
  };
const signedIn = false
const apiRef = useTreeViewApiRef();
const handleCollapseClick = (event: MouseEvent | TouchEvent, id: string) => {
  apiRef.current!.setItemExpansion(event as unknown as React.SyntheticEvent<Element, Event>, id, false);
};

const handleItemExpansionToggle = (
  event: React.SyntheticEvent,
  itemId: string,
  isExpanded: boolean,
) => {
  setExpanded(isExpanded);
};
const handleScroll = () => {
  const position = window.scrollY;
  setScrollPosition(position);
};
useEffect(()=>{
  const position = window.scrollY;
  setScrollPosition(position);
},[])

useEffect(() => {
  window.addEventListener('scroll', handleScroll, {passive: true})

  return () => {
    window.removeEventListener('scroll', handleScroll);
};
}, [])
const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  boxShadow: 24,
  p: 4,
};
const [open, setOpen] = React.useState(false);
const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);
const dispatch = useAppDispatch()
const logout = async () => {
  dispatch(userData(null));
  handleClose()
  try {
    
    await signOut(auth).then(()=>{
      console.log('user signed out')
    });
  } catch (err) {
    console.error(err);
  }
};
const settings = [<Link href='/profile'>Profile</Link>, 'Account', 'Dashboard', <a onClick={logout}>Logout</a>]; 
 return  (

  <ThemeProvider theme={theme}>
    <AppBar sx={ {backgroundColor: 'transparent', boxShadow: 'none', position: 'fixed', zIndex: 99, mt:{xs:'20px', sm: '10px'}}}>
      <Container sx={{backgroundColor: 'transparent'}} maxWidth="xl">
        <Toolbar sx={{position:'relative', ml:{md:'5%'}, width: {md:'95%', xs:'100%'}, display:'flex', alighItems:'center', justifyContent:{xs:'center', md:'space-between'}, flexDirection:{xs:'row-reverse', md: 'row'}, boxShadow: 'none'}} disableGutters>
         <Box sx={{display:{xs:'none', md:'block'}}}><Link  href='/'> <Logo sx={{transform: +scrollPosition >=30 ? {md:'scale(.75)', xs: 'scale(.5)'}: 'scale(1)', transition:'transform .5s ease', display: {xs: 'none', md:'flex'}, justifyContent:'center'}}/></Link></Box>

          <Box sx={{alignItems:'center', width:'fit-content', height:"100%", display: { xs: 'flex', md: 'none' }, position: 'absolute', right:'3%', top: 0}}>
              <Box>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{color: +scrollPosition >= 75 ?'black': 'white'}}
            >
              <MenuIcon />
            </IconButton>
         
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => {
                 if(page.hasOwnProperty('children')){
              return  <MenuItem key={page.label}>
                <SimpleTreeView sx={{width: '140px', }}><TreeItem itemId={page.label} label={page.label} sx={page.hasOwnProperty('sx') ? {...page.sx,  '& .MuiTreeItem-content':{padding:0},  '& .MuiTreeItem-root   .MuiTreeItem-content':{padding:'10px'}} : undefined}>
          {page.children  && page?.children.map((item)=>(<TreeItem onClick={handleCloseNavMenu} key={item.label} itemId={item.label} label={item.label} className={item.hasOwnProperty('sx') ? {...item?.sx, textAlign:'start','& .MuiTreeItem-content':{padding: '10px'}}: {textAlign:'start','& .MuiTreeItem-content':{padding: '10px'}}}/>
       ))} </TreeItem></SimpleTreeView>
             </MenuItem>}else{
               return <MenuItem key={page.label} onClick={handleCloseNavMenu}>
              <Typography textTransform='capitalize' textAlign="left" sx={page.hasOwnProperty('sx') ? page.sx : undefined}>{page.label}</Typography>
            </MenuItem>
              }
              
})}
            </Menu>
            </Box>
          </Box>
          
          <Link href='/'><Logo sx={{transform: +scrollPosition >=30 ? {md:'scale(.75)', xs: 'scale(.5)'}: 'scale(1)', transition:'transform .5s ease', display: {xs: 'flex', md:'none'}, zIndex: 100, width: '30vw', justifyContent:'center'}}/></Link>
          <Box sx={{transition: 'opacity .5s ease',width: '85%', borderRadius: '10px 0 0 10px', height:"70px", position: 'fixed', zIndex: -1, background: 'white', opacity: +scrollPosition >= 30? 1: 0, padding: 0, margin: 0, right:0, display:{md: 'block', xs: 'none' }}}></Box>
          <Box sx={{ width: "60%", display: { xs: 'none', md: 'flex' }, justifyContent: "space-between", margin:'0 20 px' }}>
            {pages.map((page, index) => {
            if(page.hasOwnProperty('children')){

              return (
             
              
               <ClickAwayListener key={index} onClickAway={(e)=>{handleCollapseClick(e, page.label)}}>
              <Button
                disableRipple
                key={page.label}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, display: 'flex', width: '125px', backgroundColor:'transparent', '&:hover':{backgroundColor: 'transparent'}}}
              > 
              <div ref={treeItemContainerRef} style={{position: 'absolute', top: '0'}}> 
              <RichTreeView ref={treeItemContainerRef} sx={{'& .MuiTreeItem-label':{textTransform: 'capitalize', textAlign:'start'}}}items={[{id: page.label,
                label: page.label,
                children: page.children?.map((item)=>({id: item.label, label: item.label}))
              }]} apiRef={apiRef} sx={page.hasOwnProperty('sx') && expanded ? {...page.sx, background: '#FFFFFF',
                boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.3), 0px 2px 6px 2px rgba(0, 0, 0, 0.15)',
                borderRadius: '4px' }: page.hasOwnProperty('sx')? {...page.sx } : undefined}  onItemExpansionToggle={handleItemExpansionToggle}>
        
      
       
         
       
      </RichTreeView>
      </div>
      </Button>
      </ClickAwayListener>
      
      )
          
            }
            return  <Button
                key={page.label}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, display: 'block' }}
              >
                
               <Typography sx={page.hasOwnProperty('sx')? page.sx : undefined} textTransform='capitalize' color='black'> {page.label}</Typography>
              </Button>
})}
          </Box>

          <Box sx={{width:showAuth ? 'fit-content':'90px', display:'flex', justifyContent: "center", flexGrow: 0, marginRight: {xs: 0,md:'5px'}, left:{xs:'3%', md:'inherit'}, position:{xs:'absolute',md:'relative'}}}>
           
              {user ?     <>
               
              <Tooltip title="Open settings">
               <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>

                <Avatar alt="user icon" src={user?.photoURL} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting, index) => (
                <MenuItem key={index} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
            </>
                :(<Button onClick={handleOpen} variant={'action-button' as 'text'} sx={{ color:'white',textTransform:"capitalize"}}>Sign In</Button>)
              }
             
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
 {!user &&
    <Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
> 
  <Box className='bg-dark-blue-gradient' sx={style}>

  <CloseIcon onClick={handleClose} sx={{position: 'absolute', top:'20px', right:'20px', color:'white', '&:hover': {cursor:"pointer"}}}/>
  <Auth/>
  </Box>
</Modal>  }
    </ThemeProvider>

  );
}


export default Navbar;



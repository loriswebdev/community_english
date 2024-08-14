"use client"
import bg_gray from '../../../../public/images/gray_home_shape.svg'
import bg_gray_small from '../../../../public/images/gray_home_shape_mobile.svg'
import bg_gray_med from '../../../../public/images/gray_home_shape_tablet.svg'
import Image from "next/image";
import { Button, CardActions, CardContent, Container, Stack, ThemeProvider, Typography, styled, useTheme } from "@mui/material";
import { theme } from '@/app/providers/globalThemeProvider';

import useMediaQuery from '@mui/material/useMediaQuery';




export default function Home() {
  
  const sm = useMediaQuery(theme.breakpoints.down('md'));
  const md = useMediaQuery((theme.breakpoints.down('lg')));

  const hideArtifact = useMediaQuery('(max-width:639px) and (min-width: 540px)');
  const hideLady = useMediaQuery('(min-width: 1172px)')
  const cardGap = useMediaQuery('(min-width: 1262px)')
  return (
    <>
<ThemeProvider theme={theme}>

    <section className="flex flex-col overflow-hidden relative">
{/* <div  
style={{backgroundImage: sm?`url('${bg_gray_small.src}')`:md? `url('${bg_gray_med.src}')`:`url('${bg_gray.src}')`}}
className="h-[800px] w-full md:h-[70vw] max-h-[700px] sm:w-8/12 cover absolute overflow-hidden bottom-0 md:-bottom-32 md:rotate-[-10deg] .gray-shadow left-0 md:-left-8"
>
{hideArtifact && <div className='absolute w-[70px] bg-white h-[600px] right-0'></div>} */}
{/* </div>  */}
{hideLady && <div className={`absolute w-[648px] h-[1063px] ${md ?'-right-60' :'-right-56'} top-40 shadow-ellipse md:block hidden`}></div>}
{hideLady && <Image
src='/images/woman-book-bgremoved-preview.png'
alt='woman reading a book'
width={600}
height={1200}
className={`w-[400px] absolute z-20 top-52 ${md ?'-right-20' :'-right-12'} bg-cover lg:block hidden`}
/>}
<Stack className='fredoka'sx={{position: 'relative', dispaly: 'block', paddingTop:{xs:'40%',sm:'30%',md:'250px'}, marginBottom:{md:'50px'}, marginLeft: {md:'5%'}, marginRight:{md:'20px'},zIndex: 21, alignSelf:{xs:'center', md:'start'}, width:{md: 'fit-content', xs: '90%'}}}  >
<Stack  sx={{width:{md:'fit-content'}, alignSelf:{md:'unset', xs:'center'},mb: {md:'50px'}, ml: {md:'40px'}}}>
  <Typography variant='h1' color='primary' sx={{width:'fit-content',textAlign:'start', lineHeight:'.2'}}>
  <span className="text-[10vw] sm:text-[3.5rem] md:text-[4rem] fredoka font-semibold ">First Class <span className="text-orange-400 font-bold">Free!</span></span>
  </Typography>
  <Typography variant='h2' color='primary' sx={{fontSize: {md:'1.5rem', sm: '1.2rem', xs: '1rem'}, textAlign:{md:'start'}, alignSelf:{xs:'end', md: 'unset'}, width:{md:'100%', xs:'fit-content'},marginLeft:{md:'350px'}, mt: '20px', mb: '30px'}}>
  <span className={`fredoka font-semibold`}>For private classes</span>
  </Typography>
</Stack>
<Stack className='fredoka' direction={{md:'row', }} sx={{flexWrap: "wrap", mb: '30px'}}gap={cardGap ? 8 : 3}>
<Container className="bg-card-gradient" sx={{ color:'white', width: {xs: '70%',sm:'400px', md:'425px'}, height: 'fit-content'}}>
<CardContent color="primary" sx={{paddingRight: 0, paddingLeft: 0, marginTop: '10px'}} >
    <Typography color='secondary' sx={{lineHeight: .9}}>
      <span className='fredoka text-[1.5rem] md:text-[2rem] font-semibold' >
      $190 MXN <span className='text-[1.2rem] md:text-[1.5rem]'> Group Classes</span>  
      </span>
      </Typography>
      <Stack sx={{marginTop: '10px'}}>
     { ['Preparación para el examen (TOEFL, TOEIC, y mas)', 'Libros y materiales proporcionadosto', 'Plan de estudios en profundidad'].map((item, index)=>(
      <Stack direction='row' key={index} ><Image 
      src='/icons/checkmark.svg'
      alt='checkmark'
      width={15}
      height={15}/><Typography sx={{ml:'5px', padding: "10px 0"}}>{item}</Typography></Stack>
     ))}
     </Stack>

    </CardContent>
    <CardActions sx={{paddingTop: 0, paddingBottom: '30px'}}>
      <Button variant={'action-button-hot' as 'text'} size="small">Learn More</Button>
    </CardActions>
    </Container>
    <Container  className="bg-card-gradient" sx={{width:{md:'425px', sm:'400px', xs:'70%'},pb:'20px', height: 'fit-content'}}>
    <CardContent >
    <Typography color='secondary' sx={{lineHeight: .9}}>
      <span className='fredoka text-[1.5rem] md:text-[2rem] font-semibold' >Native Teachers!</span>  
      
      </Typography>
      <Typography variant="h3" color='secondary' sx={{fontSize: '1.25rem', marginTop: '20px'}} >
      TEFOL Certified Instructors 
      </Typography>
    </CardContent>
    <CardActions sx={{zIndex: 30}}>
      <Button variant={'action-button-hot' as 'text'}size="small">Learn More</Button>
    </CardActions>
    </Container>
    </Stack>
    </Stack>
    </section>
    </ThemeProvider>
    </>
  );  
}

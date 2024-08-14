import { BorderBottom, BorderColor, Opacity } from "@mui/icons-material";
import { ButtonPropsVariantOverrides, createTheme } from "@mui/material";

export const theme = createTheme({
    typography:{
        fontFamily: '"Open Sans", sans-serif',
    },
    palette: {
      primary: {main: '#0786B6'},
      secondary: {
        main: '#ffff'
      },
    },
    components:{
      MuiButton: {
        
        variants:[{
          props:{variant:<'text'>'action-button' },
          style:{
            background: '#49454F',
            "&:hover":{
              background: 'black'
            }
          },
          
        },
        {
          props:{variant:<'text'>'action-button-hot' },
          style:(({theme})=>({
            background: '#EE863C',
            color: theme.palette.secondary.main,
            textTransform: 'capitalize',
            fontWeight: 'bold',
            "&:hover":{
              background: theme.palette.warning.light,
              
            }
          })),
          
        },
      ],
      styleOverrides:{
        root:(({ownerState, theme})=>({
          color: theme.palette.secondary.main,
          '&Mui-Button-action-button-hot:hover':{
            backgroundColor: theme.palette.secondary.main
          }
        }))
          
        }
      },
      MuiInput:{
       styleOverrides:{
        root: {
          color:'white',
          
          ":hover:not(.Mui-disabled, .Mui-error):before":{
            
              borderBottom:"2px solid white"
        
                        },
          ":before":{
   
            borderBottom:"1px solid white"
          },
          ':after':{
            display: 'none'
          }
        }
       }
      }
    }
      }
  );
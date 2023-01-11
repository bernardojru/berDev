import { styled } from "../.";

export const PortfolioContainer = styled('div',{
    background: '$black',
    color: '$gray100',
    display: 'flex',
    flexDirection: 'column',
    fontFamily: '$default',
    // border: 'solid blue',
})

export const PortfolioContent = styled('div', {
    maxWidth: '100%',
    // height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    gap: '$12',
    padding: '4rem',
    // border: 'solid red',
    
    '@media(max-width:1119px)': {
        alignItems: 'center',
        flexDirection: 'column',
    },
})
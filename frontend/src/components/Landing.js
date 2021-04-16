import React from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import {useHistory} from 'react-router-dom';
import ParticlesBg from 'particles-bg';




const Section = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 100vh;
    color: #fff;
    // padding: 3rem calc((100vw - 1300px) / 2);
    @media screen and (max-width: 768px) {
        grid-grid-template-columns: 1fr;
    }
`;

const ColumnLeft = styled.div`
    display: flex;
    color: #fff;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 5rem 2rem;

    h1 {
        margin-bottom: 0.5rem;
        font-size: 2rem;
    }

    p {
        margin: 2rem 0;
        font-size: 4rem;
        line-height: 1.1;
    }
`;
const Button = styled(motion.button)`
    padding: 1rem 1rem;
    font-size: 1rem;
    border: 1px solid #fff;
    border-radius: 4px;
    outline: none;
    curser: pointer;
    background:transparent;
    color: #fff;
    border-color: #F3B0C3;
    font-weight: 500;
    margin-bottom: 0.5rem;
`;

const Button2 = styled(motion.button)`
    padding: 1rem 1rem;
    font-size: 1rem;
    border: 1px solid #fff;
    border-radius: 4px;
    outline: none;
    curser: pointer;
    background:transparent;
    color: #F3B0C3;
    border-color: #fff;
    font-weight: 500;
    margin-bottom: 0.5rem;
`;

const ColumnRight = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    position: relative;
`;

const Landing = () => {
    const history = useHistory();
    const handleClickCreate = () => {
        history.push("/create");
    }
    const handleClickJoin = () => {
        history.push("/join");
    }
    const fadeLeft = {
        hidden: {opacity: 0, x: -100},
        visible: {opacity: 1, x: 0}
    }
    return (
                <Section>
                <ParticlesBg color="#131313" num={50} type="circle" bg={true} />
                <Container>
                    <ColumnLeft>
                        <motion.h1
                            initial={{ opacity: 0}}
                            animate={{ opacity: 1}}
                            transition={{ duration: 1}}
                        >Auto<span style={{color:'#F3B0C3'}}>Tune</span></motion.h1>
                        <motion.p
                            variants={fadeLeft}
                            initial='hidden'
                            animate='visible'
                            transition={{duration: 1}}
                        >Discover <span style={{color:'#F3B0C3'}}>new music</span> and curate <span style={{color:'#F3B0C3'}}>innovative playlists</span>.</motion.p>
                        <Button onClick = {handleClickCreate}
                            type = "button"
                            whileHover={{ scale: 1.05}}
                            whileTap={{scale: 0.95, backgroundColor: '#F3B0C3', border: 'none', color: '#000'}} 
                            initial={{opacity: 0}}
                            animate={{opacity: 1, transition: {duration: 2}}} 
                        >Create a room now!</Button>
                        <Button2 onClick = {handleClickJoin}
                            type = "button"
                            whileHover={{ scale: 1.05}}
                            whileTap={{scale: 0.95, backgroundColor: '#F3B0C3', border: 'none', color: '#fff'}} 
                            initial={{opacity: 0}}
                            animate={{opacity: 1, transition: {duration: 2}}} 
                        >Join a room</Button2>
                        </ColumnLeft>
                        <ColumnRight>
                        </ColumnRight>
                </Container>
                </Section>   
    )
};

export default Landing;

import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled(motion.header)`
    width: 100%;
    height: 200px;
    background: rgba(0, 0, 0, 0.1);

    position: fixed;
    top: 0;
    z-index: 99999;
`;

export const Text = styled.text`
    display: flex;
    justify-content: center;
    align-content: center;
    margin-top: 80px;
    
    font-size: 24px;

`;
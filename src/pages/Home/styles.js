import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const Card = styled.div`
    background: #000;
    width: 550px;
    border-radius: 10px;
    border: 1px solid #f00;
    padding: 20px;
    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 100);

    h2 {
        font-size: 22px;
        color: #f00;
        margin-bottom: 10px;
    }
`;

export const Templates = styled.div`
    width: 100%;
    height: 175px;
    background-color: #131313;
    border-radius: 8px;
    overflow: auto;
    display: flex;
    align-items: center;
    padding: 0 15px;
    margin-bottom: 30px;

    button {
        background: transparent;
        margin-right: 10px;
        border: 2px solid transparent;
        border-radius: 2px;

        &.selected {
            border-color: #f00;  
        }

        img {
            width: 155px;
            height: 150px;
        }        
    }

    
`;

export const Form = styled.form`
    input {
        width: 100%;
        height: 40px;
        border-radius: 8px;
        border: 1px solid #f00;
        font-size: 14px; 
        padding: 0 10px;
        margin-bottom: 10px;
        background: transparent;
        color: #f00;
    }
   
`;

export const Button = styled.button`
    width: 100%;
    height: 40px;
    border-radius: 8px;
    border: 1px solid #f00;
    background: #000;
    color: #f00;
    font-size: 16px;
    font-weight: bold;
    transition: background 0.5s ease-in;
    margin-top: 5px;

    &:hover {
        background: #f00;
        color: #000;
    }
`;
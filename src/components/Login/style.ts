import styled from 'styled-components';
import { FormControlLabel, Checkbox } from '@mui/material';

export const Container = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
  font-family: 'Poppins';
  display: flex;
  justify-content: space-between;
  height: 100vh;
  background-color: #121214;
  color: white;
`;

export const Center = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Logo = styled.div`
  display: flex;
  gap: 10px;
  position: absolute;
  top: 40px;
  left: 40px;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 8px;

  p {
    font-weight: 600;
    color: #D4CCB6;
    font-size: 24px;
  }
`;

export const Input = styled.input`
  background: none;
  outline: none;
  border: none;
  height: 40px;
  width: 100%;
  color: #AFB6C2;
`;

export const InputInfo = styled.div`
  margin-top: 30px;
  margin-bottom: 10px;

  p {
    color: #AFB6C2;
    margin-bottom: 5px;
  }
`;

export const Infos = styled.div`
  width: 75%;
  height: 65%;
  background-color: #24221F;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
`;

export const MainInfos = styled.div`
  margin-top: 80px;

  #emailActive, #passwordActive {
    border: 2px solid #FFC632;
  }
`;

export const Image = styled.img``;

export const InsideInput = styled.div`
  border: 2px solid #868686;
  display: flex;
  gap: 10px;
  border-radius: 5px;
  cursor: pointer;
  
  img {
    transform: scale(0.6);
    width: 50px;
  }
`;

export const Button = styled.button`
  margin-top: 20px;
  width: 100%;
  height: 50px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #FFC632;
  border-radius: 5px;
  font-weight: 600;
  font-size: 18px;
  letter-spacing: 0.05em;
  cursor: pointer;

  :hover {
    background-color: #d1a124;
    transition: .5s;
  }
`;

export const PasswordInfos = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    color: #FFC632;
    font-weight: 600;
    font-size: 14px;
    cursor: pointer;
  }
`;

import logo from '../../assets/Screenshot_2025-02-21_001918-removebg-preview.png';
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faUser } from "@fortawesome/free-regular-svg-icons"
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styled from "styled-components"

const Main = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Modal = styled.div`
  width: 50%;
  height: 55%;
  background-color: #0a0907;
  padding: 65px 5% 30px 5%;
  border-radius: 30px;
  border: 1px solid #535353;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1000px) {
    width: 100%;
    height: 60%;
  }
`;

const Img = styled.img`
  width: 100%;
  max-width: 200px;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

const InputBackground = styled.div`
  width: 70%;
  height: 50px;
  background-color: #151210;
  border-radius: 15px;
  border: 1px solid #2e2e2e;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  padding: 0px 15px 0px 0px;
  transition: 0.3s;
  
  &:hover {
    transform: scale(1.05) ;
  }
  
  @media (max-width: 1000px) {
    width: 90%;
    transition: 0s;
    gap: 7px;
    padding: 0px 15px;

    &:hover {
      transform: none;
    }
  }
`;

const Input = styled.input`
  flex: 1;
  height: 70%;
  background-color: transparent;
  border-left: 2px solid #2e2e2e;
  border-top: none;
  border-bottom: none;
  border-right: none;
  outline: none;
  padding: 0px 20px;
  color: #535353;
  font-size: 20px;

  &::placeholder {
    color: #2e2e2e;
  }

  @media (max-width: 1000px) {
    text-align: center;
  }
`;

const InputIcon = styled(FontAwesomeIcon)`
  font-size: 27px;
  margin-left: 15px;
  color: #2e2e2e;

  @media (max-width: 1000px) {
    font-size: 25px;
    margin-left: 0px;
  }
`;

const InputButton = styled.button`
  padding: 15px 2vw;
  background-color: #e2830e;
  border-radius: 15px;
  border: 1px solid #535353;
  color: #f1f1f1;
  font-size: 20px;
  display: flex;
  align-items: center;
  gap: 20px;
  outline: none;
  transition: 0.2s;

  &:hover {
    transform: scale(1.05);
    border: 1px solid #f1f1f19d;
    cursor: pointer;
  }

  @media (max-width: 1000px) {
    width: 50%;
    justify-content: center;
    transition: 0s;

    &:hover {
      transform: none;
      border: none;
    }

    &:active {
      color: #e2830e;
      background-color: #f1f1f1;
      border: 1px solid #e2830e;
    }
  }
`;

const ArrowIcon = styled(FontAwesomeIcon)`
  font-size: 25px;
`;

const SocialMedia = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

const Paragraph = styled.p`
  color: #535353;
  font-size: 23px;
  cursor: default;
`;

const Icons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;

const IconButton = styled.button`
  background-color: transparent;
  border: none;
  transition: 0.2s;

  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }

  @media (max-width: 1000px) {
    transition: none;

    &:hover {
      transform: none;
    }
  }
`;

const Icon = styled(FontAwesomeIcon)`
  font-size: 25px;
  color: #535353;
  transition: 0.3s;

  &:hover {
    color: #f1f1f1;
  }

  @media (max-width: 1000px) {
    transition: 0s;

    &:hover {
      color: #535353;
    }

    &:active {
      color: #f1f1f1;
    }
  }
`;

function EmailContainer({ onConfirm }) {
  return (
    <Main>
      <Modal>
        <Img src={logo} alt="In.travel" />
        <Form onSubmit={onConfirm}>
          <InputBackground>
            <InputIcon icon={faUser} />
            <Input type="text" placeholder='Digite seu e-mail' />
          </InputBackground>
          <InputButton type="submit">
            CONFIRMAR
            <ArrowIcon icon={faArrowRight} />
          </InputButton>
        </Form>
        <SocialMedia>
          <Paragraph>TRAVEL CHECKLIST</Paragraph>
          <Icons>
            <IconButton type="button">
              <Icon icon={faGithub} />
            </IconButton>
            <IconButton type="button">
              <Icon icon={faInstagram} />
            </IconButton>
            <IconButton type="button">
              <Icon icon={faLinkedin} />
            </IconButton>
          </Icons>
        </SocialMedia>
      </Modal>
    </Main>
  )
}

export default EmailContainer
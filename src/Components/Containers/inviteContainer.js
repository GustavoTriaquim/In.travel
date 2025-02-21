import styled from "styled-components";
import logo from '../../assets/Screenshot_2025-02-21_001918-removebg-preview.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faPlusSquare } from "@fortawesome/free-regular-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";

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
`;

const Img = styled.img`
  width: 100%;
  max-width: 200px;
`;

const InfoDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const Text = styled.p`
  color: #808080;
  text-align: center;
  font-size: 18px;
  cursor: default;
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
`;

const InputIcon = styled(FontAwesomeIcon)`
  font-size: 27px;
  margin-left: 15px;
  color: #2e2e2e;
`;

const Buttons = styled.div`
  display: flex;
  gap: 40px ;
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
`;

const InvitedDiv = styled.div`
  width: 100%;
`;

const Invited = styled.div`
  display: flex ;
  justify-content: center;
  border-radius: 20px;
  border: 1px solid #535353;
  padding: 5px 0;
  align-items: center;
  gap: 15px;
  background-color: #121212;
  width: 250px;
`;

const InvitedText = styled.p`
  color: #808080;
`;

const InvitedIcon = styled(FontAwesomeIcon)`
  color: #808080;
  transition: 0.2s;

  &:hover {
    color: #f1f1f1;
    transform: scale(1.1);
    cursor: pointer;
  }
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
`;

const Icon = styled(FontAwesomeIcon)`
  font-size: 25px;
  color: #535353;
  transition: 0.3s;

  &:hover {
    color: #f1f1f1;
  }
`;

function InviteContainer() {
  return (
    <Main>
      <Modal>
        <Img src={logo} alt="In.travel" />
        <InfoDiv>
          <Text>Convide seus amigos/familiares!</Text>
          <Form>
            <InputBackground>
              <InputIcon icon={faPlusSquare} />
              <Input type="text" placeholder='Digite o e-mail' />
            </InputBackground>
            <InvitedDiv>
              <Invited>
                <InvitedText>email.exemplo@gmail.com</InvitedText>
                <InvitedIcon icon={faX} />
              </Invited>
            </InvitedDiv>
            <Buttons>
              <InputButton type="button" style={{ backgroundColor: '#2e2e2e' }}>ADICIONAR</InputButton>
              <InputButton type="submit">CONVIDAR</InputButton>
            </Buttons>
          </Form>
        </InfoDiv>
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
  );
}

export default InviteContainer;
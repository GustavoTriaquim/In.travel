import { useState } from "react";
import EmailContainer from "../Components/Containers/emailContainer"
import styled from "styled-components";
import InviteContainer from "../Components/Containers/inviteContainer";

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

function MainPage() {
  const [isInviteOpen, setIsInviteOpen] = useState()

  return (
    <Body>
      {isInviteOpen ? <InviteContainer /> : <EmailContainer onConfirm={() => setIsInviteOpen(true)} />}
    </Body>
  )
}

export default MainPage;
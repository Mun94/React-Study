import { useState } from 'react';
import logo from "../assets/logo.svg";
import Home from "../assets/home-solid.svg";
import Team from "../assets/social.svg";
import Calender from "../assets/sceduled.svg";
import Projects from "../assets/starred.svg";
import Documents from "../assets/draft.svg";
import PowerOff from "../assets/power-off-solid.svg";
import styled from 'styled-components';

const Button = styled.button`
  background-color: var(--black);
  border: none;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  margin: 0.5rem 0 0 0.5rem;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  &::before,
  &::after {
    content: "";
    background-color: var(--white);
    height: 2px;
    width: 1rem;
    position: absolute;
    transition: all 0.3s ease;
  }

  &::before {
    top: ${(props) => (props.clicked ? "1.5" : "1rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }

  &::after {
    top: ${(props) => (props.clicked ? "1.2" : "1.5rem")};
    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }
`;

const SidebarContainer = styled.div`
`

const Sidebar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      <Button clicked={click} onClick={handleClick}>Click</Button>
      <SidebarContainer>
        <div>
          <div>
            <img src={logo} alt="logo"/>
          </div>
          <ul>
            <li>
              <img src="Home" alt="Home"/>
              <span>Home</span>
            </li>
            <li>
              <img src="Team" alt="Team"/>
              <span>Team</span>
            </li>
            <li>
              <img src="Calender" alt="Calender"/>
              <span>Calender</span>
            </li>
            <li>
              <img src="Documents" alt="Documents"/>
              <span>Documents</span>
            </li>
            <li>
              <img src="Projects" alt="Projects"/>
              <span>Projects</span>
            </li>
          </ul>
        </div>
      </SidebarContainer>
    </>
  )
}

export default Sidebar
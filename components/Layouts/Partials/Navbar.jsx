import { useState, Fragment } from 'react';
import styles from '../../../public/styles/all.module.css';
import { FaBars } from 'react-icons/fa';
import { NavbarContainer, NavbarWrapper, NavbarList, NavbarListItem, NavbarListItemLink, IconFaBars } from './Navbar.elements';
export default function Navbar() {
    const [click, setClick] = useState(false);

    const ChangeClick = () => {
        setClick(!click);
    }

    return (
        <NavbarContainer>
            <NavbarWrapper>
                <NavbarListItemLink href="/">
                    <img className={styles.pageLogoMin} src="/logo.ico" alt="TitaNiunP Logo" />
                </NavbarListItemLink>

                <NavbarList click={click}>
                    <NavbarListItem>
                        <NavbarListItemLink href="/">Home</NavbarListItemLink>
                    </NavbarListItem>
                    <NavbarListItem>
                        <NavbarListItemLink href="/products">Products</NavbarListItemLink>
                    </NavbarListItem>
                    <NavbarListItem>
                        <NavbarListItemLink href="/#discoverus">About us</NavbarListItemLink>
                    </NavbarListItem>
                </NavbarList>

                <IconFaBars onClick={() => ChangeClick()}>
                    <FaBars size={'2em'}/>
                </IconFaBars>
            </NavbarWrapper>
        </NavbarContainer>
    )
}

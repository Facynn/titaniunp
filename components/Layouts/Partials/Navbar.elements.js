import styled from 'styled-components';

export const NavbarContainer = styled.nav`
    padding: 15px 0;
    z-index: 100;
`

export const NavbarWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: var(--page-width);
    margin: 0 auto;
    padding: 10px;
    background: #fff;
    border-radius: 10px;
    border: 1px solid rgba(0, 0, 0, .1);
`

export const NavbarList = styled.ul`
    display: flex;
    gap: 20px;
    list-style: none;
    z-index: 80;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        position: absolute;
        top: 110px;
        left: 0;
        right: 0;
        width: var(--page-width);
        padding: 20px;
        margin-left: auto; 
        margin-right: auto; 
        background: #fff;
        border-radius: 10px;
        border: 1px solid rgba(0, 0, 0, .1);
        gap: 5px;
        transform: scaleY(${({ click }) => (click ? 1 : 0)});
        transition: var(--fast-transition);
    }
`

export const NavbarListItem = styled.li`
    padding: 10px;
    border: 1px solid var(--secondary-color);
    border-radius: 5px;
    transition: var(--fast-transition);

    &:hover {
        background: #000000;
        cursor: pointer;
    }

    @media screen and (max-width: 768px) {
        width: 100%;
        text-align: center;
        padding: 10px;
        border-radius: 5px;
        border: 1px solid var(--secondary-color);
    }
`

export const NavbarListItemLink = styled.a`
    color: var(--secondary-color);
    font-size: 1.3em;
    text-decoration: none;
    border: none;

    ${NavbarListItem}:hover & {
        color: #fff;
        border: none;
    }

    @media screen and (max-width: 768px) {
        border: none;

        &:hover {
            border: none;
            background: transparent;
            color: var(--secondary-color);
        }
    }
`

export const IconFaBars = styled.div`
    display: none;
    padding: 5px;
    border: 1px solid var(--secondary-color);
    border-radius: 5px;
    cursor: pointer;
    transition: var(--fast-transition);
    
    &:hover {
        background: var(--secondary-color);
        color: #fff;
    }

    @media screen and (max-width: 768px) {
        display: flex;
        justify-content: center;
        aling-items: center;
    }

`
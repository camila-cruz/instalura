import React from 'react';
import Logo from '../../../theme/Logo';

import { Button } from '../Button';
import { MenuWrapper, LeftSide, CentralSide, RightSide } from './styles/MenuWrapper';

const links = [
    {
        texto: 'Home',
        url: '/'
    },
    {
        texto: 'Perguntas frequentes',
        url: '/faq'
    },
    {
        texto: 'Sobre',
        url: '/sobre'
    }
]

export default function Menu() {
    return (
        <MenuWrapper>
            <MenuWrapper.LeftSide>
                <Logo />
            </MenuWrapper.LeftSide>
            <MenuWrapper.CentralSide>
                {links.map((link) => {
                    return (
                        <li key={link.url}>
                            <a href={link.url}>
                                {link.texto}
                            </a>
                        </li>
                    )
                })}
            </MenuWrapper.CentralSide>
            <MenuWrapper.RightSide>
                <Button ghost>
                    Entrar
                </Button>
                <Button>
                    Cadastrar
                </Button>
            </MenuWrapper.RightSide>
        </MenuWrapper>
    )
}
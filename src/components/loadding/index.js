import React, { useState } from 'react';
import { IcoLoading, Container } from './styles';
import LogoIco from '../../images/icons/loading-ico.gif';


export default () => {
    return (
        <>
            <Container>
                <IcoLoading source={LogoIco} />
            </Container>
        </>
    )
}
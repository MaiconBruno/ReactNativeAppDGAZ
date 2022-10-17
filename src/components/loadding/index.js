import React, { useState } from 'react';
import { IcoLoading, Container } from './styles';
import LogoIco from '../../images/icons/icons8-spinner.gif';


export default () => {
    return (
        <>
            <Container>
                <IcoLoading source={LogoIco} />
            </Container>
        </>
    )
}
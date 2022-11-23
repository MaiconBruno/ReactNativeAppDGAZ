const handleValidadeStatus = async (token) => {
    const statusResponse = await fetch('https://dgazhomologacao.xyz/appsdgaz/wp-json/jwt-auth/v1/token/validate',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: `Bearer ${token}`,
            }
        }
    );
    // const data = await statusResponse.json();
    const token_valid = statusResponse.status;
}
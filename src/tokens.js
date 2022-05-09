import React, { useEffect, useState } from "react";
import {useMoralisWeb3Api, useMoralis} from "react-moralis"
import {Box, Text} from '@chakra-ui/react'

function Tokens() {
    const Web3Api = useMoralisWeb3Api();
    
    const {user} = useMoralis();

    const [tokens, getTokens] = useState('Loading...')

    const fetchTokenBalances = async () => {
        const options = {
          chain: "ropsten",
          address: user.get('ethAddress'),
          to_block: "10253391",
        };
        const balances = await Web3Api.account.getTokenBalances(options);
        console.log(balances);
        getTokens(balances)
    };
    
      useEffect(() => {
        fetchTokenBalances(); 
    }, [])

    if (tokens['length'] === 0) {
        return <Text>No Tokens Owned!</Text> 
    } else {
        return tokens.map((token) => 
            <Box height={'16'}>
                <Text>The token address of your token is {token['token_address']}</Text>
                <Text>The name of the token you own is {token['name']}</Text>
                <Text>There are {token['decimal']} decimals for this token!</Text>
                <Text>The balance of this token is {token['balance']}</Text>
            </Box>
        )
    }
}

export default Tokens; 
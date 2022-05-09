import { Box, Button, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import {useMoralisWeb3Api, useMoralis} from 'react-moralis'; 

function Transactions() {
    const {user, logout} = useMoralis()
    const options = {
        chain: "ropsten",
        address: user.get('ethAddress') 
    }
    const Web3Api = useMoralisWeb3Api()
    const [transactions, setTransations] = useState('Loading...')
    const fetchTransactions = async () => {
        const ethTransactions = await Web3Api.account.getTransactions(options);
        console.log(ethTransactions); 
        setTransations(ethTransactions); 
        ethTransactions['result'].map(
            (transaction) => console.log(transaction['nonce'])
        )
    };
    useEffect(() => {
        fetchTransactions(); 
    }, [])
    if (transactions === 'Loading...'){
        return <Text>Loading...</Text>
    } else {
        return transactions['result'].map(
            (transaction) => <Box backgroundColor={'blue.200'} padding={9} bgGradient={[
                'linear(to-tr, teal.300, yellow.400)',
                'linear(to-t, blue.200, teal.500)',
                'linear(to-b, orange.100, purple.300)',
              ]}>
                <Text>This transaction happened on: {transaction['block_timestamp']}</Text>
                <Text>Block Number is: {transaction['block_number']}</Text>
                <Text>The gas price was in wei was: {transaction['gas_price']}</Text>
                <Text>The transaction was from this address: {transaction['from_address']}</Text>
                <Text>The transaction was to this address: {transaction['to_address']}</Text>
            </Box>
        )
        
    }
}

export default Transactions; 
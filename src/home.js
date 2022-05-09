import React, { useEffect, useState } from "react";
import {Box, Button, Text, VStack} from '@chakra-ui/react'
import {useMoralis, useMoralisWeb3Api} from 'react-moralis'
import Transactions from "./transactions";
import NFTMetadata from "./NFTMetadata";
import Tokens from "./tokens";

function Home () {
    const {user, logout} = useMoralis()
    const options = {
        chain: "ropsten",
        address: user.get('ethAddress')
    }
    const Web3Api = useMoralisWeb3Api()
    const [balance, setBalance] = useState('Loading...')
    const fetchNativeBalance = async () => {
        const ethBalance = await Web3Api.account.getNativeBalance(options);
        // console.log(ethBalance['balance']);
        setBalance(ethBalance['balance']); 
    };
    const fetchTransactions = async () => {
        const ethTransactions = await Web3Api.account.getTransactions(options);
        // console.log(ethTransactions);
      };
    useEffect(() => {
        fetchNativeBalance();
        fetchTransactions();  
    })
    
    return <div>
        <VStack>
            <Button onClick={logout} alignSelf={'flex-end'} m={'15'}>Logout</Button>
            <Text fontSize={{ base: '20px', md: '30px', lg: '38px' }}>Your Eth balance</Text>
            <Text paddingBottom={'15px'}>You currently have: {balance} Wei in your account!</Text>
            <Text fontSize={{ base: '20px', md: '30px', lg: '38px' }}>Your transactions</Text>
            <Transactions/>

            <Text fontSize={{ base: '20px', md: '30px', lg: '38px' }} paddingTop={24}>NFT Metadata: </Text>
            <NFTMetadata/>
            <Box height={'16'}></Box>
            <Text fontSize={{ base: '20px', md: '30px', lg: '38px' }}>Your Tokens: </Text>
            <Tokens/>
        </VStack>    
    </div>
}

export default Home; 
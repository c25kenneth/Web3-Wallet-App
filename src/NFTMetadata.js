import { Box, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import {useMoralisWeb3Api, useMoralis} from 'react-moralis'

function NFTMetadata () {
    const Web3Api = useMoralisWeb3Api();
    const [NFTs, setNFTs] = useState('Loading...')
    const fetchNFTs = async () => {
        const testnetNFTs = await Web3Api.Web3API.account.getNFTs({
            chain: 'ropsten'
        });
        setNFTs(testnetNFTs);
        console.log(testnetNFTs); 
    }
    useEffect(() => {
        fetchNFTs();
    }, [])
    
    if (NFTs === 'Loading...') {
        return <Text>
            Loading...
        </Text>
    } else {
        if (NFTs['result']['length'] === 0) {
            return <Text>No NFTS Owned!</Text>
        } else {
            return NFTs['result'].map(
                (NFT) => <Box>
                    <Text>The Token address of this NFT is: {NFT['token_address']}</Text>
                    <Text>The Token ID of this NFT is: {NFT['token_id']}</Text>
                    <Text>The name of this NFT is: {NFT['name']}</Text>
                    <Text>The ownder of this NFT is: {NFT['owner_of']}</Text>
                </Box>
            ) 
        }
    }
}

export default NFTMetadata; 
import {IconButton, Text, useColorMode, VStack} from '@chakra-ui/react'
import Login from './Login';
import {useMoralis} from 'react-moralis'
import Home from './home';
import {MoonIcon} from '@chakra-ui/icons'
function App() {
  const {isAuthenticated, user} = useMoralis();
  const {colorMode, toggleColorMode} = useColorMode()
  if (!isAuthenticated) {
    return (
      <div className="App">
        <VStack alignItems={'center'}>
          <IconButton icon={<MoonIcon/>} alignSelf={'flex-end'} m={6} onClick = {toggleColorMode}></IconButton>
          <Text fontSize={{ base: '24px', md: '40px', lg: '56px' }}>Hi and welcome to the Web Wallet Viewer!</Text>
          <Text fontSize={{ base: '12px', md: '20px', lg: '28px' }} paddingBottom={'32'}>A great place to see your eth balance, NFT Metadata, and transactions!</Text>
          <Login/>
        </VStack>
  
      </div>
    );
  } else {
    return (
      <Home/>
    )
  }

}

export default App;

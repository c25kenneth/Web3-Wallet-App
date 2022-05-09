import { Button } from "@chakra-ui/react";
import React from "react";
import {useMoralis} from 'react-moralis'

function Login () {
    const { authenticate, isAuthenticated, user } = useMoralis();

    const login = async () => {
      if (!isAuthenticated) {

        await authenticate()
          .then(function (user) {
            // console.log(user.get("ethAddress"));
          })
          .catch(function (error) {
            // console.log(error);
          });
      }
    }
    return <div>
        <Button onClick={login} color='white'
        fontWeight='bold'
        borderRadius='md'
        bgGradient='linear(to-r, teal.500, green.500)'
        _hover={{
            bgGradient: 'linear(to-r, red.500, yellow.500)',
        }}>
            Sign in with Metamask! 🦊
        </Button>
    </div>
}

export default Login
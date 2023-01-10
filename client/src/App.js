import abi from "./contract/chai.json"
import {useState,useEffect} from 'react';
import { ethers } from 'ethers';
import Buy from "./contract/components/Buy";
import Memos from "./contract/components/Memos";
import './App.css';

function App() {
const[state,setState]=useState({
  provider:null,
  signer:null,
  contract:null,
});
useEffect(()=>{
  const connectWallet=async()=>{
    const contractAddress="0x2c1330431501E0D091116Cb511F9aE98bFBdf523";
    const contractAbi=abi.abi;
    try{
      const{ethereum}=window;
      if(ethereum){
        const account = await ethereum.request({method:"eth_requestAccounts",});
      }
      const provider=new ethers.providers.Web3Provider(ethereum);
      const signer=provider.getSigner();
      const contract= new ethers.Contract(contractAddress,contractAbi,signer);
      setState({provider,signer,contract})
    }
    catch(error){
      console.log(error);
    }
  };
  connectWallet();
},[]);

console.log(state);

  return (<div className="App">
    <Buy state = {state}></Buy>
    <Memos state={state}></Memos>
  </div>);
}

export default App;

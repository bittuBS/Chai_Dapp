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
const [account,setAccount]=useState("None");
useEffect(()=>{
  const connectWallet=async()=>{
    const contractAddress="0x5fbdb2315678afecb367f032d93f642f64180aa3";
    const contractAbi=abi.abi;
    try{
      const{ethereum}=window;
      if(ethereum){
        const account = await ethereum.request({method:"eth_requestAccounts",});
        window.ethereum.on("chainChanged", () => {
          window.location.reload();
        });

        window.ethereum.on("accountsChanged", () => {
          window.location.reload();
        });
      
      const provider=new ethers.providers.Web3Provider(ethereum);
      const signer=provider.getSigner();
      const contract= new ethers.Contract(contractAddress,contractAbi,signer);
      setAccount(account);
      setState({provider,signer,contract});
    }
    else{
      alert("please install metamask");
    }
  }
  

  
    catch(error){
      console.log(error);
    }
  };
  connectWallet();
},[]);

console.log(state);

  return ( <div style={{ backgroundColor: "#EFEFEF", height: "100%" }}>
  
<img src="https://i0.wp.com/1.bp.blogspot.com/-maXeqZDDeUw/YHejDfkPeeI/AAAAAAAHyT0/QgYQHgqvCDk_aBElqCLV7ZxJ2pCzsjPkACLcBGAsYHQ/s1600/Chai-N-Chill-02.jpg?ssl=1" className="img">
  
</img>
<div className="inner-div">
<p
    class="text-muted lead "
    style={{ marginTop: "10px", marginLeft: "5px" }}
  >
    <small id="acc">Connected Account - {account}</small>
  </p>
  <div className="container">
    <Buy state={state} />
    <Memos state={state} />
  </div>
  </div>
  
</div>);
}

export default App;

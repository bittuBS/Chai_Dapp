import { ethers } from "ethers";
import "./Buy.css";

const Buy =({state})=>{

const buyChai=async(event)=>{
    event.preventDefault();
const {contract}= state;
const name = document.querySelector("#name").value;
const teaname = document.querySelector("#teaname").value;
const message = document.querySelector("#message").value;
const snacks = document.querySelector("#snacks").value;
console.log(name,teaname,message,snacks,contract);
const Value = {value:ethers.utils.parseEther("0.001")};
const transaction=await contract.buyChai(name,teaname,message,snacks,Value);
 transaction.wait();
console.log("transcation is done");
};


return (
<>
    <form id="form" onSubmit={buyChai}>
        <label >Name</label>
        <input type="text" id="name" placeholder="Enter your name"></input>
        <br></br>
        <label>Tea Name</label>
        <input type="text" id="teaname" placeholder="Enter your Tea name"></input>
        <br></br>
        <label>Message</label>
        <input type="text" id="message" placeholder="Enter your message"></input>
        <br></br>
        <label>Snacks</label>
        <input type="text" id="snacks" placeholder="Enter snacks or nothing"></input>
        <br></br>
        <button type="submit" id="pay">Pay</button>
    </form>

</>
);
}
export default Buy;
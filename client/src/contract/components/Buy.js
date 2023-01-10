import { ethers } from "ethers";

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
await transaction.wait();
console.log("transcation is done");
};


return (
<>
    <form onSubmit={buyChai}>
        <label>Name</label>
        <input type="text" id="name" placeholder="Enter your name"></input>
        <label>Tea Name</label>
        <input type="text" id="teaname" placeholder="Enter your Tea name"></input>
        <label>Message</label>
        <input type="text" id="message" placeholder="Enter your message"></input>
        <label>Snacks</label>
        <input type="text" id="snacks" placeholder="Enter snacks or nothing"></input>
        <button type="submit">Pay</button>
    </form>

</>
);
}
export default Buy;
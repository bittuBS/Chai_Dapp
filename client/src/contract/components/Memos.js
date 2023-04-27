import {useState,useEffect} from 'react';
import"./Memos.css";
const Memos=({state})=>{
    const [memos,setMemos]=useState([]);
    const {contract}=state;
    useEffect(()=>{
   const memosMessage= async()=>{
    
    const memos= await contract.getMemo();
    setMemos(memos);
  }
  contract && memosMessage();
    },[contract]);
    

  return (
    <>
      
      {memos.map((memo,ind)=>{
        return(
      <table id='memo' key={ind}>
        <tbody>
            <tr>
                <td>{memo.name}</td>
                <td>{memo.Tea_Name}</td>
                <td>{memo.Snacks}</td>
                <td>{String(memo.timestamp)}</td>
                <td>{memo.message}</td>
                <td>{memo.from}</td>
            </tr>
        </tbody>
      </table>
       );
      })}
    </>
      );
    };
      export default Memos;
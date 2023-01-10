//SPDX-License-Identifier:UNLINCENSED
pragma solidity ^0.8.0;
contract chai{
    struct Memo{
        string name;
        string Tea_Name;
        string Snacks;
        string message;
        uint timestamp;
        address from;

    } 

    
    mapping(address=>string) public feedback;
    string Gretting;
    address payable owner;
    constructor (){
        owner= payable(msg.sender);
    }
    modifier check(){
require(msg.value>0,"0 ether can not be send ");
_;
    }
    Memo[] memos;
    
function buyChai(string memory  _name, string memory _TeaName, string memory _message ,string memory _snacks) public payable check returns(string memory) {
  
  if(keccak256(abi.encodePacked( _TeaName)) == keccak256(abi.encodePacked("Masala Chai")) )
  { if( keccak256(abi.encodePacked( _snacks)) == keccak256(abi.encodePacked("Samosa")))
     {
      require(msg.value >= 15 ether,"you can not get Masala Chai");
  }
  else
  {
      require(msg.value >= 5 ether,"you can not get Masala Chai");
  }
  
  }
  else if(keccak256(abi.encodePacked( _TeaName)) == keccak256(abi.encodePacked("Darjeeling Tea")))
  {require(msg.value >= 7 ether,"you can not get Darjeeling Tea");}

  else if(keccak256(abi.encodePacked( _TeaName)) == keccak256(abi.encodePacked("Green Tea")))
  {require(msg.value >= 7 ether,"you can not get Green Tea");}
  
  else if(keccak256(abi.encodePacked( _TeaName)) == keccak256(abi.encodePacked("Tandoori Chai")))
  {require(msg.value >= 7 ether,"you can not get Tandoori Tea");}
  else if(keccak256(abi.encodePacked( _TeaName)) == keccak256(abi.encodePacked("Nilgiri Tea")))
  {require(msg.value >= 7 ether,"you can not get Nilgiri Tea");}
  else if(keccak256(abi.encodePacked( _TeaName)) == keccak256(abi.encodePacked("Butter Tea")))
  
  {require(msg.value >= 7 ether,"you can not get Butter Tea");}
  else if(keccak256(abi.encodePacked( _TeaName)) == keccak256(abi.encodePacked("Noon Tea")))
  {require(msg.value >= 0.001 ether,"you can not get Nooon Tea");}
  else if(keccak256(abi.encodePacked( _TeaName)) == keccak256(abi.encodePacked("Assam Tea")))
  {require(msg.value >= 7 ether,"you can not get Assam Tea");}
  
 owner.transfer(msg.value);
memos.push( Memo(_name, _TeaName,_snacks, _message,block.timestamp,msg.sender));
 return ("Thanks for visiting and tea");
    }


    function getMemo()public view returns(Memo[] memory){
return memos;
    }
    
    function Feed(string memory data)public {
        feedback[msg.sender]=data;
    }
}
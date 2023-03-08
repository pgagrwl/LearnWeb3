// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";


contract NFT is ERC721 {
    constructor() ERC721("learnweb3NFT","LW3NFT"){
        // _mint(msg.sender,0);
        _mint(msg.sender,1);

    }
}
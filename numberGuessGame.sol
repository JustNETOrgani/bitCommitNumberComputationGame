pragma solidity ^0.4.19;

contract numberGuessingGame{
    
    enum playerState {New, CommitMade, Playing}
    struct userAddresses {
        address userAdd;
        bytes32 userCommit;
        uint256 answer;
        int256 score;
        playerState stateOfPlayer;
    }

    mapping (address => userAddresses) internal users; //Mapping to check for user records using their address.
    playerState public state;
   
    
    event ansByUser(string text, uint256 ans, string getPoints);
    event msgUser(string text);
    event points(string text, int256 ans, string points);
    event error(string message);
    
    // Building a constructor.
    function numberGuessingGame () public {
        state = playerState.New;
    }
    
    function commitmentStage(bytes32 numHash, uint256 userAnswer) public returns (bool status){
        if((userAnswer-5) % 2==0){ 
            uint256 result = (userAnswer-5);
            userAddresses storage userToAdd = users[msg.sender];
            userToAdd.userAdd = msg.sender;
            userToAdd.userCommit = numHash;
            userToAdd.answer = result;
            userToAdd.stateOfPlayer = playerState.CommitMade;
            msgUser("OK. Reveal your number to verify and get points.");
            return true;
        }
        else{
            error("Sorry! Wrong computations on your part. Please recompute.");
            return false;
        }
    }
    
    function revealState(uint256 numChosen) public returns (bool status){
        userAddresses storage userCheck = users[msg.sender];
        if(userCheck.stateOfPlayer==playerState.CommitMade){
            userCheck.stateOfPlayer = playerState.Playing; // Set Player state to "Playing" so Score can be tracked.
            bytes32 hashNum = keccak256(numChosen);
            if(userCheck.userCommit==hashNum){ // Hash is used as a commitment scheme to prevent  cheating.  
                // User did not cheat so proceed to award points.
                userCheck.score = (userCheck.score)+100;
                ansByUser("Yes! You chose: ", numChosen, ". Congratulations. You've won 100 points.");
                return true;
            }
            else{
                // User has cheated. Punish the user.
                userCheck.score = (userCheck.score)-150;
                error("Cheating detected. 150 points deducted from your won points.");
                return false;
            }
        }
        else{
            error("Sorry! You have not made any commitment.");
            return false;
        }
    }
    
    function checkScore() public returns (int256){
        userAddresses memory userCheck = users[msg.sender];
        if(userCheck.stateOfPlayer==playerState.Playing){ // Verify user is in "Playing" state.
            int256 userScore = userCheck.score;
            points("You have", userScore, "points.");
            return userScore;
        }
        else{
            error("Ooops! You're not eligible to check score.");
            return 0;
        }
    }
}
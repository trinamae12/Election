var Election = artifacts.require("./Election.sol");

contract("Election", function(accounts){

    it("initializes with two candidates", function(){
        return Election.deployed().then(function(instance){
            return instance.candidatesCount();
        }).then(function(count){
            assert.equal(count, 2);
        });
    });

    it("it initializes the candidates with the correct values", function(){
        return Election.deployed().then(function(instance){
            electionInstance = instance;
            return electionInstance.candidates(1);
        }).then(function(candidate){
            assert.equal(candidate[0], 1, "contains the correct id");
            assert.equal(candidate[1], "Candidate 1", "contains the correct name");
            assert.equal(candidate[2], 0, "contains the correct votes count");
            return electionInstance.candidates(2);
        }).then(function(candidate){
            assert.equal(candidate[0], 2, "contains the correct id");
            assert.equal(candidate[1], "Candidate 2", "contains the correct name");
            assert.equal(candidate[2], 0, "contains the correct votes");
        });
    });

    // it("allows a voter to cast a vote", function(){
    //     return Election.deployed().then(function(instance){
    //         electionInstance = instance;
    //         candidateId = 1;
    //         voters = web3.eth.getAccounts();
    //         expect(voters[0]).to.equal("0xf83FDe5C494749eAaf2dC08d6B51d0Cd2A20385e")
    //     //     return electionInstance.vote(candidateId, { from : voters[0] });
    //     // }).then(function(receipt){
    //     //     return electionInstance.voters(voters[0]);
    //     // }).then(function(voted){
    //     //     assert(voted, "the voter was marked as voted");
    //     //     return electionInstance.candidates(candidateId);
    //     // }).then(function (candidate){
    //     //     var voteCount = candidate[2];
    //     //     assert.equal(voteCount, 1, "increments the candidate's vote count");
    //     })
    // });
});
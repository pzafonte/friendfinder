var path = require("path");


const Friend = require(path.join(__dirname, "..", "data", "friends.js"));

//Utilize friend constructor
const friendFinder = new Friend();


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {

  // Display all friends
  app.get("/api/friends", (req, res) => {
    res.json(friendFinder.getFriends());
  });

  // Find the most compatible friend
  app.post("/api/friends", (req, res) => {

    console.log(req);
    const profile = {
      "name": req.body.name,
      "photo": req.body.photo,
      "scores": req.body.scores.map(a => parseInt(a))
    };

    const bestFriend = friendFinder.getBestFriend(profile);

    // Add the user's profile to the database
    friendFinder.addFriend(profile);

    res.send({
      "name": bestFriend.name,
      "photo": bestFriend.photo
    });
  });

};
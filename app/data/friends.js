//FriendFinder Constructor

module.exports = function FriendFinder() {
  // Scope-safe constructor
  if (!(this instanceof FriendFinder)) {
      return new FriendFinder();
  }

  let friends = [{
    "name": "Amy",
    "photo": "https://d3iw72m71ie81c.cloudfront.net/female-103.jpg",
    "scores": [
      "5",
      "1",
      "4",
      "4",
      "5",
      "1",
      "2",
      "5",
      "4",
      "1"
    ]
  },
  {
    "name": "John",
    "photo": "https://d3iw72m71ie81c.cloudfront.net/male-6.jpg",
    "scores": [
      "4",
      "2",
      "5",
      "1",
      "3",
      "2",
      "2",
      "1",
      "3",
      "2"
    ]
  },
  {
    "name": "Lynn",
    "photo": "https://d3iw72m71ie81c.cloudfront.net/female-50.jpeg",
    "scores": [
      "5",
      "2",
      "2",
      "2",
      "4",
      "1",
      "3",
      "2",
      "5",
      "5"
    ]
  },
  {
    "name": "Louis",
    "photo": "https://pbs.twimg.com/profile_images/639214960049000449/lNCRC-ub.jpg",
    "scores": [
      "3",
      "3",
      "4",
      "2",
      "2",
      "1",
      "3",
      "2",
      "2",
      "3"
    ]
  },
  {
    "name": "Jeff",
    "photo": "https://d3iw72m71ie81c.cloudfront.net/male-57.jpg",
    "scores": [
      "4",
      "3",
      "4",
      "1",
      "5",
      "2",
      "5",
      "3",
      "1",
      "4"
    ]
  },
  {
    "name": "Andre",
    "photo": "https://d3iw72m71ie81c.cloudfront.net/male-64.jpg",
    "scores": [
      "4",
      "4",
      "2",
      "3",
      "2",
      "2",
      "3",
      "2",
      "4",
      "5"
    ]
  },
  {
    "name": "Rebecca",
    "photo": "https://d3iw72m71ie81c.cloudfront.net/female-37.jpg",
    "scores": [
      "4",
      "4",
      "5",
      "4",
      "5",
      "1",
      "3",
      "3",
      "4",
      "3"
    ]
  }
  ];

  //Private Methods
  function difference(a, b) {
      let score = 0;

      for (let i = 0; i < a.scores.length; i++) {
          score += Math.abs(b.scores[i] - a.scores[i]);
      }

      return score;
  }


  // Public Methods
  this.addFriend = function(profile) {

    friends.push(profile);

  }

  this.getFriends = function() {
      return friends;
  }

  this.getBestFriend = function(profile) {
      //Sort by lowest difference and return the first element of the array
      let sorted_friends = friends.sort((a, b) => difference(a, profile) - difference(b, profile));
      let bestFriend = sorted_friends[0];
      return bestFriend;
  }
}
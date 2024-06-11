// This function handles the upvote functionality. It takes an id as a parameter and performs the following steps:

// 1. Retrieve the votes object from local storage. If it doesn't exist, create a new object with empty arrays for upvotes and downvotes.
// 2. Check if the id is already present in the upvotes array. If it is, return false immediately.
// 3. If the id is not present in the upvotes array, add it to the upvotes array.
// 4. Remove the id from the downvotes array (if it exists). This is done by filtering out the id from the downvotes array using the filter method.
// 5. Update the votes object in local storage with the updated upvotes and downvotes arrays.
// 6. Return true to indicate that the upvote operation was successful.

export const upVote = (id) => {
  // Retrieve the votes object from local storage
  const votes = localStorage.getItem("votes")
    ? JSON.parse(localStorage.getItem("votes"))
    : {
        upvotes: [],
        downvotes: [],
      };

  // Check if the id is already present in the upvotes array
  if (votes.upvotes.includes(id)) {
    // If the id is already present, return false to indicate that the upvote operation failed
    return false;
  }

  // Add the id to the upvotes array
  votes.upvotes.push(id);

  // Remove the id from the downvotes array (if it exists)
  const downVotes = votes.downvotes?.filter((item) => item !== id);
  votes.downvotes = downVotes;

  // Update the votes object in local storage
  localStorage.setItem("votes", JSON.stringify(votes));

  // Return true to indicate that the upvote operation was successful
  return true;
};

export const downVote = (id) => {
  const votes = localStorage.getItem("votes")
    ? JSON.parse(localStorage.getItem("votes"))
    : {
        upvotes: [],
        downvotes: [],
      };

  if (votes.downvotes.includes(id)) {
    return false;
  }
  votes.downvotes.push(id);

  const upVotes = votes.upvotes?.filter((item) => item !== id);
  votes.upvotes = upVotes;

  localStorage.setItem("votes", JSON.stringify(votes));
  return true;
};

export const checkIfAlreadyVoted = (id) => {
  // Retrieve the votes object from local storage. If it doesn't exist, create a new object with empty arrays for upvotes and downvotes.
  // The votes object stores the ids of the ideas that have been upvoted or downvoted
  const votes = localStorage.getItem("votes")
    ? JSON.parse(localStorage.getItem("votes")) // Parse the string representation of the votes object back into an object
    : {
        upvotes: [], // Initialize an empty array to store the ids of the ideas that have been upvoted
        downvotes: [], // Initialize an empty array to store the ids of the ideas that have been downvoted
      };
  return votes.upvotes.includes(id); // Check if the given id is present in the upvotes array. Return true if it is, false otherwise.
};

export const checkIfAlreadyDownVoted = (id) => {
  // Same as above, but checks the downvotes array instead of the upvotes array
  const votes = localStorage.getItem("votes")
    ? JSON.parse(localStorage.getItem("votes"))
    : {
        upvotes: [],
        downvotes: [],
      };
  return votes.downvotes.includes(id);
};

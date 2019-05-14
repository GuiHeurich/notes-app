var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error(
        "assertion failed: " + assertionToCheck + " is not truthy"
      );
    }
  }

  // isArray: function(assertionToCheck) {
  //   if (typeof assertionToCheck !== "array") {
  //     throw new Error(
  //       "assertion failed: " + assertionToCheck + " is not an Array"
  //     );
  //   }
  // }
};

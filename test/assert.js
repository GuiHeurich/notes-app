var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("assertion failed: " + assertionToCheck + " is not truthy");
    }
  }
};

export const formatKey = (key) => {
  // Convert camelCase to spaced words and capitalize the first letter
  return key
    .replace(/([a-z])([A-Z])/g, "$1 $2") // Add space before capital letters
    .replace(/^\w/, (c) => c.toUpperCase()); // Capitalize first letter
};

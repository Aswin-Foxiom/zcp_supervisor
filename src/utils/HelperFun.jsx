import { ClientTypes } from "./StaticDatas";

export const formatKey = (key) => {
  // Convert camelCase to spaced words and capitalize the first letter
  return key
    .replace(/([a-z])([A-Z])/g, "$1 $2") // Add space before capital letters
    .replace(/^\w/, (c) => c.toUpperCase()); // Capitalize first letter
};

export const getClientTypeLabel = (type) => {
  if (!type) return "Unknown Type";
  const clientType = ClientTypes.find((client) => client.value === type);
  return clientType ? clientType.label : "Unknown Type"; // Default to "Unknown Type" if not found
};

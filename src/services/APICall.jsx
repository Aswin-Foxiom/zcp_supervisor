import axios from "axios";
import { baseUrl } from "./Urls";
import { showToast } from "../utils/Toast";

// Common Axios call function
const apiCall = async (
  method,
  endpoint,
  data = {},
  params = {},
  is_formdata
) => {
  try {
    var endUrl = baseUrl + endpoint;
    const response = await axios({
      method: method,
      url: endUrl,
      data: method !== "get" ? data : null, // Only send data for non-GET requests
      params: method === "get" ? params : null, // Only send params for GET requests
      headers: {
        "Content-Type": is_formdata
          ? "multipart/form-data"
          : "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
        access: "supervisor",
      },
    });
    const return_data = {
      status: true,
      data: response?.data?.data ?? null,
      message: response?.data?.message,
    };
    return return_data;
  } catch (error) {
    // console.error(
    //   `Error during ${method.toUpperCase()} request to ${endpoint}`,
    //   error
    // );
    // throw error; // Rethrow the error so it can be caught by the calling function
    showToast(error?.response?.data?.message ?? "Internal server error", false);
    if (
      error?.response.status &&
      error?.response.status === 401 &&
      localStorage.getItem("token")
    ) {
      localStorage.clear();
      window.location.href = "/login";
      return;
    }
    return {
      status: false,
      data: null,
      message: error?.response?.data?.message ?? "Internal server error",
    };
  }
};

export default apiCall;

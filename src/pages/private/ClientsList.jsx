// import React, { useState } from "react";
// import Background from "../../components/common/Background";
// import { useNavigate } from "react-router-dom";
// import { BasePathUrl, ClientDetailsPathUrl } from "../../services/UrlPaths";
// import useFetchData from "../../services/UseQuery";
// import apiCall from "../../services/APICall";
// import { getClientTypeLabel } from "../../utils/HelperFun";

// function ClientsList() {
//   const [page, setPage] = useState(1);
//   const limit = 10;
//   const fetchClients = async (page, limit) => {
//     const response = await apiCall("get", `/clients`, {}, { page, limit });
//     if (response?.status) {
//       console.log("THE CLIENT", response?.data?.docs);
//       return response?.data?.docs;
//     } else {
//       return [];
//     }
//   };
//   let navigate = useNavigate();
//   const {
//     data: clientsData,
//     isLoading: clientsLoading,
//     isFetching: clientsFetching,
//     isError: clientsError,
//     error: clientsErrorMsg,
//     refetch: refetchClients,
//   } = useFetchData(
//     "clients", // Key for the query
//     page, // Page number
//     limit, // Limit for pagination
//     fetchClients // Fetch function
//   );

//   if (clientsLoading || clientsFetching) {
//     return <div> Loading</div>;
//   }

//   return (
//     <div style={{ height: "100vh" }}>
//       <section id="invite-friend-main" className="background1 ">
//         <Background />

//         <div className="container position-relative">
//           <div className="main-content-wrap pt-24">
//             <div className="search-wrap">
//               <div className="input-group search-page-searchbar">
//                 <input
//                   type="text"
//                   placeholder="Search here"
//                   className="form-control search-text"
//                   id="search-input"
//                 />
//               </div>
//               <div className="search-bar">
//                 <div className="search-btn">
//                   <a href="#">
//                     <img
//                       src="/assets/svg/search-icon.svg"
//                       alt="search-icon"
//                       className="black-icon"
//                     />
//                   </a>
//                 </div>
//               </div>
//             </div>

//             {clientsData?.length ? (
//               <>
//                 {clientsData?.map((value, key) => (
//                   <div
//                     className="invite-friend pt-24"
//                     style={{ cursor: "pointer" }}
//                     onClick={() => {
//                       window.location.href = `/client-details/${value?._id}`;
//                     }}
//                   >
//                     <div className="invite-friend-wrapper">
//                       <div className="invite-img">
//                         {value?.dp && value?.dp != "" ? (
//                           <img
//                             onError={(e) =>
//                               (e.target.src =
//                                 "/assets/images/invite-friend/friend1.png")
//                             }
//                             src={value?.dp}
//                             alt="friend-img"
//                           />
//                         ) : (
//                           <img
//                             onError={(e) =>
//                               (e.target.src =
//                                 "/assets/images/invite-friend/friend1.png")
//                             }
//                             src="/assets/images/invite-friend/friend1.png"
//                             alt="friend-img"
//                           />
//                         )}
//                       </div>
//                       <div className="invite-content">
//                         <h3 className="friend-name text-start">
//                           {value?.name}
//                         </h3>
//                         <p className="friend-no">
//                           <a href="#">
//                             {value?.contact} , {getClientTypeLabel(value?.type)}
//                           </a>
//                         </p>
//                       </div>
//                       {/* <div className="friend-invite">
//                         <div className="friend-select">
//                           <input
//                             type="checkbox"
//                             id="select-friend1"
//                             name="select-language"
//                           />
//                           <label
//                             className="custom-radio-sel-friend "
//                             htmlFor="select-friend1"
//                           >
//                             Invited
//                           </label>
//                         </div>
//                       </div> */}
//                     </div>
//                   </div>
//                 ))}
//               </>
//             ) : (
//               <div> No CLients </div>
//             )}

//             {/* <div
//               className="invite-friend pt-24"
//               onClick={() => {
//                 window.location.href = "/client-details";
//               }}
//             >
//               <div className="invite-friend-wrapper">
//                 <div className="invite-img">
//                   <img
//                     src="/assets/images/invite-friend/friend1.png"
//                     alt="friend-img"
//                   />
//                 </div>
//                 <div className="invite-content">
//                   <h3 className="friend-name text-start">Manoj</h3>
//                   <p className="friend-no">
//                     <a href="#">9754874545 , Kollam</a>
//                   </p>
//                 </div>
//                 <div className="friend-invite">
//                   <div className="friend-select">
//                     <input
//                       type="checkbox"
//                       id="select-friend1"
//                       name="select-language"
//                     />
//                     <label
//                       className="custom-radio-sel-friend "
//                       htmlFor="select-friend1"
//                     >
//                       Invited
//                     </label>
//                   </div>
//                 </div>
//               </div>
//             </div> */}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default ClientsList;

import React, { useState, useEffect } from "react";
import Background from "../../components/common/Background";
import { useNavigate } from "react-router-dom";
import apiCall from "../../services/APICall";
import useFetchData from "../../services/UseQuery";
import { getClientTypeLabel } from "../../utils/HelperFun";
import { baseUrl } from "../../services/Urls";
import Loader from "../../components/common/Loader";

function ClientsList() {
  const [page, setPage] = useState(1); // Page state
  const [searchQuery, setSearchQuery] = useState(""); // Search query state
  const [debouncedQuery, setDebouncedQuery] = useState(""); // Debounced query state
  const limit = 100; // Pagination limit
  let navigate = useNavigate();

  // Function to fetch clients
  const fetchClients = async (page, limit, query) => {
    const response = await apiCall(
      "get",
      `/clients`,
      {},
      { page, limit, query }
    );
    if (response?.status) {
      return response?.data?.docs;
    } else {
      return [];
    }
  };

  // useFetchData hook to get clients data, passing the debounced query to the API call
  const {
    data: clientsData,
    isLoading: clientsLoading,
    isFetching: clientsFetching,
    isError: clientsError,
    error: clientsErrorMsg,
    refetch: refetchClients,
  } = useFetchData(
    ["clients", debouncedQuery, page], // Unique query key based on page and search query
    page, // Page number
    limit, // Limit for pagination
    () => fetchClients(page, limit, debouncedQuery) // Fetch function with search query
  );

  // Handle search input changes
  const handleSearch = (e) => {
    setSearchQuery(e.target.value); // Update search query as user types
  };

  // Clear the search input
  const clearSearch = () => {
    setSearchQuery(""); // Reset search query
    setDebouncedQuery(""); // Reset debounced query to fetch all clients
  };

  // Debounce search query to avoid calling the API too frequently
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      setDebouncedQuery(searchQuery); // Update debounced query after a delay
    }, 500); // 500ms delay

    return () => clearTimeout(delayDebounceFn); // Cleanup the timeout on unmount
  }, [searchQuery]);

  if (clientsLoading || clientsFetching) {
    return <Loader />;
  }

  return (
    <div style={{ height: "auto", paddingBottom: "50px" }}>
      <section id="invite-friend-main" className="background1">
        <Background />
        <div className="container position-relative">
          <div className="main-content-wrap pt-24">
            {/* Search Bar */}
            <div className="search-wrap">
              <div
                className="input-group search-page-searchbar"
                style={{ position: "relative" }}
              >
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleSearch}
                  placeholder="Search clients..."
                  className="form-control search-text"
                  id="search-input"
                  style={{ padding: "10px", width: "100%" }}
                />
                {/* Clear Search Button */}
                {searchQuery && (
                  <button
                    className="clear-search-btn"
                    onClick={clearSearch}
                    style={{
                      position: "absolute",
                      right: "10px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      background: "transparent",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    <img
                      src="https://www.svgrepo.com/show/350281/close.svg"
                      alt="Clear"
                      style={{ width: "20px", height: "20px" }}
                    />
                  </button>
                )}
              </div>
            </div>

            {/* Clients List */}
            {clientsData?.length ? (
              clientsData.map((value, key) => (
                <div
                  key={key}
                  className="invite-friend pt-24"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    window.location.href = `/client-details/${value?._id}`;
                  }}
                >
                  <div className="invite-friend-wrapper">
                    <div className="invite-img">
                      {value?.dp && value?.dp !== "" ? (
                        <img
                          onError={(e) =>
                            (e.target.src = "/assets/images/no-image.jpg")
                          }
                          style={{ height: "64px", width: "64px" }}
                          src={`${baseUrl}/${value?.dp}`}
                          alt="friend-img"
                        />
                      ) : (
                        <img
                          src="/assets/images/no-image.jpg"
                          alt="friend-img"
                          style={{ height: "64px", width: "64px" }}
                        />
                      )}
                    </div>
                    <div className="invite-content">
                      <h3 className="friend-name text-start">{value?.name}</h3>
                      <p className="friend-no">
                        <a href="#">
                          {value?.contact} , {getClientTypeLabel(value?.type)}
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div>No Clients Found</div>
            )}
          </div>
        </div>
        <div className="sign-up-btn fixed pt-32">
          <button
            onClick={() => {
              return navigate("/cash-customer");
            }}
            type="button"
          >
            Create Cash Customer
          </button>
        </div>
      </section>
    </div>
  );
}

export default ClientsList;

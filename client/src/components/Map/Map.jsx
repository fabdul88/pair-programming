// import React from 'react';

//  const Map = () => {
//     return (
//         <div className="map">
//             {/* latitude and longitude coordinates of Vancouver BC */}
//             <ReactBingmaps
//                 bingmapKey = "Akp1rf9EeZkK6YBsxmvaztnlDKNQK0fv9y9kf_9bR_uJiLxxWvqYmZsqZ5h8uLWR"
//                 center = {[49.246292, -123.116226]}
//                 >
//             </ReactBingmaps>
//             {/* <p>Map</p> */}
//         </div>
//     )
// }

// export default Map;

import React, { Component } from "react";
import { ReactBingmaps } from "react-bingmaps";

class Map extends Component {
  render() {
    return (
      <div className="map">
        {/* latitude and longitude coordinates of Vancouver BC */}
        <ReactBingmaps
          bingmapKey="Akp1rf9EeZkK6YBsxmvaztnlDKNQK0fv9y9kf_9bR_uJiLxxWvqYmZsqZ5h8uLWR"
          center={[49.246292, -123.116226]}
        ></ReactBingmaps>
        {/* <p>Map</p> */}
      </div>
    );
  }
}

export default Map;

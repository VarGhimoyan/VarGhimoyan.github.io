// import React, { Component } from "react";
// import { Routes, Route, Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";

// import AddTutorial from "./components/add-tutorial.component";
// import Tutorial from "./components/tutorial.component";
// import TutorialsList from "./components/tutorials-list.component";
// import SignUpComponent from "./components/sign-up.component";
// import SignUp from "./components/sign-up.component";
// import Layout from "./layouts/layout";

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <div className="container mt-3">
//           <Routes>
//             <Route path="" element={<SignUp />} />
//             <Route path="/tutorials" element={<Layout />}>
//               <Route path="" element={<TutorialsList />} />
//               <Route path="/add" element={<AddTutorial />} />
//               {/* <Route path="/tutorials/:id" element={<Tutorial />} /> */}
//             </Route>
//           </Routes>
//         </div>
//       </div>
//     );
//   }
// }

// export default App;


import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddTutorial from "./components/add-tutorial.component";
import Tutorial from "./components/tutorial.component";
import TutorialsList from "./components/tutorials-list.component";
import SignUpComponent from "./components/sign-up.component";
import SignUp from "./components/sign-up.component";
import Layout from "./layouts/layout";
import LogIn from "./components/log-in.component";

class App extends Component {
  render() {
    return (
      <div>
        <div className="container mt-3">
          <Routes>
            <Route path="" element={<LogIn />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="/" element={<Layout />}>
              <Route path="tutorials" element={<TutorialsList />} />
              <Route path="add" element={<AddTutorial />} /> {/* Changed path to "add" */}
              {/* <Route path="/tutorials/:id" element={<Tutorial />} /> */}
            </Route>
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;

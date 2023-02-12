import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.min.js";
import "antd/dist/reset.css";
import "../public/css/styles.css"

import TopNav from "../components/TopNav"; //NAVBAR
import Wave from "../components/Wave"; // Wave

function MyApp ({Component, pageProps}){
    return (
    <>  
        <Wave/>
        <TopNav/>
        <Component {...pageProps} />;
    </>
    )
}

export default MyApp;
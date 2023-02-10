import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.min.js";
import "antd/dist/reset.css";

import TopNav from "../components/TopNav"; //NAVBAR

function MyApp ({Component, pageProps}){
    return (
    <>  
        <TopNav/>
        <Component {...pageProps} />;
    </>
    )
}

export default MyApp;
import { useState } from "react"
import RandomChar from "../randomChar/randomChar"
import ContentField from "../contentField/contentField"

const PageMain=()=>{

    const [char]=useState(null);

    return(
        <>
            <RandomChar/>
            <ContentField char={char}/>
        </>
    )
}
export default PageMain;
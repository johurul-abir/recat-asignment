import MsgContext from "../context/MsgContext";

const MsgProvider = ( {children} )=> {
    return(
        <MsgContext.Provider> 
            {children}
        </MsgContext.Provider>
    )
}


export default MsgProvider;
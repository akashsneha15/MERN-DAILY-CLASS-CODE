
function Nav(){
    return(
        <nav style={{backgroundColor:"plum", height:"90px",borderRadius:"50px"}}>
            < ol style={ListStylings.orderList}>
                <li style={ListStylings.list}>Home</li>
                <li style={ListStylings.list}>Login</li>
                <li style={ListStylings.list}>Reister</li>
                <li style={ListStylings.list}>About</li>
            </ol>
        </nav>
    );
};

const ListStylings={
    list:{
        backgroundColor:"aliceblue",
        padding:"10px 20px",
        fontSize:"22px",
        fontStyle:"italic",
        fontWeight:"bold",
    },
    orderList:{
        display:"flex", 
        justifyContent:"space-evenly",
         alignItems:"center", 
         height:"80px",
         listStyle:"none",
    },
    
}


export default Nav;






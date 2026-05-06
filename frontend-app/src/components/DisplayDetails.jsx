

const DisplayDetails = (props) =>{
    console.log(props);
   

    return(
        <>
        <h4>Student Details </h4>
        <h4> Name :{props.Name}</h4>
        <h4> RollNo :{props.RollNo}</h4>
        <h4> Course :{props.Course}</h4>
        <h4> CollegeName :{props.CollegeName}</h4>
        <h4> Role :{props.Role}</h4>

        </>
    )
}

export default DisplayDetails;
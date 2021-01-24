const person={
    firstName: "Nithya",
    lastName: "VBS",
}

const formatName= (person) =>{
    return '${person.firstName} ${person.lastName}'

}
var el=(
    <div>
        <h1>
            Hello,{formatName(person)}!
        </h1>
    </div>
);
export default test1;
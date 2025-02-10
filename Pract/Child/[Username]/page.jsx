

const User = ({params}) =>{
    console.log(params);
    return (
        <h1>
            Username is  {params.Username}
        </h1>
    );
};

export default User;
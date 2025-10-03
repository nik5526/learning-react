//it is a functional component in js .

// export const User = ({name,location})=>{
//     return (
//         <div className="user-page">
//             <h1>Name - {name}</h1>
//             <h2>Location - {location}</h2>
//             <h3>Contact Us - nikhil@gmail.com</h3>
//         </div>
//     );
// }

//now we will learn about class component in react this is a older way to render a component in react now a days we use functional component more than class component.
//in class we can not access props directly we have to make a constructor to acces it and call via this.props.
//in class component if we have to use state we have to use this.state and to update the state we have to use this.setState() method.
// see react class component or react lifecycle to understand it more.
class UserData extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            count : 0,
            count1 : 1,
        }
    }

    componentDidMount(){
        //Best place to make an API call
        //componentDidMount is a lifecycle method which is called after the component is rendered.
        //it is called only once when the component is rendered for the first time.
        //in lifecycle of a class component at first the constructor is called then the render method is called and then the componentDidMount method is called.

        //now we will get an API call from github.
        
        
    }

    render(){ 
        //destructuring
        const {name,location} = this.props;  
        const{count,count1} = this.state;
        return (
        <div className="bg-white p-6 border border-gray-300 rounded-lg shadow-md mt-4">
            <h1 className="font-bold text-xl">Name - {name}</h1>
            <h2 className="font-bold text-lg">Location - {location}</h2>
            <h3 className="font-bold text-lg">Contact Us - nikhil@gmail.com</h3>
        </div>
    );
    };
}

export default UserData;
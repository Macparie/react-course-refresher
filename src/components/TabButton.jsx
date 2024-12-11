const TabButton = ({children, onSelect}) => {
    function clickHandler () {
        console.log("helooo");
    }
    return ( 
    <li>
        <button onClick={clickHandler} >{children} </button>
    </li> );
}
 
export default TabButton;
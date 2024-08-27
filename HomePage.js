import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

function HomePage(){
    const containerStyle = {
        backgroundColor: 'navy',
        minHeight: '100vh',
        textAlign: 'center',
    };
    let MyStyle={
        textAlign:"center",
        color: 'pink'
    };
    const nvg = useNavigate();
    return <div style={containerStyle}>
        <h1 style={MyStyle}>Fakahani App</h1> 
        <Button variant="success" size="lg" onClick={()=>nvg('/apples')}>Apples🍏</Button>
        <h1> </h1>
        <Button variant="warning" size="lg" onClick={()=>nvg('/oranges')}>Oranges🍊</Button>  
        <h1> </h1>
        <Button variant="danger" size="lg" onClick={()=>nvg('/strawberry')}>Strawberries🍓</Button> 
        <h1> </h1>
        <Button variant="warning" size="lg" onClick={()=>nvg('/bananas')}>Bananas🍌</Button>  
            </div>
}
export default HomePage
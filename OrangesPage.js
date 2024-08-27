import FruitCounter from '../components/FruitCounter';

export default function OrangesPage(){
    const containerStyle = {
        backgroundColor: 'navy',
        minHeight: '100vh',
        textAlign: 'center',
    };
    return <div style={containerStyle}>
        <FruitCounter text='Oranges'/>
    </div>
}
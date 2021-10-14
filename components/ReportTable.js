import { hours } from '../data';

export default function ReportTable(props) {
    if (props.resources && props.resources.length === 0) {
        return <h2 className="font-bold text-center">No Cookie Stands Available</h2>
    }
    
    return (
        <table className="items-center w-3/4 p-6 mx-auto mb-5">
            <thead>
                <tr className="font-bold text-center bg-green-500">
                    <th>Location</th>
                    {hours.map(hour => {
                        return(<th key={Math.random()}>{hour}</th>);
                    })}
                    <th>Total</th>
                </tr>
            </thead>
            
            <tbody>
                {props.resources &&
                    props.resources.map((store) =>{
                    return (
                        <tr className="text-left border border-black odd:bg-green-400 even:bg-green-300"
                            key={Math.random()}>
                                <td className="text-center text-black border border-black">{store.location}</td>
                                {store.hourly_sales.map((sale) => {
                                return (<td className="text-center border border-black">{sale}</td>);
                                })}
                                <td>
                                    {store.hourly_sales.reduce((acc, cur) => {
                                        return acc + cur;
                                    }, 0)}
                                </td>
                        </tr>
                    )
                })}
            </tbody>
            <tfoot>
                
            </tfoot>

        </table>
    )
}
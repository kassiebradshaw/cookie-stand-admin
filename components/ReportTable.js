import { hours } from '../data'

export default function ReportTable(props) {
    if (props.reports.length === 0) {
        return <h2 className="font-bold text-center">No Cookie Stands Available</h2>
    }
    return (
        <table className="items-center w-3/4 p-6 mx-auto mb-5">
            <thead>
                <tr className="font-bold text-center bg-green-500">
                    <th>Location</th>
                    {hours.map(item=> {
                        return(<th>{item}</th>)
                 })}
                </tr>
            </thead>
            <tbody>
                {props.reports.map((store) =>{
                    return(
                        <tr className="text-left border border-black odd:bg-green-400 even:bg-green-300">
                            <td className="text-center text-black border border-black">{store.location}</td>
                            {store.hourly_sales.map( (sale) =>{
                                return(
                                    <td className="text-center border border-black">{sale}</td>
                                )
                            })}
                        </tr>
                    )
                })}
            </tbody>
            <tfoot>
                
            </tfoot>

        </table>
    )
}
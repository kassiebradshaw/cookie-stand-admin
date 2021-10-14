export default function Footer(props) {
    return (
        <footer className="p-3 mt-10 bg-green-500">
            <h1>{props.resources ? props.resources.length : 0} Locations World Wide</h1>
            <p>&copy; 2021</p>
      </footer>
    )
}
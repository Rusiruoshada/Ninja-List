import Link from "next/link";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h1>Oh No!</h1>
            <h2>That page can not be found.</h2>
            <p>Go back to the <Link href="/">Home</Link></p>
        </div>
     );
}
 
export default NotFound;
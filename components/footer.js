const Footer = () => {
    const date = new Date().getFullYear()
    return ( 
        <div>
            <p>&copy; {date} made with &hearts; by ROMs</p>
        </div>
     );
}
 
export default Footer;
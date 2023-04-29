const Footer = () => {
    const date = new Date().getFullYear()
    return ( 
        <footer className="footer">
            <p>&copy; {date} made with &hearts; by ROMs</p>
        </footer>
     );
}
 
export default Footer;
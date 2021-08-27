import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import { Nav , Navbar} from'react-bootstrap'; 

const NavBar=()=>{
    const token = useSelector((state => state.token))
    return (
        
        <>
        {!token &&
        (
            <Navbar bd="dark" variant="primary">
                <Nav className="me-auto">
                    <Nav.Link href="/"> SignUp</Nav.Link>
                    <Nav.Link href="/login"> Signin</Nav.Link>
                </Nav>
            </Navbar>
        )}
        {token &&(
            <Navbar bd="dark" variant="primary">
                <Nav className="me-auto">
                    <Nav.Link href="/dash"> Dashboard</Nav.Link>
                    <Nav.Link href="/history"> History</Nav.Link>
                    <Nav.Link href="/logout"> Logout</Nav.Link>
                </Nav>
            </Navbar>
        )}
        </>
    )
}


export default NavBar;
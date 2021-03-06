import './Navbar.css';
import * as Icon from 'react-bootstrap-icons';
import Badge from 'react-bootstrap/Badge'

function Navbar() {
  return (
    <div className="fixed-top">
        <div className="bar">
            Category: &nbsp;
            <select>
                <option>St Patrick Day</option>
            </select>
            <Icon.Cart2 size={30} style={{float:"right"}} />
        </div>
    </div>
  );
}

export default Navbar;

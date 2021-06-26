import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import Button from './Button';


const Header = ({ title, onAdd, showAdd }) => {
    const location = useLocation();
    return (
        <header className='header'>
            
            <img className='tasks'
            src ={process.env.PUBLIC_URL + "/clockifylogo.png"}
            width ="80" 
            alt="" />
            <h1 /* className='header-title' */>{title}</h1>
            {location.pathname === "/" && <Button color={showAdd 
                ? 'red'
                : 'green'} 
            text={showAdd 
                ? 'X'
                :'Add'} 
            onClick={onAdd} />}
            
        </header>
    )
}
Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes ={
    title: PropTypes.string.isRequired,
}

export default Header

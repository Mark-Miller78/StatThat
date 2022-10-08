import './Header.css'

const header = () => {

    return(
        <div className="header">
            <div className='logo_container'>
                <h1 className='text'>CFBspot &nbsp;<span className='right'>&#127944;</span></h1>
            </div>
            <ul className='nav_items'>
                <li><a href='/teams'>Teams</a></li>
                <li><a href='/schedule'>Schedule</a></li>
                <li><a href='/rankings'>Rankings</a></li>
            </ul>
        </div>
    );
};

export default header;
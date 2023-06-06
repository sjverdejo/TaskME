import '../assets/styles/Header.css'
import Searchbar from './Searchbar'

function Header() {
    return (
        <div className='Main-Header'>
            <h1>TaskME</h1>
            <Searchbar />
        </div>
    )
}

export default Header
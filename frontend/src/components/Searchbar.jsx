import '../assets/styles/Searchbar.css'
import searchIcon from '../assets/images/search.png'
function Searchbar() {
    return (
        <div className='Search-Box'>
            <input className='Search-Input' type='text' name='search'/>
            <button onClick={()=> {console.log('Clicked')}}><img src={searchIcon} width={30}/></button>
        </div>
    )
}

export default Searchbar
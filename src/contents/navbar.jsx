import '../style/general.css';
import '../style/navbar.css';



function navbar() {
  return (
    <nav className='nav-container'>
        <div className='nav-item-1'>
            <h1>Darling MarkDown</h1>
        </div>
         <div className='nav-item-2'>
            <p>Streamline your writing process with Darling Markdown</p>
         </div>
    </nav>
  )
}

export default navbar
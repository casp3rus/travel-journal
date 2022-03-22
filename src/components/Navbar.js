import globe from '../images/globe.png'

export const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={globe} alt='' />
      <h1 className='navbar--title'>my travel journal</h1>
    </div>
  )
}

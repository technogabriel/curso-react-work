
import HeaderLayout from '../UI/Header/HeaderLayout'
import FooterLayout from '../UI/Footer/FooterLayout'
import NavbarLayout from '../UI/Navbar/NavbarLayout'

const Index = (props) => {
  return (
    <>
    <HeaderLayout/>
    <NavbarLayout/>
    <div>{props.children}</div>
    <FooterLayout/>
    </>
  )
}

export default Index
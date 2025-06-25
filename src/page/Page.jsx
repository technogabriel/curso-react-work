import HeaderLayout from '../components/UI/Header/HeaderLayout'
import NavbarLayout from '../components/UI/Navbar/NavbarLayout'
import FooterLayout from '../components/UI/Footer/FooterLayout'

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
import { FlexBox } from './index'
import { Link as CompLink } from 'react-router-dom'
import { FC } from 'react'
import styled from 'styled-components'

interface Tab {
  link: string
  label: string
}
interface INavbar {
  tabs: Tab[]
}

const NavContainer = styled(FlexBox).attrs({
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center'
})`
  padding: 0 40px;
  height: 60px;
  background: grey;
`

const Link = styled(CompLink)`
  text-decoration: unset;
  font-size: 30px;
  color: black;
  font-weight: bold
`
const LinkContainer = styled(FlexBox).attrs({
  alignItems: 'center',
  justifyContent: 'center',
})`
  width: 150px;
  height: 100%;
 
`


const Navbar: FC<INavbar> = ({ tabs }) => {
  return (
    <NavContainer>
      {tabs.map((tab) =>
        <LinkContainer>
          <Link to={tab.link}>{tab.label}</Link>
        </LinkContainer>
      )}
    </NavContainer>
  )
}

export default Navbar
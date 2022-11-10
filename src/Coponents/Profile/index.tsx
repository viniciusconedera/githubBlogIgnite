import { BsBoxArrowUpRight, BsBuilding, BsFillPeopleFill, BsGithub } from 'react-icons/bs';
import { UserProps } from '../../@types/User';
import { FooterDetails, HeaderDetails, ProfileContainer } from "./styles";

interface ProfileProps {
  user: UserProps 
}

export function Profile({user}: ProfileProps) {
  return (
    <ProfileContainer>
      <img src={user.avatar_url} alt=""/>
      <div>
        <HeaderDetails>
          <span>{user.name}</span>
          <a href={`https://github.com/${user.login}`} target="_blank">GITHUB <BsBoxArrowUpRight /></a>
        </HeaderDetails>
        <p>{user.bio}</p>
        <FooterDetails>
          <span><BsGithub /> {user.login}</span>
          <span><BsBuilding /> {user.company}</span>
          <span><BsFillPeopleFill />{user.followers}</span>     
        </FooterDetails>
      </div>
    </ProfileContainer>
  )
}
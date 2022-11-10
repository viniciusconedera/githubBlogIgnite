import { formatDistanceToNow } from 'date-fns';
import ptBr from 'date-fns/locale/pt-BR';
import { useEffect, useState } from 'react';
import { BsBoxArrowUpRight, BsChevronLeft, BsFillCalendarMinusFill, BsFillChatFill, BsGithub } from 'react-icons/bs';
import ReactMarkdown from 'react-markdown';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import Raw from 'rehype-raw';
import Gfm from 'remark-gfm';
import { UserProps } from '../../@types/User';
import { api } from '../../api/axios';
import { FooterDetails, HeaderDetails, PostContainer } from "./styles";

interface IssueProps {
  id: string;
  number: number;
  url: string;
  title: string;
  body: string;
  state: string;
  formattedCreateAt: string;
  comments: number;
  user: UserProps;
}

export function Post() {
  const {state} = useLocation();
  const navigate = useNavigate();
  const [issue, setIssue] = useState<IssueProps>({} as IssueProps);

  useEffect(() => {
    if (!state.url) {
      navigate('/');
    }
    async function loadIssues() {
      const response = await api.get(state.url);
      setIssue({...response.data, 
        formattedCreateAt: formatDistanceToNow(new Date(response.data.created_at), {
        addSuffix: true, locale: ptBr
      })});
    }
    loadIssues();
  }, []);
    
  return (
    <PostContainer>
      <div>
        <HeaderDetails>    
          <div>
            <NavLink to='/'><BsChevronLeft /> VOLTAR</NavLink>
            <a href={`https://github.com/${state.owner}/react/issues/${issue.number}`} target="_blank">GITHUB <BsBoxArrowUpRight /></a>
          </div>
          <span>{issue.title}</span>
        </HeaderDetails>        
        <FooterDetails>
          <span><BsGithub /> {issue.user?.login}</span>
          <span><BsFillCalendarMinusFill /> {issue.formattedCreateAt}</span>
          <span><BsFillChatFill />{issue.comments} comentários</span>     
        </FooterDetails>
      </div>
      <section>
        <ReactMarkdown children={issue.body} disallowedElements={['!']}
          rehypePlugins={[Raw]} remarkPlugins={[Gfm]}/>
      </section>      
    </PostContainer>
  )
}
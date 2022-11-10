import { useEffect, useState } from "react";
import { NavLink } from 'react-router-dom';
import { UserProps } from '../../@types/User';
import { api } from "../../api/axios";
import { Card } from "../../Coponents/Card";
import { Profile } from "../../Coponents/Profile";
import { BlogContainer, GitSearch, InputQuery, IssuesTable } from "./styled";

interface IssueProps {
  total_count: number;
  items: Array<{
    id: string;
    url: string;
    title: string;
    body: string;
    state: string;
    created_at: string;
  }>
}

export function Blog() {
  const [user, setUser] = useState<UserProps>({} as UserProps);
  const [issue, setIssue] = useState<IssueProps>({total_count: 0, items: []});
  const [query, setQuery] = useState('');

  useEffect(() => {
    async function load() {
      const response = await api.get('/users/facebook');
      setUser(response.data);
      setIssue({total_count: 0, items: []})
    }
    load();
  }, []);

  useEffect(() => {
    async function loadIssues() {
      const response2 = await api.get(`/search/issues?q=${query} user:facebook`);
      console.log(response2.data);
      setIssue(response2.data);
    }
    loadIssues();
  }, [query]);

  return (
    <BlogContainer>
      <Profile user={user}/>
      <GitSearch>
        <div>
          <h1>Publicações</h1>
          <span>{issue.total_count} publicações</span>        
        </div>
        <InputQuery>
          <input type="text" placeholder="Buscar conteúdo"
          onChange={(event) => setQuery(event.target.value)} value={query}/>
        </InputQuery>
      </GitSearch>
      <IssuesTable>
        {issue.items.map((issue) => (
          <NavLink to="/post" key={issue.id}
            state={{url: issue.url, owner: user.login}}>
            <Card issue={issue}/>
          </NavLink>          
        ))}
      </IssuesTable>
    </BlogContainer>
  )
}
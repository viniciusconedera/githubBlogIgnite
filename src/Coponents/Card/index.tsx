import { formatDistanceToNow } from 'date-fns';
import ptBr from 'date-fns/locale/pt-BR';
import { CardContainer } from "./styles";

interface CardProps {
  issue: {
    title: string;
    body?: string;
    created_at: string;
  }
}

export function Card({issue}: CardProps) {

  const bodyText = issue.body?.slice(0, 180).concat('...');

  return (
    <CardContainer>
      <div>
        <h2>{issue.title}</h2>
        <span>{formatDistanceToNow( new Date(issue.created_at), {
          addSuffix: true, locale: ptBr
        })}</span>
      </div>
      <article>
      <p>{bodyText}</p>
      </article>
    </CardContainer>
  )
}
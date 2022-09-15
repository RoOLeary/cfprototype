import styled from "styled-components";
import Link from 'next/link';
import styles from '../styles/Home.module.css'

interface ITags {
  tags: {
    slug: string
    name: string
  }[]
}

const TagsContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 20px;
  font-family: var(--font-3);
  text-transform: uppercase;
  font-size: 12px;
  text-decoration: none !important; 
`

const TagText = styled.a`
  text-decoration: none !important;
`

const Tags = ({ tags }: ITags) => { 
  return(
    <TagsContainer>
      <ul>
      {tags ? tags.map((t, idx: number) => {
        return(
          <li className={styles.tags} key={idx}>
            <Link
              href={{ pathname: `/topic/${t.slug}`, query: { data: JSON.stringify(t.slug) } }}
            >
              <TagText className="opacity-text">{t.name}</TagText>
            </Link>
          </li>
          ); 
        }).slice(0,1) : '' }
      </ul>
    </TagsContainer>
  )
}

export default Tags;
import React, { useEffect, useState, useCallback } from 'react';
import { format } from 'date-fns';

import {
  Container,
  Column,
  Title,
  Card,
  CardTitle,
  CardDate,
  Row,
} from './styles';
import SubtractSection from '../subtract-section/index';
import github from '../../clients/github/index';
import medium from '../../clients/medium/index';
import Github from '../../svgs/github';
import Medium from '../../svgs/Medium';
import Separator from '../../svgs/Separator';

const MAX_CONTRIBUTIONS = 3;

const Skills = (): JSX.Element => {
  const [contributions, setContributions] = useState(
    [] //new Array(MAX_CONTRIBUTIONS).fill(null)
  );
  const [posts, setPosts] = useState(
    [] //new Array(MAX_CONTRIBUTIONS).fill(null)
  );
  const getMyContributions = useCallback(async () => {
    const {
      data: { items },
    } = await github.getMyContributions();

    setContributions(
      new Array(MAX_CONTRIBUTIONS).fill(null).map((_, n) => items[n])
    );

    const {
      data: { items: posts },
    } = await medium.getMyPosts();

    setPosts(posts);
  }, []);

  useEffect(() => {
    getMyContributions();
  }, [getMyContributions]);

  return (
    <SubtractSection>
      <Container>
        <Column>
          <Title>Open source collaborations</Title>
          {contributions.map((pr, index) => (
            <Card key={index} href={pr.html_url} target='_blank'>
              <Row>
                <Github className='github' width={24} height={24} />
                <CardDate>
                  {format(new Date(pr.closed_at), 'MMMM d, yyyy')}
                </CardDate>
              </Row>
              <CardTitle>{pr.title}</CardTitle>
            </Card>
          ))}
        </Column>
        <Separator className='separator' />
        <Column>
          <Title>Blog posts</Title>
          {posts.map((post, index) => (
            <Card key={index} href={post.link} target='_blank'>
              <Row>
                <Medium className='medium' width={24} height={24} />
                <CardDate>
                  {format(new Date(post.pubDate), 'MMMM d, yyyy')}
                </CardDate>
              </Row>
              <CardTitle>{post.title}</CardTitle>
            </Card>
          ))}
        </Column>
      </Container>
    </SubtractSection>
  );
};

export default Skills;

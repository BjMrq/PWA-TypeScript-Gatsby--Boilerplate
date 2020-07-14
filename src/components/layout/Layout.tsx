import { graphql, useStaticQuery } from 'gatsby';
import PropTypes, { InferProps } from 'prop-types';
import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { mainColor } from 'styles/colors';
import { bodyFont } from 'styles/fonts';
import { scrollbar } from 'styles/scrollbar';
import NavBar from './navBar/NavBar';
import PageHeader from './PageHeader';

const GlobalStyle = createGlobalStyle`
  html {
    width: 100%;
    height: 100%;
  }

  body {
    ${scrollbar}
    margin:0;
    padding:0;
    width: 100%;
    padding-bottom: 20px;
    overflow-x: hidden;
    background-color: white;
  }

  a {
    text-decoration: none;
  }

  input {
    padding: 10px 10px;
    border-radius: 5px;
    border: 1px solid ${mainColor};
    outline: none
  }
`;

const Container = styled.div`
  margin: 0 8vw;
  font-family: ${bodyFont};
`;

export default function Layout({ children, header }: InferProps<typeof Layout.propTypes>) {

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <GlobalStyle />
      <NavBar siteTitle={data.site.siteMetadata.title} />
      <Container>
        <PageHeader text={header} />
        {children}
      </Container>
    </>
  );

}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  header  : PropTypes.string
};

Layout.defaultProps = {
  header: ''
};

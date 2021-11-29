import React, { useEffect, useRef, Suspense, useMemo } from "react";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";
import FontStyles from "../../components/FontStyles";
import MEDIA from "../../helpers/mediaTemplates";
//import blah from "../../../content/projects/3dgenome/images/3d";
// import Header from "../header/header";

type ProjectData = {
  title: string;
  content: string;
  subtitleData: { date: string; skills: string };
  headerImage: string;
  slug: string;
};

const Subtitle = ({
  date,
  skills,
}: ProjectData["subtitleData"]): JSX.Element => {
  return (
    <div>
      <h4 style={{ fontFamily: "Fann Grotesque Thin" }}>{date}</h4>
      <h4 style={{ fontFamily: "Fann Grotesque Thin" }}>{skills}</h4>
    </div>
  );
};

const ProjectBodyStyled = styled.div`
  p {
    font-family: "Georgia Pro Regular";
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Fann Grotesque SemiBold";
  }

  .question {
    font-family: "Fann Grotesque SemiBold Italic";
  }
  .question span {
    text-decoration: underline;
  }
  img {
    width: 100%;
  }

  .half > img {
    width: 49%;
    height: auto;
    ${MEDIA.TABLET`
    width: 100%;
  `}
  }
  .half > iframe {
    width: 49%;
    ${MEDIA.TABLET`
    width: 100%;
  `}
  }

  figure {
    display: block;
    ${MEDIA.TABLET`
    display: block;
  `};
  }

  figure figcaption {
    font-family: "Fann Grotesque Thin Italic";
  }

  li {
    font-family: "Georgia Pro Regular";

    margin-bottom: 0.5rem;
  }

  blockquote {
    padding-left: 1.618em;
    padding-right: 1.618em;
    border-left: 6px solid #3498db;
  }
  blockquote p {
    font-family: "Georgia Pro Italic", "Segoe UI", Arial, sans-serif;

    font-size: 1rem;
    line-height: 1;
    margin-bottom: 24 px;
    margin-bottom: 1.5 rem;
  }
  blockquote p strong {
    font-family: "Georgia Pro Bold Italic";
  }
`;

const HeaderImageStyled = styled.img`
  width: 100%;
  border-radius: 10px;
`;

const ProjectBody = ({ bodyHtml }): JSX.Element => {
  return (
    <ProjectBodyStyled
      dangerouslySetInnerHTML={{ __html: bodyHtml.read() }}
    ></ProjectBodyStyled>
  );
};

function wrapPromise(promise) {
  let status = "pending";
  let result;
  let suspender = promise.then(
    (r) => {
      status = "success";
      result = r;
    },
    (e) => {
      status = "error";
      result = e;
    }
  );
  return {
    read() {
      if (status === "pending") {
        throw suspender;
      } else if (status === "error") {
        throw result;
      } else if (status === "success") {
        return result;
      }
    },
  };
}

const getProjectContent = async (path: string) => {
  const response = await fetch(path);
  return await response.text();
};
const Project = ({
  title,
  content,
  subtitleData,
  headerImage,
  slug,
}: ProjectData) => {
  console.log(title, content, subtitleData, headerImage, slug);

  const bodyContent = useMemo(
    () =>
      wrapPromise(getProjectContent(`/content/projects/${slug}/${content}`)),
    [slug, content]
  );
  return (
    <>
      <HeaderImageStyled
        src={`/content/projects/${slug}/images/${headerImage}`}
      />
      <h2 style={{ fontFamily: "Fann Grotesque SemiBold", fontSize: "2em" }}>
        {title}
      </h2>
      <Subtitle {...subtitleData} />
      <Suspense fallback={<>loading...</>}>
        <ProjectBody bodyHtml={bodyContent} />
      </Suspense>

      {/* <Header title="aprameya mysore" /> */}

      {/*
      //header image
      //title
      //subtitle
      //topic header
      //text
      //images

    */}
    </>
  );
};

export default Project;
// export const query = graphql`
//     query ProjectQuery {
//         projectsJson{
//           projects{
//           title
//           content }

//         }
//     }
// `

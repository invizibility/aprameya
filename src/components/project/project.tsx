import React, { useEffect, useRef, Suspense, useMemo } from "react";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";
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
      <h4>{date}</h4>
      <br />
      <h4>{skills}</h4>
    </div>
  );
};

const ProjectBodyStyled = styled.div`
  img {
    width: 100%;
  }

  .half > img {
    width: 49%;
  }

  figure {
    ${MEDIA.TABLET`
    display: block;
  `};
  }
`;

const HeaderImageStyled = styled.img`
  width: 100%;
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
      <h2>{title}</h2>
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

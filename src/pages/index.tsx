import Footer from 'components/organisms/footer';
import { AboutPage } from 'components/templates/aboutPage';
import { CareerPlanPage } from 'components/templates/careerPlanPage';
import { EducationPage } from 'components/templates/educationPage';
import { ExperiencePage } from 'components/templates/experiencePage';
import { HomePage } from 'components/templates/homePage';
import { ProjectPage } from 'components/templates/projectPage';
import { AppContext } from 'contexts/appContext';
import { NextPage } from 'next';
import Head from 'next/head';
import { useContext, useEffect } from 'react';
import { UserInfo } from 'types';

type Props = {
  data: UserInfo;
};

const Page: NextPage<Props> = ({ data }) => {
  const { setUserInfo } = useContext(AppContext);
  const title = `${data.englishName} PortFolio Website`;

  useEffect(() => {
    setUserInfo(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property='og:title' content={title} key='title' />
      </Head>
      <main>
        <HomePage />
        <AboutPage />
        <EducationPage />
        <ExperiencePage />
        <ProjectPage />
        <CareerPlanPage />
        <Footer />
      </main>
    </>
  );
};

export const getServerSideProps = async () => {
  const endPoint =
    process.env.NEXT_PUBLIC_STAGE === 'dev'
      ? process.env.NEXT_PUBLIC_API_DOMAIN_DEV
      : process.env.NEXT_PUBLIC_API_DOMAIN_PROD;
  const res = await fetch(`${endPoint}`);
  const data = await res.json();

  return { props: { data } };
};

export default Page;

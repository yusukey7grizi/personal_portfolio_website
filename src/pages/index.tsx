import { AboutPage } from 'components/templates/aboutPage';
import { EducationPage } from 'components/templates/educationPage';
import { ExperiencePage } from 'components/templates/experiencePage';
import { ProjectPage } from 'components/templates/projectPage';
import { NextPage } from 'next';

const Page: NextPage = () => {
  return (
    <>
      <AboutPage />
      <EducationPage />
      <ExperiencePage />
      <ProjectPage />
    </>
  );
};

export default Page;

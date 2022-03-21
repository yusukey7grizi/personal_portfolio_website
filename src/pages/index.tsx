import { AboutPage } from 'components/templates/aboutPage';
import { EducationPage } from 'components/templates/educationPage';
import { ExperiencePage } from 'components/templates/experiencePage';
import { NextPage } from 'next';

const Page: NextPage = () => {
  return (
    <>
      <AboutPage />
      <EducationPage />
      <ExperiencePage />
    </>
  );
};

export default Page;

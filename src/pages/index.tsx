import { AboutPage } from 'components/templates/aboutPage';
import { EducationPage } from 'components/templates/educationPage';
import { NextPage } from 'next';

const Page: NextPage = () => {
  return (
    <>
      <AboutPage />
      <EducationPage />
    </>
  );
};

export default Page;

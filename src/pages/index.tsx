import Footer from 'components/organisms/footer';
import { AboutPage } from 'components/templates/aboutPage';
import { CareerPlanPage } from 'components/templates/careerPlanPage';
import { EducationPage } from 'components/templates/educationPage';
import { ExperiencePage } from 'components/templates/experiencePage';
import { HomePage } from 'components/templates/homePage';
import { ProjectPage } from 'components/templates/projectPage';
import { NextPage } from 'next';

const Page: NextPage = () => {
  return (
    <>
      <HomePage />
      <AboutPage />
      <EducationPage />
      <ExperiencePage />
      <ProjectPage />
      <CareerPlanPage />
      <Footer />
    </>
  );
};

export default Page;

import Footer from 'components/organisms/footer';
import { AboutPage } from 'components/templates/aboutPage';
import { CareerPlanPage } from 'components/templates/careerPlanPage';
import { EducationPage } from 'components/templates/educationPage';
import { ExperiencePage } from 'components/templates/experiencePage';
import { HomePage } from 'components/templates/homePage';
import { ProjectPage } from 'components/templates/projectPage';
import { collection, getDocs } from 'firebase/firestore/lite';
import { db } from 'firebaseConfig';
import { NextPage } from 'next';
import { useEffect, useState } from 'react';

const Page: NextPage = () => {
  const [dataSet, setDataSet] = useState<any>(null);

  const runFunction = async () => {
    const citiesCol = await collection(db, 'user');
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map((doc) => doc.data());
    setDataSet(cityList);
  };

  useEffect(() => {
    runFunction();
  }, []);

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

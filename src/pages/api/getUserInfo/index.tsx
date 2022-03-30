import { collection, getDocs } from 'firebase/firestore';
import { db } from 'firebaseConfig';
import type { NextApiRequest, NextApiResponse } from 'next';

const fetchUserInfo = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const aboutRef = collection(db, 'about');
    const aboutSnap = await getDocs(aboutRef);
    const aboutData = aboutSnap.docs.map((doc) => doc.data());
    const {
      userId,
      englishName,
      japaneseName,
      school,
      yearOfGraduation,
      gmail,
      githubUserName,
      introduction,
      skills,
      degrees,
      achievements,
      careerPlan,
      goal,
    } = aboutData[0];

    const educationRef = collection(db, 'education');
    const educationSnap = await getDocs(educationRef);
    const educationData = educationSnap.docs.map((doc) => doc.data());

    const experienceRef = collection(db, 'experience');
    const experienceSnap = await getDocs(experienceRef);
    const experienceData = experienceSnap.docs.map((doc) => doc.data());

    const projectRef = collection(db, 'project');
    const projectSnap = await getDocs(projectRef);
    const projectData = projectSnap.docs.map((doc) => doc.data());

    res.status(200).json(
      JSON.stringify({
        userId,
        englishName: englishName,
        japaneseName: japaneseName,
        school: school,
        yearOfGraduation: yearOfGraduation,
        gmail: gmail,
        githubUserName: githubUserName,
        introduction: introduction,
        skills: skills,
        degrees: degrees,
        achievements: achievements,
        education: educationData,
        experience: experienceData,
        project: projectData,
        careerPlan: careerPlan,
        goal: goal,
      })
    );
  } catch {
    res.status(500).send('Internal Server Error');
  }
};

export default fetchUserInfo;

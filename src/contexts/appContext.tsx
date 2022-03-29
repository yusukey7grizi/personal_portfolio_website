/* eslint-disable unused-imports/no-unused-vars */
import React, { createContext, FC, RefObject, useRef, useState } from 'react';
import { Experience, Project, UserInfo } from 'types';

type Maybe<T> = null | T;

type AppState = {
  homePageRef: Maybe<RefObject<HTMLDivElement>>;
  aboutPageRef: Maybe<RefObject<HTMLDivElement>>;
  educationPageRef: Maybe<RefObject<HTMLDivElement>>;
  experiencePageRef: Maybe<RefObject<HTMLDivElement>>;
  projectPageRef: Maybe<RefObject<HTMLDivElement>>;
  careerPlanPageRef: Maybe<RefObject<HTMLDivElement>>;
  userInfo: UserInfo;
  setUserInfo: (input: UserInfo) => void;
  experienceModalInfo: Maybe<Experience>;
  setExperienceModalInfo: (input: Maybe<Experience>) => void;
  projectModalInfo: Maybe<Project>;
  setProjectModalInfo: (input: Maybe<Project>) => void;
};

export const AppContext = createContext({} as AppState);

const AppProvider: FC = ({ children }) => {
  const homePageRef = useRef<Maybe<HTMLDivElement>>(null);
  const aboutPageRef = useRef<Maybe<HTMLDivElement>>(null);
  const educationPageRef = useRef<Maybe<HTMLDivElement>>(null);
  const experiencePageRef = useRef<Maybe<HTMLDivElement>>(null);
  const projectPageRef = useRef<Maybe<HTMLDivElement>>(null);
  const careerPlanPageRef = useRef<Maybe<HTMLDivElement>>(null);

  const [userInfo, setUserInfo] = useState<UserInfo>({} as UserInfo);
  const [experienceModalInfo, setExperienceModalInfo] =
    useState<Maybe<Experience>>(null);
  const [projectModalInfo, setProjectModalInfo] =
    useState<Maybe<Project>>(null);
  return (
    <AppContext.Provider
      value={{
        homePageRef: homePageRef,
        aboutPageRef: aboutPageRef,
        educationPageRef: educationPageRef,
        experiencePageRef: experiencePageRef,
        projectPageRef: projectPageRef,
        careerPlanPageRef: careerPlanPageRef,
        userInfo: userInfo,
        setUserInfo: setUserInfo,
        experienceModalInfo: experienceModalInfo,
        setExperienceModalInfo: setExperienceModalInfo,
        projectModalInfo: projectModalInfo,
        setProjectModalInfo: setProjectModalInfo,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider };

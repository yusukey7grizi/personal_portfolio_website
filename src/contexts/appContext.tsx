import React, { createContext, FC, RefObject, useRef } from 'react';

type Maybe<T> = null | T;

type AppState = {
  homePageRef: Maybe<RefObject<HTMLDivElement>>;
  aboutPageRef: Maybe<RefObject<HTMLDivElement>>;
  educationPageRef: Maybe<RefObject<HTMLDivElement>>;
  experiencePageRef: Maybe<RefObject<HTMLDivElement>>;
  projectPageRef: Maybe<RefObject<HTMLDivElement>>;
  careerPlanPageRef: Maybe<RefObject<HTMLDivElement>>;
};

export const AppContext = createContext({} as AppState);

const AppProvider: FC = ({ children }) => {
  const homePageRef = useRef<Maybe<HTMLDivElement>>(null);
  const aboutPageRef = useRef<Maybe<HTMLDivElement>>(null);
  const educationPageRef = useRef<Maybe<HTMLDivElement>>(null);
  const experiencePageRef = useRef<Maybe<HTMLDivElement>>(null);
  const projectPageRef = useRef<Maybe<HTMLDivElement>>(null);
  const careerPlanPageRef = useRef<Maybe<HTMLDivElement>>(null);

  return (
    <AppContext.Provider
      value={{
        homePageRef: homePageRef,
        aboutPageRef: aboutPageRef,
        educationPageRef: educationPageRef,
        experiencePageRef: experiencePageRef,
        projectPageRef: projectPageRef,
        careerPlanPageRef: careerPlanPageRef,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider };

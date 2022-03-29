import { Modal, styled } from '@mui/material';
import { FlexBox, H1, UnderLine, WhiteWrapper } from 'components/atoms';
import React, { FC, useContext, useEffect, useState } from 'react';
import { ClickableCard, ProjectModalCard } from 'components/molecules';
import { AppContext } from 'contexts/appContext';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import { AppearFromTopVariants } from 'components/constants';

const ProjectPage: FC = () => {
  const { projectPageRef, userInfo, setProjectModalInfo } =
    useContext(AppContext);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const controls = useAnimation();
  const [ref, inView] = useInView();

  const handleOpenModal = (id: number) => {
    const data = userInfo.project.find((data) => {
      return data.id === id;
    });

    if (data) {
      setProjectModalInfo(data);
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (inView) {
      controls.start('animate');
    } else {
      controls.start('initial');
    }
  }, [controls, inView]);

  return (
    <WhiteWrapper ref={projectPageRef}>
      <H1>PROJECTS</H1>
      <UnderLine />
      <Modal keepMounted open={isModalOpen} onClose={handleCloseModal}>
        <ProjectModalCard handleCloseModal={handleCloseModal} />
      </Modal>
      <ExtendedFlexBox
        ref={ref}
        variants={AppearFromTopVariants}
        initial='initial'
        animate={controls}
      >
        {userInfo.project?.map(({ id, title }) => {
          return (
            <ClickableCard
              key={id}
              handleOpenModal={() => {
                handleOpenModal(id);
              }}
              title={title}
            />
          );
        })}
      </ExtendedFlexBox>
    </WhiteWrapper>
  );
};

const ExtendedFlexBox = styled(FlexBox)({
  flexWrap: 'wrap',
  justifyContent: 'center',
});

export { ProjectPage };

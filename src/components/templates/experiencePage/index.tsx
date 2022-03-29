import { Modal, styled } from '@mui/material';
import { FlexBox, H1, UnderLine, WhiteSmokeWrapper } from 'components/atoms';
import React, {
  FC,
  SyntheticEvent,
  useContext,
  useEffect,
  useState,
} from 'react';
import { ClickableCard, ExperienceModalCard } from 'components/molecules';
import { TabList } from 'components/organisms';
import { AppContext } from 'contexts/appContext';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { AppearFromTopVariants } from 'components/constants';

const ExperiencePage: FC = () => {
  const { experiencePageRef, userInfo, setExperienceModalInfo } =
    useContext(AppContext);
  const { experience } = userInfo;

  const [tabValue, setTabValue] = useState<string>('ALL');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const controls = useAnimation();
  const [ref, inView] = useInView();

  const filteredExperienceList = experience?.filter((data) => {
    if (tabValue === 'ALL') {
      return tabValue;
    }
    return data.type === tabValue;
  });

  const handleOpenModal = (id: number) => {
    const data = experience.find((data) => {
      return data.id === id;
    });

    if (data) {
      setExperienceModalInfo(data);
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleChangeTab = (
    _: SyntheticEvent<Element, Event>,
    newValue: string
  ) => {
    setTabValue(newValue);
  };

  useEffect(() => {
    if (inView) {
      controls.start('animate');
    } else {
      controls.start('initial');
    }
  }, [controls, inView]);

  return (
    <WhiteSmokeWrapper ref={experiencePageRef}>
      <H1>EXPERIENCES</H1>
      <UnderLine />
      <TabList tabValue={tabValue} handleChangeTab={handleChangeTab} />
      <Modal keepMounted open={isModalOpen} onClose={handleCloseModal}>
        <ExperienceModalCard handleCloseModal={handleCloseModal} />
      </Modal>
      <ExtendedFlexBox
        ref={ref}
        variants={AppearFromTopVariants}
        initial='initial'
        animate={controls}
      >
        {filteredExperienceList?.map(({ id, title, type }) => {
          return (
            <ClickableCard
              title={title}
              type={type}
              key={id}
              handleOpenModal={() => {
                handleOpenModal(id);
              }}
            />
          );
        })}
      </ExtendedFlexBox>
    </WhiteSmokeWrapper>
  );
};

const ExtendedFlexBox = styled(FlexBox)({
  flexWrap: 'wrap',
  justifyContent: 'center',
});

export { ExperiencePage };

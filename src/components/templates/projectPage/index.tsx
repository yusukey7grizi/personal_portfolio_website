import { Modal, styled } from '@mui/material';
import { FlexBox, H1, UnderLine, WhiteWrapper } from 'components/atoms';
import React, {
  FC,
  SyntheticEvent,
  useContext,
  useEffect,
  useState,
} from 'react';
import Profile from 'images/269786281_651956815932463_117589646252707614_n.jpg';
import { ClickableCard, DescriptionCard } from 'components/molecules';
import { TabList } from 'components/organisms';
import { AppContext } from 'contexts/appContext';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';

const ProjectPage: FC = () => {
  const { projectPageRef } = useContext(AppContext);

  const [tabValue, setTabValue] = useState<string>('ALL');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const controls = useAnimation();
  const [ref, inView] = useInView();

  const firstVariants = {
    initial: {
      opacity: 0,
      y: -100,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.5,
      },
    },
  };

  const dataList = [
    {
      id: 1,
      title: 'お迎えシスター',
      genre: 'チーム開発',
      period: '2020/11 - 2021/08',
      role: '今年の春学期から休学をしており、独学でHTML, CSS, Javascript, React, React Nativeを勉強しています。将来はエンジニアを目指しており、インターンシップでは、Webやスマホアプリの開発に携わりたいと考えております。',
      challenge:
        '今年の春学期から休学をしており、独学でHTML, CSS, Javascript, React, React Nativeを勉強しています。将来はエンジニアを目指しており、インターンシップでは、Webやスマホアプリの開発に携わりたいと考えております。',
      hardship:
        '今年の春学期から休学をしており、独学でHTML, CSS, Javascript, React, React Nativeを勉強しています。将来はエンジニアを目指しており、インターンシップでは、Webやスマホアプリの開発に携わりたいと考えております。',
    },
    {
      id: 2,
      title: 'Gap',
      genre: '個人開発',
      period: '2019/04 - 2021/12',
      role: '今年の春学期から休学をしており、独学でHTML, CSS, Javascript, React, React Nativeを勉強しています。将来はエンジニアを目指しており、インターンシップでは、Webやスマホアプリの開発に携わりたいと考えております。',
      challenge:
        '今年の春学期から休学をしており、独学でHTML, CSS, Javascript, React, React Nativeを勉強しています。将来はエンジニアを目指しており、インターンシップでは、Webやスマホアプリの開発に携わりたいと考えております。',
      hardship:
        '今年の春学期から休学をしており、独学でHTML, CSS, Javascript, React, React Nativeを勉強しています。将来はエンジニアを目指しており、インターンシップでは、Webやスマホアプリの開発に携わりたいと考えております。',
    },
    {
      id: 3,
      title: '株式会社Viviane',
      genre: 'チーム開発',
      period: '2021/08 - 現在',
      role: '今年の春学期から休学をしており、独学でHTML, CSS, Javascript, React, React Nativeを勉強しています。将来はエンジニアを目指しており、インターンシップでは、Webやスマホアプリの開発に携わりたいと考えております。',
      challenge:
        '今年の春学期から休学をしており、独学でHTML, CSS, Javascript, React, React Nativeを勉強しています。将来はエンジニアを目指しており、インターンシップでは、Webやスマホアプリの開発に携わりたいと考えております。',
      hardship:
        '今年の春学期から休学をしており、独学でHTML, CSS, Javascript, React, React Nativeを勉強しています。将来はエンジニアを目指しており、インターンシップでは、Webやスマホアプリの開発に携わりたいと考えております。',
    },
  ];

  const filteredDataList = dataList.filter((data) => {
    if (tabValue === 'ALL') {
      return tabValue;
    }
    return data.genre === tabValue;
  });

  const handleOpenModal = () => {
    setIsModalOpen(true);
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
    <WhiteWrapper ref={projectPageRef}>
      <H1>PROJECTS</H1>
      <UnderLine />
      <TabList
        tabValue={tabValue}
        useCase='projects'
        handleChangeTab={handleChangeTab}
      />
      <Modal keepMounted open={isModalOpen} onClose={handleCloseModal}>
        <DescriptionCard handleCloseModal={handleCloseModal} />
      </Modal>
      <ExtendedFlexBox
        ref={ref}
        variants={firstVariants}
        animate={controls}
        initial='initial'
      >
        {filteredDataList.map((data) => {
          return (
            <ClickableCard
              key={data.id}
              handleOpenModal={handleOpenModal}
              src={Profile}
              alt={data.title}
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

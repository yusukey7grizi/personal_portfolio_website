import { Modal, styled } from '@mui/material';
import { FlexBox, H1, UnderLine, WhiteSmokeWrapper } from 'components/atoms';
import Image from 'next/image';
import React, { FC, SyntheticEvent, useState } from 'react';
import Profile from 'images/269786281_651956815932463_117589646252707614_n.jpg';
import { Colors } from 'components/constants';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import { DescriptionCard, SquareCard } from 'components/molecules';
import { TabList } from 'components/organisms';

const ExperiencePage: FC = () => {
  const [tabValue, setTabValue] = useState<string>('ALL');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const dataList = [
    {
      id: 1,
      title: 'お迎えシスター',
      genre: 'アルバイト',
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
      genre: 'アルバイト',
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
      genre: 'インターン',
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

  const handleChangeTab = (
    _: SyntheticEvent<Element, Event>,
    newValue: string
  ) => {
    setTabValue(newValue);
  };

  return (
    <WhiteSmokeWrapper>
      <H1>EXPERIENCES</H1>
      <UnderLine />
      <TabList
        tabValue={tabValue}
        useCase='experience'
        handleChangeTab={handleChangeTab}
      />

      <ExtendedFlexBox>
        {filteredDataList.map((data) => {
          return (
            <SquareCard key={data.id} handleOpenModal={handleOpenModal}>
              <Image src={Profile} alt='picture' layout='fill' />
            </SquareCard>
          );
        })}
        <Modal
          keepMounted
          open={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
          }}
        >
          <DescriptionCard />
        </Modal>
      </ExtendedFlexBox>
    </WhiteSmokeWrapper>
  );
};

const ExtendedFlexBox = styled(FlexBox)({
  flexWrap: 'wrap',
  justifyContent: 'center',
});

const StyledSchoolOutlinedIcon = styled(SchoolOutlinedIcon)({
  width: '6.25rem',
  height: '6.25rem',
  color: Colors.whiteSmoke,
});

export { ExperiencePage };
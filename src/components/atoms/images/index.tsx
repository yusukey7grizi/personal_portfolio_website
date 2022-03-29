import Image from 'next/image';
import React, { FC } from 'react';
import GapImage from 'images/20211218_215146.jpg';
import OmusisterImage from 'images/20210726_173229.jpg';
import MshareImage from 'images/スクリーンショット 2022-03-29 9.44.12.png';
import VivianeImage from 'images/スクリーンショット 2022-03-29 9.47.14.png';

type CardImageBaseProps = { src: any; alt: string };

type CardImageProps = {
  title: string;
};

const CardImageBase: FC<CardImageBaseProps> = ({ src, alt }) => {
  return <Image src={src} alt={alt} width={300} height={300} />;
};

const CardImage: FC<CardImageProps> = ({ title }) => {
  switch (title) {
    case 'GAP':
      return <CardImageBase src={GapImage} alt={title} />;
    case 'お迎えシスター':
      return <CardImageBase src={OmusisterImage} alt={title} />;
    case 'MSHARE':
      return <CardImageBase src={MshareImage} alt={title} />;
    default:
      return <CardImageBase src={VivianeImage} alt={title} />;
  }
};

export { CardImage };

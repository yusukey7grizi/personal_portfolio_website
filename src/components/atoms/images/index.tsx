import Image from 'next/image';
import React, { FC } from 'react';

type Props = { src: any; alt: string };

const CardImage: FC<Props> = ({ src, alt }) => {
  return <Image src={src} alt={alt} width={300} height={300} />;
};

export { CardImage };

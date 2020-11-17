import React from 'react';

type Props = {
  url: string,
};

const Picture = ({ url }: Props) => {
  return (
    <img src={url} className="picture" alt="" />
  );
}

export default Picture;

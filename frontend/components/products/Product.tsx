import { FC } from 'react';

type Props = {
  name: string;
};

const Product: FC<Props> = ({ name }) => {
  return (
    <div>
      {name}
    </div>
  );
};

export default Product;

// this default image should be changed when the graphic is done
import DefaultImage from 'assets/img/Loginlogo.svg';
import Img from './Image.styled';

type IImage = {
  src: string;
  alt: string;
};

const Image = ({ src = DefaultImage, alt = '' }: IImage) => <Img src={src} alt={alt} />;

export default Image;

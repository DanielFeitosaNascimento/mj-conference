import Image from 'next/image'

const Logo = () => {
  return (
    <Image width={140} height={90} src="/logo.png" alt="logo" />
  );
};

export default Logo;
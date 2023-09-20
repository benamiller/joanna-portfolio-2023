import Button from './Button';

const Header = () => {
  return (
    <>
    <nav className="flex justify-center p-5">
      <Button text="Social Media" />
      <Button text="Email Marketing" />
      <Button text="About Me" />
    </nav>
    </>
  );
}

export default Header;

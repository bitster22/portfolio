import { MdWavingHand } from "react-icons/md";
export const Footer = () => {
  return (
    <footer className="bg-gray-950 font-inter sticky top-[100vh]">
      <div className=" flex items-center gap-4 justify-center p-4">
        <MdWavingHand color="yellow" />
        <span className=" text-gray-200">
          Obrigado por acessar meu Portfolio!
        </span>
      </div>
    </footer>
  );
};

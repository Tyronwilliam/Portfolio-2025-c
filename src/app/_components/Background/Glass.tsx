type Props = {
  children: React.ReactNode;
};
export const Glass = ({ children }: Props) => {
  return (
    <div className="glass  relative w-full h-full md:max-h-[898px] overflow-hidden  max-w-[1300px] mx-auto z-50 flex flex-col items-center justify-center p-6 md:p-4  lg:p-5 ">
      {children}
    </div>
  );
};

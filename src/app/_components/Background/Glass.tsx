type Props = {
  children: React.ReactNode;
};
export const Glass = ({ children }: Props) => {
  return (
    <div className="w-full relative  mx-auto z-50 flex flex-col p-6 glass lg:p-5 items-center justify-center max-w-[1300px] ">
      {children}
    </div>
  );
};

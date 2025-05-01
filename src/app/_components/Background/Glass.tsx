type Props = {
  children: React.ReactNode;
};
export const Glass = ({ children }: Props) => {
  return (
    <div className="glass relative w-full max-w-[1300px] mx-auto z-50 flex flex-col items-center justify-center p-6 md:p-4  lg:p-5   lg:max-h-[99.9%]">
      {children}
    </div>
  );
};

type Props = {
  children: React.ReactNode;
};
export const Glass = ({ children }: Props) => {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center z-50 max-w-[1300px] mx-auto">
      <div className="relative z-50 flex flex-col p-6 md:p-14 w-full h-full glass md:h-screen">
        <div className="second-a absolute z-10 w-[115%] h-[103%]  md:w-[105%] md:h-[105%]" />
        {children}
      </div>
    </section>
  );
};

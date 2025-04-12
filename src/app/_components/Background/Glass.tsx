type Props = {
  children: React.ReactNode;
};
export const Glass = ({ children }: Props) => {
  return (
    <section className="w-full h-full flex flex-col items-center justify-center z-50  max-w-[1300px] mx-auto">
      <div className="relative z-50 flex flex-col p-14 w-full h-full glass">
        {" "}
        <div className="second-a max-w-[1330px]"></div>
        {children}
      </div>
    </section>
  );
};

type Props = {
  children: React.ReactNode
}
export const Glass = ({ children }: Props) => {
  return (
    <section className="w-full md:h-full flex flex-col items-center justify-center z-50 max-w-[1300px] mx-auto">
      <div className="relative w-full  z-50 flex flex-col p-6 glass lg:p-5 md:h-[99.9%]    ">
        <div className="second-a absolute z-10 w-[115%] h-[103%]  md:w-[105%] md:h-[105%]" />
        {children}
      </div>
    </section>
  )
}

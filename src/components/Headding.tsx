type HeaddingProps = {
  title?: string;
  children: React.ReactNode;
};
export default function Headding({ children }: HeaddingProps) {
  return ( 
    <>
      {children}
    </>
  );
}

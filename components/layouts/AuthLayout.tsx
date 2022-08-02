import { Box } from "@mui/system";
import Head from "next/head";
import { FC, ReactNode } from "react";
interface Props {
  title: string;
  children: ReactNode;
}
export const AuthLayout: FC<Props> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <main>
        <Box
          display={"flex"}
          justifyContent="center"
          height="calc(100vh - 200px"
        >
          {children}
        </Box>
      </main>
    </>
  );
};

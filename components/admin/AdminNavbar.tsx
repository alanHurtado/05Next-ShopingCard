import { AppBar, Link, Toolbar, Typography, Box, Button } from "@mui/material";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { UiContext } from "../../context/ui/UiContext";
import { CartContext } from "../../context/cart/CartContext";

export const AdminNavbar = () => {
  const { toggleSideMenu } = useContext(UiContext);
  const { numberOfItems } = useContext(CartContext);
  const { asPath, push } = useRouter();

  const [searchTerm, setSearchTerm] = useState("");
  const [openSearch, setOpenSearch] = useState(false);
  const navigateTo = (url: string) => {
    push(url);
  };
  const onSearchTerm = () => {
    if (searchTerm.trim().length === 0) {
      setOpenSearch(false);
      return;
    }

    navigateTo(`/search/${searchTerm}`);
  };

  return (
    <AppBar>
      <Toolbar>
        <NextLink href="/" passHref>
          <Link display="flex" alignItems="center">
            <Typography variant="h6">Teslo</Typography>
            <Typography sx={{ ml: 0.5 }}>Shop</Typography>
          </Link>
        </NextLink>
        <Box flex={1} />
        <Button onClick={toggleSideMenu}>Menú</Button>
      </Toolbar>
    </AppBar>
  );
};

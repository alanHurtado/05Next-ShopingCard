import {
  SearchOffOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import {
  AppBar,
  Link,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  Badge,
  Input,
  InputAdornment,
} from "@mui/material";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { UiContext } from "../../context/ui/UiContext";
import { CartContext } from "../../context/cart/CartContext";

export const Navbar = () => {
  const { toogleSideMenu } = useContext(UiContext);
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
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <NextLink href="/category/men" passHref>
            <Link>
              <Button
                color={`${asPath === "/category/men" ? "primary" : "info"}`}
              >
                {" "}
                Hombres{" "}
              </Button>
            </Link>
          </NextLink>
          <NextLink href="/category/women" passHref>
            <Link>
              <Button
                color={`${asPath === "/category/women" ? "primary" : "info"}`}
              >
                {" "}
                Mujeres{" "}
              </Button>
            </Link>
          </NextLink>
          <NextLink href="/category/kid" passHref>
            <Link>
              <Button
                color={`${asPath === "/category/kid" ? "primary" : "info"}`}
              >
                {" "}
                Niños{" "}
              </Button>
            </Link>
          </NextLink>
        </Box>
        <Box flex={1} />
        {/* Pantallas grandes */}
        {openSearch ? (
          <Input
            sx={{ display: { xs: "none", sm: "flex" } }}
            autoFocus={true}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={(e) => (e.key === "Enter" ? onSearchTerm() : null)}
            type="text"
            placeholder="Buscar..."
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={onSearchTerm}>
                  <SearchOutlined />
                </IconButton>
              </InputAdornment>
            }
          />
        ) : (
          <IconButton
            sx={{ display: { xs: "none", sm: "flex" } }}
            onClick={() => setOpenSearch(true)}
          >
            <SearchOffOutlined />
          </IconButton>
        )}
        {/* Pantallas Pequeñas */}
        <IconButton
          sx={{ display: { xs: "flex", sm: "none" } }}
          onClick={toogleSideMenu}
        >
          <SearchOffOutlined />
        </IconButton>
        <NextLink href="/cart" passHref>
          <Link>
            <IconButton>
              <Badge
                badgeContent={numberOfItems > 9 ? "+9" : numberOfItems}
                color="secondary"
              >
                <ShoppingCartOutlined />
              </Badge>
            </IconButton>
          </Link>
        </NextLink>
        <Button onClick={toogleSideMenu}>Menú</Button>
      </Toolbar>
    </AppBar>
  );
};

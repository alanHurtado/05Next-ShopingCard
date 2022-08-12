import NextLink from "next/link";
import { Box, Button, Chip, Grid, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from "../../components/layouts";
import { useForm } from "react-hook-form";
import { validations } from "../../utils";
import { tesloApi } from "../../api";
import { ErrorOutline } from "@mui/icons-material";
import { useState, useContext } from "react";
import { AuthContext } from "../../context";
import { useRouter } from "next/router";

interface FormData {
  email: string;
  password: string;
}

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const [showError, setShowError] = useState(false);
  const { loginUser } = useContext(AuthContext);
  const router = useRouter();
  const onLoginUser = async ({ email, password }: FormData) => {
    setShowError(false);
    const isValidLogin = await loginUser(email, password);
    if (!isValidLogin) {
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
      console.log("Error en las credenciales");
      return;
    }

    // Todo: navegar a la ultima pantalla autorizada caso contrario home
    router.replace("/");
  };
  return (
    <AuthLayout title="Ingresar">
      <form onSubmit={handleSubmit(onLoginUser)} noValidate>
        <Box sx={{ width: 350, padding: "10px 20px" }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h1" component={"h1"}>
                Iniciar Sesión
              </Typography>
              {showError && (
                <Chip
                  label="No reconocemos ese usuario/contraseña"
                  color="error"
                  icon={<ErrorOutline />}
                  className="fadeInd"
                />
              )}
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="email"
                label="Correo"
                variant="filled"
                fullWidth
                {...register("email", {
                  required: "Este campo es requerido",
                  validate: validations.isEmail,
                })}
                error={!!errors.email}
                helperText={errors.email?.message}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Contraseña"
                type="password"
                variant="filled"
                fullWidth
                {...register("password")}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                color="secondary"
                fullWidth
                className="circular-btn"
                size="large"
              >
                Ingresar
              </Button>
            </Grid>
            <Grid item xs={12} display="flex" justifyContent={"end"}>
              <NextLink href="/auth/register" passHref>
                <Link underline="always"> ¿No tienes Cuenta? </Link>
              </NextLink>
            </Grid>
          </Grid>
        </Box>
      </form>
    </AuthLayout>
  );
};

export default LoginPage;

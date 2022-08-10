import { Box, Button } from "@mui/material";
import { FC } from "react";
import { IValidSizes } from "../../interfaces";
import { ISize } from "../../interfaces/cart";

interface Props {
  selectedSize?: IValidSizes;
  sizes: IValidSizes[];
  onSelectedSize: (size: ISize) => void;
}
export const SizeSelector: FC<Props> = ({
  selectedSize,
  sizes,
  onSelectedSize,
}) => {
  return (
    <Box>
      {sizes.map((size) => (
        <Button
          key={size}
          size="small"
          color={selectedSize === size ? "primary" : "info"}
          onClick={() => onSelectedSize(size)}
        >
          {size}
        </Button>
      ))}
    </Box>
  );
};

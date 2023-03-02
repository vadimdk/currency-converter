import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { FormHelperText } from "@mui/material";

interface SelProps {
  selectOnChange: (e: SelectChangeEvent) => void;
  value: string;
  error?: string;
}

const CurrencySelect = ({ selectOnChange, value, error }: SelProps) => {
  const handleChange = (event: SelectChangeEvent) => {
    selectOnChange(event);
  };

  return (
    <div>
      <FormControl
        variant="standard"
        sx={{ m: 2, minWidth: 100 }}
        error={!!error}
      >
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={value}
          onChange={handleChange}
          label=""
          sx={{ color: error ? "#d32f2f" : "black" }}
        >
          <MenuItem value={"USD"}>USD</MenuItem>
          <MenuItem value={"EUR"}>EUR</MenuItem>
          <MenuItem value={"UAH"}>UAH</MenuItem>
          <MenuItem value={"BTC"}>BTC</MenuItem>
        </Select>
        <FormHelperText>{error}</FormHelperText>
      </FormControl>
    </div>
  );
};

export default CurrencySelect;

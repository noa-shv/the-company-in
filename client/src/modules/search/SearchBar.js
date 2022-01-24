import Toolbar from "@mui/material/Toolbar";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";

function SearchBar({domain, setDomain, getCompanies}) {
    return(
        <Toolbar
            color="#578707"
            sx={{
                backgroundColor: '#f7f7f7',
            }}>
            <TextField
                size="small"
                placeholder="search..."
                value={domain}
                onChange={(event)=>{setDomain(event.target.value)}}
                InputProps={{
                    endAdornment:
                        <InputAdornment position="end">
                            <SearchIcon/>
                        </InputAdornment>,
                }}
            >
            </TextField>
            <Button onClick={getCompanies}>search</Button>
        </Toolbar>
    );
}

export default SearchBar;

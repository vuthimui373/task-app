import { createTheme , ThemeOptions} from "@mui/material";

const customTheme:ThemeOptions= createTheme({
        palette: {
        mode: 'dark',
        primary:{  // Màu chủ đạo
            main:'#0000',  // màu chính cho tp sử dụng primary
            light: '#e3f2fd',  // hover
            contrastText: '#ffff',  // màu chữ
        },
        background:{
            paper:'#121212',
            default:'#121212'
        },
    },
});
export default customTheme;
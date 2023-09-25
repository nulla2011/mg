import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
import { headers } from '@renderer/store/params';
import { useRecoilState } from 'recoil';

const defaultTheme = createTheme();
export default function Headers() {
  const [headersState, setHeadersState] = useRecoilState(headers);
  return (
    <Box sx={{ backgroundColor: defaultTheme.palette.grey[100] }}>
      <Container maxWidth="lg" sx={{ mt: 2, mb: 2, pt: 2, pb: 2 }}>
        <Typography>请求头</Typography>
        {headersState.map((header) => {
          return (
            <Box key={header}>
              <Typography>{header}</Typography>
            </Box>
          );
        })}
        <Button variant="contained">添加</Button>
      </Container>
    </Box>
  );
}

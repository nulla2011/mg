import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useRecoilState } from 'recoil';
import { options, url } from '@renderer/store/params';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { useState } from 'react';
import Button from '@mui/material/Button';

export default function Controls() {
  const [urlState, setUrlState] = useRecoilState(url);
  const [optionState, setOptionState] = useRecoilState(options);
  const [liveState, setLiveState] = useState(false);
  return (
    <Box>
      <Typography component="h2" gutterBottom>
        或者直接填写：
      </Typography>
      <FormGroup row>
        <FormControlLabel
          sx={{ userSelect: 'none' }}
          control={
            <Switch
              checked={liveState}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setLiveState(event.target.checked)
              }
            />
          }
          label="直播模式"
        />
      </FormGroup>
      <TextField
        variant="outlined"
        label="URL"
        fullWidth
        multiline
        size="small"
        margin="normal"
        value={urlState}
      />
      <div style={{ display: 'flex' }}>
        <TextField
          variant="outlined"
          label="Name"
          fullWidth
          multiline
          size="small"
          margin="normal"
          sx={{ flex: '1' }}
          value={optionState.output || ''}
        />
        <Button variant="contained" sx={{ mt: '16px', mb: '8px', height: '36.5px' }}>
          选择目录
        </Button>
      </div>
      <TextField
        variant="outlined"
        label="Cookies"
        fullWidth
        multiline
        size="small"
        margin="normal"
        value={optionState.cookies || ''}
      />
      <TextField
        variant="outlined"
        label="KEY"
        fullWidth
        multiline
        size="small"
        margin="normal"
        value={optionState.key || ''}
      />
      <Button variant="contained" sx={{ mt: '16px', mb: '8px' }}>
        开始下载
      </Button>
    </Box>
  );
}

import { useState } from 'react';
import { Box, Button, Modal, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { setToken, setUser } from '../store/actionCreators';

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
  display: 'flex',
  flexDirection: 'column',
};

export const AuthPage = () => {
  const navigate = useNavigate();

  const dispatch: Dispatch = useDispatch();

  const [open, setOpen] = useState<boolean>(true);
  const [value, setValue] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const handleAuth = () => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${value}`,
      },
    };

    fetch('https://api.themoviedb.org/3/account/account_id', options)
      .then((response) => response.json())
      .then((response) => {
        if (response?.id) {
          dispatch(setToken(value));
          dispatch(setUser({ id: response.id, username: response.username }));
          localStorage.setItem('tmdb-fr5-token', value);
          localStorage.setItem(
            'tmdb-fr5-user',
            JSON.stringify({ id: response.id, username: response.username }),
          );
          setOpen(false);
          navigate('/strada-films');
        } else {
          setError(response.status_message);
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <section>
      <Modal open={open}>
        <Box sx={{ ...style, width: 400 }}>
          <h2 id="parent-modal-title">Авторизация</h2>
          <TextField
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Введите токен TMDB"
            error={!!error}
            helperText={error}
          />
          <Button onClick={handleAuth}>Войти</Button>
        </Box>
      </Modal>
    </section>
  );
};
